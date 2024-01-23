goog.provide('app.client');

var options__47534__auto___52831 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("car","id","car/id",-1388434848),new cljs.core.Keyword("car","model","car/model",331054627),new cljs.core.Keyword("car","make","car/make",-1284207081)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$client$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("car","id","car/id",-1388434848),new cljs.core.Keyword("car","id","car/id",-1388434848).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Car(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__52819 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__52819__$1 = cljs.core.__destructure_map(map__52819);
var props = map__52819__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52819__$1,new cljs.core.Keyword("car","id","car/id",-1388434848));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52819__$1,new cljs.core.Keyword("car","model","car/model",331054627));
var make = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52819__$1,new cljs.core.Keyword("car","make","car/make",-1284207081));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({}),"Model: ",com.fulcrologic.fulcro.components.force_children(model)]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["p",({}),"Maker: ",com.fulcrologic.fulcro.components.force_children(make)])], null),new cljs.core.Keyword(null,".item",".item",-1434967496));
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Car !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.Car = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__47534__auto___52831,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Car,new cljs.core.Keyword("app.client","Car","app.client/Car",-1786113179),options__47534__auto___52831);
app.client.ui_car = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.client.Car,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("car","id","car/id",-1388434848)], null));

var options__47534__auto___52832 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("person","name","person/name",549444500),new cljs.core.Keyword("person","age","person/age",387881455),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person","cars","person/cars",1835683721),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.client.Car)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$client$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("person","id","person/id",-392409377).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_PersonDetail(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__52820 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__52820__$1 = cljs.core.__destructure_map(map__52820);
var props = map__52820__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52820__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52820__$1,new cljs.core.Keyword("person","name","person/name",549444500));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52820__$1,new cljs.core.Keyword("person","age","person/age",387881455));
var cars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52820__$1,new cljs.core.Keyword("person","cars","person/cars",1835683721));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({"className": "ui header"}),"Selected Person"]),(cljs.core.truth_(id)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["label",({}),"Name: "]),name], null),new cljs.core.Keyword(null,".field",".field",954681856)),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["label",({}),"Age: "]),age], null),new cljs.core.Keyword(null,".field",".field",954681856)),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__52821 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person","id","person/id",-392409377),id], null);
return (app.model.person.make_older.cljs$core$IFn$_invoke$arity$1 ? app.model.person.make_older.cljs$core$IFn$_invoke$arity$1(G__52821) : app.model.person.make_older.call(null,G__52821));
})()], null));
})], null),"Make Older"], null),new cljs.core.Keyword(null,".ui.button",".ui.button",645802607)),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({}),"Cars"]),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.client.ui_car,cars)], null),null)], null),new cljs.core.Keyword(null,".ui.form",".ui.form",158215099)):null)], null),new cljs.core.Keyword(null,".ui.segment",".ui.segment",1759947126));
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.PersonDetail !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.PersonDetail = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__47534__auto___52832,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.PersonDetail,new cljs.core.Keyword("app.client","PersonDetail","app.client/PersonDetail",73992834),options__47534__auto___52832);
app.client.ui_person_detail = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.client.PersonDetail,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("person","id","person/id",-392409377)], null));

var options__47534__auto___52833 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("person","name","person/name",549444500)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$client$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("person","id","person/id",-392409377).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_PersonListItem(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__52822 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__52822__$1 = cljs.core.__destructure_map(map__52822);
var props = map__52822__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52822__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52822__$1,new cljs.core.Keyword("person","name","person/name",549444500));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([(function (){var G__52823 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person","id","person/id",-392409377),id], null);
return (app.model.person.select_person.cljs$core$IFn$_invoke$arity$1 ? app.model.person.select_person.cljs$core$IFn$_invoke$arity$1(G__52823) : app.model.person.select_person.call(null,G__52823));
})(),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.client.PersonDetail)])], null));
})], null),name], null),null)], null),new cljs.core.Keyword(null,".item",".item",-1434967496));
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.PersonListItem !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.PersonListItem = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__47534__auto___52833,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.PersonListItem,new cljs.core.Keyword("app.client","PersonListItem","app.client/PersonListItem",-181531287),options__47534__auto___52833);
app.client.ui_person_list_item = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.client.PersonListItem,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("person","id","person/id",-392409377)], null));

var options__47534__auto___52834 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person-list","people","person-list/people",841524750),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.client.PersonListItem)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$client$ident_STAR_(this$,p__52824){
var map__52825 = p__52824;
var map__52825__$1 = cljs.core.__destructure_map(map__52825);
var people = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52825__$1,new cljs.core.Keyword("person-list","people","person-list/people",841524750));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","id","component/id",298306903),new cljs.core.Keyword("app.client","person-list","app.client/person-list",-987000171)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person-list","people","person-list/people",841524750),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person-list","people","person-list/people",841524750),app.client.PersonListItem], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_PersonList(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__52826 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__52826__$1 = cljs.core.__destructure_map(map__52826);
var people = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52826__$1,new cljs.core.Keyword("person-list","people","person-list/people",841524750));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({"className": "ui header"}),"People"]),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.client.ui_person_list_item,people)], null),null)], null),new cljs.core.Keyword(null,".ui.segment",".ui.segment",1759947126));
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.PersonList !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.PersonList = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__47534__auto___52834,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.PersonList,new cljs.core.Keyword("app.client","PersonList","app.client/PersonList",746982741),options__47534__auto___52834);
app.client.ui_person_list = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.client.PersonList);

var options__47534__auto___52835 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person-picker","list","person-picker/list",-1033465767),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.client.PersonList)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person-picker","selected-person","person-picker/selected-person",-306432998),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.client.PersonDetail)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$client$ident_STAR_(this$,p__52827){
var map__52828 = p__52827;
var map__52828__$1 = cljs.core.__destructure_map(map__52828);
var list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52828__$1,new cljs.core.Keyword("person-picker","list","person-picker/list",-1033465767));
var selected_person = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52828__$1,new cljs.core.Keyword("person-picker","selected-person","person-picker/selected-person",-306432998));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","id","component/id",298306903),new cljs.core.Keyword("app.client","person-picker","app.client/person-picker",44591387)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person-picker","list","person-picker/list",-1033465767),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("person-picker","list","person-picker/list",-1033465767),app.client.PersonList,new cljs.core.Keyword("person-picker","selected-person","person-picker/selected-person",-306432998),app.client.PersonDetail], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_PersonPicker(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__52829 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__52829__$1 = cljs.core.__destructure_map(map__52829);
var list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52829__$1,new cljs.core.Keyword("person-picker","list","person-picker/list",-1033465767));
var selected_person = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52829__$1,new cljs.core.Keyword("person-picker","selected-person","person-picker/selected-person",-306432998));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(app.client.ui_person_list.cljs$core$IFn$_invoke$arity$1 ? app.client.ui_person_list.cljs$core$IFn$_invoke$arity$1(list) : app.client.ui_person_list.call(null,list))], null),new cljs.core.Keyword(null,".column",".column",1389783581)),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(app.client.ui_person_detail.cljs$core$IFn$_invoke$arity$1 ? app.client.ui_person_detail.cljs$core$IFn$_invoke$arity$1(selected_person) : app.client.ui_person_detail.call(null,selected_person))], null),new cljs.core.Keyword(null,".column",".column",1389783581))], null),new cljs.core.Keyword(null,".ui.two.column.container.grid",".ui.two.column.container.grid",1396250453));
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.PersonPicker !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.PersonPicker = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__47534__auto___52835,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.PersonPicker,new cljs.core.Keyword("app.client","PersonPicker","app.client/PersonPicker",-2110448629),options__47534__auto___52835);
app.client.ui_person_picker = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.client.PersonPicker);

var options__47534__auto___52836 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","person-picker","root/person-picker",-215207535),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.client.PersonPicker)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","person-picker","root/person-picker",-215207535),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","person-picker","root/person-picker",-215207535),app.client.PersonPicker], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__52830 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__52830__$1 = cljs.core.__destructure_map(map__52830);
var person_picker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52830__$1,new cljs.core.Keyword("root","person-picker","root/person-picker",-215207535));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "ui segment"}),com.fulcrologic.fulcro.components.force_children((cljs.core.truth_(person_picker)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({}),"Application"]),(app.client.ui_person_picker.cljs$core$IFn$_invoke$arity$1 ? app.client.ui_person_picker.cljs$core$IFn$_invoke$arity$1(person_picker) : app.client.ui_person_picker.call(null,person_picker))], null),new cljs.core.Keyword(null,".ui.container.segment",".ui.container.segment",175807413)):com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h1",({}),"Loading..."])))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Root !== 'undefined')){
} else {
/**
 * @constructor
 */
app.client.Root = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__47534__auto___52836,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Root,new cljs.core.Keyword("app.client","Root","app.client/Root",1677331554),options__47534__auto___52836);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.APP !== 'undefined')){
} else {
app.client.APP = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),com.fulcrologic.fulcro.networking.http_remote.fulcro_http_remote(cljs.core.PersistentArrayMap.EMPTY)], null),new cljs.core.Keyword(null,"client-did-mount","client-did-mount",-958324226),(function (app__$1){
return com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,new cljs.core.Keyword(null,"all-people","all-people",1672924564),app.client.PersonListItem,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","id","component/id",298306903),new cljs.core.Keyword("app.client","person-list","app.client/person-list",-987000171),new cljs.core.Keyword("person-list","people","person-list/people",841524750)], null)], null));
})], null));
}
app.client.init = (function app$client$init(){
return com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.client.APP,app.client.Root,"app");
});
goog.exportSymbol('app.client.init', app.client.init);

//# sourceMappingURL=app.client.js.map
