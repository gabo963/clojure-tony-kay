goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
goog.require('cljs.core');
goog.require('com.fulcrologic.fulcro.rendering.keyframe_render');
goog.require('com.fulcrologic.fulcro.algorithms.denormalize');
goog.require('com.fulcrologic.fulcro.components');
goog.require('clojure.set');
goog.require('edn_query_language.core');
goog.require('taoensso.timbre');
/**
 * Checks the given `idents` and returns a subset of them where the data they refer to has changed
 * between `old-state` and `new-state`.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$dirty_table_entries(old_state,new_state,idents){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,ident){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,ident) === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_state,ident))){
return result;
} else {
return cljs.core.cons(ident,result);
}
}),cljs.core.List.EMPTY,idents);
});
/**
 * Uses the component's query and the current application state to query for the current value of that component's
 *   props (subtree). It then sends those props to the component via "props tunnelling" (setting them on a well-known key in
 *   component-local state).
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_component_BANG_(app__$1,ident,c){
if(cljs.core.truth_((function (){var and__4120__auto__ = c;
if(cljs.core.truth_(and__4120__auto__)){
return ident;
} else {
return and__4120__auto__;
}
})())){
var map__62655 = app__$1;
var map__62655__$1 = (((((!((map__62655 == null))))?(((((map__62655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62655):map__62655);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62655__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,41,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__62655,map__62655__$1,state_atom,state_map,query,q,data_tree,new_props){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c)], null);
});})(map__62655,map__62655__$1,state_atom,state_map,query,q,data_tree,new_props))
,null)),null,1925233698);
}

if(cljs.core.truth_(com.fulcrologic.fulcro.components.mounted_QMARK_(c))){
return c.setState(((function (map__62655,map__62655__$1,state_atom,state_map,query,q,data_tree,new_props){
return (function (s){
return ({"fulcro$value": new_props});
});})(map__62655,map__62655__$1,state_atom,state_map,query,q,data_tree,new_props))
);
} else {
return null;
}
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,45,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",com.fulcrologic.fulcro.components.class__GT_registry_key(com.fulcrologic.fulcro.components.react_type(c)),"queries for data that changed, but does not have an ident. If that is your application root,","consider moving that changing state to a child component."], null);
}),null)),null,1286501251);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__62661 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__62662 = null;
var count__62663 = (0);
var i__62664 = (0);
while(true){
if((i__62664 < count__62663)){
var c = chunk__62662.cljs$core$IIndexed$_nth$arity$2(null,i__62664);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__62787 = seq__62661;
var G__62788 = chunk__62662;
var G__62789 = count__62663;
var G__62790 = (i__62664 + (1));
seq__62661 = G__62787;
chunk__62662 = G__62788;
count__62663 = G__62789;
i__62664 = G__62790;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__62661);
if(temp__5804__auto__){
var seq__62661__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62661__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__62661__$1);
var G__62791 = cljs.core.chunk_rest(seq__62661__$1);
var G__62792 = c__4550__auto__;
var G__62793 = cljs.core.count(c__4550__auto__);
var G__62794 = (0);
seq__62661 = G__62791;
chunk__62662 = G__62792;
count__62663 = G__62793;
i__62664 = G__62794;
continue;
} else {
var c = cljs.core.first(seq__62661__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__62795 = cljs.core.next(seq__62661__$1);
var G__62796 = null;
var G__62797 = (0);
var G__62798 = (0);
seq__62661 = G__62795;
chunk__62662 = G__62796;
count__62663 = G__62797;
i__62664 = G__62798;
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
 * Renders components that have, or query for, the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_dependents_of_ident_BANG_(app__$1,ident){
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,ident);

var map__62669 = app__$1;
var map__62669__$1 = (((((!((map__62669 == null))))?(((((map__62669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62669):map__62669);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62669__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__62670 = cljs.core.deref(runtime_atom);
var map__62670__$1 = (((((!((map__62670 == null))))?(((((map__62670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62670):map__62670);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62670__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__62671 = indexes;
var map__62671__$1 = (((((!((map__62671 == null))))?(((((map__62671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62671):map__62671);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62671__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62671__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62671__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__4131__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__62675 = cljs.core.seq(classes);
var chunk__62676 = null;
var count__62677 = (0);
var i__62678 = (0);
while(true){
if((i__62678 < count__62677)){
var class$ = chunk__62676.cljs$core$IIndexed$_nth$arity$2(null,i__62678);
var seq__62695_62800 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__62697_62801 = null;
var count__62698_62802 = (0);
var i__62699_62803 = (0);
while(true){
if((i__62699_62803 < count__62698_62802)){
var component_62804 = chunk__62697_62801.cljs$core$IIndexed$_nth$arity$2(null,i__62699_62803);
var component_ident_62805 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_62804);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_62805,component_62804);


var G__62806 = seq__62695_62800;
var G__62807 = chunk__62697_62801;
var G__62808 = count__62698_62802;
var G__62809 = (i__62699_62803 + (1));
seq__62695_62800 = G__62806;
chunk__62697_62801 = G__62807;
count__62698_62802 = G__62808;
i__62699_62803 = G__62809;
continue;
} else {
var temp__5804__auto___62810 = cljs.core.seq(seq__62695_62800);
if(temp__5804__auto___62810){
var seq__62695_62811__$1 = temp__5804__auto___62810;
if(cljs.core.chunked_seq_QMARK_(seq__62695_62811__$1)){
var c__4550__auto___62812 = cljs.core.chunk_first(seq__62695_62811__$1);
var G__62813 = cljs.core.chunk_rest(seq__62695_62811__$1);
var G__62814 = c__4550__auto___62812;
var G__62815 = cljs.core.count(c__4550__auto___62812);
var G__62816 = (0);
seq__62695_62800 = G__62813;
chunk__62697_62801 = G__62814;
count__62698_62802 = G__62815;
i__62699_62803 = G__62816;
continue;
} else {
var component_62817 = cljs.core.first(seq__62695_62811__$1);
var component_ident_62818 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_62817);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_62818,component_62817);


var G__62820 = cljs.core.next(seq__62695_62811__$1);
var G__62821 = null;
var G__62822 = (0);
var G__62823 = (0);
seq__62695_62800 = G__62820;
chunk__62697_62801 = G__62821;
count__62698_62802 = G__62822;
i__62699_62803 = G__62823;
continue;
}
} else {
}
}
break;
}


var G__62826 = seq__62675;
var G__62827 = chunk__62676;
var G__62828 = count__62677;
var G__62829 = (i__62678 + (1));
seq__62675 = G__62826;
chunk__62676 = G__62827;
count__62677 = G__62828;
i__62678 = G__62829;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__62675);
if(temp__5804__auto__){
var seq__62675__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62675__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__62675__$1);
var G__62833 = cljs.core.chunk_rest(seq__62675__$1);
var G__62834 = c__4550__auto__;
var G__62835 = cljs.core.count(c__4550__auto__);
var G__62836 = (0);
seq__62675 = G__62833;
chunk__62676 = G__62834;
count__62677 = G__62835;
i__62678 = G__62836;
continue;
} else {
var class$ = cljs.core.first(seq__62675__$1);
var seq__62706_62837 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__62708_62838 = null;
var count__62709_62839 = (0);
var i__62710_62840 = (0);
while(true){
if((i__62710_62840 < count__62709_62839)){
var component_62841 = chunk__62708_62838.cljs$core$IIndexed$_nth$arity$2(null,i__62710_62840);
var component_ident_62842 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_62841);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_62842,component_62841);


var G__62843 = seq__62706_62837;
var G__62844 = chunk__62708_62838;
var G__62845 = count__62709_62839;
var G__62846 = (i__62710_62840 + (1));
seq__62706_62837 = G__62843;
chunk__62708_62838 = G__62844;
count__62709_62839 = G__62845;
i__62710_62840 = G__62846;
continue;
} else {
var temp__5804__auto___62847__$1 = cljs.core.seq(seq__62706_62837);
if(temp__5804__auto___62847__$1){
var seq__62706_62848__$1 = temp__5804__auto___62847__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62706_62848__$1)){
var c__4550__auto___62849 = cljs.core.chunk_first(seq__62706_62848__$1);
var G__62850 = cljs.core.chunk_rest(seq__62706_62848__$1);
var G__62851 = c__4550__auto___62849;
var G__62852 = cljs.core.count(c__4550__auto___62849);
var G__62853 = (0);
seq__62706_62837 = G__62850;
chunk__62708_62838 = G__62851;
count__62709_62839 = G__62852;
i__62710_62840 = G__62853;
continue;
} else {
var component_62854 = cljs.core.first(seq__62706_62848__$1);
var component_ident_62855 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_62854);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_62855,component_62854);


var G__62856 = cljs.core.next(seq__62706_62848__$1);
var G__62857 = null;
var G__62858 = (0);
var G__62859 = (0);
seq__62706_62837 = G__62856;
chunk__62708_62838 = G__62857;
count__62709_62839 = G__62858;
i__62710_62840 = G__62859;
continue;
}
} else {
}
}
break;
}


var G__62860 = cljs.core.next(seq__62675__$1);
var G__62861 = null;
var G__62862 = (0);
var G__62863 = (0);
seq__62675 = G__62860;
chunk__62676 = G__62861;
count__62677 = G__62862;
i__62678 = G__62863;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Given an app and a `property-set`: returns the components that query for the items in property-set.
 * 
 *   The `property-set` can be any sequence (ideally a set) of keywords and idents that can directly appear
 *   in a component query as a property or join key.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$props__GT_components(app__$1,property_set){
if(cljs.core.seq(property_set)){
var map__62717 = app__$1;
var map__62717__$1 = (((((!((map__62717 == null))))?(((((map__62717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62717):map__62717);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62717__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__62718 = cljs.core.deref(runtime_atom);
var map__62718__$1 = (((((!((map__62718 == null))))?(((((map__62718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62718):map__62718);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62718__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__62719 = indexes;
var map__62719__$1 = (((((!((map__62719 == null))))?(((((map__62719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62719):map__62719);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62719__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62719__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__62717,map__62717__$1,runtime_atom,map__62718,map__62718__$1,indexes,map__62719,map__62719__$1,prop__GT_classes,class__GT_components){
return (function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (classes,map__62717,map__62717__$1,runtime_atom,map__62718,map__62718__$1,indexes,map__62719,map__62719__$1,prop__GT_classes,class__GT_components){
return (function (p1__62715_SHARP_,p2__62716_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__62715_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__62716_SHARP_) : class__GT_components.call(null,p2__62716_SHARP_)));
});})(classes,map__62717,map__62717__$1,runtime_atom,map__62718,map__62718__$1,indexes,map__62719,map__62719__$1,prop__GT_classes,class__GT_components))
,cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
});})(map__62717,map__62717__$1,runtime_atom,map__62718,map__62718__$1,indexes,map__62719,map__62719__$1,prop__GT_classes,class__GT_components))
,cljs.core.PersistentHashSet.EMPTY,property_set);
} else {
return null;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_stale_components_BANG_(app__$1){
var map__62729 = app__$1;
var map__62729__$1 = (((((!((map__62729 == null))))?(((((map__62729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62729):map__62729);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62729__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62729__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__62730 = cljs.core.deref(runtime_atom);
var map__62730__$1 = (((((!((map__62730 == null))))?(((((map__62730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62730):map__62730);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62730__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62730__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62730__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62730__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__62731 = indexes;
var map__62731__$1 = (((((!((map__62731 == null))))?(((((map__62731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62731):map__62731);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62731__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62731__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62731__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62731__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__62738 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__62738__$1 = (((((!((map__62738 == null))))?(((((map__62738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62738):map__62738);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62738__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62738__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__62740_62869 = cljs.core.seq(limited_to_render);
var chunk__62742_62870 = null;
var count__62743_62871 = (0);
var i__62744_62872 = (0);
while(true){
if((i__62744_62872 < count__62743_62871)){
var c_62873 = chunk__62742_62870.cljs$core$IIndexed$_nth$arity$2(null,i__62744_62872);
var ident_62874 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_62873);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_62874,c_62873);


var G__62875 = seq__62740_62869;
var G__62876 = chunk__62742_62870;
var G__62877 = count__62743_62871;
var G__62878 = (i__62744_62872 + (1));
seq__62740_62869 = G__62875;
chunk__62742_62870 = G__62876;
count__62743_62871 = G__62877;
i__62744_62872 = G__62878;
continue;
} else {
var temp__5804__auto___62879 = cljs.core.seq(seq__62740_62869);
if(temp__5804__auto___62879){
var seq__62740_62880__$1 = temp__5804__auto___62879;
if(cljs.core.chunked_seq_QMARK_(seq__62740_62880__$1)){
var c__4550__auto___62881 = cljs.core.chunk_first(seq__62740_62880__$1);
var G__62882 = cljs.core.chunk_rest(seq__62740_62880__$1);
var G__62883 = c__4550__auto___62881;
var G__62884 = cljs.core.count(c__4550__auto___62881);
var G__62885 = (0);
seq__62740_62869 = G__62882;
chunk__62742_62870 = G__62883;
count__62743_62871 = G__62884;
i__62744_62872 = G__62885;
continue;
} else {
var c_62886 = cljs.core.first(seq__62740_62880__$1);
var ident_62887 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_62886);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_62887,c_62886);


var G__62888 = cljs.core.next(seq__62740_62880__$1);
var G__62889 = null;
var G__62890 = (0);
var G__62891 = (0);
seq__62740_62869 = G__62888;
chunk__62742_62870 = G__62889;
count__62743_62871 = G__62890;
i__62744_62872 = G__62891;
continue;
}
} else {
}
}
break;
}

var seq__62749 = cljs.core.seq(limited_idents);
var chunk__62750 = null;
var count__62751 = (0);
var i__62752 = (0);
while(true){
if((i__62752 < count__62751)){
var i = chunk__62750.cljs$core$IIndexed$_nth$arity$2(null,i__62752);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__62892 = seq__62749;
var G__62893 = chunk__62750;
var G__62894 = count__62751;
var G__62895 = (i__62752 + (1));
seq__62749 = G__62892;
chunk__62750 = G__62893;
count__62751 = G__62894;
i__62752 = G__62895;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__62749);
if(temp__5804__auto__){
var seq__62749__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62749__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__62749__$1);
var G__62896 = cljs.core.chunk_rest(seq__62749__$1);
var G__62897 = c__4550__auto__;
var G__62898 = cljs.core.count(c__4550__auto__);
var G__62899 = (0);
seq__62749 = G__62896;
chunk__62750 = G__62897;
count__62751 = G__62898;
i__62752 = G__62899;
continue;
} else {
var i = cljs.core.first(seq__62749__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__62900 = cljs.core.next(seq__62749__$1);
var G__62901 = null;
var G__62902 = (0);
var G__62903 = (0);
seq__62749 = G__62900;
chunk__62750 = G__62901;
count__62751 = G__62902;
i__62752 = G__62903;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var state_map = cljs.core.deref(state_atom);
var idents_in_joins__$1 = (function (){var or__4131__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (state_map,idents_in_joins__$1,map__62729,map__62729__$1,runtime_atom,state_atom,map__62730,map__62730__$1,indexes,last_rendered_state,to_refresh,only_refresh,map__62731,map__62731__$1,linked_props,ident__GT_components,prop__GT_classes,idents_in_joins,limited_refresh_QMARK_){
return (function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
});})(state_map,idents_in_joins__$1,map__62729,map__62729__$1,runtime_atom,state_atom,map__62730,map__62730__$1,indexes,last_rendered_state,to_refresh,only_refresh,map__62731,map__62731__$1,linked_props,ident__GT_components,prop__GT_classes,idents_in_joins,limited_refresh_QMARK_))
,cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__62759 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__62759__$1 = (((((!((map__62759 == null))))?(((((map__62759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62759):map__62759);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62759__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62759__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__62762_62904 = cljs.core.seq(all_idents);
var chunk__62763_62905 = null;
var count__62764_62906 = (0);
var i__62765_62907 = (0);
while(true){
if((i__62765_62907 < count__62764_62906)){
var i_62908 = chunk__62763_62905.cljs$core$IIndexed$_nth$arity$2(null,i__62765_62907);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_62908);


var G__62909 = seq__62762_62904;
var G__62910 = chunk__62763_62905;
var G__62911 = count__62764_62906;
var G__62912 = (i__62765_62907 + (1));
seq__62762_62904 = G__62909;
chunk__62763_62905 = G__62910;
count__62764_62906 = G__62911;
i__62765_62907 = G__62912;
continue;
} else {
var temp__5804__auto___62913 = cljs.core.seq(seq__62762_62904);
if(temp__5804__auto___62913){
var seq__62762_62914__$1 = temp__5804__auto___62913;
if(cljs.core.chunked_seq_QMARK_(seq__62762_62914__$1)){
var c__4550__auto___62915 = cljs.core.chunk_first(seq__62762_62914__$1);
var G__62916 = cljs.core.chunk_rest(seq__62762_62914__$1);
var G__62917 = c__4550__auto___62915;
var G__62918 = cljs.core.count(c__4550__auto___62915);
var G__62919 = (0);
seq__62762_62904 = G__62916;
chunk__62763_62905 = G__62917;
count__62764_62906 = G__62918;
i__62765_62907 = G__62919;
continue;
} else {
var i_62920 = cljs.core.first(seq__62762_62914__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_62920);


var G__62921 = cljs.core.next(seq__62762_62914__$1);
var G__62922 = null;
var G__62923 = (0);
var G__62924 = (0);
seq__62762_62904 = G__62921;
chunk__62763_62905 = G__62922;
count__62764_62906 = G__62923;
i__62765_62907 = G__62924;
continue;
}
} else {
}
}
break;
}

var seq__62771 = cljs.core.seq(extra_to_force);
var chunk__62772 = null;
var count__62773 = (0);
var i__62774 = (0);
while(true){
if((i__62774 < count__62773)){
var c = chunk__62772.cljs$core$IIndexed$_nth$arity$2(null,i__62774);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c),c);


var G__62928 = seq__62771;
var G__62929 = chunk__62772;
var G__62930 = count__62773;
var G__62931 = (i__62774 + (1));
seq__62771 = G__62928;
chunk__62772 = G__62929;
count__62773 = G__62930;
i__62774 = G__62931;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__62771);
if(temp__5804__auto__){
var seq__62771__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62771__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__62771__$1);
var G__62936 = cljs.core.chunk_rest(seq__62771__$1);
var G__62937 = c__4550__auto__;
var G__62938 = cljs.core.count(c__4550__auto__);
var G__62939 = (0);
seq__62771 = G__62936;
chunk__62772 = G__62937;
count__62773 = G__62938;
i__62774 = G__62939;
continue;
} else {
var c = cljs.core.first(seq__62771__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c),c);


var G__62940 = cljs.core.next(seq__62771__$1);
var G__62941 = null;
var G__62942 = (0);
var G__62943 = (0);
seq__62771 = G__62940;
chunk__62772 = G__62941;
count__62773 = G__62942;
i__62774 = G__62943;
continue;
}
} else {
return null;
}
}
break;
}
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__62781 = arguments.length;
switch (G__62781) {
case 1:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__62782){
var map__62783 = p__62782;
var map__62783__$1 = (((((!((map__62783 == null))))?(((((map__62783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62783):map__62783);
var options = map__62783__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62783__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62783__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__4131__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app__$1);
}catch (e62785){var e = e62785;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,map__62783,map__62783__$1,options,force_root_QMARK_,root_props_changed_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
});})(e,map__62783,map__62783__$1,options,force_root_QMARK_,root_props_changed_QMARK_))
,null)),null,994030978);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
});

com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
