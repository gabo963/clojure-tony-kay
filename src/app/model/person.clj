(ns app.model.person
  (:require
    [com.wsscode.pathom.connect :as pc]
    [taoensso.timbre :as log]))

(def people
  {1 {::id 1
      ::name "Nicolas"
      ::age 26
      ::cars #{2}}
   2 {::id 2
      ::name "Daniel"
      ::age 56
      ::cars #{1}}})
