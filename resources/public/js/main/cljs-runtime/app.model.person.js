goog.provide('app.model.person');
/**
 * 
 */
app.model.person.make_older = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.model.person","make-older","app.model.person/make-older",276683079,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.model.person","make-older","app.model.person/make-older",276683079,null),(function (fulcro_mutation_env_symbol){
var map__52712 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__52712__$1 = cljs.core.__destructure_map(map__52712);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52712__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remote","remote",-1593576576),(function app$model$person$remote(env){
return true;
}),new cljs.core.Keyword(null,"action","action",-811238024),(function app$model$person$action(p__52713){
var map__52714 = p__52713;
var map__52714__$1 = cljs.core.__destructure_map(map__52714);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52714__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__52715_52726 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__52716_52727 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__52716_52727);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),id,new cljs.core.Keyword("person","age","person/age",387881455)], null),cljs.core.inc);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__52715_52726);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__52717 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__52718 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__52718);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__52717);
}})], null);
}));
/**
 * 
 */
app.model.person.select_person = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.model.person","select-person","app.model.person/select-person",1729205765,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.model.person","select-person","app.model.person/select-person",1729205765,null),(function (fulcro_mutation_env_symbol){
var map__52719 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__52719__$1 = cljs.core.__destructure_map(map__52719);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52719__$1,new cljs.core.Keyword("person","id","person/id",-392409377));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remote","remote",-1593576576),(function app$model$person$remote(env){
return true;
}),new cljs.core.Keyword(null,"action","action",-811238024),(function app$model$person$action(p__52720){
var map__52721 = p__52720;
var map__52721__$1 = cljs.core.__destructure_map(map__52721);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52721__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__52722_52728 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__52723_52729 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__52723_52729);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","id","component/id",298306903),new cljs.core.Keyword("app.client","person-picker","app.client/person-picker",44591387),new cljs.core.Keyword("person-picker","selected-person","person-picker/selected-person",-306432998)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","id","person/id",-392409377),id], null));
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__52722_52728);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__52724 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__52725 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__52725);

try{var temp__5804__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5804__auto__)){
var default_action = temp__5804__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__52724);
}})], null);
}));

//# sourceMappingURL=app.model.person.js.map
