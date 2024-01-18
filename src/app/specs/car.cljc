(ns app.specs.car
  (:require
    [clojure.spec.alpha :as s]))

(s/def ::id int?)
(s/def ::model string?)
(s/def ::make string? )

(s/def :app.specs.car
  (s/keys
    :req [::id ::model ::make]))
