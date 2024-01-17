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
var map__62638 = app__$1;
var map__62638__$1 = (((((!((map__62638 == null))))?(((((map__62638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62638):map__62638);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62638__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,41,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__62638,map__62638__$1,state_atom,state_map,query,q,data_tree,new_props){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c)], null);
});})(map__62638,map__62638__$1,state_atom,state_map,query,q,data_tree,new_props))
,null)),null,-172187939);
}

if(cljs.core.truth_(com.fulcrologic.fulcro.components.mounted_QMARK_(c))){
return c.setState(((function (map__62638,map__62638__$1,state_atom,state_map,query,q,data_tree,new_props){
return (function (s){
return ({"fulcro$value": new_props});
});})(map__62638,map__62638__$1,state_atom,state_map,query,q,data_tree,new_props))
);
} else {
return null;
}
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,45,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",com.fulcrologic.fulcro.components.class__GT_registry_key(com.fulcrologic.fulcro.components.react_type(c)),"queries for data that changed, but does not have an ident. If that is your application root,","consider moving that changing state to a child component."], null);
}),null)),null,-318691250);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__62644 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__62645 = null;
var count__62646 = (0);
var i__62647 = (0);
while(true){
if((i__62647 < count__62646)){
var c = chunk__62645.cljs$core$IIndexed$_nth$arity$2(null,i__62647);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__62785 = seq__62644;
var G__62786 = chunk__62645;
var G__62787 = count__62646;
var G__62788 = (i__62647 + (1));
seq__62644 = G__62785;
chunk__62645 = G__62786;
count__62646 = G__62787;
i__62647 = G__62788;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__62644);
if(temp__5804__auto__){
var seq__62644__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62644__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__62644__$1);
var G__62789 = cljs.core.chunk_rest(seq__62644__$1);
var G__62790 = c__4550__auto__;
var G__62791 = cljs.core.count(c__4550__auto__);
var G__62792 = (0);
seq__62644 = G__62789;
chunk__62645 = G__62790;
count__62646 = G__62791;
i__62647 = G__62792;
continue;
} else {
var c = cljs.core.first(seq__62644__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__62793 = cljs.core.next(seq__62644__$1);
var G__62794 = null;
var G__62795 = (0);
var G__62796 = (0);
seq__62644 = G__62793;
chunk__62645 = G__62794;
count__62646 = G__62795;
i__62647 = G__62796;
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

var map__62657 = app__$1;
var map__62657__$1 = (((((!((map__62657 == null))))?(((((map__62657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62657):map__62657);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62657__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__62658 = cljs.core.deref(runtime_atom);
var map__62658__$1 = (((((!((map__62658 == null))))?(((((map__62658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62658):map__62658);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62658__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__62659 = indexes;
var map__62659__$1 = (((((!((map__62659 == null))))?(((((map__62659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62659):map__62659);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62659__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62659__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62659__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
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
var seq__62666 = cljs.core.seq(classes);
var chunk__62667 = null;
var count__62668 = (0);
var i__62669 = (0);
while(true){
if((i__62669 < count__62668)){
var class$ = chunk__62667.cljs$core$IIndexed$_nth$arity$2(null,i__62669);
var seq__62693_62797 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__62695_62798 = null;
var count__62696_62799 = (0);
var i__62697_62800 = (0);
while(true){
if((i__62697_62800 < count__62696_62799)){
var component_62801 = chunk__62695_62798.cljs$core$IIndexed$_nth$arity$2(null,i__62697_62800);
var component_ident_62802 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_62801);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_62802,component_62801);


var G__62803 = seq__62693_62797;
var G__62804 = chunk__62695_62798;
var G__62805 = count__62696_62799;
var G__62806 = (i__62697_62800 + (1));
seq__62693_62797 = G__62803;
chunk__62695_62798 = G__62804;
count__62696_62799 = G__62805;
i__62697_62800 = G__62806;
continue;
} else {
var temp__5804__auto___62807 = cljs.core.seq(seq__62693_62797);
if(temp__5804__auto___62807){
var seq__62693_62808__$1 = temp__5804__auto___62807;
if(cljs.core.chunked_seq_QMARK_(seq__62693_62808__$1)){
var c__4550__auto___62809 = cljs.core.chunk_first(seq__62693_62808__$1);
var G__62810 = cljs.core.chunk_rest(seq__62693_62808__$1);
var G__62811 = c__4550__auto___62809;
var G__62812 = cljs.core.count(c__4550__auto___62809);
var G__62813 = (0);
seq__62693_62797 = G__62810;
chunk__62695_62798 = G__62811;
count__62696_62799 = G__62812;
i__62697_62800 = G__62813;
continue;
} else {
var component_62814 = cljs.core.first(seq__62693_62808__$1);
var component_ident_62816 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_62814);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_62816,component_62814);


var G__62817 = cljs.core.next(seq__62693_62808__$1);
var G__62818 = null;
var G__62819 = (0);
var G__62820 = (0);
seq__62693_62797 = G__62817;
chunk__62695_62798 = G__62818;
count__62696_62799 = G__62819;
i__62697_62800 = G__62820;
continue;
}
} else {
}
}
break;
}


var G__62821 = seq__62666;
var G__62822 = chunk__62667;
var G__62823 = count__62668;
var G__62824 = (i__62669 + (1));
seq__62666 = G__62821;
chunk__62667 = G__62822;
count__62668 = G__62823;
i__62669 = G__62824;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__62666);
if(temp__5804__auto__){
var seq__62666__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62666__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__62666__$1);
var G__62825 = cljs.core.chunk_rest(seq__62666__$1);
var G__62826 = c__4550__auto__;
var G__62827 = cljs.core.count(c__4550__auto__);
var G__62828 = (0);
seq__62666 = G__62825;
chunk__62667 = G__62826;
count__62668 = G__62827;
i__62669 = G__62828;
continue;
} else {
var class$ = cljs.core.first(seq__62666__$1);
var seq__62707_62829 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__62709_62830 = null;
var count__62710_62831 = (0);
var i__62711_62832 = (0);
while(true){
if((i__62711_62832 < count__62710_62831)){
var component_62833 = chunk__62709_62830.cljs$core$IIndexed$_nth$arity$2(null,i__62711_62832);
var component_ident_62834 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_62833);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_62834,component_62833);


var G__62835 = seq__62707_62829;
var G__62836 = chunk__62709_62830;
var G__62837 = count__62710_62831;
var G__62838 = (i__62711_62832 + (1));
seq__62707_62829 = G__62835;
chunk__62709_62830 = G__62836;
count__62710_62831 = G__62837;
i__62711_62832 = G__62838;
continue;
} else {
var temp__5804__auto___62839__$1 = cljs.core.seq(seq__62707_62829);
if(temp__5804__auto___62839__$1){
var seq__62707_62840__$1 = temp__5804__auto___62839__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62707_62840__$1)){
var c__4550__auto___62841 = cljs.core.chunk_first(seq__62707_62840__$1);
var G__62842 = cljs.core.chunk_rest(seq__62707_62840__$1);
var G__62843 = c__4550__auto___62841;
var G__62844 = cljs.core.count(c__4550__auto___62841);
var G__62845 = (0);
seq__62707_62829 = G__62842;
chunk__62709_62830 = G__62843;
count__62710_62831 = G__62844;
i__62711_62832 = G__62845;
continue;
} else {
var component_62846 = cljs.core.first(seq__62707_62840__$1);
var component_ident_62848 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_62846);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_62848,component_62846);


var G__62849 = cljs.core.next(seq__62707_62840__$1);
var G__62850 = null;
var G__62851 = (0);
var G__62852 = (0);
seq__62707_62829 = G__62849;
chunk__62709_62830 = G__62850;
count__62710_62831 = G__62851;
i__62711_62832 = G__62852;
continue;
}
} else {
}
}
break;
}


var G__62853 = cljs.core.next(seq__62666__$1);
var G__62854 = null;
var G__62855 = (0);
var G__62856 = (0);
seq__62666 = G__62853;
chunk__62667 = G__62854;
count__62668 = G__62855;
i__62669 = G__62856;
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
var map__62716 = app__$1;
var map__62716__$1 = (((((!((map__62716 == null))))?(((((map__62716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62716):map__62716);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62716__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__62718 = cljs.core.deref(runtime_atom);
var map__62718__$1 = (((((!((map__62718 == null))))?(((((map__62718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62718):map__62718);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62718__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__62719 = indexes;
var map__62719__$1 = (((((!((map__62719 == null))))?(((((map__62719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62719):map__62719);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62719__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62719__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__62716,map__62716__$1,runtime_atom,map__62718,map__62718__$1,indexes,map__62719,map__62719__$1,prop__GT_classes,class__GT_components){
return (function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (classes,map__62716,map__62716__$1,runtime_atom,map__62718,map__62718__$1,indexes,map__62719,map__62719__$1,prop__GT_classes,class__GT_components){
return (function (p1__62714_SHARP_,p2__62715_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__62714_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__62715_SHARP_) : class__GT_components.call(null,p2__62715_SHARP_)));
});})(classes,map__62716,map__62716__$1,runtime_atom,map__62718,map__62718__$1,indexes,map__62719,map__62719__$1,prop__GT_classes,class__GT_components))
,cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
});})(map__62716,map__62716__$1,runtime_atom,map__62718,map__62718__$1,indexes,map__62719,map__62719__$1,prop__GT_classes,class__GT_components))
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
var map__62728 = app__$1;
var map__62728__$1 = (((((!((map__62728 == null))))?(((((map__62728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62728):map__62728);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62728__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62728__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__62729 = cljs.core.deref(runtime_atom);
var map__62729__$1 = (((((!((map__62729 == null))))?(((((map__62729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62729):map__62729);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62729__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62729__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62729__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62729__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__62730 = indexes;
var map__62730__$1 = (((((!((map__62730 == null))))?(((((map__62730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62730):map__62730);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62730__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62730__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62730__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62730__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__62734 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__62734__$1 = (((((!((map__62734 == null))))?(((((map__62734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62734):map__62734);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62734__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62734__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__62736_62863 = cljs.core.seq(limited_to_render);
var chunk__62738_62864 = null;
var count__62739_62865 = (0);
var i__62740_62866 = (0);
while(true){
if((i__62740_62866 < count__62739_62865)){
var c_62867 = chunk__62738_62864.cljs$core$IIndexed$_nth$arity$2(null,i__62740_62866);
var ident_62868 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_62867);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_62868,c_62867);


var G__62869 = seq__62736_62863;
var G__62870 = chunk__62738_62864;
var G__62871 = count__62739_62865;
var G__62872 = (i__62740_62866 + (1));
seq__62736_62863 = G__62869;
chunk__62738_62864 = G__62870;
count__62739_62865 = G__62871;
i__62740_62866 = G__62872;
continue;
} else {
var temp__5804__auto___62873 = cljs.core.seq(seq__62736_62863);
if(temp__5804__auto___62873){
var seq__62736_62874__$1 = temp__5804__auto___62873;
if(cljs.core.chunked_seq_QMARK_(seq__62736_62874__$1)){
var c__4550__auto___62875 = cljs.core.chunk_first(seq__62736_62874__$1);
var G__62876 = cljs.core.chunk_rest(seq__62736_62874__$1);
var G__62877 = c__4550__auto___62875;
var G__62878 = cljs.core.count(c__4550__auto___62875);
var G__62879 = (0);
seq__62736_62863 = G__62876;
chunk__62738_62864 = G__62877;
count__62739_62865 = G__62878;
i__62740_62866 = G__62879;
continue;
} else {
var c_62880 = cljs.core.first(seq__62736_62874__$1);
var ident_62881 = com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_62880);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_62881,c_62880);


var G__62882 = cljs.core.next(seq__62736_62874__$1);
var G__62883 = null;
var G__62884 = (0);
var G__62885 = (0);
seq__62736_62863 = G__62882;
chunk__62738_62864 = G__62883;
count__62739_62865 = G__62884;
i__62740_62866 = G__62885;
continue;
}
} else {
}
}
break;
}

var seq__62745 = cljs.core.seq(limited_idents);
var chunk__62746 = null;
var count__62747 = (0);
var i__62748 = (0);
while(true){
if((i__62748 < count__62747)){
var i = chunk__62746.cljs$core$IIndexed$_nth$arity$2(null,i__62748);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__62886 = seq__62745;
var G__62887 = chunk__62746;
var G__62888 = count__62747;
var G__62889 = (i__62748 + (1));
seq__62745 = G__62886;
chunk__62746 = G__62887;
count__62747 = G__62888;
i__62748 = G__62889;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__62745);
if(temp__5804__auto__){
var seq__62745__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62745__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__62745__$1);
var G__62890 = cljs.core.chunk_rest(seq__62745__$1);
var G__62891 = c__4550__auto__;
var G__62892 = cljs.core.count(c__4550__auto__);
var G__62893 = (0);
seq__62745 = G__62890;
chunk__62746 = G__62891;
count__62747 = G__62892;
i__62748 = G__62893;
continue;
} else {
var i = cljs.core.first(seq__62745__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__62894 = cljs.core.next(seq__62745__$1);
var G__62895 = null;
var G__62896 = (0);
var G__62897 = (0);
seq__62745 = G__62894;
chunk__62746 = G__62895;
count__62747 = G__62896;
i__62748 = G__62897;
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
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (state_map,idents_in_joins__$1,map__62728,map__62728__$1,runtime_atom,state_atom,map__62729,map__62729__$1,indexes,last_rendered_state,to_refresh,only_refresh,map__62730,map__62730__$1,linked_props,ident__GT_components,prop__GT_classes,idents_in_joins,limited_refresh_QMARK_){
return (function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
});})(state_map,idents_in_joins__$1,map__62728,map__62728__$1,runtime_atom,state_atom,map__62729,map__62729__$1,indexes,last_rendered_state,to_refresh,only_refresh,map__62730,map__62730__$1,linked_props,ident__GT_components,prop__GT_classes,idents_in_joins,limited_refresh_QMARK_))
,cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__62752 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__62752__$1 = (((((!((map__62752 == null))))?(((((map__62752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62752):map__62752);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62752__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62752__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__62757_62900 = cljs.core.seq(all_idents);
var chunk__62758_62901 = null;
var count__62759_62902 = (0);
var i__62760_62903 = (0);
while(true){
if((i__62760_62903 < count__62759_62902)){
var i_62904 = chunk__62758_62901.cljs$core$IIndexed$_nth$arity$2(null,i__62760_62903);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_62904);


var G__62906 = seq__62757_62900;
var G__62907 = chunk__62758_62901;
var G__62908 = count__62759_62902;
var G__62909 = (i__62760_62903 + (1));
seq__62757_62900 = G__62906;
chunk__62758_62901 = G__62907;
count__62759_62902 = G__62908;
i__62760_62903 = G__62909;
continue;
} else {
var temp__5804__auto___62910 = cljs.core.seq(seq__62757_62900);
if(temp__5804__auto___62910){
var seq__62757_62911__$1 = temp__5804__auto___62910;
if(cljs.core.chunked_seq_QMARK_(seq__62757_62911__$1)){
var c__4550__auto___62912 = cljs.core.chunk_first(seq__62757_62911__$1);
var G__62913 = cljs.core.chunk_rest(seq__62757_62911__$1);
var G__62914 = c__4550__auto___62912;
var G__62915 = cljs.core.count(c__4550__auto___62912);
var G__62916 = (0);
seq__62757_62900 = G__62913;
chunk__62758_62901 = G__62914;
count__62759_62902 = G__62915;
i__62760_62903 = G__62916;
continue;
} else {
var i_62918 = cljs.core.first(seq__62757_62911__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_62918);


var G__62920 = cljs.core.next(seq__62757_62911__$1);
var G__62921 = null;
var G__62922 = (0);
var G__62923 = (0);
seq__62757_62900 = G__62920;
chunk__62758_62901 = G__62921;
count__62759_62902 = G__62922;
i__62760_62903 = G__62923;
continue;
}
} else {
}
}
break;
}

var seq__62764 = cljs.core.seq(extra_to_force);
var chunk__62765 = null;
var count__62766 = (0);
var i__62767 = (0);
while(true){
if((i__62767 < count__62766)){
var c = chunk__62765.cljs$core$IIndexed$_nth$arity$2(null,i__62767);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c),c);


var G__62926 = seq__62764;
var G__62927 = chunk__62765;
var G__62928 = count__62766;
var G__62929 = (i__62767 + (1));
seq__62764 = G__62926;
chunk__62765 = G__62927;
count__62766 = G__62928;
i__62767 = G__62929;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__62764);
if(temp__5804__auto__){
var seq__62764__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62764__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__62764__$1);
var G__62932 = cljs.core.chunk_rest(seq__62764__$1);
var G__62933 = c__4550__auto__;
var G__62934 = cljs.core.count(c__4550__auto__);
var G__62935 = (0);
seq__62764 = G__62932;
chunk__62765 = G__62933;
count__62766 = G__62934;
i__62767 = G__62935;
continue;
} else {
var c = cljs.core.first(seq__62764__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c),c);


var G__62936 = cljs.core.next(seq__62764__$1);
var G__62937 = null;
var G__62938 = (0);
var G__62939 = (0);
seq__62764 = G__62936;
chunk__62765 = G__62937;
count__62766 = G__62938;
i__62767 = G__62939;
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
var G__62773 = arguments.length;
switch (G__62773) {
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

com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__62776){
var map__62777 = p__62776;
var map__62777__$1 = (((((!((map__62777 == null))))?(((((map__62777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62777):map__62777);
var options = map__62777__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62777__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62777__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
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
}catch (e62779){var e = e62779;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,map__62777,map__62777__$1,options,force_root_QMARK_,root_props_changed_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
});})(e,map__62777,map__62777__$1,options,force_root_QMARK_,root_props_changed_QMARK_))
,null)),null,1274786736);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
});

com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
