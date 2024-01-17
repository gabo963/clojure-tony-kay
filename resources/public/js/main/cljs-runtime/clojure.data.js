goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__39906){
var vec__39907 = p__39906;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39907,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39907,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__39912 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39912,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39912,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39912,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__39917 = arguments.length;
switch (G__39917) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__39949_40123 = clojure.data.equality_partition;
var G__39950_40124 = "null";
var G__39951_40125 = ((function (G__39949_40123,G__39950_40124){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__39949_40123,G__39950_40124))
;
goog.object.set(G__39949_40123,G__39950_40124,G__39951_40125);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__39959_40135 = clojure.data.equality_partition;
var G__39960_40136 = "string";
var G__39961_40137 = ((function (G__39959_40135,G__39960_40136){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__39959_40135,G__39960_40136))
;
goog.object.set(G__39959_40135,G__39960_40136,G__39961_40137);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__39964_40144 = clojure.data.equality_partition;
var G__39965_40145 = "number";
var G__39966_40146 = ((function (G__39964_40144,G__39965_40145){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__39964_40144,G__39965_40145))
;
goog.object.set(G__39964_40144,G__39965_40145,G__39966_40146);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__39970_40151 = clojure.data.equality_partition;
var G__39971_40153 = "array";
var G__39972_40154 = ((function (G__39970_40151,G__39971_40153){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__39970_40151,G__39971_40153))
;
goog.object.set(G__39970_40151,G__39971_40153,G__39972_40154);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__39974_40160 = clojure.data.equality_partition;
var G__39975_40161 = "function";
var G__39976_40162 = ((function (G__39974_40160,G__39975_40161){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__39974_40160,G__39975_40161))
;
goog.object.set(G__39974_40160,G__39975_40161,G__39976_40162);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__39977_40173 = clojure.data.equality_partition;
var G__39978_40174 = "boolean";
var G__39979_40175 = ((function (G__39977_40173,G__39978_40174){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__39977_40173,G__39978_40174))
;
goog.object.set(G__39977_40173,G__39978_40174,G__39979_40175);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__39980_40180 = clojure.data.equality_partition;
var G__39981_40181 = "_";
var G__39982_40182 = ((function (G__39980_40180,G__39981_40181){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__39980_40180,G__39981_40181))
;
goog.object.set(G__39980_40180,G__39981_40181,G__39982_40182);
goog.object.set(clojure.data.Diff,"null",true);

var G__39996_40207 = clojure.data.diff_similar;
var G__39997_40208 = "null";
var G__39998_40209 = ((function (G__39996_40207,G__39997_40208){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__39996_40207,G__39997_40208))
;
goog.object.set(G__39996_40207,G__39997_40208,G__39998_40209);

goog.object.set(clojure.data.Diff,"string",true);

var G__39999_40211 = clojure.data.diff_similar;
var G__40000_40212 = "string";
var G__40001_40213 = ((function (G__39999_40211,G__40000_40212){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__39999_40211,G__40000_40212))
;
goog.object.set(G__39999_40211,G__40000_40212,G__40001_40213);

goog.object.set(clojure.data.Diff,"number",true);

var G__40004_40218 = clojure.data.diff_similar;
var G__40005_40219 = "number";
var G__40006_40220 = ((function (G__40004_40218,G__40005_40219){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__40004_40218,G__40005_40219))
;
goog.object.set(G__40004_40218,G__40005_40219,G__40006_40220);

goog.object.set(clojure.data.Diff,"array",true);

var G__40010_40230 = clojure.data.diff_similar;
var G__40011_40231 = "array";
var G__40012_40232 = ((function (G__40010_40230,G__40011_40231){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__40010_40230,G__40011_40231))
;
goog.object.set(G__40010_40230,G__40011_40231,G__40012_40232);

goog.object.set(clojure.data.Diff,"function",true);

var G__40017_40235 = clojure.data.diff_similar;
var G__40018_40236 = "function";
var G__40019_40237 = ((function (G__40017_40235,G__40018_40236){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__40017_40235,G__40018_40236))
;
goog.object.set(G__40017_40235,G__40018_40236,G__40019_40237);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__40020_40243 = clojure.data.diff_similar;
var G__40021_40244 = "boolean";
var G__40022_40245 = ((function (G__40020_40243,G__40021_40244){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__40020_40243,G__40021_40244))
;
goog.object.set(G__40020_40243,G__40021_40244,G__40022_40245);

goog.object.set(clojure.data.Diff,"_",true);

var G__40025_40248 = clojure.data.diff_similar;
var G__40026_40249 = "_";
var G__40027_40250 = ((function (G__40025_40248,G__40026_40249){
return (function (a,b){
var fexpr__40030 = (function (){var G__40031 = clojure.data.equality_partition(a);
var G__40031__$1 = (((G__40031 instanceof cljs.core.Keyword))?G__40031.fqn:null);
switch (G__40031__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40031__$1)].join('')));

}
})();
return (fexpr__40030.cljs$core$IFn$_invoke$arity$2 ? fexpr__40030.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__40030.call(null,a,b));
});})(G__40025_40248,G__40026_40249))
;
goog.object.set(G__40025_40248,G__40026_40249,G__40027_40250);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
