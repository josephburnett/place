(ns ^:figwheel-hooks place.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom]))

(defn multiply [a b] (* a b))

(def instructions "Click on the correct description of the red number.")

(def places
  [{:key    :millions
    :text   "million"
    :times  1}
   {:key    :hundred-thousand
    :text   "thousand"
    :times  100}
   {:key    :ten-thousand
    :text   "thousand"
    :times  10}
   {:key    :thousand
    :text   "thousand"
    :times  1}
   {:key    :hundred
    :text   ""
    :times  100}
   {:key    :tens
    :text   ""
    :times  10}
   {:key    :ones
    :text   ""
    :times  1}
   {:key    :tenths
    :text   "tenth"
    :pluralize true
    :times  1}
   {:key    :hundredth
    :text   "hundredth"
    :pluralize true
    :times  1}
   {:key    :thousandth
    :text   "thousandth"
    :pluralize true
    :times  1}
   {:key    :ten-thousandth
    :text   "ten thousandth"
    :pluralize true
    :times  1}
   {:key    :hundred-thousandth
    :text   "hundred thousandth"
    :pluralize true
    :times  1}
   {:key    :millionth
    :text   "millionth"
    :pluralize true
    :times  1}])

(defn new-number []
  (for [_ (range 0 (count places))]
    (str (rand-int 10))))

(defn non-zero-indexes [number]
  (for [n number
        :when (not (= "0" n))]
    n))

(defn choose-indexes [correct-index]
  (let [incorrect-indexes (for [i (range 0 (count places))
                                :when #(not (= correct-index %))] i)]
    (->> (shuffle incorrect-indexes)
         (take 4)
         (cons correct-index)
         (shuffle))))
    
(defn new-problem []
  (let [number (new-number)
        indexes (non-zero-indexes number)]
    (if (< (count indexes) 1) (new-problem)
        (let [correct-index (js/parseInt (nth indexes (rand-int (count indexes))))
              problem-indexes (choose-indexes correct-index)]
          {:text instructions
           :number number
           :index correct-index
           :choices problem-indexes}))))

(defonce app-state (atom (new-problem)))

(defn get-app-element []
  (gdom/getElement "app"))

(defn render-digit [digit is-target]
  [:span {:style {:font-size "60px"
                  :color (if is-target "red" "black")}} digit " "])

(defn render-number [state]
  (let [integers (take 7 (:number state))
        fractions (drop 7 (:number state))]
    [:div
     (for [i (range 0 (count integers))]
       [render-digit (nth integers i) (= (:index state) i)])
     [:span {:style {:font-size "60px"
                     :color "black"}} ". "]
     (for [i (range 0 (count fractions))]
       [render-digit (nth fractions i) (= (:index state) (+ (count integers) i))])]))

(defn render-digit-words [digit place-index]
  (let [place (get places place-index)
        suffix (:text place)]
    [:div
     [:span {:style {:font-size "50px"
                     :color "blue"}}
      (cljs.pprint/cl-format nil "~R ~a~a"
                                 (* digit (:times place))
                                 (:text place)
                                 (if (and (:pluralize place)
                                          (> digit 1))
                                   "s" ""))]]))

(defn render-problem [state]
  (let [digit (js/parseInt (nth (:number state) (:index state)))]
    [:div
     [:h1 (:text state)]
     [:div
      [render-number state]
      (for [n (:choices state)]
        [render-digit-words digit n])]]))

(defn mount [el]
  (rdom/render [render-problem @app-state] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
