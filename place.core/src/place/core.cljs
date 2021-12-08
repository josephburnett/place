(ns ^:figwheel-hooks place.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom]))

(defn multiply [a b] (* a b))

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
    :text   "tenth(s)"
    :times  1}
   {:key    :hundreth
    :text   "hundreth(s)"
    :times  1}
   {:key    :thousandth
    :text   "thousandth(s)"
    :times  1}
   {:key    :ten-thousandth
    :text   "ten thousandth(s)"
    :times  1}
   {:key    :hundred-thousandth
    :text   "hundred thousandth(s)"
    :times  1}
   {:key    :millionth
    :text   "millionth(s)"
    :times  1}])

(defn new-number []
  (for [_ (range 0 (count places))]
    (str (rand-int 10))))

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:text "Hello world!"
                          :number (new-number)}))

(defn get-app-element []
  (gdom/getElement "app"))

(defn hello-world []
  [:div
   [:h1 (:text @app-state)]
   [:h3 (:number @app-state)]
   [:h3 "Edit this in src/place/core.cljs and watch it change!"]])

(defn mount [el]
  (rdom/render [hello-world] el))

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
