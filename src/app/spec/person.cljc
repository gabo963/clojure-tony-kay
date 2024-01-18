(ns app.spec.person
  (:require
    [clojure.spec.alpha :as s]))

(s/def ::id int?)
(s/def ::name string?)
(s/def ::age pos-int?)

(s/def :app.spec.person/person
  (s/keys
    :req [::id ::name ::age]
    :opt [::cars]))
