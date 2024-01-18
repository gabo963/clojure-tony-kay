goog.provide('com.fulcrologic.fulcro.rendering.multiple_roots_renderer');
goog.scope(function(){
  com.fulcrologic.fulcro.rendering.multiple_roots_renderer.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * DEPRECATED: Floating roots can now be created with React hooks and hooks/use-component or hooks/use-fulcro.
 * 
 *   Register a mounted react component as a new root that should be managed. The
 *   options map can contain:
 * 
 *   - `:initialize?`: Should the initial state be pushed into the app state (if not already present)? Defaults
 *   to true, which causes it to happen once (on initial mount).
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$register_root_BANG_(var_args){
var G__65986 = arguments.length;
switch (G__65986) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (react_instance){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2(react_instance,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118),true], null));
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (react_instance,p__65988){
var map__65989 = p__65988;
var map__65989__$1 = cljs.core.__destructure_map(map__65989);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65989__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var initialize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65989__$1,new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118));
var app__$2 = (function (){var or__5045__auto__ = app__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = com.fulcrologic.fulcro.components.any__GT_app(react_instance);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return com.fulcrologic.fulcro.components._STAR_app_STAR_;
}
}
})();
if(cljs.core.map_QMARK_(app__$2)){
var class$ = com.fulcrologic.fulcro.components.react_type(react_instance);
var k = (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(class$) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,class$));
var initialize_state_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$2,new cljs.core.Keyword(null,"initialize-state!","initialize-state!",-1114074844));
var schedule_render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$2,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
var known_roots = (function (){var G__65991 = app__$2;
var G__65991__$1 = (((G__65991 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__65991));
var G__65991__$2 = (((G__65991__$1 == null))?null:cljs.core.deref(G__65991__$1));
if((G__65991__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853).cljs$core$IFn$_invoke$arity$1(G__65991__$2);
}
})();
var initialized_QMARK_ = cljs.core.contains_QMARK_(known_roots,k);
if(cljs.core.truth_((function (){var and__5043__auto__ = initialize_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return (!(initialized_QMARK_));
} else {
return and__5043__auto__;
}
})())){
(initialize_state_BANG_.cljs$core$IFn$_invoke$arity$2 ? initialize_state_BANG_.cljs$core$IFn$_invoke$arity$2(app__$2,class$) : initialize_state_BANG_.call(null,app__$2,class$));

var G__65993_66080 = app__$2;
var G__65994_66081 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
(schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2 ? schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2(G__65993_66080,G__65994_66081) : schedule_render_BANG_.call(null,G__65993_66080,G__65994_66081));
} else {
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,94,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adding root of type ",k], null);
}),null)),null,604350754,null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$2),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853),k], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([react_instance], 0));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,96,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Register-root cannot find app. Pass your Fulcro app via options. See https://book.fulcrologic.com/#err-mrr-reg-root-no-app"], null);
}),null)),null,-2060928853,null);
}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Deregister a mounted root that should no longer be managed.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$deregister_root_BANG_(var_args){
var G__65998 = arguments.length;
switch (G__65998) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (react_instance){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2(react_instance,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (react_instance,p__66000){
var map__66001 = p__66000;
var map__66001__$1 = cljs.core.__destructure_map(map__66001);
var options = map__66001__$1;
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66001__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var app__$2 = (function (){var or__5045__auto__ = app__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = com.fulcrologic.fulcro.components.any__GT_app(react_instance);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return com.fulcrologic.fulcro.components._STAR_app_STAR_;
}
}
})();
if(cljs.core.map_QMARK_(app__$2)){
var class$ = com.fulcrologic.fulcro.components.react_type(react_instance);
var k = (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(class$) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,class$));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,107,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adding root of type ",k], null);
}),null)),null,1609007583,null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$2),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853),k], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([react_instance], 0));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,109,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Deregister-root cannot find app. Pass your Fulcro app via options. See https://book.fulcrologic.com/#err-mrr-dereg-root-no-app"], null);
}),null)),null,-1808386168,null);
}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$lang$maxFixedArity = 2);

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_roots_BANG_(app__$1,options){
var state_map = (function (){var G__66003 = app__$1;
var G__66003__$1 = (((G__66003 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__66003));
if((G__66003__$1 == null)){
return null;
} else {
return cljs.core.deref(G__66003__$1);
}
})();
var known_roots = (function (){var G__66004 = app__$1;
var G__66004__$1 = (((G__66004 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__66004));
var G__66004__$2 = (((G__66004__$1 == null))?null:cljs.core.deref(G__66004__$1));
if((G__66004__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853).cljs$core$IFn$_invoke$arity$1(G__66004__$2);
}
})();
com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);

var seq__66006 = cljs.core.seq(cljs.core.keys(known_roots));
var chunk__66008 = null;
var count__66009 = (0);
var i__66010 = (0);
while(true){
if((i__66010 < count__66009)){
var k = chunk__66008.cljs$core$IIndexed$_nth$arity$2(null,i__66010);
var cls_66086 = (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(k) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,k));
var query_66087 = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(cls_66086,state_map);
var root_props_66088 = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query_66087,state_map,state_map);
var seq__66025_66089 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(known_roots,k));
var chunk__66026_66090 = null;
var count__66027_66091 = (0);
var i__66028_66092 = (0);
while(true){
if((i__66028_66092 < count__66027_66091)){
var root_66093 = chunk__66026_66090.cljs$core$IIndexed$_nth$arity$2(null,i__66028_66092);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_66093,root_props_66088);


var G__66094 = seq__66025_66089;
var G__66095 = chunk__66026_66090;
var G__66096 = count__66027_66091;
var G__66097 = (i__66028_66092 + (1));
seq__66025_66089 = G__66094;
chunk__66026_66090 = G__66095;
count__66027_66091 = G__66096;
i__66028_66092 = G__66097;
continue;
} else {
var temp__5804__auto___66099 = cljs.core.seq(seq__66025_66089);
if(temp__5804__auto___66099){
var seq__66025_66100__$1 = temp__5804__auto___66099;
if(cljs.core.chunked_seq_QMARK_(seq__66025_66100__$1)){
var c__5568__auto___66101 = cljs.core.chunk_first(seq__66025_66100__$1);
var G__66102 = cljs.core.chunk_rest(seq__66025_66100__$1);
var G__66103 = c__5568__auto___66101;
var G__66104 = cljs.core.count(c__5568__auto___66101);
var G__66105 = (0);
seq__66025_66089 = G__66102;
chunk__66026_66090 = G__66103;
count__66027_66091 = G__66104;
i__66028_66092 = G__66105;
continue;
} else {
var root_66106 = cljs.core.first(seq__66025_66100__$1);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_66106,root_props_66088);


var G__66107 = cljs.core.next(seq__66025_66100__$1);
var G__66108 = null;
var G__66109 = (0);
var G__66110 = (0);
seq__66025_66089 = G__66107;
chunk__66026_66090 = G__66108;
count__66027_66091 = G__66109;
i__66028_66092 = G__66110;
continue;
}
} else {
}
}
break;
}


var G__66111 = seq__66006;
var G__66112 = chunk__66008;
var G__66113 = count__66009;
var G__66114 = (i__66010 + (1));
seq__66006 = G__66111;
chunk__66008 = G__66112;
count__66009 = G__66113;
i__66010 = G__66114;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__66006);
if(temp__5804__auto__){
var seq__66006__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66006__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__66006__$1);
var G__66115 = cljs.core.chunk_rest(seq__66006__$1);
var G__66116 = c__5568__auto__;
var G__66117 = cljs.core.count(c__5568__auto__);
var G__66118 = (0);
seq__66006 = G__66115;
chunk__66008 = G__66116;
count__66009 = G__66117;
i__66010 = G__66118;
continue;
} else {
var k = cljs.core.first(seq__66006__$1);
var cls_66119 = (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(k) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,k));
var query_66120 = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(cls_66119,state_map);
var root_props_66121 = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query_66120,state_map,state_map);
var seq__66032_66122 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(known_roots,k));
var chunk__66033_66123 = null;
var count__66034_66124 = (0);
var i__66035_66125 = (0);
while(true){
if((i__66035_66125 < count__66034_66124)){
var root_66126 = chunk__66033_66123.cljs$core$IIndexed$_nth$arity$2(null,i__66035_66125);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_66126,root_props_66121);


var G__66128 = seq__66032_66122;
var G__66129 = chunk__66033_66123;
var G__66130 = count__66034_66124;
var G__66131 = (i__66035_66125 + (1));
seq__66032_66122 = G__66128;
chunk__66033_66123 = G__66129;
count__66034_66124 = G__66130;
i__66035_66125 = G__66131;
continue;
} else {
var temp__5804__auto___66132__$1 = cljs.core.seq(seq__66032_66122);
if(temp__5804__auto___66132__$1){
var seq__66032_66133__$1 = temp__5804__auto___66132__$1;
if(cljs.core.chunked_seq_QMARK_(seq__66032_66133__$1)){
var c__5568__auto___66134 = cljs.core.chunk_first(seq__66032_66133__$1);
var G__66135 = cljs.core.chunk_rest(seq__66032_66133__$1);
var G__66136 = c__5568__auto___66134;
var G__66137 = cljs.core.count(c__5568__auto___66134);
var G__66138 = (0);
seq__66032_66122 = G__66135;
chunk__66033_66123 = G__66136;
count__66034_66124 = G__66137;
i__66035_66125 = G__66138;
continue;
} else {
var root_66139 = cljs.core.first(seq__66032_66133__$1);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_66139,root_props_66121);


var G__66140 = cljs.core.next(seq__66032_66133__$1);
var G__66141 = null;
var G__66142 = (0);
var G__66143 = (0);
seq__66032_66122 = G__66140;
chunk__66033_66123 = G__66141;
count__66034_66124 = G__66142;
i__66035_66125 = G__66143;
continue;
}
} else {
}
}
break;
}


var G__66144 = cljs.core.next(seq__66006__$1);
var G__66145 = null;
var G__66146 = (0);
var G__66147 = (0);
seq__66006 = G__66144;
chunk__66008 = G__66145;
count__66009 = G__66146;
i__66010 = G__66147;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_stale_components_BANG_(app__$1,options){
var map__66039 = app__$1;
var map__66039__$1 = cljs.core.__destructure_map(map__66039);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66039__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__66040 = cljs.core.deref(runtime_atom);
var map__66040__$1 = cljs.core.__destructure_map(map__66040);
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66040__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__66041 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__66041__$1 = cljs.core.__destructure_map(map__66041);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66041__$1,true);
var seq__66042 = cljs.core.seq(limited_idents);
var chunk__66043 = null;
var count__66044 = (0);
var i__66045 = (0);
while(true){
if((i__66045 < count__66044)){
var i = chunk__66043.cljs$core$IIndexed$_nth$arity$2(null,i__66045);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,i);


var G__66149 = seq__66042;
var G__66150 = chunk__66043;
var G__66151 = count__66044;
var G__66152 = (i__66045 + (1));
seq__66042 = G__66149;
chunk__66043 = G__66150;
count__66044 = G__66151;
i__66045 = G__66152;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__66042);
if(temp__5804__auto__){
var seq__66042__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66042__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__66042__$1);
var G__66153 = cljs.core.chunk_rest(seq__66042__$1);
var G__66154 = c__5568__auto__;
var G__66155 = cljs.core.count(c__5568__auto__);
var G__66156 = (0);
seq__66042 = G__66153;
chunk__66043 = G__66154;
count__66044 = G__66155;
i__66045 = G__66156;
continue;
} else {
var i = cljs.core.first(seq__66042__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,i);


var G__66157 = cljs.core.next(seq__66042__$1);
var G__66158 = null;
var G__66159 = (0);
var G__66160 = (0);
seq__66042 = G__66157;
chunk__66043 = G__66158;
count__66044 = G__66159;
i__66045 = G__66160;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app__$1,options);
}
});
/**
 * DEPRECATED: Floating roots can now be created with React hooks and hooks/use-component or hooks/use-fulcro.
 * 
 * The top-level call for using this optimized render in your application.
 * 
 * If `:force-root? true` is passed in options, then it just forces a keyframe root render.
 * 
 * This renderer always does a keyframe render *unless* an `:only-refresh` option is passed to the stack
 * (usually as an option on `(transact! this [(f)] {:only-refresh [...idents...]})`. In that case the renderer
 * will ignore *all* data diffing and will target refresh only to the on-screen components that have the listed
 * ident(s). This allows you to get component-local state refresh rates on transactions that are responding to
 * events that should really only affect a known set of components (like the input field).
 * 
 * This option does *not* currently support using query keywords in the refresh set. Only idents.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_BANG_(var_args){
var G__66050 = arguments.length;
switch (G__66050) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__66052){
var map__66053 = p__66052;
var map__66053__$1 = cljs.core.__destructure_map(map__66053);
var options = map__66053__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66053__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66053__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__5045__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_stale_components_BANG_(app__$1,options);
}catch (e66055){var e = e66055;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,158,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,-617760963,null);

return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Generate a plain React class that can render a Fulcro UIRoot. NOTE: The UIRoot must register/deregister itself
 *   in the component lifecycle:
 * 
 *   ```
 *   (defsc UIRoot [this props]
 *  {:componentDidMount     (fn [this] (mroot/register-root! this))
 *   :componentWillUnmount  (fn [this] (mroot/deregister-root! this))
 *   :initial-state {}
 *   :query [root-like-query]}
 *  ...)
 *   ```
 * 
 *   The `fulcro-app` is the app under which this root will be rendered. Create different factories if you have more than
 *   one mounted app.
 *   
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_react_class = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$floating_root_react_class(UIRoot,fulcro_app){
var cls = (function (){
return null;
});
var ui_root = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(UIRoot);
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.goog$module$goog$object.extend(cls.prototype,module$node_modules$react$index.Component.prototype,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (){
return false;
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
var this$ = this;
var js_props = this$.props;
var app__65959__auto__ = (function (){var or__5045__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return fulcro_app;
}
})();
var _STAR_app_STAR__orig_val__66060 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_shared_STAR__orig_val__66061 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_app_STAR__temp_val__66062 = app__65959__auto__;
var _STAR_shared_STAR__temp_val__66063 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(app__65959__auto__);
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__66062);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__66063);

try{var state_map = (function (){var G__66065 = fulcro_app;
var G__66065__$1 = (((G__66065 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__66065));
if((G__66065__$1 == null)){
return null;
} else {
return cljs.core.deref(G__66065__$1);
}
})();
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(UIRoot,state_map);
var props = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map);
var G__66066 = props;
var G__66067 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-props","js-props",1900369280),js_props], null);
return (ui_root.cljs$core$IFn$_invoke$arity$2 ? ui_root.cljs$core$IFn$_invoke$arity$2(G__66066,G__66067) : ui_root.call(null,G__66066,G__66067));
}finally {(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__66061);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__66060);
}})], null)));

return cls;
});
/**
 * Create a factory that renders a floating root in a normal Fulcro context (body of a Fulcro component). This factory
 * has the same sync constraints as normal `component/factory` functions. See `components/with-parent-context`.
 * 
 *   `UIClass`: A class that will behave as a floating root. NOTE: that class MUST have a mount/unmount hook
 *   to regsiter/deregister itself as a root.
 * 
 *   `options`: An options map. Same as for `component/factory`. Note, however, that this factory will *not* receive
 *   props, so a `:keyfn` would have to be based on something else.
 * 
 *   You normally do not pass any props to this factory because it is controlling the component and feeding props from
 *   the database. Props sent to this factory are only used by the wrapper, however, `:react-key` is useful if you
 *   have a bunch of sibling roots and need to set the react key for each.
 *   
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$floating_root_factory(var_args){
var G__66070 = arguments.length;
switch (G__66070) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$1 = (function (UIClass){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2(UIClass,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2 = (function (UIClass,options){
var constructor$ = (function (){
return null;
});
var ui_factory = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(UIClass);
var render = (function (this$){
var state_map = (function (){var G__66072 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var G__66072__$1 = (((G__66072 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__66072));
if((G__66072__$1 == null)){
return null;
} else {
return cljs.core.deref(G__66072__$1);
}
})();
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(UIClass,state_map);
var props = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map);
var G__66074 = (function (){var or__5045__auto__ = props;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__66075 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return (ui_factory.cljs$core$IFn$_invoke$arity$2 ? ui_factory.cljs$core$IFn$_invoke$arity$2(G__66074,G__66075) : ui_factory.call(null,G__66074,G__66075));
});
var wrapper_class = com.fulcrologic.fulcro.components.configure_component_BANG_(constructor$,new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","wrapper","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/wrapper",-2035797237),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (_,___$1,___$2){
return false;
}),new cljs.core.Keyword(null,"render","render",-1408033454),render], null));
var wrapper_factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(wrapper_class,options);
return wrapper_factory;
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.multiple_roots_renderer.js.map
