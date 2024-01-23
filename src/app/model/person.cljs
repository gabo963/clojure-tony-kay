(ns app.model.person
  (:require
    [com.fulcrologic.fulcro.mutations :refer [defmutation]]))

(defmutation make-older [{:person/keys [id]}]
  (action [{:keys [state]}]
    (swap! state update-in [:person/id id :person/age] inc))
  (remote [env] true))

(defmutation select-person [{:person/keys [id]}]
  (action [{:keys [state]}]
    (swap! state assoc-in [:component/id :app.client/person-picker :person-picker/selected-person] [:person/id id]))
  (remote [env] true))
