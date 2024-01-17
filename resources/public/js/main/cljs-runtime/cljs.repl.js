goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__52548){
var map__52549 = p__52548;
var map__52549__$1 = (((((!((map__52549 == null))))?(((((map__52549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52549):map__52549);
var m = map__52549__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52549__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52549__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__52555_52948 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52556_52949 = null;
var count__52557_52950 = (0);
var i__52558_52951 = (0);
while(true){
if((i__52558_52951 < count__52557_52950)){
var f_52952 = chunk__52556_52949.cljs$core$IIndexed$_nth$arity$2(null,i__52558_52951);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_52952], 0));


var G__52953 = seq__52555_52948;
var G__52954 = chunk__52556_52949;
var G__52955 = count__52557_52950;
var G__52956 = (i__52558_52951 + (1));
seq__52555_52948 = G__52953;
chunk__52556_52949 = G__52954;
count__52557_52950 = G__52955;
i__52558_52951 = G__52956;
continue;
} else {
var temp__5804__auto___52957 = cljs.core.seq(seq__52555_52948);
if(temp__5804__auto___52957){
var seq__52555_52958__$1 = temp__5804__auto___52957;
if(cljs.core.chunked_seq_QMARK_(seq__52555_52958__$1)){
var c__4550__auto___52959 = cljs.core.chunk_first(seq__52555_52958__$1);
var G__52960 = cljs.core.chunk_rest(seq__52555_52958__$1);
var G__52961 = c__4550__auto___52959;
var G__52962 = cljs.core.count(c__4550__auto___52959);
var G__52963 = (0);
seq__52555_52948 = G__52960;
chunk__52556_52949 = G__52961;
count__52557_52950 = G__52962;
i__52558_52951 = G__52963;
continue;
} else {
var f_52964 = cljs.core.first(seq__52555_52958__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_52964], 0));


var G__52965 = cljs.core.next(seq__52555_52958__$1);
var G__52966 = null;
var G__52967 = (0);
var G__52968 = (0);
seq__52555_52948 = G__52965;
chunk__52556_52949 = G__52966;
count__52557_52950 = G__52967;
i__52558_52951 = G__52968;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_52970 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_52970], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_52970)))?cljs.core.second(arglists_52970):arglists_52970)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__52572_52973 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52573_52974 = null;
var count__52574_52975 = (0);
var i__52575_52976 = (0);
while(true){
if((i__52575_52976 < count__52574_52975)){
var vec__52600_52977 = chunk__52573_52974.cljs$core$IIndexed$_nth$arity$2(null,i__52575_52976);
var name_52978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52600_52977,(0),null);
var map__52603_52979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52600_52977,(1),null);
var map__52603_52980__$1 = (((((!((map__52603_52979 == null))))?(((((map__52603_52979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52603_52979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52603_52979):map__52603_52979);
var doc_52981 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52603_52980__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52982 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52603_52980__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_52978], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_52982], 0));

if(cljs.core.truth_(doc_52981)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_52981], 0));
} else {
}


var G__52983 = seq__52572_52973;
var G__52984 = chunk__52573_52974;
var G__52985 = count__52574_52975;
var G__52986 = (i__52575_52976 + (1));
seq__52572_52973 = G__52983;
chunk__52573_52974 = G__52984;
count__52574_52975 = G__52985;
i__52575_52976 = G__52986;
continue;
} else {
var temp__5804__auto___52987 = cljs.core.seq(seq__52572_52973);
if(temp__5804__auto___52987){
var seq__52572_52988__$1 = temp__5804__auto___52987;
if(cljs.core.chunked_seq_QMARK_(seq__52572_52988__$1)){
var c__4550__auto___52989 = cljs.core.chunk_first(seq__52572_52988__$1);
var G__52990 = cljs.core.chunk_rest(seq__52572_52988__$1);
var G__52991 = c__4550__auto___52989;
var G__52992 = cljs.core.count(c__4550__auto___52989);
var G__52993 = (0);
seq__52572_52973 = G__52990;
chunk__52573_52974 = G__52991;
count__52574_52975 = G__52992;
i__52575_52976 = G__52993;
continue;
} else {
var vec__52607_52994 = cljs.core.first(seq__52572_52988__$1);
var name_52995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52607_52994,(0),null);
var map__52610_52996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52607_52994,(1),null);
var map__52610_52997__$1 = (((((!((map__52610_52996 == null))))?(((((map__52610_52996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52610_52996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52610_52996):map__52610_52996);
var doc_52998 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52610_52997__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52610_52997__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_52995], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53000], 0));

if(cljs.core.truth_(doc_52998)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_52998], 0));
} else {
}


var G__53004 = cljs.core.next(seq__52572_52988__$1);
var G__53005 = null;
var G__53006 = (0);
var G__53007 = (0);
seq__52572_52973 = G__53004;
chunk__52573_52974 = G__53005;
count__52574_52975 = G__53006;
i__52575_52976 = G__53007;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__52612 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__52613 = null;
var count__52614 = (0);
var i__52615 = (0);
while(true){
if((i__52615 < count__52614)){
var role = chunk__52613.cljs$core$IIndexed$_nth$arity$2(null,i__52615);
var temp__5804__auto___53008__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___53008__$1)){
var spec_53009 = temp__5804__auto___53008__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53009)], 0));
} else {
}


var G__53010 = seq__52612;
var G__53011 = chunk__52613;
var G__53012 = count__52614;
var G__53013 = (i__52615 + (1));
seq__52612 = G__53010;
chunk__52613 = G__53011;
count__52614 = G__53012;
i__52615 = G__53013;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__52612);
if(temp__5804__auto____$1){
var seq__52612__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__52612__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__52612__$1);
var G__53014 = cljs.core.chunk_rest(seq__52612__$1);
var G__53015 = c__4550__auto__;
var G__53016 = cljs.core.count(c__4550__auto__);
var G__53017 = (0);
seq__52612 = G__53014;
chunk__52613 = G__53015;
count__52614 = G__53016;
i__52615 = G__53017;
continue;
} else {
var role = cljs.core.first(seq__52612__$1);
var temp__5804__auto___53021__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___53021__$2)){
var spec_53022 = temp__5804__auto___53021__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53022)], 0));
} else {
}


var G__53023 = cljs.core.next(seq__52612__$1);
var G__53024 = null;
var G__53025 = (0);
var G__53026 = (0);
seq__52612 = G__53023;
chunk__52613 = G__53024;
count__52614 = G__53025;
i__52615 = G__53026;
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
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__53035 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__53036 = cljs.core.ex_cause(t);
via = G__53035;
t = G__53036;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__52752 = datafied_throwable;
var map__52752__$1 = (((((!((map__52752 == null))))?(((((map__52752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52752):map__52752);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52752__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52752__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52752__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__52753 = cljs.core.last(via);
var map__52753__$1 = (((((!((map__52753 == null))))?(((((map__52753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52753):map__52753);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52753__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52753__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52753__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__52754 = data;
var map__52754__$1 = (((((!((map__52754 == null))))?(((((map__52754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52754):map__52754);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52754__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52754__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52754__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__52755 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__52755__$1 = (((((!((map__52755 == null))))?(((((map__52755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52755):map__52755);
var top_data = map__52755__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52755__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__52782 = phase;
var G__52782__$1 = (((G__52782 instanceof cljs.core.Keyword))?G__52782.fqn:null);
switch (G__52782__$1) {
case "read-source":
var map__52783 = data;
var map__52783__$1 = (((((!((map__52783 == null))))?(((((map__52783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52783):map__52783);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52783__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52783__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__52791 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__52791__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52791,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__52791);
var G__52791__$2 = (cljs.core.truth_((function (){var fexpr__52798 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__52798.cljs$core$IFn$_invoke$arity$1 ? fexpr__52798.cljs$core$IFn$_invoke$arity$1(source) : fexpr__52798.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52791__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__52791__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52791__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__52791__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__52803 = top_data;
var G__52803__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52803,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__52803);
var G__52803__$2 = (cljs.core.truth_((function (){var fexpr__52805 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__52805.cljs$core$IFn$_invoke$arity$1 ? fexpr__52805.cljs$core$IFn$_invoke$arity$1(source) : fexpr__52805.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52803__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__52803__$1);
var G__52803__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52803__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__52803__$2);
var G__52803__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52803__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__52803__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52803__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__52803__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__52816 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52816,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52816,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52816,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52816,(3),null);
var G__52821 = top_data;
var G__52821__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52821,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__52821);
var G__52821__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52821__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__52821__$1);
var G__52821__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52821__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__52821__$2);
var G__52821__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52821__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__52821__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52821__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__52821__$4;
}

break;
case "execution":
var vec__52841 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52841,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52841,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52841,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52841,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__52841,source__$1,method,file,line,G__52782,G__52782__$1,map__52752,map__52752__$1,via,trace,phase,map__52753,map__52753__$1,type,message,data,map__52754,map__52754__$1,problems,fn,caller,map__52755,map__52755__$1,top_data,source){
return (function (p1__52748_SHARP_){
var or__4131__auto__ = (p1__52748_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__52861 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__52861.cljs$core$IFn$_invoke$arity$1 ? fexpr__52861.cljs$core$IFn$_invoke$arity$1(p1__52748_SHARP_) : fexpr__52861.call(null,p1__52748_SHARP_));
}
});})(vec__52841,source__$1,method,file,line,G__52782,G__52782__$1,map__52752,map__52752__$1,via,trace,phase,map__52753,map__52753__$1,type,message,data,map__52754,map__52754__$1,problems,fn,caller,map__52755,map__52755__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__52863 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__52863__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52863,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__52863);
var G__52863__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52863__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__52863__$1);
var G__52863__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52863__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__52863__$2);
var G__52863__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52863__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__52863__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52863__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__52863__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52782__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__52884){
var map__52886 = p__52884;
var map__52886__$1 = (((((!((map__52886 == null))))?(((((map__52886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52886):map__52886);
var triage_data = map__52886__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52886__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52886__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52886__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52886__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52886__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52886__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52886__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52886__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__52894 = phase;
var G__52894__$1 = (((G__52894 instanceof cljs.core.Keyword))?G__52894.fqn:null);
switch (G__52894__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__52896 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__52897 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52898 = loc;
var G__52899 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__52900_53154 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__52901_53155 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__52902_53156 = true;
var _STAR_print_fn_STAR__temp_val__52903_53157 = ((function (_STAR_print_newline_STAR__orig_val__52900_53154,_STAR_print_fn_STAR__orig_val__52901_53155,_STAR_print_newline_STAR__temp_val__52902_53156,sb__4661__auto__,G__52896,G__52897,G__52898,G__52894,G__52894__$1,loc,class_name,simple_class,cause_type,format,map__52886,map__52886__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__52900_53154,_STAR_print_fn_STAR__orig_val__52901_53155,_STAR_print_newline_STAR__temp_val__52902_53156,sb__4661__auto__,G__52896,G__52897,G__52898,G__52894,G__52894__$1,loc,class_name,simple_class,cause_type,format,map__52886,map__52886__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52902_53156;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52903_53157;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__52900_53154,_STAR_print_fn_STAR__orig_val__52901_53155,_STAR_print_newline_STAR__temp_val__52902_53156,_STAR_print_fn_STAR__temp_val__52903_53157,sb__4661__auto__,G__52896,G__52897,G__52898,G__52894,G__52894__$1,loc,class_name,simple_class,cause_type,format,map__52886,map__52886__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__52900_53154,_STAR_print_fn_STAR__orig_val__52901_53155,_STAR_print_newline_STAR__temp_val__52902_53156,_STAR_print_fn_STAR__temp_val__52903_53157,sb__4661__auto__,G__52896,G__52897,G__52898,G__52894,G__52894__$1,loc,class_name,simple_class,cause_type,format,map__52886,map__52886__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__52879_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__52879_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__52900_53154,_STAR_print_fn_STAR__orig_val__52901_53155,_STAR_print_newline_STAR__temp_val__52902_53156,_STAR_print_fn_STAR__temp_val__52903_53157,sb__4661__auto__,G__52896,G__52897,G__52898,G__52894,G__52894__$1,loc,class_name,simple_class,cause_type,format,map__52886,map__52886__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__52900_53154,_STAR_print_fn_STAR__orig_val__52901_53155,_STAR_print_newline_STAR__temp_val__52902_53156,_STAR_print_fn_STAR__temp_val__52903_53157,sb__4661__auto__,G__52896,G__52897,G__52898,G__52894,G__52894__$1,loc,class_name,simple_class,cause_type,format,map__52886,map__52886__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52901_53155;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52900_53154;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__52896,G__52897,G__52898,G__52899) : format.call(null,G__52896,G__52897,G__52898,G__52899));

break;
case "macroexpansion":
var G__52909 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__52910 = cause_type;
var G__52911 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52912 = loc;
var G__52913 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52909,G__52910,G__52911,G__52912,G__52913) : format.call(null,G__52909,G__52910,G__52911,G__52912,G__52913));

break;
case "compile-syntax-check":
var G__52915 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__52916 = cause_type;
var G__52917 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52918 = loc;
var G__52919 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52915,G__52916,G__52917,G__52918,G__52919) : format.call(null,G__52915,G__52916,G__52917,G__52918,G__52919));

break;
case "compilation":
var G__52920 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__52921 = cause_type;
var G__52922 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52923 = loc;
var G__52924 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52920,G__52921,G__52922,G__52923,G__52924) : format.call(null,G__52920,G__52921,G__52922,G__52923,G__52924));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__52925 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__52926 = symbol;
var G__52927 = loc;
var G__52928 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__52930_53174 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__52931_53175 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__52932_53176 = true;
var _STAR_print_fn_STAR__temp_val__52933_53177 = ((function (_STAR_print_newline_STAR__orig_val__52930_53174,_STAR_print_fn_STAR__orig_val__52931_53175,_STAR_print_newline_STAR__temp_val__52932_53176,sb__4661__auto__,G__52925,G__52926,G__52927,G__52894,G__52894__$1,loc,class_name,simple_class,cause_type,format,map__52886,map__52886__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__52930_53174,_STAR_print_fn_STAR__orig_val__52931_53175,_STAR_print_newline_STAR__temp_val__52932_53176,sb__4661__auto__,G__52925,G__52926,G__52927,G__52894,G__52894__$1,loc,class_name,simple_class,cause_type,format,map__52886,map__52886__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52932_53176;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52933_53177;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__52930_53174,_STAR_print_fn_STAR__orig_val__52931_53175,_STAR_print_newline_STAR__temp_val__52932_53176,_STAR_print_fn_STAR__temp_val__52933_53177,sb__4661__auto__,G__52925,G__52926,G__52927,G__52894,G__52894__$1,loc,class_name,simple_class,cause_type,format,map__52886,map__52886__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__52930_53174,_STAR_print_fn_STAR__orig_val__52931_53175,_STAR_print_newline_STAR__temp_val__52932_53176,_STAR_print_fn_STAR__temp_val__52933_53177,sb__4661__auto__,G__52925,G__52926,G__52927,G__52894,G__52894__$1,loc,class_name,simple_class,cause_type,format,map__52886,map__52886__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__52882_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__52882_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__52930_53174,_STAR_print_fn_STAR__orig_val__52931_53175,_STAR_print_newline_STAR__temp_val__52932_53176,_STAR_print_fn_STAR__temp_val__52933_53177,sb__4661__auto__,G__52925,G__52926,G__52927,G__52894,G__52894__$1,loc,class_name,simple_class,cause_type,format,map__52886,map__52886__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__52930_53174,_STAR_print_fn_STAR__orig_val__52931_53175,_STAR_print_newline_STAR__temp_val__52932_53176,_STAR_print_fn_STAR__temp_val__52933_53177,sb__4661__auto__,G__52925,G__52926,G__52927,G__52894,G__52894__$1,loc,class_name,simple_class,cause_type,format,map__52886,map__52886__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52931_53175;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52930_53174;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__52925,G__52926,G__52927,G__52928) : format.call(null,G__52925,G__52926,G__52927,G__52928));
} else {
var G__52937 = "Execution error%s at %s(%s).\n%s\n";
var G__52938 = cause_type;
var G__52939 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52940 = loc;
var G__52941 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52937,G__52938,G__52939,G__52940,G__52941) : format.call(null,G__52937,G__52938,G__52939,G__52940,G__52941));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52894__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
