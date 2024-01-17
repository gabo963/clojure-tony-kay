goog.provide('app.client');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.application');
goog.require('com.fulcrologic.fulcro.components');
goog.require('com.fulcrologic.fulcro.dom');
goog.require('com.fulcrologic.fulcro.algorithms.merge');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.algorithms.data_targeting');

var options__59151__auto___73576 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("car","id","car/id",-1388434848),new cljs.core.Keyword("car","model","car/model",331054627)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$client$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("car","id","car/id",-1388434848),new cljs.core.Keyword("car","id","car/id",-1388434848).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("car","id","car/id",-1388434848),new cljs.core.Keyword("param","id","param/id",-1272524377),new cljs.core.Keyword("car","model","car/model",331054627),new cljs.core.Keyword("param","model","param/model",275060462)], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Car(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__73532 = com.fulcrologic.fulcro.components.props(this$);
var map__73532__$1 = (((((!((map__73532 == null))))?(((((map__73532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73532):map__73532);
var props = map__73532__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73532__$1,new cljs.core.Keyword("car","id","car/id",-1388434848));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73532__$1,new cljs.core.Keyword("car","model","car/model",331054627));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [model], null),null)], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Car !== 'undefined')){
} else {
app.client.Car = ((function (options__59151__auto___73576){
return (function app$client$Car(props__59152__auto__){
var this__59153__auto__ = this;
var temp__5802__auto___73577 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__59151__auto___73576,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___73577)){
var init_state__59154__auto___73578 = temp__5802__auto___73577;
this__59153__auto__.state = (function (){var obj73535 = ({"fulcro$state":(function (){var G__73536 = this__59153__auto__;
var G__73537 = goog.object.get(props__59152__auto__,"fulcro$value");
return (init_state__59154__auto___73578.cljs$core$IFn$_invoke$arity$2 ? init_state__59154__auto___73578.cljs$core$IFn$_invoke$arity$2(G__73536,G__73537) : init_state__59154__auto___73578.call(null,G__73536,G__73537));
})()});
return obj73535;
})();
} else {
this__59153__auto__.state = (function (){var obj73539 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj73539;
})();
}

return null;
});})(options__59151__auto___73576))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Car,new cljs.core.Keyword("app.client","Car","app.client/Car",-1786113179),options__59151__auto___73576);
app.client.ui_car = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.client.Car,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("car","id","car/id",-1388434848)], null));
/**
 * 
 */
app.client.make_older = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.client","make-older","app.client/make-older",-783907466,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.client","make-older","app.client/make-older",-783907466,null),(function (fulcro_mutation_env_symbol){
var map__73540 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__73540__$1 = (((((!((map__73540 == null))))?(((((map__73540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73540):map__73540);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73540__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__73540,map__73540__$1,id){
return (function app$client$action(p__73542){
var map__73543 = p__73542;
var map__73543__$1 = (((((!((map__73543 == null))))?(((((map__73543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73543):map__73543);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73543__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),id,new cljs.core.Keyword("person","age","person/age",387881455)], null),cljs.core.inc);

return null;
});})(map__73540,map__73540__$1,id))
,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),((function (map__73540,map__73540__$1,id){
return (function (env){
var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
});})(map__73540,map__73540__$1,id))
], null);
}));

var options__59151__auto___73579 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("person","name","person/name",549444500),new cljs.core.Keyword("person","age","person/age",387881455),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person","cars","person/cars",1835683721),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.client.Car)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$client$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("person","id","person/id",-392409377).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("person","id","person/id",-392409377),new cljs.core.Keyword("param","id","param/id",-1272524377),new cljs.core.Keyword("person","name","person/name",549444500),new cljs.core.Keyword("param","name","param/name",1598843068),new cljs.core.Keyword("person","age","person/age",387881455),(0),new cljs.core.Keyword("person","cars","person/cars",1835683721),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(20),new cljs.core.Keyword(null,"model","model",331153215),"Forester"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(21),new cljs.core.Keyword(null,"model","model",331153215),"Leaf"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(22),new cljs.core.Keyword(null,"model","model",331153215),"Pilot"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person","cars","person/cars",1835683721),app.client.Car], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Person(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__73545 = com.fulcrologic.fulcro.components.props(this$);
var map__73545__$1 = (((((!((map__73545 == null))))?(((((map__73545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73545):map__73545);
var props = map__73545__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73545__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73545__$1,new cljs.core.Keyword("person","name","person/name",549444500));
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73545__$1,new cljs.core.Keyword("person","age","person/age",387881455));
var cars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73545__$1,new cljs.core.Keyword("person","cars","person/cars",1835683721));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "ui segment"}),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h2",({}),"Name: ",com.fulcrologic.fulcro.components.force_children(name)])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h2",({}),"Age: ",com.fulcrologic.fulcro.components.force_children(age)])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__73545,map__73545__$1,props,id,name,age,cars){
return (function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$3(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__73547 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person","id","person/id",-392409377),id], null);
return (app.client.make_older.cljs$core$IFn$_invoke$arity$1 ? app.client.make_older.cljs$core$IFn$_invoke$arity$1(G__73547) : app.client.make_older.call(null,G__73547));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person-list","people","person-list/people",841524750)], null)], null));
});})(map__73545,map__73545__$1,props,id,name,age,cars))
], null),"Make Older"], null),new cljs.core.Keyword(null,".ui.button",".ui.button",645802607))),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h2",({}),"id: ",com.fulcrologic.fulcro.components.force_children(id)])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h2",({}),"Cars:"])),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.client.ui_car,cars)], null),null))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Person !== 'undefined')){
} else {
app.client.Person = ((function (options__59151__auto___73579){
return (function app$client$Person(props__59152__auto__){
var this__59153__auto__ = this;
var temp__5802__auto___73580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__59151__auto___73579,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___73580)){
var init_state__59154__auto___73581 = temp__5802__auto___73580;
this__59153__auto__.state = (function (){var obj73549 = ({"fulcro$state":(function (){var G__73550 = this__59153__auto__;
var G__73551 = goog.object.get(props__59152__auto__,"fulcro$value");
return (init_state__59154__auto___73581.cljs$core$IFn$_invoke$arity$2 ? init_state__59154__auto___73581.cljs$core$IFn$_invoke$arity$2(G__73550,G__73551) : init_state__59154__auto___73581.call(null,G__73550,G__73551));
})()});
return obj73549;
})();
} else {
this__59153__auto__.state = (function (){var obj73553 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj73553;
})();
}

return null;
});})(options__59151__auto___73579))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Person,new cljs.core.Keyword("app.client","Person","app.client/Person",1752576162),options__59151__auto___73579);
app.client.ui_person = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.client.Person,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("person","id","person/id",-392409377)], null));

var options__59151__auto___73582 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person-list","people","person-list/people",841524750),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.client.Person)], null)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$client$ident_STAR_(this$,p__73554){
var map__73555 = p__73554;
var map__73555__$1 = (((((!((map__73555 == null))))?(((((map__73555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73555):map__73555);
var people = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73555__$1,new cljs.core.Keyword("person-list","people","person-list/people",841524750));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","id","component/id",298306903),new cljs.core.Keyword("app.client","person-list","app.client/person-list",-987000171)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person-list","people","person-list/people",841524750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Daniel"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"Nicolas"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("person-list","people","person-list/people",841524750),app.client.Person], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_PersonList(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__73557 = com.fulcrologic.fulcro.components.props(this$);
var map__73557__$1 = (((((!((map__73557 == null))))?(((((map__73557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73557):map__73557);
var people = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73557__$1,new cljs.core.Keyword("person-list","people","person-list/people",841524750));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var cnt = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__73557,map__73557__$1,people){
return (function (c,p__73559){
var map__73560 = p__73559;
var map__73560__$1 = (((((!((map__73560 == null))))?(((((map__73560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73560):map__73560);
var age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73560__$1,new cljs.core.Keyword("person","age","person/age",387881455));
if((age > (30))){
return (c + (1));
} else {
return c;
}
});})(map__73557,map__73557__$1,people))
,(0),people);
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h2",({}),"People Over 30: ",com.fulcrologic.fulcro.components.force_children(cnt)]);
})(),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.client.ui_person,people)], null),null))], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.PersonList !== 'undefined')){
} else {
app.client.PersonList = ((function (options__59151__auto___73582){
return (function app$client$PersonList(props__59152__auto__){
var this__59153__auto__ = this;
var temp__5802__auto___73583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__59151__auto___73582,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___73583)){
var init_state__59154__auto___73584 = temp__5802__auto___73583;
this__59153__auto__.state = (function (){var obj73563 = ({"fulcro$state":(function (){var G__73564 = this__59153__auto__;
var G__73565 = goog.object.get(props__59152__auto__,"fulcro$value");
return (init_state__59154__auto___73584.cljs$core$IFn$_invoke$arity$2 ? init_state__59154__auto___73584.cljs$core$IFn$_invoke$arity$2(G__73564,G__73565) : init_state__59154__auto___73584.call(null,G__73564,G__73565));
})()});
return obj73563;
})();
} else {
this__59153__auto__.state = (function (){var obj73567 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj73567;
})();
}

return null;
});})(options__59151__auto___73582))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.PersonList,new cljs.core.Keyword("app.client","PersonList","app.client/PersonList",746982741),options__59151__auto___73582);
app.client.ui_person_list = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.client.PersonList);

var options__59151__auto___73585 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$client$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","list","root/list",761982781),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.client.PersonList)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$client$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","list","root/list",761982781),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","list","root/list",761982781),app.client.PersonList], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$client$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__73568 = com.fulcrologic.fulcro.components.props(this$);
var map__73568__$1 = (((((!((map__73568 == null))))?(((((map__73568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73568):map__73568);
var list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73568__$1,new cljs.core.Keyword("root","list","root/list",761982781));
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({"className": "ui segment"}),com.fulcrologic.fulcro.components.force_children((cljs.core.truth_(list)?com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h1",({}),"People"]),com.fulcrologic.fulcro.components.force_children((app.client.ui_person_list.cljs$core$IFn$_invoke$arity$1 ? app.client.ui_person_list.cljs$core$IFn$_invoke$arity$1(list) : app.client.ui_person_list.call(null,list)))], null),null):com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h3",({}),"Loading..."])))]);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.Root !== 'undefined')){
} else {
app.client.Root = ((function (options__59151__auto___73585){
return (function app$client$Root(props__59152__auto__){
var this__59153__auto__ = this;
var temp__5802__auto___73586 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__59151__auto___73585,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5802__auto___73586)){
var init_state__59154__auto___73587 = temp__5802__auto___73586;
this__59153__auto__.state = (function (){var obj73571 = ({"fulcro$state":(function (){var G__73572 = this__59153__auto__;
var G__73573 = goog.object.get(props__59152__auto__,"fulcro$value");
return (init_state__59154__auto___73587.cljs$core$IFn$_invoke$arity$2 ? init_state__59154__auto___73587.cljs$core$IFn$_invoke$arity$2(G__73572,G__73573) : init_state__59154__auto___73587.call(null,G__73572,G__73573));
})()});
return obj73571;
})();
} else {
this__59153__auto__.state = (function (){var obj73575 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj73575;
})();
}

return null;
});})(options__59151__auto___73585))
;
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.client.Root,new cljs.core.Keyword("app.client","Root","app.client/Root",1677331554),options__59151__auto___73585);
if((typeof app !== 'undefined') && (typeof app.client !== 'undefined') && (typeof app.client.APP !== 'undefined')){
} else {
app.client.APP = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$0();
}
app.client.init = (function app$client$init(){
return com.fulcrologic.fulcro.application.mount_BANG_.cljs$core$IFn$_invoke$arity$3(app.client.APP,app.client.Root,"app");
});
goog.exportSymbol('app.client.init', app.client.init);

//# sourceMappingURL=app.client.js.map
