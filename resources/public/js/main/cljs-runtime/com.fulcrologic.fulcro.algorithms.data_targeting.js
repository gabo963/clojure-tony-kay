goog.provide('com.fulcrologic.fulcro.algorithms.data_targeting');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('clojure.set');
goog.require('ghostwheel.core');
goog.require('taoensso.timbre');
goog.require('edn_query_language.core');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","target","com.fulcrologic.fulcro.algorithms.data-targeting/target",-1540673140),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
/**
 * Specifies a target that should place edges in the graph at multiple locations.
 * 
 *   `targets` - Any number of targets.  A target can be a simple path (as a vector), or other
 *   special targets like `append-to` and `prepend-to`.
 */
com.fulcrologic.fulcro.algorithms.data_targeting.multiple_targets = (function com$fulcrologic$fulcro$algorithms$data_targeting$multiple_targets(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61921 = arguments.length;
var i__4731__auto___61922 = (0);
while(true){
if((i__4731__auto___61922 < len__4730__auto___61921)){
args__4736__auto__.push((arguments[i__4731__auto___61922]));

var G__61923 = (i__4731__auto___61922 + (1));
i__4731__auto___61922 = G__61923;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.data_targeting.multiple_targets.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.algorithms.data_targeting.multiple_targets.cljs$core$IFn$_invoke$arity$variadic = (function (targets){
return cljs.core.with_meta(cljs.core.vec(targets),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","multiple-targets","com.fulcrologic.fulcro.algorithms.data-targeting/multiple-targets",-961178187),true], null));
});

com.fulcrologic.fulcro.algorithms.data_targeting.multiple_targets.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.algorithms.data_targeting.multiple_targets.cljs$lang$applyTo = (function (seq61900){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61900));
});

/**
 * Specifies a to-many target that will preprend an edge to some to-many edge. NOTE: this kind of target will not
 *   create duplicates in the target list.
 * 
 *   `target` - A vector (path) in the normalized database of the to-many list of idents.
 *   
 */
com.fulcrologic.fulcro.algorithms.data_targeting.prepend_to = (function com$fulcrologic$fulcro$algorithms$data_targeting$prepend_to(target){
return cljs.core.with_meta(target,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","prepend-target","com.fulcrologic.fulcro.algorithms.data-targeting/prepend-target",-2131834737),true], null));
});
/**
 * Specifies a to-many target that will append an edge to some to-many edge. NOTE: this kind of target will not
 *   create duplicates in the target list.
 * 
 *   `target` - A vector (path) in the normalized database of the to-many list of idents.
 */
com.fulcrologic.fulcro.algorithms.data_targeting.append_to = (function com$fulcrologic$fulcro$algorithms$data_targeting$append_to(target){
return cljs.core.with_meta(target,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","append-target","com.fulcrologic.fulcro.algorithms.data-targeting/append-target",278573074),true], null));
});
/**
 * Specifies a target that will replace an edge at some normalized location.
 * 
 *   `target` - A vector (path) in the normalized database. This path can include numbers to target some element
 *   of an existing to-many list of idents.
 */
com.fulcrologic.fulcro.algorithms.data_targeting.replace_at = (function com$fulcrologic$fulcro$algorithms$data_targeting$replace_at(target){
return cljs.core.with_meta(target,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","replace-target","com.fulcrologic.fulcro.algorithms.data-targeting/replace-target",998217595),true], null));
});
com.fulcrologic.fulcro.algorithms.data_targeting.replacement_target_QMARK_ = (function com$fulcrologic$fulcro$algorithms$data_targeting$replacement_target_QMARK_(t){
return cljs.core.boolean$(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","replace-target","com.fulcrologic.fulcro.algorithms.data-targeting/replace-target",998217595).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(t)));
});
com.fulcrologic.fulcro.algorithms.data_targeting.prepend_target_QMARK_ = (function com$fulcrologic$fulcro$algorithms$data_targeting$prepend_target_QMARK_(t){
return cljs.core.boolean$(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","prepend-target","com.fulcrologic.fulcro.algorithms.data-targeting/prepend-target",-2131834737).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(t)));
});
com.fulcrologic.fulcro.algorithms.data_targeting.append_target_QMARK_ = (function com$fulcrologic$fulcro$algorithms$data_targeting$append_target_QMARK_(t){
return cljs.core.boolean$(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","append-target","com.fulcrologic.fulcro.algorithms.data-targeting/append-target",278573074).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(t)));
});
com.fulcrologic.fulcro.algorithms.data_targeting.multiple_targets_QMARK_ = (function com$fulcrologic$fulcro$algorithms$data_targeting$multiple_targets_QMARK_(t){
return cljs.core.boolean$(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","multiple-targets","com.fulcrologic.fulcro.algorithms.data-targeting/multiple-targets",-961178187).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(t)));
});
/**
 * Is the given target special? This means it is not just a plain vector path, but is instead something like
 *   an append.
 */
com.fulcrologic.fulcro.algorithms.data_targeting.special_target_QMARK_ = (function com$fulcrologic$fulcro$algorithms$data_targeting$special_target_QMARK_(target){
return cljs.core.boolean$(cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(cljs.core.meta(target))),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","prepend-target","com.fulcrologic.fulcro.algorithms.data-targeting/prepend-target",-2131834737),null,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","append-target","com.fulcrologic.fulcro.algorithms.data-targeting/append-target",278573074),null,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","multiple-targets","com.fulcrologic.fulcro.algorithms.data-targeting/multiple-targets",-961178187),null,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","replace-target","com.fulcrologic.fulcro.algorithms.data-targeting/replace-target",998217595),null], null), null))));
});
/**
 * Integrate an ident into any number of places in the app state. This function is safe to use within mutation
 *   implementations as a general helper function.
 * 
 *   The named parameters can be specified any number of times. They are:
 * 
 *   - append:  A vector (path) to a list in your app state where this new object's ident should be appended. Will not append
 *   the ident if that ident is already in the list.
 *   - prepend: A vector (path) to a list in your app state where this new object's ident should be prepended. Will not place
 *   the ident if that ident is already in the list.
 *   - replace: A vector (path) to a specific location in app-state where this object's ident should be placed. Can target a to-one or to-many.
 * If the target is a vector element then that element must already exist in the vector.
 * 
 *   NOTE: `ident` does not have to be an ident if you want to place denormalized data.  It can really be anything.
 * 
 *   Returns the updated state map.
 */
com.fulcrologic.fulcro.algorithms.data_targeting.integrate_ident_STAR_ = (function com$fulcrologic$fulcro$algorithms$data_targeting$integrate_ident_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___61925 = arguments.length;
var i__4731__auto___61926 = (0);
while(true){
if((i__4731__auto___61926 < len__4730__auto___61925)){
args__4736__auto__.push((arguments[i__4731__auto___61926]));

var G__61927 = (i__4731__auto___61926 + (1));
i__4731__auto___61926 = G__61927;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.data_targeting.integrate_ident_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.fulcrologic.fulcro.algorithms.data_targeting.integrate_ident_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (state,ident,named_parameters){
var actions = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),named_parameters);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (actions){
return (function (state__$1,p__61911){
var vec__61912 = p__61911;
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61912,(0),null);
var data_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61912,(1),null);
var already_has_ident_at_path_QMARK_ = ((function (vec__61912,command,data_path,actions){
return (function (data_path__$1){
return cljs.core.some(((function (vec__61912,command,data_path,actions){
return (function (p1__61906_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__61906_SHARP_,ident);
});})(vec__61912,command,data_path,actions))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,data_path__$1));
});})(vec__61912,command,data_path,actions))
;
var G__61915 = command;
var G__61915__$1 = (((G__61915 instanceof cljs.core.Keyword))?G__61915.fqn:null);
switch (G__61915__$1) {
case "prepend":
if(cljs.core.truth_(already_has_ident_at_path_QMARK_(data_path))){
return state__$1;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state__$1,data_path,((function (G__61915,G__61915__$1,already_has_ident_at_path_QMARK_,vec__61912,command,data_path,actions){
return (function (p1__61907_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident], null),p1__61907_SHARP_);
});})(G__61915,G__61915__$1,already_has_ident_at_path_QMARK_,vec__61912,command,data_path,actions))
);
}

break;
case "append":
if(cljs.core.truth_(already_has_ident_at_path_QMARK_(data_path))){
return state__$1;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,data_path,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),ident);
}

break;
case "replace":
var path_to_vector = cljs.core.butlast(data_path);
var to_many_QMARK_ = ((cljs.core.seq(path_to_vector)) && (cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,path_to_vector))));
var index = cljs.core.last(data_path);
var vector = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,path_to_vector);
if(cljs.core.vector_QMARK_(data_path)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.data-targeting",null,93,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (path_to_vector,to_many_QMARK_,index,vector,G__61915,G__61915__$1,already_has_ident_at_path_QMARK_,vec__61912,command,data_path,actions){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Replacement path must be a vector. You passed: ",data_path], null);
});})(path_to_vector,to_many_QMARK_,index,vector,G__61915,G__61915__$1,already_has_ident_at_path_QMARK_,vec__61912,command,data_path,actions))
,null)),null,1167373243);
}

if(to_many_QMARK_){
if((!(cljs.core.vector_QMARK_(vector)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.data-targeting",null,96,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (path_to_vector,to_many_QMARK_,index,vector,G__61915,G__61915__$1,already_has_ident_at_path_QMARK_,vec__61912,command,data_path,actions){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Path for replacement must be a vector"], null);
});})(path_to_vector,to_many_QMARK_,index,vector,G__61915,G__61915__$1,already_has_ident_at_path_QMARK_,vec__61912,command,data_path,actions))
,null)),null,-1715404983);
} else {
if((!(typeof index === 'number'))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.data-targeting",null,97,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (path_to_vector,to_many_QMARK_,index,vector,G__61915,G__61915__$1,already_has_ident_at_path_QMARK_,vec__61912,command,data_path,actions){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Path for replacement must end in a vector index"], null);
});})(path_to_vector,to_many_QMARK_,index,vector,G__61915,G__61915__$1,already_has_ident_at_path_QMARK_,vec__61912,command,data_path,actions))
,null)),null,1482682498);
} else {
if((!(cljs.core.contains_QMARK_(vector,index)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.data-targeting",null,98,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (path_to_vector,to_many_QMARK_,index,vector,G__61915,G__61915__$1,already_has_ident_at_path_QMARK_,vec__61912,command,data_path,actions){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Target vector for replacement does not have an item at index ",index], null);
});})(path_to_vector,to_many_QMARK_,index,vector,G__61915,G__61915__$1,already_has_ident_at_path_QMARK_,vec__61912,command,data_path,actions))
,null)),null,859538699);
} else {
}
}
}
} else {
}

return cljs.core.assoc_in(state__$1,data_path,ident);

break;
default:
return state__$1;

}
});})(actions))
,state,actions);
});

com.fulcrologic.fulcro.algorithms.data_targeting.integrate_ident_STAR_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.fulcrologic.fulcro.algorithms.data_targeting.integrate_ident_STAR_.cljs$lang$applyTo = (function (seq61908){
var G__61909 = cljs.core.first(seq61908);
var seq61908__$1 = cljs.core.next(seq61908);
var G__61910 = cljs.core.first(seq61908__$1);
var seq61908__$2 = cljs.core.next(seq61908__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61909,G__61910,seq61908__$2);
});

/**
 * Process a load target (which can be a multiple-target).
 * 
 *   `state-map` - the state-map
 *   `source-path` - A keyword, ident, or app-state path.  If the source path is an ident, then that is what is placed
 *   in app state.  If it is a keyword or longer path then the thing at that location in app state is pulled from app state
 *   and copied to the target location(s).
 *   `target` - The target(s)
 *   `remove-source?` - When true the source will be removed from app state once it has been written to the new location.
 * 
 *   Returns an updated state-map with the given changes.
 */
com.fulcrologic.fulcro.algorithms.data_targeting.process_target = (function com$fulcrologic$fulcro$algorithms$data_targeting$process_target(var_args){
var G__61917 = arguments.length;
switch (G__61917) {
case 3:
return com.fulcrologic.fulcro.algorithms.data_targeting.process_target.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.algorithms.data_targeting.process_target.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.data_targeting.process_target.cljs$core$IFn$_invoke$arity$3 = (function (state_map,source_path,target){
return com.fulcrologic.fulcro.algorithms.data_targeting.process_target.cljs$core$IFn$_invoke$arity$4(state_map,source_path,target,true);
});

com.fulcrologic.fulcro.algorithms.data_targeting.process_target.cljs$core$IFn$_invoke$arity$4 = (function (state_map,source_path,target,remove_source_QMARK_){
var item_to_place = ((edn_query_language.core.ident_QMARK_(source_path))?source_path:(((source_path instanceof cljs.core.Keyword))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,source_path):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_map,source_path)
));
var many_idents_QMARK_ = ((cljs.core.vector_QMARK_(item_to_place)) && (cljs.core.every_QMARK_(edn_query_language.core.ident_QMARK_,item_to_place)));
if(((edn_query_language.core.ident_QMARK_(source_path)) && ((!(com.fulcrologic.fulcro.algorithms.data_targeting.special_target_QMARK_(target)))))){
return cljs.core.assoc_in(state_map,target,item_to_place);
} else {
if((!(com.fulcrologic.fulcro.algorithms.data_targeting.special_target_QMARK_(target)))){
var G__61918 = cljs.core.assoc_in(state_map,target,item_to_place);
if(cljs.core.truth_(remove_source_QMARK_)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__61918,source_path);
} else {
return G__61918;
}
} else {
if(com.fulcrologic.fulcro.algorithms.data_targeting.multiple_targets_QMARK_(target)){
var G__61919 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (item_to_place,many_idents_QMARK_){
return (function (s,t){
return com.fulcrologic.fulcro.algorithms.data_targeting.process_target.cljs$core$IFn$_invoke$arity$4(s,source_path,t,false);
});})(item_to_place,many_idents_QMARK_))
,state_map,target);
if(cljs.core.truth_((function (){var and__4120__auto__ = (!(edn_query_language.core.ident_QMARK_(source_path)));
if(and__4120__auto__){
return remove_source_QMARK_;
} else {
return and__4120__auto__;
}
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__61919,source_path);
} else {
return G__61919;
}
} else {
if(((many_idents_QMARK_) && (com.fulcrologic.fulcro.algorithms.data_targeting.special_target_QMARK_(target)))){
var state = (cljs.core.truth_(remove_source_QMARK_)?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_map,source_path):state_map);
var target_has_many_QMARK_ = cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,target));
if(target_has_many_QMARK_){
if(com.fulcrologic.fulcro.algorithms.data_targeting.prepend_target_QMARK_(target)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,target,((function (state,target_has_many_QMARK_,item_to_place,many_idents_QMARK_){
return (function (v){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(item_to_place,v));
});})(state,target_has_many_QMARK_,item_to_place,many_idents_QMARK_))
);
} else {
if(com.fulcrologic.fulcro.algorithms.data_targeting.append_target_QMARK_(target)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,target,((function (state,target_has_many_QMARK_,item_to_place,many_idents_QMARK_){
return (function (v){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(v,item_to_place));
});})(state,target_has_many_QMARK_,item_to_place,many_idents_QMARK_))
);
} else {
return state;

}
}
} else {
return cljs.core.assoc_in(state,target,item_to_place);
}
} else {
if(com.fulcrologic.fulcro.algorithms.data_targeting.special_target_QMARK_(target)){
var G__61920 = state_map;
var G__61920__$1 = (cljs.core.truth_(remove_source_QMARK_)?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__61920,source_path):G__61920);
var G__61920__$2 = ((com.fulcrologic.fulcro.algorithms.data_targeting.prepend_target_QMARK_(target))?com.fulcrologic.fulcro.algorithms.data_targeting.integrate_ident_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__61920__$1,item_to_place,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prepend","prepend",342616040),target], 0)):G__61920__$1);
var G__61920__$3 = ((com.fulcrologic.fulcro.algorithms.data_targeting.append_target_QMARK_(target))?com.fulcrologic.fulcro.algorithms.data_targeting.integrate_ident_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__61920__$2,item_to_place,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"append","append",-291298229),target], 0)):G__61920__$2);
if(com.fulcrologic.fulcro.algorithms.data_targeting.replacement_target_QMARK_(target)){
return com.fulcrologic.fulcro.algorithms.data_targeting.integrate_ident_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__61920__$3,item_to_place,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"replace","replace",-786587770),target], 0));
} else {
return G__61920__$3;
}
} else {
return state_map;

}
}
}
}
}
});

com.fulcrologic.fulcro.algorithms.data_targeting.process_target.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.data_targeting.js.map
