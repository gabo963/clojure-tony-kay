(ns app.spec.car
  (:require
    [clojure.spec.alpha :as s]))

(s/def ::id int?)
(s/def ::model string?)

(s/def :app.spec.car/car
  (s/keys
    :req [::id ::model]))
