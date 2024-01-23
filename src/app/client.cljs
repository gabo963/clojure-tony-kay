(ns app.client
  (:require
    [com.fulcrologic.fulcro.application :as app]
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.data-fetch :as df]
    [com.fulcrologic.fulcro.dom :as dom :refer [p div ul a li h1 h2 h3 h4 label button]]
    [com.fulcrologic.fulcro.networking.http-remote :as http]
    [com.fulcrologic.fulcro.algorithms.merge :as merge]
    [com.fulcrologic.fulcro.mutations :refer [defmutation]]
    [com.fulcrologic.fulcro.algorithms.data-targeting :as targeting]
    [app.model.person :refer [make-older select-person]]))

(defsc Car [this {:car/keys [id model make] :as props}]
  {:query [:car/id :car/model :car/make]
   :ident :car/id}
  (li :.item
    (p "Model: " model)
    (p "Maker: " make)))

(def ui-car (comp/factory Car {:keyfn :car/id}))

(defsc PersonDetail [this {:person/keys [id name age cars] :as props}]
  {:query [:person/id :person/name :person/age {:person/cars (comp/get-query Car)}]
   :ident :person/id}

  (div :.ui.segment
    (h3 :.ui.header "Selected Person")
    (when id
      (div :.ui.form
        (div :.field
          (label "Name: ") name)
        (div :.field
          (label "Age: ") age)
        (button :.ui.button {:onClick
                             #(comp/transact! this [(make-older {:person/id id})])} "Make Older")
        (h3 "Cars")
        (ul (map ui-car cars)))))
  )

(def ui-person-detail (comp/factory PersonDetail {:keyfn :person/id}))

(defsc PersonListItem [this {:person/keys [id name] :as props}]
  {:query [:person/id :person/name]
   :ident :person/id}
  (li :.item
    (a {:href "#" :onClick (fn [] (comp/transact! this [{(select-person {:person/id id})
                                                         (comp/get-query PersonDetail)}]))}
      name))
  )

(def ui-person-list-item (comp/factory PersonListItem {:keyfn :person/id}))

(defsc PersonList [this {:person-list/keys [people]}]
  {:query         [{:person-list/people (comp/get-query PersonListItem)}]
   :ident         (fn [] [:component/id ::person-list])
   :initial-state {:person-list/people []}}
  (div :.ui.segment
    (h3 :.ui.header "People")
    (ul (map ui-person-list-item people))
    ))

(def ui-person-list (comp/factory PersonList))

(defsc PersonPicker [this {:person-picker/keys [list selected-person]}]
  {:query         [{:person-picker/list (comp/get-query PersonList)}
                   {:person-picker/selected-person (comp/get-query PersonDetail)}]
   :ident         (fn [] [:component/id ::person-picker])
   :initial-state {:person-picker/list {}}}
  (div :.ui.two.column.container.grid
    (div :.column
      (ui-person-list list))
    (div :.column
      (ui-person-detail selected-person)))
  )

(def ui-person-picker (comp/factory PersonPicker))

(defsc Root [this {:root/keys [person-picker]}]
  {:query         [{:root/person-picker (comp/get-query PersonPicker)}]
   :initial-state {:root/person-picker {}}}
  (div :.ui.segment {}
    (if person-picker
      (div :.ui.container.segment
        (h3 "Application")
        (ui-person-picker person-picker))
      (h1 "Loading...")
      )
    ))

(defonce APP (app/fulcro-app {:remotes          {:remote (http/fulcro-http-remote {})}
                              :client-did-mount (fn [app]
                                                  (df/load! app :all-people PersonListItem
                                                    {:target [:component/id ::person-list :person-list/people]}
                                                    ))}))

(defn ^:export init []
  (app/mount! APP Root "app"))
