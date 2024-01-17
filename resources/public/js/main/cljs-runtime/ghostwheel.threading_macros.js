goog.provide('ghostwheel.threading_macros');
goog.require('cljs.core');
goog.require('ghostwheel.logging');
goog.require('ghostwheel.utils');
ghostwheel.threading_macros.log_threading_header = (function ghostwheel$threading_macros$log_threading_header(var_args){
var args__4736__auto__ = [];
var len__4730__auto___58177 = arguments.length;
var i__4731__auto___58178 = (0);
while(true){
if((i__4731__auto___58178 < len__4730__auto___58177)){
args__4736__auto__.push((arguments[i__4731__auto___58178]));

var G__58179 = (i__4731__auto___58178 + (1));
i__4731__auto___58178 = G__58179;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return ghostwheel.threading_macros.log_threading_header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

ghostwheel.threading_macros.log_threading_header.cljs$core$IFn$_invoke$arity$variadic = (function (threading_type,expr,p__58148){
var vec__58149 = p__58148;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58149,(0),null);
return ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(threading_type)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),(cljs.core.truth_(name)?" ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606),new cljs.core.Keyword(null,"black","black",1294279647).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)], null));
});

ghostwheel.threading_macros.log_threading_header.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
ghostwheel.threading_macros.log_threading_header.cljs$lang$applyTo = (function (seq58145){
var G__58146 = cljs.core.first(seq58145);
var seq58145__$1 = cljs.core.next(seq58145);
var G__58147 = cljs.core.first(seq58145__$1);
var seq58145__$2 = cljs.core.next(seq58145__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58146,G__58147,seq58145__$2);
});

ghostwheel.threading_macros.log_cond_step = (function ghostwheel$threading_macros$log_cond_step(var_args){
var args__4736__auto__ = [];
var len__4730__auto___58183 = arguments.length;
var i__4731__auto___58184 = (0);
while(true){
if((i__4731__auto___58184 < len__4730__auto___58183)){
args__4736__auto__.push((arguments[i__4731__auto___58184]));

var G__58185 = (i__4731__auto___58184 + (1));
i__4731__auto___58184 = G__58185;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return ghostwheel.threading_macros.log_cond_step.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

ghostwheel.threading_macros.log_cond_step.cljs$core$IFn$_invoke$arity$variadic = (function (test,step,data,p__58161){
var vec__58163 = p__58161;
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58163,(0),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("ghostwheel.logging","pr-clog","ghostwheel.logging/pr-clog",-1989385842,null),null,(1),null)),(new cljs.core.List(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(test)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(step)].join(''),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,data,null,(1),null)),(new cljs.core.List(null,style,null,(1),null))], 0))));
});

ghostwheel.threading_macros.log_cond_step.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
ghostwheel.threading_macros.log_cond_step.cljs$lang$applyTo = (function (seq58157){
var G__58158 = cljs.core.first(seq58157);
var seq58157__$1 = cljs.core.next(seq58157);
var G__58159 = cljs.core.first(seq58157__$1);
var seq58157__$2 = cljs.core.next(seq58157__$1);
var G__58160 = cljs.core.first(seq58157__$2);
var seq58157__$3 = cljs.core.next(seq58157__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58158,G__58159,G__58160,seq58157__$3);
});

ghostwheel.threading_macros.log_some_step = (function ghostwheel$threading_macros$log_some_step(some_step){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("ghostwheel.logging","pr-clog","ghostwheel.logging/pr-clog",-1989385842,null),null,(1),null)),(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,some_step)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,some_step,null,(1),null))], 0))));
});

//# sourceMappingURL=ghostwheel.threading_macros.js.map
