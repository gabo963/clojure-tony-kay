goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__54059 = arguments.length;
switch (G__54059) {
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

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54063 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54063 = (function (f,blockable,meta54064){
this.f = f;
this.blockable = blockable;
this.meta54064 = meta54064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54065,meta54064__$1){
var self__ = this;
var _54065__$1 = this;
return (new cljs.core.async.t_cljs$core$async54063(self__.f,self__.blockable,meta54064__$1));
}));

(cljs.core.async.t_cljs$core$async54063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54065){
var self__ = this;
var _54065__$1 = this;
return self__.meta54064;
}));

(cljs.core.async.t_cljs$core$async54063.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54063.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54063.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async54063.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async54063.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta54064","meta54064",-1053703144,null)], null);
}));

(cljs.core.async.t_cljs$core$async54063.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54063");

(cljs.core.async.t_cljs$core$async54063.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async54063");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54063.
 */
cljs.core.async.__GT_t_cljs$core$async54063 = (function cljs$core$async$__GT_t_cljs$core$async54063(f__$1,blockable__$1,meta54064){
return (new cljs.core.async.t_cljs$core$async54063(f__$1,blockable__$1,meta54064));
});

}

return (new cljs.core.async.t_cljs$core$async54063(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

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
var G__54069 = arguments.length;
switch (G__54069) {
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

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__54081 = arguments.length;
switch (G__54081) {
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

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

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
var G__54092 = arguments.length;
switch (G__54092) {
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

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_56561 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_56561) : fn1.call(null,val_56561));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_56561) : fn1.call(null,val_56561));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

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
var G__54112 = arguments.length;
switch (G__54112) {
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

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___56564 = n;
var x_56565 = (0);
while(true){
if((x_56565 < n__5636__auto___56564)){
(a[x_56565] = x_56565);

var G__56566 = (x_56565 + (1));
x_56565 = G__56566;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54164 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54164 = (function (flag,meta54165){
this.flag = flag;
this.meta54165 = meta54165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54166,meta54165__$1){
var self__ = this;
var _54166__$1 = this;
return (new cljs.core.async.t_cljs$core$async54164(self__.flag,meta54165__$1));
}));

(cljs.core.async.t_cljs$core$async54164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54166){
var self__ = this;
var _54166__$1 = this;
return self__.meta54165;
}));

(cljs.core.async.t_cljs$core$async54164.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54164.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async54164.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54164.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async54164.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta54165","meta54165",1916989230,null)], null);
}));

(cljs.core.async.t_cljs$core$async54164.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54164.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54164");

(cljs.core.async.t_cljs$core$async54164.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async54164");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54164.
 */
cljs.core.async.__GT_t_cljs$core$async54164 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async54164(flag__$1,meta54165){
return (new cljs.core.async.t_cljs$core$async54164(flag__$1,meta54165));
});

}

return (new cljs.core.async.t_cljs$core$async54164(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54209 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54209 = (function (flag,cb,meta54210){
this.flag = flag;
this.cb = cb;
this.meta54210 = meta54210;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54211,meta54210__$1){
var self__ = this;
var _54211__$1 = this;
return (new cljs.core.async.t_cljs$core$async54209(self__.flag,self__.cb,meta54210__$1));
}));

(cljs.core.async.t_cljs$core$async54209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54211){
var self__ = this;
var _54211__$1 = this;
return self__.meta54210;
}));

(cljs.core.async.t_cljs$core$async54209.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54209.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async54209.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54209.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async54209.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta54210","meta54210",-149486141,null)], null);
}));

(cljs.core.async.t_cljs$core$async54209.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54209.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54209");

(cljs.core.async.t_cljs$core$async54209.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async54209");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54209.
 */
cljs.core.async.__GT_t_cljs$core$async54209 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async54209(flag__$1,cb__$1,meta54210){
return (new cljs.core.async.t_cljs$core$async54209(flag__$1,cb__$1,meta54210));
});

}

return (new cljs.core.async.t_cljs$core$async54209(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__54215_SHARP_){
var G__54217 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54215_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__54217) : fret.call(null,G__54217));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__54216_SHARP_){
var G__54218 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54216_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__54218) : fret.call(null,G__54218));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__56585 = (i + (1));
i = G__56585;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
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
var args__5775__auto__ = [];
var len__5769__auto___56598 = arguments.length;
var i__5770__auto___56599 = (0);
while(true){
if((i__5770__auto___56599 < len__5769__auto___56598)){
args__5775__auto__.push((arguments[i__5770__auto___56599]));

var G__56600 = (i__5770__auto___56599 + (1));
i__5770__auto___56599 = G__56600;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__54231){
var map__54232 = p__54231;
var map__54232__$1 = cljs.core.__destructure_map(map__54232);
var opts = map__54232__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq54225){
var G__54226 = cljs.core.first(seq54225);
var seq54225__$1 = cljs.core.next(seq54225);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54226,seq54225__$1);
}));

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
var G__54242 = arguments.length;
switch (G__54242) {
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

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__53974__auto___56607 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53975__auto__ = (function (){var switch__53800__auto__ = (function (state_54297){
var state_val_54298 = (state_54297[(1)]);
if((state_val_54298 === (7))){
var inst_54283 = (state_54297[(2)]);
var state_54297__$1 = state_54297;
var statearr_54312_56610 = state_54297__$1;
(statearr_54312_56610[(2)] = inst_54283);

(statearr_54312_56610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (1))){
var state_54297__$1 = state_54297;
var statearr_54314_56612 = state_54297__$1;
(statearr_54314_56612[(2)] = null);

(statearr_54314_56612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (4))){
var inst_54266 = (state_54297[(7)]);
var inst_54266__$1 = (state_54297[(2)]);
var inst_54267 = (inst_54266__$1 == null);
var state_54297__$1 = (function (){var statearr_54317 = state_54297;
(statearr_54317[(7)] = inst_54266__$1);

return statearr_54317;
})();
if(cljs.core.truth_(inst_54267)){
var statearr_54318_56614 = state_54297__$1;
(statearr_54318_56614[(1)] = (5));

} else {
var statearr_54319_56616 = state_54297__$1;
(statearr_54319_56616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (13))){
var state_54297__$1 = state_54297;
var statearr_54321_56617 = state_54297__$1;
(statearr_54321_56617[(2)] = null);

(statearr_54321_56617[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (6))){
var inst_54266 = (state_54297[(7)]);
var state_54297__$1 = state_54297;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54297__$1,(11),to,inst_54266);
} else {
if((state_val_54298 === (3))){
var inst_54285 = (state_54297[(2)]);
var state_54297__$1 = state_54297;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54297__$1,inst_54285);
} else {
if((state_val_54298 === (12))){
var state_54297__$1 = state_54297;
var statearr_54323_56622 = state_54297__$1;
(statearr_54323_56622[(2)] = null);

(statearr_54323_56622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (2))){
var state_54297__$1 = state_54297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54297__$1,(4),from);
} else {
if((state_val_54298 === (11))){
var inst_54276 = (state_54297[(2)]);
var state_54297__$1 = state_54297;
if(cljs.core.truth_(inst_54276)){
var statearr_54324_56624 = state_54297__$1;
(statearr_54324_56624[(1)] = (12));

} else {
var statearr_54325_56625 = state_54297__$1;
(statearr_54325_56625[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (9))){
var state_54297__$1 = state_54297;
var statearr_54326_56626 = state_54297__$1;
(statearr_54326_56626[(2)] = null);

(statearr_54326_56626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (5))){
var state_54297__$1 = state_54297;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54327_56628 = state_54297__$1;
(statearr_54327_56628[(1)] = (8));

} else {
var statearr_54328_56629 = state_54297__$1;
(statearr_54328_56629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (14))){
var inst_54281 = (state_54297[(2)]);
var state_54297__$1 = state_54297;
var statearr_54329_56632 = state_54297__$1;
(statearr_54329_56632[(2)] = inst_54281);

(statearr_54329_56632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (10))){
var inst_54273 = (state_54297[(2)]);
var state_54297__$1 = state_54297;
var statearr_54330_56633 = state_54297__$1;
(statearr_54330_56633[(2)] = inst_54273);

(statearr_54330_56633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (8))){
var inst_54270 = cljs.core.async.close_BANG_(to);
var state_54297__$1 = state_54297;
var statearr_54331_56636 = state_54297__$1;
(statearr_54331_56636[(2)] = inst_54270);

(statearr_54331_56636[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__53801__auto__ = null;
var cljs$core$async$state_machine__53801__auto____0 = (function (){
var statearr_54336 = [null,null,null,null,null,null,null,null];
(statearr_54336[(0)] = cljs$core$async$state_machine__53801__auto__);

(statearr_54336[(1)] = (1));

return statearr_54336;
});
var cljs$core$async$state_machine__53801__auto____1 = (function (state_54297){
while(true){
var ret_value__53802__auto__ = (function (){try{while(true){
var result__53803__auto__ = switch__53800__auto__(state_54297);
if(cljs.core.keyword_identical_QMARK_(result__53803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53803__auto__;
}
break;
}
}catch (e54337){var ex__53804__auto__ = e54337;
var statearr_54338_56639 = state_54297;
(statearr_54338_56639[(2)] = ex__53804__auto__);


if(cljs.core.seq((state_54297[(4)]))){
var statearr_54339_56641 = state_54297;
(statearr_54339_56641[(1)] = cljs.core.first((state_54297[(4)])));

} else {
throw ex__53804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56642 = state_54297;
state_54297 = G__56642;
continue;
} else {
return ret_value__53802__auto__;
}
break;
}
});
cljs$core$async$state_machine__53801__auto__ = function(state_54297){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53801__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53801__auto____1.call(this,state_54297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53801__auto____0;
cljs$core$async$state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53801__auto____1;
return cljs$core$async$state_machine__53801__auto__;
})()
})();
var state__53976__auto__ = (function (){var statearr_54341 = f__53975__auto__();
(statearr_54341[(6)] = c__53974__auto___56607);

return statearr_54341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53976__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__54346){
var vec__54349 = p__54346;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54349,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54349,(1),null);
var job = vec__54349;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__53974__auto___56647 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53975__auto__ = (function (){var switch__53800__auto__ = (function (state_54359){
var state_val_54360 = (state_54359[(1)]);
if((state_val_54360 === (1))){
var state_54359__$1 = state_54359;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54359__$1,(2),res,v);
} else {
if((state_val_54360 === (2))){
var inst_54356 = (state_54359[(2)]);
var inst_54357 = cljs.core.async.close_BANG_(res);
var state_54359__$1 = (function (){var statearr_54366 = state_54359;
(statearr_54366[(7)] = inst_54356);

return statearr_54366;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54359__$1,inst_54357);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53801__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53801__auto____0 = (function (){
var statearr_54367 = [null,null,null,null,null,null,null,null];
(statearr_54367[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53801__auto__);

(statearr_54367[(1)] = (1));

return statearr_54367;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53801__auto____1 = (function (state_54359){
while(true){
var ret_value__53802__auto__ = (function (){try{while(true){
var result__53803__auto__ = switch__53800__auto__(state_54359);
if(cljs.core.keyword_identical_QMARK_(result__53803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53803__auto__;
}
break;
}
}catch (e54369){var ex__53804__auto__ = e54369;
var statearr_54370_56649 = state_54359;
(statearr_54370_56649[(2)] = ex__53804__auto__);


if(cljs.core.seq((state_54359[(4)]))){
var statearr_54371_56650 = state_54359;
(statearr_54371_56650[(1)] = cljs.core.first((state_54359[(4)])));

} else {
throw ex__53804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56651 = state_54359;
state_54359 = G__56651;
continue;
} else {
return ret_value__53802__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53801__auto__ = function(state_54359){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53801__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53801__auto____1.call(this,state_54359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53801__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53801__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53801__auto__;
})()
})();
var state__53976__auto__ = (function (){var statearr_54372 = f__53975__auto__();
(statearr_54372[(6)] = c__53974__auto___56647);

return statearr_54372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53976__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__54373){
var vec__54374 = p__54373;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54374,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54374,(1),null);
var job = vec__54374;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___56652 = n;
var __56653 = (0);
while(true){
if((__56653 < n__5636__auto___56652)){
var G__54378_56654 = type;
var G__54378_56655__$1 = (((G__54378_56654 instanceof cljs.core.Keyword))?G__54378_56654.fqn:null);
switch (G__54378_56655__$1) {
case "compute":
var c__53974__auto___56657 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__56653,c__53974__auto___56657,G__54378_56654,G__54378_56655__$1,n__5636__auto___56652,jobs,results,process__$1,async){
return (function (){
var f__53975__auto__ = (function (){var switch__53800__auto__ = ((function (__56653,c__53974__auto___56657,G__54378_56654,G__54378_56655__$1,n__5636__auto___56652,jobs,results,process__$1,async){
return (function (state_54391){
var state_val_54392 = (state_54391[(1)]);
if((state_val_54392 === (1))){
var state_54391__$1 = state_54391;
var statearr_54393_56658 = state_54391__$1;
(statearr_54393_56658[(2)] = null);

(statearr_54393_56658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54392 === (2))){
var state_54391__$1 = state_54391;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54391__$1,(4),jobs);
} else {
if((state_val_54392 === (3))){
var inst_54389 = (state_54391[(2)]);
var state_54391__$1 = state_54391;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54391__$1,inst_54389);
} else {
if((state_val_54392 === (4))){
var inst_54381 = (state_54391[(2)]);
var inst_54382 = process__$1(inst_54381);
var state_54391__$1 = state_54391;
if(cljs.core.truth_(inst_54382)){
var statearr_54395_56659 = state_54391__$1;
(statearr_54395_56659[(1)] = (5));

} else {
var statearr_54396_56660 = state_54391__$1;
(statearr_54396_56660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54392 === (5))){
var state_54391__$1 = state_54391;
var statearr_54397_56661 = state_54391__$1;
(statearr_54397_56661[(2)] = null);

(statearr_54397_56661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54392 === (6))){
var state_54391__$1 = state_54391;
var statearr_54398_56662 = state_54391__$1;
(statearr_54398_56662[(2)] = null);

(statearr_54398_56662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54392 === (7))){
var inst_54387 = (state_54391[(2)]);
var state_54391__$1 = state_54391;
var statearr_54400_56663 = state_54391__$1;
(statearr_54400_56663[(2)] = inst_54387);

(statearr_54400_56663[(1)] = (3));


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
});})(__56653,c__53974__auto___56657,G__54378_56654,G__54378_56655__$1,n__5636__auto___56652,jobs,results,process__$1,async))
;
return ((function (__56653,switch__53800__auto__,c__53974__auto___56657,G__54378_56654,G__54378_56655__$1,n__5636__auto___56652,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53801__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53801__auto____0 = (function (){
var statearr_54401 = [null,null,null,null,null,null,null];
(statearr_54401[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53801__auto__);

(statearr_54401[(1)] = (1));

return statearr_54401;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53801__auto____1 = (function (state_54391){
while(true){
var ret_value__53802__auto__ = (function (){try{while(true){
var result__53803__auto__ = switch__53800__auto__(state_54391);
if(cljs.core.keyword_identical_QMARK_(result__53803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53803__auto__;
}
break;
}
}catch (e54402){var ex__53804__auto__ = e54402;
var statearr_54403_56664 = state_54391;
(statearr_54403_56664[(2)] = ex__53804__auto__);


if(cljs.core.seq((state_54391[(4)]))){
var statearr_54404_56665 = state_54391;
(statearr_54404_56665[(1)] = cljs.core.first((state_54391[(4)])));

} else {
throw ex__53804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56666 = state_54391;
state_54391 = G__56666;
continue;
} else {
return ret_value__53802__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53801__auto__ = function(state_54391){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53801__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53801__auto____1.call(this,state_54391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53801__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53801__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53801__auto__;
})()
;})(__56653,switch__53800__auto__,c__53974__auto___56657,G__54378_56654,G__54378_56655__$1,n__5636__auto___56652,jobs,results,process__$1,async))
})();
var state__53976__auto__ = (function (){var statearr_54405 = f__53975__auto__();
(statearr_54405[(6)] = c__53974__auto___56657);

return statearr_54405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53976__auto__);
});})(__56653,c__53974__auto___56657,G__54378_56654,G__54378_56655__$1,n__5636__auto___56652,jobs,results,process__$1,async))
);


break;
case "async":
var c__53974__auto___56670 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__56653,c__53974__auto___56670,G__54378_56654,G__54378_56655__$1,n__5636__auto___56652,jobs,results,process__$1,async){
return (function (){
var f__53975__auto__ = (function (){var switch__53800__auto__ = ((function (__56653,c__53974__auto___56670,G__54378_56654,G__54378_56655__$1,n__5636__auto___56652,jobs,results,process__$1,async){
return (function (state_54421){
var state_val_54422 = (state_54421[(1)]);
if((state_val_54422 === (1))){
var state_54421__$1 = state_54421;
var statearr_54449_56671 = state_54421__$1;
(statearr_54449_56671[(2)] = null);

(statearr_54449_56671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54422 === (2))){
var state_54421__$1 = state_54421;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54421__$1,(4),jobs);
} else {
if((state_val_54422 === (3))){
var inst_54419 = (state_54421[(2)]);
var state_54421__$1 = state_54421;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54421__$1,inst_54419);
} else {
if((state_val_54422 === (4))){
var inst_54411 = (state_54421[(2)]);
var inst_54412 = async(inst_54411);
var state_54421__$1 = state_54421;
if(cljs.core.truth_(inst_54412)){
var statearr_54450_56672 = state_54421__$1;
(statearr_54450_56672[(1)] = (5));

} else {
var statearr_54451_56673 = state_54421__$1;
(statearr_54451_56673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54422 === (5))){
var state_54421__$1 = state_54421;
var statearr_54452_56674 = state_54421__$1;
(statearr_54452_56674[(2)] = null);

(statearr_54452_56674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54422 === (6))){
var state_54421__$1 = state_54421;
var statearr_54453_56675 = state_54421__$1;
(statearr_54453_56675[(2)] = null);

(statearr_54453_56675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54422 === (7))){
var inst_54417 = (state_54421[(2)]);
var state_54421__$1 = state_54421;
var statearr_54454_56676 = state_54421__$1;
(statearr_54454_56676[(2)] = inst_54417);

(statearr_54454_56676[(1)] = (3));


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
});})(__56653,c__53974__auto___56670,G__54378_56654,G__54378_56655__$1,n__5636__auto___56652,jobs,results,process__$1,async))
;
return ((function (__56653,switch__53800__auto__,c__53974__auto___56670,G__54378_56654,G__54378_56655__$1,n__5636__auto___56652,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53801__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53801__auto____0 = (function (){
var statearr_54455 = [null,null,null,null,null,null,null];
(statearr_54455[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53801__auto__);

(statearr_54455[(1)] = (1));

return statearr_54455;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53801__auto____1 = (function (state_54421){
while(true){
var ret_value__53802__auto__ = (function (){try{while(true){
var result__53803__auto__ = switch__53800__auto__(state_54421);
if(cljs.core.keyword_identical_QMARK_(result__53803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53803__auto__;
}
break;
}
}catch (e54456){var ex__53804__auto__ = e54456;
var statearr_54457_56681 = state_54421;
(statearr_54457_56681[(2)] = ex__53804__auto__);


if(cljs.core.seq((state_54421[(4)]))){
var statearr_54458_56682 = state_54421;
(statearr_54458_56682[(1)] = cljs.core.first((state_54421[(4)])));

} else {
throw ex__53804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56683 = state_54421;
state_54421 = G__56683;
continue;
} else {
return ret_value__53802__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53801__auto__ = function(state_54421){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53801__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53801__auto____1.call(this,state_54421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53801__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53801__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53801__auto__;
})()
;})(__56653,switch__53800__auto__,c__53974__auto___56670,G__54378_56654,G__54378_56655__$1,n__5636__auto___56652,jobs,results,process__$1,async))
})();
var state__53976__auto__ = (function (){var statearr_54459 = f__53975__auto__();
(statearr_54459[(6)] = c__53974__auto___56670);

return statearr_54459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53976__auto__);
});})(__56653,c__53974__auto___56670,G__54378_56654,G__54378_56655__$1,n__5636__auto___56652,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54378_56655__$1)].join('')));

}

var G__56684 = (__56653 + (1));
__56653 = G__56684;
continue;
} else {
}
break;
}

var c__53974__auto___56686 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53975__auto__ = (function (){var switch__53800__auto__ = (function (state_54482){
var state_val_54483 = (state_54482[(1)]);
if((state_val_54483 === (7))){
var inst_54478 = (state_54482[(2)]);
var state_54482__$1 = state_54482;
var statearr_54489_56687 = state_54482__$1;
(statearr_54489_56687[(2)] = inst_54478);

(statearr_54489_56687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54483 === (1))){
var state_54482__$1 = state_54482;
var statearr_54490_56689 = state_54482__$1;
(statearr_54490_56689[(2)] = null);

(statearr_54490_56689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54483 === (4))){
var inst_54463 = (state_54482[(7)]);
var inst_54463__$1 = (state_54482[(2)]);
var inst_54464 = (inst_54463__$1 == null);
var state_54482__$1 = (function (){var statearr_54491 = state_54482;
(statearr_54491[(7)] = inst_54463__$1);

return statearr_54491;
})();
if(cljs.core.truth_(inst_54464)){
var statearr_54492_56691 = state_54482__$1;
(statearr_54492_56691[(1)] = (5));

} else {
var statearr_54493_56692 = state_54482__$1;
(statearr_54493_56692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54483 === (6))){
var inst_54468 = (state_54482[(8)]);
var inst_54463 = (state_54482[(7)]);
var inst_54468__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_54469 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54470 = [inst_54463,inst_54468__$1];
var inst_54471 = (new cljs.core.PersistentVector(null,2,(5),inst_54469,inst_54470,null));
var state_54482__$1 = (function (){var statearr_54494 = state_54482;
(statearr_54494[(8)] = inst_54468__$1);

return statearr_54494;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54482__$1,(8),jobs,inst_54471);
} else {
if((state_val_54483 === (3))){
var inst_54480 = (state_54482[(2)]);
var state_54482__$1 = state_54482;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54482__$1,inst_54480);
} else {
if((state_val_54483 === (2))){
var state_54482__$1 = state_54482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54482__$1,(4),from);
} else {
if((state_val_54483 === (9))){
var inst_54475 = (state_54482[(2)]);
var state_54482__$1 = (function (){var statearr_54495 = state_54482;
(statearr_54495[(9)] = inst_54475);

return statearr_54495;
})();
var statearr_54496_56695 = state_54482__$1;
(statearr_54496_56695[(2)] = null);

(statearr_54496_56695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54483 === (5))){
var inst_54466 = cljs.core.async.close_BANG_(jobs);
var state_54482__$1 = state_54482;
var statearr_54499_56697 = state_54482__$1;
(statearr_54499_56697[(2)] = inst_54466);

(statearr_54499_56697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54483 === (8))){
var inst_54468 = (state_54482[(8)]);
var inst_54473 = (state_54482[(2)]);
var state_54482__$1 = (function (){var statearr_54500 = state_54482;
(statearr_54500[(10)] = inst_54473);

return statearr_54500;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54482__$1,(9),results,inst_54468);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53801__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53801__auto____0 = (function (){
var statearr_54501 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54501[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53801__auto__);

(statearr_54501[(1)] = (1));

return statearr_54501;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53801__auto____1 = (function (state_54482){
while(true){
var ret_value__53802__auto__ = (function (){try{while(true){
var result__53803__auto__ = switch__53800__auto__(state_54482);
if(cljs.core.keyword_identical_QMARK_(result__53803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53803__auto__;
}
break;
}
}catch (e54502){var ex__53804__auto__ = e54502;
var statearr_54503_56699 = state_54482;
(statearr_54503_56699[(2)] = ex__53804__auto__);


if(cljs.core.seq((state_54482[(4)]))){
var statearr_54504_56700 = state_54482;
(statearr_54504_56700[(1)] = cljs.core.first((state_54482[(4)])));

} else {
throw ex__53804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56701 = state_54482;
state_54482 = G__56701;
continue;
} else {
return ret_value__53802__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53801__auto__ = function(state_54482){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53801__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53801__auto____1.call(this,state_54482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53801__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53801__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53801__auto__;
})()
})();
var state__53976__auto__ = (function (){var statearr_54505 = f__53975__auto__();
(statearr_54505[(6)] = c__53974__auto___56686);

return statearr_54505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53976__auto__);
}));


var c__53974__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53975__auto__ = (function (){var switch__53800__auto__ = (function (state_54545){
var state_val_54546 = (state_54545[(1)]);
if((state_val_54546 === (7))){
var inst_54541 = (state_54545[(2)]);
var state_54545__$1 = state_54545;
var statearr_54549_56703 = state_54545__$1;
(statearr_54549_56703[(2)] = inst_54541);

(statearr_54549_56703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54546 === (20))){
var state_54545__$1 = state_54545;
var statearr_54551_56704 = state_54545__$1;
(statearr_54551_56704[(2)] = null);

(statearr_54551_56704[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54546 === (1))){
var state_54545__$1 = state_54545;
var statearr_54552_56706 = state_54545__$1;
(statearr_54552_56706[(2)] = null);

(statearr_54552_56706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54546 === (4))){
var inst_54509 = (state_54545[(7)]);
var inst_54509__$1 = (state_54545[(2)]);
var inst_54510 = (inst_54509__$1 == null);
var state_54545__$1 = (function (){var statearr_54553 = state_54545;
(statearr_54553[(7)] = inst_54509__$1);

return statearr_54553;
})();
if(cljs.core.truth_(inst_54510)){
var statearr_54554_56709 = state_54545__$1;
(statearr_54554_56709[(1)] = (5));

} else {
var statearr_54555_56710 = state_54545__$1;
(statearr_54555_56710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54546 === (15))){
var inst_54523 = (state_54545[(8)]);
var state_54545__$1 = state_54545;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54545__$1,(18),to,inst_54523);
} else {
if((state_val_54546 === (21))){
var inst_54536 = (state_54545[(2)]);
var state_54545__$1 = state_54545;
var statearr_54556_56711 = state_54545__$1;
(statearr_54556_56711[(2)] = inst_54536);

(statearr_54556_56711[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54546 === (13))){
var inst_54538 = (state_54545[(2)]);
var state_54545__$1 = (function (){var statearr_54557 = state_54545;
(statearr_54557[(9)] = inst_54538);

return statearr_54557;
})();
var statearr_54560_56712 = state_54545__$1;
(statearr_54560_56712[(2)] = null);

(statearr_54560_56712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54546 === (6))){
var inst_54509 = (state_54545[(7)]);
var state_54545__$1 = state_54545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54545__$1,(11),inst_54509);
} else {
if((state_val_54546 === (17))){
var inst_54531 = (state_54545[(2)]);
var state_54545__$1 = state_54545;
if(cljs.core.truth_(inst_54531)){
var statearr_54562_56716 = state_54545__$1;
(statearr_54562_56716[(1)] = (19));

} else {
var statearr_54563_56717 = state_54545__$1;
(statearr_54563_56717[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54546 === (3))){
var inst_54543 = (state_54545[(2)]);
var state_54545__$1 = state_54545;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54545__$1,inst_54543);
} else {
if((state_val_54546 === (12))){
var inst_54520 = (state_54545[(10)]);
var state_54545__$1 = state_54545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54545__$1,(14),inst_54520);
} else {
if((state_val_54546 === (2))){
var state_54545__$1 = state_54545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54545__$1,(4),results);
} else {
if((state_val_54546 === (19))){
var state_54545__$1 = state_54545;
var statearr_54564_56718 = state_54545__$1;
(statearr_54564_56718[(2)] = null);

(statearr_54564_56718[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54546 === (11))){
var inst_54520 = (state_54545[(2)]);
var state_54545__$1 = (function (){var statearr_54565 = state_54545;
(statearr_54565[(10)] = inst_54520);

return statearr_54565;
})();
var statearr_54567_56720 = state_54545__$1;
(statearr_54567_56720[(2)] = null);

(statearr_54567_56720[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54546 === (9))){
var state_54545__$1 = state_54545;
var statearr_54569_56722 = state_54545__$1;
(statearr_54569_56722[(2)] = null);

(statearr_54569_56722[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54546 === (5))){
var state_54545__$1 = state_54545;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54570_56723 = state_54545__$1;
(statearr_54570_56723[(1)] = (8));

} else {
var statearr_54571_56724 = state_54545__$1;
(statearr_54571_56724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54546 === (14))){
var inst_54523 = (state_54545[(8)]);
var inst_54525 = (state_54545[(11)]);
var inst_54523__$1 = (state_54545[(2)]);
var inst_54524 = (inst_54523__$1 == null);
var inst_54525__$1 = cljs.core.not(inst_54524);
var state_54545__$1 = (function (){var statearr_54572 = state_54545;
(statearr_54572[(8)] = inst_54523__$1);

(statearr_54572[(11)] = inst_54525__$1);

return statearr_54572;
})();
if(inst_54525__$1){
var statearr_54573_56725 = state_54545__$1;
(statearr_54573_56725[(1)] = (15));

} else {
var statearr_54576_56726 = state_54545__$1;
(statearr_54576_56726[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54546 === (16))){
var inst_54525 = (state_54545[(11)]);
var state_54545__$1 = state_54545;
var statearr_54578_56727 = state_54545__$1;
(statearr_54578_56727[(2)] = inst_54525);

(statearr_54578_56727[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54546 === (10))){
var inst_54517 = (state_54545[(2)]);
var state_54545__$1 = state_54545;
var statearr_54582_56728 = state_54545__$1;
(statearr_54582_56728[(2)] = inst_54517);

(statearr_54582_56728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54546 === (18))){
var inst_54528 = (state_54545[(2)]);
var state_54545__$1 = state_54545;
var statearr_54586_56729 = state_54545__$1;
(statearr_54586_56729[(2)] = inst_54528);

(statearr_54586_56729[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54546 === (8))){
var inst_54514 = cljs.core.async.close_BANG_(to);
var state_54545__$1 = state_54545;
var statearr_54587_56730 = state_54545__$1;
(statearr_54587_56730[(2)] = inst_54514);

(statearr_54587_56730[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__53801__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__53801__auto____0 = (function (){
var statearr_54597 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54597[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__53801__auto__);

(statearr_54597[(1)] = (1));

return statearr_54597;
});
var cljs$core$async$pipeline_STAR__$_state_machine__53801__auto____1 = (function (state_54545){
while(true){
var ret_value__53802__auto__ = (function (){try{while(true){
var result__53803__auto__ = switch__53800__auto__(state_54545);
if(cljs.core.keyword_identical_QMARK_(result__53803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53803__auto__;
}
break;
}
}catch (e54600){var ex__53804__auto__ = e54600;
var statearr_54601_56731 = state_54545;
(statearr_54601_56731[(2)] = ex__53804__auto__);


if(cljs.core.seq((state_54545[(4)]))){
var statearr_54602_56732 = state_54545;
(statearr_54602_56732[(1)] = cljs.core.first((state_54545[(4)])));

} else {
throw ex__53804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56733 = state_54545;
state_54545 = G__56733;
continue;
} else {
return ret_value__53802__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__53801__auto__ = function(state_54545){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__53801__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__53801__auto____1.call(this,state_54545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__53801__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__53801__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__53801__auto__;
})()
})();
var state__53976__auto__ = (function (){var statearr_54603 = f__53975__auto__();
(statearr_54603[(6)] = c__53974__auto__);

return statearr_54603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53976__auto__);
}));

return c__53974__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__54605 = arguments.length;
switch (G__54605) {
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

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__54608 = arguments.length;
switch (G__54608) {
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

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__54613 = arguments.length;
switch (G__54613) {
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

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__53974__auto___56744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53975__auto__ = (function (){var switch__53800__auto__ = (function (state_54639){
var state_val_54640 = (state_54639[(1)]);
if((state_val_54640 === (7))){
var inst_54635 = (state_54639[(2)]);
var state_54639__$1 = state_54639;
var statearr_54641_56745 = state_54639__$1;
(statearr_54641_56745[(2)] = inst_54635);

(statearr_54641_56745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54640 === (1))){
var state_54639__$1 = state_54639;
var statearr_54643_56746 = state_54639__$1;
(statearr_54643_56746[(2)] = null);

(statearr_54643_56746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54640 === (4))){
var inst_54616 = (state_54639[(7)]);
var inst_54616__$1 = (state_54639[(2)]);
var inst_54617 = (inst_54616__$1 == null);
var state_54639__$1 = (function (){var statearr_54645 = state_54639;
(statearr_54645[(7)] = inst_54616__$1);

return statearr_54645;
})();
if(cljs.core.truth_(inst_54617)){
var statearr_54649_56747 = state_54639__$1;
(statearr_54649_56747[(1)] = (5));

} else {
var statearr_54650_56748 = state_54639__$1;
(statearr_54650_56748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54640 === (13))){
var state_54639__$1 = state_54639;
var statearr_54652_56749 = state_54639__$1;
(statearr_54652_56749[(2)] = null);

(statearr_54652_56749[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54640 === (6))){
var inst_54616 = (state_54639[(7)]);
var inst_54622 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_54616) : p.call(null,inst_54616));
var state_54639__$1 = state_54639;
if(cljs.core.truth_(inst_54622)){
var statearr_54656_56750 = state_54639__$1;
(statearr_54656_56750[(1)] = (9));

} else {
var statearr_54658_56751 = state_54639__$1;
(statearr_54658_56751[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54640 === (3))){
var inst_54637 = (state_54639[(2)]);
var state_54639__$1 = state_54639;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54639__$1,inst_54637);
} else {
if((state_val_54640 === (12))){
var state_54639__$1 = state_54639;
var statearr_54660_56752 = state_54639__$1;
(statearr_54660_56752[(2)] = null);

(statearr_54660_56752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54640 === (2))){
var state_54639__$1 = state_54639;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54639__$1,(4),ch);
} else {
if((state_val_54640 === (11))){
var inst_54616 = (state_54639[(7)]);
var inst_54626 = (state_54639[(2)]);
var state_54639__$1 = state_54639;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54639__$1,(8),inst_54626,inst_54616);
} else {
if((state_val_54640 === (9))){
var state_54639__$1 = state_54639;
var statearr_54661_56753 = state_54639__$1;
(statearr_54661_56753[(2)] = tc);

(statearr_54661_56753[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54640 === (5))){
var inst_54619 = cljs.core.async.close_BANG_(tc);
var inst_54620 = cljs.core.async.close_BANG_(fc);
var state_54639__$1 = (function (){var statearr_54662 = state_54639;
(statearr_54662[(8)] = inst_54619);

return statearr_54662;
})();
var statearr_54663_56754 = state_54639__$1;
(statearr_54663_56754[(2)] = inst_54620);

(statearr_54663_56754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54640 === (14))){
var inst_54633 = (state_54639[(2)]);
var state_54639__$1 = state_54639;
var statearr_54664_56755 = state_54639__$1;
(statearr_54664_56755[(2)] = inst_54633);

(statearr_54664_56755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54640 === (10))){
var state_54639__$1 = state_54639;
var statearr_54665_56756 = state_54639__$1;
(statearr_54665_56756[(2)] = fc);

(statearr_54665_56756[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54640 === (8))){
var inst_54628 = (state_54639[(2)]);
var state_54639__$1 = state_54639;
if(cljs.core.truth_(inst_54628)){
var statearr_54666_56757 = state_54639__$1;
(statearr_54666_56757[(1)] = (12));

} else {
var statearr_54667_56758 = state_54639__$1;
(statearr_54667_56758[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__53801__auto__ = null;
var cljs$core$async$state_machine__53801__auto____0 = (function (){
var statearr_54670 = [null,null,null,null,null,null,null,null,null];
(statearr_54670[(0)] = cljs$core$async$state_machine__53801__auto__);

(statearr_54670[(1)] = (1));

return statearr_54670;
});
var cljs$core$async$state_machine__53801__auto____1 = (function (state_54639){
while(true){
var ret_value__53802__auto__ = (function (){try{while(true){
var result__53803__auto__ = switch__53800__auto__(state_54639);
if(cljs.core.keyword_identical_QMARK_(result__53803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53803__auto__;
}
break;
}
}catch (e54671){var ex__53804__auto__ = e54671;
var statearr_54673_56759 = state_54639;
(statearr_54673_56759[(2)] = ex__53804__auto__);


if(cljs.core.seq((state_54639[(4)]))){
var statearr_54677_56760 = state_54639;
(statearr_54677_56760[(1)] = cljs.core.first((state_54639[(4)])));

} else {
throw ex__53804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56761 = state_54639;
state_54639 = G__56761;
continue;
} else {
return ret_value__53802__auto__;
}
break;
}
});
cljs$core$async$state_machine__53801__auto__ = function(state_54639){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53801__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53801__auto____1.call(this,state_54639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53801__auto____0;
cljs$core$async$state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53801__auto____1;
return cljs$core$async$state_machine__53801__auto__;
})()
})();
var state__53976__auto__ = (function (){var statearr_54678 = f__53975__auto__();
(statearr_54678[(6)] = c__53974__auto___56744);

return statearr_54678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53976__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__53974__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53975__auto__ = (function (){var switch__53800__auto__ = (function (state_54720){
var state_val_54721 = (state_54720[(1)]);
if((state_val_54721 === (7))){
var inst_54715 = (state_54720[(2)]);
var state_54720__$1 = state_54720;
var statearr_54723_56762 = state_54720__$1;
(statearr_54723_56762[(2)] = inst_54715);

(statearr_54723_56762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (1))){
var inst_54698 = init;
var inst_54699 = inst_54698;
var state_54720__$1 = (function (){var statearr_54724 = state_54720;
(statearr_54724[(7)] = inst_54699);

return statearr_54724;
})();
var statearr_54725_56763 = state_54720__$1;
(statearr_54725_56763[(2)] = null);

(statearr_54725_56763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (4))){
var inst_54702 = (state_54720[(8)]);
var inst_54702__$1 = (state_54720[(2)]);
var inst_54703 = (inst_54702__$1 == null);
var state_54720__$1 = (function (){var statearr_54726 = state_54720;
(statearr_54726[(8)] = inst_54702__$1);

return statearr_54726;
})();
if(cljs.core.truth_(inst_54703)){
var statearr_54727_56764 = state_54720__$1;
(statearr_54727_56764[(1)] = (5));

} else {
var statearr_54728_56765 = state_54720__$1;
(statearr_54728_56765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (6))){
var inst_54702 = (state_54720[(8)]);
var inst_54699 = (state_54720[(7)]);
var inst_54706 = (state_54720[(9)]);
var inst_54706__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_54699,inst_54702) : f.call(null,inst_54699,inst_54702));
var inst_54707 = cljs.core.reduced_QMARK_(inst_54706__$1);
var state_54720__$1 = (function (){var statearr_54733 = state_54720;
(statearr_54733[(9)] = inst_54706__$1);

return statearr_54733;
})();
if(inst_54707){
var statearr_54734_56767 = state_54720__$1;
(statearr_54734_56767[(1)] = (8));

} else {
var statearr_54735_56768 = state_54720__$1;
(statearr_54735_56768[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (3))){
var inst_54717 = (state_54720[(2)]);
var state_54720__$1 = state_54720;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54720__$1,inst_54717);
} else {
if((state_val_54721 === (2))){
var state_54720__$1 = state_54720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54720__$1,(4),ch);
} else {
if((state_val_54721 === (9))){
var inst_54706 = (state_54720[(9)]);
var inst_54699 = inst_54706;
var state_54720__$1 = (function (){var statearr_54736 = state_54720;
(statearr_54736[(7)] = inst_54699);

return statearr_54736;
})();
var statearr_54737_56769 = state_54720__$1;
(statearr_54737_56769[(2)] = null);

(statearr_54737_56769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (5))){
var inst_54699 = (state_54720[(7)]);
var state_54720__$1 = state_54720;
var statearr_54738_56770 = state_54720__$1;
(statearr_54738_56770[(2)] = inst_54699);

(statearr_54738_56770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (10))){
var inst_54713 = (state_54720[(2)]);
var state_54720__$1 = state_54720;
var statearr_54740_56771 = state_54720__$1;
(statearr_54740_56771[(2)] = inst_54713);

(statearr_54740_56771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54721 === (8))){
var inst_54706 = (state_54720[(9)]);
var inst_54709 = cljs.core.deref(inst_54706);
var state_54720__$1 = state_54720;
var statearr_54744_56772 = state_54720__$1;
(statearr_54744_56772[(2)] = inst_54709);

(statearr_54744_56772[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__53801__auto__ = null;
var cljs$core$async$reduce_$_state_machine__53801__auto____0 = (function (){
var statearr_54745 = [null,null,null,null,null,null,null,null,null,null];
(statearr_54745[(0)] = cljs$core$async$reduce_$_state_machine__53801__auto__);

(statearr_54745[(1)] = (1));

return statearr_54745;
});
var cljs$core$async$reduce_$_state_machine__53801__auto____1 = (function (state_54720){
while(true){
var ret_value__53802__auto__ = (function (){try{while(true){
var result__53803__auto__ = switch__53800__auto__(state_54720);
if(cljs.core.keyword_identical_QMARK_(result__53803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53803__auto__;
}
break;
}
}catch (e54747){var ex__53804__auto__ = e54747;
var statearr_54749_56773 = state_54720;
(statearr_54749_56773[(2)] = ex__53804__auto__);


if(cljs.core.seq((state_54720[(4)]))){
var statearr_54750_56775 = state_54720;
(statearr_54750_56775[(1)] = cljs.core.first((state_54720[(4)])));

} else {
throw ex__53804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56776 = state_54720;
state_54720 = G__56776;
continue;
} else {
return ret_value__53802__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__53801__auto__ = function(state_54720){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__53801__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__53801__auto____1.call(this,state_54720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__53801__auto____0;
cljs$core$async$reduce_$_state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__53801__auto____1;
return cljs$core$async$reduce_$_state_machine__53801__auto__;
})()
})();
var state__53976__auto__ = (function (){var statearr_54751 = f__53975__auto__();
(statearr_54751[(6)] = c__53974__auto__);

return statearr_54751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53976__auto__);
}));

return c__53974__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__53974__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53975__auto__ = (function (){var switch__53800__auto__ = (function (state_54761){
var state_val_54762 = (state_54761[(1)]);
if((state_val_54762 === (1))){
var inst_54753 = cljs.core.async.reduce(f__$1,init,ch);
var state_54761__$1 = state_54761;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54761__$1,(2),inst_54753);
} else {
if((state_val_54762 === (2))){
var inst_54758 = (state_54761[(2)]);
var inst_54759 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_54758) : f__$1.call(null,inst_54758));
var state_54761__$1 = state_54761;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54761__$1,inst_54759);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__53801__auto__ = null;
var cljs$core$async$transduce_$_state_machine__53801__auto____0 = (function (){
var statearr_54764 = [null,null,null,null,null,null,null];
(statearr_54764[(0)] = cljs$core$async$transduce_$_state_machine__53801__auto__);

(statearr_54764[(1)] = (1));

return statearr_54764;
});
var cljs$core$async$transduce_$_state_machine__53801__auto____1 = (function (state_54761){
while(true){
var ret_value__53802__auto__ = (function (){try{while(true){
var result__53803__auto__ = switch__53800__auto__(state_54761);
if(cljs.core.keyword_identical_QMARK_(result__53803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53803__auto__;
}
break;
}
}catch (e54766){var ex__53804__auto__ = e54766;
var statearr_54767_56783 = state_54761;
(statearr_54767_56783[(2)] = ex__53804__auto__);


if(cljs.core.seq((state_54761[(4)]))){
var statearr_54768_56785 = state_54761;
(statearr_54768_56785[(1)] = cljs.core.first((state_54761[(4)])));

} else {
throw ex__53804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56787 = state_54761;
state_54761 = G__56787;
continue;
} else {
return ret_value__53802__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__53801__auto__ = function(state_54761){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__53801__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__53801__auto____1.call(this,state_54761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__53801__auto____0;
cljs$core$async$transduce_$_state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__53801__auto____1;
return cljs$core$async$transduce_$_state_machine__53801__auto__;
})()
})();
var state__53976__auto__ = (function (){var statearr_54769 = f__53975__auto__();
(statearr_54769[(6)] = c__53974__auto__);

return statearr_54769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53976__auto__);
}));

return c__53974__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__54772 = arguments.length;
switch (G__54772) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__53974__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53975__auto__ = (function (){var switch__53800__auto__ = (function (state_54806){
var state_val_54807 = (state_54806[(1)]);
if((state_val_54807 === (7))){
var inst_54786 = (state_54806[(2)]);
var state_54806__$1 = state_54806;
var statearr_54811_56797 = state_54806__$1;
(statearr_54811_56797[(2)] = inst_54786);

(statearr_54811_56797[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54807 === (1))){
var inst_54780 = cljs.core.seq(coll);
var inst_54781 = inst_54780;
var state_54806__$1 = (function (){var statearr_54812 = state_54806;
(statearr_54812[(7)] = inst_54781);

return statearr_54812;
})();
var statearr_54814_56798 = state_54806__$1;
(statearr_54814_56798[(2)] = null);

(statearr_54814_56798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54807 === (4))){
var inst_54781 = (state_54806[(7)]);
var inst_54784 = cljs.core.first(inst_54781);
var state_54806__$1 = state_54806;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54806__$1,(7),ch,inst_54784);
} else {
if((state_val_54807 === (13))){
var inst_54800 = (state_54806[(2)]);
var state_54806__$1 = state_54806;
var statearr_54819_56801 = state_54806__$1;
(statearr_54819_56801[(2)] = inst_54800);

(statearr_54819_56801[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54807 === (6))){
var inst_54791 = (state_54806[(2)]);
var state_54806__$1 = state_54806;
if(cljs.core.truth_(inst_54791)){
var statearr_54820_56802 = state_54806__$1;
(statearr_54820_56802[(1)] = (8));

} else {
var statearr_54822_56803 = state_54806__$1;
(statearr_54822_56803[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54807 === (3))){
var inst_54804 = (state_54806[(2)]);
var state_54806__$1 = state_54806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54806__$1,inst_54804);
} else {
if((state_val_54807 === (12))){
var state_54806__$1 = state_54806;
var statearr_54824_56804 = state_54806__$1;
(statearr_54824_56804[(2)] = null);

(statearr_54824_56804[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54807 === (2))){
var inst_54781 = (state_54806[(7)]);
var state_54806__$1 = state_54806;
if(cljs.core.truth_(inst_54781)){
var statearr_54825_56805 = state_54806__$1;
(statearr_54825_56805[(1)] = (4));

} else {
var statearr_54826_56806 = state_54806__$1;
(statearr_54826_56806[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54807 === (11))){
var inst_54797 = cljs.core.async.close_BANG_(ch);
var state_54806__$1 = state_54806;
var statearr_54831_56808 = state_54806__$1;
(statearr_54831_56808[(2)] = inst_54797);

(statearr_54831_56808[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54807 === (9))){
var state_54806__$1 = state_54806;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54832_56811 = state_54806__$1;
(statearr_54832_56811[(1)] = (11));

} else {
var statearr_54836_56812 = state_54806__$1;
(statearr_54836_56812[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54807 === (5))){
var inst_54781 = (state_54806[(7)]);
var state_54806__$1 = state_54806;
var statearr_54837_56813 = state_54806__$1;
(statearr_54837_56813[(2)] = inst_54781);

(statearr_54837_56813[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54807 === (10))){
var inst_54802 = (state_54806[(2)]);
var state_54806__$1 = state_54806;
var statearr_54838_56814 = state_54806__$1;
(statearr_54838_56814[(2)] = inst_54802);

(statearr_54838_56814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54807 === (8))){
var inst_54781 = (state_54806[(7)]);
var inst_54793 = cljs.core.next(inst_54781);
var inst_54781__$1 = inst_54793;
var state_54806__$1 = (function (){var statearr_54843 = state_54806;
(statearr_54843[(7)] = inst_54781__$1);

return statearr_54843;
})();
var statearr_54844_56815 = state_54806__$1;
(statearr_54844_56815[(2)] = null);

(statearr_54844_56815[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__53801__auto__ = null;
var cljs$core$async$state_machine__53801__auto____0 = (function (){
var statearr_54845 = [null,null,null,null,null,null,null,null];
(statearr_54845[(0)] = cljs$core$async$state_machine__53801__auto__);

(statearr_54845[(1)] = (1));

return statearr_54845;
});
var cljs$core$async$state_machine__53801__auto____1 = (function (state_54806){
while(true){
var ret_value__53802__auto__ = (function (){try{while(true){
var result__53803__auto__ = switch__53800__auto__(state_54806);
if(cljs.core.keyword_identical_QMARK_(result__53803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53803__auto__;
}
break;
}
}catch (e54846){var ex__53804__auto__ = e54846;
var statearr_54847_56817 = state_54806;
(statearr_54847_56817[(2)] = ex__53804__auto__);


if(cljs.core.seq((state_54806[(4)]))){
var statearr_54848_56818 = state_54806;
(statearr_54848_56818[(1)] = cljs.core.first((state_54806[(4)])));

} else {
throw ex__53804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56819 = state_54806;
state_54806 = G__56819;
continue;
} else {
return ret_value__53802__auto__;
}
break;
}
});
cljs$core$async$state_machine__53801__auto__ = function(state_54806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53801__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53801__auto____1.call(this,state_54806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53801__auto____0;
cljs$core$async$state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53801__auto____1;
return cljs$core$async$state_machine__53801__auto__;
})()
})();
var state__53976__auto__ = (function (){var statearr_54849 = f__53975__auto__();
(statearr_54849[(6)] = c__53974__auto__);

return statearr_54849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53976__auto__);
}));

return c__53974__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__54870 = arguments.length;
switch (G__54870) {
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

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_56822 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_56822(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_56829 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_56829(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_56831 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_56831(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_56835 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_56835(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54886 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54886 = (function (ch,cs,meta54887){
this.ch = ch;
this.cs = cs;
this.meta54887 = meta54887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54888,meta54887__$1){
var self__ = this;
var _54888__$1 = this;
return (new cljs.core.async.t_cljs$core$async54886(self__.ch,self__.cs,meta54887__$1));
}));

(cljs.core.async.t_cljs$core$async54886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54888){
var self__ = this;
var _54888__$1 = this;
return self__.meta54887;
}));

(cljs.core.async.t_cljs$core$async54886.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54886.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async54886.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54886.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async54886.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async54886.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async54886.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta54887","meta54887",231103002,null)], null);
}));

(cljs.core.async.t_cljs$core$async54886.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54886.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54886");

(cljs.core.async.t_cljs$core$async54886.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async54886");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54886.
 */
cljs.core.async.__GT_t_cljs$core$async54886 = (function cljs$core$async$mult_$___GT_t_cljs$core$async54886(ch__$1,cs__$1,meta54887){
return (new cljs.core.async.t_cljs$core$async54886(ch__$1,cs__$1,meta54887));
});

}

return (new cljs.core.async.t_cljs$core$async54886(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__53974__auto___56836 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53975__auto__ = (function (){var switch__53800__auto__ = (function (state_55082){
var state_val_55087 = (state_55082[(1)]);
if((state_val_55087 === (7))){
var inst_55072 = (state_55082[(2)]);
var state_55082__$1 = state_55082;
var statearr_55109_56837 = state_55082__$1;
(statearr_55109_56837[(2)] = inst_55072);

(statearr_55109_56837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (20))){
var inst_54959 = (state_55082[(7)]);
var inst_54974 = cljs.core.first(inst_54959);
var inst_54977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54974,(0),null);
var inst_54979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54974,(1),null);
var state_55082__$1 = (function (){var statearr_55117 = state_55082;
(statearr_55117[(8)] = inst_54977);

return statearr_55117;
})();
if(cljs.core.truth_(inst_54979)){
var statearr_55118_56838 = state_55082__$1;
(statearr_55118_56838[(1)] = (22));

} else {
var statearr_55119_56839 = state_55082__$1;
(statearr_55119_56839[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (27))){
var inst_55014 = (state_55082[(9)]);
var inst_55009 = (state_55082[(10)]);
var inst_54919 = (state_55082[(11)]);
var inst_55007 = (state_55082[(12)]);
var inst_55014__$1 = cljs.core._nth(inst_55007,inst_55009);
var inst_55015 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_55014__$1,inst_54919,done);
var state_55082__$1 = (function (){var statearr_55121 = state_55082;
(statearr_55121[(9)] = inst_55014__$1);

return statearr_55121;
})();
if(cljs.core.truth_(inst_55015)){
var statearr_55122_56840 = state_55082__$1;
(statearr_55122_56840[(1)] = (30));

} else {
var statearr_55123_56841 = state_55082__$1;
(statearr_55123_56841[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (1))){
var state_55082__$1 = state_55082;
var statearr_55124_56842 = state_55082__$1;
(statearr_55124_56842[(2)] = null);

(statearr_55124_56842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (24))){
var inst_54959 = (state_55082[(7)]);
var inst_54984 = (state_55082[(2)]);
var inst_54985 = cljs.core.next(inst_54959);
var inst_54933 = inst_54985;
var inst_54934 = null;
var inst_54935 = (0);
var inst_54936 = (0);
var state_55082__$1 = (function (){var statearr_55134 = state_55082;
(statearr_55134[(13)] = inst_54936);

(statearr_55134[(14)] = inst_54934);

(statearr_55134[(15)] = inst_54984);

(statearr_55134[(16)] = inst_54933);

(statearr_55134[(17)] = inst_54935);

return statearr_55134;
})();
var statearr_55135_56843 = state_55082__$1;
(statearr_55135_56843[(2)] = null);

(statearr_55135_56843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (39))){
var state_55082__$1 = state_55082;
var statearr_55141_56844 = state_55082__$1;
(statearr_55141_56844[(2)] = null);

(statearr_55141_56844[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (4))){
var inst_54919 = (state_55082[(11)]);
var inst_54919__$1 = (state_55082[(2)]);
var inst_54920 = (inst_54919__$1 == null);
var state_55082__$1 = (function (){var statearr_55142 = state_55082;
(statearr_55142[(11)] = inst_54919__$1);

return statearr_55142;
})();
if(cljs.core.truth_(inst_54920)){
var statearr_55143_56845 = state_55082__$1;
(statearr_55143_56845[(1)] = (5));

} else {
var statearr_55144_56846 = state_55082__$1;
(statearr_55144_56846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (15))){
var inst_54936 = (state_55082[(13)]);
var inst_54934 = (state_55082[(14)]);
var inst_54933 = (state_55082[(16)]);
var inst_54935 = (state_55082[(17)]);
var inst_54955 = (state_55082[(2)]);
var inst_54956 = (inst_54936 + (1));
var tmp55138 = inst_54934;
var tmp55139 = inst_54933;
var tmp55140 = inst_54935;
var inst_54933__$1 = tmp55139;
var inst_54934__$1 = tmp55138;
var inst_54935__$1 = tmp55140;
var inst_54936__$1 = inst_54956;
var state_55082__$1 = (function (){var statearr_55145 = state_55082;
(statearr_55145[(13)] = inst_54936__$1);

(statearr_55145[(14)] = inst_54934__$1);

(statearr_55145[(18)] = inst_54955);

(statearr_55145[(16)] = inst_54933__$1);

(statearr_55145[(17)] = inst_54935__$1);

return statearr_55145;
})();
var statearr_55146_56848 = state_55082__$1;
(statearr_55146_56848[(2)] = null);

(statearr_55146_56848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (21))){
var inst_54988 = (state_55082[(2)]);
var state_55082__$1 = state_55082;
var statearr_55152_56851 = state_55082__$1;
(statearr_55152_56851[(2)] = inst_54988);

(statearr_55152_56851[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (31))){
var inst_55014 = (state_55082[(9)]);
var inst_55018 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_55014);
var state_55082__$1 = state_55082;
var statearr_55162_56854 = state_55082__$1;
(statearr_55162_56854[(2)] = inst_55018);

(statearr_55162_56854[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (32))){
var inst_55006 = (state_55082[(19)]);
var inst_55009 = (state_55082[(10)]);
var inst_55008 = (state_55082[(20)]);
var inst_55007 = (state_55082[(12)]);
var inst_55020 = (state_55082[(2)]);
var inst_55021 = (inst_55009 + (1));
var tmp55148 = inst_55006;
var tmp55149 = inst_55008;
var tmp55150 = inst_55007;
var inst_55006__$1 = tmp55148;
var inst_55007__$1 = tmp55150;
var inst_55008__$1 = tmp55149;
var inst_55009__$1 = inst_55021;
var state_55082__$1 = (function (){var statearr_55166 = state_55082;
(statearr_55166[(19)] = inst_55006__$1);

(statearr_55166[(10)] = inst_55009__$1);

(statearr_55166[(20)] = inst_55008__$1);

(statearr_55166[(21)] = inst_55020);

(statearr_55166[(12)] = inst_55007__$1);

return statearr_55166;
})();
var statearr_55168_56861 = state_55082__$1;
(statearr_55168_56861[(2)] = null);

(statearr_55168_56861[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (40))){
var inst_55037 = (state_55082[(22)]);
var inst_55041 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_55037);
var state_55082__$1 = state_55082;
var statearr_55169_56864 = state_55082__$1;
(statearr_55169_56864[(2)] = inst_55041);

(statearr_55169_56864[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (33))){
var inst_55024 = (state_55082[(23)]);
var inst_55026 = cljs.core.chunked_seq_QMARK_(inst_55024);
var state_55082__$1 = state_55082;
if(inst_55026){
var statearr_55179_56865 = state_55082__$1;
(statearr_55179_56865[(1)] = (36));

} else {
var statearr_55180_56866 = state_55082__$1;
(statearr_55180_56866[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (13))){
var inst_54949 = (state_55082[(24)]);
var inst_54952 = cljs.core.async.close_BANG_(inst_54949);
var state_55082__$1 = state_55082;
var statearr_55191_56868 = state_55082__$1;
(statearr_55191_56868[(2)] = inst_54952);

(statearr_55191_56868[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (22))){
var inst_54977 = (state_55082[(8)]);
var inst_54981 = cljs.core.async.close_BANG_(inst_54977);
var state_55082__$1 = state_55082;
var statearr_55192_56870 = state_55082__$1;
(statearr_55192_56870[(2)] = inst_54981);

(statearr_55192_56870[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (36))){
var inst_55024 = (state_55082[(23)]);
var inst_55028 = cljs.core.chunk_first(inst_55024);
var inst_55029 = cljs.core.chunk_rest(inst_55024);
var inst_55030 = cljs.core.count(inst_55028);
var inst_55006 = inst_55029;
var inst_55007 = inst_55028;
var inst_55008 = inst_55030;
var inst_55009 = (0);
var state_55082__$1 = (function (){var statearr_55193 = state_55082;
(statearr_55193[(19)] = inst_55006);

(statearr_55193[(10)] = inst_55009);

(statearr_55193[(20)] = inst_55008);

(statearr_55193[(12)] = inst_55007);

return statearr_55193;
})();
var statearr_55198_56872 = state_55082__$1;
(statearr_55198_56872[(2)] = null);

(statearr_55198_56872[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (41))){
var inst_55024 = (state_55082[(23)]);
var inst_55043 = (state_55082[(2)]);
var inst_55048 = cljs.core.next(inst_55024);
var inst_55006 = inst_55048;
var inst_55007 = null;
var inst_55008 = (0);
var inst_55009 = (0);
var state_55082__$1 = (function (){var statearr_55201 = state_55082;
(statearr_55201[(19)] = inst_55006);

(statearr_55201[(10)] = inst_55009);

(statearr_55201[(20)] = inst_55008);

(statearr_55201[(12)] = inst_55007);

(statearr_55201[(25)] = inst_55043);

return statearr_55201;
})();
var statearr_55202_56877 = state_55082__$1;
(statearr_55202_56877[(2)] = null);

(statearr_55202_56877[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (43))){
var state_55082__$1 = state_55082;
var statearr_55204_56878 = state_55082__$1;
(statearr_55204_56878[(2)] = null);

(statearr_55204_56878[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (29))){
var inst_55056 = (state_55082[(2)]);
var state_55082__$1 = state_55082;
var statearr_55207_56879 = state_55082__$1;
(statearr_55207_56879[(2)] = inst_55056);

(statearr_55207_56879[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (44))){
var inst_55066 = (state_55082[(2)]);
var state_55082__$1 = (function (){var statearr_55208 = state_55082;
(statearr_55208[(26)] = inst_55066);

return statearr_55208;
})();
var statearr_55209_56881 = state_55082__$1;
(statearr_55209_56881[(2)] = null);

(statearr_55209_56881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (6))){
var inst_54998 = (state_55082[(27)]);
var inst_54997 = cljs.core.deref(cs);
var inst_54998__$1 = cljs.core.keys(inst_54997);
var inst_54999 = cljs.core.count(inst_54998__$1);
var inst_55000 = cljs.core.reset_BANG_(dctr,inst_54999);
var inst_55005 = cljs.core.seq(inst_54998__$1);
var inst_55006 = inst_55005;
var inst_55007 = null;
var inst_55008 = (0);
var inst_55009 = (0);
var state_55082__$1 = (function (){var statearr_55212 = state_55082;
(statearr_55212[(19)] = inst_55006);

(statearr_55212[(10)] = inst_55009);

(statearr_55212[(20)] = inst_55008);

(statearr_55212[(27)] = inst_54998__$1);

(statearr_55212[(28)] = inst_55000);

(statearr_55212[(12)] = inst_55007);

return statearr_55212;
})();
var statearr_55215_56882 = state_55082__$1;
(statearr_55215_56882[(2)] = null);

(statearr_55215_56882[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (28))){
var inst_55006 = (state_55082[(19)]);
var inst_55024 = (state_55082[(23)]);
var inst_55024__$1 = cljs.core.seq(inst_55006);
var state_55082__$1 = (function (){var statearr_55223 = state_55082;
(statearr_55223[(23)] = inst_55024__$1);

return statearr_55223;
})();
if(inst_55024__$1){
var statearr_55230_56884 = state_55082__$1;
(statearr_55230_56884[(1)] = (33));

} else {
var statearr_55233_56885 = state_55082__$1;
(statearr_55233_56885[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (25))){
var inst_55009 = (state_55082[(10)]);
var inst_55008 = (state_55082[(20)]);
var inst_55011 = (inst_55009 < inst_55008);
var inst_55012 = inst_55011;
var state_55082__$1 = state_55082;
if(cljs.core.truth_(inst_55012)){
var statearr_55246_56886 = state_55082__$1;
(statearr_55246_56886[(1)] = (27));

} else {
var statearr_55247_56887 = state_55082__$1;
(statearr_55247_56887[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (34))){
var state_55082__$1 = state_55082;
var statearr_55250_56893 = state_55082__$1;
(statearr_55250_56893[(2)] = null);

(statearr_55250_56893[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (17))){
var state_55082__$1 = state_55082;
var statearr_55251_56894 = state_55082__$1;
(statearr_55251_56894[(2)] = null);

(statearr_55251_56894[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (3))){
var inst_55074 = (state_55082[(2)]);
var state_55082__$1 = state_55082;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55082__$1,inst_55074);
} else {
if((state_val_55087 === (12))){
var inst_54993 = (state_55082[(2)]);
var state_55082__$1 = state_55082;
var statearr_55252_56898 = state_55082__$1;
(statearr_55252_56898[(2)] = inst_54993);

(statearr_55252_56898[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (2))){
var state_55082__$1 = state_55082;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55082__$1,(4),ch);
} else {
if((state_val_55087 === (23))){
var state_55082__$1 = state_55082;
var statearr_55255_56902 = state_55082__$1;
(statearr_55255_56902[(2)] = null);

(statearr_55255_56902[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (35))){
var inst_55054 = (state_55082[(2)]);
var state_55082__$1 = state_55082;
var statearr_55256_56903 = state_55082__$1;
(statearr_55256_56903[(2)] = inst_55054);

(statearr_55256_56903[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (19))){
var inst_54959 = (state_55082[(7)]);
var inst_54963 = cljs.core.chunk_first(inst_54959);
var inst_54964 = cljs.core.chunk_rest(inst_54959);
var inst_54965 = cljs.core.count(inst_54963);
var inst_54933 = inst_54964;
var inst_54934 = inst_54963;
var inst_54935 = inst_54965;
var inst_54936 = (0);
var state_55082__$1 = (function (){var statearr_55258 = state_55082;
(statearr_55258[(13)] = inst_54936);

(statearr_55258[(14)] = inst_54934);

(statearr_55258[(16)] = inst_54933);

(statearr_55258[(17)] = inst_54935);

return statearr_55258;
})();
var statearr_55261_56904 = state_55082__$1;
(statearr_55261_56904[(2)] = null);

(statearr_55261_56904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (11))){
var inst_54959 = (state_55082[(7)]);
var inst_54933 = (state_55082[(16)]);
var inst_54959__$1 = cljs.core.seq(inst_54933);
var state_55082__$1 = (function (){var statearr_55264 = state_55082;
(statearr_55264[(7)] = inst_54959__$1);

return statearr_55264;
})();
if(inst_54959__$1){
var statearr_55265_56905 = state_55082__$1;
(statearr_55265_56905[(1)] = (16));

} else {
var statearr_55268_56906 = state_55082__$1;
(statearr_55268_56906[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (9))){
var inst_54995 = (state_55082[(2)]);
var state_55082__$1 = state_55082;
var statearr_55269_56908 = state_55082__$1;
(statearr_55269_56908[(2)] = inst_54995);

(statearr_55269_56908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (5))){
var inst_54931 = cljs.core.deref(cs);
var inst_54932 = cljs.core.seq(inst_54931);
var inst_54933 = inst_54932;
var inst_54934 = null;
var inst_54935 = (0);
var inst_54936 = (0);
var state_55082__$1 = (function (){var statearr_55275 = state_55082;
(statearr_55275[(13)] = inst_54936);

(statearr_55275[(14)] = inst_54934);

(statearr_55275[(16)] = inst_54933);

(statearr_55275[(17)] = inst_54935);

return statearr_55275;
})();
var statearr_55276_56912 = state_55082__$1;
(statearr_55276_56912[(2)] = null);

(statearr_55276_56912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (14))){
var state_55082__$1 = state_55082;
var statearr_55277_56913 = state_55082__$1;
(statearr_55277_56913[(2)] = null);

(statearr_55277_56913[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (45))){
var inst_55063 = (state_55082[(2)]);
var state_55082__$1 = state_55082;
var statearr_55278_56914 = state_55082__$1;
(statearr_55278_56914[(2)] = inst_55063);

(statearr_55278_56914[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (26))){
var inst_54998 = (state_55082[(27)]);
var inst_55058 = (state_55082[(2)]);
var inst_55060 = cljs.core.seq(inst_54998);
var state_55082__$1 = (function (){var statearr_55287 = state_55082;
(statearr_55287[(29)] = inst_55058);

return statearr_55287;
})();
if(inst_55060){
var statearr_55288_56919 = state_55082__$1;
(statearr_55288_56919[(1)] = (42));

} else {
var statearr_55289_56920 = state_55082__$1;
(statearr_55289_56920[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (16))){
var inst_54959 = (state_55082[(7)]);
var inst_54961 = cljs.core.chunked_seq_QMARK_(inst_54959);
var state_55082__$1 = state_55082;
if(inst_54961){
var statearr_55294_56921 = state_55082__$1;
(statearr_55294_56921[(1)] = (19));

} else {
var statearr_55295_56922 = state_55082__$1;
(statearr_55295_56922[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (38))){
var inst_55051 = (state_55082[(2)]);
var state_55082__$1 = state_55082;
var statearr_55300_56923 = state_55082__$1;
(statearr_55300_56923[(2)] = inst_55051);

(statearr_55300_56923[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (30))){
var state_55082__$1 = state_55082;
var statearr_55305_56924 = state_55082__$1;
(statearr_55305_56924[(2)] = null);

(statearr_55305_56924[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (10))){
var inst_54936 = (state_55082[(13)]);
var inst_54934 = (state_55082[(14)]);
var inst_54948 = cljs.core._nth(inst_54934,inst_54936);
var inst_54949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54948,(0),null);
var inst_54950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54948,(1),null);
var state_55082__$1 = (function (){var statearr_55311 = state_55082;
(statearr_55311[(24)] = inst_54949);

return statearr_55311;
})();
if(cljs.core.truth_(inst_54950)){
var statearr_55318_56925 = state_55082__$1;
(statearr_55318_56925[(1)] = (13));

} else {
var statearr_55320_56926 = state_55082__$1;
(statearr_55320_56926[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (18))){
var inst_54991 = (state_55082[(2)]);
var state_55082__$1 = state_55082;
var statearr_55321_56927 = state_55082__$1;
(statearr_55321_56927[(2)] = inst_54991);

(statearr_55321_56927[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (42))){
var state_55082__$1 = state_55082;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55082__$1,(45),dchan);
} else {
if((state_val_55087 === (37))){
var inst_55024 = (state_55082[(23)]);
var inst_55037 = (state_55082[(22)]);
var inst_54919 = (state_55082[(11)]);
var inst_55037__$1 = cljs.core.first(inst_55024);
var inst_55038 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_55037__$1,inst_54919,done);
var state_55082__$1 = (function (){var statearr_55327 = state_55082;
(statearr_55327[(22)] = inst_55037__$1);

return statearr_55327;
})();
if(cljs.core.truth_(inst_55038)){
var statearr_55328_56928 = state_55082__$1;
(statearr_55328_56928[(1)] = (39));

} else {
var statearr_55332_56929 = state_55082__$1;
(statearr_55332_56929[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55087 === (8))){
var inst_54936 = (state_55082[(13)]);
var inst_54935 = (state_55082[(17)]);
var inst_54942 = (inst_54936 < inst_54935);
var inst_54943 = inst_54942;
var state_55082__$1 = state_55082;
if(cljs.core.truth_(inst_54943)){
var statearr_55334_56930 = state_55082__$1;
(statearr_55334_56930[(1)] = (10));

} else {
var statearr_55335_56931 = state_55082__$1;
(statearr_55335_56931[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__53801__auto__ = null;
var cljs$core$async$mult_$_state_machine__53801__auto____0 = (function (){
var statearr_55340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55340[(0)] = cljs$core$async$mult_$_state_machine__53801__auto__);

(statearr_55340[(1)] = (1));

return statearr_55340;
});
var cljs$core$async$mult_$_state_machine__53801__auto____1 = (function (state_55082){
while(true){
var ret_value__53802__auto__ = (function (){try{while(true){
var result__53803__auto__ = switch__53800__auto__(state_55082);
if(cljs.core.keyword_identical_QMARK_(result__53803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53803__auto__;
}
break;
}
}catch (e55348){var ex__53804__auto__ = e55348;
var statearr_55349_56932 = state_55082;
(statearr_55349_56932[(2)] = ex__53804__auto__);


if(cljs.core.seq((state_55082[(4)]))){
var statearr_55351_56933 = state_55082;
(statearr_55351_56933[(1)] = cljs.core.first((state_55082[(4)])));

} else {
throw ex__53804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56934 = state_55082;
state_55082 = G__56934;
continue;
} else {
return ret_value__53802__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__53801__auto__ = function(state_55082){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__53801__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__53801__auto____1.call(this,state_55082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__53801__auto____0;
cljs$core$async$mult_$_state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__53801__auto____1;
return cljs$core$async$mult_$_state_machine__53801__auto__;
})()
})();
var state__53976__auto__ = (function (){var statearr_55355 = f__53975__auto__();
(statearr_55355[(6)] = c__53974__auto___56836);

return statearr_55355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53976__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__55363 = arguments.length;
switch (G__55363) {
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

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

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

var cljs$core$async$Mix$admix_STAR_$dyn_56937 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_56937(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_56939 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_56939(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_56944 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_56944(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_56948 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_56948(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_56952 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_56952(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___56956 = arguments.length;
var i__5770__auto___56957 = (0);
while(true){
if((i__5770__auto___56957 < len__5769__auto___56956)){
args__5775__auto__.push((arguments[i__5770__auto___56957]));

var G__56961 = (i__5770__auto___56957 + (1));
i__5770__auto___56957 = G__56961;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__55394){
var map__55395 = p__55394;
var map__55395__$1 = cljs.core.__destructure_map(map__55395);
var opts = map__55395__$1;
var statearr_55396_56962 = state;
(statearr_55396_56962[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_55397_56963 = state;
(statearr_55397_56963[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_55403_56964 = state;
(statearr_55403_56964[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq55390){
var G__55391 = cljs.core.first(seq55390);
var seq55390__$1 = cljs.core.next(seq55390);
var G__55392 = cljs.core.first(seq55390__$1);
var seq55390__$2 = cljs.core.next(seq55390__$1);
var G__55393 = cljs.core.first(seq55390__$2);
var seq55390__$3 = cljs.core.next(seq55390__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55391,G__55392,G__55393,seq55390__$3);
}));

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
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55414 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55414 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta55415){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta55415 = meta55415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55416,meta55415__$1){
var self__ = this;
var _55416__$1 = this;
return (new cljs.core.async.t_cljs$core$async55414(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta55415__$1));
}));

(cljs.core.async.t_cljs$core$async55414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55416){
var self__ = this;
var _55416__$1 = this;
return self__.meta55415;
}));

(cljs.core.async.t_cljs$core$async55414.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55414.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async55414.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55414.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55414.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55414.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55414.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55414.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55414.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta55415","meta55415",896917723,null)], null);
}));

(cljs.core.async.t_cljs$core$async55414.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55414");

(cljs.core.async.t_cljs$core$async55414.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async55414");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55414.
 */
cljs.core.async.__GT_t_cljs$core$async55414 = (function cljs$core$async$mix_$___GT_t_cljs$core$async55414(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta55415){
return (new cljs.core.async.t_cljs$core$async55414(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta55415));
});

}

return (new cljs.core.async.t_cljs$core$async55414(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__53974__auto___56971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53975__auto__ = (function (){var switch__53800__auto__ = (function (state_55520){
var state_val_55521 = (state_55520[(1)]);
if((state_val_55521 === (7))){
var inst_55480 = (state_55520[(2)]);
var state_55520__$1 = state_55520;
if(cljs.core.truth_(inst_55480)){
var statearr_55526_56973 = state_55520__$1;
(statearr_55526_56973[(1)] = (8));

} else {
var statearr_55527_56975 = state_55520__$1;
(statearr_55527_56975[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55521 === (20))){
var inst_55473 = (state_55520[(7)]);
var state_55520__$1 = state_55520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55520__$1,(23),out,inst_55473);
} else {
if((state_val_55521 === (1))){
var inst_55456 = calc_state();
var inst_55457 = cljs.core.__destructure_map(inst_55456);
var inst_55458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55457,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_55459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55457,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_55460 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55457,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_55461 = inst_55456;
var state_55520__$1 = (function (){var statearr_55534 = state_55520;
(statearr_55534[(8)] = inst_55458);

(statearr_55534[(9)] = inst_55460);

(statearr_55534[(10)] = inst_55461);

(statearr_55534[(11)] = inst_55459);

return statearr_55534;
})();
var statearr_55535_56980 = state_55520__$1;
(statearr_55535_56980[(2)] = null);

(statearr_55535_56980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55521 === (24))){
var inst_55464 = (state_55520[(12)]);
var inst_55461 = inst_55464;
var state_55520__$1 = (function (){var statearr_55539 = state_55520;
(statearr_55539[(10)] = inst_55461);

return statearr_55539;
})();
var statearr_55540_56981 = state_55520__$1;
(statearr_55540_56981[(2)] = null);

(statearr_55540_56981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55521 === (4))){
var inst_55475 = (state_55520[(13)]);
var inst_55473 = (state_55520[(7)]);
var inst_55472 = (state_55520[(2)]);
var inst_55473__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55472,(0),null);
var inst_55474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55472,(1),null);
var inst_55475__$1 = (inst_55473__$1 == null);
var state_55520__$1 = (function (){var statearr_55544 = state_55520;
(statearr_55544[(13)] = inst_55475__$1);

(statearr_55544[(14)] = inst_55474);

(statearr_55544[(7)] = inst_55473__$1);

return statearr_55544;
})();
if(cljs.core.truth_(inst_55475__$1)){
var statearr_55545_56982 = state_55520__$1;
(statearr_55545_56982[(1)] = (5));

} else {
var statearr_55546_56983 = state_55520__$1;
(statearr_55546_56983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55521 === (15))){
var inst_55494 = (state_55520[(15)]);
var inst_55465 = (state_55520[(16)]);
var inst_55494__$1 = cljs.core.empty_QMARK_(inst_55465);
var state_55520__$1 = (function (){var statearr_55547 = state_55520;
(statearr_55547[(15)] = inst_55494__$1);

return statearr_55547;
})();
if(inst_55494__$1){
var statearr_55548_56988 = state_55520__$1;
(statearr_55548_56988[(1)] = (17));

} else {
var statearr_55551_56989 = state_55520__$1;
(statearr_55551_56989[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55521 === (21))){
var inst_55464 = (state_55520[(12)]);
var inst_55461 = inst_55464;
var state_55520__$1 = (function (){var statearr_55552 = state_55520;
(statearr_55552[(10)] = inst_55461);

return statearr_55552;
})();
var statearr_55553_56990 = state_55520__$1;
(statearr_55553_56990[(2)] = null);

(statearr_55553_56990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55521 === (13))){
var inst_55487 = (state_55520[(2)]);
var inst_55488 = calc_state();
var inst_55461 = inst_55488;
var state_55520__$1 = (function (){var statearr_55554 = state_55520;
(statearr_55554[(10)] = inst_55461);

(statearr_55554[(17)] = inst_55487);

return statearr_55554;
})();
var statearr_55555_56992 = state_55520__$1;
(statearr_55555_56992[(2)] = null);

(statearr_55555_56992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55521 === (22))){
var inst_55514 = (state_55520[(2)]);
var state_55520__$1 = state_55520;
var statearr_55556_56993 = state_55520__$1;
(statearr_55556_56993[(2)] = inst_55514);

(statearr_55556_56993[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55521 === (6))){
var inst_55474 = (state_55520[(14)]);
var inst_55478 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55474,change);
var state_55520__$1 = state_55520;
var statearr_55557_56995 = state_55520__$1;
(statearr_55557_56995[(2)] = inst_55478);

(statearr_55557_56995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55521 === (25))){
var state_55520__$1 = state_55520;
var statearr_55558_56996 = state_55520__$1;
(statearr_55558_56996[(2)] = null);

(statearr_55558_56996[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55521 === (17))){
var inst_55474 = (state_55520[(14)]);
var inst_55466 = (state_55520[(18)]);
var inst_55496 = (inst_55466.cljs$core$IFn$_invoke$arity$1 ? inst_55466.cljs$core$IFn$_invoke$arity$1(inst_55474) : inst_55466.call(null,inst_55474));
var inst_55497 = cljs.core.not(inst_55496);
var state_55520__$1 = state_55520;
var statearr_55559_57004 = state_55520__$1;
(statearr_55559_57004[(2)] = inst_55497);

(statearr_55559_57004[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55521 === (3))){
var inst_55518 = (state_55520[(2)]);
var state_55520__$1 = state_55520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55520__$1,inst_55518);
} else {
if((state_val_55521 === (12))){
var state_55520__$1 = state_55520;
var statearr_55572_57006 = state_55520__$1;
(statearr_55572_57006[(2)] = null);

(statearr_55572_57006[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55521 === (2))){
var inst_55461 = (state_55520[(10)]);
var inst_55464 = (state_55520[(12)]);
var inst_55464__$1 = cljs.core.__destructure_map(inst_55461);
var inst_55465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55464__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_55466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55464__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_55467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55464__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_55520__$1 = (function (){var statearr_55574 = state_55520;
(statearr_55574[(18)] = inst_55466);

(statearr_55574[(12)] = inst_55464__$1);

(statearr_55574[(16)] = inst_55465);

return statearr_55574;
})();
return cljs.core.async.ioc_alts_BANG_(state_55520__$1,(4),inst_55467);
} else {
if((state_val_55521 === (23))){
var inst_55505 = (state_55520[(2)]);
var state_55520__$1 = state_55520;
if(cljs.core.truth_(inst_55505)){
var statearr_55575_57023 = state_55520__$1;
(statearr_55575_57023[(1)] = (24));

} else {
var statearr_55578_57024 = state_55520__$1;
(statearr_55578_57024[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55521 === (19))){
var inst_55500 = (state_55520[(2)]);
var state_55520__$1 = state_55520;
var statearr_55579_57026 = state_55520__$1;
(statearr_55579_57026[(2)] = inst_55500);

(statearr_55579_57026[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55521 === (11))){
var inst_55474 = (state_55520[(14)]);
var inst_55484 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_55474);
var state_55520__$1 = state_55520;
var statearr_55580_57028 = state_55520__$1;
(statearr_55580_57028[(2)] = inst_55484);

(statearr_55580_57028[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55521 === (9))){
var inst_55474 = (state_55520[(14)]);
var inst_55491 = (state_55520[(19)]);
var inst_55465 = (state_55520[(16)]);
var inst_55491__$1 = (inst_55465.cljs$core$IFn$_invoke$arity$1 ? inst_55465.cljs$core$IFn$_invoke$arity$1(inst_55474) : inst_55465.call(null,inst_55474));
var state_55520__$1 = (function (){var statearr_55581 = state_55520;
(statearr_55581[(19)] = inst_55491__$1);

return statearr_55581;
})();
if(cljs.core.truth_(inst_55491__$1)){
var statearr_55582_57029 = state_55520__$1;
(statearr_55582_57029[(1)] = (14));

} else {
var statearr_55583_57030 = state_55520__$1;
(statearr_55583_57030[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55521 === (5))){
var inst_55475 = (state_55520[(13)]);
var state_55520__$1 = state_55520;
var statearr_55584_57031 = state_55520__$1;
(statearr_55584_57031[(2)] = inst_55475);

(statearr_55584_57031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55521 === (14))){
var inst_55491 = (state_55520[(19)]);
var state_55520__$1 = state_55520;
var statearr_55585_57036 = state_55520__$1;
(statearr_55585_57036[(2)] = inst_55491);

(statearr_55585_57036[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55521 === (26))){
var inst_55510 = (state_55520[(2)]);
var state_55520__$1 = state_55520;
var statearr_55586_57038 = state_55520__$1;
(statearr_55586_57038[(2)] = inst_55510);

(statearr_55586_57038[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55521 === (16))){
var inst_55502 = (state_55520[(2)]);
var state_55520__$1 = state_55520;
if(cljs.core.truth_(inst_55502)){
var statearr_55587_57039 = state_55520__$1;
(statearr_55587_57039[(1)] = (20));

} else {
var statearr_55588_57040 = state_55520__$1;
(statearr_55588_57040[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55521 === (10))){
var inst_55516 = (state_55520[(2)]);
var state_55520__$1 = state_55520;
var statearr_55591_57041 = state_55520__$1;
(statearr_55591_57041[(2)] = inst_55516);

(statearr_55591_57041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55521 === (18))){
var inst_55494 = (state_55520[(15)]);
var state_55520__$1 = state_55520;
var statearr_55593_57043 = state_55520__$1;
(statearr_55593_57043[(2)] = inst_55494);

(statearr_55593_57043[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55521 === (8))){
var inst_55473 = (state_55520[(7)]);
var inst_55482 = (inst_55473 == null);
var state_55520__$1 = state_55520;
if(cljs.core.truth_(inst_55482)){
var statearr_55594_57044 = state_55520__$1;
(statearr_55594_57044[(1)] = (11));

} else {
var statearr_55595_57045 = state_55520__$1;
(statearr_55595_57045[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__53801__auto__ = null;
var cljs$core$async$mix_$_state_machine__53801__auto____0 = (function (){
var statearr_55596 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55596[(0)] = cljs$core$async$mix_$_state_machine__53801__auto__);

(statearr_55596[(1)] = (1));

return statearr_55596;
});
var cljs$core$async$mix_$_state_machine__53801__auto____1 = (function (state_55520){
while(true){
var ret_value__53802__auto__ = (function (){try{while(true){
var result__53803__auto__ = switch__53800__auto__(state_55520);
if(cljs.core.keyword_identical_QMARK_(result__53803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53803__auto__;
}
break;
}
}catch (e55598){var ex__53804__auto__ = e55598;
var statearr_55599_57046 = state_55520;
(statearr_55599_57046[(2)] = ex__53804__auto__);


if(cljs.core.seq((state_55520[(4)]))){
var statearr_55601_57047 = state_55520;
(statearr_55601_57047[(1)] = cljs.core.first((state_55520[(4)])));

} else {
throw ex__53804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57048 = state_55520;
state_55520 = G__57048;
continue;
} else {
return ret_value__53802__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__53801__auto__ = function(state_55520){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__53801__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__53801__auto____1.call(this,state_55520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__53801__auto____0;
cljs$core$async$mix_$_state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__53801__auto____1;
return cljs$core$async$mix_$_state_machine__53801__auto__;
})()
})();
var state__53976__auto__ = (function (){var statearr_55602 = f__53975__auto__();
(statearr_55602[(6)] = c__53974__auto___56971);

return statearr_55602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53976__auto__);
}));


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

var cljs$core$async$Pub$sub_STAR_$dyn_57049 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_57049(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_57052 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_57052(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_57053 = (function() {
var G__57054 = null;
var G__57054__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__57054__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__57054 = function(p,v){
switch(arguments.length){
case 1:
return G__57054__1.call(this,p);
case 2:
return G__57054__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__57054.cljs$core$IFn$_invoke$arity$1 = G__57054__1;
G__57054.cljs$core$IFn$_invoke$arity$2 = G__57054__2;
return G__57054;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__55615 = arguments.length;
switch (G__55615) {
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

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_57053(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_57053(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__55622 = arguments.length;
switch (G__55622) {
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

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__55620_SHARP_){
if(cljs.core.truth_((p1__55620_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__55620_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__55620_SHARP_.call(null,topic)))){
return p1__55620_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__55620_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55625 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55625 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta55626){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta55626 = meta55626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55627,meta55626__$1){
var self__ = this;
var _55627__$1 = this;
return (new cljs.core.async.t_cljs$core$async55625(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta55626__$1));
}));

(cljs.core.async.t_cljs$core$async55625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55627){
var self__ = this;
var _55627__$1 = this;
return self__.meta55626;
}));

(cljs.core.async.t_cljs$core$async55625.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55625.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async55625.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55625.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async55625.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async55625.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async55625.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async55625.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta55626","meta55626",667087710,null)], null);
}));

(cljs.core.async.t_cljs$core$async55625.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55625.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55625");

(cljs.core.async.t_cljs$core$async55625.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async55625");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55625.
 */
cljs.core.async.__GT_t_cljs$core$async55625 = (function cljs$core$async$__GT_t_cljs$core$async55625(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta55626){
return (new cljs.core.async.t_cljs$core$async55625(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta55626));
});

}

return (new cljs.core.async.t_cljs$core$async55625(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__53974__auto___57068 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53975__auto__ = (function (){var switch__53800__auto__ = (function (state_55719){
var state_val_55720 = (state_55719[(1)]);
if((state_val_55720 === (7))){
var inst_55715 = (state_55719[(2)]);
var state_55719__$1 = state_55719;
var statearr_55721_57069 = state_55719__$1;
(statearr_55721_57069[(2)] = inst_55715);

(statearr_55721_57069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55720 === (20))){
var state_55719__$1 = state_55719;
var statearr_55724_57070 = state_55719__$1;
(statearr_55724_57070[(2)] = null);

(statearr_55724_57070[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55720 === (1))){
var state_55719__$1 = state_55719;
var statearr_55726_57074 = state_55719__$1;
(statearr_55726_57074[(2)] = null);

(statearr_55726_57074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55720 === (24))){
var inst_55697 = (state_55719[(7)]);
var inst_55707 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_55697);
var state_55719__$1 = state_55719;
var statearr_55729_57075 = state_55719__$1;
(statearr_55729_57075[(2)] = inst_55707);

(statearr_55729_57075[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55720 === (4))){
var inst_55642 = (state_55719[(8)]);
var inst_55642__$1 = (state_55719[(2)]);
var inst_55643 = (inst_55642__$1 == null);
var state_55719__$1 = (function (){var statearr_55730 = state_55719;
(statearr_55730[(8)] = inst_55642__$1);

return statearr_55730;
})();
if(cljs.core.truth_(inst_55643)){
var statearr_55731_57076 = state_55719__$1;
(statearr_55731_57076[(1)] = (5));

} else {
var statearr_55732_57077 = state_55719__$1;
(statearr_55732_57077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55720 === (15))){
var inst_55685 = (state_55719[(2)]);
var state_55719__$1 = state_55719;
var statearr_55733_57078 = state_55719__$1;
(statearr_55733_57078[(2)] = inst_55685);

(statearr_55733_57078[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55720 === (21))){
var inst_55712 = (state_55719[(2)]);
var state_55719__$1 = (function (){var statearr_55734 = state_55719;
(statearr_55734[(9)] = inst_55712);

return statearr_55734;
})();
var statearr_55735_57079 = state_55719__$1;
(statearr_55735_57079[(2)] = null);

(statearr_55735_57079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55720 === (13))){
var inst_55666 = (state_55719[(10)]);
var inst_55668 = cljs.core.chunked_seq_QMARK_(inst_55666);
var state_55719__$1 = state_55719;
if(inst_55668){
var statearr_55736_57080 = state_55719__$1;
(statearr_55736_57080[(1)] = (16));

} else {
var statearr_55737_57081 = state_55719__$1;
(statearr_55737_57081[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55720 === (22))){
var inst_55704 = (state_55719[(2)]);
var state_55719__$1 = state_55719;
if(cljs.core.truth_(inst_55704)){
var statearr_55738_57082 = state_55719__$1;
(statearr_55738_57082[(1)] = (23));

} else {
var statearr_55739_57083 = state_55719__$1;
(statearr_55739_57083[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55720 === (6))){
var inst_55642 = (state_55719[(8)]);
var inst_55697 = (state_55719[(7)]);
var inst_55699 = (state_55719[(11)]);
var inst_55697__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_55642) : topic_fn.call(null,inst_55642));
var inst_55698 = cljs.core.deref(mults);
var inst_55699__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55698,inst_55697__$1);
var state_55719__$1 = (function (){var statearr_55748 = state_55719;
(statearr_55748[(7)] = inst_55697__$1);

(statearr_55748[(11)] = inst_55699__$1);

return statearr_55748;
})();
if(cljs.core.truth_(inst_55699__$1)){
var statearr_55749_57084 = state_55719__$1;
(statearr_55749_57084[(1)] = (19));

} else {
var statearr_55750_57085 = state_55719__$1;
(statearr_55750_57085[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55720 === (25))){
var inst_55709 = (state_55719[(2)]);
var state_55719__$1 = state_55719;
var statearr_55751_57086 = state_55719__$1;
(statearr_55751_57086[(2)] = inst_55709);

(statearr_55751_57086[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55720 === (17))){
var inst_55666 = (state_55719[(10)]);
var inst_55675 = cljs.core.first(inst_55666);
var inst_55676 = cljs.core.async.muxch_STAR_(inst_55675);
var inst_55677 = cljs.core.async.close_BANG_(inst_55676);
var inst_55679 = cljs.core.next(inst_55666);
var inst_55652 = inst_55679;
var inst_55653 = null;
var inst_55654 = (0);
var inst_55655 = (0);
var state_55719__$1 = (function (){var statearr_55752 = state_55719;
(statearr_55752[(12)] = inst_55653);

(statearr_55752[(13)] = inst_55655);

(statearr_55752[(14)] = inst_55677);

(statearr_55752[(15)] = inst_55652);

(statearr_55752[(16)] = inst_55654);

return statearr_55752;
})();
var statearr_55754_57088 = state_55719__$1;
(statearr_55754_57088[(2)] = null);

(statearr_55754_57088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55720 === (3))){
var inst_55717 = (state_55719[(2)]);
var state_55719__$1 = state_55719;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55719__$1,inst_55717);
} else {
if((state_val_55720 === (12))){
var inst_55687 = (state_55719[(2)]);
var state_55719__$1 = state_55719;
var statearr_55757_57090 = state_55719__$1;
(statearr_55757_57090[(2)] = inst_55687);

(statearr_55757_57090[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55720 === (2))){
var state_55719__$1 = state_55719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55719__$1,(4),ch);
} else {
if((state_val_55720 === (23))){
var state_55719__$1 = state_55719;
var statearr_55758_57091 = state_55719__$1;
(statearr_55758_57091[(2)] = null);

(statearr_55758_57091[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55720 === (19))){
var inst_55642 = (state_55719[(8)]);
var inst_55699 = (state_55719[(11)]);
var inst_55702 = cljs.core.async.muxch_STAR_(inst_55699);
var state_55719__$1 = state_55719;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55719__$1,(22),inst_55702,inst_55642);
} else {
if((state_val_55720 === (11))){
var inst_55666 = (state_55719[(10)]);
var inst_55652 = (state_55719[(15)]);
var inst_55666__$1 = cljs.core.seq(inst_55652);
var state_55719__$1 = (function (){var statearr_55766 = state_55719;
(statearr_55766[(10)] = inst_55666__$1);

return statearr_55766;
})();
if(inst_55666__$1){
var statearr_55767_57092 = state_55719__$1;
(statearr_55767_57092[(1)] = (13));

} else {
var statearr_55768_57093 = state_55719__$1;
(statearr_55768_57093[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55720 === (9))){
var inst_55689 = (state_55719[(2)]);
var state_55719__$1 = state_55719;
var statearr_55769_57098 = state_55719__$1;
(statearr_55769_57098[(2)] = inst_55689);

(statearr_55769_57098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55720 === (5))){
var inst_55649 = cljs.core.deref(mults);
var inst_55650 = cljs.core.vals(inst_55649);
var inst_55651 = cljs.core.seq(inst_55650);
var inst_55652 = inst_55651;
var inst_55653 = null;
var inst_55654 = (0);
var inst_55655 = (0);
var state_55719__$1 = (function (){var statearr_55770 = state_55719;
(statearr_55770[(12)] = inst_55653);

(statearr_55770[(13)] = inst_55655);

(statearr_55770[(15)] = inst_55652);

(statearr_55770[(16)] = inst_55654);

return statearr_55770;
})();
var statearr_55771_57099 = state_55719__$1;
(statearr_55771_57099[(2)] = null);

(statearr_55771_57099[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55720 === (14))){
var state_55719__$1 = state_55719;
var statearr_55777_57100 = state_55719__$1;
(statearr_55777_57100[(2)] = null);

(statearr_55777_57100[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55720 === (16))){
var inst_55666 = (state_55719[(10)]);
var inst_55670 = cljs.core.chunk_first(inst_55666);
var inst_55671 = cljs.core.chunk_rest(inst_55666);
var inst_55672 = cljs.core.count(inst_55670);
var inst_55652 = inst_55671;
var inst_55653 = inst_55670;
var inst_55654 = inst_55672;
var inst_55655 = (0);
var state_55719__$1 = (function (){var statearr_55778 = state_55719;
(statearr_55778[(12)] = inst_55653);

(statearr_55778[(13)] = inst_55655);

(statearr_55778[(15)] = inst_55652);

(statearr_55778[(16)] = inst_55654);

return statearr_55778;
})();
var statearr_55779_57104 = state_55719__$1;
(statearr_55779_57104[(2)] = null);

(statearr_55779_57104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55720 === (10))){
var inst_55653 = (state_55719[(12)]);
var inst_55655 = (state_55719[(13)]);
var inst_55652 = (state_55719[(15)]);
var inst_55654 = (state_55719[(16)]);
var inst_55660 = cljs.core._nth(inst_55653,inst_55655);
var inst_55661 = cljs.core.async.muxch_STAR_(inst_55660);
var inst_55662 = cljs.core.async.close_BANG_(inst_55661);
var inst_55663 = (inst_55655 + (1));
var tmp55774 = inst_55653;
var tmp55775 = inst_55652;
var tmp55776 = inst_55654;
var inst_55652__$1 = tmp55775;
var inst_55653__$1 = tmp55774;
var inst_55654__$1 = tmp55776;
var inst_55655__$1 = inst_55663;
var state_55719__$1 = (function (){var statearr_55784 = state_55719;
(statearr_55784[(12)] = inst_55653__$1);

(statearr_55784[(13)] = inst_55655__$1);

(statearr_55784[(15)] = inst_55652__$1);

(statearr_55784[(17)] = inst_55662);

(statearr_55784[(16)] = inst_55654__$1);

return statearr_55784;
})();
var statearr_55785_57105 = state_55719__$1;
(statearr_55785_57105[(2)] = null);

(statearr_55785_57105[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55720 === (18))){
var inst_55682 = (state_55719[(2)]);
var state_55719__$1 = state_55719;
var statearr_55786_57106 = state_55719__$1;
(statearr_55786_57106[(2)] = inst_55682);

(statearr_55786_57106[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55720 === (8))){
var inst_55655 = (state_55719[(13)]);
var inst_55654 = (state_55719[(16)]);
var inst_55657 = (inst_55655 < inst_55654);
var inst_55658 = inst_55657;
var state_55719__$1 = state_55719;
if(cljs.core.truth_(inst_55658)){
var statearr_55787_57107 = state_55719__$1;
(statearr_55787_57107[(1)] = (10));

} else {
var statearr_55788_57108 = state_55719__$1;
(statearr_55788_57108[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__53801__auto__ = null;
var cljs$core$async$state_machine__53801__auto____0 = (function (){
var statearr_55789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55789[(0)] = cljs$core$async$state_machine__53801__auto__);

(statearr_55789[(1)] = (1));

return statearr_55789;
});
var cljs$core$async$state_machine__53801__auto____1 = (function (state_55719){
while(true){
var ret_value__53802__auto__ = (function (){try{while(true){
var result__53803__auto__ = switch__53800__auto__(state_55719);
if(cljs.core.keyword_identical_QMARK_(result__53803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53803__auto__;
}
break;
}
}catch (e55790){var ex__53804__auto__ = e55790;
var statearr_55791_57112 = state_55719;
(statearr_55791_57112[(2)] = ex__53804__auto__);


if(cljs.core.seq((state_55719[(4)]))){
var statearr_55792_57113 = state_55719;
(statearr_55792_57113[(1)] = cljs.core.first((state_55719[(4)])));

} else {
throw ex__53804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57114 = state_55719;
state_55719 = G__57114;
continue;
} else {
return ret_value__53802__auto__;
}
break;
}
});
cljs$core$async$state_machine__53801__auto__ = function(state_55719){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53801__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53801__auto____1.call(this,state_55719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53801__auto____0;
cljs$core$async$state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53801__auto____1;
return cljs$core$async$state_machine__53801__auto__;
})()
})();
var state__53976__auto__ = (function (){var statearr_55795 = f__53975__auto__();
(statearr_55795[(6)] = c__53974__auto___57068);

return statearr_55795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53976__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__55797 = arguments.length;
switch (G__55797) {
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

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

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
var G__55806 = arguments.length;
switch (G__55806) {
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

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__55810 = arguments.length;
switch (G__55810) {
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

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__53974__auto___57121 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53975__auto__ = (function (){var switch__53800__auto__ = (function (state_55860){
var state_val_55861 = (state_55860[(1)]);
if((state_val_55861 === (7))){
var state_55860__$1 = state_55860;
var statearr_55863_57122 = state_55860__$1;
(statearr_55863_57122[(2)] = null);

(statearr_55863_57122[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55861 === (1))){
var state_55860__$1 = state_55860;
var statearr_55864_57123 = state_55860__$1;
(statearr_55864_57123[(2)] = null);

(statearr_55864_57123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55861 === (4))){
var inst_55818 = (state_55860[(7)]);
var inst_55819 = (state_55860[(8)]);
var inst_55821 = (inst_55819 < inst_55818);
var state_55860__$1 = state_55860;
if(cljs.core.truth_(inst_55821)){
var statearr_55865_57125 = state_55860__$1;
(statearr_55865_57125[(1)] = (6));

} else {
var statearr_55867_57126 = state_55860__$1;
(statearr_55867_57126[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55861 === (15))){
var inst_55846 = (state_55860[(9)]);
var inst_55851 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_55846);
var state_55860__$1 = state_55860;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55860__$1,(17),out,inst_55851);
} else {
if((state_val_55861 === (13))){
var inst_55846 = (state_55860[(9)]);
var inst_55846__$1 = (state_55860[(2)]);
var inst_55847 = cljs.core.some(cljs.core.nil_QMARK_,inst_55846__$1);
var state_55860__$1 = (function (){var statearr_55872 = state_55860;
(statearr_55872[(9)] = inst_55846__$1);

return statearr_55872;
})();
if(cljs.core.truth_(inst_55847)){
var statearr_55873_57129 = state_55860__$1;
(statearr_55873_57129[(1)] = (14));

} else {
var statearr_55874_57130 = state_55860__$1;
(statearr_55874_57130[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55861 === (6))){
var state_55860__$1 = state_55860;
var statearr_55875_57131 = state_55860__$1;
(statearr_55875_57131[(2)] = null);

(statearr_55875_57131[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55861 === (17))){
var inst_55853 = (state_55860[(2)]);
var state_55860__$1 = (function (){var statearr_55882 = state_55860;
(statearr_55882[(10)] = inst_55853);

return statearr_55882;
})();
var statearr_55883_57132 = state_55860__$1;
(statearr_55883_57132[(2)] = null);

(statearr_55883_57132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55861 === (3))){
var inst_55858 = (state_55860[(2)]);
var state_55860__$1 = state_55860;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55860__$1,inst_55858);
} else {
if((state_val_55861 === (12))){
var _ = (function (){var statearr_55885 = state_55860;
(statearr_55885[(4)] = cljs.core.rest((state_55860[(4)])));

return statearr_55885;
})();
var state_55860__$1 = state_55860;
var ex55880 = (state_55860__$1[(2)]);
var statearr_55887_57133 = state_55860__$1;
(statearr_55887_57133[(5)] = ex55880);


if((ex55880 instanceof Object)){
var statearr_55888_57135 = state_55860__$1;
(statearr_55888_57135[(1)] = (11));

(statearr_55888_57135[(5)] = null);

} else {
throw ex55880;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55861 === (2))){
var inst_55817 = cljs.core.reset_BANG_(dctr,cnt);
var inst_55818 = cnt;
var inst_55819 = (0);
var state_55860__$1 = (function (){var statearr_55891 = state_55860;
(statearr_55891[(7)] = inst_55818);

(statearr_55891[(8)] = inst_55819);

(statearr_55891[(11)] = inst_55817);

return statearr_55891;
})();
var statearr_55893_57136 = state_55860__$1;
(statearr_55893_57136[(2)] = null);

(statearr_55893_57136[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55861 === (11))){
var inst_55824 = (state_55860[(2)]);
var inst_55826 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_55860__$1 = (function (){var statearr_55894 = state_55860;
(statearr_55894[(12)] = inst_55824);

return statearr_55894;
})();
var statearr_55895_57137 = state_55860__$1;
(statearr_55895_57137[(2)] = inst_55826);

(statearr_55895_57137[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55861 === (9))){
var inst_55819 = (state_55860[(8)]);
var _ = (function (){var statearr_55896 = state_55860;
(statearr_55896[(4)] = cljs.core.cons((12),(state_55860[(4)])));

return statearr_55896;
})();
var inst_55832 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_55819) : chs__$1.call(null,inst_55819));
var inst_55833 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_55819) : done.call(null,inst_55819));
var inst_55834 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_55832,inst_55833);
var ___$1 = (function (){var statearr_55898 = state_55860;
(statearr_55898[(4)] = cljs.core.rest((state_55860[(4)])));

return statearr_55898;
})();
var state_55860__$1 = state_55860;
var statearr_55901_57138 = state_55860__$1;
(statearr_55901_57138[(2)] = inst_55834);

(statearr_55901_57138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55861 === (5))){
var inst_55844 = (state_55860[(2)]);
var state_55860__$1 = (function (){var statearr_55902 = state_55860;
(statearr_55902[(13)] = inst_55844);

return statearr_55902;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55860__$1,(13),dchan);
} else {
if((state_val_55861 === (14))){
var inst_55849 = cljs.core.async.close_BANG_(out);
var state_55860__$1 = state_55860;
var statearr_55905_57139 = state_55860__$1;
(statearr_55905_57139[(2)] = inst_55849);

(statearr_55905_57139[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55861 === (16))){
var inst_55856 = (state_55860[(2)]);
var state_55860__$1 = state_55860;
var statearr_55910_57140 = state_55860__$1;
(statearr_55910_57140[(2)] = inst_55856);

(statearr_55910_57140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55861 === (10))){
var inst_55819 = (state_55860[(8)]);
var inst_55837 = (state_55860[(2)]);
var inst_55838 = (inst_55819 + (1));
var inst_55819__$1 = inst_55838;
var state_55860__$1 = (function (){var statearr_55911 = state_55860;
(statearr_55911[(8)] = inst_55819__$1);

(statearr_55911[(14)] = inst_55837);

return statearr_55911;
})();
var statearr_55912_57142 = state_55860__$1;
(statearr_55912_57142[(2)] = null);

(statearr_55912_57142[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55861 === (8))){
var inst_55842 = (state_55860[(2)]);
var state_55860__$1 = state_55860;
var statearr_55913_57144 = state_55860__$1;
(statearr_55913_57144[(2)] = inst_55842);

(statearr_55913_57144[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__53801__auto__ = null;
var cljs$core$async$state_machine__53801__auto____0 = (function (){
var statearr_55914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55914[(0)] = cljs$core$async$state_machine__53801__auto__);

(statearr_55914[(1)] = (1));

return statearr_55914;
});
var cljs$core$async$state_machine__53801__auto____1 = (function (state_55860){
while(true){
var ret_value__53802__auto__ = (function (){try{while(true){
var result__53803__auto__ = switch__53800__auto__(state_55860);
if(cljs.core.keyword_identical_QMARK_(result__53803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53803__auto__;
}
break;
}
}catch (e55915){var ex__53804__auto__ = e55915;
var statearr_55916_57145 = state_55860;
(statearr_55916_57145[(2)] = ex__53804__auto__);


if(cljs.core.seq((state_55860[(4)]))){
var statearr_55917_57146 = state_55860;
(statearr_55917_57146[(1)] = cljs.core.first((state_55860[(4)])));

} else {
throw ex__53804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57147 = state_55860;
state_55860 = G__57147;
continue;
} else {
return ret_value__53802__auto__;
}
break;
}
});
cljs$core$async$state_machine__53801__auto__ = function(state_55860){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53801__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53801__auto____1.call(this,state_55860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53801__auto____0;
cljs$core$async$state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53801__auto____1;
return cljs$core$async$state_machine__53801__auto__;
})()
})();
var state__53976__auto__ = (function (){var statearr_55918 = f__53975__auto__();
(statearr_55918[(6)] = c__53974__auto___57121);

return statearr_55918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53976__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__55921 = arguments.length;
switch (G__55921) {
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

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__53974__auto___57152 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53975__auto__ = (function (){var switch__53800__auto__ = (function (state_55957){
var state_val_55958 = (state_55957[(1)]);
if((state_val_55958 === (7))){
var inst_55935 = (state_55957[(7)]);
var inst_55934 = (state_55957[(8)]);
var inst_55934__$1 = (state_55957[(2)]);
var inst_55935__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55934__$1,(0),null);
var inst_55936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55934__$1,(1),null);
var inst_55937 = (inst_55935__$1 == null);
var state_55957__$1 = (function (){var statearr_55960 = state_55957;
(statearr_55960[(7)] = inst_55935__$1);

(statearr_55960[(9)] = inst_55936);

(statearr_55960[(8)] = inst_55934__$1);

return statearr_55960;
})();
if(cljs.core.truth_(inst_55937)){
var statearr_55961_57160 = state_55957__$1;
(statearr_55961_57160[(1)] = (8));

} else {
var statearr_55962_57161 = state_55957__$1;
(statearr_55962_57161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55958 === (1))){
var inst_55922 = cljs.core.vec(chs);
var inst_55923 = inst_55922;
var state_55957__$1 = (function (){var statearr_55963 = state_55957;
(statearr_55963[(10)] = inst_55923);

return statearr_55963;
})();
var statearr_55964_57162 = state_55957__$1;
(statearr_55964_57162[(2)] = null);

(statearr_55964_57162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55958 === (4))){
var inst_55923 = (state_55957[(10)]);
var state_55957__$1 = state_55957;
return cljs.core.async.ioc_alts_BANG_(state_55957__$1,(7),inst_55923);
} else {
if((state_val_55958 === (6))){
var inst_55953 = (state_55957[(2)]);
var state_55957__$1 = state_55957;
var statearr_55969_57163 = state_55957__$1;
(statearr_55969_57163[(2)] = inst_55953);

(statearr_55969_57163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55958 === (3))){
var inst_55955 = (state_55957[(2)]);
var state_55957__$1 = state_55957;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55957__$1,inst_55955);
} else {
if((state_val_55958 === (2))){
var inst_55923 = (state_55957[(10)]);
var inst_55925 = cljs.core.count(inst_55923);
var inst_55926 = (inst_55925 > (0));
var state_55957__$1 = state_55957;
if(cljs.core.truth_(inst_55926)){
var statearr_55971_57166 = state_55957__$1;
(statearr_55971_57166[(1)] = (4));

} else {
var statearr_55974_57167 = state_55957__$1;
(statearr_55974_57167[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55958 === (11))){
var inst_55923 = (state_55957[(10)]);
var inst_55946 = (state_55957[(2)]);
var tmp55970 = inst_55923;
var inst_55923__$1 = tmp55970;
var state_55957__$1 = (function (){var statearr_55981 = state_55957;
(statearr_55981[(10)] = inst_55923__$1);

(statearr_55981[(11)] = inst_55946);

return statearr_55981;
})();
var statearr_55982_57169 = state_55957__$1;
(statearr_55982_57169[(2)] = null);

(statearr_55982_57169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55958 === (9))){
var inst_55935 = (state_55957[(7)]);
var state_55957__$1 = state_55957;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55957__$1,(11),out,inst_55935);
} else {
if((state_val_55958 === (5))){
var inst_55951 = cljs.core.async.close_BANG_(out);
var state_55957__$1 = state_55957;
var statearr_55984_57170 = state_55957__$1;
(statearr_55984_57170[(2)] = inst_55951);

(statearr_55984_57170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55958 === (10))){
var inst_55949 = (state_55957[(2)]);
var state_55957__$1 = state_55957;
var statearr_55985_57171 = state_55957__$1;
(statearr_55985_57171[(2)] = inst_55949);

(statearr_55985_57171[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55958 === (8))){
var inst_55935 = (state_55957[(7)]);
var inst_55923 = (state_55957[(10)]);
var inst_55936 = (state_55957[(9)]);
var inst_55934 = (state_55957[(8)]);
var inst_55941 = (function (){var cs = inst_55923;
var vec__55928 = inst_55934;
var v = inst_55935;
var c = inst_55936;
return (function (p1__55919_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__55919_SHARP_);
});
})();
var inst_55942 = cljs.core.filterv(inst_55941,inst_55923);
var inst_55923__$1 = inst_55942;
var state_55957__$1 = (function (){var statearr_55990 = state_55957;
(statearr_55990[(10)] = inst_55923__$1);

return statearr_55990;
})();
var statearr_55991_57172 = state_55957__$1;
(statearr_55991_57172[(2)] = null);

(statearr_55991_57172[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__53801__auto__ = null;
var cljs$core$async$state_machine__53801__auto____0 = (function (){
var statearr_55992 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55992[(0)] = cljs$core$async$state_machine__53801__auto__);

(statearr_55992[(1)] = (1));

return statearr_55992;
});
var cljs$core$async$state_machine__53801__auto____1 = (function (state_55957){
while(true){
var ret_value__53802__auto__ = (function (){try{while(true){
var result__53803__auto__ = switch__53800__auto__(state_55957);
if(cljs.core.keyword_identical_QMARK_(result__53803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53803__auto__;
}
break;
}
}catch (e55993){var ex__53804__auto__ = e55993;
var statearr_55994_57173 = state_55957;
(statearr_55994_57173[(2)] = ex__53804__auto__);


if(cljs.core.seq((state_55957[(4)]))){
var statearr_55995_57174 = state_55957;
(statearr_55995_57174[(1)] = cljs.core.first((state_55957[(4)])));

} else {
throw ex__53804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57175 = state_55957;
state_55957 = G__57175;
continue;
} else {
return ret_value__53802__auto__;
}
break;
}
});
cljs$core$async$state_machine__53801__auto__ = function(state_55957){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53801__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53801__auto____1.call(this,state_55957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53801__auto____0;
cljs$core$async$state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53801__auto____1;
return cljs$core$async$state_machine__53801__auto__;
})()
})();
var state__53976__auto__ = (function (){var statearr_55997 = f__53975__auto__();
(statearr_55997[(6)] = c__53974__auto___57152);

return statearr_55997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53976__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

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
var G__56012 = arguments.length;
switch (G__56012) {
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

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__53974__auto___57177 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53975__auto__ = (function (){var switch__53800__auto__ = (function (state_56047){
var state_val_56048 = (state_56047[(1)]);
if((state_val_56048 === (7))){
var inst_56027 = (state_56047[(7)]);
var inst_56027__$1 = (state_56047[(2)]);
var inst_56028 = (inst_56027__$1 == null);
var inst_56029 = cljs.core.not(inst_56028);
var state_56047__$1 = (function (){var statearr_56053 = state_56047;
(statearr_56053[(7)] = inst_56027__$1);

return statearr_56053;
})();
if(inst_56029){
var statearr_56055_57178 = state_56047__$1;
(statearr_56055_57178[(1)] = (8));

} else {
var statearr_56056_57179 = state_56047__$1;
(statearr_56056_57179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56048 === (1))){
var inst_56022 = (0);
var state_56047__$1 = (function (){var statearr_56057 = state_56047;
(statearr_56057[(8)] = inst_56022);

return statearr_56057;
})();
var statearr_56058_57180 = state_56047__$1;
(statearr_56058_57180[(2)] = null);

(statearr_56058_57180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56048 === (4))){
var state_56047__$1 = state_56047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56047__$1,(7),ch);
} else {
if((state_val_56048 === (6))){
var inst_56042 = (state_56047[(2)]);
var state_56047__$1 = state_56047;
var statearr_56059_57182 = state_56047__$1;
(statearr_56059_57182[(2)] = inst_56042);

(statearr_56059_57182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56048 === (3))){
var inst_56044 = (state_56047[(2)]);
var inst_56045 = cljs.core.async.close_BANG_(out);
var state_56047__$1 = (function (){var statearr_56060 = state_56047;
(statearr_56060[(9)] = inst_56044);

return statearr_56060;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56047__$1,inst_56045);
} else {
if((state_val_56048 === (2))){
var inst_56022 = (state_56047[(8)]);
var inst_56024 = (inst_56022 < n);
var state_56047__$1 = state_56047;
if(cljs.core.truth_(inst_56024)){
var statearr_56061_57185 = state_56047__$1;
(statearr_56061_57185[(1)] = (4));

} else {
var statearr_56062_57186 = state_56047__$1;
(statearr_56062_57186[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56048 === (11))){
var inst_56022 = (state_56047[(8)]);
var inst_56032 = (state_56047[(2)]);
var inst_56035 = (inst_56022 + (1));
var inst_56022__$1 = inst_56035;
var state_56047__$1 = (function (){var statearr_56063 = state_56047;
(statearr_56063[(8)] = inst_56022__$1);

(statearr_56063[(10)] = inst_56032);

return statearr_56063;
})();
var statearr_56064_57187 = state_56047__$1;
(statearr_56064_57187[(2)] = null);

(statearr_56064_57187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56048 === (9))){
var state_56047__$1 = state_56047;
var statearr_56065_57188 = state_56047__$1;
(statearr_56065_57188[(2)] = null);

(statearr_56065_57188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56048 === (5))){
var state_56047__$1 = state_56047;
var statearr_56066_57189 = state_56047__$1;
(statearr_56066_57189[(2)] = null);

(statearr_56066_57189[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56048 === (10))){
var inst_56039 = (state_56047[(2)]);
var state_56047__$1 = state_56047;
var statearr_56067_57190 = state_56047__$1;
(statearr_56067_57190[(2)] = inst_56039);

(statearr_56067_57190[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56048 === (8))){
var inst_56027 = (state_56047[(7)]);
var state_56047__$1 = state_56047;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56047__$1,(11),out,inst_56027);
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
});
return (function() {
var cljs$core$async$state_machine__53801__auto__ = null;
var cljs$core$async$state_machine__53801__auto____0 = (function (){
var statearr_56068 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56068[(0)] = cljs$core$async$state_machine__53801__auto__);

(statearr_56068[(1)] = (1));

return statearr_56068;
});
var cljs$core$async$state_machine__53801__auto____1 = (function (state_56047){
while(true){
var ret_value__53802__auto__ = (function (){try{while(true){
var result__53803__auto__ = switch__53800__auto__(state_56047);
if(cljs.core.keyword_identical_QMARK_(result__53803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53803__auto__;
}
break;
}
}catch (e56069){var ex__53804__auto__ = e56069;
var statearr_56070_57193 = state_56047;
(statearr_56070_57193[(2)] = ex__53804__auto__);


if(cljs.core.seq((state_56047[(4)]))){
var statearr_56071_57195 = state_56047;
(statearr_56071_57195[(1)] = cljs.core.first((state_56047[(4)])));

} else {
throw ex__53804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57197 = state_56047;
state_56047 = G__57197;
continue;
} else {
return ret_value__53802__auto__;
}
break;
}
});
cljs$core$async$state_machine__53801__auto__ = function(state_56047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53801__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53801__auto____1.call(this,state_56047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53801__auto____0;
cljs$core$async$state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53801__auto____1;
return cljs$core$async$state_machine__53801__auto__;
})()
})();
var state__53976__auto__ = (function (){var statearr_56073 = f__53975__auto__();
(statearr_56073[(6)] = c__53974__auto___57177);

return statearr_56073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53976__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56077 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56077 = (function (f,ch,meta56078){
this.f = f;
this.ch = ch;
this.meta56078 = meta56078;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56079,meta56078__$1){
var self__ = this;
var _56079__$1 = this;
return (new cljs.core.async.t_cljs$core$async56077(self__.f,self__.ch,meta56078__$1));
}));

(cljs.core.async.t_cljs$core$async56077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56079){
var self__ = this;
var _56079__$1 = this;
return self__.meta56078;
}));

(cljs.core.async.t_cljs$core$async56077.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56077.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async56077.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async56077.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56077.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56082 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56082 = (function (f,ch,meta56078,_,fn1,meta56083){
this.f = f;
this.ch = ch;
this.meta56078 = meta56078;
this._ = _;
this.fn1 = fn1;
this.meta56083 = meta56083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56084,meta56083__$1){
var self__ = this;
var _56084__$1 = this;
return (new cljs.core.async.t_cljs$core$async56082(self__.f,self__.ch,self__.meta56078,self__._,self__.fn1,meta56083__$1));
}));

(cljs.core.async.t_cljs$core$async56082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56084){
var self__ = this;
var _56084__$1 = this;
return self__.meta56083;
}));

(cljs.core.async.t_cljs$core$async56082.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56082.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async56082.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56082.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__56075_SHARP_){
var G__56087 = (((p1__56075_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__56075_SHARP_) : self__.f.call(null,p1__56075_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__56087) : f1.call(null,G__56087));
});
}));

(cljs.core.async.t_cljs$core$async56082.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta56078","meta56078",-590607089,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async56077","cljs.core.async/t_cljs$core$async56077",1562550204,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta56083","meta56083",1851890600,null)], null);
}));

(cljs.core.async.t_cljs$core$async56082.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56082.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56082");

(cljs.core.async.t_cljs$core$async56082.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async56082");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56082.
 */
cljs.core.async.__GT_t_cljs$core$async56082 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async56082(f__$1,ch__$1,meta56078__$1,___$2,fn1__$1,meta56083){
return (new cljs.core.async.t_cljs$core$async56082(f__$1,ch__$1,meta56078__$1,___$2,fn1__$1,meta56083));
});

}

return (new cljs.core.async.t_cljs$core$async56082(self__.f,self__.ch,self__.meta56078,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__56096 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__56096) : self__.f.call(null,G__56096));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async56077.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56077.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async56077.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta56078","meta56078",-590607089,null)], null);
}));

(cljs.core.async.t_cljs$core$async56077.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56077.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56077");

(cljs.core.async.t_cljs$core$async56077.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async56077");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56077.
 */
cljs.core.async.__GT_t_cljs$core$async56077 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async56077(f__$1,ch__$1,meta56078){
return (new cljs.core.async.t_cljs$core$async56077(f__$1,ch__$1,meta56078));
});

}

return (new cljs.core.async.t_cljs$core$async56077(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56100 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56100 = (function (f,ch,meta56101){
this.f = f;
this.ch = ch;
this.meta56101 = meta56101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56102,meta56101__$1){
var self__ = this;
var _56102__$1 = this;
return (new cljs.core.async.t_cljs$core$async56100(self__.f,self__.ch,meta56101__$1));
}));

(cljs.core.async.t_cljs$core$async56100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56102){
var self__ = this;
var _56102__$1 = this;
return self__.meta56101;
}));

(cljs.core.async.t_cljs$core$async56100.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56100.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async56100.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56100.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async56100.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56100.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async56100.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta56101","meta56101",2030518981,null)], null);
}));

(cljs.core.async.t_cljs$core$async56100.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56100.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56100");

(cljs.core.async.t_cljs$core$async56100.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async56100");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56100.
 */
cljs.core.async.__GT_t_cljs$core$async56100 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async56100(f__$1,ch__$1,meta56101){
return (new cljs.core.async.t_cljs$core$async56100(f__$1,ch__$1,meta56101));
});

}

return (new cljs.core.async.t_cljs$core$async56100(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56103 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56103 = (function (p,ch,meta56104){
this.p = p;
this.ch = ch;
this.meta56104 = meta56104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56105,meta56104__$1){
var self__ = this;
var _56105__$1 = this;
return (new cljs.core.async.t_cljs$core$async56103(self__.p,self__.ch,meta56104__$1));
}));

(cljs.core.async.t_cljs$core$async56103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56105){
var self__ = this;
var _56105__$1 = this;
return self__.meta56104;
}));

(cljs.core.async.t_cljs$core$async56103.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56103.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async56103.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async56103.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56103.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async56103.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56103.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async56103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta56104","meta56104",1730784117,null)], null);
}));

(cljs.core.async.t_cljs$core$async56103.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56103");

(cljs.core.async.t_cljs$core$async56103.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async56103");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56103.
 */
cljs.core.async.__GT_t_cljs$core$async56103 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async56103(p__$1,ch__$1,meta56104){
return (new cljs.core.async.t_cljs$core$async56103(p__$1,ch__$1,meta56104));
});

}

return (new cljs.core.async.t_cljs$core$async56103(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__56110 = arguments.length;
switch (G__56110) {
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

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__53974__auto___57203 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53975__auto__ = (function (){var switch__53800__auto__ = (function (state_56133){
var state_val_56134 = (state_56133[(1)]);
if((state_val_56134 === (7))){
var inst_56129 = (state_56133[(2)]);
var state_56133__$1 = state_56133;
var statearr_56140_57204 = state_56133__$1;
(statearr_56140_57204[(2)] = inst_56129);

(statearr_56140_57204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56134 === (1))){
var state_56133__$1 = state_56133;
var statearr_56141_57205 = state_56133__$1;
(statearr_56141_57205[(2)] = null);

(statearr_56141_57205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56134 === (4))){
var inst_56115 = (state_56133[(7)]);
var inst_56115__$1 = (state_56133[(2)]);
var inst_56116 = (inst_56115__$1 == null);
var state_56133__$1 = (function (){var statearr_56144 = state_56133;
(statearr_56144[(7)] = inst_56115__$1);

return statearr_56144;
})();
if(cljs.core.truth_(inst_56116)){
var statearr_56145_57206 = state_56133__$1;
(statearr_56145_57206[(1)] = (5));

} else {
var statearr_56146_57207 = state_56133__$1;
(statearr_56146_57207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56134 === (6))){
var inst_56115 = (state_56133[(7)]);
var inst_56120 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_56115) : p.call(null,inst_56115));
var state_56133__$1 = state_56133;
if(cljs.core.truth_(inst_56120)){
var statearr_56147_57208 = state_56133__$1;
(statearr_56147_57208[(1)] = (8));

} else {
var statearr_56148_57209 = state_56133__$1;
(statearr_56148_57209[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56134 === (3))){
var inst_56131 = (state_56133[(2)]);
var state_56133__$1 = state_56133;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56133__$1,inst_56131);
} else {
if((state_val_56134 === (2))){
var state_56133__$1 = state_56133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56133__$1,(4),ch);
} else {
if((state_val_56134 === (11))){
var inst_56123 = (state_56133[(2)]);
var state_56133__$1 = state_56133;
var statearr_56149_57210 = state_56133__$1;
(statearr_56149_57210[(2)] = inst_56123);

(statearr_56149_57210[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56134 === (9))){
var state_56133__$1 = state_56133;
var statearr_56150_57211 = state_56133__$1;
(statearr_56150_57211[(2)] = null);

(statearr_56150_57211[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56134 === (5))){
var inst_56118 = cljs.core.async.close_BANG_(out);
var state_56133__$1 = state_56133;
var statearr_56151_57212 = state_56133__$1;
(statearr_56151_57212[(2)] = inst_56118);

(statearr_56151_57212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56134 === (10))){
var inst_56126 = (state_56133[(2)]);
var state_56133__$1 = (function (){var statearr_56154 = state_56133;
(statearr_56154[(8)] = inst_56126);

return statearr_56154;
})();
var statearr_56155_57213 = state_56133__$1;
(statearr_56155_57213[(2)] = null);

(statearr_56155_57213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56134 === (8))){
var inst_56115 = (state_56133[(7)]);
var state_56133__$1 = state_56133;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56133__$1,(11),out,inst_56115);
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
});
return (function() {
var cljs$core$async$state_machine__53801__auto__ = null;
var cljs$core$async$state_machine__53801__auto____0 = (function (){
var statearr_56156 = [null,null,null,null,null,null,null,null,null];
(statearr_56156[(0)] = cljs$core$async$state_machine__53801__auto__);

(statearr_56156[(1)] = (1));

return statearr_56156;
});
var cljs$core$async$state_machine__53801__auto____1 = (function (state_56133){
while(true){
var ret_value__53802__auto__ = (function (){try{while(true){
var result__53803__auto__ = switch__53800__auto__(state_56133);
if(cljs.core.keyword_identical_QMARK_(result__53803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53803__auto__;
}
break;
}
}catch (e56157){var ex__53804__auto__ = e56157;
var statearr_56158_57214 = state_56133;
(statearr_56158_57214[(2)] = ex__53804__auto__);


if(cljs.core.seq((state_56133[(4)]))){
var statearr_56159_57215 = state_56133;
(statearr_56159_57215[(1)] = cljs.core.first((state_56133[(4)])));

} else {
throw ex__53804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57216 = state_56133;
state_56133 = G__57216;
continue;
} else {
return ret_value__53802__auto__;
}
break;
}
});
cljs$core$async$state_machine__53801__auto__ = function(state_56133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53801__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53801__auto____1.call(this,state_56133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53801__auto____0;
cljs$core$async$state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53801__auto____1;
return cljs$core$async$state_machine__53801__auto__;
})()
})();
var state__53976__auto__ = (function (){var statearr_56162 = f__53975__auto__();
(statearr_56162[(6)] = c__53974__auto___57203);

return statearr_56162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53976__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__56169 = arguments.length;
switch (G__56169) {
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

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__53974__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53975__auto__ = (function (){var switch__53800__auto__ = (function (state_56245){
var state_val_56246 = (state_56245[(1)]);
if((state_val_56246 === (7))){
var inst_56239 = (state_56245[(2)]);
var state_56245__$1 = state_56245;
var statearr_56247_57218 = state_56245__$1;
(statearr_56247_57218[(2)] = inst_56239);

(statearr_56247_57218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56246 === (20))){
var inst_56209 = (state_56245[(7)]);
var inst_56220 = (state_56245[(2)]);
var inst_56221 = cljs.core.next(inst_56209);
var inst_56191 = inst_56221;
var inst_56192 = null;
var inst_56193 = (0);
var inst_56194 = (0);
var state_56245__$1 = (function (){var statearr_56249 = state_56245;
(statearr_56249[(8)] = inst_56193);

(statearr_56249[(9)] = inst_56192);

(statearr_56249[(10)] = inst_56220);

(statearr_56249[(11)] = inst_56191);

(statearr_56249[(12)] = inst_56194);

return statearr_56249;
})();
var statearr_56250_57219 = state_56245__$1;
(statearr_56250_57219[(2)] = null);

(statearr_56250_57219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56246 === (1))){
var state_56245__$1 = state_56245;
var statearr_56251_57220 = state_56245__$1;
(statearr_56251_57220[(2)] = null);

(statearr_56251_57220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56246 === (4))){
var inst_56180 = (state_56245[(13)]);
var inst_56180__$1 = (state_56245[(2)]);
var inst_56181 = (inst_56180__$1 == null);
var state_56245__$1 = (function (){var statearr_56253 = state_56245;
(statearr_56253[(13)] = inst_56180__$1);

return statearr_56253;
})();
if(cljs.core.truth_(inst_56181)){
var statearr_56254_57221 = state_56245__$1;
(statearr_56254_57221[(1)] = (5));

} else {
var statearr_56255_57222 = state_56245__$1;
(statearr_56255_57222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56246 === (15))){
var state_56245__$1 = state_56245;
var statearr_56259_57223 = state_56245__$1;
(statearr_56259_57223[(2)] = null);

(statearr_56259_57223[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56246 === (21))){
var state_56245__$1 = state_56245;
var statearr_56260_57224 = state_56245__$1;
(statearr_56260_57224[(2)] = null);

(statearr_56260_57224[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56246 === (13))){
var inst_56193 = (state_56245[(8)]);
var inst_56192 = (state_56245[(9)]);
var inst_56191 = (state_56245[(11)]);
var inst_56194 = (state_56245[(12)]);
var inst_56205 = (state_56245[(2)]);
var inst_56206 = (inst_56194 + (1));
var tmp56256 = inst_56193;
var tmp56257 = inst_56192;
var tmp56258 = inst_56191;
var inst_56191__$1 = tmp56258;
var inst_56192__$1 = tmp56257;
var inst_56193__$1 = tmp56256;
var inst_56194__$1 = inst_56206;
var state_56245__$1 = (function (){var statearr_56261 = state_56245;
(statearr_56261[(8)] = inst_56193__$1);

(statearr_56261[(9)] = inst_56192__$1);

(statearr_56261[(14)] = inst_56205);

(statearr_56261[(11)] = inst_56191__$1);

(statearr_56261[(12)] = inst_56194__$1);

return statearr_56261;
})();
var statearr_56262_57225 = state_56245__$1;
(statearr_56262_57225[(2)] = null);

(statearr_56262_57225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56246 === (22))){
var state_56245__$1 = state_56245;
var statearr_56263_57226 = state_56245__$1;
(statearr_56263_57226[(2)] = null);

(statearr_56263_57226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56246 === (6))){
var inst_56180 = (state_56245[(13)]);
var inst_56189 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_56180) : f.call(null,inst_56180));
var inst_56190 = cljs.core.seq(inst_56189);
var inst_56191 = inst_56190;
var inst_56192 = null;
var inst_56193 = (0);
var inst_56194 = (0);
var state_56245__$1 = (function (){var statearr_56265 = state_56245;
(statearr_56265[(8)] = inst_56193);

(statearr_56265[(9)] = inst_56192);

(statearr_56265[(11)] = inst_56191);

(statearr_56265[(12)] = inst_56194);

return statearr_56265;
})();
var statearr_56266_57229 = state_56245__$1;
(statearr_56266_57229[(2)] = null);

(statearr_56266_57229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56246 === (17))){
var inst_56209 = (state_56245[(7)]);
var inst_56213 = cljs.core.chunk_first(inst_56209);
var inst_56214 = cljs.core.chunk_rest(inst_56209);
var inst_56215 = cljs.core.count(inst_56213);
var inst_56191 = inst_56214;
var inst_56192 = inst_56213;
var inst_56193 = inst_56215;
var inst_56194 = (0);
var state_56245__$1 = (function (){var statearr_56268 = state_56245;
(statearr_56268[(8)] = inst_56193);

(statearr_56268[(9)] = inst_56192);

(statearr_56268[(11)] = inst_56191);

(statearr_56268[(12)] = inst_56194);

return statearr_56268;
})();
var statearr_56269_57232 = state_56245__$1;
(statearr_56269_57232[(2)] = null);

(statearr_56269_57232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56246 === (3))){
var inst_56241 = (state_56245[(2)]);
var state_56245__$1 = state_56245;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56245__$1,inst_56241);
} else {
if((state_val_56246 === (12))){
var inst_56229 = (state_56245[(2)]);
var state_56245__$1 = state_56245;
var statearr_56270_57235 = state_56245__$1;
(statearr_56270_57235[(2)] = inst_56229);

(statearr_56270_57235[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56246 === (2))){
var state_56245__$1 = state_56245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56245__$1,(4),in$);
} else {
if((state_val_56246 === (23))){
var inst_56237 = (state_56245[(2)]);
var state_56245__$1 = state_56245;
var statearr_56271_57236 = state_56245__$1;
(statearr_56271_57236[(2)] = inst_56237);

(statearr_56271_57236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56246 === (19))){
var inst_56224 = (state_56245[(2)]);
var state_56245__$1 = state_56245;
var statearr_56277_57237 = state_56245__$1;
(statearr_56277_57237[(2)] = inst_56224);

(statearr_56277_57237[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56246 === (11))){
var inst_56209 = (state_56245[(7)]);
var inst_56191 = (state_56245[(11)]);
var inst_56209__$1 = cljs.core.seq(inst_56191);
var state_56245__$1 = (function (){var statearr_56279 = state_56245;
(statearr_56279[(7)] = inst_56209__$1);

return statearr_56279;
})();
if(inst_56209__$1){
var statearr_56280_57238 = state_56245__$1;
(statearr_56280_57238[(1)] = (14));

} else {
var statearr_56281_57239 = state_56245__$1;
(statearr_56281_57239[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56246 === (9))){
var inst_56231 = (state_56245[(2)]);
var inst_56232 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_56245__$1 = (function (){var statearr_56285 = state_56245;
(statearr_56285[(15)] = inst_56231);

return statearr_56285;
})();
if(cljs.core.truth_(inst_56232)){
var statearr_56286_57240 = state_56245__$1;
(statearr_56286_57240[(1)] = (21));

} else {
var statearr_56287_57241 = state_56245__$1;
(statearr_56287_57241[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56246 === (5))){
var inst_56183 = cljs.core.async.close_BANG_(out);
var state_56245__$1 = state_56245;
var statearr_56288_57242 = state_56245__$1;
(statearr_56288_57242[(2)] = inst_56183);

(statearr_56288_57242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56246 === (14))){
var inst_56209 = (state_56245[(7)]);
var inst_56211 = cljs.core.chunked_seq_QMARK_(inst_56209);
var state_56245__$1 = state_56245;
if(inst_56211){
var statearr_56289_57243 = state_56245__$1;
(statearr_56289_57243[(1)] = (17));

} else {
var statearr_56291_57244 = state_56245__$1;
(statearr_56291_57244[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56246 === (16))){
var inst_56227 = (state_56245[(2)]);
var state_56245__$1 = state_56245;
var statearr_56292_57245 = state_56245__$1;
(statearr_56292_57245[(2)] = inst_56227);

(statearr_56292_57245[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56246 === (10))){
var inst_56192 = (state_56245[(9)]);
var inst_56194 = (state_56245[(12)]);
var inst_56199 = cljs.core._nth(inst_56192,inst_56194);
var state_56245__$1 = state_56245;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56245__$1,(13),out,inst_56199);
} else {
if((state_val_56246 === (18))){
var inst_56209 = (state_56245[(7)]);
var inst_56218 = cljs.core.first(inst_56209);
var state_56245__$1 = state_56245;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56245__$1,(20),out,inst_56218);
} else {
if((state_val_56246 === (8))){
var inst_56193 = (state_56245[(8)]);
var inst_56194 = (state_56245[(12)]);
var inst_56196 = (inst_56194 < inst_56193);
var inst_56197 = inst_56196;
var state_56245__$1 = state_56245;
if(cljs.core.truth_(inst_56197)){
var statearr_56298_57246 = state_56245__$1;
(statearr_56298_57246[(1)] = (10));

} else {
var statearr_56299_57247 = state_56245__$1;
(statearr_56299_57247[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__53801__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__53801__auto____0 = (function (){
var statearr_56300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56300[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__53801__auto__);

(statearr_56300[(1)] = (1));

return statearr_56300;
});
var cljs$core$async$mapcat_STAR__$_state_machine__53801__auto____1 = (function (state_56245){
while(true){
var ret_value__53802__auto__ = (function (){try{while(true){
var result__53803__auto__ = switch__53800__auto__(state_56245);
if(cljs.core.keyword_identical_QMARK_(result__53803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53803__auto__;
}
break;
}
}catch (e56302){var ex__53804__auto__ = e56302;
var statearr_56303_57248 = state_56245;
(statearr_56303_57248[(2)] = ex__53804__auto__);


if(cljs.core.seq((state_56245[(4)]))){
var statearr_56304_57249 = state_56245;
(statearr_56304_57249[(1)] = cljs.core.first((state_56245[(4)])));

} else {
throw ex__53804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57251 = state_56245;
state_56245 = G__57251;
continue;
} else {
return ret_value__53802__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__53801__auto__ = function(state_56245){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__53801__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__53801__auto____1.call(this,state_56245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__53801__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__53801__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__53801__auto__;
})()
})();
var state__53976__auto__ = (function (){var statearr_56306 = f__53975__auto__();
(statearr_56306[(6)] = c__53974__auto__);

return statearr_56306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53976__auto__);
}));

return c__53974__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__56308 = arguments.length;
switch (G__56308) {
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

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__56312 = arguments.length;
switch (G__56312) {
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

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__56314 = arguments.length;
switch (G__56314) {
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

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__53974__auto___57256 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53975__auto__ = (function (){var switch__53800__auto__ = (function (state_56340){
var state_val_56341 = (state_56340[(1)]);
if((state_val_56341 === (7))){
var inst_56335 = (state_56340[(2)]);
var state_56340__$1 = state_56340;
var statearr_56342_57257 = state_56340__$1;
(statearr_56342_57257[(2)] = inst_56335);

(statearr_56342_57257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56341 === (1))){
var inst_56317 = null;
var state_56340__$1 = (function (){var statearr_56343 = state_56340;
(statearr_56343[(7)] = inst_56317);

return statearr_56343;
})();
var statearr_56344_57258 = state_56340__$1;
(statearr_56344_57258[(2)] = null);

(statearr_56344_57258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56341 === (4))){
var inst_56320 = (state_56340[(8)]);
var inst_56320__$1 = (state_56340[(2)]);
var inst_56321 = (inst_56320__$1 == null);
var inst_56322 = cljs.core.not(inst_56321);
var state_56340__$1 = (function (){var statearr_56345 = state_56340;
(statearr_56345[(8)] = inst_56320__$1);

return statearr_56345;
})();
if(inst_56322){
var statearr_56346_57259 = state_56340__$1;
(statearr_56346_57259[(1)] = (5));

} else {
var statearr_56347_57260 = state_56340__$1;
(statearr_56347_57260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56341 === (6))){
var state_56340__$1 = state_56340;
var statearr_56349_57261 = state_56340__$1;
(statearr_56349_57261[(2)] = null);

(statearr_56349_57261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56341 === (3))){
var inst_56337 = (state_56340[(2)]);
var inst_56338 = cljs.core.async.close_BANG_(out);
var state_56340__$1 = (function (){var statearr_56351 = state_56340;
(statearr_56351[(9)] = inst_56337);

return statearr_56351;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56340__$1,inst_56338);
} else {
if((state_val_56341 === (2))){
var state_56340__$1 = state_56340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56340__$1,(4),ch);
} else {
if((state_val_56341 === (11))){
var inst_56320 = (state_56340[(8)]);
var inst_56329 = (state_56340[(2)]);
var inst_56317 = inst_56320;
var state_56340__$1 = (function (){var statearr_56352 = state_56340;
(statearr_56352[(7)] = inst_56317);

(statearr_56352[(10)] = inst_56329);

return statearr_56352;
})();
var statearr_56353_57262 = state_56340__$1;
(statearr_56353_57262[(2)] = null);

(statearr_56353_57262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56341 === (9))){
var inst_56320 = (state_56340[(8)]);
var state_56340__$1 = state_56340;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56340__$1,(11),out,inst_56320);
} else {
if((state_val_56341 === (5))){
var inst_56317 = (state_56340[(7)]);
var inst_56320 = (state_56340[(8)]);
var inst_56324 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56320,inst_56317);
var state_56340__$1 = state_56340;
if(inst_56324){
var statearr_56355_57263 = state_56340__$1;
(statearr_56355_57263[(1)] = (8));

} else {
var statearr_56356_57264 = state_56340__$1;
(statearr_56356_57264[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56341 === (10))){
var inst_56332 = (state_56340[(2)]);
var state_56340__$1 = state_56340;
var statearr_56357_57265 = state_56340__$1;
(statearr_56357_57265[(2)] = inst_56332);

(statearr_56357_57265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56341 === (8))){
var inst_56317 = (state_56340[(7)]);
var tmp56354 = inst_56317;
var inst_56317__$1 = tmp56354;
var state_56340__$1 = (function (){var statearr_56359 = state_56340;
(statearr_56359[(7)] = inst_56317__$1);

return statearr_56359;
})();
var statearr_56361_57266 = state_56340__$1;
(statearr_56361_57266[(2)] = null);

(statearr_56361_57266[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__53801__auto__ = null;
var cljs$core$async$state_machine__53801__auto____0 = (function (){
var statearr_56362 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56362[(0)] = cljs$core$async$state_machine__53801__auto__);

(statearr_56362[(1)] = (1));

return statearr_56362;
});
var cljs$core$async$state_machine__53801__auto____1 = (function (state_56340){
while(true){
var ret_value__53802__auto__ = (function (){try{while(true){
var result__53803__auto__ = switch__53800__auto__(state_56340);
if(cljs.core.keyword_identical_QMARK_(result__53803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53803__auto__;
}
break;
}
}catch (e56363){var ex__53804__auto__ = e56363;
var statearr_56364_57268 = state_56340;
(statearr_56364_57268[(2)] = ex__53804__auto__);


if(cljs.core.seq((state_56340[(4)]))){
var statearr_56366_57269 = state_56340;
(statearr_56366_57269[(1)] = cljs.core.first((state_56340[(4)])));

} else {
throw ex__53804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57270 = state_56340;
state_56340 = G__57270;
continue;
} else {
return ret_value__53802__auto__;
}
break;
}
});
cljs$core$async$state_machine__53801__auto__ = function(state_56340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53801__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53801__auto____1.call(this,state_56340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53801__auto____0;
cljs$core$async$state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53801__auto____1;
return cljs$core$async$state_machine__53801__auto__;
})()
})();
var state__53976__auto__ = (function (){var statearr_56368 = f__53975__auto__();
(statearr_56368[(6)] = c__53974__auto___57256);

return statearr_56368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53976__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__56376 = arguments.length;
switch (G__56376) {
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

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__53974__auto___57273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53975__auto__ = (function (){var switch__53800__auto__ = (function (state_56415){
var state_val_56416 = (state_56415[(1)]);
if((state_val_56416 === (7))){
var inst_56411 = (state_56415[(2)]);
var state_56415__$1 = state_56415;
var statearr_56417_57274 = state_56415__$1;
(statearr_56417_57274[(2)] = inst_56411);

(statearr_56417_57274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56416 === (1))){
var inst_56378 = (new Array(n));
var inst_56379 = inst_56378;
var inst_56380 = (0);
var state_56415__$1 = (function (){var statearr_56418 = state_56415;
(statearr_56418[(7)] = inst_56380);

(statearr_56418[(8)] = inst_56379);

return statearr_56418;
})();
var statearr_56421_57275 = state_56415__$1;
(statearr_56421_57275[(2)] = null);

(statearr_56421_57275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56416 === (4))){
var inst_56383 = (state_56415[(9)]);
var inst_56383__$1 = (state_56415[(2)]);
var inst_56384 = (inst_56383__$1 == null);
var inst_56385 = cljs.core.not(inst_56384);
var state_56415__$1 = (function (){var statearr_56425 = state_56415;
(statearr_56425[(9)] = inst_56383__$1);

return statearr_56425;
})();
if(inst_56385){
var statearr_56426_57276 = state_56415__$1;
(statearr_56426_57276[(1)] = (5));

} else {
var statearr_56427_57277 = state_56415__$1;
(statearr_56427_57277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56416 === (15))){
var inst_56405 = (state_56415[(2)]);
var state_56415__$1 = state_56415;
var statearr_56428_57278 = state_56415__$1;
(statearr_56428_57278[(2)] = inst_56405);

(statearr_56428_57278[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56416 === (13))){
var state_56415__$1 = state_56415;
var statearr_56429_57279 = state_56415__$1;
(statearr_56429_57279[(2)] = null);

(statearr_56429_57279[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56416 === (6))){
var inst_56380 = (state_56415[(7)]);
var inst_56401 = (inst_56380 > (0));
var state_56415__$1 = state_56415;
if(cljs.core.truth_(inst_56401)){
var statearr_56430_57284 = state_56415__$1;
(statearr_56430_57284[(1)] = (12));

} else {
var statearr_56431_57285 = state_56415__$1;
(statearr_56431_57285[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56416 === (3))){
var inst_56413 = (state_56415[(2)]);
var state_56415__$1 = state_56415;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56415__$1,inst_56413);
} else {
if((state_val_56416 === (12))){
var inst_56379 = (state_56415[(8)]);
var inst_56403 = cljs.core.vec(inst_56379);
var state_56415__$1 = state_56415;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56415__$1,(15),out,inst_56403);
} else {
if((state_val_56416 === (2))){
var state_56415__$1 = state_56415;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56415__$1,(4),ch);
} else {
if((state_val_56416 === (11))){
var inst_56395 = (state_56415[(2)]);
var inst_56396 = (new Array(n));
var inst_56379 = inst_56396;
var inst_56380 = (0);
var state_56415__$1 = (function (){var statearr_56432 = state_56415;
(statearr_56432[(7)] = inst_56380);

(statearr_56432[(8)] = inst_56379);

(statearr_56432[(10)] = inst_56395);

return statearr_56432;
})();
var statearr_56433_57286 = state_56415__$1;
(statearr_56433_57286[(2)] = null);

(statearr_56433_57286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56416 === (9))){
var inst_56379 = (state_56415[(8)]);
var inst_56393 = cljs.core.vec(inst_56379);
var state_56415__$1 = state_56415;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56415__$1,(11),out,inst_56393);
} else {
if((state_val_56416 === (5))){
var inst_56380 = (state_56415[(7)]);
var inst_56379 = (state_56415[(8)]);
var inst_56383 = (state_56415[(9)]);
var inst_56388 = (state_56415[(11)]);
var inst_56387 = (inst_56379[inst_56380] = inst_56383);
var inst_56388__$1 = (inst_56380 + (1));
var inst_56389 = (inst_56388__$1 < n);
var state_56415__$1 = (function (){var statearr_56434 = state_56415;
(statearr_56434[(11)] = inst_56388__$1);

(statearr_56434[(12)] = inst_56387);

return statearr_56434;
})();
if(cljs.core.truth_(inst_56389)){
var statearr_56435_57287 = state_56415__$1;
(statearr_56435_57287[(1)] = (8));

} else {
var statearr_56436_57288 = state_56415__$1;
(statearr_56436_57288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56416 === (14))){
var inst_56408 = (state_56415[(2)]);
var inst_56409 = cljs.core.async.close_BANG_(out);
var state_56415__$1 = (function (){var statearr_56438 = state_56415;
(statearr_56438[(13)] = inst_56408);

return statearr_56438;
})();
var statearr_56439_57289 = state_56415__$1;
(statearr_56439_57289[(2)] = inst_56409);

(statearr_56439_57289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56416 === (10))){
var inst_56399 = (state_56415[(2)]);
var state_56415__$1 = state_56415;
var statearr_56440_57290 = state_56415__$1;
(statearr_56440_57290[(2)] = inst_56399);

(statearr_56440_57290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56416 === (8))){
var inst_56379 = (state_56415[(8)]);
var inst_56388 = (state_56415[(11)]);
var tmp56437 = inst_56379;
var inst_56379__$1 = tmp56437;
var inst_56380 = inst_56388;
var state_56415__$1 = (function (){var statearr_56442 = state_56415;
(statearr_56442[(7)] = inst_56380);

(statearr_56442[(8)] = inst_56379__$1);

return statearr_56442;
})();
var statearr_56444_57291 = state_56415__$1;
(statearr_56444_57291[(2)] = null);

(statearr_56444_57291[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__53801__auto__ = null;
var cljs$core$async$state_machine__53801__auto____0 = (function (){
var statearr_56445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56445[(0)] = cljs$core$async$state_machine__53801__auto__);

(statearr_56445[(1)] = (1));

return statearr_56445;
});
var cljs$core$async$state_machine__53801__auto____1 = (function (state_56415){
while(true){
var ret_value__53802__auto__ = (function (){try{while(true){
var result__53803__auto__ = switch__53800__auto__(state_56415);
if(cljs.core.keyword_identical_QMARK_(result__53803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53803__auto__;
}
break;
}
}catch (e56447){var ex__53804__auto__ = e56447;
var statearr_56448_57292 = state_56415;
(statearr_56448_57292[(2)] = ex__53804__auto__);


if(cljs.core.seq((state_56415[(4)]))){
var statearr_56450_57293 = state_56415;
(statearr_56450_57293[(1)] = cljs.core.first((state_56415[(4)])));

} else {
throw ex__53804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57294 = state_56415;
state_56415 = G__57294;
continue;
} else {
return ret_value__53802__auto__;
}
break;
}
});
cljs$core$async$state_machine__53801__auto__ = function(state_56415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53801__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53801__auto____1.call(this,state_56415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53801__auto____0;
cljs$core$async$state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53801__auto____1;
return cljs$core$async$state_machine__53801__auto__;
})()
})();
var state__53976__auto__ = (function (){var statearr_56451 = f__53975__auto__();
(statearr_56451[(6)] = c__53974__auto___57273);

return statearr_56451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53976__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__56453 = arguments.length;
switch (G__56453) {
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

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__53974__auto___57296 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53975__auto__ = (function (){var switch__53800__auto__ = (function (state_56501){
var state_val_56503 = (state_56501[(1)]);
if((state_val_56503 === (7))){
var inst_56497 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
var statearr_56504_57297 = state_56501__$1;
(statearr_56504_57297[(2)] = inst_56497);

(statearr_56504_57297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56503 === (1))){
var inst_56456 = [];
var inst_56457 = inst_56456;
var inst_56458 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_56501__$1 = (function (){var statearr_56505 = state_56501;
(statearr_56505[(7)] = inst_56458);

(statearr_56505[(8)] = inst_56457);

return statearr_56505;
})();
var statearr_56506_57298 = state_56501__$1;
(statearr_56506_57298[(2)] = null);

(statearr_56506_57298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56503 === (4))){
var inst_56461 = (state_56501[(9)]);
var inst_56461__$1 = (state_56501[(2)]);
var inst_56462 = (inst_56461__$1 == null);
var inst_56463 = cljs.core.not(inst_56462);
var state_56501__$1 = (function (){var statearr_56507 = state_56501;
(statearr_56507[(9)] = inst_56461__$1);

return statearr_56507;
})();
if(inst_56463){
var statearr_56508_57299 = state_56501__$1;
(statearr_56508_57299[(1)] = (5));

} else {
var statearr_56509_57300 = state_56501__$1;
(statearr_56509_57300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56503 === (15))){
var inst_56457 = (state_56501[(8)]);
var inst_56488 = cljs.core.vec(inst_56457);
var state_56501__$1 = state_56501;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56501__$1,(18),out,inst_56488);
} else {
if((state_val_56503 === (13))){
var inst_56483 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
var statearr_56510_57301 = state_56501__$1;
(statearr_56510_57301[(2)] = inst_56483);

(statearr_56510_57301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56503 === (6))){
var inst_56457 = (state_56501[(8)]);
var inst_56485 = inst_56457.length;
var inst_56486 = (inst_56485 > (0));
var state_56501__$1 = state_56501;
if(cljs.core.truth_(inst_56486)){
var statearr_56511_57302 = state_56501__$1;
(statearr_56511_57302[(1)] = (15));

} else {
var statearr_56512_57303 = state_56501__$1;
(statearr_56512_57303[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56503 === (17))){
var inst_56494 = (state_56501[(2)]);
var inst_56495 = cljs.core.async.close_BANG_(out);
var state_56501__$1 = (function (){var statearr_56515 = state_56501;
(statearr_56515[(10)] = inst_56494);

return statearr_56515;
})();
var statearr_56516_57305 = state_56501__$1;
(statearr_56516_57305[(2)] = inst_56495);

(statearr_56516_57305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56503 === (3))){
var inst_56499 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56501__$1,inst_56499);
} else {
if((state_val_56503 === (12))){
var inst_56457 = (state_56501[(8)]);
var inst_56476 = cljs.core.vec(inst_56457);
var state_56501__$1 = state_56501;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56501__$1,(14),out,inst_56476);
} else {
if((state_val_56503 === (2))){
var state_56501__$1 = state_56501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56501__$1,(4),ch);
} else {
if((state_val_56503 === (11))){
var inst_56465 = (state_56501[(11)]);
var inst_56461 = (state_56501[(9)]);
var inst_56457 = (state_56501[(8)]);
var inst_56473 = inst_56457.push(inst_56461);
var tmp56517 = inst_56457;
var inst_56457__$1 = tmp56517;
var inst_56458 = inst_56465;
var state_56501__$1 = (function (){var statearr_56518 = state_56501;
(statearr_56518[(7)] = inst_56458);

(statearr_56518[(8)] = inst_56457__$1);

(statearr_56518[(12)] = inst_56473);

return statearr_56518;
})();
var statearr_56519_57307 = state_56501__$1;
(statearr_56519_57307[(2)] = null);

(statearr_56519_57307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56503 === (9))){
var inst_56458 = (state_56501[(7)]);
var inst_56469 = cljs.core.keyword_identical_QMARK_(inst_56458,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_56501__$1 = state_56501;
var statearr_56520_57308 = state_56501__$1;
(statearr_56520_57308[(2)] = inst_56469);

(statearr_56520_57308[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56503 === (5))){
var inst_56466 = (state_56501[(13)]);
var inst_56465 = (state_56501[(11)]);
var inst_56461 = (state_56501[(9)]);
var inst_56458 = (state_56501[(7)]);
var inst_56465__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_56461) : f.call(null,inst_56461));
var inst_56466__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56465__$1,inst_56458);
var state_56501__$1 = (function (){var statearr_56521 = state_56501;
(statearr_56521[(13)] = inst_56466__$1);

(statearr_56521[(11)] = inst_56465__$1);

return statearr_56521;
})();
if(inst_56466__$1){
var statearr_56522_57309 = state_56501__$1;
(statearr_56522_57309[(1)] = (8));

} else {
var statearr_56523_57310 = state_56501__$1;
(statearr_56523_57310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56503 === (14))){
var inst_56465 = (state_56501[(11)]);
var inst_56461 = (state_56501[(9)]);
var inst_56478 = (state_56501[(2)]);
var inst_56479 = [];
var inst_56480 = inst_56479.push(inst_56461);
var inst_56457 = inst_56479;
var inst_56458 = inst_56465;
var state_56501__$1 = (function (){var statearr_56528 = state_56501;
(statearr_56528[(14)] = inst_56480);

(statearr_56528[(15)] = inst_56478);

(statearr_56528[(7)] = inst_56458);

(statearr_56528[(8)] = inst_56457);

return statearr_56528;
})();
var statearr_56529_57313 = state_56501__$1;
(statearr_56529_57313[(2)] = null);

(statearr_56529_57313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56503 === (16))){
var state_56501__$1 = state_56501;
var statearr_56530_57314 = state_56501__$1;
(statearr_56530_57314[(2)] = null);

(statearr_56530_57314[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56503 === (10))){
var inst_56471 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
if(cljs.core.truth_(inst_56471)){
var statearr_56531_57315 = state_56501__$1;
(statearr_56531_57315[(1)] = (11));

} else {
var statearr_56532_57316 = state_56501__$1;
(statearr_56532_57316[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56503 === (18))){
var inst_56490 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
var statearr_56534_57317 = state_56501__$1;
(statearr_56534_57317[(2)] = inst_56490);

(statearr_56534_57317[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56503 === (8))){
var inst_56466 = (state_56501[(13)]);
var state_56501__$1 = state_56501;
var statearr_56536_57318 = state_56501__$1;
(statearr_56536_57318[(2)] = inst_56466);

(statearr_56536_57318[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__53801__auto__ = null;
var cljs$core$async$state_machine__53801__auto____0 = (function (){
var statearr_56537 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56537[(0)] = cljs$core$async$state_machine__53801__auto__);

(statearr_56537[(1)] = (1));

return statearr_56537;
});
var cljs$core$async$state_machine__53801__auto____1 = (function (state_56501){
while(true){
var ret_value__53802__auto__ = (function (){try{while(true){
var result__53803__auto__ = switch__53800__auto__(state_56501);
if(cljs.core.keyword_identical_QMARK_(result__53803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53803__auto__;
}
break;
}
}catch (e56538){var ex__53804__auto__ = e56538;
var statearr_56539_57319 = state_56501;
(statearr_56539_57319[(2)] = ex__53804__auto__);


if(cljs.core.seq((state_56501[(4)]))){
var statearr_56541_57320 = state_56501;
(statearr_56541_57320[(1)] = cljs.core.first((state_56501[(4)])));

} else {
throw ex__53804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57321 = state_56501;
state_56501 = G__57321;
continue;
} else {
return ret_value__53802__auto__;
}
break;
}
});
cljs$core$async$state_machine__53801__auto__ = function(state_56501){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__53801__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__53801__auto____1.call(this,state_56501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__53801__auto____0;
cljs$core$async$state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__53801__auto____1;
return cljs$core$async$state_machine__53801__auto__;
})()
})();
var state__53976__auto__ = (function (){var statearr_56542 = f__53975__auto__();
(statearr_56542[(6)] = c__53974__auto___57296);

return statearr_56542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53976__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
