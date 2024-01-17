goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__51918 = arguments.length;
switch (G__51918) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51919 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51919 = (function (f,blockable,meta51920){
this.f = f;
this.blockable = blockable;
this.meta51920 = meta51920;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51921,meta51920__$1){
var self__ = this;
var _51921__$1 = this;
return (new cljs.core.async.t_cljs$core$async51919(self__.f,self__.blockable,meta51920__$1));
});

cljs.core.async.t_cljs$core$async51919.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51921){
var self__ = this;
var _51921__$1 = this;
return self__.meta51920;
});

cljs.core.async.t_cljs$core$async51919.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51919.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async51919.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async51919.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async51919.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta51920","meta51920",585953271,null)], null);
});

cljs.core.async.t_cljs$core$async51919.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51919.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51919";

cljs.core.async.t_cljs$core$async51919.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async51919");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51919.
 */
cljs.core.async.__GT_t_cljs$core$async51919 = (function cljs$core$async$__GT_t_cljs$core$async51919(f__$1,blockable__$1,meta51920){
return (new cljs.core.async.t_cljs$core$async51919(f__$1,blockable__$1,meta51920));
});

}

return (new cljs.core.async.t_cljs$core$async51919(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__51924 = arguments.length;
switch (G__51924) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__51926 = arguments.length;
switch (G__51926) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__51928 = arguments.length;
switch (G__51928) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_53703 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_53703) : fn1.call(null,val_53703));
} else {
cljs.core.async.impl.dispatch.run(((function (val_53703,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_53703) : fn1.call(null,val_53703));
});})(val_53703,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__51930 = arguments.length;
switch (G__51930) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5802__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5802__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___53712 = n;
var x_53713 = (0);
while(true){
if((x_53713 < n__4607__auto___53712)){
(a[x_53713] = x_53713);

var G__53715 = (x_53713 + (1));
x_53713 = G__53715;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51931 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51931 = (function (flag,meta51932){
this.flag = flag;
this.meta51932 = meta51932;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_51933,meta51932__$1){
var self__ = this;
var _51933__$1 = this;
return (new cljs.core.async.t_cljs$core$async51931(self__.flag,meta51932__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async51931.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_51933){
var self__ = this;
var _51933__$1 = this;
return self__.meta51932;
});})(flag))
;

cljs.core.async.t_cljs$core$async51931.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51931.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async51931.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async51931.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async51931.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta51932","meta51932",-406730179,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async51931.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51931.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51931";

cljs.core.async.t_cljs$core$async51931.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async51931");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51931.
 */
cljs.core.async.__GT_t_cljs$core$async51931 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async51931(flag__$1,meta51932){
return (new cljs.core.async.t_cljs$core$async51931(flag__$1,meta51932));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async51931(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51934 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51934 = (function (flag,cb,meta51935){
this.flag = flag;
this.cb = cb;
this.meta51935 = meta51935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51936,meta51935__$1){
var self__ = this;
var _51936__$1 = this;
return (new cljs.core.async.t_cljs$core$async51934(self__.flag,self__.cb,meta51935__$1));
});

cljs.core.async.t_cljs$core$async51934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51936){
var self__ = this;
var _51936__$1 = this;
return self__.meta51935;
});

cljs.core.async.t_cljs$core$async51934.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51934.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async51934.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async51934.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async51934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta51935","meta51935",-768650764,null)], null);
});

cljs.core.async.t_cljs$core$async51934.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51934";

cljs.core.async.t_cljs$core$async51934.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async51934");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51934.
 */
cljs.core.async.__GT_t_cljs$core$async51934 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async51934(flag__$1,cb__$1,meta51935){
return (new cljs.core.async.t_cljs$core$async51934(flag__$1,cb__$1,meta51935));
});

}

return (new cljs.core.async.t_cljs$core$async51934(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__51937_SHARP_){
var G__51939 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51937_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__51939) : fret.call(null,G__51939));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__51938_SHARP_){
var G__51940 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51938_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__51940) : fret.call(null,G__51940));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__53741 = (i + (1));
i = G__53741;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___53746 = arguments.length;
var i__4731__auto___53750 = (0);
while(true){
if((i__4731__auto___53750 < len__4730__auto___53746)){
args__4736__auto__.push((arguments[i__4731__auto___53750]));

var G__53751 = (i__4731__auto___53750 + (1));
i__4731__auto___53750 = G__53751;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__51943){
var map__51944 = p__51943;
var map__51944__$1 = (((((!((map__51944 == null))))?(((((map__51944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51944):map__51944);
var opts = map__51944__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq51941){
var G__51942 = cljs.core.first(seq51941);
var seq51941__$1 = cljs.core.next(seq51941);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51942,seq51941__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__51947 = arguments.length;
switch (G__51947) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__51860__auto___53762 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51860__auto___53762){
return (function (){
var f__51861__auto__ = (function (){var switch__51724__auto__ = ((function (c__51860__auto___53762){
return (function (state_51971){
var state_val_51972 = (state_51971[(1)]);
if((state_val_51972 === (7))){
var inst_51967 = (state_51971[(2)]);
var state_51971__$1 = state_51971;
var statearr_51973_53767 = state_51971__$1;
(statearr_51973_53767[(2)] = inst_51967);

(statearr_51973_53767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51972 === (1))){
var state_51971__$1 = state_51971;
var statearr_51974_53768 = state_51971__$1;
(statearr_51974_53768[(2)] = null);

(statearr_51974_53768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51972 === (4))){
var inst_51950 = (state_51971[(7)]);
var inst_51950__$1 = (state_51971[(2)]);
var inst_51951 = (inst_51950__$1 == null);
var state_51971__$1 = (function (){var statearr_51975 = state_51971;
(statearr_51975[(7)] = inst_51950__$1);

return statearr_51975;
})();
if(cljs.core.truth_(inst_51951)){
var statearr_51976_53769 = state_51971__$1;
(statearr_51976_53769[(1)] = (5));

} else {
var statearr_51977_53770 = state_51971__$1;
(statearr_51977_53770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51972 === (13))){
var state_51971__$1 = state_51971;
var statearr_51978_53771 = state_51971__$1;
(statearr_51978_53771[(2)] = null);

(statearr_51978_53771[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51972 === (6))){
var inst_51950 = (state_51971[(7)]);
var state_51971__$1 = state_51971;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51971__$1,(11),to,inst_51950);
} else {
if((state_val_51972 === (3))){
var inst_51969 = (state_51971[(2)]);
var state_51971__$1 = state_51971;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51971__$1,inst_51969);
} else {
if((state_val_51972 === (12))){
var state_51971__$1 = state_51971;
var statearr_51979_53772 = state_51971__$1;
(statearr_51979_53772[(2)] = null);

(statearr_51979_53772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51972 === (2))){
var state_51971__$1 = state_51971;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51971__$1,(4),from);
} else {
if((state_val_51972 === (11))){
var inst_51960 = (state_51971[(2)]);
var state_51971__$1 = state_51971;
if(cljs.core.truth_(inst_51960)){
var statearr_51980_53775 = state_51971__$1;
(statearr_51980_53775[(1)] = (12));

} else {
var statearr_51981_53777 = state_51971__$1;
(statearr_51981_53777[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51972 === (9))){
var state_51971__$1 = state_51971;
var statearr_51982_53779 = state_51971__$1;
(statearr_51982_53779[(2)] = null);

(statearr_51982_53779[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51972 === (5))){
var state_51971__$1 = state_51971;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51983_53782 = state_51971__$1;
(statearr_51983_53782[(1)] = (8));

} else {
var statearr_51984_53783 = state_51971__$1;
(statearr_51984_53783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51972 === (14))){
var inst_51965 = (state_51971[(2)]);
var state_51971__$1 = state_51971;
var statearr_51985_53785 = state_51971__$1;
(statearr_51985_53785[(2)] = inst_51965);

(statearr_51985_53785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51972 === (10))){
var inst_51957 = (state_51971[(2)]);
var state_51971__$1 = state_51971;
var statearr_51986_53786 = state_51971__$1;
(statearr_51986_53786[(2)] = inst_51957);

(statearr_51986_53786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51972 === (8))){
var inst_51954 = cljs.core.async.close_BANG_(to);
var state_51971__$1 = state_51971;
var statearr_51987_53788 = state_51971__$1;
(statearr_51987_53788[(2)] = inst_51954);

(statearr_51987_53788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__51860__auto___53762))
;
return ((function (switch__51724__auto__,c__51860__auto___53762){
return (function() {
var cljs$core$async$state_machine__51725__auto__ = null;
var cljs$core$async$state_machine__51725__auto____0 = (function (){
var statearr_51988 = [null,null,null,null,null,null,null,null];
(statearr_51988[(0)] = cljs$core$async$state_machine__51725__auto__);

(statearr_51988[(1)] = (1));

return statearr_51988;
});
var cljs$core$async$state_machine__51725__auto____1 = (function (state_51971){
while(true){
var ret_value__51726__auto__ = (function (){try{while(true){
var result__51727__auto__ = switch__51724__auto__(state_51971);
if(cljs.core.keyword_identical_QMARK_(result__51727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51727__auto__;
}
break;
}
}catch (e51989){if((e51989 instanceof Object)){
var ex__51728__auto__ = e51989;
var statearr_51990_53792 = state_51971;
(statearr_51990_53792[(5)] = ex__51728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51989;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53794 = state_51971;
state_51971 = G__53794;
continue;
} else {
return ret_value__51726__auto__;
}
break;
}
});
cljs$core$async$state_machine__51725__auto__ = function(state_51971){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51725__auto____1.call(this,state_51971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51725__auto____0;
cljs$core$async$state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51725__auto____1;
return cljs$core$async$state_machine__51725__auto__;
})()
;})(switch__51724__auto__,c__51860__auto___53762))
})();
var state__51862__auto__ = (function (){var statearr_51991 = (f__51861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51861__auto__.cljs$core$IFn$_invoke$arity$0() : f__51861__auto__.call(null));
(statearr_51991[(6)] = c__51860__auto___53762);

return statearr_51991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51862__auto__);
});})(c__51860__auto___53762))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__51992){
var vec__51993 = p__51992;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51993,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51993,(1),null);
var job = vec__51993;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__51860__auto___53797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51860__auto___53797,res,vec__51993,v,p,job,jobs,results){
return (function (){
var f__51861__auto__ = (function (){var switch__51724__auto__ = ((function (c__51860__auto___53797,res,vec__51993,v,p,job,jobs,results){
return (function (state_52000){
var state_val_52001 = (state_52000[(1)]);
if((state_val_52001 === (1))){
var state_52000__$1 = state_52000;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52000__$1,(2),res,v);
} else {
if((state_val_52001 === (2))){
var inst_51997 = (state_52000[(2)]);
var inst_51998 = cljs.core.async.close_BANG_(res);
var state_52000__$1 = (function (){var statearr_52002 = state_52000;
(statearr_52002[(7)] = inst_51997);

return statearr_52002;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52000__$1,inst_51998);
} else {
return null;
}
}
});})(c__51860__auto___53797,res,vec__51993,v,p,job,jobs,results))
;
return ((function (switch__51724__auto__,c__51860__auto___53797,res,vec__51993,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51725__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51725__auto____0 = (function (){
var statearr_52003 = [null,null,null,null,null,null,null,null];
(statearr_52003[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51725__auto__);

(statearr_52003[(1)] = (1));

return statearr_52003;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51725__auto____1 = (function (state_52000){
while(true){
var ret_value__51726__auto__ = (function (){try{while(true){
var result__51727__auto__ = switch__51724__auto__(state_52000);
if(cljs.core.keyword_identical_QMARK_(result__51727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51727__auto__;
}
break;
}
}catch (e52004){if((e52004 instanceof Object)){
var ex__51728__auto__ = e52004;
var statearr_52005_53810 = state_52000;
(statearr_52005_53810[(5)] = ex__51728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52004;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53811 = state_52000;
state_52000 = G__53811;
continue;
} else {
return ret_value__51726__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51725__auto__ = function(state_52000){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51725__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51725__auto____1.call(this,state_52000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51725__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51725__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51725__auto__;
})()
;})(switch__51724__auto__,c__51860__auto___53797,res,vec__51993,v,p,job,jobs,results))
})();
var state__51862__auto__ = (function (){var statearr_52006 = (f__51861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51861__auto__.cljs$core$IFn$_invoke$arity$0() : f__51861__auto__.call(null));
(statearr_52006[(6)] = c__51860__auto___53797);

return statearr_52006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51862__auto__);
});})(c__51860__auto___53797,res,vec__51993,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__52007){
var vec__52008 = p__52007;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52008,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52008,(1),null);
var job = vec__52008;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___53816 = n;
var __53817 = (0);
while(true){
if((__53817 < n__4607__auto___53816)){
var G__52011_53818 = type;
var G__52011_53819__$1 = (((G__52011_53818 instanceof cljs.core.Keyword))?G__52011_53818.fqn:null);
switch (G__52011_53819__$1) {
case "compute":
var c__51860__auto___53821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__53817,c__51860__auto___53821,G__52011_53818,G__52011_53819__$1,n__4607__auto___53816,jobs,results,process,async){
return (function (){
var f__51861__auto__ = (function (){var switch__51724__auto__ = ((function (__53817,c__51860__auto___53821,G__52011_53818,G__52011_53819__$1,n__4607__auto___53816,jobs,results,process,async){
return (function (state_52024){
var state_val_52025 = (state_52024[(1)]);
if((state_val_52025 === (1))){
var state_52024__$1 = state_52024;
var statearr_52026_53822 = state_52024__$1;
(statearr_52026_53822[(2)] = null);

(statearr_52026_53822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (2))){
var state_52024__$1 = state_52024;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52024__$1,(4),jobs);
} else {
if((state_val_52025 === (3))){
var inst_52022 = (state_52024[(2)]);
var state_52024__$1 = state_52024;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52024__$1,inst_52022);
} else {
if((state_val_52025 === (4))){
var inst_52014 = (state_52024[(2)]);
var inst_52015 = process(inst_52014);
var state_52024__$1 = state_52024;
if(cljs.core.truth_(inst_52015)){
var statearr_52027_53823 = state_52024__$1;
(statearr_52027_53823[(1)] = (5));

} else {
var statearr_52028_53824 = state_52024__$1;
(statearr_52028_53824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (5))){
var state_52024__$1 = state_52024;
var statearr_52029_53825 = state_52024__$1;
(statearr_52029_53825[(2)] = null);

(statearr_52029_53825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (6))){
var state_52024__$1 = state_52024;
var statearr_52030_53827 = state_52024__$1;
(statearr_52030_53827[(2)] = null);

(statearr_52030_53827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52025 === (7))){
var inst_52020 = (state_52024[(2)]);
var state_52024__$1 = state_52024;
var statearr_52031_53829 = state_52024__$1;
(statearr_52031_53829[(2)] = inst_52020);

(statearr_52031_53829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__53817,c__51860__auto___53821,G__52011_53818,G__52011_53819__$1,n__4607__auto___53816,jobs,results,process,async))
;
return ((function (__53817,switch__51724__auto__,c__51860__auto___53821,G__52011_53818,G__52011_53819__$1,n__4607__auto___53816,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51725__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51725__auto____0 = (function (){
var statearr_52032 = [null,null,null,null,null,null,null];
(statearr_52032[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51725__auto__);

(statearr_52032[(1)] = (1));

return statearr_52032;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51725__auto____1 = (function (state_52024){
while(true){
var ret_value__51726__auto__ = (function (){try{while(true){
var result__51727__auto__ = switch__51724__auto__(state_52024);
if(cljs.core.keyword_identical_QMARK_(result__51727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51727__auto__;
}
break;
}
}catch (e52033){if((e52033 instanceof Object)){
var ex__51728__auto__ = e52033;
var statearr_52034_53832 = state_52024;
(statearr_52034_53832[(5)] = ex__51728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52033;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53835 = state_52024;
state_52024 = G__53835;
continue;
} else {
return ret_value__51726__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51725__auto__ = function(state_52024){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51725__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51725__auto____1.call(this,state_52024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51725__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51725__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51725__auto__;
})()
;})(__53817,switch__51724__auto__,c__51860__auto___53821,G__52011_53818,G__52011_53819__$1,n__4607__auto___53816,jobs,results,process,async))
})();
var state__51862__auto__ = (function (){var statearr_52035 = (f__51861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51861__auto__.cljs$core$IFn$_invoke$arity$0() : f__51861__auto__.call(null));
(statearr_52035[(6)] = c__51860__auto___53821);

return statearr_52035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51862__auto__);
});})(__53817,c__51860__auto___53821,G__52011_53818,G__52011_53819__$1,n__4607__auto___53816,jobs,results,process,async))
);


break;
case "async":
var c__51860__auto___53838 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__53817,c__51860__auto___53838,G__52011_53818,G__52011_53819__$1,n__4607__auto___53816,jobs,results,process,async){
return (function (){
var f__51861__auto__ = (function (){var switch__51724__auto__ = ((function (__53817,c__51860__auto___53838,G__52011_53818,G__52011_53819__$1,n__4607__auto___53816,jobs,results,process,async){
return (function (state_52048){
var state_val_52049 = (state_52048[(1)]);
if((state_val_52049 === (1))){
var state_52048__$1 = state_52048;
var statearr_52050_53843 = state_52048__$1;
(statearr_52050_53843[(2)] = null);

(statearr_52050_53843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52049 === (2))){
var state_52048__$1 = state_52048;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52048__$1,(4),jobs);
} else {
if((state_val_52049 === (3))){
var inst_52046 = (state_52048[(2)]);
var state_52048__$1 = state_52048;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52048__$1,inst_52046);
} else {
if((state_val_52049 === (4))){
var inst_52038 = (state_52048[(2)]);
var inst_52039 = async(inst_52038);
var state_52048__$1 = state_52048;
if(cljs.core.truth_(inst_52039)){
var statearr_52051_53847 = state_52048__$1;
(statearr_52051_53847[(1)] = (5));

} else {
var statearr_52052_53848 = state_52048__$1;
(statearr_52052_53848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52049 === (5))){
var state_52048__$1 = state_52048;
var statearr_52053_53849 = state_52048__$1;
(statearr_52053_53849[(2)] = null);

(statearr_52053_53849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52049 === (6))){
var state_52048__$1 = state_52048;
var statearr_52054_53851 = state_52048__$1;
(statearr_52054_53851[(2)] = null);

(statearr_52054_53851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52049 === (7))){
var inst_52044 = (state_52048[(2)]);
var state_52048__$1 = state_52048;
var statearr_52055_53852 = state_52048__$1;
(statearr_52055_53852[(2)] = inst_52044);

(statearr_52055_53852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__53817,c__51860__auto___53838,G__52011_53818,G__52011_53819__$1,n__4607__auto___53816,jobs,results,process,async))
;
return ((function (__53817,switch__51724__auto__,c__51860__auto___53838,G__52011_53818,G__52011_53819__$1,n__4607__auto___53816,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51725__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51725__auto____0 = (function (){
var statearr_52056 = [null,null,null,null,null,null,null];
(statearr_52056[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51725__auto__);

(statearr_52056[(1)] = (1));

return statearr_52056;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51725__auto____1 = (function (state_52048){
while(true){
var ret_value__51726__auto__ = (function (){try{while(true){
var result__51727__auto__ = switch__51724__auto__(state_52048);
if(cljs.core.keyword_identical_QMARK_(result__51727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51727__auto__;
}
break;
}
}catch (e52057){if((e52057 instanceof Object)){
var ex__51728__auto__ = e52057;
var statearr_52058_53855 = state_52048;
(statearr_52058_53855[(5)] = ex__51728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52057;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53857 = state_52048;
state_52048 = G__53857;
continue;
} else {
return ret_value__51726__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51725__auto__ = function(state_52048){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51725__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51725__auto____1.call(this,state_52048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51725__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51725__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51725__auto__;
})()
;})(__53817,switch__51724__auto__,c__51860__auto___53838,G__52011_53818,G__52011_53819__$1,n__4607__auto___53816,jobs,results,process,async))
})();
var state__51862__auto__ = (function (){var statearr_52059 = (f__51861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51861__auto__.cljs$core$IFn$_invoke$arity$0() : f__51861__auto__.call(null));
(statearr_52059[(6)] = c__51860__auto___53838);

return statearr_52059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51862__auto__);
});})(__53817,c__51860__auto___53838,G__52011_53818,G__52011_53819__$1,n__4607__auto___53816,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52011_53819__$1)].join('')));

}

var G__53859 = (__53817 + (1));
__53817 = G__53859;
continue;
} else {
}
break;
}

var c__51860__auto___53860 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51860__auto___53860,jobs,results,process,async){
return (function (){
var f__51861__auto__ = (function (){var switch__51724__auto__ = ((function (c__51860__auto___53860,jobs,results,process,async){
return (function (state_52081){
var state_val_52082 = (state_52081[(1)]);
if((state_val_52082 === (7))){
var inst_52077 = (state_52081[(2)]);
var state_52081__$1 = state_52081;
var statearr_52083_53866 = state_52081__$1;
(statearr_52083_53866[(2)] = inst_52077);

(statearr_52083_53866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52082 === (1))){
var state_52081__$1 = state_52081;
var statearr_52084_53868 = state_52081__$1;
(statearr_52084_53868[(2)] = null);

(statearr_52084_53868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52082 === (4))){
var inst_52062 = (state_52081[(7)]);
var inst_52062__$1 = (state_52081[(2)]);
var inst_52063 = (inst_52062__$1 == null);
var state_52081__$1 = (function (){var statearr_52085 = state_52081;
(statearr_52085[(7)] = inst_52062__$1);

return statearr_52085;
})();
if(cljs.core.truth_(inst_52063)){
var statearr_52086_53872 = state_52081__$1;
(statearr_52086_53872[(1)] = (5));

} else {
var statearr_52087_53874 = state_52081__$1;
(statearr_52087_53874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52082 === (6))){
var inst_52062 = (state_52081[(7)]);
var inst_52067 = (state_52081[(8)]);
var inst_52067__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_52068 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52069 = [inst_52062,inst_52067__$1];
var inst_52070 = (new cljs.core.PersistentVector(null,2,(5),inst_52068,inst_52069,null));
var state_52081__$1 = (function (){var statearr_52088 = state_52081;
(statearr_52088[(8)] = inst_52067__$1);

return statearr_52088;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52081__$1,(8),jobs,inst_52070);
} else {
if((state_val_52082 === (3))){
var inst_52079 = (state_52081[(2)]);
var state_52081__$1 = state_52081;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52081__$1,inst_52079);
} else {
if((state_val_52082 === (2))){
var state_52081__$1 = state_52081;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52081__$1,(4),from);
} else {
if((state_val_52082 === (9))){
var inst_52074 = (state_52081[(2)]);
var state_52081__$1 = (function (){var statearr_52089 = state_52081;
(statearr_52089[(9)] = inst_52074);

return statearr_52089;
})();
var statearr_52090_53883 = state_52081__$1;
(statearr_52090_53883[(2)] = null);

(statearr_52090_53883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52082 === (5))){
var inst_52065 = cljs.core.async.close_BANG_(jobs);
var state_52081__$1 = state_52081;
var statearr_52091_53885 = state_52081__$1;
(statearr_52091_53885[(2)] = inst_52065);

(statearr_52091_53885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52082 === (8))){
var inst_52067 = (state_52081[(8)]);
var inst_52072 = (state_52081[(2)]);
var state_52081__$1 = (function (){var statearr_52092 = state_52081;
(statearr_52092[(10)] = inst_52072);

return statearr_52092;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52081__$1,(9),results,inst_52067);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__51860__auto___53860,jobs,results,process,async))
;
return ((function (switch__51724__auto__,c__51860__auto___53860,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51725__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51725__auto____0 = (function (){
var statearr_52093 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52093[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51725__auto__);

(statearr_52093[(1)] = (1));

return statearr_52093;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51725__auto____1 = (function (state_52081){
while(true){
var ret_value__51726__auto__ = (function (){try{while(true){
var result__51727__auto__ = switch__51724__auto__(state_52081);
if(cljs.core.keyword_identical_QMARK_(result__51727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51727__auto__;
}
break;
}
}catch (e52094){if((e52094 instanceof Object)){
var ex__51728__auto__ = e52094;
var statearr_52095_53890 = state_52081;
(statearr_52095_53890[(5)] = ex__51728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52094;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53891 = state_52081;
state_52081 = G__53891;
continue;
} else {
return ret_value__51726__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51725__auto__ = function(state_52081){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51725__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51725__auto____1.call(this,state_52081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51725__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51725__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51725__auto__;
})()
;})(switch__51724__auto__,c__51860__auto___53860,jobs,results,process,async))
})();
var state__51862__auto__ = (function (){var statearr_52096 = (f__51861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51861__auto__.cljs$core$IFn$_invoke$arity$0() : f__51861__auto__.call(null));
(statearr_52096[(6)] = c__51860__auto___53860);

return statearr_52096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51862__auto__);
});})(c__51860__auto___53860,jobs,results,process,async))
);


var c__51860__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51860__auto__,jobs,results,process,async){
return (function (){
var f__51861__auto__ = (function (){var switch__51724__auto__ = ((function (c__51860__auto__,jobs,results,process,async){
return (function (state_52134){
var state_val_52135 = (state_52134[(1)]);
if((state_val_52135 === (7))){
var inst_52130 = (state_52134[(2)]);
var state_52134__$1 = state_52134;
var statearr_52136_53898 = state_52134__$1;
(statearr_52136_53898[(2)] = inst_52130);

(statearr_52136_53898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52135 === (20))){
var state_52134__$1 = state_52134;
var statearr_52137_53902 = state_52134__$1;
(statearr_52137_53902[(2)] = null);

(statearr_52137_53902[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52135 === (1))){
var state_52134__$1 = state_52134;
var statearr_52138_53904 = state_52134__$1;
(statearr_52138_53904[(2)] = null);

(statearr_52138_53904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52135 === (4))){
var inst_52099 = (state_52134[(7)]);
var inst_52099__$1 = (state_52134[(2)]);
var inst_52100 = (inst_52099__$1 == null);
var state_52134__$1 = (function (){var statearr_52139 = state_52134;
(statearr_52139[(7)] = inst_52099__$1);

return statearr_52139;
})();
if(cljs.core.truth_(inst_52100)){
var statearr_52140_53907 = state_52134__$1;
(statearr_52140_53907[(1)] = (5));

} else {
var statearr_52141_53909 = state_52134__$1;
(statearr_52141_53909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52135 === (15))){
var inst_52112 = (state_52134[(8)]);
var state_52134__$1 = state_52134;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52134__$1,(18),to,inst_52112);
} else {
if((state_val_52135 === (21))){
var inst_52125 = (state_52134[(2)]);
var state_52134__$1 = state_52134;
var statearr_52142_53910 = state_52134__$1;
(statearr_52142_53910[(2)] = inst_52125);

(statearr_52142_53910[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52135 === (13))){
var inst_52127 = (state_52134[(2)]);
var state_52134__$1 = (function (){var statearr_52143 = state_52134;
(statearr_52143[(9)] = inst_52127);

return statearr_52143;
})();
var statearr_52144_53911 = state_52134__$1;
(statearr_52144_53911[(2)] = null);

(statearr_52144_53911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52135 === (6))){
var inst_52099 = (state_52134[(7)]);
var state_52134__$1 = state_52134;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52134__$1,(11),inst_52099);
} else {
if((state_val_52135 === (17))){
var inst_52120 = (state_52134[(2)]);
var state_52134__$1 = state_52134;
if(cljs.core.truth_(inst_52120)){
var statearr_52145_53912 = state_52134__$1;
(statearr_52145_53912[(1)] = (19));

} else {
var statearr_52146_53913 = state_52134__$1;
(statearr_52146_53913[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52135 === (3))){
var inst_52132 = (state_52134[(2)]);
var state_52134__$1 = state_52134;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52134__$1,inst_52132);
} else {
if((state_val_52135 === (12))){
var inst_52109 = (state_52134[(10)]);
var state_52134__$1 = state_52134;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52134__$1,(14),inst_52109);
} else {
if((state_val_52135 === (2))){
var state_52134__$1 = state_52134;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52134__$1,(4),results);
} else {
if((state_val_52135 === (19))){
var state_52134__$1 = state_52134;
var statearr_52147_53916 = state_52134__$1;
(statearr_52147_53916[(2)] = null);

(statearr_52147_53916[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52135 === (11))){
var inst_52109 = (state_52134[(2)]);
var state_52134__$1 = (function (){var statearr_52148 = state_52134;
(statearr_52148[(10)] = inst_52109);

return statearr_52148;
})();
var statearr_52149_53917 = state_52134__$1;
(statearr_52149_53917[(2)] = null);

(statearr_52149_53917[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52135 === (9))){
var state_52134__$1 = state_52134;
var statearr_52150_53920 = state_52134__$1;
(statearr_52150_53920[(2)] = null);

(statearr_52150_53920[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52135 === (5))){
var state_52134__$1 = state_52134;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52151_53923 = state_52134__$1;
(statearr_52151_53923[(1)] = (8));

} else {
var statearr_52152_53924 = state_52134__$1;
(statearr_52152_53924[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52135 === (14))){
var inst_52112 = (state_52134[(8)]);
var inst_52114 = (state_52134[(11)]);
var inst_52112__$1 = (state_52134[(2)]);
var inst_52113 = (inst_52112__$1 == null);
var inst_52114__$1 = cljs.core.not(inst_52113);
var state_52134__$1 = (function (){var statearr_52153 = state_52134;
(statearr_52153[(8)] = inst_52112__$1);

(statearr_52153[(11)] = inst_52114__$1);

return statearr_52153;
})();
if(inst_52114__$1){
var statearr_52154_53927 = state_52134__$1;
(statearr_52154_53927[(1)] = (15));

} else {
var statearr_52155_53928 = state_52134__$1;
(statearr_52155_53928[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52135 === (16))){
var inst_52114 = (state_52134[(11)]);
var state_52134__$1 = state_52134;
var statearr_52156_53929 = state_52134__$1;
(statearr_52156_53929[(2)] = inst_52114);

(statearr_52156_53929[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52135 === (10))){
var inst_52106 = (state_52134[(2)]);
var state_52134__$1 = state_52134;
var statearr_52157_53932 = state_52134__$1;
(statearr_52157_53932[(2)] = inst_52106);

(statearr_52157_53932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52135 === (18))){
var inst_52117 = (state_52134[(2)]);
var state_52134__$1 = state_52134;
var statearr_52158_53936 = state_52134__$1;
(statearr_52158_53936[(2)] = inst_52117);

(statearr_52158_53936[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52135 === (8))){
var inst_52103 = cljs.core.async.close_BANG_(to);
var state_52134__$1 = state_52134;
var statearr_52159_53938 = state_52134__$1;
(statearr_52159_53938[(2)] = inst_52103);

(statearr_52159_53938[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__51860__auto__,jobs,results,process,async))
;
return ((function (switch__51724__auto__,c__51860__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51725__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51725__auto____0 = (function (){
var statearr_52160 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52160[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51725__auto__);

(statearr_52160[(1)] = (1));

return statearr_52160;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51725__auto____1 = (function (state_52134){
while(true){
var ret_value__51726__auto__ = (function (){try{while(true){
var result__51727__auto__ = switch__51724__auto__(state_52134);
if(cljs.core.keyword_identical_QMARK_(result__51727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51727__auto__;
}
break;
}
}catch (e52161){if((e52161 instanceof Object)){
var ex__51728__auto__ = e52161;
var statearr_52162_53941 = state_52134;
(statearr_52162_53941[(5)] = ex__51728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52161;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53942 = state_52134;
state_52134 = G__53942;
continue;
} else {
return ret_value__51726__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51725__auto__ = function(state_52134){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51725__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51725__auto____1.call(this,state_52134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51725__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51725__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51725__auto__;
})()
;})(switch__51724__auto__,c__51860__auto__,jobs,results,process,async))
})();
var state__51862__auto__ = (function (){var statearr_52163 = (f__51861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51861__auto__.cljs$core$IFn$_invoke$arity$0() : f__51861__auto__.call(null));
(statearr_52163[(6)] = c__51860__auto__);

return statearr_52163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51862__auto__);
});})(c__51860__auto__,jobs,results,process,async))
);

return c__51860__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__52165 = arguments.length;
switch (G__52165) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__52167 = arguments.length;
switch (G__52167) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__52169 = arguments.length;
switch (G__52169) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__51860__auto___53960 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51860__auto___53960,tc,fc){
return (function (){
var f__51861__auto__ = (function (){var switch__51724__auto__ = ((function (c__51860__auto___53960,tc,fc){
return (function (state_52195){
var state_val_52196 = (state_52195[(1)]);
if((state_val_52196 === (7))){
var inst_52191 = (state_52195[(2)]);
var state_52195__$1 = state_52195;
var statearr_52197_53964 = state_52195__$1;
(statearr_52197_53964[(2)] = inst_52191);

(statearr_52197_53964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52196 === (1))){
var state_52195__$1 = state_52195;
var statearr_52198_53966 = state_52195__$1;
(statearr_52198_53966[(2)] = null);

(statearr_52198_53966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52196 === (4))){
var inst_52172 = (state_52195[(7)]);
var inst_52172__$1 = (state_52195[(2)]);
var inst_52173 = (inst_52172__$1 == null);
var state_52195__$1 = (function (){var statearr_52199 = state_52195;
(statearr_52199[(7)] = inst_52172__$1);

return statearr_52199;
})();
if(cljs.core.truth_(inst_52173)){
var statearr_52200_53972 = state_52195__$1;
(statearr_52200_53972[(1)] = (5));

} else {
var statearr_52201_53973 = state_52195__$1;
(statearr_52201_53973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52196 === (13))){
var state_52195__$1 = state_52195;
var statearr_52202_53974 = state_52195__$1;
(statearr_52202_53974[(2)] = null);

(statearr_52202_53974[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52196 === (6))){
var inst_52172 = (state_52195[(7)]);
var inst_52178 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_52172) : p.call(null,inst_52172));
var state_52195__$1 = state_52195;
if(cljs.core.truth_(inst_52178)){
var statearr_52203_53978 = state_52195__$1;
(statearr_52203_53978[(1)] = (9));

} else {
var statearr_52204_53979 = state_52195__$1;
(statearr_52204_53979[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52196 === (3))){
var inst_52193 = (state_52195[(2)]);
var state_52195__$1 = state_52195;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52195__$1,inst_52193);
} else {
if((state_val_52196 === (12))){
var state_52195__$1 = state_52195;
var statearr_52205_53981 = state_52195__$1;
(statearr_52205_53981[(2)] = null);

(statearr_52205_53981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52196 === (2))){
var state_52195__$1 = state_52195;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52195__$1,(4),ch);
} else {
if((state_val_52196 === (11))){
var inst_52172 = (state_52195[(7)]);
var inst_52182 = (state_52195[(2)]);
var state_52195__$1 = state_52195;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52195__$1,(8),inst_52182,inst_52172);
} else {
if((state_val_52196 === (9))){
var state_52195__$1 = state_52195;
var statearr_52206_53985 = state_52195__$1;
(statearr_52206_53985[(2)] = tc);

(statearr_52206_53985[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52196 === (5))){
var inst_52175 = cljs.core.async.close_BANG_(tc);
var inst_52176 = cljs.core.async.close_BANG_(fc);
var state_52195__$1 = (function (){var statearr_52207 = state_52195;
(statearr_52207[(8)] = inst_52175);

return statearr_52207;
})();
var statearr_52208_53986 = state_52195__$1;
(statearr_52208_53986[(2)] = inst_52176);

(statearr_52208_53986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52196 === (14))){
var inst_52189 = (state_52195[(2)]);
var state_52195__$1 = state_52195;
var statearr_52209_53987 = state_52195__$1;
(statearr_52209_53987[(2)] = inst_52189);

(statearr_52209_53987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52196 === (10))){
var state_52195__$1 = state_52195;
var statearr_52210_53988 = state_52195__$1;
(statearr_52210_53988[(2)] = fc);

(statearr_52210_53988[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52196 === (8))){
var inst_52184 = (state_52195[(2)]);
var state_52195__$1 = state_52195;
if(cljs.core.truth_(inst_52184)){
var statearr_52211_53992 = state_52195__$1;
(statearr_52211_53992[(1)] = (12));

} else {
var statearr_52212_53993 = state_52195__$1;
(statearr_52212_53993[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__51860__auto___53960,tc,fc))
;
return ((function (switch__51724__auto__,c__51860__auto___53960,tc,fc){
return (function() {
var cljs$core$async$state_machine__51725__auto__ = null;
var cljs$core$async$state_machine__51725__auto____0 = (function (){
var statearr_52213 = [null,null,null,null,null,null,null,null,null];
(statearr_52213[(0)] = cljs$core$async$state_machine__51725__auto__);

(statearr_52213[(1)] = (1));

return statearr_52213;
});
var cljs$core$async$state_machine__51725__auto____1 = (function (state_52195){
while(true){
var ret_value__51726__auto__ = (function (){try{while(true){
var result__51727__auto__ = switch__51724__auto__(state_52195);
if(cljs.core.keyword_identical_QMARK_(result__51727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51727__auto__;
}
break;
}
}catch (e52214){if((e52214 instanceof Object)){
var ex__51728__auto__ = e52214;
var statearr_52215_53998 = state_52195;
(statearr_52215_53998[(5)] = ex__51728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52214;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54004 = state_52195;
state_52195 = G__54004;
continue;
} else {
return ret_value__51726__auto__;
}
break;
}
});
cljs$core$async$state_machine__51725__auto__ = function(state_52195){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51725__auto____1.call(this,state_52195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51725__auto____0;
cljs$core$async$state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51725__auto____1;
return cljs$core$async$state_machine__51725__auto__;
})()
;})(switch__51724__auto__,c__51860__auto___53960,tc,fc))
})();
var state__51862__auto__ = (function (){var statearr_52216 = (f__51861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51861__auto__.cljs$core$IFn$_invoke$arity$0() : f__51861__auto__.call(null));
(statearr_52216[(6)] = c__51860__auto___53960);

return statearr_52216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51862__auto__);
});})(c__51860__auto___53960,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__51860__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51860__auto__){
return (function (){
var f__51861__auto__ = (function (){var switch__51724__auto__ = ((function (c__51860__auto__){
return (function (state_52237){
var state_val_52238 = (state_52237[(1)]);
if((state_val_52238 === (7))){
var inst_52233 = (state_52237[(2)]);
var state_52237__$1 = state_52237;
var statearr_52239_54013 = state_52237__$1;
(statearr_52239_54013[(2)] = inst_52233);

(statearr_52239_54013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52238 === (1))){
var inst_52217 = init;
var state_52237__$1 = (function (){var statearr_52240 = state_52237;
(statearr_52240[(7)] = inst_52217);

return statearr_52240;
})();
var statearr_52241_54018 = state_52237__$1;
(statearr_52241_54018[(2)] = null);

(statearr_52241_54018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52238 === (4))){
var inst_52220 = (state_52237[(8)]);
var inst_52220__$1 = (state_52237[(2)]);
var inst_52221 = (inst_52220__$1 == null);
var state_52237__$1 = (function (){var statearr_52242 = state_52237;
(statearr_52242[(8)] = inst_52220__$1);

return statearr_52242;
})();
if(cljs.core.truth_(inst_52221)){
var statearr_52243_54020 = state_52237__$1;
(statearr_52243_54020[(1)] = (5));

} else {
var statearr_52244_54022 = state_52237__$1;
(statearr_52244_54022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52238 === (6))){
var inst_52217 = (state_52237[(7)]);
var inst_52220 = (state_52237[(8)]);
var inst_52224 = (state_52237[(9)]);
var inst_52224__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_52217,inst_52220) : f.call(null,inst_52217,inst_52220));
var inst_52225 = cljs.core.reduced_QMARK_(inst_52224__$1);
var state_52237__$1 = (function (){var statearr_52245 = state_52237;
(statearr_52245[(9)] = inst_52224__$1);

return statearr_52245;
})();
if(inst_52225){
var statearr_52246_54027 = state_52237__$1;
(statearr_52246_54027[(1)] = (8));

} else {
var statearr_52247_54029 = state_52237__$1;
(statearr_52247_54029[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52238 === (3))){
var inst_52235 = (state_52237[(2)]);
var state_52237__$1 = state_52237;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52237__$1,inst_52235);
} else {
if((state_val_52238 === (2))){
var state_52237__$1 = state_52237;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52237__$1,(4),ch);
} else {
if((state_val_52238 === (9))){
var inst_52224 = (state_52237[(9)]);
var inst_52217 = inst_52224;
var state_52237__$1 = (function (){var statearr_52248 = state_52237;
(statearr_52248[(7)] = inst_52217);

return statearr_52248;
})();
var statearr_52249_54041 = state_52237__$1;
(statearr_52249_54041[(2)] = null);

(statearr_52249_54041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52238 === (5))){
var inst_52217 = (state_52237[(7)]);
var state_52237__$1 = state_52237;
var statearr_52250_54043 = state_52237__$1;
(statearr_52250_54043[(2)] = inst_52217);

(statearr_52250_54043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52238 === (10))){
var inst_52231 = (state_52237[(2)]);
var state_52237__$1 = state_52237;
var statearr_52251_54044 = state_52237__$1;
(statearr_52251_54044[(2)] = inst_52231);

(statearr_52251_54044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52238 === (8))){
var inst_52224 = (state_52237[(9)]);
var inst_52227 = cljs.core.deref(inst_52224);
var state_52237__$1 = state_52237;
var statearr_52252_54053 = state_52237__$1;
(statearr_52252_54053[(2)] = inst_52227);

(statearr_52252_54053[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__51860__auto__))
;
return ((function (switch__51724__auto__,c__51860__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__51725__auto__ = null;
var cljs$core$async$reduce_$_state_machine__51725__auto____0 = (function (){
var statearr_52253 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52253[(0)] = cljs$core$async$reduce_$_state_machine__51725__auto__);

(statearr_52253[(1)] = (1));

return statearr_52253;
});
var cljs$core$async$reduce_$_state_machine__51725__auto____1 = (function (state_52237){
while(true){
var ret_value__51726__auto__ = (function (){try{while(true){
var result__51727__auto__ = switch__51724__auto__(state_52237);
if(cljs.core.keyword_identical_QMARK_(result__51727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51727__auto__;
}
break;
}
}catch (e52254){if((e52254 instanceof Object)){
var ex__51728__auto__ = e52254;
var statearr_52255_54061 = state_52237;
(statearr_52255_54061[(5)] = ex__51728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52254;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54062 = state_52237;
state_52237 = G__54062;
continue;
} else {
return ret_value__51726__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__51725__auto__ = function(state_52237){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__51725__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__51725__auto____1.call(this,state_52237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__51725__auto____0;
cljs$core$async$reduce_$_state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__51725__auto____1;
return cljs$core$async$reduce_$_state_machine__51725__auto__;
})()
;})(switch__51724__auto__,c__51860__auto__))
})();
var state__51862__auto__ = (function (){var statearr_52256 = (f__51861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51861__auto__.cljs$core$IFn$_invoke$arity$0() : f__51861__auto__.call(null));
(statearr_52256[(6)] = c__51860__auto__);

return statearr_52256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51862__auto__);
});})(c__51860__auto__))
);

return c__51860__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__51860__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51860__auto__,f__$1){
return (function (){
var f__51861__auto__ = (function (){var switch__51724__auto__ = ((function (c__51860__auto__,f__$1){
return (function (state_52262){
var state_val_52263 = (state_52262[(1)]);
if((state_val_52263 === (1))){
var inst_52257 = cljs.core.async.reduce(f__$1,init,ch);
var state_52262__$1 = state_52262;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52262__$1,(2),inst_52257);
} else {
if((state_val_52263 === (2))){
var inst_52259 = (state_52262[(2)]);
var inst_52260 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_52259) : f__$1.call(null,inst_52259));
var state_52262__$1 = state_52262;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52262__$1,inst_52260);
} else {
return null;
}
}
});})(c__51860__auto__,f__$1))
;
return ((function (switch__51724__auto__,c__51860__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__51725__auto__ = null;
var cljs$core$async$transduce_$_state_machine__51725__auto____0 = (function (){
var statearr_52264 = [null,null,null,null,null,null,null];
(statearr_52264[(0)] = cljs$core$async$transduce_$_state_machine__51725__auto__);

(statearr_52264[(1)] = (1));

return statearr_52264;
});
var cljs$core$async$transduce_$_state_machine__51725__auto____1 = (function (state_52262){
while(true){
var ret_value__51726__auto__ = (function (){try{while(true){
var result__51727__auto__ = switch__51724__auto__(state_52262);
if(cljs.core.keyword_identical_QMARK_(result__51727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51727__auto__;
}
break;
}
}catch (e52265){if((e52265 instanceof Object)){
var ex__51728__auto__ = e52265;
var statearr_52266_54075 = state_52262;
(statearr_52266_54075[(5)] = ex__51728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52265;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54078 = state_52262;
state_52262 = G__54078;
continue;
} else {
return ret_value__51726__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__51725__auto__ = function(state_52262){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__51725__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__51725__auto____1.call(this,state_52262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__51725__auto____0;
cljs$core$async$transduce_$_state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__51725__auto____1;
return cljs$core$async$transduce_$_state_machine__51725__auto__;
})()
;})(switch__51724__auto__,c__51860__auto__,f__$1))
})();
var state__51862__auto__ = (function (){var statearr_52267 = (f__51861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51861__auto__.cljs$core$IFn$_invoke$arity$0() : f__51861__auto__.call(null));
(statearr_52267[(6)] = c__51860__auto__);

return statearr_52267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51862__auto__);
});})(c__51860__auto__,f__$1))
);

return c__51860__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__52269 = arguments.length;
switch (G__52269) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__51860__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51860__auto__){
return (function (){
var f__51861__auto__ = (function (){var switch__51724__auto__ = ((function (c__51860__auto__){
return (function (state_52294){
var state_val_52295 = (state_52294[(1)]);
if((state_val_52295 === (7))){
var inst_52276 = (state_52294[(2)]);
var state_52294__$1 = state_52294;
var statearr_52296_54084 = state_52294__$1;
(statearr_52296_54084[(2)] = inst_52276);

(statearr_52296_54084[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (1))){
var inst_52270 = cljs.core.seq(coll);
var inst_52271 = inst_52270;
var state_52294__$1 = (function (){var statearr_52297 = state_52294;
(statearr_52297[(7)] = inst_52271);

return statearr_52297;
})();
var statearr_52298_54085 = state_52294__$1;
(statearr_52298_54085[(2)] = null);

(statearr_52298_54085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (4))){
var inst_52271 = (state_52294[(7)]);
var inst_52274 = cljs.core.first(inst_52271);
var state_52294__$1 = state_52294;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52294__$1,(7),ch,inst_52274);
} else {
if((state_val_52295 === (13))){
var inst_52288 = (state_52294[(2)]);
var state_52294__$1 = state_52294;
var statearr_52299_54089 = state_52294__$1;
(statearr_52299_54089[(2)] = inst_52288);

(statearr_52299_54089[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (6))){
var inst_52279 = (state_52294[(2)]);
var state_52294__$1 = state_52294;
if(cljs.core.truth_(inst_52279)){
var statearr_52300_54090 = state_52294__$1;
(statearr_52300_54090[(1)] = (8));

} else {
var statearr_52301_54091 = state_52294__$1;
(statearr_52301_54091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (3))){
var inst_52292 = (state_52294[(2)]);
var state_52294__$1 = state_52294;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52294__$1,inst_52292);
} else {
if((state_val_52295 === (12))){
var state_52294__$1 = state_52294;
var statearr_52302_54093 = state_52294__$1;
(statearr_52302_54093[(2)] = null);

(statearr_52302_54093[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (2))){
var inst_52271 = (state_52294[(7)]);
var state_52294__$1 = state_52294;
if(cljs.core.truth_(inst_52271)){
var statearr_52303_54095 = state_52294__$1;
(statearr_52303_54095[(1)] = (4));

} else {
var statearr_52304_54096 = state_52294__$1;
(statearr_52304_54096[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (11))){
var inst_52285 = cljs.core.async.close_BANG_(ch);
var state_52294__$1 = state_52294;
var statearr_52305_54097 = state_52294__$1;
(statearr_52305_54097[(2)] = inst_52285);

(statearr_52305_54097[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (9))){
var state_52294__$1 = state_52294;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52306_54098 = state_52294__$1;
(statearr_52306_54098[(1)] = (11));

} else {
var statearr_52307_54099 = state_52294__$1;
(statearr_52307_54099[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (5))){
var inst_52271 = (state_52294[(7)]);
var state_52294__$1 = state_52294;
var statearr_52308_54101 = state_52294__$1;
(statearr_52308_54101[(2)] = inst_52271);

(statearr_52308_54101[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (10))){
var inst_52290 = (state_52294[(2)]);
var state_52294__$1 = state_52294;
var statearr_52309_54103 = state_52294__$1;
(statearr_52309_54103[(2)] = inst_52290);

(statearr_52309_54103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52295 === (8))){
var inst_52271 = (state_52294[(7)]);
var inst_52281 = cljs.core.next(inst_52271);
var inst_52271__$1 = inst_52281;
var state_52294__$1 = (function (){var statearr_52310 = state_52294;
(statearr_52310[(7)] = inst_52271__$1);

return statearr_52310;
})();
var statearr_52311_54108 = state_52294__$1;
(statearr_52311_54108[(2)] = null);

(statearr_52311_54108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__51860__auto__))
;
return ((function (switch__51724__auto__,c__51860__auto__){
return (function() {
var cljs$core$async$state_machine__51725__auto__ = null;
var cljs$core$async$state_machine__51725__auto____0 = (function (){
var statearr_52312 = [null,null,null,null,null,null,null,null];
(statearr_52312[(0)] = cljs$core$async$state_machine__51725__auto__);

(statearr_52312[(1)] = (1));

return statearr_52312;
});
var cljs$core$async$state_machine__51725__auto____1 = (function (state_52294){
while(true){
var ret_value__51726__auto__ = (function (){try{while(true){
var result__51727__auto__ = switch__51724__auto__(state_52294);
if(cljs.core.keyword_identical_QMARK_(result__51727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51727__auto__;
}
break;
}
}catch (e52313){if((e52313 instanceof Object)){
var ex__51728__auto__ = e52313;
var statearr_52314_54111 = state_52294;
(statearr_52314_54111[(5)] = ex__51728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52313;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54115 = state_52294;
state_52294 = G__54115;
continue;
} else {
return ret_value__51726__auto__;
}
break;
}
});
cljs$core$async$state_machine__51725__auto__ = function(state_52294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51725__auto____1.call(this,state_52294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51725__auto____0;
cljs$core$async$state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51725__auto____1;
return cljs$core$async$state_machine__51725__auto__;
})()
;})(switch__51724__auto__,c__51860__auto__))
})();
var state__51862__auto__ = (function (){var statearr_52315 = (f__51861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51861__auto__.cljs$core$IFn$_invoke$arity$0() : f__51861__auto__.call(null));
(statearr_52315[(6)] = c__51860__auto__);

return statearr_52315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51862__auto__);
});})(c__51860__auto__))
);

return c__51860__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52316 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52316 = (function (ch,cs,meta52317){
this.ch = ch;
this.cs = cs;
this.meta52317 = meta52317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_52318,meta52317__$1){
var self__ = this;
var _52318__$1 = this;
return (new cljs.core.async.t_cljs$core$async52316(self__.ch,self__.cs,meta52317__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async52316.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_52318){
var self__ = this;
var _52318__$1 = this;
return self__.meta52317;
});})(cs))
;

cljs.core.async.t_cljs$core$async52316.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52316.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async52316.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52316.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52316.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52316.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52316.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta52317","meta52317",1750821960,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async52316.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52316";

cljs.core.async.t_cljs$core$async52316.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async52316");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52316.
 */
cljs.core.async.__GT_t_cljs$core$async52316 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async52316(ch__$1,cs__$1,meta52317){
return (new cljs.core.async.t_cljs$core$async52316(ch__$1,cs__$1,meta52317));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async52316(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__51860__auto___54166 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51860__auto___54166,cs,m,dchan,dctr,done){
return (function (){
var f__51861__auto__ = (function (){var switch__51724__auto__ = ((function (c__51860__auto___54166,cs,m,dchan,dctr,done){
return (function (state_52453){
var state_val_52454 = (state_52453[(1)]);
if((state_val_52454 === (7))){
var inst_52449 = (state_52453[(2)]);
var state_52453__$1 = state_52453;
var statearr_52455_54168 = state_52453__$1;
(statearr_52455_54168[(2)] = inst_52449);

(statearr_52455_54168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (20))){
var inst_52352 = (state_52453[(7)]);
var inst_52364 = cljs.core.first(inst_52352);
var inst_52365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52364,(0),null);
var inst_52366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52364,(1),null);
var state_52453__$1 = (function (){var statearr_52456 = state_52453;
(statearr_52456[(8)] = inst_52365);

return statearr_52456;
})();
if(cljs.core.truth_(inst_52366)){
var statearr_52457_54173 = state_52453__$1;
(statearr_52457_54173[(1)] = (22));

} else {
var statearr_52458_54174 = state_52453__$1;
(statearr_52458_54174[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (27))){
var inst_52396 = (state_52453[(9)]);
var inst_52401 = (state_52453[(10)]);
var inst_52394 = (state_52453[(11)]);
var inst_52321 = (state_52453[(12)]);
var inst_52401__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_52394,inst_52396);
var inst_52402 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_52401__$1,inst_52321,done);
var state_52453__$1 = (function (){var statearr_52459 = state_52453;
(statearr_52459[(10)] = inst_52401__$1);

return statearr_52459;
})();
if(cljs.core.truth_(inst_52402)){
var statearr_52460_54184 = state_52453__$1;
(statearr_52460_54184[(1)] = (30));

} else {
var statearr_52461_54187 = state_52453__$1;
(statearr_52461_54187[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (1))){
var state_52453__$1 = state_52453;
var statearr_52462_54188 = state_52453__$1;
(statearr_52462_54188[(2)] = null);

(statearr_52462_54188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (24))){
var inst_52352 = (state_52453[(7)]);
var inst_52371 = (state_52453[(2)]);
var inst_52372 = cljs.core.next(inst_52352);
var inst_52330 = inst_52372;
var inst_52331 = null;
var inst_52332 = (0);
var inst_52333 = (0);
var state_52453__$1 = (function (){var statearr_52463 = state_52453;
(statearr_52463[(13)] = inst_52330);

(statearr_52463[(14)] = inst_52331);

(statearr_52463[(15)] = inst_52332);

(statearr_52463[(16)] = inst_52371);

(statearr_52463[(17)] = inst_52333);

return statearr_52463;
})();
var statearr_52464_54189 = state_52453__$1;
(statearr_52464_54189[(2)] = null);

(statearr_52464_54189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (39))){
var state_52453__$1 = state_52453;
var statearr_52468_54190 = state_52453__$1;
(statearr_52468_54190[(2)] = null);

(statearr_52468_54190[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (4))){
var inst_52321 = (state_52453[(12)]);
var inst_52321__$1 = (state_52453[(2)]);
var inst_52322 = (inst_52321__$1 == null);
var state_52453__$1 = (function (){var statearr_52469 = state_52453;
(statearr_52469[(12)] = inst_52321__$1);

return statearr_52469;
})();
if(cljs.core.truth_(inst_52322)){
var statearr_52470_54191 = state_52453__$1;
(statearr_52470_54191[(1)] = (5));

} else {
var statearr_52471_54192 = state_52453__$1;
(statearr_52471_54192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (15))){
var inst_52330 = (state_52453[(13)]);
var inst_52331 = (state_52453[(14)]);
var inst_52332 = (state_52453[(15)]);
var inst_52333 = (state_52453[(17)]);
var inst_52348 = (state_52453[(2)]);
var inst_52349 = (inst_52333 + (1));
var tmp52465 = inst_52330;
var tmp52466 = inst_52331;
var tmp52467 = inst_52332;
var inst_52330__$1 = tmp52465;
var inst_52331__$1 = tmp52466;
var inst_52332__$1 = tmp52467;
var inst_52333__$1 = inst_52349;
var state_52453__$1 = (function (){var statearr_52472 = state_52453;
(statearr_52472[(13)] = inst_52330__$1);

(statearr_52472[(14)] = inst_52331__$1);

(statearr_52472[(15)] = inst_52332__$1);

(statearr_52472[(18)] = inst_52348);

(statearr_52472[(17)] = inst_52333__$1);

return statearr_52472;
})();
var statearr_52473_54199 = state_52453__$1;
(statearr_52473_54199[(2)] = null);

(statearr_52473_54199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (21))){
var inst_52375 = (state_52453[(2)]);
var state_52453__$1 = state_52453;
var statearr_52477_54200 = state_52453__$1;
(statearr_52477_54200[(2)] = inst_52375);

(statearr_52477_54200[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (31))){
var inst_52401 = (state_52453[(10)]);
var inst_52405 = done(null);
var inst_52406 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_52401);
var state_52453__$1 = (function (){var statearr_52478 = state_52453;
(statearr_52478[(19)] = inst_52405);

return statearr_52478;
})();
var statearr_52479_54201 = state_52453__$1;
(statearr_52479_54201[(2)] = inst_52406);

(statearr_52479_54201[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (32))){
var inst_52396 = (state_52453[(9)]);
var inst_52394 = (state_52453[(11)]);
var inst_52395 = (state_52453[(20)]);
var inst_52393 = (state_52453[(21)]);
var inst_52408 = (state_52453[(2)]);
var inst_52409 = (inst_52396 + (1));
var tmp52474 = inst_52394;
var tmp52475 = inst_52395;
var tmp52476 = inst_52393;
var inst_52393__$1 = tmp52476;
var inst_52394__$1 = tmp52474;
var inst_52395__$1 = tmp52475;
var inst_52396__$1 = inst_52409;
var state_52453__$1 = (function (){var statearr_52480 = state_52453;
(statearr_52480[(9)] = inst_52396__$1);

(statearr_52480[(22)] = inst_52408);

(statearr_52480[(11)] = inst_52394__$1);

(statearr_52480[(20)] = inst_52395__$1);

(statearr_52480[(21)] = inst_52393__$1);

return statearr_52480;
})();
var statearr_52481_54213 = state_52453__$1;
(statearr_52481_54213[(2)] = null);

(statearr_52481_54213[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (40))){
var inst_52421 = (state_52453[(23)]);
var inst_52425 = done(null);
var inst_52426 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_52421);
var state_52453__$1 = (function (){var statearr_52482 = state_52453;
(statearr_52482[(24)] = inst_52425);

return statearr_52482;
})();
var statearr_52483_54217 = state_52453__$1;
(statearr_52483_54217[(2)] = inst_52426);

(statearr_52483_54217[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (33))){
var inst_52412 = (state_52453[(25)]);
var inst_52414 = cljs.core.chunked_seq_QMARK_(inst_52412);
var state_52453__$1 = state_52453;
if(inst_52414){
var statearr_52484_54219 = state_52453__$1;
(statearr_52484_54219[(1)] = (36));

} else {
var statearr_52485_54220 = state_52453__$1;
(statearr_52485_54220[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (13))){
var inst_52342 = (state_52453[(26)]);
var inst_52345 = cljs.core.async.close_BANG_(inst_52342);
var state_52453__$1 = state_52453;
var statearr_52486_54222 = state_52453__$1;
(statearr_52486_54222[(2)] = inst_52345);

(statearr_52486_54222[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (22))){
var inst_52365 = (state_52453[(8)]);
var inst_52368 = cljs.core.async.close_BANG_(inst_52365);
var state_52453__$1 = state_52453;
var statearr_52487_54224 = state_52453__$1;
(statearr_52487_54224[(2)] = inst_52368);

(statearr_52487_54224[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (36))){
var inst_52412 = (state_52453[(25)]);
var inst_52416 = cljs.core.chunk_first(inst_52412);
var inst_52417 = cljs.core.chunk_rest(inst_52412);
var inst_52418 = cljs.core.count(inst_52416);
var inst_52393 = inst_52417;
var inst_52394 = inst_52416;
var inst_52395 = inst_52418;
var inst_52396 = (0);
var state_52453__$1 = (function (){var statearr_52488 = state_52453;
(statearr_52488[(9)] = inst_52396);

(statearr_52488[(11)] = inst_52394);

(statearr_52488[(20)] = inst_52395);

(statearr_52488[(21)] = inst_52393);

return statearr_52488;
})();
var statearr_52489_54226 = state_52453__$1;
(statearr_52489_54226[(2)] = null);

(statearr_52489_54226[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (41))){
var inst_52412 = (state_52453[(25)]);
var inst_52428 = (state_52453[(2)]);
var inst_52429 = cljs.core.next(inst_52412);
var inst_52393 = inst_52429;
var inst_52394 = null;
var inst_52395 = (0);
var inst_52396 = (0);
var state_52453__$1 = (function (){var statearr_52490 = state_52453;
(statearr_52490[(9)] = inst_52396);

(statearr_52490[(11)] = inst_52394);

(statearr_52490[(27)] = inst_52428);

(statearr_52490[(20)] = inst_52395);

(statearr_52490[(21)] = inst_52393);

return statearr_52490;
})();
var statearr_52491_54229 = state_52453__$1;
(statearr_52491_54229[(2)] = null);

(statearr_52491_54229[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (43))){
var state_52453__$1 = state_52453;
var statearr_52492_54231 = state_52453__$1;
(statearr_52492_54231[(2)] = null);

(statearr_52492_54231[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (29))){
var inst_52437 = (state_52453[(2)]);
var state_52453__$1 = state_52453;
var statearr_52493_54232 = state_52453__$1;
(statearr_52493_54232[(2)] = inst_52437);

(statearr_52493_54232[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (44))){
var inst_52446 = (state_52453[(2)]);
var state_52453__$1 = (function (){var statearr_52494 = state_52453;
(statearr_52494[(28)] = inst_52446);

return statearr_52494;
})();
var statearr_52495_54235 = state_52453__$1;
(statearr_52495_54235[(2)] = null);

(statearr_52495_54235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (6))){
var inst_52385 = (state_52453[(29)]);
var inst_52384 = cljs.core.deref(cs);
var inst_52385__$1 = cljs.core.keys(inst_52384);
var inst_52386 = cljs.core.count(inst_52385__$1);
var inst_52387 = cljs.core.reset_BANG_(dctr,inst_52386);
var inst_52392 = cljs.core.seq(inst_52385__$1);
var inst_52393 = inst_52392;
var inst_52394 = null;
var inst_52395 = (0);
var inst_52396 = (0);
var state_52453__$1 = (function (){var statearr_52496 = state_52453;
(statearr_52496[(9)] = inst_52396);

(statearr_52496[(30)] = inst_52387);

(statearr_52496[(29)] = inst_52385__$1);

(statearr_52496[(11)] = inst_52394);

(statearr_52496[(20)] = inst_52395);

(statearr_52496[(21)] = inst_52393);

return statearr_52496;
})();
var statearr_52497_54241 = state_52453__$1;
(statearr_52497_54241[(2)] = null);

(statearr_52497_54241[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (28))){
var inst_52412 = (state_52453[(25)]);
var inst_52393 = (state_52453[(21)]);
var inst_52412__$1 = cljs.core.seq(inst_52393);
var state_52453__$1 = (function (){var statearr_52498 = state_52453;
(statearr_52498[(25)] = inst_52412__$1);

return statearr_52498;
})();
if(inst_52412__$1){
var statearr_52499_54244 = state_52453__$1;
(statearr_52499_54244[(1)] = (33));

} else {
var statearr_52500_54245 = state_52453__$1;
(statearr_52500_54245[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (25))){
var inst_52396 = (state_52453[(9)]);
var inst_52395 = (state_52453[(20)]);
var inst_52398 = (inst_52396 < inst_52395);
var inst_52399 = inst_52398;
var state_52453__$1 = state_52453;
if(cljs.core.truth_(inst_52399)){
var statearr_52501_54248 = state_52453__$1;
(statearr_52501_54248[(1)] = (27));

} else {
var statearr_52502_54250 = state_52453__$1;
(statearr_52502_54250[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (34))){
var state_52453__$1 = state_52453;
var statearr_52503_54251 = state_52453__$1;
(statearr_52503_54251[(2)] = null);

(statearr_52503_54251[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (17))){
var state_52453__$1 = state_52453;
var statearr_52504_54253 = state_52453__$1;
(statearr_52504_54253[(2)] = null);

(statearr_52504_54253[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (3))){
var inst_52451 = (state_52453[(2)]);
var state_52453__$1 = state_52453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52453__$1,inst_52451);
} else {
if((state_val_52454 === (12))){
var inst_52380 = (state_52453[(2)]);
var state_52453__$1 = state_52453;
var statearr_52505_54256 = state_52453__$1;
(statearr_52505_54256[(2)] = inst_52380);

(statearr_52505_54256[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (2))){
var state_52453__$1 = state_52453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52453__$1,(4),ch);
} else {
if((state_val_52454 === (23))){
var state_52453__$1 = state_52453;
var statearr_52506_54257 = state_52453__$1;
(statearr_52506_54257[(2)] = null);

(statearr_52506_54257[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (35))){
var inst_52435 = (state_52453[(2)]);
var state_52453__$1 = state_52453;
var statearr_52507_54259 = state_52453__$1;
(statearr_52507_54259[(2)] = inst_52435);

(statearr_52507_54259[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (19))){
var inst_52352 = (state_52453[(7)]);
var inst_52356 = cljs.core.chunk_first(inst_52352);
var inst_52357 = cljs.core.chunk_rest(inst_52352);
var inst_52358 = cljs.core.count(inst_52356);
var inst_52330 = inst_52357;
var inst_52331 = inst_52356;
var inst_52332 = inst_52358;
var inst_52333 = (0);
var state_52453__$1 = (function (){var statearr_52508 = state_52453;
(statearr_52508[(13)] = inst_52330);

(statearr_52508[(14)] = inst_52331);

(statearr_52508[(15)] = inst_52332);

(statearr_52508[(17)] = inst_52333);

return statearr_52508;
})();
var statearr_52509_54262 = state_52453__$1;
(statearr_52509_54262[(2)] = null);

(statearr_52509_54262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (11))){
var inst_52330 = (state_52453[(13)]);
var inst_52352 = (state_52453[(7)]);
var inst_52352__$1 = cljs.core.seq(inst_52330);
var state_52453__$1 = (function (){var statearr_52510 = state_52453;
(statearr_52510[(7)] = inst_52352__$1);

return statearr_52510;
})();
if(inst_52352__$1){
var statearr_52511_54263 = state_52453__$1;
(statearr_52511_54263[(1)] = (16));

} else {
var statearr_52512_54264 = state_52453__$1;
(statearr_52512_54264[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (9))){
var inst_52382 = (state_52453[(2)]);
var state_52453__$1 = state_52453;
var statearr_52513_54268 = state_52453__$1;
(statearr_52513_54268[(2)] = inst_52382);

(statearr_52513_54268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (5))){
var inst_52328 = cljs.core.deref(cs);
var inst_52329 = cljs.core.seq(inst_52328);
var inst_52330 = inst_52329;
var inst_52331 = null;
var inst_52332 = (0);
var inst_52333 = (0);
var state_52453__$1 = (function (){var statearr_52514 = state_52453;
(statearr_52514[(13)] = inst_52330);

(statearr_52514[(14)] = inst_52331);

(statearr_52514[(15)] = inst_52332);

(statearr_52514[(17)] = inst_52333);

return statearr_52514;
})();
var statearr_52515_54292 = state_52453__$1;
(statearr_52515_54292[(2)] = null);

(statearr_52515_54292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (14))){
var state_52453__$1 = state_52453;
var statearr_52516_54296 = state_52453__$1;
(statearr_52516_54296[(2)] = null);

(statearr_52516_54296[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (45))){
var inst_52443 = (state_52453[(2)]);
var state_52453__$1 = state_52453;
var statearr_52517_54298 = state_52453__$1;
(statearr_52517_54298[(2)] = inst_52443);

(statearr_52517_54298[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (26))){
var inst_52385 = (state_52453[(29)]);
var inst_52439 = (state_52453[(2)]);
var inst_52440 = cljs.core.seq(inst_52385);
var state_52453__$1 = (function (){var statearr_52518 = state_52453;
(statearr_52518[(31)] = inst_52439);

return statearr_52518;
})();
if(inst_52440){
var statearr_52519_54300 = state_52453__$1;
(statearr_52519_54300[(1)] = (42));

} else {
var statearr_52520_54301 = state_52453__$1;
(statearr_52520_54301[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (16))){
var inst_52352 = (state_52453[(7)]);
var inst_52354 = cljs.core.chunked_seq_QMARK_(inst_52352);
var state_52453__$1 = state_52453;
if(inst_52354){
var statearr_52521_54304 = state_52453__$1;
(statearr_52521_54304[(1)] = (19));

} else {
var statearr_52522_54306 = state_52453__$1;
(statearr_52522_54306[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (38))){
var inst_52432 = (state_52453[(2)]);
var state_52453__$1 = state_52453;
var statearr_52523_54307 = state_52453__$1;
(statearr_52523_54307[(2)] = inst_52432);

(statearr_52523_54307[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (30))){
var state_52453__$1 = state_52453;
var statearr_52524_54308 = state_52453__$1;
(statearr_52524_54308[(2)] = null);

(statearr_52524_54308[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (10))){
var inst_52331 = (state_52453[(14)]);
var inst_52333 = (state_52453[(17)]);
var inst_52341 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_52331,inst_52333);
var inst_52342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52341,(0),null);
var inst_52343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52341,(1),null);
var state_52453__$1 = (function (){var statearr_52525 = state_52453;
(statearr_52525[(26)] = inst_52342);

return statearr_52525;
})();
if(cljs.core.truth_(inst_52343)){
var statearr_52526_54313 = state_52453__$1;
(statearr_52526_54313[(1)] = (13));

} else {
var statearr_52527_54314 = state_52453__$1;
(statearr_52527_54314[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (18))){
var inst_52378 = (state_52453[(2)]);
var state_52453__$1 = state_52453;
var statearr_52528_54316 = state_52453__$1;
(statearr_52528_54316[(2)] = inst_52378);

(statearr_52528_54316[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (42))){
var state_52453__$1 = state_52453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52453__$1,(45),dchan);
} else {
if((state_val_52454 === (37))){
var inst_52412 = (state_52453[(25)]);
var inst_52421 = (state_52453[(23)]);
var inst_52321 = (state_52453[(12)]);
var inst_52421__$1 = cljs.core.first(inst_52412);
var inst_52422 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_52421__$1,inst_52321,done);
var state_52453__$1 = (function (){var statearr_52529 = state_52453;
(statearr_52529[(23)] = inst_52421__$1);

return statearr_52529;
})();
if(cljs.core.truth_(inst_52422)){
var statearr_52530_54320 = state_52453__$1;
(statearr_52530_54320[(1)] = (39));

} else {
var statearr_52531_54322 = state_52453__$1;
(statearr_52531_54322[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52454 === (8))){
var inst_52332 = (state_52453[(15)]);
var inst_52333 = (state_52453[(17)]);
var inst_52335 = (inst_52333 < inst_52332);
var inst_52336 = inst_52335;
var state_52453__$1 = state_52453;
if(cljs.core.truth_(inst_52336)){
var statearr_52532_54323 = state_52453__$1;
(statearr_52532_54323[(1)] = (10));

} else {
var statearr_52533_54328 = state_52453__$1;
(statearr_52533_54328[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__51860__auto___54166,cs,m,dchan,dctr,done))
;
return ((function (switch__51724__auto__,c__51860__auto___54166,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__51725__auto__ = null;
var cljs$core$async$mult_$_state_machine__51725__auto____0 = (function (){
var statearr_52534 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52534[(0)] = cljs$core$async$mult_$_state_machine__51725__auto__);

(statearr_52534[(1)] = (1));

return statearr_52534;
});
var cljs$core$async$mult_$_state_machine__51725__auto____1 = (function (state_52453){
while(true){
var ret_value__51726__auto__ = (function (){try{while(true){
var result__51727__auto__ = switch__51724__auto__(state_52453);
if(cljs.core.keyword_identical_QMARK_(result__51727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51727__auto__;
}
break;
}
}catch (e52535){if((e52535 instanceof Object)){
var ex__51728__auto__ = e52535;
var statearr_52536_54331 = state_52453;
(statearr_52536_54331[(5)] = ex__51728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52535;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54333 = state_52453;
state_52453 = G__54333;
continue;
} else {
return ret_value__51726__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__51725__auto__ = function(state_52453){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__51725__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__51725__auto____1.call(this,state_52453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__51725__auto____0;
cljs$core$async$mult_$_state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__51725__auto____1;
return cljs$core$async$mult_$_state_machine__51725__auto__;
})()
;})(switch__51724__auto__,c__51860__auto___54166,cs,m,dchan,dctr,done))
})();
var state__51862__auto__ = (function (){var statearr_52537 = (f__51861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51861__auto__.cljs$core$IFn$_invoke$arity$0() : f__51861__auto__.call(null));
(statearr_52537[(6)] = c__51860__auto___54166);

return statearr_52537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51862__auto__);
});})(c__51860__auto___54166,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__52539 = arguments.length;
switch (G__52539) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___54364 = arguments.length;
var i__4731__auto___54365 = (0);
while(true){
if((i__4731__auto___54365 < len__4730__auto___54364)){
args__4736__auto__.push((arguments[i__4731__auto___54365]));

var G__54366 = (i__4731__auto___54365 + (1));
i__4731__auto___54365 = G__54366;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__52551){
var map__52552 = p__52551;
var map__52552__$1 = (((((!((map__52552 == null))))?(((((map__52552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52552):map__52552);
var opts = map__52552__$1;
var statearr_52554_54372 = state;
(statearr_52554_54372[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts(((function (map__52552,map__52552__$1,opts){
return (function (val){
var statearr_52559_54373 = state;
(statearr_52559_54373[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__52552,map__52552__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_52560_54375 = state;
(statearr_52560_54375[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq52544){
var G__52545 = cljs.core.first(seq52544);
var seq52544__$1 = cljs.core.next(seq52544);
var G__52546 = cljs.core.first(seq52544__$1);
var seq52544__$2 = cljs.core.next(seq52544__$1);
var G__52547 = cljs.core.first(seq52544__$2);
var seq52544__$3 = cljs.core.next(seq52544__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52545,G__52546,G__52547,seq52544__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52591 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52591 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta52592){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta52592 = meta52592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_52593,meta52592__$1){
var self__ = this;
var _52593__$1 = this;
return (new cljs.core.async.t_cljs$core$async52591(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta52592__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52591.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_52593){
var self__ = this;
var _52593__$1 = this;
return self__.meta52592;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52591.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52591.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52591.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52591.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52591.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52591.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52591.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52591.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52591.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta52592","meta52592",1757718582,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52591.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52591";

cljs.core.async.t_cljs$core$async52591.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async52591");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52591.
 */
cljs.core.async.__GT_t_cljs$core$async52591 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async52591(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52592){
return (new cljs.core.async.t_cljs$core$async52591(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52592));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async52591(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__51860__auto___54401 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51860__auto___54401,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__51861__auto__ = (function (){var switch__51724__auto__ = ((function (c__51860__auto___54401,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_52732){
var state_val_52737 = (state_52732[(1)]);
if((state_val_52737 === (7))){
var inst_52638 = (state_52732[(2)]);
var state_52732__$1 = state_52732;
var statearr_52742_54402 = state_52732__$1;
(statearr_52742_54402[(2)] = inst_52638);

(statearr_52742_54402[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52737 === (20))){
var inst_52650 = (state_52732[(7)]);
var state_52732__$1 = state_52732;
var statearr_52744_54403 = state_52732__$1;
(statearr_52744_54403[(2)] = inst_52650);

(statearr_52744_54403[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52737 === (27))){
var state_52732__$1 = state_52732;
var statearr_52746_54404 = state_52732__$1;
(statearr_52746_54404[(2)] = null);

(statearr_52746_54404[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52737 === (1))){
var inst_52623 = (state_52732[(8)]);
var inst_52623__$1 = calc_state();
var inst_52625 = (inst_52623__$1 == null);
var inst_52626 = cljs.core.not(inst_52625);
var state_52732__$1 = (function (){var statearr_52757 = state_52732;
(statearr_52757[(8)] = inst_52623__$1);

return statearr_52757;
})();
if(inst_52626){
var statearr_52758_54407 = state_52732__$1;
(statearr_52758_54407[(1)] = (2));

} else {
var statearr_52759_54408 = state_52732__$1;
(statearr_52759_54408[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52737 === (24))){
var inst_52675 = (state_52732[(9)]);
var inst_52704 = (state_52732[(10)]);
var inst_52685 = (state_52732[(11)]);
var inst_52704__$1 = (inst_52675.cljs$core$IFn$_invoke$arity$1 ? inst_52675.cljs$core$IFn$_invoke$arity$1(inst_52685) : inst_52675.call(null,inst_52685));
var state_52732__$1 = (function (){var statearr_52761 = state_52732;
(statearr_52761[(10)] = inst_52704__$1);

return statearr_52761;
})();
if(cljs.core.truth_(inst_52704__$1)){
var statearr_52762_54409 = state_52732__$1;
(statearr_52762_54409[(1)] = (29));

} else {
var statearr_52763_54410 = state_52732__$1;
(statearr_52763_54410[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52737 === (4))){
var inst_52641 = (state_52732[(2)]);
var state_52732__$1 = state_52732;
if(cljs.core.truth_(inst_52641)){
var statearr_52768_54412 = state_52732__$1;
(statearr_52768_54412[(1)] = (8));

} else {
var statearr_52769_54413 = state_52732__$1;
(statearr_52769_54413[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52737 === (15))){
var inst_52669 = (state_52732[(2)]);
var state_52732__$1 = state_52732;
if(cljs.core.truth_(inst_52669)){
var statearr_52771_54416 = state_52732__$1;
(statearr_52771_54416[(1)] = (19));

} else {
var statearr_52777_54417 = state_52732__$1;
(statearr_52777_54417[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52737 === (21))){
var inst_52674 = (state_52732[(12)]);
var inst_52674__$1 = (state_52732[(2)]);
var inst_52675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52674__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52674__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52674__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_52732__$1 = (function (){var statearr_52779 = state_52732;
(statearr_52779[(13)] = inst_52676);

(statearr_52779[(9)] = inst_52675);

(statearr_52779[(12)] = inst_52674__$1);

return statearr_52779;
})();
return cljs.core.async.ioc_alts_BANG_(state_52732__$1,(22),inst_52677);
} else {
if((state_val_52737 === (31))){
var inst_52712 = (state_52732[(2)]);
var state_52732__$1 = state_52732;
if(cljs.core.truth_(inst_52712)){
var statearr_52780_54420 = state_52732__$1;
(statearr_52780_54420[(1)] = (32));

} else {
var statearr_52781_54421 = state_52732__$1;
(statearr_52781_54421[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52737 === (32))){
var inst_52684 = (state_52732[(14)]);
var state_52732__$1 = state_52732;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52732__$1,(35),out,inst_52684);
} else {
if((state_val_52737 === (33))){
var inst_52674 = (state_52732[(12)]);
var inst_52650 = inst_52674;
var state_52732__$1 = (function (){var statearr_52785 = state_52732;
(statearr_52785[(7)] = inst_52650);

return statearr_52785;
})();
var statearr_52786_54427 = state_52732__$1;
(statearr_52786_54427[(2)] = null);

(statearr_52786_54427[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52737 === (13))){
var inst_52650 = (state_52732[(7)]);
var inst_52658 = inst_52650.cljs$lang$protocol_mask$partition0$;
var inst_52659 = (inst_52658 & (64));
var inst_52660 = inst_52650.cljs$core$ISeq$;
var inst_52661 = (cljs.core.PROTOCOL_SENTINEL === inst_52660);
var inst_52662 = ((inst_52659) || (inst_52661));
var state_52732__$1 = state_52732;
if(cljs.core.truth_(inst_52662)){
var statearr_52796_54430 = state_52732__$1;
(statearr_52796_54430[(1)] = (16));

} else {
var statearr_52797_54433 = state_52732__$1;
(statearr_52797_54433[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52737 === (22))){
var inst_52684 = (state_52732[(14)]);
var inst_52685 = (state_52732[(11)]);
var inst_52683 = (state_52732[(2)]);
var inst_52684__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52683,(0),null);
var inst_52685__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52683,(1),null);
var inst_52688 = (inst_52684__$1 == null);
var inst_52689 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52685__$1,change);
var inst_52690 = ((inst_52688) || (inst_52689));
var state_52732__$1 = (function (){var statearr_52804 = state_52732;
(statearr_52804[(14)] = inst_52684__$1);

(statearr_52804[(11)] = inst_52685__$1);

return statearr_52804;
})();
if(cljs.core.truth_(inst_52690)){
var statearr_52810_54435 = state_52732__$1;
(statearr_52810_54435[(1)] = (23));

} else {
var statearr_52811_54436 = state_52732__$1;
(statearr_52811_54436[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52737 === (36))){
var inst_52674 = (state_52732[(12)]);
var inst_52650 = inst_52674;
var state_52732__$1 = (function (){var statearr_52815 = state_52732;
(statearr_52815[(7)] = inst_52650);

return statearr_52815;
})();
var statearr_52820_54437 = state_52732__$1;
(statearr_52820_54437[(2)] = null);

(statearr_52820_54437[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52737 === (29))){
var inst_52704 = (state_52732[(10)]);
var state_52732__$1 = state_52732;
var statearr_52822_54440 = state_52732__$1;
(statearr_52822_54440[(2)] = inst_52704);

(statearr_52822_54440[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52737 === (6))){
var state_52732__$1 = state_52732;
var statearr_52827_54441 = state_52732__$1;
(statearr_52827_54441[(2)] = false);

(statearr_52827_54441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52737 === (28))){
var inst_52700 = (state_52732[(2)]);
var inst_52701 = calc_state();
var inst_52650 = inst_52701;
var state_52732__$1 = (function (){var statearr_52832 = state_52732;
(statearr_52832[(7)] = inst_52650);

(statearr_52832[(15)] = inst_52700);

return statearr_52832;
})();
var statearr_52838_54443 = state_52732__$1;
(statearr_52838_54443[(2)] = null);

(statearr_52838_54443[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52737 === (25))){
var inst_52727 = (state_52732[(2)]);
var state_52732__$1 = state_52732;
var statearr_52849_54444 = state_52732__$1;
(statearr_52849_54444[(2)] = inst_52727);

(statearr_52849_54444[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52737 === (34))){
var inst_52725 = (state_52732[(2)]);
var state_52732__$1 = state_52732;
var statearr_52856_54448 = state_52732__$1;
(statearr_52856_54448[(2)] = inst_52725);

(statearr_52856_54448[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52737 === (17))){
var state_52732__$1 = state_52732;
var statearr_52862_54450 = state_52732__$1;
(statearr_52862_54450[(2)] = false);

(statearr_52862_54450[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52737 === (3))){
var state_52732__$1 = state_52732;
var statearr_52864_54454 = state_52732__$1;
(statearr_52864_54454[(2)] = false);

(statearr_52864_54454[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52737 === (12))){
var inst_52729 = (state_52732[(2)]);
var state_52732__$1 = state_52732;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52732__$1,inst_52729);
} else {
if((state_val_52737 === (2))){
var inst_52623 = (state_52732[(8)]);
var inst_52628 = inst_52623.cljs$lang$protocol_mask$partition0$;
var inst_52629 = (inst_52628 & (64));
var inst_52632 = inst_52623.cljs$core$ISeq$;
var inst_52633 = (cljs.core.PROTOCOL_SENTINEL === inst_52632);
var inst_52634 = ((inst_52629) || (inst_52633));
var state_52732__$1 = state_52732;
if(cljs.core.truth_(inst_52634)){
var statearr_52869_54458 = state_52732__$1;
(statearr_52869_54458[(1)] = (5));

} else {
var statearr_52870_54459 = state_52732__$1;
(statearr_52870_54459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52737 === (23))){
var inst_52684 = (state_52732[(14)]);
var inst_52694 = (inst_52684 == null);
var state_52732__$1 = state_52732;
if(cljs.core.truth_(inst_52694)){
var statearr_52871_54464 = state_52732__$1;
(statearr_52871_54464[(1)] = (26));

} else {
var statearr_52872_54465 = state_52732__$1;
(statearr_52872_54465[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52737 === (35))){
var inst_52716 = (state_52732[(2)]);
var state_52732__$1 = state_52732;
if(cljs.core.truth_(inst_52716)){
var statearr_52873_54467 = state_52732__$1;
(statearr_52873_54467[(1)] = (36));

} else {
var statearr_52874_54468 = state_52732__$1;
(statearr_52874_54468[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52737 === (19))){
var inst_52650 = (state_52732[(7)]);
var inst_52671 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52650);
var state_52732__$1 = state_52732;
var statearr_52875_54471 = state_52732__$1;
(statearr_52875_54471[(2)] = inst_52671);

(statearr_52875_54471[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52737 === (11))){
var inst_52650 = (state_52732[(7)]);
var inst_52655 = (inst_52650 == null);
var inst_52656 = cljs.core.not(inst_52655);
var state_52732__$1 = state_52732;
if(inst_52656){
var statearr_52876_54476 = state_52732__$1;
(statearr_52876_54476[(1)] = (13));

} else {
var statearr_52877_54477 = state_52732__$1;
(statearr_52877_54477[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52737 === (9))){
var inst_52623 = (state_52732[(8)]);
var state_52732__$1 = state_52732;
var statearr_52880_54478 = state_52732__$1;
(statearr_52880_54478[(2)] = inst_52623);

(statearr_52880_54478[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52737 === (5))){
var state_52732__$1 = state_52732;
var statearr_52881_54483 = state_52732__$1;
(statearr_52881_54483[(2)] = true);

(statearr_52881_54483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52737 === (14))){
var state_52732__$1 = state_52732;
var statearr_52883_54486 = state_52732__$1;
(statearr_52883_54486[(2)] = false);

(statearr_52883_54486[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52737 === (26))){
var inst_52685 = (state_52732[(11)]);
var inst_52697 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_52685);
var state_52732__$1 = state_52732;
var statearr_52885_54487 = state_52732__$1;
(statearr_52885_54487[(2)] = inst_52697);

(statearr_52885_54487[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52737 === (16))){
var state_52732__$1 = state_52732;
var statearr_52888_54488 = state_52732__$1;
(statearr_52888_54488[(2)] = true);

(statearr_52888_54488[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52737 === (38))){
var inst_52721 = (state_52732[(2)]);
var state_52732__$1 = state_52732;
var statearr_52889_54489 = state_52732__$1;
(statearr_52889_54489[(2)] = inst_52721);

(statearr_52889_54489[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52737 === (30))){
var inst_52676 = (state_52732[(13)]);
var inst_52675 = (state_52732[(9)]);
var inst_52685 = (state_52732[(11)]);
var inst_52707 = cljs.core.empty_QMARK_(inst_52675);
var inst_52708 = (inst_52676.cljs$core$IFn$_invoke$arity$1 ? inst_52676.cljs$core$IFn$_invoke$arity$1(inst_52685) : inst_52676.call(null,inst_52685));
var inst_52709 = cljs.core.not(inst_52708);
var inst_52710 = ((inst_52707) && (inst_52709));
var state_52732__$1 = state_52732;
var statearr_52895_54490 = state_52732__$1;
(statearr_52895_54490[(2)] = inst_52710);

(statearr_52895_54490[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52737 === (10))){
var inst_52623 = (state_52732[(8)]);
var inst_52646 = (state_52732[(2)]);
var inst_52647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52646,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52646,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52649 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52646,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_52650 = inst_52623;
var state_52732__$1 = (function (){var statearr_52904 = state_52732;
(statearr_52904[(7)] = inst_52650);

(statearr_52904[(16)] = inst_52648);

(statearr_52904[(17)] = inst_52647);

(statearr_52904[(18)] = inst_52649);

return statearr_52904;
})();
var statearr_52905_54497 = state_52732__$1;
(statearr_52905_54497[(2)] = null);

(statearr_52905_54497[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52737 === (18))){
var inst_52666 = (state_52732[(2)]);
var state_52732__$1 = state_52732;
var statearr_52906_54498 = state_52732__$1;
(statearr_52906_54498[(2)] = inst_52666);

(statearr_52906_54498[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52737 === (37))){
var state_52732__$1 = state_52732;
var statearr_52907_54499 = state_52732__$1;
(statearr_52907_54499[(2)] = null);

(statearr_52907_54499[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52737 === (8))){
var inst_52623 = (state_52732[(8)]);
var inst_52643 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52623);
var state_52732__$1 = state_52732;
var statearr_52914_54505 = state_52732__$1;
(statearr_52914_54505[(2)] = inst_52643);

(statearr_52914_54505[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__51860__auto___54401,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__51724__auto__,c__51860__auto___54401,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__51725__auto__ = null;
var cljs$core$async$mix_$_state_machine__51725__auto____0 = (function (){
var statearr_52929 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52929[(0)] = cljs$core$async$mix_$_state_machine__51725__auto__);

(statearr_52929[(1)] = (1));

return statearr_52929;
});
var cljs$core$async$mix_$_state_machine__51725__auto____1 = (function (state_52732){
while(true){
var ret_value__51726__auto__ = (function (){try{while(true){
var result__51727__auto__ = switch__51724__auto__(state_52732);
if(cljs.core.keyword_identical_QMARK_(result__51727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51727__auto__;
}
break;
}
}catch (e52934){if((e52934 instanceof Object)){
var ex__51728__auto__ = e52934;
var statearr_52935_54514 = state_52732;
(statearr_52935_54514[(5)] = ex__51728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52934;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54516 = state_52732;
state_52732 = G__54516;
continue;
} else {
return ret_value__51726__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__51725__auto__ = function(state_52732){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__51725__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__51725__auto____1.call(this,state_52732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__51725__auto____0;
cljs$core$async$mix_$_state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__51725__auto____1;
return cljs$core$async$mix_$_state_machine__51725__auto__;
})()
;})(switch__51724__auto__,c__51860__auto___54401,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__51862__auto__ = (function (){var statearr_52936 = (f__51861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51861__auto__.cljs$core$IFn$_invoke$arity$0() : f__51861__auto__.call(null));
(statearr_52936[(6)] = c__51860__auto___54401);

return statearr_52936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51862__auto__);
});})(c__51860__auto___54401,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__52972 = arguments.length;
switch (G__52972) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__53003 = arguments.length;
switch (G__53003) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__52999_SHARP_){
if(cljs.core.truth_((p1__52999_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__52999_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__52999_SHARP_.call(null,topic)))){
return p1__52999_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__52999_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53018 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53018 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta53019){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta53019 = meta53019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_53020,meta53019__$1){
var self__ = this;
var _53020__$1 = this;
return (new cljs.core.async.t_cljs$core$async53018(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta53019__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53018.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_53020){
var self__ = this;
var _53020__$1 = this;
return self__.meta53019;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53018.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53018.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53018.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53018.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53018.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53018.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53018.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53018.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta53019","meta53019",1504250094,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53018.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53018.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53018";

cljs.core.async.t_cljs$core$async53018.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async53018");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53018.
 */
cljs.core.async.__GT_t_cljs$core$async53018 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async53018(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta53019){
return (new cljs.core.async.t_cljs$core$async53018(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta53019));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async53018(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__51860__auto___54546 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51860__auto___54546,mults,ensure_mult,p){
return (function (){
var f__51861__auto__ = (function (){var switch__51724__auto__ = ((function (c__51860__auto___54546,mults,ensure_mult,p){
return (function (state_53127){
var state_val_53128 = (state_53127[(1)]);
if((state_val_53128 === (7))){
var inst_53123 = (state_53127[(2)]);
var state_53127__$1 = state_53127;
var statearr_53129_54551 = state_53127__$1;
(statearr_53129_54551[(2)] = inst_53123);

(statearr_53129_54551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (20))){
var state_53127__$1 = state_53127;
var statearr_53130_54555 = state_53127__$1;
(statearr_53130_54555[(2)] = null);

(statearr_53130_54555[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (1))){
var state_53127__$1 = state_53127;
var statearr_53131_54556 = state_53127__$1;
(statearr_53131_54556[(2)] = null);

(statearr_53131_54556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (24))){
var inst_53106 = (state_53127[(7)]);
var inst_53115 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_53106);
var state_53127__$1 = state_53127;
var statearr_53132_54562 = state_53127__$1;
(statearr_53132_54562[(2)] = inst_53115);

(statearr_53132_54562[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (4))){
var inst_53057 = (state_53127[(8)]);
var inst_53057__$1 = (state_53127[(2)]);
var inst_53058 = (inst_53057__$1 == null);
var state_53127__$1 = (function (){var statearr_53133 = state_53127;
(statearr_53133[(8)] = inst_53057__$1);

return statearr_53133;
})();
if(cljs.core.truth_(inst_53058)){
var statearr_53134_54566 = state_53127__$1;
(statearr_53134_54566[(1)] = (5));

} else {
var statearr_53135_54567 = state_53127__$1;
(statearr_53135_54567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (15))){
var inst_53100 = (state_53127[(2)]);
var state_53127__$1 = state_53127;
var statearr_53136_54568 = state_53127__$1;
(statearr_53136_54568[(2)] = inst_53100);

(statearr_53136_54568[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (21))){
var inst_53120 = (state_53127[(2)]);
var state_53127__$1 = (function (){var statearr_53137 = state_53127;
(statearr_53137[(9)] = inst_53120);

return statearr_53137;
})();
var statearr_53138_54571 = state_53127__$1;
(statearr_53138_54571[(2)] = null);

(statearr_53138_54571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (13))){
var inst_53082 = (state_53127[(10)]);
var inst_53084 = cljs.core.chunked_seq_QMARK_(inst_53082);
var state_53127__$1 = state_53127;
if(inst_53084){
var statearr_53139_54576 = state_53127__$1;
(statearr_53139_54576[(1)] = (16));

} else {
var statearr_53140_54583 = state_53127__$1;
(statearr_53140_54583[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (22))){
var inst_53112 = (state_53127[(2)]);
var state_53127__$1 = state_53127;
if(cljs.core.truth_(inst_53112)){
var statearr_53141_54585 = state_53127__$1;
(statearr_53141_54585[(1)] = (23));

} else {
var statearr_53142_54587 = state_53127__$1;
(statearr_53142_54587[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (6))){
var inst_53057 = (state_53127[(8)]);
var inst_53108 = (state_53127[(11)]);
var inst_53106 = (state_53127[(7)]);
var inst_53106__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_53057) : topic_fn.call(null,inst_53057));
var inst_53107 = cljs.core.deref(mults);
var inst_53108__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53107,inst_53106__$1);
var state_53127__$1 = (function (){var statearr_53143 = state_53127;
(statearr_53143[(11)] = inst_53108__$1);

(statearr_53143[(7)] = inst_53106__$1);

return statearr_53143;
})();
if(cljs.core.truth_(inst_53108__$1)){
var statearr_53144_54594 = state_53127__$1;
(statearr_53144_54594[(1)] = (19));

} else {
var statearr_53145_54595 = state_53127__$1;
(statearr_53145_54595[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (25))){
var inst_53117 = (state_53127[(2)]);
var state_53127__$1 = state_53127;
var statearr_53146_54597 = state_53127__$1;
(statearr_53146_54597[(2)] = inst_53117);

(statearr_53146_54597[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (17))){
var inst_53082 = (state_53127[(10)]);
var inst_53091 = cljs.core.first(inst_53082);
var inst_53092 = cljs.core.async.muxch_STAR_(inst_53091);
var inst_53093 = cljs.core.async.close_BANG_(inst_53092);
var inst_53094 = cljs.core.next(inst_53082);
var inst_53067 = inst_53094;
var inst_53068 = null;
var inst_53069 = (0);
var inst_53070 = (0);
var state_53127__$1 = (function (){var statearr_53147 = state_53127;
(statearr_53147[(12)] = inst_53068);

(statearr_53147[(13)] = inst_53093);

(statearr_53147[(14)] = inst_53067);

(statearr_53147[(15)] = inst_53069);

(statearr_53147[(16)] = inst_53070);

return statearr_53147;
})();
var statearr_53148_54604 = state_53127__$1;
(statearr_53148_54604[(2)] = null);

(statearr_53148_54604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (3))){
var inst_53125 = (state_53127[(2)]);
var state_53127__$1 = state_53127;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53127__$1,inst_53125);
} else {
if((state_val_53128 === (12))){
var inst_53102 = (state_53127[(2)]);
var state_53127__$1 = state_53127;
var statearr_53149_54606 = state_53127__$1;
(statearr_53149_54606[(2)] = inst_53102);

(statearr_53149_54606[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (2))){
var state_53127__$1 = state_53127;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53127__$1,(4),ch);
} else {
if((state_val_53128 === (23))){
var state_53127__$1 = state_53127;
var statearr_53150_54607 = state_53127__$1;
(statearr_53150_54607[(2)] = null);

(statearr_53150_54607[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (19))){
var inst_53057 = (state_53127[(8)]);
var inst_53108 = (state_53127[(11)]);
var inst_53110 = cljs.core.async.muxch_STAR_(inst_53108);
var state_53127__$1 = state_53127;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53127__$1,(22),inst_53110,inst_53057);
} else {
if((state_val_53128 === (11))){
var inst_53067 = (state_53127[(14)]);
var inst_53082 = (state_53127[(10)]);
var inst_53082__$1 = cljs.core.seq(inst_53067);
var state_53127__$1 = (function (){var statearr_53152 = state_53127;
(statearr_53152[(10)] = inst_53082__$1);

return statearr_53152;
})();
if(inst_53082__$1){
var statearr_53153_54614 = state_53127__$1;
(statearr_53153_54614[(1)] = (13));

} else {
var statearr_53158_54615 = state_53127__$1;
(statearr_53158_54615[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (9))){
var inst_53104 = (state_53127[(2)]);
var state_53127__$1 = state_53127;
var statearr_53159_54616 = state_53127__$1;
(statearr_53159_54616[(2)] = inst_53104);

(statearr_53159_54616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (5))){
var inst_53064 = cljs.core.deref(mults);
var inst_53065 = cljs.core.vals(inst_53064);
var inst_53066 = cljs.core.seq(inst_53065);
var inst_53067 = inst_53066;
var inst_53068 = null;
var inst_53069 = (0);
var inst_53070 = (0);
var state_53127__$1 = (function (){var statearr_53160 = state_53127;
(statearr_53160[(12)] = inst_53068);

(statearr_53160[(14)] = inst_53067);

(statearr_53160[(15)] = inst_53069);

(statearr_53160[(16)] = inst_53070);

return statearr_53160;
})();
var statearr_53161_54617 = state_53127__$1;
(statearr_53161_54617[(2)] = null);

(statearr_53161_54617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (14))){
var state_53127__$1 = state_53127;
var statearr_53165_54618 = state_53127__$1;
(statearr_53165_54618[(2)] = null);

(statearr_53165_54618[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (16))){
var inst_53082 = (state_53127[(10)]);
var inst_53086 = cljs.core.chunk_first(inst_53082);
var inst_53087 = cljs.core.chunk_rest(inst_53082);
var inst_53088 = cljs.core.count(inst_53086);
var inst_53067 = inst_53087;
var inst_53068 = inst_53086;
var inst_53069 = inst_53088;
var inst_53070 = (0);
var state_53127__$1 = (function (){var statearr_53166 = state_53127;
(statearr_53166[(12)] = inst_53068);

(statearr_53166[(14)] = inst_53067);

(statearr_53166[(15)] = inst_53069);

(statearr_53166[(16)] = inst_53070);

return statearr_53166;
})();
var statearr_53167_54625 = state_53127__$1;
(statearr_53167_54625[(2)] = null);

(statearr_53167_54625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (10))){
var inst_53068 = (state_53127[(12)]);
var inst_53067 = (state_53127[(14)]);
var inst_53069 = (state_53127[(15)]);
var inst_53070 = (state_53127[(16)]);
var inst_53075 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_53068,inst_53070);
var inst_53077 = cljs.core.async.muxch_STAR_(inst_53075);
var inst_53078 = cljs.core.async.close_BANG_(inst_53077);
var inst_53079 = (inst_53070 + (1));
var tmp53162 = inst_53068;
var tmp53163 = inst_53067;
var tmp53164 = inst_53069;
var inst_53067__$1 = tmp53163;
var inst_53068__$1 = tmp53162;
var inst_53069__$1 = tmp53164;
var inst_53070__$1 = inst_53079;
var state_53127__$1 = (function (){var statearr_53168 = state_53127;
(statearr_53168[(12)] = inst_53068__$1);

(statearr_53168[(17)] = inst_53078);

(statearr_53168[(14)] = inst_53067__$1);

(statearr_53168[(15)] = inst_53069__$1);

(statearr_53168[(16)] = inst_53070__$1);

return statearr_53168;
})();
var statearr_53169_54626 = state_53127__$1;
(statearr_53169_54626[(2)] = null);

(statearr_53169_54626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (18))){
var inst_53097 = (state_53127[(2)]);
var state_53127__$1 = state_53127;
var statearr_53170_54627 = state_53127__$1;
(statearr_53170_54627[(2)] = inst_53097);

(statearr_53170_54627[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53128 === (8))){
var inst_53069 = (state_53127[(15)]);
var inst_53070 = (state_53127[(16)]);
var inst_53072 = (inst_53070 < inst_53069);
var inst_53073 = inst_53072;
var state_53127__$1 = state_53127;
if(cljs.core.truth_(inst_53073)){
var statearr_53171_54631 = state_53127__$1;
(statearr_53171_54631[(1)] = (10));

} else {
var statearr_53172_54632 = state_53127__$1;
(statearr_53172_54632[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__51860__auto___54546,mults,ensure_mult,p))
;
return ((function (switch__51724__auto__,c__51860__auto___54546,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__51725__auto__ = null;
var cljs$core$async$state_machine__51725__auto____0 = (function (){
var statearr_53173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53173[(0)] = cljs$core$async$state_machine__51725__auto__);

(statearr_53173[(1)] = (1));

return statearr_53173;
});
var cljs$core$async$state_machine__51725__auto____1 = (function (state_53127){
while(true){
var ret_value__51726__auto__ = (function (){try{while(true){
var result__51727__auto__ = switch__51724__auto__(state_53127);
if(cljs.core.keyword_identical_QMARK_(result__51727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51727__auto__;
}
break;
}
}catch (e53178){if((e53178 instanceof Object)){
var ex__51728__auto__ = e53178;
var statearr_53179_54639 = state_53127;
(statearr_53179_54639[(5)] = ex__51728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53178;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54640 = state_53127;
state_53127 = G__54640;
continue;
} else {
return ret_value__51726__auto__;
}
break;
}
});
cljs$core$async$state_machine__51725__auto__ = function(state_53127){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51725__auto____1.call(this,state_53127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51725__auto____0;
cljs$core$async$state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51725__auto____1;
return cljs$core$async$state_machine__51725__auto__;
})()
;})(switch__51724__auto__,c__51860__auto___54546,mults,ensure_mult,p))
})();
var state__51862__auto__ = (function (){var statearr_53180 = (f__51861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51861__auto__.cljs$core$IFn$_invoke$arity$0() : f__51861__auto__.call(null));
(statearr_53180[(6)] = c__51860__auto___54546);

return statearr_53180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51862__auto__);
});})(c__51860__auto___54546,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__53182 = arguments.length;
switch (G__53182) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__53184 = arguments.length;
switch (G__53184) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__53186 = arguments.length;
switch (G__53186) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__51860__auto___54673 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51860__auto___54673,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__51861__auto__ = (function (){var switch__51724__auto__ = ((function (c__51860__auto___54673,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_53225){
var state_val_53226 = (state_53225[(1)]);
if((state_val_53226 === (7))){
var state_53225__$1 = state_53225;
var statearr_53227_54677 = state_53225__$1;
(statearr_53227_54677[(2)] = null);

(statearr_53227_54677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (1))){
var state_53225__$1 = state_53225;
var statearr_53228_54679 = state_53225__$1;
(statearr_53228_54679[(2)] = null);

(statearr_53228_54679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (4))){
var inst_53189 = (state_53225[(7)]);
var inst_53191 = (inst_53189 < cnt);
var state_53225__$1 = state_53225;
if(cljs.core.truth_(inst_53191)){
var statearr_53229_54680 = state_53225__$1;
(statearr_53229_54680[(1)] = (6));

} else {
var statearr_53230_54681 = state_53225__$1;
(statearr_53230_54681[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (15))){
var inst_53221 = (state_53225[(2)]);
var state_53225__$1 = state_53225;
var statearr_53231_54682 = state_53225__$1;
(statearr_53231_54682[(2)] = inst_53221);

(statearr_53231_54682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (13))){
var inst_53214 = cljs.core.async.close_BANG_(out);
var state_53225__$1 = state_53225;
var statearr_53232_54683 = state_53225__$1;
(statearr_53232_54683[(2)] = inst_53214);

(statearr_53232_54683[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (6))){
var state_53225__$1 = state_53225;
var statearr_53233_54684 = state_53225__$1;
(statearr_53233_54684[(2)] = null);

(statearr_53233_54684[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (3))){
var inst_53223 = (state_53225[(2)]);
var state_53225__$1 = state_53225;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53225__$1,inst_53223);
} else {
if((state_val_53226 === (12))){
var inst_53211 = (state_53225[(8)]);
var inst_53211__$1 = (state_53225[(2)]);
var inst_53212 = cljs.core.some(cljs.core.nil_QMARK_,inst_53211__$1);
var state_53225__$1 = (function (){var statearr_53234 = state_53225;
(statearr_53234[(8)] = inst_53211__$1);

return statearr_53234;
})();
if(cljs.core.truth_(inst_53212)){
var statearr_53235_54685 = state_53225__$1;
(statearr_53235_54685[(1)] = (13));

} else {
var statearr_53236_54686 = state_53225__$1;
(statearr_53236_54686[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (2))){
var inst_53188 = cljs.core.reset_BANG_(dctr,cnt);
var inst_53189 = (0);
var state_53225__$1 = (function (){var statearr_53237 = state_53225;
(statearr_53237[(9)] = inst_53188);

(statearr_53237[(7)] = inst_53189);

return statearr_53237;
})();
var statearr_53238_54687 = state_53225__$1;
(statearr_53238_54687[(2)] = null);

(statearr_53238_54687[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (11))){
var inst_53189 = (state_53225[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_53225,(10),Object,null,(9));
var inst_53198 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_53189) : chs__$1.call(null,inst_53189));
var inst_53199 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_53189) : done.call(null,inst_53189));
var inst_53200 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_53198,inst_53199);
var state_53225__$1 = state_53225;
var statearr_53239_54688 = state_53225__$1;
(statearr_53239_54688[(2)] = inst_53200);


cljs.core.async.impl.ioc_helpers.process_exception(state_53225__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (9))){
var inst_53189 = (state_53225[(7)]);
var inst_53202 = (state_53225[(2)]);
var inst_53203 = (inst_53189 + (1));
var inst_53189__$1 = inst_53203;
var state_53225__$1 = (function (){var statearr_53240 = state_53225;
(statearr_53240[(10)] = inst_53202);

(statearr_53240[(7)] = inst_53189__$1);

return statearr_53240;
})();
var statearr_53241_54689 = state_53225__$1;
(statearr_53241_54689[(2)] = null);

(statearr_53241_54689[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (5))){
var inst_53209 = (state_53225[(2)]);
var state_53225__$1 = (function (){var statearr_53242 = state_53225;
(statearr_53242[(11)] = inst_53209);

return statearr_53242;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53225__$1,(12),dchan);
} else {
if((state_val_53226 === (14))){
var inst_53211 = (state_53225[(8)]);
var inst_53216 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_53211);
var state_53225__$1 = state_53225;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53225__$1,(16),out,inst_53216);
} else {
if((state_val_53226 === (16))){
var inst_53218 = (state_53225[(2)]);
var state_53225__$1 = (function (){var statearr_53243 = state_53225;
(statearr_53243[(12)] = inst_53218);

return statearr_53243;
})();
var statearr_53244_54691 = state_53225__$1;
(statearr_53244_54691[(2)] = null);

(statearr_53244_54691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (10))){
var inst_53193 = (state_53225[(2)]);
var inst_53194 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_53225__$1 = (function (){var statearr_53245 = state_53225;
(statearr_53245[(13)] = inst_53193);

return statearr_53245;
})();
var statearr_53246_54692 = state_53225__$1;
(statearr_53246_54692[(2)] = inst_53194);


cljs.core.async.impl.ioc_helpers.process_exception(state_53225__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (8))){
var inst_53207 = (state_53225[(2)]);
var state_53225__$1 = state_53225;
var statearr_53247_54694 = state_53225__$1;
(statearr_53247_54694[(2)] = inst_53207);

(statearr_53247_54694[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__51860__auto___54673,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__51724__auto__,c__51860__auto___54673,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__51725__auto__ = null;
var cljs$core$async$state_machine__51725__auto____0 = (function (){
var statearr_53248 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53248[(0)] = cljs$core$async$state_machine__51725__auto__);

(statearr_53248[(1)] = (1));

return statearr_53248;
});
var cljs$core$async$state_machine__51725__auto____1 = (function (state_53225){
while(true){
var ret_value__51726__auto__ = (function (){try{while(true){
var result__51727__auto__ = switch__51724__auto__(state_53225);
if(cljs.core.keyword_identical_QMARK_(result__51727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51727__auto__;
}
break;
}
}catch (e53249){if((e53249 instanceof Object)){
var ex__51728__auto__ = e53249;
var statearr_53250_54696 = state_53225;
(statearr_53250_54696[(5)] = ex__51728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53249;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54697 = state_53225;
state_53225 = G__54697;
continue;
} else {
return ret_value__51726__auto__;
}
break;
}
});
cljs$core$async$state_machine__51725__auto__ = function(state_53225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51725__auto____1.call(this,state_53225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51725__auto____0;
cljs$core$async$state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51725__auto____1;
return cljs$core$async$state_machine__51725__auto__;
})()
;})(switch__51724__auto__,c__51860__auto___54673,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__51862__auto__ = (function (){var statearr_53251 = (f__51861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51861__auto__.cljs$core$IFn$_invoke$arity$0() : f__51861__auto__.call(null));
(statearr_53251[(6)] = c__51860__auto___54673);

return statearr_53251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51862__auto__);
});})(c__51860__auto___54673,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__53254 = arguments.length;
switch (G__53254) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51860__auto___54702 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51860__auto___54702,out){
return (function (){
var f__51861__auto__ = (function (){var switch__51724__auto__ = ((function (c__51860__auto___54702,out){
return (function (state_53286){
var state_val_53287 = (state_53286[(1)]);
if((state_val_53287 === (7))){
var inst_53265 = (state_53286[(7)]);
var inst_53266 = (state_53286[(8)]);
var inst_53265__$1 = (state_53286[(2)]);
var inst_53266__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53265__$1,(0),null);
var inst_53267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53265__$1,(1),null);
var inst_53268 = (inst_53266__$1 == null);
var state_53286__$1 = (function (){var statearr_53288 = state_53286;
(statearr_53288[(9)] = inst_53267);

(statearr_53288[(7)] = inst_53265__$1);

(statearr_53288[(8)] = inst_53266__$1);

return statearr_53288;
})();
if(cljs.core.truth_(inst_53268)){
var statearr_53289_54705 = state_53286__$1;
(statearr_53289_54705[(1)] = (8));

} else {
var statearr_53290_54706 = state_53286__$1;
(statearr_53290_54706[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53287 === (1))){
var inst_53255 = cljs.core.vec(chs);
var inst_53256 = inst_53255;
var state_53286__$1 = (function (){var statearr_53291 = state_53286;
(statearr_53291[(10)] = inst_53256);

return statearr_53291;
})();
var statearr_53292_54708 = state_53286__$1;
(statearr_53292_54708[(2)] = null);

(statearr_53292_54708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53287 === (4))){
var inst_53256 = (state_53286[(10)]);
var state_53286__$1 = state_53286;
return cljs.core.async.ioc_alts_BANG_(state_53286__$1,(7),inst_53256);
} else {
if((state_val_53287 === (6))){
var inst_53282 = (state_53286[(2)]);
var state_53286__$1 = state_53286;
var statearr_53293_54709 = state_53286__$1;
(statearr_53293_54709[(2)] = inst_53282);

(statearr_53293_54709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53287 === (3))){
var inst_53284 = (state_53286[(2)]);
var state_53286__$1 = state_53286;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53286__$1,inst_53284);
} else {
if((state_val_53287 === (2))){
var inst_53256 = (state_53286[(10)]);
var inst_53258 = cljs.core.count(inst_53256);
var inst_53259 = (inst_53258 > (0));
var state_53286__$1 = state_53286;
if(cljs.core.truth_(inst_53259)){
var statearr_53295_54712 = state_53286__$1;
(statearr_53295_54712[(1)] = (4));

} else {
var statearr_53296_54713 = state_53286__$1;
(statearr_53296_54713[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53287 === (11))){
var inst_53256 = (state_53286[(10)]);
var inst_53275 = (state_53286[(2)]);
var tmp53294 = inst_53256;
var inst_53256__$1 = tmp53294;
var state_53286__$1 = (function (){var statearr_53297 = state_53286;
(statearr_53297[(10)] = inst_53256__$1);

(statearr_53297[(11)] = inst_53275);

return statearr_53297;
})();
var statearr_53298_54715 = state_53286__$1;
(statearr_53298_54715[(2)] = null);

(statearr_53298_54715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53287 === (9))){
var inst_53266 = (state_53286[(8)]);
var state_53286__$1 = state_53286;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53286__$1,(11),out,inst_53266);
} else {
if((state_val_53287 === (5))){
var inst_53280 = cljs.core.async.close_BANG_(out);
var state_53286__$1 = state_53286;
var statearr_53299_54725 = state_53286__$1;
(statearr_53299_54725[(2)] = inst_53280);

(statearr_53299_54725[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53287 === (10))){
var inst_53278 = (state_53286[(2)]);
var state_53286__$1 = state_53286;
var statearr_53300_54726 = state_53286__$1;
(statearr_53300_54726[(2)] = inst_53278);

(statearr_53300_54726[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53287 === (8))){
var inst_53256 = (state_53286[(10)]);
var inst_53267 = (state_53286[(9)]);
var inst_53265 = (state_53286[(7)]);
var inst_53266 = (state_53286[(8)]);
var inst_53270 = (function (){var cs = inst_53256;
var vec__53261 = inst_53265;
var v = inst_53266;
var c = inst_53267;
return ((function (cs,vec__53261,v,c,inst_53256,inst_53267,inst_53265,inst_53266,state_val_53287,c__51860__auto___54702,out){
return (function (p1__53252_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__53252_SHARP_);
});
;})(cs,vec__53261,v,c,inst_53256,inst_53267,inst_53265,inst_53266,state_val_53287,c__51860__auto___54702,out))
})();
var inst_53271 = cljs.core.filterv(inst_53270,inst_53256);
var inst_53256__$1 = inst_53271;
var state_53286__$1 = (function (){var statearr_53301 = state_53286;
(statearr_53301[(10)] = inst_53256__$1);

return statearr_53301;
})();
var statearr_53302_54739 = state_53286__$1;
(statearr_53302_54739[(2)] = null);

(statearr_53302_54739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__51860__auto___54702,out))
;
return ((function (switch__51724__auto__,c__51860__auto___54702,out){
return (function() {
var cljs$core$async$state_machine__51725__auto__ = null;
var cljs$core$async$state_machine__51725__auto____0 = (function (){
var statearr_53303 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53303[(0)] = cljs$core$async$state_machine__51725__auto__);

(statearr_53303[(1)] = (1));

return statearr_53303;
});
var cljs$core$async$state_machine__51725__auto____1 = (function (state_53286){
while(true){
var ret_value__51726__auto__ = (function (){try{while(true){
var result__51727__auto__ = switch__51724__auto__(state_53286);
if(cljs.core.keyword_identical_QMARK_(result__51727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51727__auto__;
}
break;
}
}catch (e53304){if((e53304 instanceof Object)){
var ex__51728__auto__ = e53304;
var statearr_53305_54742 = state_53286;
(statearr_53305_54742[(5)] = ex__51728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53304;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54743 = state_53286;
state_53286 = G__54743;
continue;
} else {
return ret_value__51726__auto__;
}
break;
}
});
cljs$core$async$state_machine__51725__auto__ = function(state_53286){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51725__auto____1.call(this,state_53286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51725__auto____0;
cljs$core$async$state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51725__auto____1;
return cljs$core$async$state_machine__51725__auto__;
})()
;})(switch__51724__auto__,c__51860__auto___54702,out))
})();
var state__51862__auto__ = (function (){var statearr_53306 = (f__51861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51861__auto__.cljs$core$IFn$_invoke$arity$0() : f__51861__auto__.call(null));
(statearr_53306[(6)] = c__51860__auto___54702);

return statearr_53306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51862__auto__);
});})(c__51860__auto___54702,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__53308 = arguments.length;
switch (G__53308) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51860__auto___54748 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51860__auto___54748,out){
return (function (){
var f__51861__auto__ = (function (){var switch__51724__auto__ = ((function (c__51860__auto___54748,out){
return (function (state_53332){
var state_val_53333 = (state_53332[(1)]);
if((state_val_53333 === (7))){
var inst_53314 = (state_53332[(7)]);
var inst_53314__$1 = (state_53332[(2)]);
var inst_53315 = (inst_53314__$1 == null);
var inst_53316 = cljs.core.not(inst_53315);
var state_53332__$1 = (function (){var statearr_53334 = state_53332;
(statearr_53334[(7)] = inst_53314__$1);

return statearr_53334;
})();
if(inst_53316){
var statearr_53335_54749 = state_53332__$1;
(statearr_53335_54749[(1)] = (8));

} else {
var statearr_53336_54750 = state_53332__$1;
(statearr_53336_54750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53333 === (1))){
var inst_53309 = (0);
var state_53332__$1 = (function (){var statearr_53337 = state_53332;
(statearr_53337[(8)] = inst_53309);

return statearr_53337;
})();
var statearr_53338_54751 = state_53332__$1;
(statearr_53338_54751[(2)] = null);

(statearr_53338_54751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53333 === (4))){
var state_53332__$1 = state_53332;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53332__$1,(7),ch);
} else {
if((state_val_53333 === (6))){
var inst_53327 = (state_53332[(2)]);
var state_53332__$1 = state_53332;
var statearr_53339_54754 = state_53332__$1;
(statearr_53339_54754[(2)] = inst_53327);

(statearr_53339_54754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53333 === (3))){
var inst_53329 = (state_53332[(2)]);
var inst_53330 = cljs.core.async.close_BANG_(out);
var state_53332__$1 = (function (){var statearr_53340 = state_53332;
(statearr_53340[(9)] = inst_53329);

return statearr_53340;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53332__$1,inst_53330);
} else {
if((state_val_53333 === (2))){
var inst_53309 = (state_53332[(8)]);
var inst_53311 = (inst_53309 < n);
var state_53332__$1 = state_53332;
if(cljs.core.truth_(inst_53311)){
var statearr_53341_54756 = state_53332__$1;
(statearr_53341_54756[(1)] = (4));

} else {
var statearr_53342_54757 = state_53332__$1;
(statearr_53342_54757[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53333 === (11))){
var inst_53309 = (state_53332[(8)]);
var inst_53319 = (state_53332[(2)]);
var inst_53320 = (inst_53309 + (1));
var inst_53309__$1 = inst_53320;
var state_53332__$1 = (function (){var statearr_53343 = state_53332;
(statearr_53343[(8)] = inst_53309__$1);

(statearr_53343[(10)] = inst_53319);

return statearr_53343;
})();
var statearr_53344_54761 = state_53332__$1;
(statearr_53344_54761[(2)] = null);

(statearr_53344_54761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53333 === (9))){
var state_53332__$1 = state_53332;
var statearr_53345_54762 = state_53332__$1;
(statearr_53345_54762[(2)] = null);

(statearr_53345_54762[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53333 === (5))){
var state_53332__$1 = state_53332;
var statearr_53346_54763 = state_53332__$1;
(statearr_53346_54763[(2)] = null);

(statearr_53346_54763[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53333 === (10))){
var inst_53324 = (state_53332[(2)]);
var state_53332__$1 = state_53332;
var statearr_53347_54768 = state_53332__$1;
(statearr_53347_54768[(2)] = inst_53324);

(statearr_53347_54768[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53333 === (8))){
var inst_53314 = (state_53332[(7)]);
var state_53332__$1 = state_53332;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53332__$1,(11),out,inst_53314);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__51860__auto___54748,out))
;
return ((function (switch__51724__auto__,c__51860__auto___54748,out){
return (function() {
var cljs$core$async$state_machine__51725__auto__ = null;
var cljs$core$async$state_machine__51725__auto____0 = (function (){
var statearr_53348 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53348[(0)] = cljs$core$async$state_machine__51725__auto__);

(statearr_53348[(1)] = (1));

return statearr_53348;
});
var cljs$core$async$state_machine__51725__auto____1 = (function (state_53332){
while(true){
var ret_value__51726__auto__ = (function (){try{while(true){
var result__51727__auto__ = switch__51724__auto__(state_53332);
if(cljs.core.keyword_identical_QMARK_(result__51727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51727__auto__;
}
break;
}
}catch (e53349){if((e53349 instanceof Object)){
var ex__51728__auto__ = e53349;
var statearr_53350_54780 = state_53332;
(statearr_53350_54780[(5)] = ex__51728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53349;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54781 = state_53332;
state_53332 = G__54781;
continue;
} else {
return ret_value__51726__auto__;
}
break;
}
});
cljs$core$async$state_machine__51725__auto__ = function(state_53332){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51725__auto____1.call(this,state_53332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51725__auto____0;
cljs$core$async$state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51725__auto____1;
return cljs$core$async$state_machine__51725__auto__;
})()
;})(switch__51724__auto__,c__51860__auto___54748,out))
})();
var state__51862__auto__ = (function (){var statearr_53351 = (f__51861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51861__auto__.cljs$core$IFn$_invoke$arity$0() : f__51861__auto__.call(null));
(statearr_53351[(6)] = c__51860__auto___54748);

return statearr_53351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51862__auto__);
});})(c__51860__auto___54748,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53353 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53353 = (function (f,ch,meta53354){
this.f = f;
this.ch = ch;
this.meta53354 = meta53354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53355,meta53354__$1){
var self__ = this;
var _53355__$1 = this;
return (new cljs.core.async.t_cljs$core$async53353(self__.f,self__.ch,meta53354__$1));
});

cljs.core.async.t_cljs$core$async53353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53355){
var self__ = this;
var _53355__$1 = this;
return self__.meta53354;
});

cljs.core.async.t_cljs$core$async53353.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53353.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async53353.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async53353.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53353.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53356 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53356 = (function (f,ch,meta53354,_,fn1,meta53357){
this.f = f;
this.ch = ch;
this.meta53354 = meta53354;
this._ = _;
this.fn1 = fn1;
this.meta53357 = meta53357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_53358,meta53357__$1){
var self__ = this;
var _53358__$1 = this;
return (new cljs.core.async.t_cljs$core$async53356(self__.f,self__.ch,self__.meta53354,self__._,self__.fn1,meta53357__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async53356.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_53358){
var self__ = this;
var _53358__$1 = this;
return self__.meta53357;
});})(___$1))
;

cljs.core.async.t_cljs$core$async53356.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53356.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async53356.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async53356.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__53352_SHARP_){
var G__53359 = (((p1__53352_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__53352_SHARP_) : self__.f.call(null,p1__53352_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__53359) : f1.call(null,G__53359));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async53356.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53354","meta53354",-2054660490,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async53353","cljs.core.async/t_cljs$core$async53353",307695643,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta53357","meta53357",56163554,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async53356.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53356.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53356";

cljs.core.async.t_cljs$core$async53356.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async53356");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53356.
 */
cljs.core.async.__GT_t_cljs$core$async53356 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async53356(f__$1,ch__$1,meta53354__$1,___$2,fn1__$1,meta53357){
return (new cljs.core.async.t_cljs$core$async53356(f__$1,ch__$1,meta53354__$1,___$2,fn1__$1,meta53357));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async53356(self__.f,self__.ch,self__.meta53354,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__53360 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__53360) : self__.f.call(null,G__53360));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async53353.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53353.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async53353.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53354","meta53354",-2054660490,null)], null);
});

cljs.core.async.t_cljs$core$async53353.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53353.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53353";

cljs.core.async.t_cljs$core$async53353.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async53353");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53353.
 */
cljs.core.async.__GT_t_cljs$core$async53353 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async53353(f__$1,ch__$1,meta53354){
return (new cljs.core.async.t_cljs$core$async53353(f__$1,ch__$1,meta53354));
});

}

return (new cljs.core.async.t_cljs$core$async53353(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53361 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53361 = (function (f,ch,meta53362){
this.f = f;
this.ch = ch;
this.meta53362 = meta53362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53363,meta53362__$1){
var self__ = this;
var _53363__$1 = this;
return (new cljs.core.async.t_cljs$core$async53361(self__.f,self__.ch,meta53362__$1));
});

cljs.core.async.t_cljs$core$async53361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53363){
var self__ = this;
var _53363__$1 = this;
return self__.meta53362;
});

cljs.core.async.t_cljs$core$async53361.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53361.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async53361.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53361.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async53361.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53361.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async53361.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53362","meta53362",1483310691,null)], null);
});

cljs.core.async.t_cljs$core$async53361.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53361.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53361";

cljs.core.async.t_cljs$core$async53361.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async53361");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53361.
 */
cljs.core.async.__GT_t_cljs$core$async53361 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async53361(f__$1,ch__$1,meta53362){
return (new cljs.core.async.t_cljs$core$async53361(f__$1,ch__$1,meta53362));
});

}

return (new cljs.core.async.t_cljs$core$async53361(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53364 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53364 = (function (p,ch,meta53365){
this.p = p;
this.ch = ch;
this.meta53365 = meta53365;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53366,meta53365__$1){
var self__ = this;
var _53366__$1 = this;
return (new cljs.core.async.t_cljs$core$async53364(self__.p,self__.ch,meta53365__$1));
});

cljs.core.async.t_cljs$core$async53364.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53366){
var self__ = this;
var _53366__$1 = this;
return self__.meta53365;
});

cljs.core.async.t_cljs$core$async53364.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53364.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async53364.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async53364.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53364.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async53364.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53364.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async53364.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53365","meta53365",-1259948826,null)], null);
});

cljs.core.async.t_cljs$core$async53364.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53364.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53364";

cljs.core.async.t_cljs$core$async53364.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async53364");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53364.
 */
cljs.core.async.__GT_t_cljs$core$async53364 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async53364(p__$1,ch__$1,meta53365){
return (new cljs.core.async.t_cljs$core$async53364(p__$1,ch__$1,meta53365));
});

}

return (new cljs.core.async.t_cljs$core$async53364(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__53368 = arguments.length;
switch (G__53368) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51860__auto___54823 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51860__auto___54823,out){
return (function (){
var f__51861__auto__ = (function (){var switch__51724__auto__ = ((function (c__51860__auto___54823,out){
return (function (state_53389){
var state_val_53390 = (state_53389[(1)]);
if((state_val_53390 === (7))){
var inst_53385 = (state_53389[(2)]);
var state_53389__$1 = state_53389;
var statearr_53391_54828 = state_53389__$1;
(statearr_53391_54828[(2)] = inst_53385);

(statearr_53391_54828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53390 === (1))){
var state_53389__$1 = state_53389;
var statearr_53392_54831 = state_53389__$1;
(statearr_53392_54831[(2)] = null);

(statearr_53392_54831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53390 === (4))){
var inst_53371 = (state_53389[(7)]);
var inst_53371__$1 = (state_53389[(2)]);
var inst_53372 = (inst_53371__$1 == null);
var state_53389__$1 = (function (){var statearr_53393 = state_53389;
(statearr_53393[(7)] = inst_53371__$1);

return statearr_53393;
})();
if(cljs.core.truth_(inst_53372)){
var statearr_53394_54845 = state_53389__$1;
(statearr_53394_54845[(1)] = (5));

} else {
var statearr_53395_54846 = state_53389__$1;
(statearr_53395_54846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53390 === (6))){
var inst_53371 = (state_53389[(7)]);
var inst_53376 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_53371) : p.call(null,inst_53371));
var state_53389__$1 = state_53389;
if(cljs.core.truth_(inst_53376)){
var statearr_53396_54854 = state_53389__$1;
(statearr_53396_54854[(1)] = (8));

} else {
var statearr_53397_54859 = state_53389__$1;
(statearr_53397_54859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53390 === (3))){
var inst_53387 = (state_53389[(2)]);
var state_53389__$1 = state_53389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53389__$1,inst_53387);
} else {
if((state_val_53390 === (2))){
var state_53389__$1 = state_53389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53389__$1,(4),ch);
} else {
if((state_val_53390 === (11))){
var inst_53379 = (state_53389[(2)]);
var state_53389__$1 = state_53389;
var statearr_53398_54877 = state_53389__$1;
(statearr_53398_54877[(2)] = inst_53379);

(statearr_53398_54877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53390 === (9))){
var state_53389__$1 = state_53389;
var statearr_53399_54883 = state_53389__$1;
(statearr_53399_54883[(2)] = null);

(statearr_53399_54883[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53390 === (5))){
var inst_53374 = cljs.core.async.close_BANG_(out);
var state_53389__$1 = state_53389;
var statearr_53400_54891 = state_53389__$1;
(statearr_53400_54891[(2)] = inst_53374);

(statearr_53400_54891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53390 === (10))){
var inst_53382 = (state_53389[(2)]);
var state_53389__$1 = (function (){var statearr_53401 = state_53389;
(statearr_53401[(8)] = inst_53382);

return statearr_53401;
})();
var statearr_53402_54897 = state_53389__$1;
(statearr_53402_54897[(2)] = null);

(statearr_53402_54897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53390 === (8))){
var inst_53371 = (state_53389[(7)]);
var state_53389__$1 = state_53389;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53389__$1,(11),out,inst_53371);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__51860__auto___54823,out))
;
return ((function (switch__51724__auto__,c__51860__auto___54823,out){
return (function() {
var cljs$core$async$state_machine__51725__auto__ = null;
var cljs$core$async$state_machine__51725__auto____0 = (function (){
var statearr_53403 = [null,null,null,null,null,null,null,null,null];
(statearr_53403[(0)] = cljs$core$async$state_machine__51725__auto__);

(statearr_53403[(1)] = (1));

return statearr_53403;
});
var cljs$core$async$state_machine__51725__auto____1 = (function (state_53389){
while(true){
var ret_value__51726__auto__ = (function (){try{while(true){
var result__51727__auto__ = switch__51724__auto__(state_53389);
if(cljs.core.keyword_identical_QMARK_(result__51727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51727__auto__;
}
break;
}
}catch (e53404){if((e53404 instanceof Object)){
var ex__51728__auto__ = e53404;
var statearr_53405_54928 = state_53389;
(statearr_53405_54928[(5)] = ex__51728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53404;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54933 = state_53389;
state_53389 = G__54933;
continue;
} else {
return ret_value__51726__auto__;
}
break;
}
});
cljs$core$async$state_machine__51725__auto__ = function(state_53389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51725__auto____1.call(this,state_53389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51725__auto____0;
cljs$core$async$state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51725__auto____1;
return cljs$core$async$state_machine__51725__auto__;
})()
;})(switch__51724__auto__,c__51860__auto___54823,out))
})();
var state__51862__auto__ = (function (){var statearr_53406 = (f__51861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51861__auto__.cljs$core$IFn$_invoke$arity$0() : f__51861__auto__.call(null));
(statearr_53406[(6)] = c__51860__auto___54823);

return statearr_53406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51862__auto__);
});})(c__51860__auto___54823,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__53408 = arguments.length;
switch (G__53408) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__51860__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51860__auto__){
return (function (){
var f__51861__auto__ = (function (){var switch__51724__auto__ = ((function (c__51860__auto__){
return (function (state_53470){
var state_val_53471 = (state_53470[(1)]);
if((state_val_53471 === (7))){
var inst_53466 = (state_53470[(2)]);
var state_53470__$1 = state_53470;
var statearr_53472_54946 = state_53470__$1;
(statearr_53472_54946[(2)] = inst_53466);

(statearr_53472_54946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53471 === (20))){
var inst_53436 = (state_53470[(7)]);
var inst_53447 = (state_53470[(2)]);
var inst_53448 = cljs.core.next(inst_53436);
var inst_53422 = inst_53448;
var inst_53423 = null;
var inst_53424 = (0);
var inst_53425 = (0);
var state_53470__$1 = (function (){var statearr_53473 = state_53470;
(statearr_53473[(8)] = inst_53423);

(statearr_53473[(9)] = inst_53447);

(statearr_53473[(10)] = inst_53424);

(statearr_53473[(11)] = inst_53422);

(statearr_53473[(12)] = inst_53425);

return statearr_53473;
})();
var statearr_53474_54955 = state_53470__$1;
(statearr_53474_54955[(2)] = null);

(statearr_53474_54955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53471 === (1))){
var state_53470__$1 = state_53470;
var statearr_53475_54957 = state_53470__$1;
(statearr_53475_54957[(2)] = null);

(statearr_53475_54957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53471 === (4))){
var inst_53411 = (state_53470[(13)]);
var inst_53411__$1 = (state_53470[(2)]);
var inst_53412 = (inst_53411__$1 == null);
var state_53470__$1 = (function (){var statearr_53476 = state_53470;
(statearr_53476[(13)] = inst_53411__$1);

return statearr_53476;
})();
if(cljs.core.truth_(inst_53412)){
var statearr_53477_54960 = state_53470__$1;
(statearr_53477_54960[(1)] = (5));

} else {
var statearr_53478_54962 = state_53470__$1;
(statearr_53478_54962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53471 === (15))){
var state_53470__$1 = state_53470;
var statearr_53482_54963 = state_53470__$1;
(statearr_53482_54963[(2)] = null);

(statearr_53482_54963[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53471 === (21))){
var state_53470__$1 = state_53470;
var statearr_53483_54964 = state_53470__$1;
(statearr_53483_54964[(2)] = null);

(statearr_53483_54964[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53471 === (13))){
var inst_53423 = (state_53470[(8)]);
var inst_53424 = (state_53470[(10)]);
var inst_53422 = (state_53470[(11)]);
var inst_53425 = (state_53470[(12)]);
var inst_53432 = (state_53470[(2)]);
var inst_53433 = (inst_53425 + (1));
var tmp53479 = inst_53423;
var tmp53480 = inst_53424;
var tmp53481 = inst_53422;
var inst_53422__$1 = tmp53481;
var inst_53423__$1 = tmp53479;
var inst_53424__$1 = tmp53480;
var inst_53425__$1 = inst_53433;
var state_53470__$1 = (function (){var statearr_53484 = state_53470;
(statearr_53484[(8)] = inst_53423__$1);

(statearr_53484[(14)] = inst_53432);

(statearr_53484[(10)] = inst_53424__$1);

(statearr_53484[(11)] = inst_53422__$1);

(statearr_53484[(12)] = inst_53425__$1);

return statearr_53484;
})();
var statearr_53485_54967 = state_53470__$1;
(statearr_53485_54967[(2)] = null);

(statearr_53485_54967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53471 === (22))){
var state_53470__$1 = state_53470;
var statearr_53486_54968 = state_53470__$1;
(statearr_53486_54968[(2)] = null);

(statearr_53486_54968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53471 === (6))){
var inst_53411 = (state_53470[(13)]);
var inst_53420 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_53411) : f.call(null,inst_53411));
var inst_53421 = cljs.core.seq(inst_53420);
var inst_53422 = inst_53421;
var inst_53423 = null;
var inst_53424 = (0);
var inst_53425 = (0);
var state_53470__$1 = (function (){var statearr_53487 = state_53470;
(statearr_53487[(8)] = inst_53423);

(statearr_53487[(10)] = inst_53424);

(statearr_53487[(11)] = inst_53422);

(statearr_53487[(12)] = inst_53425);

return statearr_53487;
})();
var statearr_53488_54969 = state_53470__$1;
(statearr_53488_54969[(2)] = null);

(statearr_53488_54969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53471 === (17))){
var inst_53436 = (state_53470[(7)]);
var inst_53440 = cljs.core.chunk_first(inst_53436);
var inst_53441 = cljs.core.chunk_rest(inst_53436);
var inst_53442 = cljs.core.count(inst_53440);
var inst_53422 = inst_53441;
var inst_53423 = inst_53440;
var inst_53424 = inst_53442;
var inst_53425 = (0);
var state_53470__$1 = (function (){var statearr_53489 = state_53470;
(statearr_53489[(8)] = inst_53423);

(statearr_53489[(10)] = inst_53424);

(statearr_53489[(11)] = inst_53422);

(statearr_53489[(12)] = inst_53425);

return statearr_53489;
})();
var statearr_53490_54975 = state_53470__$1;
(statearr_53490_54975[(2)] = null);

(statearr_53490_54975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53471 === (3))){
var inst_53468 = (state_53470[(2)]);
var state_53470__$1 = state_53470;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53470__$1,inst_53468);
} else {
if((state_val_53471 === (12))){
var inst_53456 = (state_53470[(2)]);
var state_53470__$1 = state_53470;
var statearr_53491_54981 = state_53470__$1;
(statearr_53491_54981[(2)] = inst_53456);

(statearr_53491_54981[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53471 === (2))){
var state_53470__$1 = state_53470;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53470__$1,(4),in$);
} else {
if((state_val_53471 === (23))){
var inst_53464 = (state_53470[(2)]);
var state_53470__$1 = state_53470;
var statearr_53492_54989 = state_53470__$1;
(statearr_53492_54989[(2)] = inst_53464);

(statearr_53492_54989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53471 === (19))){
var inst_53451 = (state_53470[(2)]);
var state_53470__$1 = state_53470;
var statearr_53493_54996 = state_53470__$1;
(statearr_53493_54996[(2)] = inst_53451);

(statearr_53493_54996[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53471 === (11))){
var inst_53436 = (state_53470[(7)]);
var inst_53422 = (state_53470[(11)]);
var inst_53436__$1 = cljs.core.seq(inst_53422);
var state_53470__$1 = (function (){var statearr_53494 = state_53470;
(statearr_53494[(7)] = inst_53436__$1);

return statearr_53494;
})();
if(inst_53436__$1){
var statearr_53495_55005 = state_53470__$1;
(statearr_53495_55005[(1)] = (14));

} else {
var statearr_53496_55006 = state_53470__$1;
(statearr_53496_55006[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53471 === (9))){
var inst_53458 = (state_53470[(2)]);
var inst_53459 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_53470__$1 = (function (){var statearr_53497 = state_53470;
(statearr_53497[(15)] = inst_53458);

return statearr_53497;
})();
if(cljs.core.truth_(inst_53459)){
var statearr_53498_55015 = state_53470__$1;
(statearr_53498_55015[(1)] = (21));

} else {
var statearr_53499_55016 = state_53470__$1;
(statearr_53499_55016[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53471 === (5))){
var inst_53414 = cljs.core.async.close_BANG_(out);
var state_53470__$1 = state_53470;
var statearr_53500_55021 = state_53470__$1;
(statearr_53500_55021[(2)] = inst_53414);

(statearr_53500_55021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53471 === (14))){
var inst_53436 = (state_53470[(7)]);
var inst_53438 = cljs.core.chunked_seq_QMARK_(inst_53436);
var state_53470__$1 = state_53470;
if(inst_53438){
var statearr_53501_55029 = state_53470__$1;
(statearr_53501_55029[(1)] = (17));

} else {
var statearr_53502_55033 = state_53470__$1;
(statearr_53502_55033[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53471 === (16))){
var inst_53454 = (state_53470[(2)]);
var state_53470__$1 = state_53470;
var statearr_53503_55038 = state_53470__$1;
(statearr_53503_55038[(2)] = inst_53454);

(statearr_53503_55038[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53471 === (10))){
var inst_53423 = (state_53470[(8)]);
var inst_53425 = (state_53470[(12)]);
var inst_53430 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_53423,inst_53425);
var state_53470__$1 = state_53470;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53470__$1,(13),out,inst_53430);
} else {
if((state_val_53471 === (18))){
var inst_53436 = (state_53470[(7)]);
var inst_53445 = cljs.core.first(inst_53436);
var state_53470__$1 = state_53470;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53470__$1,(20),out,inst_53445);
} else {
if((state_val_53471 === (8))){
var inst_53424 = (state_53470[(10)]);
var inst_53425 = (state_53470[(12)]);
var inst_53427 = (inst_53425 < inst_53424);
var inst_53428 = inst_53427;
var state_53470__$1 = state_53470;
if(cljs.core.truth_(inst_53428)){
var statearr_53504_55044 = state_53470__$1;
(statearr_53504_55044[(1)] = (10));

} else {
var statearr_53505_55045 = state_53470__$1;
(statearr_53505_55045[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__51860__auto__))
;
return ((function (switch__51724__auto__,c__51860__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__51725__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__51725__auto____0 = (function (){
var statearr_53506 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53506[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__51725__auto__);

(statearr_53506[(1)] = (1));

return statearr_53506;
});
var cljs$core$async$mapcat_STAR__$_state_machine__51725__auto____1 = (function (state_53470){
while(true){
var ret_value__51726__auto__ = (function (){try{while(true){
var result__51727__auto__ = switch__51724__auto__(state_53470);
if(cljs.core.keyword_identical_QMARK_(result__51727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51727__auto__;
}
break;
}
}catch (e53507){if((e53507 instanceof Object)){
var ex__51728__auto__ = e53507;
var statearr_53508_55047 = state_53470;
(statearr_53508_55047[(5)] = ex__51728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53507;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55048 = state_53470;
state_53470 = G__55048;
continue;
} else {
return ret_value__51726__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__51725__auto__ = function(state_53470){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__51725__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__51725__auto____1.call(this,state_53470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__51725__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__51725__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__51725__auto__;
})()
;})(switch__51724__auto__,c__51860__auto__))
})();
var state__51862__auto__ = (function (){var statearr_53509 = (f__51861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51861__auto__.cljs$core$IFn$_invoke$arity$0() : f__51861__auto__.call(null));
(statearr_53509[(6)] = c__51860__auto__);

return statearr_53509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51862__auto__);
});})(c__51860__auto__))
);

return c__51860__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__53511 = arguments.length;
switch (G__53511) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__53513 = arguments.length;
switch (G__53513) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__53515 = arguments.length;
switch (G__53515) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51860__auto___55065 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51860__auto___55065,out){
return (function (){
var f__51861__auto__ = (function (){var switch__51724__auto__ = ((function (c__51860__auto___55065,out){
return (function (state_53539){
var state_val_53540 = (state_53539[(1)]);
if((state_val_53540 === (7))){
var inst_53534 = (state_53539[(2)]);
var state_53539__$1 = state_53539;
var statearr_53541_55072 = state_53539__$1;
(statearr_53541_55072[(2)] = inst_53534);

(statearr_53541_55072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53540 === (1))){
var inst_53516 = null;
var state_53539__$1 = (function (){var statearr_53542 = state_53539;
(statearr_53542[(7)] = inst_53516);

return statearr_53542;
})();
var statearr_53543_55075 = state_53539__$1;
(statearr_53543_55075[(2)] = null);

(statearr_53543_55075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53540 === (4))){
var inst_53519 = (state_53539[(8)]);
var inst_53519__$1 = (state_53539[(2)]);
var inst_53520 = (inst_53519__$1 == null);
var inst_53521 = cljs.core.not(inst_53520);
var state_53539__$1 = (function (){var statearr_53544 = state_53539;
(statearr_53544[(8)] = inst_53519__$1);

return statearr_53544;
})();
if(inst_53521){
var statearr_53545_55076 = state_53539__$1;
(statearr_53545_55076[(1)] = (5));

} else {
var statearr_53546_55077 = state_53539__$1;
(statearr_53546_55077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53540 === (6))){
var state_53539__$1 = state_53539;
var statearr_53547_55078 = state_53539__$1;
(statearr_53547_55078[(2)] = null);

(statearr_53547_55078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53540 === (3))){
var inst_53536 = (state_53539[(2)]);
var inst_53537 = cljs.core.async.close_BANG_(out);
var state_53539__$1 = (function (){var statearr_53548 = state_53539;
(statearr_53548[(9)] = inst_53536);

return statearr_53548;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53539__$1,inst_53537);
} else {
if((state_val_53540 === (2))){
var state_53539__$1 = state_53539;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53539__$1,(4),ch);
} else {
if((state_val_53540 === (11))){
var inst_53519 = (state_53539[(8)]);
var inst_53528 = (state_53539[(2)]);
var inst_53516 = inst_53519;
var state_53539__$1 = (function (){var statearr_53549 = state_53539;
(statearr_53549[(10)] = inst_53528);

(statearr_53549[(7)] = inst_53516);

return statearr_53549;
})();
var statearr_53550_55080 = state_53539__$1;
(statearr_53550_55080[(2)] = null);

(statearr_53550_55080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53540 === (9))){
var inst_53519 = (state_53539[(8)]);
var state_53539__$1 = state_53539;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53539__$1,(11),out,inst_53519);
} else {
if((state_val_53540 === (5))){
var inst_53519 = (state_53539[(8)]);
var inst_53516 = (state_53539[(7)]);
var inst_53523 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53519,inst_53516);
var state_53539__$1 = state_53539;
if(inst_53523){
var statearr_53552_55082 = state_53539__$1;
(statearr_53552_55082[(1)] = (8));

} else {
var statearr_53553_55083 = state_53539__$1;
(statearr_53553_55083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53540 === (10))){
var inst_53531 = (state_53539[(2)]);
var state_53539__$1 = state_53539;
var statearr_53554_55084 = state_53539__$1;
(statearr_53554_55084[(2)] = inst_53531);

(statearr_53554_55084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53540 === (8))){
var inst_53516 = (state_53539[(7)]);
var tmp53551 = inst_53516;
var inst_53516__$1 = tmp53551;
var state_53539__$1 = (function (){var statearr_53555 = state_53539;
(statearr_53555[(7)] = inst_53516__$1);

return statearr_53555;
})();
var statearr_53556_55085 = state_53539__$1;
(statearr_53556_55085[(2)] = null);

(statearr_53556_55085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__51860__auto___55065,out))
;
return ((function (switch__51724__auto__,c__51860__auto___55065,out){
return (function() {
var cljs$core$async$state_machine__51725__auto__ = null;
var cljs$core$async$state_machine__51725__auto____0 = (function (){
var statearr_53557 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53557[(0)] = cljs$core$async$state_machine__51725__auto__);

(statearr_53557[(1)] = (1));

return statearr_53557;
});
var cljs$core$async$state_machine__51725__auto____1 = (function (state_53539){
while(true){
var ret_value__51726__auto__ = (function (){try{while(true){
var result__51727__auto__ = switch__51724__auto__(state_53539);
if(cljs.core.keyword_identical_QMARK_(result__51727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51727__auto__;
}
break;
}
}catch (e53558){if((e53558 instanceof Object)){
var ex__51728__auto__ = e53558;
var statearr_53559_55086 = state_53539;
(statearr_53559_55086[(5)] = ex__51728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53558;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55087 = state_53539;
state_53539 = G__55087;
continue;
} else {
return ret_value__51726__auto__;
}
break;
}
});
cljs$core$async$state_machine__51725__auto__ = function(state_53539){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51725__auto____1.call(this,state_53539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51725__auto____0;
cljs$core$async$state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51725__auto____1;
return cljs$core$async$state_machine__51725__auto__;
})()
;})(switch__51724__auto__,c__51860__auto___55065,out))
})();
var state__51862__auto__ = (function (){var statearr_53560 = (f__51861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51861__auto__.cljs$core$IFn$_invoke$arity$0() : f__51861__auto__.call(null));
(statearr_53560[(6)] = c__51860__auto___55065);

return statearr_53560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51862__auto__);
});})(c__51860__auto___55065,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__53562 = arguments.length;
switch (G__53562) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51860__auto___55093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51860__auto___55093,out){
return (function (){
var f__51861__auto__ = (function (){var switch__51724__auto__ = ((function (c__51860__auto___55093,out){
return (function (state_53600){
var state_val_53601 = (state_53600[(1)]);
if((state_val_53601 === (7))){
var inst_53596 = (state_53600[(2)]);
var state_53600__$1 = state_53600;
var statearr_53602_55096 = state_53600__$1;
(statearr_53602_55096[(2)] = inst_53596);

(statearr_53602_55096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53601 === (1))){
var inst_53563 = (new Array(n));
var inst_53564 = inst_53563;
var inst_53565 = (0);
var state_53600__$1 = (function (){var statearr_53603 = state_53600;
(statearr_53603[(7)] = inst_53565);

(statearr_53603[(8)] = inst_53564);

return statearr_53603;
})();
var statearr_53604_55100 = state_53600__$1;
(statearr_53604_55100[(2)] = null);

(statearr_53604_55100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53601 === (4))){
var inst_53568 = (state_53600[(9)]);
var inst_53568__$1 = (state_53600[(2)]);
var inst_53569 = (inst_53568__$1 == null);
var inst_53570 = cljs.core.not(inst_53569);
var state_53600__$1 = (function (){var statearr_53605 = state_53600;
(statearr_53605[(9)] = inst_53568__$1);

return statearr_53605;
})();
if(inst_53570){
var statearr_53606_55103 = state_53600__$1;
(statearr_53606_55103[(1)] = (5));

} else {
var statearr_53607_55104 = state_53600__$1;
(statearr_53607_55104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53601 === (15))){
var inst_53590 = (state_53600[(2)]);
var state_53600__$1 = state_53600;
var statearr_53608_55106 = state_53600__$1;
(statearr_53608_55106[(2)] = inst_53590);

(statearr_53608_55106[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53601 === (13))){
var state_53600__$1 = state_53600;
var statearr_53609_55108 = state_53600__$1;
(statearr_53609_55108[(2)] = null);

(statearr_53609_55108[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53601 === (6))){
var inst_53565 = (state_53600[(7)]);
var inst_53586 = (inst_53565 > (0));
var state_53600__$1 = state_53600;
if(cljs.core.truth_(inst_53586)){
var statearr_53610_55113 = state_53600__$1;
(statearr_53610_55113[(1)] = (12));

} else {
var statearr_53611_55114 = state_53600__$1;
(statearr_53611_55114[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53601 === (3))){
var inst_53598 = (state_53600[(2)]);
var state_53600__$1 = state_53600;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53600__$1,inst_53598);
} else {
if((state_val_53601 === (12))){
var inst_53564 = (state_53600[(8)]);
var inst_53588 = cljs.core.vec(inst_53564);
var state_53600__$1 = state_53600;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53600__$1,(15),out,inst_53588);
} else {
if((state_val_53601 === (2))){
var state_53600__$1 = state_53600;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53600__$1,(4),ch);
} else {
if((state_val_53601 === (11))){
var inst_53580 = (state_53600[(2)]);
var inst_53581 = (new Array(n));
var inst_53564 = inst_53581;
var inst_53565 = (0);
var state_53600__$1 = (function (){var statearr_53612 = state_53600;
(statearr_53612[(7)] = inst_53565);

(statearr_53612[(10)] = inst_53580);

(statearr_53612[(8)] = inst_53564);

return statearr_53612;
})();
var statearr_53613_55115 = state_53600__$1;
(statearr_53613_55115[(2)] = null);

(statearr_53613_55115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53601 === (9))){
var inst_53564 = (state_53600[(8)]);
var inst_53578 = cljs.core.vec(inst_53564);
var state_53600__$1 = state_53600;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53600__$1,(11),out,inst_53578);
} else {
if((state_val_53601 === (5))){
var inst_53565 = (state_53600[(7)]);
var inst_53573 = (state_53600[(11)]);
var inst_53568 = (state_53600[(9)]);
var inst_53564 = (state_53600[(8)]);
var inst_53572 = (inst_53564[inst_53565] = inst_53568);
var inst_53573__$1 = (inst_53565 + (1));
var inst_53574 = (inst_53573__$1 < n);
var state_53600__$1 = (function (){var statearr_53614 = state_53600;
(statearr_53614[(11)] = inst_53573__$1);

(statearr_53614[(12)] = inst_53572);

return statearr_53614;
})();
if(cljs.core.truth_(inst_53574)){
var statearr_53615_55117 = state_53600__$1;
(statearr_53615_55117[(1)] = (8));

} else {
var statearr_53616_55119 = state_53600__$1;
(statearr_53616_55119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53601 === (14))){
var inst_53593 = (state_53600[(2)]);
var inst_53594 = cljs.core.async.close_BANG_(out);
var state_53600__$1 = (function (){var statearr_53618 = state_53600;
(statearr_53618[(13)] = inst_53593);

return statearr_53618;
})();
var statearr_53619_55120 = state_53600__$1;
(statearr_53619_55120[(2)] = inst_53594);

(statearr_53619_55120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53601 === (10))){
var inst_53584 = (state_53600[(2)]);
var state_53600__$1 = state_53600;
var statearr_53620_55121 = state_53600__$1;
(statearr_53620_55121[(2)] = inst_53584);

(statearr_53620_55121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53601 === (8))){
var inst_53573 = (state_53600[(11)]);
var inst_53564 = (state_53600[(8)]);
var tmp53617 = inst_53564;
var inst_53564__$1 = tmp53617;
var inst_53565 = inst_53573;
var state_53600__$1 = (function (){var statearr_53621 = state_53600;
(statearr_53621[(7)] = inst_53565);

(statearr_53621[(8)] = inst_53564__$1);

return statearr_53621;
})();
var statearr_53622_55124 = state_53600__$1;
(statearr_53622_55124[(2)] = null);

(statearr_53622_55124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__51860__auto___55093,out))
;
return ((function (switch__51724__auto__,c__51860__auto___55093,out){
return (function() {
var cljs$core$async$state_machine__51725__auto__ = null;
var cljs$core$async$state_machine__51725__auto____0 = (function (){
var statearr_53623 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53623[(0)] = cljs$core$async$state_machine__51725__auto__);

(statearr_53623[(1)] = (1));

return statearr_53623;
});
var cljs$core$async$state_machine__51725__auto____1 = (function (state_53600){
while(true){
var ret_value__51726__auto__ = (function (){try{while(true){
var result__51727__auto__ = switch__51724__auto__(state_53600);
if(cljs.core.keyword_identical_QMARK_(result__51727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51727__auto__;
}
break;
}
}catch (e53624){if((e53624 instanceof Object)){
var ex__51728__auto__ = e53624;
var statearr_53625_55126 = state_53600;
(statearr_53625_55126[(5)] = ex__51728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53624;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55127 = state_53600;
state_53600 = G__55127;
continue;
} else {
return ret_value__51726__auto__;
}
break;
}
});
cljs$core$async$state_machine__51725__auto__ = function(state_53600){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51725__auto____1.call(this,state_53600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51725__auto____0;
cljs$core$async$state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51725__auto____1;
return cljs$core$async$state_machine__51725__auto__;
})()
;})(switch__51724__auto__,c__51860__auto___55093,out))
})();
var state__51862__auto__ = (function (){var statearr_53626 = (f__51861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51861__auto__.cljs$core$IFn$_invoke$arity$0() : f__51861__auto__.call(null));
(statearr_53626[(6)] = c__51860__auto___55093);

return statearr_53626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51862__auto__);
});})(c__51860__auto___55093,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__53628 = arguments.length;
switch (G__53628) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__51860__auto___55134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51860__auto___55134,out){
return (function (){
var f__51861__auto__ = (function (){var switch__51724__auto__ = ((function (c__51860__auto___55134,out){
return (function (state_53670){
var state_val_53671 = (state_53670[(1)]);
if((state_val_53671 === (7))){
var inst_53666 = (state_53670[(2)]);
var state_53670__$1 = state_53670;
var statearr_53672_55136 = state_53670__$1;
(statearr_53672_55136[(2)] = inst_53666);

(statearr_53672_55136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53671 === (1))){
var inst_53629 = [];
var inst_53630 = inst_53629;
var inst_53631 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_53670__$1 = (function (){var statearr_53673 = state_53670;
(statearr_53673[(7)] = inst_53631);

(statearr_53673[(8)] = inst_53630);

return statearr_53673;
})();
var statearr_53674_55137 = state_53670__$1;
(statearr_53674_55137[(2)] = null);

(statearr_53674_55137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53671 === (4))){
var inst_53634 = (state_53670[(9)]);
var inst_53634__$1 = (state_53670[(2)]);
var inst_53635 = (inst_53634__$1 == null);
var inst_53636 = cljs.core.not(inst_53635);
var state_53670__$1 = (function (){var statearr_53675 = state_53670;
(statearr_53675[(9)] = inst_53634__$1);

return statearr_53675;
})();
if(inst_53636){
var statearr_53676_55143 = state_53670__$1;
(statearr_53676_55143[(1)] = (5));

} else {
var statearr_53677_55144 = state_53670__$1;
(statearr_53677_55144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53671 === (15))){
var inst_53660 = (state_53670[(2)]);
var state_53670__$1 = state_53670;
var statearr_53678_55149 = state_53670__$1;
(statearr_53678_55149[(2)] = inst_53660);

(statearr_53678_55149[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53671 === (13))){
var state_53670__$1 = state_53670;
var statearr_53679_55153 = state_53670__$1;
(statearr_53679_55153[(2)] = null);

(statearr_53679_55153[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53671 === (6))){
var inst_53630 = (state_53670[(8)]);
var inst_53655 = inst_53630.length;
var inst_53656 = (inst_53655 > (0));
var state_53670__$1 = state_53670;
if(cljs.core.truth_(inst_53656)){
var statearr_53680_55154 = state_53670__$1;
(statearr_53680_55154[(1)] = (12));

} else {
var statearr_53681_55155 = state_53670__$1;
(statearr_53681_55155[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53671 === (3))){
var inst_53668 = (state_53670[(2)]);
var state_53670__$1 = state_53670;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53670__$1,inst_53668);
} else {
if((state_val_53671 === (12))){
var inst_53630 = (state_53670[(8)]);
var inst_53658 = cljs.core.vec(inst_53630);
var state_53670__$1 = state_53670;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53670__$1,(15),out,inst_53658);
} else {
if((state_val_53671 === (2))){
var state_53670__$1 = state_53670;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53670__$1,(4),ch);
} else {
if((state_val_53671 === (11))){
var inst_53634 = (state_53670[(9)]);
var inst_53638 = (state_53670[(10)]);
var inst_53648 = (state_53670[(2)]);
var inst_53649 = [];
var inst_53650 = inst_53649.push(inst_53634);
var inst_53630 = inst_53649;
var inst_53631 = inst_53638;
var state_53670__$1 = (function (){var statearr_53682 = state_53670;
(statearr_53682[(11)] = inst_53648);

(statearr_53682[(7)] = inst_53631);

(statearr_53682[(8)] = inst_53630);

(statearr_53682[(12)] = inst_53650);

return statearr_53682;
})();
var statearr_53683_55167 = state_53670__$1;
(statearr_53683_55167[(2)] = null);

(statearr_53683_55167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53671 === (9))){
var inst_53630 = (state_53670[(8)]);
var inst_53646 = cljs.core.vec(inst_53630);
var state_53670__$1 = state_53670;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53670__$1,(11),out,inst_53646);
} else {
if((state_val_53671 === (5))){
var inst_53631 = (state_53670[(7)]);
var inst_53634 = (state_53670[(9)]);
var inst_53638 = (state_53670[(10)]);
var inst_53638__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_53634) : f.call(null,inst_53634));
var inst_53639 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53638__$1,inst_53631);
var inst_53640 = cljs.core.keyword_identical_QMARK_(inst_53631,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_53641 = ((inst_53639) || (inst_53640));
var state_53670__$1 = (function (){var statearr_53684 = state_53670;
(statearr_53684[(10)] = inst_53638__$1);

return statearr_53684;
})();
if(cljs.core.truth_(inst_53641)){
var statearr_53685_55178 = state_53670__$1;
(statearr_53685_55178[(1)] = (8));

} else {
var statearr_53686_55179 = state_53670__$1;
(statearr_53686_55179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53671 === (14))){
var inst_53663 = (state_53670[(2)]);
var inst_53664 = cljs.core.async.close_BANG_(out);
var state_53670__$1 = (function (){var statearr_53688 = state_53670;
(statearr_53688[(13)] = inst_53663);

return statearr_53688;
})();
var statearr_53689_55184 = state_53670__$1;
(statearr_53689_55184[(2)] = inst_53664);

(statearr_53689_55184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53671 === (10))){
var inst_53653 = (state_53670[(2)]);
var state_53670__$1 = state_53670;
var statearr_53690_55189 = state_53670__$1;
(statearr_53690_55189[(2)] = inst_53653);

(statearr_53690_55189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53671 === (8))){
var inst_53630 = (state_53670[(8)]);
var inst_53634 = (state_53670[(9)]);
var inst_53638 = (state_53670[(10)]);
var inst_53643 = inst_53630.push(inst_53634);
var tmp53687 = inst_53630;
var inst_53630__$1 = tmp53687;
var inst_53631 = inst_53638;
var state_53670__$1 = (function (){var statearr_53691 = state_53670;
(statearr_53691[(14)] = inst_53643);

(statearr_53691[(7)] = inst_53631);

(statearr_53691[(8)] = inst_53630__$1);

return statearr_53691;
})();
var statearr_53692_55197 = state_53670__$1;
(statearr_53692_55197[(2)] = null);

(statearr_53692_55197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__51860__auto___55134,out))
;
return ((function (switch__51724__auto__,c__51860__auto___55134,out){
return (function() {
var cljs$core$async$state_machine__51725__auto__ = null;
var cljs$core$async$state_machine__51725__auto____0 = (function (){
var statearr_53693 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53693[(0)] = cljs$core$async$state_machine__51725__auto__);

(statearr_53693[(1)] = (1));

return statearr_53693;
});
var cljs$core$async$state_machine__51725__auto____1 = (function (state_53670){
while(true){
var ret_value__51726__auto__ = (function (){try{while(true){
var result__51727__auto__ = switch__51724__auto__(state_53670);
if(cljs.core.keyword_identical_QMARK_(result__51727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51727__auto__;
}
break;
}
}catch (e53694){if((e53694 instanceof Object)){
var ex__51728__auto__ = e53694;
var statearr_53695_55212 = state_53670;
(statearr_53695_55212[(5)] = ex__51728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53694;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55215 = state_53670;
state_53670 = G__55215;
continue;
} else {
return ret_value__51726__auto__;
}
break;
}
});
cljs$core$async$state_machine__51725__auto__ = function(state_53670){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51725__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51725__auto____1.call(this,state_53670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51725__auto____0;
cljs$core$async$state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51725__auto____1;
return cljs$core$async$state_machine__51725__auto__;
})()
;})(switch__51724__auto__,c__51860__auto___55134,out))
})();
var state__51862__auto__ = (function (){var statearr_53696 = (f__51861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51861__auto__.cljs$core$IFn$_invoke$arity$0() : f__51861__auto__.call(null));
(statearr_53696[(6)] = c__51860__auto___55134);

return statearr_53696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51862__auto__);
});})(c__51860__auto___55134,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
