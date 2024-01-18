goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
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
if(cljs.core.truth_((function (){var and__5043__auto__ = c;
if(cljs.core.truth_(and__5043__auto__)){
return ident;
} else {
return and__5043__auto__;
}
})())){
var map__65009 = app__$1;
var map__65009__$1 = cljs.core.__destructure_map(map__65009);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65009__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var prior_computed = (function (){var or__5045__auto__ = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_computed.call(null,c));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = (function (){var G__65010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
var G__65011 = prior_computed;
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__65010,G__65011) : com.fulcrologic.fulcro.components.computed.call(null,G__65010,G__65011));
})();
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,44,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c),"See https://book.fulcrologic.com/#err-id-opt-render-empty-query"], null);
}),null)),null,1176005040,null);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,48,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",(function (){var G__65012 = com.fulcrologic.fulcro.components.react_type(c);
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__65012) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__65012));
})(),"queries for data that changed, but does not have an ident."], null);
}),null)),null,-456399244,null);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__65013 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__65014 = null;
var count__65015 = (0);
var i__65016 = (0);
while(true){
if((i__65016 < count__65015)){
var c = chunk__65014.cljs$core$IIndexed$_nth$arity$2(null,i__65016);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__65133 = seq__65013;
var G__65134 = chunk__65014;
var G__65135 = count__65015;
var G__65136 = (i__65016 + (1));
seq__65013 = G__65133;
chunk__65014 = G__65134;
count__65015 = G__65135;
i__65016 = G__65136;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65013);
if(temp__5804__auto__){
var seq__65013__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65013__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__65013__$1);
var G__65139 = cljs.core.chunk_rest(seq__65013__$1);
var G__65140 = c__5568__auto__;
var G__65141 = cljs.core.count(c__5568__auto__);
var G__65142 = (0);
seq__65013 = G__65139;
chunk__65014 = G__65140;
count__65015 = G__65141;
i__65016 = G__65142;
continue;
} else {
var c = cljs.core.first(seq__65013__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__65143 = cljs.core.next(seq__65013__$1);
var G__65144 = null;
var G__65145 = (0);
var G__65146 = (0);
seq__65013 = G__65143;
chunk__65014 = G__65144;
count__65015 = G__65145;
i__65016 = G__65146;
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

var map__65017 = app__$1;
var map__65017__$1 = cljs.core.__destructure_map(map__65017);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65017__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__65018 = cljs.core.deref(runtime_atom);
var map__65018__$1 = cljs.core.__destructure_map(map__65018);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65018__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__65019 = indexes;
var map__65019__$1 = cljs.core.__destructure_map(map__65019);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65019__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65019__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65019__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__5045__auto__ = idents_in_joins;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__65020 = cljs.core.seq(classes);
var chunk__65021 = null;
var count__65022 = (0);
var i__65023 = (0);
while(true){
if((i__65023 < count__65022)){
var class$ = chunk__65021.cljs$core$IIndexed$_nth$arity$2(null,i__65023);
var seq__65049_65149 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__65051_65150 = null;
var count__65052_65151 = (0);
var i__65053_65152 = (0);
while(true){
if((i__65053_65152 < count__65052_65151)){
var component_65154 = chunk__65051_65150.cljs$core$IIndexed$_nth$arity$2(null,i__65053_65152);
var component_ident_65156 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_65154) : com.fulcrologic.fulcro.components.get_ident.call(null,component_65154));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_65156,component_65154);


var G__65157 = seq__65049_65149;
var G__65158 = chunk__65051_65150;
var G__65159 = count__65052_65151;
var G__65160 = (i__65053_65152 + (1));
seq__65049_65149 = G__65157;
chunk__65051_65150 = G__65158;
count__65052_65151 = G__65159;
i__65053_65152 = G__65160;
continue;
} else {
var temp__5804__auto___65161 = cljs.core.seq(seq__65049_65149);
if(temp__5804__auto___65161){
var seq__65049_65162__$1 = temp__5804__auto___65161;
if(cljs.core.chunked_seq_QMARK_(seq__65049_65162__$1)){
var c__5568__auto___65163 = cljs.core.chunk_first(seq__65049_65162__$1);
var G__65164 = cljs.core.chunk_rest(seq__65049_65162__$1);
var G__65165 = c__5568__auto___65163;
var G__65166 = cljs.core.count(c__5568__auto___65163);
var G__65167 = (0);
seq__65049_65149 = G__65164;
chunk__65051_65150 = G__65165;
count__65052_65151 = G__65166;
i__65053_65152 = G__65167;
continue;
} else {
var component_65168 = cljs.core.first(seq__65049_65162__$1);
var component_ident_65169 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_65168) : com.fulcrologic.fulcro.components.get_ident.call(null,component_65168));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_65169,component_65168);


var G__65170 = cljs.core.next(seq__65049_65162__$1);
var G__65171 = null;
var G__65172 = (0);
var G__65173 = (0);
seq__65049_65149 = G__65170;
chunk__65051_65150 = G__65171;
count__65052_65151 = G__65172;
i__65053_65152 = G__65173;
continue;
}
} else {
}
}
break;
}


var G__65174 = seq__65020;
var G__65175 = chunk__65021;
var G__65176 = count__65022;
var G__65177 = (i__65023 + (1));
seq__65020 = G__65174;
chunk__65021 = G__65175;
count__65022 = G__65176;
i__65023 = G__65177;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65020);
if(temp__5804__auto__){
var seq__65020__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65020__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__65020__$1);
var G__65178 = cljs.core.chunk_rest(seq__65020__$1);
var G__65179 = c__5568__auto__;
var G__65180 = cljs.core.count(c__5568__auto__);
var G__65181 = (0);
seq__65020 = G__65178;
chunk__65021 = G__65179;
count__65022 = G__65180;
i__65023 = G__65181;
continue;
} else {
var class$ = cljs.core.first(seq__65020__$1);
var seq__65064_65185 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__65066_65186 = null;
var count__65067_65187 = (0);
var i__65068_65188 = (0);
while(true){
if((i__65068_65188 < count__65067_65187)){
var component_65189 = chunk__65066_65186.cljs$core$IIndexed$_nth$arity$2(null,i__65068_65188);
var component_ident_65190 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_65189) : com.fulcrologic.fulcro.components.get_ident.call(null,component_65189));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_65190,component_65189);


var G__65192 = seq__65064_65185;
var G__65193 = chunk__65066_65186;
var G__65194 = count__65067_65187;
var G__65195 = (i__65068_65188 + (1));
seq__65064_65185 = G__65192;
chunk__65066_65186 = G__65193;
count__65067_65187 = G__65194;
i__65068_65188 = G__65195;
continue;
} else {
var temp__5804__auto___65196__$1 = cljs.core.seq(seq__65064_65185);
if(temp__5804__auto___65196__$1){
var seq__65064_65197__$1 = temp__5804__auto___65196__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65064_65197__$1)){
var c__5568__auto___65199 = cljs.core.chunk_first(seq__65064_65197__$1);
var G__65201 = cljs.core.chunk_rest(seq__65064_65197__$1);
var G__65202 = c__5568__auto___65199;
var G__65203 = cljs.core.count(c__5568__auto___65199);
var G__65204 = (0);
seq__65064_65185 = G__65201;
chunk__65066_65186 = G__65202;
count__65067_65187 = G__65203;
i__65068_65188 = G__65204;
continue;
} else {
var component_65206 = cljs.core.first(seq__65064_65197__$1);
var component_ident_65207 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_65206) : com.fulcrologic.fulcro.components.get_ident.call(null,component_65206));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_65207,component_65206);


var G__65209 = cljs.core.next(seq__65064_65197__$1);
var G__65210 = null;
var G__65211 = (0);
var G__65212 = (0);
seq__65064_65185 = G__65209;
chunk__65066_65186 = G__65210;
count__65067_65187 = G__65211;
i__65068_65188 = G__65212;
continue;
}
} else {
}
}
break;
}


var G__65213 = cljs.core.next(seq__65020__$1);
var G__65214 = null;
var G__65215 = (0);
var G__65216 = (0);
seq__65020 = G__65213;
chunk__65021 = G__65214;
count__65022 = G__65215;
i__65023 = G__65216;
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
var map__65078 = app__$1;
var map__65078__$1 = cljs.core.__destructure_map(map__65078);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65078__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__65079 = cljs.core.deref(runtime_atom);
var map__65079__$1 = cljs.core.__destructure_map(map__65079);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65079__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__65080 = indexes;
var map__65080__$1 = cljs.core.__destructure_map(map__65080);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65080__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65080__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__65076_SHARP_,p2__65077_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__65076_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__65077_SHARP_) : class__GT_components.call(null,p2__65077_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
}),cljs.core.PersistentHashSet.EMPTY,property_set);
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
var map__65085 = app__$1;
var map__65085__$1 = cljs.core.__destructure_map(map__65085);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65085__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65085__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__65086 = cljs.core.deref(runtime_atom);
var map__65086__$1 = cljs.core.__destructure_map(map__65086);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65086__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65086__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65086__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65086__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__65087 = indexes;
var map__65087__$1 = cljs.core.__destructure_map(map__65087);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65087__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65087__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65087__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65087__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__65093 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__65093__$1 = cljs.core.__destructure_map(map__65093);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65093__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65093__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__65094_65223 = cljs.core.seq(limited_to_render);
var chunk__65096_65224 = null;
var count__65097_65225 = (0);
var i__65098_65226 = (0);
while(true){
if((i__65098_65226 < count__65097_65225)){
var c_65227 = chunk__65096_65224.cljs$core$IIndexed$_nth$arity$2(null,i__65098_65226);
var ident_65228 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_65227) : com.fulcrologic.fulcro.components.get_ident.call(null,c_65227));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_65228,c_65227);


var G__65229 = seq__65094_65223;
var G__65230 = chunk__65096_65224;
var G__65231 = count__65097_65225;
var G__65232 = (i__65098_65226 + (1));
seq__65094_65223 = G__65229;
chunk__65096_65224 = G__65230;
count__65097_65225 = G__65231;
i__65098_65226 = G__65232;
continue;
} else {
var temp__5804__auto___65233 = cljs.core.seq(seq__65094_65223);
if(temp__5804__auto___65233){
var seq__65094_65234__$1 = temp__5804__auto___65233;
if(cljs.core.chunked_seq_QMARK_(seq__65094_65234__$1)){
var c__5568__auto___65235 = cljs.core.chunk_first(seq__65094_65234__$1);
var G__65236 = cljs.core.chunk_rest(seq__65094_65234__$1);
var G__65237 = c__5568__auto___65235;
var G__65238 = cljs.core.count(c__5568__auto___65235);
var G__65239 = (0);
seq__65094_65223 = G__65236;
chunk__65096_65224 = G__65237;
count__65097_65225 = G__65238;
i__65098_65226 = G__65239;
continue;
} else {
var c_65241 = cljs.core.first(seq__65094_65234__$1);
var ident_65242 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_65241) : com.fulcrologic.fulcro.components.get_ident.call(null,c_65241));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_65242,c_65241);


var G__65243 = cljs.core.next(seq__65094_65234__$1);
var G__65244 = null;
var G__65245 = (0);
var G__65246 = (0);
seq__65094_65223 = G__65243;
chunk__65096_65224 = G__65244;
count__65097_65225 = G__65245;
i__65098_65226 = G__65246;
continue;
}
} else {
}
}
break;
}

var seq__65100 = cljs.core.seq(limited_idents);
var chunk__65101 = null;
var count__65102 = (0);
var i__65103 = (0);
while(true){
if((i__65103 < count__65102)){
var i = chunk__65101.cljs$core$IIndexed$_nth$arity$2(null,i__65103);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__65248 = seq__65100;
var G__65249 = chunk__65101;
var G__65250 = count__65102;
var G__65251 = (i__65103 + (1));
seq__65100 = G__65248;
chunk__65101 = G__65249;
count__65102 = G__65250;
i__65103 = G__65251;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65100);
if(temp__5804__auto__){
var seq__65100__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65100__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__65100__$1);
var G__65252 = cljs.core.chunk_rest(seq__65100__$1);
var G__65253 = c__5568__auto__;
var G__65254 = cljs.core.count(c__5568__auto__);
var G__65255 = (0);
seq__65100 = G__65252;
chunk__65101 = G__65253;
count__65102 = G__65254;
i__65103 = G__65255;
continue;
} else {
var i = cljs.core.first(seq__65100__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__65256 = cljs.core.next(seq__65100__$1);
var G__65257 = null;
var G__65258 = (0);
var G__65259 = (0);
seq__65100 = G__65256;
chunk__65101 = G__65257;
count__65102 = G__65258;
i__65103 = G__65259;
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
var idents_in_joins__$1 = (function (){var or__5045__auto__ = idents_in_joins;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__65105 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__65105__$1 = cljs.core.__destructure_map(map__65105);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65105__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65105__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__65107_65260 = cljs.core.seq(all_idents);
var chunk__65108_65261 = null;
var count__65109_65262 = (0);
var i__65110_65263 = (0);
while(true){
if((i__65110_65263 < count__65109_65262)){
var i_65264 = chunk__65108_65261.cljs$core$IIndexed$_nth$arity$2(null,i__65110_65263);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_65264);


var G__65265 = seq__65107_65260;
var G__65266 = chunk__65108_65261;
var G__65267 = count__65109_65262;
var G__65268 = (i__65110_65263 + (1));
seq__65107_65260 = G__65265;
chunk__65108_65261 = G__65266;
count__65109_65262 = G__65267;
i__65110_65263 = G__65268;
continue;
} else {
var temp__5804__auto___65269 = cljs.core.seq(seq__65107_65260);
if(temp__5804__auto___65269){
var seq__65107_65270__$1 = temp__5804__auto___65269;
if(cljs.core.chunked_seq_QMARK_(seq__65107_65270__$1)){
var c__5568__auto___65271 = cljs.core.chunk_first(seq__65107_65270__$1);
var G__65272 = cljs.core.chunk_rest(seq__65107_65270__$1);
var G__65273 = c__5568__auto___65271;
var G__65274 = cljs.core.count(c__5568__auto___65271);
var G__65275 = (0);
seq__65107_65260 = G__65272;
chunk__65108_65261 = G__65273;
count__65109_65262 = G__65274;
i__65110_65263 = G__65275;
continue;
} else {
var i_65276 = cljs.core.first(seq__65107_65270__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_65276);


var G__65277 = cljs.core.next(seq__65107_65270__$1);
var G__65278 = null;
var G__65279 = (0);
var G__65280 = (0);
seq__65107_65260 = G__65277;
chunk__65108_65261 = G__65278;
count__65109_65262 = G__65279;
i__65110_65263 = G__65280;
continue;
}
} else {
}
}
break;
}

var seq__65112 = cljs.core.seq(extra_to_force);
var chunk__65113 = null;
var count__65114 = (0);
var i__65115 = (0);
while(true){
if((i__65115 < count__65114)){
var c = chunk__65113.cljs$core$IIndexed$_nth$arity$2(null,i__65115);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__65281 = seq__65112;
var G__65282 = chunk__65113;
var G__65283 = count__65114;
var G__65284 = (i__65115 + (1));
seq__65112 = G__65281;
chunk__65113 = G__65282;
count__65114 = G__65283;
i__65115 = G__65284;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65112);
if(temp__5804__auto__){
var seq__65112__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65112__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__65112__$1);
var G__65285 = cljs.core.chunk_rest(seq__65112__$1);
var G__65286 = c__5568__auto__;
var G__65287 = cljs.core.count(c__5568__auto__);
var G__65288 = (0);
seq__65112 = G__65285;
chunk__65113 = G__65286;
count__65114 = G__65287;
i__65115 = G__65288;
continue;
} else {
var c = cljs.core.first(seq__65112__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__65289 = cljs.core.next(seq__65112__$1);
var G__65290 = null;
var G__65291 = (0);
var G__65292 = (0);
seq__65112 = G__65289;
chunk__65113 = G__65290;
count__65114 = G__65291;
i__65115 = G__65292;
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
 * DEPRECATED: Careful use of hooks/use-component will give a much more optimized experience, and async rendering in
 * React 18 may break with this renderer. Use at your own risk with React 18+.
 * 
 *   The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__65117 = arguments.length;
switch (G__65117) {
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

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__65118){
var map__65119 = p__65118;
var map__65119__$1 = cljs.core.__destructure_map(map__65119);
var options = map__65119__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65119__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65119__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__5045__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app__$1);
}catch (e65120){var e = e65120;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,151,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,-1814536359,null);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
