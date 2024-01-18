goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__49820 = libspec;
var seq__49821 = cljs.core.seq(vec__49820);
var first__49822 = cljs.core.first(seq__49821);
var seq__49821__$1 = cljs.core.next(seq__49821);
var lib = first__49822;
var spec = seq__49821__$1;
var libspec__$1 = vec__49820;
var vec__49823 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49823,(0),null);
var vec__49826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49823,(1),null);
var seq__49827 = cljs.core.seq(vec__49826);
var first__49828 = cljs.core.first(seq__49827);
var seq__49827__$1 = cljs.core.next(seq__49827);
var _ = first__49828;
var first__49828__$1 = cljs.core.first(seq__49827__$1);
var seq__49827__$2 = cljs.core.next(seq__49827__$1);
var alias = first__49828__$1;
var post_spec = seq__49827__$2;
var post = vec__49826;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__49840 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49840,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__49840;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__49842 = cljs.core.seq(new_as_aliases);
var chunk__49843 = null;
var count__49844 = (0);
var i__49845 = (0);
while(true){
if((i__49845 < count__49844)){
var vec__49855 = chunk__49843.cljs$core$IIndexed$_nth$arity$2(null,i__49845);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49855,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49855,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__49882 = seq__49842;
var G__49883 = chunk__49843;
var G__49884 = count__49844;
var G__49885 = (i__49845 + (1));
seq__49842 = G__49882;
chunk__49843 = G__49883;
count__49844 = G__49884;
i__49845 = G__49885;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__49842);
if(temp__5804__auto__){
var seq__49842__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49842__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__49842__$1);
var G__49886 = cljs.core.chunk_rest(seq__49842__$1);
var G__49887 = c__5568__auto__;
var G__49888 = cljs.core.count(c__5568__auto__);
var G__49889 = (0);
seq__49842 = G__49886;
chunk__49843 = G__49887;
count__49844 = G__49888;
i__49845 = G__49889;
continue;
} else {
var vec__49858 = cljs.core.first(seq__49842__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49858,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49858,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__49890 = cljs.core.next(seq__49842__$1);
var G__49891 = null;
var G__49892 = (0);
var G__49893 = (0);
seq__49842 = G__49890;
chunk__49843 = G__49891;
count__49844 = G__49892;
i__49845 = G__49893;
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
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__49863 = arguments.length;
switch (G__49863) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__49865 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__49865__$1 = cljs.core.__destructure_map(map__49865);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49865__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49865__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__49866 = ret__$1;
var G__49866__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__49866,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__49866);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__49866__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__49866__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__49867,p__49868){
var map__49869 = p__49867;
var map__49869__$1 = cljs.core.__destructure_map(map__49869);
var ret__$1 = map__49869__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49869__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__49870 = p__49868;
var seq__49871 = cljs.core.seq(vec__49870);
var first__49872 = cljs.core.first(seq__49871);
var seq__49871__$1 = cljs.core.next(seq__49871);
var spec_key = first__49872;
var libspecs = seq__49871__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__49874 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__49874__$1 = cljs.core.__destructure_map(map__49874);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49874__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49874__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__49876 = ret__$1;
var G__49876__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__49876,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__49876);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__49876__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__49876__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
