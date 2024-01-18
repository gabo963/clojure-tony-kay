goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__67428){
var map__67429 = p__67428;
var map__67429__$1 = cljs.core.__destructure_map(map__67429);
var m = map__67429__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67429__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67429__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
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
var seq__67450_67607 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__67451_67608 = null;
var count__67452_67609 = (0);
var i__67453_67610 = (0);
while(true){
if((i__67453_67610 < count__67452_67609)){
var f_67611 = chunk__67451_67608.cljs$core$IIndexed$_nth$arity$2(null,i__67453_67610);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_67611], 0));


var G__67612 = seq__67450_67607;
var G__67613 = chunk__67451_67608;
var G__67614 = count__67452_67609;
var G__67615 = (i__67453_67610 + (1));
seq__67450_67607 = G__67612;
chunk__67451_67608 = G__67613;
count__67452_67609 = G__67614;
i__67453_67610 = G__67615;
continue;
} else {
var temp__5804__auto___67616 = cljs.core.seq(seq__67450_67607);
if(temp__5804__auto___67616){
var seq__67450_67617__$1 = temp__5804__auto___67616;
if(cljs.core.chunked_seq_QMARK_(seq__67450_67617__$1)){
var c__5568__auto___67618 = cljs.core.chunk_first(seq__67450_67617__$1);
var G__67619 = cljs.core.chunk_rest(seq__67450_67617__$1);
var G__67620 = c__5568__auto___67618;
var G__67621 = cljs.core.count(c__5568__auto___67618);
var G__67622 = (0);
seq__67450_67607 = G__67619;
chunk__67451_67608 = G__67620;
count__67452_67609 = G__67621;
i__67453_67610 = G__67622;
continue;
} else {
var f_67623 = cljs.core.first(seq__67450_67617__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_67623], 0));


var G__67624 = cljs.core.next(seq__67450_67617__$1);
var G__67625 = null;
var G__67626 = (0);
var G__67627 = (0);
seq__67450_67607 = G__67624;
chunk__67451_67608 = G__67625;
count__67452_67609 = G__67626;
i__67453_67610 = G__67627;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_67628 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_67628], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_67628)))?cljs.core.second(arglists_67628):arglists_67628)], 0));
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
var seq__67458_67629 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__67459_67630 = null;
var count__67460_67631 = (0);
var i__67461_67632 = (0);
while(true){
if((i__67461_67632 < count__67460_67631)){
var vec__67472_67633 = chunk__67459_67630.cljs$core$IIndexed$_nth$arity$2(null,i__67461_67632);
var name_67634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67472_67633,(0),null);
var map__67475_67635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67472_67633,(1),null);
var map__67475_67636__$1 = cljs.core.__destructure_map(map__67475_67635);
var doc_67637 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67475_67636__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_67638 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67475_67636__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_67634], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_67638], 0));

if(cljs.core.truth_(doc_67637)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_67637], 0));
} else {
}


var G__67639 = seq__67458_67629;
var G__67640 = chunk__67459_67630;
var G__67641 = count__67460_67631;
var G__67642 = (i__67461_67632 + (1));
seq__67458_67629 = G__67639;
chunk__67459_67630 = G__67640;
count__67460_67631 = G__67641;
i__67461_67632 = G__67642;
continue;
} else {
var temp__5804__auto___67643 = cljs.core.seq(seq__67458_67629);
if(temp__5804__auto___67643){
var seq__67458_67644__$1 = temp__5804__auto___67643;
if(cljs.core.chunked_seq_QMARK_(seq__67458_67644__$1)){
var c__5568__auto___67645 = cljs.core.chunk_first(seq__67458_67644__$1);
var G__67646 = cljs.core.chunk_rest(seq__67458_67644__$1);
var G__67647 = c__5568__auto___67645;
var G__67648 = cljs.core.count(c__5568__auto___67645);
var G__67649 = (0);
seq__67458_67629 = G__67646;
chunk__67459_67630 = G__67647;
count__67460_67631 = G__67648;
i__67461_67632 = G__67649;
continue;
} else {
var vec__67488_67650 = cljs.core.first(seq__67458_67644__$1);
var name_67651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67488_67650,(0),null);
var map__67491_67652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67488_67650,(1),null);
var map__67491_67653__$1 = cljs.core.__destructure_map(map__67491_67652);
var doc_67654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67491_67653__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_67655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67491_67653__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_67651], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_67655], 0));

if(cljs.core.truth_(doc_67654)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_67654], 0));
} else {
}


var G__67656 = cljs.core.next(seq__67458_67644__$1);
var G__67657 = null;
var G__67658 = (0);
var G__67659 = (0);
seq__67458_67629 = G__67656;
chunk__67459_67630 = G__67657;
count__67460_67631 = G__67658;
i__67461_67632 = G__67659;
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

var seq__67500 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__67501 = null;
var count__67502 = (0);
var i__67503 = (0);
while(true){
if((i__67503 < count__67502)){
var role = chunk__67501.cljs$core$IIndexed$_nth$arity$2(null,i__67503);
var temp__5804__auto___67661__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___67661__$1)){
var spec_67662 = temp__5804__auto___67661__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_67662)], 0));
} else {
}


var G__67663 = seq__67500;
var G__67664 = chunk__67501;
var G__67665 = count__67502;
var G__67666 = (i__67503 + (1));
seq__67500 = G__67663;
chunk__67501 = G__67664;
count__67502 = G__67665;
i__67503 = G__67666;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__67500);
if(temp__5804__auto____$1){
var seq__67500__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__67500__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__67500__$1);
var G__67670 = cljs.core.chunk_rest(seq__67500__$1);
var G__67671 = c__5568__auto__;
var G__67672 = cljs.core.count(c__5568__auto__);
var G__67673 = (0);
seq__67500 = G__67670;
chunk__67501 = G__67671;
count__67502 = G__67672;
i__67503 = G__67673;
continue;
} else {
var role = cljs.core.first(seq__67500__$1);
var temp__5804__auto___67674__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___67674__$2)){
var spec_67675 = temp__5804__auto___67674__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_67675)], 0));
} else {
}


var G__67676 = cljs.core.next(seq__67500__$1);
var G__67677 = null;
var G__67678 = (0);
var G__67679 = (0);
seq__67500 = G__67676;
chunk__67501 = G__67677;
count__67502 = G__67678;
i__67503 = G__67679;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
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
var G__67680 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__67681 = cljs.core.ex_cause(t);
via = G__67680;
t = G__67681;
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
var map__67518 = datafied_throwable;
var map__67518__$1 = cljs.core.__destructure_map(map__67518);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67518__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67518__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67518__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__67519 = cljs.core.last(via);
var map__67519__$1 = cljs.core.__destructure_map(map__67519);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67519__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67519__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67519__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__67520 = data;
var map__67520__$1 = cljs.core.__destructure_map(map__67520);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67520__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67520__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67520__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__67521 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__67521__$1 = cljs.core.__destructure_map(map__67521);
var top_data = map__67521__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67521__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__67525 = phase;
var G__67525__$1 = (((G__67525 instanceof cljs.core.Keyword))?G__67525.fqn:null);
switch (G__67525__$1) {
case "read-source":
var map__67529 = data;
var map__67529__$1 = cljs.core.__destructure_map(map__67529);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67529__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67529__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__67530 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__67530__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67530,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__67530);
var G__67530__$2 = (cljs.core.truth_((function (){var fexpr__67534 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__67534.cljs$core$IFn$_invoke$arity$1 ? fexpr__67534.cljs$core$IFn$_invoke$arity$1(source) : fexpr__67534.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__67530__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__67530__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67530__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__67530__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__67535 = top_data;
var G__67535__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67535,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__67535);
var G__67535__$2 = (cljs.core.truth_((function (){var fexpr__67540 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__67540.cljs$core$IFn$_invoke$arity$1 ? fexpr__67540.cljs$core$IFn$_invoke$arity$1(source) : fexpr__67540.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__67535__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__67535__$1);
var G__67535__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67535__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__67535__$2);
var G__67535__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67535__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__67535__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67535__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__67535__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__67541 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67541,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67541,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67541,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67541,(3),null);
var G__67544 = top_data;
var G__67544__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67544,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__67544);
var G__67544__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67544__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__67544__$1);
var G__67544__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67544__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__67544__$2);
var G__67544__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67544__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__67544__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67544__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__67544__$4;
}

break;
case "execution":
var vec__67545 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67545,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67545,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67545,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67545,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__67510_SHARP_){
var or__5045__auto__ = (p1__67510_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__67549 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__67549.cljs$core$IFn$_invoke$arity$1 ? fexpr__67549.cljs$core$IFn$_invoke$arity$1(p1__67510_SHARP_) : fexpr__67549.call(null,p1__67510_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__67551 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__67551__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67551,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__67551);
var G__67551__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67551__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__67551__$1);
var G__67551__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67551__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__67551__$2);
var G__67551__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67551__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__67551__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67551__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__67551__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67525__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__67554){
var map__67555 = p__67554;
var map__67555__$1 = cljs.core.__destructure_map(map__67555);
var triage_data = map__67555__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67555__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67555__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67555__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67555__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67555__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67555__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67555__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67555__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__67560 = phase;
var G__67560__$1 = (((G__67560 instanceof cljs.core.Keyword))?G__67560.fqn:null);
switch (G__67560__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__67561 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__67562 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__67563 = loc;
var G__67564 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__67565_67695 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__67566_67696 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__67567_67697 = true;
var _STAR_print_fn_STAR__temp_val__67568_67698 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__67567_67697);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__67568_67698);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67552_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__67552_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__67566_67696);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__67565_67695);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__67561,G__67562,G__67563,G__67564) : format.call(null,G__67561,G__67562,G__67563,G__67564));

break;
case "macroexpansion":
var G__67569 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__67570 = cause_type;
var G__67571 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__67572 = loc;
var G__67573 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__67569,G__67570,G__67571,G__67572,G__67573) : format.call(null,G__67569,G__67570,G__67571,G__67572,G__67573));

break;
case "compile-syntax-check":
var G__67578 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__67579 = cause_type;
var G__67580 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__67581 = loc;
var G__67582 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__67578,G__67579,G__67580,G__67581,G__67582) : format.call(null,G__67578,G__67579,G__67580,G__67581,G__67582));

break;
case "compilation":
var G__67583 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__67584 = cause_type;
var G__67585 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__67586 = loc;
var G__67587 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__67583,G__67584,G__67585,G__67586,G__67587) : format.call(null,G__67583,G__67584,G__67585,G__67586,G__67587));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__67589 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__67590 = symbol;
var G__67591 = loc;
var G__67592 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__67593_67709 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__67594_67710 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__67595_67711 = true;
var _STAR_print_fn_STAR__temp_val__67596_67712 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__67595_67711);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__67596_67712);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67553_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__67553_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__67594_67710);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__67593_67709);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__67589,G__67590,G__67591,G__67592) : format.call(null,G__67589,G__67590,G__67591,G__67592));
} else {
var G__67597 = "Execution error%s at %s(%s).\n%s\n";
var G__67598 = cause_type;
var G__67599 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__67600 = loc;
var G__67601 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__67597,G__67598,G__67599,G__67600,G__67601) : format.call(null,G__67597,G__67598,G__67599,G__67600,G__67601));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67560__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
