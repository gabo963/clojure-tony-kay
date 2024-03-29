(ns app.model.person
  (:require
    [com.wsscode.pathom.connect :as pc]
    [taoensso.timbre :as log]))

(def people
  (atom {1 {:person/id   1
            :person/name "Nicolas"
            :person/age  26
            :person/cars #{2}}
         2 {:person/id   2
            :person/name "Daniel"
            :person/age  56
            :person/cars #{1}}}))

(pc/defresolver person-resolver [env {:person/keys [id]}]
  {::pc/input  #{:person/id}
   ::pc/output [:person/name :person/age {:person/cars [:car/id]}]}
  (let [person (-> @people
                 (get id)
                 (update :person/cars (fn [ids] (mapv
                                                  (fn [id] {:car/id id})
                                                  ids))))]
    person))

(pc/defresolver all-people-resolver [env {}]
  {::pc/output [{:all-people [:person/id]}]}
  {:all-people (mapv (fn [i] {:person/id i}) (keys @people))})

(pc/defresolver current-system-time [env {}]
  {::pc/output [:server/time]}
  {:server/time (java.util.Date.)})

(pc/defmutation make-older [env {:person/keys [id]}]
  {::pc/params [:person/id]
   ::pc/output []}
  (swap! people update-in [id :person/age] inc)
  {})

(pc/defmutation select-person [env {:person/keys [id]}]
  {::pc/params [:person/id]}
  {:person/id id})

(def resolvers [all-people-resolver current-system-time person-resolver make-older select-person])
