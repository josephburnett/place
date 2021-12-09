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
                                :when (not= correct-index i)] i)]
    (print incorrect-indexes)
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
          {:number number
           :index correct-index
           :choices problem-indexes}))))

(defn update-score [score is-correct]
  (if is-correct
    (+ 3 score)
    (max 0 (- score 1))))


(defonce app-state (atom {:text instructions
                          :problem (new-problem)
                          :score 0}))


(defn click-choice [index]
  (swap! app-state (fn [state]
                     (let [is-correct (= (get-in state [:problem :index]) index)
                           score (update-score (:score state) is-correct)]
                       (-> state
                           (#(if is-correct (assoc-in % [:problem] (new-problem)) %))
                           (assoc-in [:text] (if is-correct
                                               (cljs.pprint/cl-format nil "Correct! +3. Your score is ~a." score)
                                               (cljs.pprint/cl-format nil "Incorrect! -1. Your score is ~a." score)))
                           (assoc-in [:click] index)
                           (assoc-in [:score] score))))))

(defn get-app-element []
  (gdom/getElement "app"))

(defn render-digit [digit is-target index]
  ^{:key index} [:span {:style {:font-size "60px"
                                :color (if is-target "red" "black")}} digit " "])

(defn render-number [state]
  (let [problem (:problem state)
        integers (take 7 (:number problem))
        fractions (drop 7 (:number problem))]
    [:div
          (for [i (range 0 (count integers))]
            [render-digit (nth integers i) (= (:index problem) i)])
     [:span {:style {:font-size "60px"
                     :color "black"}} ". "]
     (for [i (range 0 (count fractions))]
       [render-digit (nth fractions i) (= (:index problem) (+ (count integers) i))])]))

(defn render-digit-words [digit place-index]
  (let [place (get places place-index)
        suffix (:text place)]
    [:div
     [:h1 {:style {:color "blue"}
           :on-click (partial click-choice place-index)} 
      (cljs.pprint/cl-format nil "~R ~a~a"
                             (* digit (:times place))
                             (:text place)
                             (if (and (:pluralize place)
                                      (not (= digit 1)))
                               "s" ""))]]))

(defn render-problem []
  (let [state @app-state
        problem (:problem state)
        digit (js/parseInt (nth (:number problem) (:index problem)))]
    [:div
     [:h1 (:text state)]
     [:div
      [render-number state]
      (for [n (:choices problem)]
        [render-digit-words digit n])]]))

(defn mount [el]
  (rdom/render [render-problem] el))

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
