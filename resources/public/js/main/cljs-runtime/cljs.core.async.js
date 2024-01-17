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
var G__52075 = arguments.length;
switch (G__52075) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52076 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52076 = (function (f,blockable,meta52077){
this.f = f;
this.blockable = blockable;
this.meta52077 = meta52077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52078,meta52077__$1){
var self__ = this;
var _52078__$1 = this;
return (new cljs.core.async.t_cljs$core$async52076(self__.f,self__.blockable,meta52077__$1));
});

cljs.core.async.t_cljs$core$async52076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52078){
var self__ = this;
var _52078__$1 = this;
return self__.meta52077;
});

cljs.core.async.t_cljs$core$async52076.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52076.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async52076.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async52076.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async52076.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta52077","meta52077",-1874106570,null)], null);
});

cljs.core.async.t_cljs$core$async52076.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52076.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52076";

cljs.core.async.t_cljs$core$async52076.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async52076");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52076.
 */
cljs.core.async.__GT_t_cljs$core$async52076 = (function cljs$core$async$__GT_t_cljs$core$async52076(f__$1,blockable__$1,meta52077){
return (new cljs.core.async.t_cljs$core$async52076(f__$1,blockable__$1,meta52077));
});

}

return (new cljs.core.async.t_cljs$core$async52076(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__52121 = arguments.length;
switch (G__52121) {
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
var G__52129 = arguments.length;
switch (G__52129) {
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
var G__52140 = arguments.length;
switch (G__52140) {
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
var val_53705 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_53705) : fn1.call(null,val_53705));
} else {
cljs.core.async.impl.dispatch.run(((function (val_53705,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_53705) : fn1.call(null,val_53705));
});})(val_53705,ret))
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
var G__52149 = arguments.length;
switch (G__52149) {
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
var n__4607__auto___53718 = n;
var x_53720 = (0);
while(true){
if((x_53720 < n__4607__auto___53718)){
(a[x_53720] = x_53720);

var G__53721 = (x_53720 + (1));
x_53720 = G__53721;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52164 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52164 = (function (flag,meta52165){
this.flag = flag;
this.meta52165 = meta52165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_52166,meta52165__$1){
var self__ = this;
var _52166__$1 = this;
return (new cljs.core.async.t_cljs$core$async52164(self__.flag,meta52165__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async52164.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_52166){
var self__ = this;
var _52166__$1 = this;
return self__.meta52165;
});})(flag))
;

cljs.core.async.t_cljs$core$async52164.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52164.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async52164.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async52164.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async52164.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta52165","meta52165",1664670620,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async52164.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52164.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52164";

cljs.core.async.t_cljs$core$async52164.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async52164");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52164.
 */
cljs.core.async.__GT_t_cljs$core$async52164 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async52164(flag__$1,meta52165){
return (new cljs.core.async.t_cljs$core$async52164(flag__$1,meta52165));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async52164(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52195 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52195 = (function (flag,cb,meta52196){
this.flag = flag;
this.cb = cb;
this.meta52196 = meta52196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52197,meta52196__$1){
var self__ = this;
var _52197__$1 = this;
return (new cljs.core.async.t_cljs$core$async52195(self__.flag,self__.cb,meta52196__$1));
});

cljs.core.async.t_cljs$core$async52195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52197){
var self__ = this;
var _52197__$1 = this;
return self__.meta52196;
});

cljs.core.async.t_cljs$core$async52195.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52195.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async52195.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async52195.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async52195.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta52196","meta52196",-1336224708,null)], null);
});

cljs.core.async.t_cljs$core$async52195.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52195.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52195";

cljs.core.async.t_cljs$core$async52195.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async52195");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52195.
 */
cljs.core.async.__GT_t_cljs$core$async52195 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async52195(flag__$1,cb__$1,meta52196){
return (new cljs.core.async.t_cljs$core$async52195(flag__$1,cb__$1,meta52196));
});

}

return (new cljs.core.async.t_cljs$core$async52195(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__52220_SHARP_){
var G__52238 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__52220_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__52238) : fret.call(null,G__52238));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__52221_SHARP_){
var G__52244 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__52221_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__52244) : fret.call(null,G__52244));
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
var G__53755 = (i + (1));
i = G__53755;
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
var len__4730__auto___53761 = arguments.length;
var i__4731__auto___53762 = (0);
while(true){
if((i__4731__auto___53762 < len__4730__auto___53761)){
args__4736__auto__.push((arguments[i__4731__auto___53762]));

var G__53763 = (i__4731__auto___53762 + (1));
i__4731__auto___53762 = G__53763;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__52269){
var map__52270 = p__52269;
var map__52270__$1 = (((((!((map__52270 == null))))?(((((map__52270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52270):map__52270);
var opts = map__52270__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq52256){
var G__52257 = cljs.core.first(seq52256);
var seq52256__$1 = cljs.core.next(seq52256);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52257,seq52256__$1);
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
var G__52279 = arguments.length;
switch (G__52279) {
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
var c__51963__auto___53771 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51963__auto___53771){
return (function (){
var f__51964__auto__ = (function (){var switch__51789__auto__ = ((function (c__51963__auto___53771){
return (function (state_52309){
var state_val_52310 = (state_52309[(1)]);
if((state_val_52310 === (7))){
var inst_52300 = (state_52309[(2)]);
var state_52309__$1 = state_52309;
var statearr_52315_53774 = state_52309__$1;
(statearr_52315_53774[(2)] = inst_52300);

(statearr_52315_53774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52310 === (1))){
var state_52309__$1 = state_52309;
var statearr_52316_53776 = state_52309__$1;
(statearr_52316_53776[(2)] = null);

(statearr_52316_53776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52310 === (4))){
var inst_52283 = (state_52309[(7)]);
var inst_52283__$1 = (state_52309[(2)]);
var inst_52284 = (inst_52283__$1 == null);
var state_52309__$1 = (function (){var statearr_52317 = state_52309;
(statearr_52317[(7)] = inst_52283__$1);

return statearr_52317;
})();
if(cljs.core.truth_(inst_52284)){
var statearr_52318_53778 = state_52309__$1;
(statearr_52318_53778[(1)] = (5));

} else {
var statearr_52319_53779 = state_52309__$1;
(statearr_52319_53779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52310 === (13))){
var state_52309__$1 = state_52309;
var statearr_52320_53780 = state_52309__$1;
(statearr_52320_53780[(2)] = null);

(statearr_52320_53780[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52310 === (6))){
var inst_52283 = (state_52309[(7)]);
var state_52309__$1 = state_52309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52309__$1,(11),to,inst_52283);
} else {
if((state_val_52310 === (3))){
var inst_52302 = (state_52309[(2)]);
var state_52309__$1 = state_52309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52309__$1,inst_52302);
} else {
if((state_val_52310 === (12))){
var state_52309__$1 = state_52309;
var statearr_52321_53781 = state_52309__$1;
(statearr_52321_53781[(2)] = null);

(statearr_52321_53781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52310 === (2))){
var state_52309__$1 = state_52309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52309__$1,(4),from);
} else {
if((state_val_52310 === (11))){
var inst_52293 = (state_52309[(2)]);
var state_52309__$1 = state_52309;
if(cljs.core.truth_(inst_52293)){
var statearr_52322_53782 = state_52309__$1;
(statearr_52322_53782[(1)] = (12));

} else {
var statearr_52323_53784 = state_52309__$1;
(statearr_52323_53784[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52310 === (9))){
var state_52309__$1 = state_52309;
var statearr_52324_53794 = state_52309__$1;
(statearr_52324_53794[(2)] = null);

(statearr_52324_53794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52310 === (5))){
var state_52309__$1 = state_52309;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52325_53796 = state_52309__$1;
(statearr_52325_53796[(1)] = (8));

} else {
var statearr_52326_53797 = state_52309__$1;
(statearr_52326_53797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52310 === (14))){
var inst_52298 = (state_52309[(2)]);
var state_52309__$1 = state_52309;
var statearr_52327_53800 = state_52309__$1;
(statearr_52327_53800[(2)] = inst_52298);

(statearr_52327_53800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52310 === (10))){
var inst_52290 = (state_52309[(2)]);
var state_52309__$1 = state_52309;
var statearr_52328_53803 = state_52309__$1;
(statearr_52328_53803[(2)] = inst_52290);

(statearr_52328_53803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52310 === (8))){
var inst_52287 = cljs.core.async.close_BANG_(to);
var state_52309__$1 = state_52309;
var statearr_52329_53806 = state_52309__$1;
(statearr_52329_53806[(2)] = inst_52287);

(statearr_52329_53806[(1)] = (10));


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
});})(c__51963__auto___53771))
;
return ((function (switch__51789__auto__,c__51963__auto___53771){
return (function() {
var cljs$core$async$state_machine__51790__auto__ = null;
var cljs$core$async$state_machine__51790__auto____0 = (function (){
var statearr_52330 = [null,null,null,null,null,null,null,null];
(statearr_52330[(0)] = cljs$core$async$state_machine__51790__auto__);

(statearr_52330[(1)] = (1));

return statearr_52330;
});
var cljs$core$async$state_machine__51790__auto____1 = (function (state_52309){
while(true){
var ret_value__51791__auto__ = (function (){try{while(true){
var result__51792__auto__ = switch__51789__auto__(state_52309);
if(cljs.core.keyword_identical_QMARK_(result__51792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51792__auto__;
}
break;
}
}catch (e52331){if((e52331 instanceof Object)){
var ex__51793__auto__ = e52331;
var statearr_52332_53807 = state_52309;
(statearr_52332_53807[(5)] = ex__51793__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52331;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53811 = state_52309;
state_52309 = G__53811;
continue;
} else {
return ret_value__51791__auto__;
}
break;
}
});
cljs$core$async$state_machine__51790__auto__ = function(state_52309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51790__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51790__auto____1.call(this,state_52309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51790__auto____0;
cljs$core$async$state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51790__auto____1;
return cljs$core$async$state_machine__51790__auto__;
})()
;})(switch__51789__auto__,c__51963__auto___53771))
})();
var state__51965__auto__ = (function (){var statearr_52333 = (f__51964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51964__auto__.cljs$core$IFn$_invoke$arity$0() : f__51964__auto__.call(null));
(statearr_52333[(6)] = c__51963__auto___53771);

return statearr_52333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51965__auto__);
});})(c__51963__auto___53771))
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
return (function (p__52334){
var vec__52335 = p__52334;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52335,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52335,(1),null);
var job = vec__52335;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__51963__auto___53814 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51963__auto___53814,res,vec__52335,v,p,job,jobs,results){
return (function (){
var f__51964__auto__ = (function (){var switch__51789__auto__ = ((function (c__51963__auto___53814,res,vec__52335,v,p,job,jobs,results){
return (function (state_52342){
var state_val_52343 = (state_52342[(1)]);
if((state_val_52343 === (1))){
var state_52342__$1 = state_52342;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52342__$1,(2),res,v);
} else {
if((state_val_52343 === (2))){
var inst_52339 = (state_52342[(2)]);
var inst_52340 = cljs.core.async.close_BANG_(res);
var state_52342__$1 = (function (){var statearr_52344 = state_52342;
(statearr_52344[(7)] = inst_52339);

return statearr_52344;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52342__$1,inst_52340);
} else {
return null;
}
}
});})(c__51963__auto___53814,res,vec__52335,v,p,job,jobs,results))
;
return ((function (switch__51789__auto__,c__51963__auto___53814,res,vec__52335,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51790__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51790__auto____0 = (function (){
var statearr_52345 = [null,null,null,null,null,null,null,null];
(statearr_52345[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51790__auto__);

(statearr_52345[(1)] = (1));

return statearr_52345;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51790__auto____1 = (function (state_52342){
while(true){
var ret_value__51791__auto__ = (function (){try{while(true){
var result__51792__auto__ = switch__51789__auto__(state_52342);
if(cljs.core.keyword_identical_QMARK_(result__51792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51792__auto__;
}
break;
}
}catch (e52346){if((e52346 instanceof Object)){
var ex__51793__auto__ = e52346;
var statearr_52347_53825 = state_52342;
(statearr_52347_53825[(5)] = ex__51793__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52346;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53830 = state_52342;
state_52342 = G__53830;
continue;
} else {
return ret_value__51791__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51790__auto__ = function(state_52342){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51790__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51790__auto____1.call(this,state_52342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51790__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51790__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51790__auto__;
})()
;})(switch__51789__auto__,c__51963__auto___53814,res,vec__52335,v,p,job,jobs,results))
})();
var state__51965__auto__ = (function (){var statearr_52348 = (f__51964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51964__auto__.cljs$core$IFn$_invoke$arity$0() : f__51964__auto__.call(null));
(statearr_52348[(6)] = c__51963__auto___53814);

return statearr_52348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51965__auto__);
});})(c__51963__auto___53814,res,vec__52335,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__52349){
var vec__52350 = p__52349;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52350,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52350,(1),null);
var job = vec__52350;
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
var n__4607__auto___53844 = n;
var __53845 = (0);
while(true){
if((__53845 < n__4607__auto___53844)){
var G__52353_53846 = type;
var G__52353_53847__$1 = (((G__52353_53846 instanceof cljs.core.Keyword))?G__52353_53846.fqn:null);
switch (G__52353_53847__$1) {
case "compute":
var c__51963__auto___53849 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__53845,c__51963__auto___53849,G__52353_53846,G__52353_53847__$1,n__4607__auto___53844,jobs,results,process,async){
return (function (){
var f__51964__auto__ = (function (){var switch__51789__auto__ = ((function (__53845,c__51963__auto___53849,G__52353_53846,G__52353_53847__$1,n__4607__auto___53844,jobs,results,process,async){
return (function (state_52366){
var state_val_52367 = (state_52366[(1)]);
if((state_val_52367 === (1))){
var state_52366__$1 = state_52366;
var statearr_52368_53853 = state_52366__$1;
(statearr_52368_53853[(2)] = null);

(statearr_52368_53853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52367 === (2))){
var state_52366__$1 = state_52366;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52366__$1,(4),jobs);
} else {
if((state_val_52367 === (3))){
var inst_52364 = (state_52366[(2)]);
var state_52366__$1 = state_52366;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52366__$1,inst_52364);
} else {
if((state_val_52367 === (4))){
var inst_52356 = (state_52366[(2)]);
var inst_52357 = process(inst_52356);
var state_52366__$1 = state_52366;
if(cljs.core.truth_(inst_52357)){
var statearr_52369_53855 = state_52366__$1;
(statearr_52369_53855[(1)] = (5));

} else {
var statearr_52370_53856 = state_52366__$1;
(statearr_52370_53856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52367 === (5))){
var state_52366__$1 = state_52366;
var statearr_52371_53858 = state_52366__$1;
(statearr_52371_53858[(2)] = null);

(statearr_52371_53858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52367 === (6))){
var state_52366__$1 = state_52366;
var statearr_52372_53862 = state_52366__$1;
(statearr_52372_53862[(2)] = null);

(statearr_52372_53862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52367 === (7))){
var inst_52362 = (state_52366[(2)]);
var state_52366__$1 = state_52366;
var statearr_52373_53866 = state_52366__$1;
(statearr_52373_53866[(2)] = inst_52362);

(statearr_52373_53866[(1)] = (3));


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
});})(__53845,c__51963__auto___53849,G__52353_53846,G__52353_53847__$1,n__4607__auto___53844,jobs,results,process,async))
;
return ((function (__53845,switch__51789__auto__,c__51963__auto___53849,G__52353_53846,G__52353_53847__$1,n__4607__auto___53844,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51790__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51790__auto____0 = (function (){
var statearr_52374 = [null,null,null,null,null,null,null];
(statearr_52374[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51790__auto__);

(statearr_52374[(1)] = (1));

return statearr_52374;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51790__auto____1 = (function (state_52366){
while(true){
var ret_value__51791__auto__ = (function (){try{while(true){
var result__51792__auto__ = switch__51789__auto__(state_52366);
if(cljs.core.keyword_identical_QMARK_(result__51792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51792__auto__;
}
break;
}
}catch (e52375){if((e52375 instanceof Object)){
var ex__51793__auto__ = e52375;
var statearr_52376_53874 = state_52366;
(statearr_52376_53874[(5)] = ex__51793__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52375;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53876 = state_52366;
state_52366 = G__53876;
continue;
} else {
return ret_value__51791__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51790__auto__ = function(state_52366){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51790__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51790__auto____1.call(this,state_52366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51790__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51790__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51790__auto__;
})()
;})(__53845,switch__51789__auto__,c__51963__auto___53849,G__52353_53846,G__52353_53847__$1,n__4607__auto___53844,jobs,results,process,async))
})();
var state__51965__auto__ = (function (){var statearr_52377 = (f__51964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51964__auto__.cljs$core$IFn$_invoke$arity$0() : f__51964__auto__.call(null));
(statearr_52377[(6)] = c__51963__auto___53849);

return statearr_52377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51965__auto__);
});})(__53845,c__51963__auto___53849,G__52353_53846,G__52353_53847__$1,n__4607__auto___53844,jobs,results,process,async))
);


break;
case "async":
var c__51963__auto___53882 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__53845,c__51963__auto___53882,G__52353_53846,G__52353_53847__$1,n__4607__auto___53844,jobs,results,process,async){
return (function (){
var f__51964__auto__ = (function (){var switch__51789__auto__ = ((function (__53845,c__51963__auto___53882,G__52353_53846,G__52353_53847__$1,n__4607__auto___53844,jobs,results,process,async){
return (function (state_52390){
var state_val_52391 = (state_52390[(1)]);
if((state_val_52391 === (1))){
var state_52390__$1 = state_52390;
var statearr_52392_53885 = state_52390__$1;
(statearr_52392_53885[(2)] = null);

(statearr_52392_53885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52391 === (2))){
var state_52390__$1 = state_52390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52390__$1,(4),jobs);
} else {
if((state_val_52391 === (3))){
var inst_52388 = (state_52390[(2)]);
var state_52390__$1 = state_52390;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52390__$1,inst_52388);
} else {
if((state_val_52391 === (4))){
var inst_52380 = (state_52390[(2)]);
var inst_52381 = async(inst_52380);
var state_52390__$1 = state_52390;
if(cljs.core.truth_(inst_52381)){
var statearr_52393_53887 = state_52390__$1;
(statearr_52393_53887[(1)] = (5));

} else {
var statearr_52394_53888 = state_52390__$1;
(statearr_52394_53888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52391 === (5))){
var state_52390__$1 = state_52390;
var statearr_52395_53890 = state_52390__$1;
(statearr_52395_53890[(2)] = null);

(statearr_52395_53890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52391 === (6))){
var state_52390__$1 = state_52390;
var statearr_52396_53891 = state_52390__$1;
(statearr_52396_53891[(2)] = null);

(statearr_52396_53891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52391 === (7))){
var inst_52386 = (state_52390[(2)]);
var state_52390__$1 = state_52390;
var statearr_52397_53893 = state_52390__$1;
(statearr_52397_53893[(2)] = inst_52386);

(statearr_52397_53893[(1)] = (3));


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
});})(__53845,c__51963__auto___53882,G__52353_53846,G__52353_53847__$1,n__4607__auto___53844,jobs,results,process,async))
;
return ((function (__53845,switch__51789__auto__,c__51963__auto___53882,G__52353_53846,G__52353_53847__$1,n__4607__auto___53844,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51790__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51790__auto____0 = (function (){
var statearr_52398 = [null,null,null,null,null,null,null];
(statearr_52398[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51790__auto__);

(statearr_52398[(1)] = (1));

return statearr_52398;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51790__auto____1 = (function (state_52390){
while(true){
var ret_value__51791__auto__ = (function (){try{while(true){
var result__51792__auto__ = switch__51789__auto__(state_52390);
if(cljs.core.keyword_identical_QMARK_(result__51792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51792__auto__;
}
break;
}
}catch (e52399){if((e52399 instanceof Object)){
var ex__51793__auto__ = e52399;
var statearr_52400_53897 = state_52390;
(statearr_52400_53897[(5)] = ex__51793__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52399;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53899 = state_52390;
state_52390 = G__53899;
continue;
} else {
return ret_value__51791__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51790__auto__ = function(state_52390){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51790__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51790__auto____1.call(this,state_52390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51790__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51790__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51790__auto__;
})()
;})(__53845,switch__51789__auto__,c__51963__auto___53882,G__52353_53846,G__52353_53847__$1,n__4607__auto___53844,jobs,results,process,async))
})();
var state__51965__auto__ = (function (){var statearr_52401 = (f__51964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51964__auto__.cljs$core$IFn$_invoke$arity$0() : f__51964__auto__.call(null));
(statearr_52401[(6)] = c__51963__auto___53882);

return statearr_52401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51965__auto__);
});})(__53845,c__51963__auto___53882,G__52353_53846,G__52353_53847__$1,n__4607__auto___53844,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52353_53847__$1)].join('')));

}

var G__53903 = (__53845 + (1));
__53845 = G__53903;
continue;
} else {
}
break;
}

var c__51963__auto___53904 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51963__auto___53904,jobs,results,process,async){
return (function (){
var f__51964__auto__ = (function (){var switch__51789__auto__ = ((function (c__51963__auto___53904,jobs,results,process,async){
return (function (state_52423){
var state_val_52424 = (state_52423[(1)]);
if((state_val_52424 === (7))){
var inst_52419 = (state_52423[(2)]);
var state_52423__$1 = state_52423;
var statearr_52425_53906 = state_52423__$1;
(statearr_52425_53906[(2)] = inst_52419);

(statearr_52425_53906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52424 === (1))){
var state_52423__$1 = state_52423;
var statearr_52426_53908 = state_52423__$1;
(statearr_52426_53908[(2)] = null);

(statearr_52426_53908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52424 === (4))){
var inst_52404 = (state_52423[(7)]);
var inst_52404__$1 = (state_52423[(2)]);
var inst_52405 = (inst_52404__$1 == null);
var state_52423__$1 = (function (){var statearr_52427 = state_52423;
(statearr_52427[(7)] = inst_52404__$1);

return statearr_52427;
})();
if(cljs.core.truth_(inst_52405)){
var statearr_52428_53909 = state_52423__$1;
(statearr_52428_53909[(1)] = (5));

} else {
var statearr_52429_53910 = state_52423__$1;
(statearr_52429_53910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52424 === (6))){
var inst_52404 = (state_52423[(7)]);
var inst_52409 = (state_52423[(8)]);
var inst_52409__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_52410 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52411 = [inst_52404,inst_52409__$1];
var inst_52412 = (new cljs.core.PersistentVector(null,2,(5),inst_52410,inst_52411,null));
var state_52423__$1 = (function (){var statearr_52430 = state_52423;
(statearr_52430[(8)] = inst_52409__$1);

return statearr_52430;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52423__$1,(8),jobs,inst_52412);
} else {
if((state_val_52424 === (3))){
var inst_52421 = (state_52423[(2)]);
var state_52423__$1 = state_52423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52423__$1,inst_52421);
} else {
if((state_val_52424 === (2))){
var state_52423__$1 = state_52423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52423__$1,(4),from);
} else {
if((state_val_52424 === (9))){
var inst_52416 = (state_52423[(2)]);
var state_52423__$1 = (function (){var statearr_52431 = state_52423;
(statearr_52431[(9)] = inst_52416);

return statearr_52431;
})();
var statearr_52432_53914 = state_52423__$1;
(statearr_52432_53914[(2)] = null);

(statearr_52432_53914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52424 === (5))){
var inst_52407 = cljs.core.async.close_BANG_(jobs);
var state_52423__$1 = state_52423;
var statearr_52433_53917 = state_52423__$1;
(statearr_52433_53917[(2)] = inst_52407);

(statearr_52433_53917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52424 === (8))){
var inst_52409 = (state_52423[(8)]);
var inst_52414 = (state_52423[(2)]);
var state_52423__$1 = (function (){var statearr_52434 = state_52423;
(statearr_52434[(10)] = inst_52414);

return statearr_52434;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52423__$1,(9),results,inst_52409);
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
});})(c__51963__auto___53904,jobs,results,process,async))
;
return ((function (switch__51789__auto__,c__51963__auto___53904,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51790__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51790__auto____0 = (function (){
var statearr_52435 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52435[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51790__auto__);

(statearr_52435[(1)] = (1));

return statearr_52435;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51790__auto____1 = (function (state_52423){
while(true){
var ret_value__51791__auto__ = (function (){try{while(true){
var result__51792__auto__ = switch__51789__auto__(state_52423);
if(cljs.core.keyword_identical_QMARK_(result__51792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51792__auto__;
}
break;
}
}catch (e52436){if((e52436 instanceof Object)){
var ex__51793__auto__ = e52436;
var statearr_52437_53919 = state_52423;
(statearr_52437_53919[(5)] = ex__51793__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52436;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53920 = state_52423;
state_52423 = G__53920;
continue;
} else {
return ret_value__51791__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51790__auto__ = function(state_52423){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51790__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51790__auto____1.call(this,state_52423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51790__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51790__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51790__auto__;
})()
;})(switch__51789__auto__,c__51963__auto___53904,jobs,results,process,async))
})();
var state__51965__auto__ = (function (){var statearr_52438 = (f__51964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51964__auto__.cljs$core$IFn$_invoke$arity$0() : f__51964__auto__.call(null));
(statearr_52438[(6)] = c__51963__auto___53904);

return statearr_52438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51965__auto__);
});})(c__51963__auto___53904,jobs,results,process,async))
);


var c__51963__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51963__auto__,jobs,results,process,async){
return (function (){
var f__51964__auto__ = (function (){var switch__51789__auto__ = ((function (c__51963__auto__,jobs,results,process,async){
return (function (state_52476){
var state_val_52477 = (state_52476[(1)]);
if((state_val_52477 === (7))){
var inst_52472 = (state_52476[(2)]);
var state_52476__$1 = state_52476;
var statearr_52478_53921 = state_52476__$1;
(statearr_52478_53921[(2)] = inst_52472);

(statearr_52478_53921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52477 === (20))){
var state_52476__$1 = state_52476;
var statearr_52479_53922 = state_52476__$1;
(statearr_52479_53922[(2)] = null);

(statearr_52479_53922[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52477 === (1))){
var state_52476__$1 = state_52476;
var statearr_52480_53923 = state_52476__$1;
(statearr_52480_53923[(2)] = null);

(statearr_52480_53923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52477 === (4))){
var inst_52441 = (state_52476[(7)]);
var inst_52441__$1 = (state_52476[(2)]);
var inst_52442 = (inst_52441__$1 == null);
var state_52476__$1 = (function (){var statearr_52481 = state_52476;
(statearr_52481[(7)] = inst_52441__$1);

return statearr_52481;
})();
if(cljs.core.truth_(inst_52442)){
var statearr_52482_53924 = state_52476__$1;
(statearr_52482_53924[(1)] = (5));

} else {
var statearr_52483_53925 = state_52476__$1;
(statearr_52483_53925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52477 === (15))){
var inst_52454 = (state_52476[(8)]);
var state_52476__$1 = state_52476;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52476__$1,(18),to,inst_52454);
} else {
if((state_val_52477 === (21))){
var inst_52467 = (state_52476[(2)]);
var state_52476__$1 = state_52476;
var statearr_52484_53926 = state_52476__$1;
(statearr_52484_53926[(2)] = inst_52467);

(statearr_52484_53926[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52477 === (13))){
var inst_52469 = (state_52476[(2)]);
var state_52476__$1 = (function (){var statearr_52485 = state_52476;
(statearr_52485[(9)] = inst_52469);

return statearr_52485;
})();
var statearr_52486_53927 = state_52476__$1;
(statearr_52486_53927[(2)] = null);

(statearr_52486_53927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52477 === (6))){
var inst_52441 = (state_52476[(7)]);
var state_52476__$1 = state_52476;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52476__$1,(11),inst_52441);
} else {
if((state_val_52477 === (17))){
var inst_52462 = (state_52476[(2)]);
var state_52476__$1 = state_52476;
if(cljs.core.truth_(inst_52462)){
var statearr_52487_53928 = state_52476__$1;
(statearr_52487_53928[(1)] = (19));

} else {
var statearr_52488_53929 = state_52476__$1;
(statearr_52488_53929[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52477 === (3))){
var inst_52474 = (state_52476[(2)]);
var state_52476__$1 = state_52476;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52476__$1,inst_52474);
} else {
if((state_val_52477 === (12))){
var inst_52451 = (state_52476[(10)]);
var state_52476__$1 = state_52476;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52476__$1,(14),inst_52451);
} else {
if((state_val_52477 === (2))){
var state_52476__$1 = state_52476;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52476__$1,(4),results);
} else {
if((state_val_52477 === (19))){
var state_52476__$1 = state_52476;
var statearr_52489_53930 = state_52476__$1;
(statearr_52489_53930[(2)] = null);

(statearr_52489_53930[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52477 === (11))){
var inst_52451 = (state_52476[(2)]);
var state_52476__$1 = (function (){var statearr_52490 = state_52476;
(statearr_52490[(10)] = inst_52451);

return statearr_52490;
})();
var statearr_52491_53931 = state_52476__$1;
(statearr_52491_53931[(2)] = null);

(statearr_52491_53931[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52477 === (9))){
var state_52476__$1 = state_52476;
var statearr_52492_53932 = state_52476__$1;
(statearr_52492_53932[(2)] = null);

(statearr_52492_53932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52477 === (5))){
var state_52476__$1 = state_52476;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52493_53933 = state_52476__$1;
(statearr_52493_53933[(1)] = (8));

} else {
var statearr_52494_53934 = state_52476__$1;
(statearr_52494_53934[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52477 === (14))){
var inst_52456 = (state_52476[(11)]);
var inst_52454 = (state_52476[(8)]);
var inst_52454__$1 = (state_52476[(2)]);
var inst_52455 = (inst_52454__$1 == null);
var inst_52456__$1 = cljs.core.not(inst_52455);
var state_52476__$1 = (function (){var statearr_52495 = state_52476;
(statearr_52495[(11)] = inst_52456__$1);

(statearr_52495[(8)] = inst_52454__$1);

return statearr_52495;
})();
if(inst_52456__$1){
var statearr_52496_53935 = state_52476__$1;
(statearr_52496_53935[(1)] = (15));

} else {
var statearr_52497_53936 = state_52476__$1;
(statearr_52497_53936[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52477 === (16))){
var inst_52456 = (state_52476[(11)]);
var state_52476__$1 = state_52476;
var statearr_52498_53938 = state_52476__$1;
(statearr_52498_53938[(2)] = inst_52456);

(statearr_52498_53938[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52477 === (10))){
var inst_52448 = (state_52476[(2)]);
var state_52476__$1 = state_52476;
var statearr_52499_53939 = state_52476__$1;
(statearr_52499_53939[(2)] = inst_52448);

(statearr_52499_53939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52477 === (18))){
var inst_52459 = (state_52476[(2)]);
var state_52476__$1 = state_52476;
var statearr_52500_53940 = state_52476__$1;
(statearr_52500_53940[(2)] = inst_52459);

(statearr_52500_53940[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52477 === (8))){
var inst_52445 = cljs.core.async.close_BANG_(to);
var state_52476__$1 = state_52476;
var statearr_52501_53946 = state_52476__$1;
(statearr_52501_53946[(2)] = inst_52445);

(statearr_52501_53946[(1)] = (10));


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
});})(c__51963__auto__,jobs,results,process,async))
;
return ((function (switch__51789__auto__,c__51963__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51790__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51790__auto____0 = (function (){
var statearr_52502 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52502[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51790__auto__);

(statearr_52502[(1)] = (1));

return statearr_52502;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51790__auto____1 = (function (state_52476){
while(true){
var ret_value__51791__auto__ = (function (){try{while(true){
var result__51792__auto__ = switch__51789__auto__(state_52476);
if(cljs.core.keyword_identical_QMARK_(result__51792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51792__auto__;
}
break;
}
}catch (e52503){if((e52503 instanceof Object)){
var ex__51793__auto__ = e52503;
var statearr_52504_53949 = state_52476;
(statearr_52504_53949[(5)] = ex__51793__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52503;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53950 = state_52476;
state_52476 = G__53950;
continue;
} else {
return ret_value__51791__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51790__auto__ = function(state_52476){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51790__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51790__auto____1.call(this,state_52476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51790__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51790__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51790__auto__;
})()
;})(switch__51789__auto__,c__51963__auto__,jobs,results,process,async))
})();
var state__51965__auto__ = (function (){var statearr_52505 = (f__51964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51964__auto__.cljs$core$IFn$_invoke$arity$0() : f__51964__auto__.call(null));
(statearr_52505[(6)] = c__51963__auto__);

return statearr_52505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51965__auto__);
});})(c__51963__auto__,jobs,results,process,async))
);

return c__51963__auto__;
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
var G__52507 = arguments.length;
switch (G__52507) {
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
var G__52509 = arguments.length;
switch (G__52509) {
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
var G__52511 = arguments.length;
switch (G__52511) {
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
var c__51963__auto___53971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51963__auto___53971,tc,fc){
return (function (){
var f__51964__auto__ = (function (){var switch__51789__auto__ = ((function (c__51963__auto___53971,tc,fc){
return (function (state_52537){
var state_val_52538 = (state_52537[(1)]);
if((state_val_52538 === (7))){
var inst_52533 = (state_52537[(2)]);
var state_52537__$1 = state_52537;
var statearr_52539_53972 = state_52537__$1;
(statearr_52539_53972[(2)] = inst_52533);

(statearr_52539_53972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52538 === (1))){
var state_52537__$1 = state_52537;
var statearr_52540_53973 = state_52537__$1;
(statearr_52540_53973[(2)] = null);

(statearr_52540_53973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52538 === (4))){
var inst_52514 = (state_52537[(7)]);
var inst_52514__$1 = (state_52537[(2)]);
var inst_52515 = (inst_52514__$1 == null);
var state_52537__$1 = (function (){var statearr_52541 = state_52537;
(statearr_52541[(7)] = inst_52514__$1);

return statearr_52541;
})();
if(cljs.core.truth_(inst_52515)){
var statearr_52542_53975 = state_52537__$1;
(statearr_52542_53975[(1)] = (5));

} else {
var statearr_52543_53976 = state_52537__$1;
(statearr_52543_53976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52538 === (13))){
var state_52537__$1 = state_52537;
var statearr_52544_53977 = state_52537__$1;
(statearr_52544_53977[(2)] = null);

(statearr_52544_53977[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52538 === (6))){
var inst_52514 = (state_52537[(7)]);
var inst_52520 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_52514) : p.call(null,inst_52514));
var state_52537__$1 = state_52537;
if(cljs.core.truth_(inst_52520)){
var statearr_52545_53980 = state_52537__$1;
(statearr_52545_53980[(1)] = (9));

} else {
var statearr_52546_53983 = state_52537__$1;
(statearr_52546_53983[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52538 === (3))){
var inst_52535 = (state_52537[(2)]);
var state_52537__$1 = state_52537;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52537__$1,inst_52535);
} else {
if((state_val_52538 === (12))){
var state_52537__$1 = state_52537;
var statearr_52547_53984 = state_52537__$1;
(statearr_52547_53984[(2)] = null);

(statearr_52547_53984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52538 === (2))){
var state_52537__$1 = state_52537;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52537__$1,(4),ch);
} else {
if((state_val_52538 === (11))){
var inst_52514 = (state_52537[(7)]);
var inst_52524 = (state_52537[(2)]);
var state_52537__$1 = state_52537;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52537__$1,(8),inst_52524,inst_52514);
} else {
if((state_val_52538 === (9))){
var state_52537__$1 = state_52537;
var statearr_52548_53986 = state_52537__$1;
(statearr_52548_53986[(2)] = tc);

(statearr_52548_53986[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52538 === (5))){
var inst_52517 = cljs.core.async.close_BANG_(tc);
var inst_52518 = cljs.core.async.close_BANG_(fc);
var state_52537__$1 = (function (){var statearr_52549 = state_52537;
(statearr_52549[(8)] = inst_52517);

return statearr_52549;
})();
var statearr_52550_53991 = state_52537__$1;
(statearr_52550_53991[(2)] = inst_52518);

(statearr_52550_53991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52538 === (14))){
var inst_52531 = (state_52537[(2)]);
var state_52537__$1 = state_52537;
var statearr_52551_53992 = state_52537__$1;
(statearr_52551_53992[(2)] = inst_52531);

(statearr_52551_53992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52538 === (10))){
var state_52537__$1 = state_52537;
var statearr_52552_53993 = state_52537__$1;
(statearr_52552_53993[(2)] = fc);

(statearr_52552_53993[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52538 === (8))){
var inst_52526 = (state_52537[(2)]);
var state_52537__$1 = state_52537;
if(cljs.core.truth_(inst_52526)){
var statearr_52553_53994 = state_52537__$1;
(statearr_52553_53994[(1)] = (12));

} else {
var statearr_52554_53995 = state_52537__$1;
(statearr_52554_53995[(1)] = (13));

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
});})(c__51963__auto___53971,tc,fc))
;
return ((function (switch__51789__auto__,c__51963__auto___53971,tc,fc){
return (function() {
var cljs$core$async$state_machine__51790__auto__ = null;
var cljs$core$async$state_machine__51790__auto____0 = (function (){
var statearr_52555 = [null,null,null,null,null,null,null,null,null];
(statearr_52555[(0)] = cljs$core$async$state_machine__51790__auto__);

(statearr_52555[(1)] = (1));

return statearr_52555;
});
var cljs$core$async$state_machine__51790__auto____1 = (function (state_52537){
while(true){
var ret_value__51791__auto__ = (function (){try{while(true){
var result__51792__auto__ = switch__51789__auto__(state_52537);
if(cljs.core.keyword_identical_QMARK_(result__51792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51792__auto__;
}
break;
}
}catch (e52556){if((e52556 instanceof Object)){
var ex__51793__auto__ = e52556;
var statearr_52557_53998 = state_52537;
(statearr_52557_53998[(5)] = ex__51793__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52556;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54000 = state_52537;
state_52537 = G__54000;
continue;
} else {
return ret_value__51791__auto__;
}
break;
}
});
cljs$core$async$state_machine__51790__auto__ = function(state_52537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51790__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51790__auto____1.call(this,state_52537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51790__auto____0;
cljs$core$async$state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51790__auto____1;
return cljs$core$async$state_machine__51790__auto__;
})()
;})(switch__51789__auto__,c__51963__auto___53971,tc,fc))
})();
var state__51965__auto__ = (function (){var statearr_52558 = (f__51964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51964__auto__.cljs$core$IFn$_invoke$arity$0() : f__51964__auto__.call(null));
(statearr_52558[(6)] = c__51963__auto___53971);

return statearr_52558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51965__auto__);
});})(c__51963__auto___53971,tc,fc))
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
var c__51963__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51963__auto__){
return (function (){
var f__51964__auto__ = (function (){var switch__51789__auto__ = ((function (c__51963__auto__){
return (function (state_52579){
var state_val_52580 = (state_52579[(1)]);
if((state_val_52580 === (7))){
var inst_52575 = (state_52579[(2)]);
var state_52579__$1 = state_52579;
var statearr_52581_54004 = state_52579__$1;
(statearr_52581_54004[(2)] = inst_52575);

(statearr_52581_54004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52580 === (1))){
var inst_52559 = init;
var state_52579__$1 = (function (){var statearr_52582 = state_52579;
(statearr_52582[(7)] = inst_52559);

return statearr_52582;
})();
var statearr_52583_54005 = state_52579__$1;
(statearr_52583_54005[(2)] = null);

(statearr_52583_54005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52580 === (4))){
var inst_52562 = (state_52579[(8)]);
var inst_52562__$1 = (state_52579[(2)]);
var inst_52563 = (inst_52562__$1 == null);
var state_52579__$1 = (function (){var statearr_52584 = state_52579;
(statearr_52584[(8)] = inst_52562__$1);

return statearr_52584;
})();
if(cljs.core.truth_(inst_52563)){
var statearr_52585_54009 = state_52579__$1;
(statearr_52585_54009[(1)] = (5));

} else {
var statearr_52586_54011 = state_52579__$1;
(statearr_52586_54011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52580 === (6))){
var inst_52566 = (state_52579[(9)]);
var inst_52559 = (state_52579[(7)]);
var inst_52562 = (state_52579[(8)]);
var inst_52566__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_52559,inst_52562) : f.call(null,inst_52559,inst_52562));
var inst_52567 = cljs.core.reduced_QMARK_(inst_52566__$1);
var state_52579__$1 = (function (){var statearr_52587 = state_52579;
(statearr_52587[(9)] = inst_52566__$1);

return statearr_52587;
})();
if(inst_52567){
var statearr_52588_54014 = state_52579__$1;
(statearr_52588_54014[(1)] = (8));

} else {
var statearr_52589_54015 = state_52579__$1;
(statearr_52589_54015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52580 === (3))){
var inst_52577 = (state_52579[(2)]);
var state_52579__$1 = state_52579;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52579__$1,inst_52577);
} else {
if((state_val_52580 === (2))){
var state_52579__$1 = state_52579;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52579__$1,(4),ch);
} else {
if((state_val_52580 === (9))){
var inst_52566 = (state_52579[(9)]);
var inst_52559 = inst_52566;
var state_52579__$1 = (function (){var statearr_52590 = state_52579;
(statearr_52590[(7)] = inst_52559);

return statearr_52590;
})();
var statearr_52591_54019 = state_52579__$1;
(statearr_52591_54019[(2)] = null);

(statearr_52591_54019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52580 === (5))){
var inst_52559 = (state_52579[(7)]);
var state_52579__$1 = state_52579;
var statearr_52592_54020 = state_52579__$1;
(statearr_52592_54020[(2)] = inst_52559);

(statearr_52592_54020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52580 === (10))){
var inst_52573 = (state_52579[(2)]);
var state_52579__$1 = state_52579;
var statearr_52593_54026 = state_52579__$1;
(statearr_52593_54026[(2)] = inst_52573);

(statearr_52593_54026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52580 === (8))){
var inst_52566 = (state_52579[(9)]);
var inst_52569 = cljs.core.deref(inst_52566);
var state_52579__$1 = state_52579;
var statearr_52594_54030 = state_52579__$1;
(statearr_52594_54030[(2)] = inst_52569);

(statearr_52594_54030[(1)] = (10));


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
});})(c__51963__auto__))
;
return ((function (switch__51789__auto__,c__51963__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__51790__auto__ = null;
var cljs$core$async$reduce_$_state_machine__51790__auto____0 = (function (){
var statearr_52595 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52595[(0)] = cljs$core$async$reduce_$_state_machine__51790__auto__);

(statearr_52595[(1)] = (1));

return statearr_52595;
});
var cljs$core$async$reduce_$_state_machine__51790__auto____1 = (function (state_52579){
while(true){
var ret_value__51791__auto__ = (function (){try{while(true){
var result__51792__auto__ = switch__51789__auto__(state_52579);
if(cljs.core.keyword_identical_QMARK_(result__51792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51792__auto__;
}
break;
}
}catch (e52596){if((e52596 instanceof Object)){
var ex__51793__auto__ = e52596;
var statearr_52597_54032 = state_52579;
(statearr_52597_54032[(5)] = ex__51793__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52596;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54033 = state_52579;
state_52579 = G__54033;
continue;
} else {
return ret_value__51791__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__51790__auto__ = function(state_52579){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__51790__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__51790__auto____1.call(this,state_52579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__51790__auto____0;
cljs$core$async$reduce_$_state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__51790__auto____1;
return cljs$core$async$reduce_$_state_machine__51790__auto__;
})()
;})(switch__51789__auto__,c__51963__auto__))
})();
var state__51965__auto__ = (function (){var statearr_52598 = (f__51964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51964__auto__.cljs$core$IFn$_invoke$arity$0() : f__51964__auto__.call(null));
(statearr_52598[(6)] = c__51963__auto__);

return statearr_52598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51965__auto__);
});})(c__51963__auto__))
);

return c__51963__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__51963__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51963__auto__,f__$1){
return (function (){
var f__51964__auto__ = (function (){var switch__51789__auto__ = ((function (c__51963__auto__,f__$1){
return (function (state_52604){
var state_val_52605 = (state_52604[(1)]);
if((state_val_52605 === (1))){
var inst_52599 = cljs.core.async.reduce(f__$1,init,ch);
var state_52604__$1 = state_52604;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52604__$1,(2),inst_52599);
} else {
if((state_val_52605 === (2))){
var inst_52601 = (state_52604[(2)]);
var inst_52602 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_52601) : f__$1.call(null,inst_52601));
var state_52604__$1 = state_52604;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52604__$1,inst_52602);
} else {
return null;
}
}
});})(c__51963__auto__,f__$1))
;
return ((function (switch__51789__auto__,c__51963__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__51790__auto__ = null;
var cljs$core$async$transduce_$_state_machine__51790__auto____0 = (function (){
var statearr_52606 = [null,null,null,null,null,null,null];
(statearr_52606[(0)] = cljs$core$async$transduce_$_state_machine__51790__auto__);

(statearr_52606[(1)] = (1));

return statearr_52606;
});
var cljs$core$async$transduce_$_state_machine__51790__auto____1 = (function (state_52604){
while(true){
var ret_value__51791__auto__ = (function (){try{while(true){
var result__51792__auto__ = switch__51789__auto__(state_52604);
if(cljs.core.keyword_identical_QMARK_(result__51792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51792__auto__;
}
break;
}
}catch (e52607){if((e52607 instanceof Object)){
var ex__51793__auto__ = e52607;
var statearr_52608_54042 = state_52604;
(statearr_52608_54042[(5)] = ex__51793__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52607;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54043 = state_52604;
state_52604 = G__54043;
continue;
} else {
return ret_value__51791__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__51790__auto__ = function(state_52604){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__51790__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__51790__auto____1.call(this,state_52604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__51790__auto____0;
cljs$core$async$transduce_$_state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__51790__auto____1;
return cljs$core$async$transduce_$_state_machine__51790__auto__;
})()
;})(switch__51789__auto__,c__51963__auto__,f__$1))
})();
var state__51965__auto__ = (function (){var statearr_52609 = (f__51964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51964__auto__.cljs$core$IFn$_invoke$arity$0() : f__51964__auto__.call(null));
(statearr_52609[(6)] = c__51963__auto__);

return statearr_52609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51965__auto__);
});})(c__51963__auto__,f__$1))
);

return c__51963__auto__;
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
var G__52611 = arguments.length;
switch (G__52611) {
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
var c__51963__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51963__auto__){
return (function (){
var f__51964__auto__ = (function (){var switch__51789__auto__ = ((function (c__51963__auto__){
return (function (state_52636){
var state_val_52637 = (state_52636[(1)]);
if((state_val_52637 === (7))){
var inst_52618 = (state_52636[(2)]);
var state_52636__$1 = state_52636;
var statearr_52638_54047 = state_52636__$1;
(statearr_52638_54047[(2)] = inst_52618);

(statearr_52638_54047[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52637 === (1))){
var inst_52612 = cljs.core.seq(coll);
var inst_52613 = inst_52612;
var state_52636__$1 = (function (){var statearr_52639 = state_52636;
(statearr_52639[(7)] = inst_52613);

return statearr_52639;
})();
var statearr_52640_54048 = state_52636__$1;
(statearr_52640_54048[(2)] = null);

(statearr_52640_54048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52637 === (4))){
var inst_52613 = (state_52636[(7)]);
var inst_52616 = cljs.core.first(inst_52613);
var state_52636__$1 = state_52636;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52636__$1,(7),ch,inst_52616);
} else {
if((state_val_52637 === (13))){
var inst_52630 = (state_52636[(2)]);
var state_52636__$1 = state_52636;
var statearr_52641_54050 = state_52636__$1;
(statearr_52641_54050[(2)] = inst_52630);

(statearr_52641_54050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52637 === (6))){
var inst_52621 = (state_52636[(2)]);
var state_52636__$1 = state_52636;
if(cljs.core.truth_(inst_52621)){
var statearr_52642_54051 = state_52636__$1;
(statearr_52642_54051[(1)] = (8));

} else {
var statearr_52643_54052 = state_52636__$1;
(statearr_52643_54052[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52637 === (3))){
var inst_52634 = (state_52636[(2)]);
var state_52636__$1 = state_52636;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52636__$1,inst_52634);
} else {
if((state_val_52637 === (12))){
var state_52636__$1 = state_52636;
var statearr_52644_54056 = state_52636__$1;
(statearr_52644_54056[(2)] = null);

(statearr_52644_54056[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52637 === (2))){
var inst_52613 = (state_52636[(7)]);
var state_52636__$1 = state_52636;
if(cljs.core.truth_(inst_52613)){
var statearr_52645_54058 = state_52636__$1;
(statearr_52645_54058[(1)] = (4));

} else {
var statearr_52646_54059 = state_52636__$1;
(statearr_52646_54059[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52637 === (11))){
var inst_52627 = cljs.core.async.close_BANG_(ch);
var state_52636__$1 = state_52636;
var statearr_52647_54060 = state_52636__$1;
(statearr_52647_54060[(2)] = inst_52627);

(statearr_52647_54060[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52637 === (9))){
var state_52636__$1 = state_52636;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52648_54061 = state_52636__$1;
(statearr_52648_54061[(1)] = (11));

} else {
var statearr_52649_54062 = state_52636__$1;
(statearr_52649_54062[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52637 === (5))){
var inst_52613 = (state_52636[(7)]);
var state_52636__$1 = state_52636;
var statearr_52650_54063 = state_52636__$1;
(statearr_52650_54063[(2)] = inst_52613);

(statearr_52650_54063[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52637 === (10))){
var inst_52632 = (state_52636[(2)]);
var state_52636__$1 = state_52636;
var statearr_52651_54065 = state_52636__$1;
(statearr_52651_54065[(2)] = inst_52632);

(statearr_52651_54065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52637 === (8))){
var inst_52613 = (state_52636[(7)]);
var inst_52623 = cljs.core.next(inst_52613);
var inst_52613__$1 = inst_52623;
var state_52636__$1 = (function (){var statearr_52652 = state_52636;
(statearr_52652[(7)] = inst_52613__$1);

return statearr_52652;
})();
var statearr_52653_54066 = state_52636__$1;
(statearr_52653_54066[(2)] = null);

(statearr_52653_54066[(1)] = (2));


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
});})(c__51963__auto__))
;
return ((function (switch__51789__auto__,c__51963__auto__){
return (function() {
var cljs$core$async$state_machine__51790__auto__ = null;
var cljs$core$async$state_machine__51790__auto____0 = (function (){
var statearr_52654 = [null,null,null,null,null,null,null,null];
(statearr_52654[(0)] = cljs$core$async$state_machine__51790__auto__);

(statearr_52654[(1)] = (1));

return statearr_52654;
});
var cljs$core$async$state_machine__51790__auto____1 = (function (state_52636){
while(true){
var ret_value__51791__auto__ = (function (){try{while(true){
var result__51792__auto__ = switch__51789__auto__(state_52636);
if(cljs.core.keyword_identical_QMARK_(result__51792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51792__auto__;
}
break;
}
}catch (e52655){if((e52655 instanceof Object)){
var ex__51793__auto__ = e52655;
var statearr_52656_54068 = state_52636;
(statearr_52656_54068[(5)] = ex__51793__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52655;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54069 = state_52636;
state_52636 = G__54069;
continue;
} else {
return ret_value__51791__auto__;
}
break;
}
});
cljs$core$async$state_machine__51790__auto__ = function(state_52636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51790__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51790__auto____1.call(this,state_52636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51790__auto____0;
cljs$core$async$state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51790__auto____1;
return cljs$core$async$state_machine__51790__auto__;
})()
;})(switch__51789__auto__,c__51963__auto__))
})();
var state__51965__auto__ = (function (){var statearr_52657 = (f__51964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51964__auto__.cljs$core$IFn$_invoke$arity$0() : f__51964__auto__.call(null));
(statearr_52657[(6)] = c__51963__auto__);

return statearr_52657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51965__auto__);
});})(c__51963__auto__))
);

return c__51963__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52658 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52658 = (function (ch,cs,meta52659){
this.ch = ch;
this.cs = cs;
this.meta52659 = meta52659;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_52660,meta52659__$1){
var self__ = this;
var _52660__$1 = this;
return (new cljs.core.async.t_cljs$core$async52658(self__.ch,self__.cs,meta52659__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async52658.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_52660){
var self__ = this;
var _52660__$1 = this;
return self__.meta52659;
});})(cs))
;

cljs.core.async.t_cljs$core$async52658.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52658.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async52658.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52658.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52658.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52658.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52658.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta52659","meta52659",2059014520,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async52658.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52658.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52658";

cljs.core.async.t_cljs$core$async52658.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async52658");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52658.
 */
cljs.core.async.__GT_t_cljs$core$async52658 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async52658(ch__$1,cs__$1,meta52659){
return (new cljs.core.async.t_cljs$core$async52658(ch__$1,cs__$1,meta52659));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async52658(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__51963__auto___54111 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51963__auto___54111,cs,m,dchan,dctr,done){
return (function (){
var f__51964__auto__ = (function (){var switch__51789__auto__ = ((function (c__51963__auto___54111,cs,m,dchan,dctr,done){
return (function (state_52795){
var state_val_52796 = (state_52795[(1)]);
if((state_val_52796 === (7))){
var inst_52791 = (state_52795[(2)]);
var state_52795__$1 = state_52795;
var statearr_52797_54114 = state_52795__$1;
(statearr_52797_54114[(2)] = inst_52791);

(statearr_52797_54114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (20))){
var inst_52694 = (state_52795[(7)]);
var inst_52706 = cljs.core.first(inst_52694);
var inst_52707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52706,(0),null);
var inst_52708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52706,(1),null);
var state_52795__$1 = (function (){var statearr_52798 = state_52795;
(statearr_52798[(8)] = inst_52707);

return statearr_52798;
})();
if(cljs.core.truth_(inst_52708)){
var statearr_52799_54117 = state_52795__$1;
(statearr_52799_54117[(1)] = (22));

} else {
var statearr_52800_54119 = state_52795__$1;
(statearr_52800_54119[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (27))){
var inst_52743 = (state_52795[(9)]);
var inst_52663 = (state_52795[(10)]);
var inst_52738 = (state_52795[(11)]);
var inst_52736 = (state_52795[(12)]);
var inst_52743__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_52736,inst_52738);
var inst_52744 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_52743__$1,inst_52663,done);
var state_52795__$1 = (function (){var statearr_52801 = state_52795;
(statearr_52801[(9)] = inst_52743__$1);

return statearr_52801;
})();
if(cljs.core.truth_(inst_52744)){
var statearr_52802_54121 = state_52795__$1;
(statearr_52802_54121[(1)] = (30));

} else {
var statearr_52803_54122 = state_52795__$1;
(statearr_52803_54122[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (1))){
var state_52795__$1 = state_52795;
var statearr_52804_54124 = state_52795__$1;
(statearr_52804_54124[(2)] = null);

(statearr_52804_54124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (24))){
var inst_52694 = (state_52795[(7)]);
var inst_52713 = (state_52795[(2)]);
var inst_52714 = cljs.core.next(inst_52694);
var inst_52672 = inst_52714;
var inst_52673 = null;
var inst_52674 = (0);
var inst_52675 = (0);
var state_52795__$1 = (function (){var statearr_52805 = state_52795;
(statearr_52805[(13)] = inst_52675);

(statearr_52805[(14)] = inst_52673);

(statearr_52805[(15)] = inst_52713);

(statearr_52805[(16)] = inst_52674);

(statearr_52805[(17)] = inst_52672);

return statearr_52805;
})();
var statearr_52806_54128 = state_52795__$1;
(statearr_52806_54128[(2)] = null);

(statearr_52806_54128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (39))){
var state_52795__$1 = state_52795;
var statearr_52810_54130 = state_52795__$1;
(statearr_52810_54130[(2)] = null);

(statearr_52810_54130[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (4))){
var inst_52663 = (state_52795[(10)]);
var inst_52663__$1 = (state_52795[(2)]);
var inst_52664 = (inst_52663__$1 == null);
var state_52795__$1 = (function (){var statearr_52811 = state_52795;
(statearr_52811[(10)] = inst_52663__$1);

return statearr_52811;
})();
if(cljs.core.truth_(inst_52664)){
var statearr_52812_54133 = state_52795__$1;
(statearr_52812_54133[(1)] = (5));

} else {
var statearr_52813_54134 = state_52795__$1;
(statearr_52813_54134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (15))){
var inst_52675 = (state_52795[(13)]);
var inst_52673 = (state_52795[(14)]);
var inst_52674 = (state_52795[(16)]);
var inst_52672 = (state_52795[(17)]);
var inst_52690 = (state_52795[(2)]);
var inst_52691 = (inst_52675 + (1));
var tmp52807 = inst_52673;
var tmp52808 = inst_52674;
var tmp52809 = inst_52672;
var inst_52672__$1 = tmp52809;
var inst_52673__$1 = tmp52807;
var inst_52674__$1 = tmp52808;
var inst_52675__$1 = inst_52691;
var state_52795__$1 = (function (){var statearr_52814 = state_52795;
(statearr_52814[(18)] = inst_52690);

(statearr_52814[(13)] = inst_52675__$1);

(statearr_52814[(14)] = inst_52673__$1);

(statearr_52814[(16)] = inst_52674__$1);

(statearr_52814[(17)] = inst_52672__$1);

return statearr_52814;
})();
var statearr_52815_54140 = state_52795__$1;
(statearr_52815_54140[(2)] = null);

(statearr_52815_54140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (21))){
var inst_52717 = (state_52795[(2)]);
var state_52795__$1 = state_52795;
var statearr_52819_54141 = state_52795__$1;
(statearr_52819_54141[(2)] = inst_52717);

(statearr_52819_54141[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (31))){
var inst_52743 = (state_52795[(9)]);
var inst_52747 = done(null);
var inst_52748 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_52743);
var state_52795__$1 = (function (){var statearr_52820 = state_52795;
(statearr_52820[(19)] = inst_52747);

return statearr_52820;
})();
var statearr_52821_54144 = state_52795__$1;
(statearr_52821_54144[(2)] = inst_52748);

(statearr_52821_54144[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (32))){
var inst_52737 = (state_52795[(20)]);
var inst_52738 = (state_52795[(11)]);
var inst_52736 = (state_52795[(12)]);
var inst_52735 = (state_52795[(21)]);
var inst_52750 = (state_52795[(2)]);
var inst_52751 = (inst_52738 + (1));
var tmp52816 = inst_52737;
var tmp52817 = inst_52736;
var tmp52818 = inst_52735;
var inst_52735__$1 = tmp52818;
var inst_52736__$1 = tmp52817;
var inst_52737__$1 = tmp52816;
var inst_52738__$1 = inst_52751;
var state_52795__$1 = (function (){var statearr_52822 = state_52795;
(statearr_52822[(20)] = inst_52737__$1);

(statearr_52822[(11)] = inst_52738__$1);

(statearr_52822[(22)] = inst_52750);

(statearr_52822[(12)] = inst_52736__$1);

(statearr_52822[(21)] = inst_52735__$1);

return statearr_52822;
})();
var statearr_52823_54149 = state_52795__$1;
(statearr_52823_54149[(2)] = null);

(statearr_52823_54149[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (40))){
var inst_52763 = (state_52795[(23)]);
var inst_52767 = done(null);
var inst_52768 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_52763);
var state_52795__$1 = (function (){var statearr_52824 = state_52795;
(statearr_52824[(24)] = inst_52767);

return statearr_52824;
})();
var statearr_52825_54152 = state_52795__$1;
(statearr_52825_54152[(2)] = inst_52768);

(statearr_52825_54152[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (33))){
var inst_52754 = (state_52795[(25)]);
var inst_52756 = cljs.core.chunked_seq_QMARK_(inst_52754);
var state_52795__$1 = state_52795;
if(inst_52756){
var statearr_52826_54153 = state_52795__$1;
(statearr_52826_54153[(1)] = (36));

} else {
var statearr_52827_54154 = state_52795__$1;
(statearr_52827_54154[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (13))){
var inst_52684 = (state_52795[(26)]);
var inst_52687 = cljs.core.async.close_BANG_(inst_52684);
var state_52795__$1 = state_52795;
var statearr_52828_54155 = state_52795__$1;
(statearr_52828_54155[(2)] = inst_52687);

(statearr_52828_54155[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (22))){
var inst_52707 = (state_52795[(8)]);
var inst_52710 = cljs.core.async.close_BANG_(inst_52707);
var state_52795__$1 = state_52795;
var statearr_52829_54156 = state_52795__$1;
(statearr_52829_54156[(2)] = inst_52710);

(statearr_52829_54156[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (36))){
var inst_52754 = (state_52795[(25)]);
var inst_52758 = cljs.core.chunk_first(inst_52754);
var inst_52759 = cljs.core.chunk_rest(inst_52754);
var inst_52760 = cljs.core.count(inst_52758);
var inst_52735 = inst_52759;
var inst_52736 = inst_52758;
var inst_52737 = inst_52760;
var inst_52738 = (0);
var state_52795__$1 = (function (){var statearr_52830 = state_52795;
(statearr_52830[(20)] = inst_52737);

(statearr_52830[(11)] = inst_52738);

(statearr_52830[(12)] = inst_52736);

(statearr_52830[(21)] = inst_52735);

return statearr_52830;
})();
var statearr_52831_54163 = state_52795__$1;
(statearr_52831_54163[(2)] = null);

(statearr_52831_54163[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (41))){
var inst_52754 = (state_52795[(25)]);
var inst_52770 = (state_52795[(2)]);
var inst_52771 = cljs.core.next(inst_52754);
var inst_52735 = inst_52771;
var inst_52736 = null;
var inst_52737 = (0);
var inst_52738 = (0);
var state_52795__$1 = (function (){var statearr_52832 = state_52795;
(statearr_52832[(20)] = inst_52737);

(statearr_52832[(11)] = inst_52738);

(statearr_52832[(27)] = inst_52770);

(statearr_52832[(12)] = inst_52736);

(statearr_52832[(21)] = inst_52735);

return statearr_52832;
})();
var statearr_52833_54164 = state_52795__$1;
(statearr_52833_54164[(2)] = null);

(statearr_52833_54164[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (43))){
var state_52795__$1 = state_52795;
var statearr_52834_54165 = state_52795__$1;
(statearr_52834_54165[(2)] = null);

(statearr_52834_54165[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (29))){
var inst_52779 = (state_52795[(2)]);
var state_52795__$1 = state_52795;
var statearr_52835_54166 = state_52795__$1;
(statearr_52835_54166[(2)] = inst_52779);

(statearr_52835_54166[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (44))){
var inst_52788 = (state_52795[(2)]);
var state_52795__$1 = (function (){var statearr_52836 = state_52795;
(statearr_52836[(28)] = inst_52788);

return statearr_52836;
})();
var statearr_52837_54171 = state_52795__$1;
(statearr_52837_54171[(2)] = null);

(statearr_52837_54171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (6))){
var inst_52727 = (state_52795[(29)]);
var inst_52726 = cljs.core.deref(cs);
var inst_52727__$1 = cljs.core.keys(inst_52726);
var inst_52728 = cljs.core.count(inst_52727__$1);
var inst_52729 = cljs.core.reset_BANG_(dctr,inst_52728);
var inst_52734 = cljs.core.seq(inst_52727__$1);
var inst_52735 = inst_52734;
var inst_52736 = null;
var inst_52737 = (0);
var inst_52738 = (0);
var state_52795__$1 = (function (){var statearr_52838 = state_52795;
(statearr_52838[(20)] = inst_52737);

(statearr_52838[(29)] = inst_52727__$1);

(statearr_52838[(11)] = inst_52738);

(statearr_52838[(30)] = inst_52729);

(statearr_52838[(12)] = inst_52736);

(statearr_52838[(21)] = inst_52735);

return statearr_52838;
})();
var statearr_52839_54175 = state_52795__$1;
(statearr_52839_54175[(2)] = null);

(statearr_52839_54175[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (28))){
var inst_52754 = (state_52795[(25)]);
var inst_52735 = (state_52795[(21)]);
var inst_52754__$1 = cljs.core.seq(inst_52735);
var state_52795__$1 = (function (){var statearr_52840 = state_52795;
(statearr_52840[(25)] = inst_52754__$1);

return statearr_52840;
})();
if(inst_52754__$1){
var statearr_52841_54176 = state_52795__$1;
(statearr_52841_54176[(1)] = (33));

} else {
var statearr_52842_54177 = state_52795__$1;
(statearr_52842_54177[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (25))){
var inst_52737 = (state_52795[(20)]);
var inst_52738 = (state_52795[(11)]);
var inst_52740 = (inst_52738 < inst_52737);
var inst_52741 = inst_52740;
var state_52795__$1 = state_52795;
if(cljs.core.truth_(inst_52741)){
var statearr_52843_54181 = state_52795__$1;
(statearr_52843_54181[(1)] = (27));

} else {
var statearr_52844_54182 = state_52795__$1;
(statearr_52844_54182[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (34))){
var state_52795__$1 = state_52795;
var statearr_52845_54183 = state_52795__$1;
(statearr_52845_54183[(2)] = null);

(statearr_52845_54183[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (17))){
var state_52795__$1 = state_52795;
var statearr_52846_54187 = state_52795__$1;
(statearr_52846_54187[(2)] = null);

(statearr_52846_54187[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (3))){
var inst_52793 = (state_52795[(2)]);
var state_52795__$1 = state_52795;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52795__$1,inst_52793);
} else {
if((state_val_52796 === (12))){
var inst_52722 = (state_52795[(2)]);
var state_52795__$1 = state_52795;
var statearr_52847_54189 = state_52795__$1;
(statearr_52847_54189[(2)] = inst_52722);

(statearr_52847_54189[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (2))){
var state_52795__$1 = state_52795;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52795__$1,(4),ch);
} else {
if((state_val_52796 === (23))){
var state_52795__$1 = state_52795;
var statearr_52848_54193 = state_52795__$1;
(statearr_52848_54193[(2)] = null);

(statearr_52848_54193[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (35))){
var inst_52777 = (state_52795[(2)]);
var state_52795__$1 = state_52795;
var statearr_52849_54194 = state_52795__$1;
(statearr_52849_54194[(2)] = inst_52777);

(statearr_52849_54194[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (19))){
var inst_52694 = (state_52795[(7)]);
var inst_52698 = cljs.core.chunk_first(inst_52694);
var inst_52699 = cljs.core.chunk_rest(inst_52694);
var inst_52700 = cljs.core.count(inst_52698);
var inst_52672 = inst_52699;
var inst_52673 = inst_52698;
var inst_52674 = inst_52700;
var inst_52675 = (0);
var state_52795__$1 = (function (){var statearr_52850 = state_52795;
(statearr_52850[(13)] = inst_52675);

(statearr_52850[(14)] = inst_52673);

(statearr_52850[(16)] = inst_52674);

(statearr_52850[(17)] = inst_52672);

return statearr_52850;
})();
var statearr_52851_54197 = state_52795__$1;
(statearr_52851_54197[(2)] = null);

(statearr_52851_54197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (11))){
var inst_52694 = (state_52795[(7)]);
var inst_52672 = (state_52795[(17)]);
var inst_52694__$1 = cljs.core.seq(inst_52672);
var state_52795__$1 = (function (){var statearr_52852 = state_52795;
(statearr_52852[(7)] = inst_52694__$1);

return statearr_52852;
})();
if(inst_52694__$1){
var statearr_52853_54201 = state_52795__$1;
(statearr_52853_54201[(1)] = (16));

} else {
var statearr_52854_54202 = state_52795__$1;
(statearr_52854_54202[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (9))){
var inst_52724 = (state_52795[(2)]);
var state_52795__$1 = state_52795;
var statearr_52855_54203 = state_52795__$1;
(statearr_52855_54203[(2)] = inst_52724);

(statearr_52855_54203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (5))){
var inst_52670 = cljs.core.deref(cs);
var inst_52671 = cljs.core.seq(inst_52670);
var inst_52672 = inst_52671;
var inst_52673 = null;
var inst_52674 = (0);
var inst_52675 = (0);
var state_52795__$1 = (function (){var statearr_52856 = state_52795;
(statearr_52856[(13)] = inst_52675);

(statearr_52856[(14)] = inst_52673);

(statearr_52856[(16)] = inst_52674);

(statearr_52856[(17)] = inst_52672);

return statearr_52856;
})();
var statearr_52857_54212 = state_52795__$1;
(statearr_52857_54212[(2)] = null);

(statearr_52857_54212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (14))){
var state_52795__$1 = state_52795;
var statearr_52858_54213 = state_52795__$1;
(statearr_52858_54213[(2)] = null);

(statearr_52858_54213[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (45))){
var inst_52785 = (state_52795[(2)]);
var state_52795__$1 = state_52795;
var statearr_52859_54214 = state_52795__$1;
(statearr_52859_54214[(2)] = inst_52785);

(statearr_52859_54214[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (26))){
var inst_52727 = (state_52795[(29)]);
var inst_52781 = (state_52795[(2)]);
var inst_52782 = cljs.core.seq(inst_52727);
var state_52795__$1 = (function (){var statearr_52860 = state_52795;
(statearr_52860[(31)] = inst_52781);

return statearr_52860;
})();
if(inst_52782){
var statearr_52861_54218 = state_52795__$1;
(statearr_52861_54218[(1)] = (42));

} else {
var statearr_52862_54219 = state_52795__$1;
(statearr_52862_54219[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (16))){
var inst_52694 = (state_52795[(7)]);
var inst_52696 = cljs.core.chunked_seq_QMARK_(inst_52694);
var state_52795__$1 = state_52795;
if(inst_52696){
var statearr_52863_54224 = state_52795__$1;
(statearr_52863_54224[(1)] = (19));

} else {
var statearr_52864_54225 = state_52795__$1;
(statearr_52864_54225[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (38))){
var inst_52774 = (state_52795[(2)]);
var state_52795__$1 = state_52795;
var statearr_52865_54229 = state_52795__$1;
(statearr_52865_54229[(2)] = inst_52774);

(statearr_52865_54229[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (30))){
var state_52795__$1 = state_52795;
var statearr_52866_54230 = state_52795__$1;
(statearr_52866_54230[(2)] = null);

(statearr_52866_54230[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (10))){
var inst_52675 = (state_52795[(13)]);
var inst_52673 = (state_52795[(14)]);
var inst_52683 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_52673,inst_52675);
var inst_52684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52683,(0),null);
var inst_52685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52683,(1),null);
var state_52795__$1 = (function (){var statearr_52867 = state_52795;
(statearr_52867[(26)] = inst_52684);

return statearr_52867;
})();
if(cljs.core.truth_(inst_52685)){
var statearr_52868_54234 = state_52795__$1;
(statearr_52868_54234[(1)] = (13));

} else {
var statearr_52869_54235 = state_52795__$1;
(statearr_52869_54235[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (18))){
var inst_52720 = (state_52795[(2)]);
var state_52795__$1 = state_52795;
var statearr_52870_54239 = state_52795__$1;
(statearr_52870_54239[(2)] = inst_52720);

(statearr_52870_54239[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (42))){
var state_52795__$1 = state_52795;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52795__$1,(45),dchan);
} else {
if((state_val_52796 === (37))){
var inst_52663 = (state_52795[(10)]);
var inst_52763 = (state_52795[(23)]);
var inst_52754 = (state_52795[(25)]);
var inst_52763__$1 = cljs.core.first(inst_52754);
var inst_52764 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_52763__$1,inst_52663,done);
var state_52795__$1 = (function (){var statearr_52871 = state_52795;
(statearr_52871[(23)] = inst_52763__$1);

return statearr_52871;
})();
if(cljs.core.truth_(inst_52764)){
var statearr_52872_54243 = state_52795__$1;
(statearr_52872_54243[(1)] = (39));

} else {
var statearr_52873_54244 = state_52795__$1;
(statearr_52873_54244[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (8))){
var inst_52675 = (state_52795[(13)]);
var inst_52674 = (state_52795[(16)]);
var inst_52677 = (inst_52675 < inst_52674);
var inst_52678 = inst_52677;
var state_52795__$1 = state_52795;
if(cljs.core.truth_(inst_52678)){
var statearr_52874_54245 = state_52795__$1;
(statearr_52874_54245[(1)] = (10));

} else {
var statearr_52875_54246 = state_52795__$1;
(statearr_52875_54246[(1)] = (11));

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
});})(c__51963__auto___54111,cs,m,dchan,dctr,done))
;
return ((function (switch__51789__auto__,c__51963__auto___54111,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__51790__auto__ = null;
var cljs$core$async$mult_$_state_machine__51790__auto____0 = (function (){
var statearr_52876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52876[(0)] = cljs$core$async$mult_$_state_machine__51790__auto__);

(statearr_52876[(1)] = (1));

return statearr_52876;
});
var cljs$core$async$mult_$_state_machine__51790__auto____1 = (function (state_52795){
while(true){
var ret_value__51791__auto__ = (function (){try{while(true){
var result__51792__auto__ = switch__51789__auto__(state_52795);
if(cljs.core.keyword_identical_QMARK_(result__51792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51792__auto__;
}
break;
}
}catch (e52877){if((e52877 instanceof Object)){
var ex__51793__auto__ = e52877;
var statearr_52878_54257 = state_52795;
(statearr_52878_54257[(5)] = ex__51793__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52877;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54258 = state_52795;
state_52795 = G__54258;
continue;
} else {
return ret_value__51791__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__51790__auto__ = function(state_52795){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__51790__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__51790__auto____1.call(this,state_52795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__51790__auto____0;
cljs$core$async$mult_$_state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__51790__auto____1;
return cljs$core$async$mult_$_state_machine__51790__auto__;
})()
;})(switch__51789__auto__,c__51963__auto___54111,cs,m,dchan,dctr,done))
})();
var state__51965__auto__ = (function (){var statearr_52879 = (f__51964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51964__auto__.cljs$core$IFn$_invoke$arity$0() : f__51964__auto__.call(null));
(statearr_52879[(6)] = c__51963__auto___54111);

return statearr_52879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51965__auto__);
});})(c__51963__auto___54111,cs,m,dchan,dctr,done))
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
var G__52881 = arguments.length;
switch (G__52881) {
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
var len__4730__auto___54281 = arguments.length;
var i__4731__auto___54282 = (0);
while(true){
if((i__4731__auto___54282 < len__4730__auto___54281)){
args__4736__auto__.push((arguments[i__4731__auto___54282]));

var G__54283 = (i__4731__auto___54282 + (1));
i__4731__auto___54282 = G__54283;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__52886){
var map__52887 = p__52886;
var map__52887__$1 = (((((!((map__52887 == null))))?(((((map__52887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52887):map__52887);
var opts = map__52887__$1;
var statearr_52889_54286 = state;
(statearr_52889_54286[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts(((function (map__52887,map__52887__$1,opts){
return (function (val){
var statearr_52890_54287 = state;
(statearr_52890_54287[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__52887,map__52887__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_52891_54288 = state;
(statearr_52891_54288[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq52882){
var G__52883 = cljs.core.first(seq52882);
var seq52882__$1 = cljs.core.next(seq52882);
var G__52884 = cljs.core.first(seq52882__$1);
var seq52882__$2 = cljs.core.next(seq52882__$1);
var G__52885 = cljs.core.first(seq52882__$2);
var seq52882__$3 = cljs.core.next(seq52882__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52883,G__52884,G__52885,seq52882__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52892 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52892 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta52893){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta52893 = meta52893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_52894,meta52893__$1){
var self__ = this;
var _52894__$1 = this;
return (new cljs.core.async.t_cljs$core$async52892(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta52893__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52892.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_52894){
var self__ = this;
var _52894__$1 = this;
return self__.meta52893;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52892.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52892.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52892.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52892.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52892.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52892.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52892.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52892.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async52892.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta52893","meta52893",-676986184,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52892.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52892.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52892";

cljs.core.async.t_cljs$core$async52892.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async52892");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52892.
 */
cljs.core.async.__GT_t_cljs$core$async52892 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async52892(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52893){
return (new cljs.core.async.t_cljs$core$async52892(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52893));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async52892(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__51963__auto___54325 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51963__auto___54325,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__51964__auto__ = (function (){var switch__51789__auto__ = ((function (c__51963__auto___54325,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_52996){
var state_val_52997 = (state_52996[(1)]);
if((state_val_52997 === (7))){
var inst_52911 = (state_52996[(2)]);
var state_52996__$1 = state_52996;
var statearr_52998_54335 = state_52996__$1;
(statearr_52998_54335[(2)] = inst_52911);

(statearr_52998_54335[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52997 === (20))){
var inst_52923 = (state_52996[(7)]);
var state_52996__$1 = state_52996;
var statearr_52999_54343 = state_52996__$1;
(statearr_52999_54343[(2)] = inst_52923);

(statearr_52999_54343[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52997 === (27))){
var state_52996__$1 = state_52996;
var statearr_53000_54345 = state_52996__$1;
(statearr_53000_54345[(2)] = null);

(statearr_53000_54345[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52997 === (1))){
var inst_52898 = (state_52996[(8)]);
var inst_52898__$1 = calc_state();
var inst_52900 = (inst_52898__$1 == null);
var inst_52901 = cljs.core.not(inst_52900);
var state_52996__$1 = (function (){var statearr_53001 = state_52996;
(statearr_53001[(8)] = inst_52898__$1);

return statearr_53001;
})();
if(inst_52901){
var statearr_53002_54346 = state_52996__$1;
(statearr_53002_54346[(1)] = (2));

} else {
var statearr_53003_54347 = state_52996__$1;
(statearr_53003_54347[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52997 === (24))){
var inst_52956 = (state_52996[(9)]);
var inst_52947 = (state_52996[(10)]);
var inst_52970 = (state_52996[(11)]);
var inst_52970__$1 = (inst_52947.cljs$core$IFn$_invoke$arity$1 ? inst_52947.cljs$core$IFn$_invoke$arity$1(inst_52956) : inst_52947.call(null,inst_52956));
var state_52996__$1 = (function (){var statearr_53004 = state_52996;
(statearr_53004[(11)] = inst_52970__$1);

return statearr_53004;
})();
if(cljs.core.truth_(inst_52970__$1)){
var statearr_53005_54348 = state_52996__$1;
(statearr_53005_54348[(1)] = (29));

} else {
var statearr_53006_54349 = state_52996__$1;
(statearr_53006_54349[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52997 === (4))){
var inst_52914 = (state_52996[(2)]);
var state_52996__$1 = state_52996;
if(cljs.core.truth_(inst_52914)){
var statearr_53007_54350 = state_52996__$1;
(statearr_53007_54350[(1)] = (8));

} else {
var statearr_53008_54351 = state_52996__$1;
(statearr_53008_54351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52997 === (15))){
var inst_52941 = (state_52996[(2)]);
var state_52996__$1 = state_52996;
if(cljs.core.truth_(inst_52941)){
var statearr_53009_54352 = state_52996__$1;
(statearr_53009_54352[(1)] = (19));

} else {
var statearr_53010_54353 = state_52996__$1;
(statearr_53010_54353[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52997 === (21))){
var inst_52946 = (state_52996[(12)]);
var inst_52946__$1 = (state_52996[(2)]);
var inst_52947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52946__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52946__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52946__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_52996__$1 = (function (){var statearr_53011 = state_52996;
(statearr_53011[(13)] = inst_52948);

(statearr_53011[(10)] = inst_52947);

(statearr_53011[(12)] = inst_52946__$1);

return statearr_53011;
})();
return cljs.core.async.ioc_alts_BANG_(state_52996__$1,(22),inst_52949);
} else {
if((state_val_52997 === (31))){
var inst_52978 = (state_52996[(2)]);
var state_52996__$1 = state_52996;
if(cljs.core.truth_(inst_52978)){
var statearr_53012_54359 = state_52996__$1;
(statearr_53012_54359[(1)] = (32));

} else {
var statearr_53013_54360 = state_52996__$1;
(statearr_53013_54360[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52997 === (32))){
var inst_52955 = (state_52996[(14)]);
var state_52996__$1 = state_52996;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52996__$1,(35),out,inst_52955);
} else {
if((state_val_52997 === (33))){
var inst_52946 = (state_52996[(12)]);
var inst_52923 = inst_52946;
var state_52996__$1 = (function (){var statearr_53014 = state_52996;
(statearr_53014[(7)] = inst_52923);

return statearr_53014;
})();
var statearr_53015_54361 = state_52996__$1;
(statearr_53015_54361[(2)] = null);

(statearr_53015_54361[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52997 === (13))){
var inst_52923 = (state_52996[(7)]);
var inst_52930 = inst_52923.cljs$lang$protocol_mask$partition0$;
var inst_52931 = (inst_52930 & (64));
var inst_52932 = inst_52923.cljs$core$ISeq$;
var inst_52933 = (cljs.core.PROTOCOL_SENTINEL === inst_52932);
var inst_52934 = ((inst_52931) || (inst_52933));
var state_52996__$1 = state_52996;
if(cljs.core.truth_(inst_52934)){
var statearr_53016_54362 = state_52996__$1;
(statearr_53016_54362[(1)] = (16));

} else {
var statearr_53017_54363 = state_52996__$1;
(statearr_53017_54363[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52997 === (22))){
var inst_52956 = (state_52996[(9)]);
var inst_52955 = (state_52996[(14)]);
var inst_52954 = (state_52996[(2)]);
var inst_52955__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52954,(0),null);
var inst_52956__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52954,(1),null);
var inst_52957 = (inst_52955__$1 == null);
var inst_52958 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52956__$1,change);
var inst_52959 = ((inst_52957) || (inst_52958));
var state_52996__$1 = (function (){var statearr_53018 = state_52996;
(statearr_53018[(9)] = inst_52956__$1);

(statearr_53018[(14)] = inst_52955__$1);

return statearr_53018;
})();
if(cljs.core.truth_(inst_52959)){
var statearr_53019_54369 = state_52996__$1;
(statearr_53019_54369[(1)] = (23));

} else {
var statearr_53020_54370 = state_52996__$1;
(statearr_53020_54370[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52997 === (36))){
var inst_52946 = (state_52996[(12)]);
var inst_52923 = inst_52946;
var state_52996__$1 = (function (){var statearr_53021 = state_52996;
(statearr_53021[(7)] = inst_52923);

return statearr_53021;
})();
var statearr_53022_54372 = state_52996__$1;
(statearr_53022_54372[(2)] = null);

(statearr_53022_54372[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52997 === (29))){
var inst_52970 = (state_52996[(11)]);
var state_52996__$1 = state_52996;
var statearr_53023_54373 = state_52996__$1;
(statearr_53023_54373[(2)] = inst_52970);

(statearr_53023_54373[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52997 === (6))){
var state_52996__$1 = state_52996;
var statearr_53024_54374 = state_52996__$1;
(statearr_53024_54374[(2)] = false);

(statearr_53024_54374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52997 === (28))){
var inst_52966 = (state_52996[(2)]);
var inst_52967 = calc_state();
var inst_52923 = inst_52967;
var state_52996__$1 = (function (){var statearr_53025 = state_52996;
(statearr_53025[(7)] = inst_52923);

(statearr_53025[(15)] = inst_52966);

return statearr_53025;
})();
var statearr_53026_54376 = state_52996__$1;
(statearr_53026_54376[(2)] = null);

(statearr_53026_54376[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52997 === (25))){
var inst_52992 = (state_52996[(2)]);
var state_52996__$1 = state_52996;
var statearr_53027_54377 = state_52996__$1;
(statearr_53027_54377[(2)] = inst_52992);

(statearr_53027_54377[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52997 === (34))){
var inst_52990 = (state_52996[(2)]);
var state_52996__$1 = state_52996;
var statearr_53028_54384 = state_52996__$1;
(statearr_53028_54384[(2)] = inst_52990);

(statearr_53028_54384[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52997 === (17))){
var state_52996__$1 = state_52996;
var statearr_53029_54385 = state_52996__$1;
(statearr_53029_54385[(2)] = false);

(statearr_53029_54385[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52997 === (3))){
var state_52996__$1 = state_52996;
var statearr_53030_54386 = state_52996__$1;
(statearr_53030_54386[(2)] = false);

(statearr_53030_54386[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52997 === (12))){
var inst_52994 = (state_52996[(2)]);
var state_52996__$1 = state_52996;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52996__$1,inst_52994);
} else {
if((state_val_52997 === (2))){
var inst_52898 = (state_52996[(8)]);
var inst_52903 = inst_52898.cljs$lang$protocol_mask$partition0$;
var inst_52904 = (inst_52903 & (64));
var inst_52905 = inst_52898.cljs$core$ISeq$;
var inst_52906 = (cljs.core.PROTOCOL_SENTINEL === inst_52905);
var inst_52907 = ((inst_52904) || (inst_52906));
var state_52996__$1 = state_52996;
if(cljs.core.truth_(inst_52907)){
var statearr_53031_54387 = state_52996__$1;
(statearr_53031_54387[(1)] = (5));

} else {
var statearr_53032_54388 = state_52996__$1;
(statearr_53032_54388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52997 === (23))){
var inst_52955 = (state_52996[(14)]);
var inst_52961 = (inst_52955 == null);
var state_52996__$1 = state_52996;
if(cljs.core.truth_(inst_52961)){
var statearr_53033_54395 = state_52996__$1;
(statearr_53033_54395[(1)] = (26));

} else {
var statearr_53034_54397 = state_52996__$1;
(statearr_53034_54397[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52997 === (35))){
var inst_52981 = (state_52996[(2)]);
var state_52996__$1 = state_52996;
if(cljs.core.truth_(inst_52981)){
var statearr_53035_54398 = state_52996__$1;
(statearr_53035_54398[(1)] = (36));

} else {
var statearr_53036_54399 = state_52996__$1;
(statearr_53036_54399[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52997 === (19))){
var inst_52923 = (state_52996[(7)]);
var inst_52943 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52923);
var state_52996__$1 = state_52996;
var statearr_53037_54400 = state_52996__$1;
(statearr_53037_54400[(2)] = inst_52943);

(statearr_53037_54400[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52997 === (11))){
var inst_52923 = (state_52996[(7)]);
var inst_52927 = (inst_52923 == null);
var inst_52928 = cljs.core.not(inst_52927);
var state_52996__$1 = state_52996;
if(inst_52928){
var statearr_53038_54401 = state_52996__$1;
(statearr_53038_54401[(1)] = (13));

} else {
var statearr_53039_54402 = state_52996__$1;
(statearr_53039_54402[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52997 === (9))){
var inst_52898 = (state_52996[(8)]);
var state_52996__$1 = state_52996;
var statearr_53040_54403 = state_52996__$1;
(statearr_53040_54403[(2)] = inst_52898);

(statearr_53040_54403[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52997 === (5))){
var state_52996__$1 = state_52996;
var statearr_53041_54404 = state_52996__$1;
(statearr_53041_54404[(2)] = true);

(statearr_53041_54404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52997 === (14))){
var state_52996__$1 = state_52996;
var statearr_53042_54405 = state_52996__$1;
(statearr_53042_54405[(2)] = false);

(statearr_53042_54405[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52997 === (26))){
var inst_52956 = (state_52996[(9)]);
var inst_52963 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_52956);
var state_52996__$1 = state_52996;
var statearr_53043_54406 = state_52996__$1;
(statearr_53043_54406[(2)] = inst_52963);

(statearr_53043_54406[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52997 === (16))){
var state_52996__$1 = state_52996;
var statearr_53044_54407 = state_52996__$1;
(statearr_53044_54407[(2)] = true);

(statearr_53044_54407[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52997 === (38))){
var inst_52986 = (state_52996[(2)]);
var state_52996__$1 = state_52996;
var statearr_53045_54414 = state_52996__$1;
(statearr_53045_54414[(2)] = inst_52986);

(statearr_53045_54414[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52997 === (30))){
var inst_52948 = (state_52996[(13)]);
var inst_52956 = (state_52996[(9)]);
var inst_52947 = (state_52996[(10)]);
var inst_52973 = cljs.core.empty_QMARK_(inst_52947);
var inst_52974 = (inst_52948.cljs$core$IFn$_invoke$arity$1 ? inst_52948.cljs$core$IFn$_invoke$arity$1(inst_52956) : inst_52948.call(null,inst_52956));
var inst_52975 = cljs.core.not(inst_52974);
var inst_52976 = ((inst_52973) && (inst_52975));
var state_52996__$1 = state_52996;
var statearr_53046_54415 = state_52996__$1;
(statearr_53046_54415[(2)] = inst_52976);

(statearr_53046_54415[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52997 === (10))){
var inst_52898 = (state_52996[(8)]);
var inst_52919 = (state_52996[(2)]);
var inst_52920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52919,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52919,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52919,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_52923 = inst_52898;
var state_52996__$1 = (function (){var statearr_53047 = state_52996;
(statearr_53047[(16)] = inst_52920);

(statearr_53047[(17)] = inst_52921);

(statearr_53047[(18)] = inst_52922);

(statearr_53047[(7)] = inst_52923);

return statearr_53047;
})();
var statearr_53048_54416 = state_52996__$1;
(statearr_53048_54416[(2)] = null);

(statearr_53048_54416[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52997 === (18))){
var inst_52938 = (state_52996[(2)]);
var state_52996__$1 = state_52996;
var statearr_53049_54417 = state_52996__$1;
(statearr_53049_54417[(2)] = inst_52938);

(statearr_53049_54417[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52997 === (37))){
var state_52996__$1 = state_52996;
var statearr_53050_54418 = state_52996__$1;
(statearr_53050_54418[(2)] = null);

(statearr_53050_54418[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52997 === (8))){
var inst_52898 = (state_52996[(8)]);
var inst_52916 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52898);
var state_52996__$1 = state_52996;
var statearr_53051_54419 = state_52996__$1;
(statearr_53051_54419[(2)] = inst_52916);

(statearr_53051_54419[(1)] = (10));


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
});})(c__51963__auto___54325,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__51789__auto__,c__51963__auto___54325,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__51790__auto__ = null;
var cljs$core$async$mix_$_state_machine__51790__auto____0 = (function (){
var statearr_53052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53052[(0)] = cljs$core$async$mix_$_state_machine__51790__auto__);

(statearr_53052[(1)] = (1));

return statearr_53052;
});
var cljs$core$async$mix_$_state_machine__51790__auto____1 = (function (state_52996){
while(true){
var ret_value__51791__auto__ = (function (){try{while(true){
var result__51792__auto__ = switch__51789__auto__(state_52996);
if(cljs.core.keyword_identical_QMARK_(result__51792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51792__auto__;
}
break;
}
}catch (e53053){if((e53053 instanceof Object)){
var ex__51793__auto__ = e53053;
var statearr_53054_54420 = state_52996;
(statearr_53054_54420[(5)] = ex__51793__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53053;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54421 = state_52996;
state_52996 = G__54421;
continue;
} else {
return ret_value__51791__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__51790__auto__ = function(state_52996){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__51790__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__51790__auto____1.call(this,state_52996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__51790__auto____0;
cljs$core$async$mix_$_state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__51790__auto____1;
return cljs$core$async$mix_$_state_machine__51790__auto__;
})()
;})(switch__51789__auto__,c__51963__auto___54325,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__51965__auto__ = (function (){var statearr_53055 = (f__51964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51964__auto__.cljs$core$IFn$_invoke$arity$0() : f__51964__auto__.call(null));
(statearr_53055[(6)] = c__51963__auto___54325);

return statearr_53055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51965__auto__);
});})(c__51963__auto___54325,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__53057 = arguments.length;
switch (G__53057) {
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
var G__53060 = arguments.length;
switch (G__53060) {
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
return (function (p1__53058_SHARP_){
if(cljs.core.truth_((p1__53058_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__53058_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__53058_SHARP_.call(null,topic)))){
return p1__53058_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__53058_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53061 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53061 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta53062){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta53062 = meta53062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_53063,meta53062__$1){
var self__ = this;
var _53063__$1 = this;
return (new cljs.core.async.t_cljs$core$async53061(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta53062__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53061.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_53063){
var self__ = this;
var _53063__$1 = this;
return self__.meta53062;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53061.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53061.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53061.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53061.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53061.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async53061.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53061.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53061.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta53062","meta53062",523722434,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53061.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53061";

cljs.core.async.t_cljs$core$async53061.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async53061");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53061.
 */
cljs.core.async.__GT_t_cljs$core$async53061 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async53061(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta53062){
return (new cljs.core.async.t_cljs$core$async53061(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta53062));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async53061(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__51963__auto___54447 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51963__auto___54447,mults,ensure_mult,p){
return (function (){
var f__51964__auto__ = (function (){var switch__51789__auto__ = ((function (c__51963__auto___54447,mults,ensure_mult,p){
return (function (state_53135){
var state_val_53136 = (state_53135[(1)]);
if((state_val_53136 === (7))){
var inst_53131 = (state_53135[(2)]);
var state_53135__$1 = state_53135;
var statearr_53137_54448 = state_53135__$1;
(statearr_53137_54448[(2)] = inst_53131);

(statearr_53137_54448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53136 === (20))){
var state_53135__$1 = state_53135;
var statearr_53138_54453 = state_53135__$1;
(statearr_53138_54453[(2)] = null);

(statearr_53138_54453[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53136 === (1))){
var state_53135__$1 = state_53135;
var statearr_53139_54455 = state_53135__$1;
(statearr_53139_54455[(2)] = null);

(statearr_53139_54455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53136 === (24))){
var inst_53114 = (state_53135[(7)]);
var inst_53123 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_53114);
var state_53135__$1 = state_53135;
var statearr_53140_54456 = state_53135__$1;
(statearr_53140_54456[(2)] = inst_53123);

(statearr_53140_54456[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53136 === (4))){
var inst_53066 = (state_53135[(8)]);
var inst_53066__$1 = (state_53135[(2)]);
var inst_53067 = (inst_53066__$1 == null);
var state_53135__$1 = (function (){var statearr_53141 = state_53135;
(statearr_53141[(8)] = inst_53066__$1);

return statearr_53141;
})();
if(cljs.core.truth_(inst_53067)){
var statearr_53142_54457 = state_53135__$1;
(statearr_53142_54457[(1)] = (5));

} else {
var statearr_53143_54458 = state_53135__$1;
(statearr_53143_54458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53136 === (15))){
var inst_53108 = (state_53135[(2)]);
var state_53135__$1 = state_53135;
var statearr_53144_54459 = state_53135__$1;
(statearr_53144_54459[(2)] = inst_53108);

(statearr_53144_54459[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53136 === (21))){
var inst_53128 = (state_53135[(2)]);
var state_53135__$1 = (function (){var statearr_53145 = state_53135;
(statearr_53145[(9)] = inst_53128);

return statearr_53145;
})();
var statearr_53146_54460 = state_53135__$1;
(statearr_53146_54460[(2)] = null);

(statearr_53146_54460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53136 === (13))){
var inst_53090 = (state_53135[(10)]);
var inst_53092 = cljs.core.chunked_seq_QMARK_(inst_53090);
var state_53135__$1 = state_53135;
if(inst_53092){
var statearr_53147_54468 = state_53135__$1;
(statearr_53147_54468[(1)] = (16));

} else {
var statearr_53148_54469 = state_53135__$1;
(statearr_53148_54469[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53136 === (22))){
var inst_53120 = (state_53135[(2)]);
var state_53135__$1 = state_53135;
if(cljs.core.truth_(inst_53120)){
var statearr_53149_54473 = state_53135__$1;
(statearr_53149_54473[(1)] = (23));

} else {
var statearr_53150_54474 = state_53135__$1;
(statearr_53150_54474[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53136 === (6))){
var inst_53066 = (state_53135[(8)]);
var inst_53114 = (state_53135[(7)]);
var inst_53116 = (state_53135[(11)]);
var inst_53114__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_53066) : topic_fn.call(null,inst_53066));
var inst_53115 = cljs.core.deref(mults);
var inst_53116__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53115,inst_53114__$1);
var state_53135__$1 = (function (){var statearr_53151 = state_53135;
(statearr_53151[(7)] = inst_53114__$1);

(statearr_53151[(11)] = inst_53116__$1);

return statearr_53151;
})();
if(cljs.core.truth_(inst_53116__$1)){
var statearr_53152_54481 = state_53135__$1;
(statearr_53152_54481[(1)] = (19));

} else {
var statearr_53153_54482 = state_53135__$1;
(statearr_53153_54482[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53136 === (25))){
var inst_53125 = (state_53135[(2)]);
var state_53135__$1 = state_53135;
var statearr_53154_54487 = state_53135__$1;
(statearr_53154_54487[(2)] = inst_53125);

(statearr_53154_54487[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53136 === (17))){
var inst_53090 = (state_53135[(10)]);
var inst_53099 = cljs.core.first(inst_53090);
var inst_53100 = cljs.core.async.muxch_STAR_(inst_53099);
var inst_53101 = cljs.core.async.close_BANG_(inst_53100);
var inst_53102 = cljs.core.next(inst_53090);
var inst_53076 = inst_53102;
var inst_53077 = null;
var inst_53078 = (0);
var inst_53079 = (0);
var state_53135__$1 = (function (){var statearr_53155 = state_53135;
(statearr_53155[(12)] = inst_53078);

(statearr_53155[(13)] = inst_53079);

(statearr_53155[(14)] = inst_53101);

(statearr_53155[(15)] = inst_53077);

(statearr_53155[(16)] = inst_53076);

return statearr_53155;
})();
var statearr_53156_54488 = state_53135__$1;
(statearr_53156_54488[(2)] = null);

(statearr_53156_54488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53136 === (3))){
var inst_53133 = (state_53135[(2)]);
var state_53135__$1 = state_53135;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53135__$1,inst_53133);
} else {
if((state_val_53136 === (12))){
var inst_53110 = (state_53135[(2)]);
var state_53135__$1 = state_53135;
var statearr_53157_54489 = state_53135__$1;
(statearr_53157_54489[(2)] = inst_53110);

(statearr_53157_54489[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53136 === (2))){
var state_53135__$1 = state_53135;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53135__$1,(4),ch);
} else {
if((state_val_53136 === (23))){
var state_53135__$1 = state_53135;
var statearr_53158_54493 = state_53135__$1;
(statearr_53158_54493[(2)] = null);

(statearr_53158_54493[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53136 === (19))){
var inst_53066 = (state_53135[(8)]);
var inst_53116 = (state_53135[(11)]);
var inst_53118 = cljs.core.async.muxch_STAR_(inst_53116);
var state_53135__$1 = state_53135;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53135__$1,(22),inst_53118,inst_53066);
} else {
if((state_val_53136 === (11))){
var inst_53090 = (state_53135[(10)]);
var inst_53076 = (state_53135[(16)]);
var inst_53090__$1 = cljs.core.seq(inst_53076);
var state_53135__$1 = (function (){var statearr_53159 = state_53135;
(statearr_53159[(10)] = inst_53090__$1);

return statearr_53159;
})();
if(inst_53090__$1){
var statearr_53160_54498 = state_53135__$1;
(statearr_53160_54498[(1)] = (13));

} else {
var statearr_53161_54499 = state_53135__$1;
(statearr_53161_54499[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53136 === (9))){
var inst_53112 = (state_53135[(2)]);
var state_53135__$1 = state_53135;
var statearr_53162_54506 = state_53135__$1;
(statearr_53162_54506[(2)] = inst_53112);

(statearr_53162_54506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53136 === (5))){
var inst_53073 = cljs.core.deref(mults);
var inst_53074 = cljs.core.vals(inst_53073);
var inst_53075 = cljs.core.seq(inst_53074);
var inst_53076 = inst_53075;
var inst_53077 = null;
var inst_53078 = (0);
var inst_53079 = (0);
var state_53135__$1 = (function (){var statearr_53163 = state_53135;
(statearr_53163[(12)] = inst_53078);

(statearr_53163[(13)] = inst_53079);

(statearr_53163[(15)] = inst_53077);

(statearr_53163[(16)] = inst_53076);

return statearr_53163;
})();
var statearr_53164_54516 = state_53135__$1;
(statearr_53164_54516[(2)] = null);

(statearr_53164_54516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53136 === (14))){
var state_53135__$1 = state_53135;
var statearr_53168_54518 = state_53135__$1;
(statearr_53168_54518[(2)] = null);

(statearr_53168_54518[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53136 === (16))){
var inst_53090 = (state_53135[(10)]);
var inst_53094 = cljs.core.chunk_first(inst_53090);
var inst_53095 = cljs.core.chunk_rest(inst_53090);
var inst_53096 = cljs.core.count(inst_53094);
var inst_53076 = inst_53095;
var inst_53077 = inst_53094;
var inst_53078 = inst_53096;
var inst_53079 = (0);
var state_53135__$1 = (function (){var statearr_53169 = state_53135;
(statearr_53169[(12)] = inst_53078);

(statearr_53169[(13)] = inst_53079);

(statearr_53169[(15)] = inst_53077);

(statearr_53169[(16)] = inst_53076);

return statearr_53169;
})();
var statearr_53170_54525 = state_53135__$1;
(statearr_53170_54525[(2)] = null);

(statearr_53170_54525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53136 === (10))){
var inst_53078 = (state_53135[(12)]);
var inst_53079 = (state_53135[(13)]);
var inst_53077 = (state_53135[(15)]);
var inst_53076 = (state_53135[(16)]);
var inst_53084 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_53077,inst_53079);
var inst_53085 = cljs.core.async.muxch_STAR_(inst_53084);
var inst_53086 = cljs.core.async.close_BANG_(inst_53085);
var inst_53087 = (inst_53079 + (1));
var tmp53165 = inst_53078;
var tmp53166 = inst_53077;
var tmp53167 = inst_53076;
var inst_53076__$1 = tmp53167;
var inst_53077__$1 = tmp53166;
var inst_53078__$1 = tmp53165;
var inst_53079__$1 = inst_53087;
var state_53135__$1 = (function (){var statearr_53171 = state_53135;
(statearr_53171[(12)] = inst_53078__$1);

(statearr_53171[(13)] = inst_53079__$1);

(statearr_53171[(17)] = inst_53086);

(statearr_53171[(15)] = inst_53077__$1);

(statearr_53171[(16)] = inst_53076__$1);

return statearr_53171;
})();
var statearr_53172_54527 = state_53135__$1;
(statearr_53172_54527[(2)] = null);

(statearr_53172_54527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53136 === (18))){
var inst_53105 = (state_53135[(2)]);
var state_53135__$1 = state_53135;
var statearr_53173_54528 = state_53135__$1;
(statearr_53173_54528[(2)] = inst_53105);

(statearr_53173_54528[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53136 === (8))){
var inst_53078 = (state_53135[(12)]);
var inst_53079 = (state_53135[(13)]);
var inst_53081 = (inst_53079 < inst_53078);
var inst_53082 = inst_53081;
var state_53135__$1 = state_53135;
if(cljs.core.truth_(inst_53082)){
var statearr_53174_54529 = state_53135__$1;
(statearr_53174_54529[(1)] = (10));

} else {
var statearr_53175_54530 = state_53135__$1;
(statearr_53175_54530[(1)] = (11));

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
});})(c__51963__auto___54447,mults,ensure_mult,p))
;
return ((function (switch__51789__auto__,c__51963__auto___54447,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__51790__auto__ = null;
var cljs$core$async$state_machine__51790__auto____0 = (function (){
var statearr_53176 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53176[(0)] = cljs$core$async$state_machine__51790__auto__);

(statearr_53176[(1)] = (1));

return statearr_53176;
});
var cljs$core$async$state_machine__51790__auto____1 = (function (state_53135){
while(true){
var ret_value__51791__auto__ = (function (){try{while(true){
var result__51792__auto__ = switch__51789__auto__(state_53135);
if(cljs.core.keyword_identical_QMARK_(result__51792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51792__auto__;
}
break;
}
}catch (e53177){if((e53177 instanceof Object)){
var ex__51793__auto__ = e53177;
var statearr_53178_54535 = state_53135;
(statearr_53178_54535[(5)] = ex__51793__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53177;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54536 = state_53135;
state_53135 = G__54536;
continue;
} else {
return ret_value__51791__auto__;
}
break;
}
});
cljs$core$async$state_machine__51790__auto__ = function(state_53135){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51790__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51790__auto____1.call(this,state_53135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51790__auto____0;
cljs$core$async$state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51790__auto____1;
return cljs$core$async$state_machine__51790__auto__;
})()
;})(switch__51789__auto__,c__51963__auto___54447,mults,ensure_mult,p))
})();
var state__51965__auto__ = (function (){var statearr_53179 = (f__51964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51964__auto__.cljs$core$IFn$_invoke$arity$0() : f__51964__auto__.call(null));
(statearr_53179[(6)] = c__51963__auto___54447);

return statearr_53179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51965__auto__);
});})(c__51963__auto___54447,mults,ensure_mult,p))
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
var G__53181 = arguments.length;
switch (G__53181) {
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
var G__53183 = arguments.length;
switch (G__53183) {
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
var G__53185 = arguments.length;
switch (G__53185) {
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
var c__51963__auto___54550 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51963__auto___54550,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__51964__auto__ = (function (){var switch__51789__auto__ = ((function (c__51963__auto___54550,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_53224){
var state_val_53225 = (state_53224[(1)]);
if((state_val_53225 === (7))){
var state_53224__$1 = state_53224;
var statearr_53226_54551 = state_53224__$1;
(statearr_53226_54551[(2)] = null);

(statearr_53226_54551[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53225 === (1))){
var state_53224__$1 = state_53224;
var statearr_53227_54552 = state_53224__$1;
(statearr_53227_54552[(2)] = null);

(statearr_53227_54552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53225 === (4))){
var inst_53188 = (state_53224[(7)]);
var inst_53190 = (inst_53188 < cnt);
var state_53224__$1 = state_53224;
if(cljs.core.truth_(inst_53190)){
var statearr_53228_54553 = state_53224__$1;
(statearr_53228_54553[(1)] = (6));

} else {
var statearr_53229_54554 = state_53224__$1;
(statearr_53229_54554[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53225 === (15))){
var inst_53220 = (state_53224[(2)]);
var state_53224__$1 = state_53224;
var statearr_53230_54555 = state_53224__$1;
(statearr_53230_54555[(2)] = inst_53220);

(statearr_53230_54555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53225 === (13))){
var inst_53213 = cljs.core.async.close_BANG_(out);
var state_53224__$1 = state_53224;
var statearr_53231_54556 = state_53224__$1;
(statearr_53231_54556[(2)] = inst_53213);

(statearr_53231_54556[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53225 === (6))){
var state_53224__$1 = state_53224;
var statearr_53232_54557 = state_53224__$1;
(statearr_53232_54557[(2)] = null);

(statearr_53232_54557[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53225 === (3))){
var inst_53222 = (state_53224[(2)]);
var state_53224__$1 = state_53224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53224__$1,inst_53222);
} else {
if((state_val_53225 === (12))){
var inst_53210 = (state_53224[(8)]);
var inst_53210__$1 = (state_53224[(2)]);
var inst_53211 = cljs.core.some(cljs.core.nil_QMARK_,inst_53210__$1);
var state_53224__$1 = (function (){var statearr_53233 = state_53224;
(statearr_53233[(8)] = inst_53210__$1);

return statearr_53233;
})();
if(cljs.core.truth_(inst_53211)){
var statearr_53234_54559 = state_53224__$1;
(statearr_53234_54559[(1)] = (13));

} else {
var statearr_53235_54560 = state_53224__$1;
(statearr_53235_54560[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53225 === (2))){
var inst_53187 = cljs.core.reset_BANG_(dctr,cnt);
var inst_53188 = (0);
var state_53224__$1 = (function (){var statearr_53236 = state_53224;
(statearr_53236[(7)] = inst_53188);

(statearr_53236[(9)] = inst_53187);

return statearr_53236;
})();
var statearr_53237_54561 = state_53224__$1;
(statearr_53237_54561[(2)] = null);

(statearr_53237_54561[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53225 === (11))){
var inst_53188 = (state_53224[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_53224,(10),Object,null,(9));
var inst_53197 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_53188) : chs__$1.call(null,inst_53188));
var inst_53198 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_53188) : done.call(null,inst_53188));
var inst_53199 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_53197,inst_53198);
var state_53224__$1 = state_53224;
var statearr_53238_54562 = state_53224__$1;
(statearr_53238_54562[(2)] = inst_53199);


cljs.core.async.impl.ioc_helpers.process_exception(state_53224__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53225 === (9))){
var inst_53188 = (state_53224[(7)]);
var inst_53201 = (state_53224[(2)]);
var inst_53202 = (inst_53188 + (1));
var inst_53188__$1 = inst_53202;
var state_53224__$1 = (function (){var statearr_53239 = state_53224;
(statearr_53239[(7)] = inst_53188__$1);

(statearr_53239[(10)] = inst_53201);

return statearr_53239;
})();
var statearr_53240_54570 = state_53224__$1;
(statearr_53240_54570[(2)] = null);

(statearr_53240_54570[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53225 === (5))){
var inst_53208 = (state_53224[(2)]);
var state_53224__$1 = (function (){var statearr_53241 = state_53224;
(statearr_53241[(11)] = inst_53208);

return statearr_53241;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53224__$1,(12),dchan);
} else {
if((state_val_53225 === (14))){
var inst_53210 = (state_53224[(8)]);
var inst_53215 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_53210);
var state_53224__$1 = state_53224;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53224__$1,(16),out,inst_53215);
} else {
if((state_val_53225 === (16))){
var inst_53217 = (state_53224[(2)]);
var state_53224__$1 = (function (){var statearr_53242 = state_53224;
(statearr_53242[(12)] = inst_53217);

return statearr_53242;
})();
var statearr_53243_54572 = state_53224__$1;
(statearr_53243_54572[(2)] = null);

(statearr_53243_54572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53225 === (10))){
var inst_53192 = (state_53224[(2)]);
var inst_53193 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_53224__$1 = (function (){var statearr_53244 = state_53224;
(statearr_53244[(13)] = inst_53192);

return statearr_53244;
})();
var statearr_53245_54573 = state_53224__$1;
(statearr_53245_54573[(2)] = inst_53193);


cljs.core.async.impl.ioc_helpers.process_exception(state_53224__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53225 === (8))){
var inst_53206 = (state_53224[(2)]);
var state_53224__$1 = state_53224;
var statearr_53246_54574 = state_53224__$1;
(statearr_53246_54574[(2)] = inst_53206);

(statearr_53246_54574[(1)] = (5));


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
});})(c__51963__auto___54550,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__51789__auto__,c__51963__auto___54550,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__51790__auto__ = null;
var cljs$core$async$state_machine__51790__auto____0 = (function (){
var statearr_53247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53247[(0)] = cljs$core$async$state_machine__51790__auto__);

(statearr_53247[(1)] = (1));

return statearr_53247;
});
var cljs$core$async$state_machine__51790__auto____1 = (function (state_53224){
while(true){
var ret_value__51791__auto__ = (function (){try{while(true){
var result__51792__auto__ = switch__51789__auto__(state_53224);
if(cljs.core.keyword_identical_QMARK_(result__51792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51792__auto__;
}
break;
}
}catch (e53248){if((e53248 instanceof Object)){
var ex__51793__auto__ = e53248;
var statearr_53249_54576 = state_53224;
(statearr_53249_54576[(5)] = ex__51793__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53248;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54577 = state_53224;
state_53224 = G__54577;
continue;
} else {
return ret_value__51791__auto__;
}
break;
}
});
cljs$core$async$state_machine__51790__auto__ = function(state_53224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51790__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51790__auto____1.call(this,state_53224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51790__auto____0;
cljs$core$async$state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51790__auto____1;
return cljs$core$async$state_machine__51790__auto__;
})()
;})(switch__51789__auto__,c__51963__auto___54550,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__51965__auto__ = (function (){var statearr_53250 = (f__51964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51964__auto__.cljs$core$IFn$_invoke$arity$0() : f__51964__auto__.call(null));
(statearr_53250[(6)] = c__51963__auto___54550);

return statearr_53250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51965__auto__);
});})(c__51963__auto___54550,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__53253 = arguments.length;
switch (G__53253) {
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
var c__51963__auto___54581 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51963__auto___54581,out){
return (function (){
var f__51964__auto__ = (function (){var switch__51789__auto__ = ((function (c__51963__auto___54581,out){
return (function (state_53285){
var state_val_53286 = (state_53285[(1)]);
if((state_val_53286 === (7))){
var inst_53265 = (state_53285[(7)]);
var inst_53264 = (state_53285[(8)]);
var inst_53264__$1 = (state_53285[(2)]);
var inst_53265__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53264__$1,(0),null);
var inst_53266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53264__$1,(1),null);
var inst_53267 = (inst_53265__$1 == null);
var state_53285__$1 = (function (){var statearr_53287 = state_53285;
(statearr_53287[(7)] = inst_53265__$1);

(statearr_53287[(8)] = inst_53264__$1);

(statearr_53287[(9)] = inst_53266);

return statearr_53287;
})();
if(cljs.core.truth_(inst_53267)){
var statearr_53288_54587 = state_53285__$1;
(statearr_53288_54587[(1)] = (8));

} else {
var statearr_53289_54588 = state_53285__$1;
(statearr_53289_54588[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53286 === (1))){
var inst_53254 = cljs.core.vec(chs);
var inst_53255 = inst_53254;
var state_53285__$1 = (function (){var statearr_53290 = state_53285;
(statearr_53290[(10)] = inst_53255);

return statearr_53290;
})();
var statearr_53291_54590 = state_53285__$1;
(statearr_53291_54590[(2)] = null);

(statearr_53291_54590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53286 === (4))){
var inst_53255 = (state_53285[(10)]);
var state_53285__$1 = state_53285;
return cljs.core.async.ioc_alts_BANG_(state_53285__$1,(7),inst_53255);
} else {
if((state_val_53286 === (6))){
var inst_53281 = (state_53285[(2)]);
var state_53285__$1 = state_53285;
var statearr_53292_54591 = state_53285__$1;
(statearr_53292_54591[(2)] = inst_53281);

(statearr_53292_54591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53286 === (3))){
var inst_53283 = (state_53285[(2)]);
var state_53285__$1 = state_53285;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53285__$1,inst_53283);
} else {
if((state_val_53286 === (2))){
var inst_53255 = (state_53285[(10)]);
var inst_53257 = cljs.core.count(inst_53255);
var inst_53258 = (inst_53257 > (0));
var state_53285__$1 = state_53285;
if(cljs.core.truth_(inst_53258)){
var statearr_53294_54593 = state_53285__$1;
(statearr_53294_54593[(1)] = (4));

} else {
var statearr_53295_54594 = state_53285__$1;
(statearr_53295_54594[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53286 === (11))){
var inst_53255 = (state_53285[(10)]);
var inst_53274 = (state_53285[(2)]);
var tmp53293 = inst_53255;
var inst_53255__$1 = tmp53293;
var state_53285__$1 = (function (){var statearr_53296 = state_53285;
(statearr_53296[(10)] = inst_53255__$1);

(statearr_53296[(11)] = inst_53274);

return statearr_53296;
})();
var statearr_53297_54599 = state_53285__$1;
(statearr_53297_54599[(2)] = null);

(statearr_53297_54599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53286 === (9))){
var inst_53265 = (state_53285[(7)]);
var state_53285__$1 = state_53285;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53285__$1,(11),out,inst_53265);
} else {
if((state_val_53286 === (5))){
var inst_53279 = cljs.core.async.close_BANG_(out);
var state_53285__$1 = state_53285;
var statearr_53298_54600 = state_53285__$1;
(statearr_53298_54600[(2)] = inst_53279);

(statearr_53298_54600[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53286 === (10))){
var inst_53277 = (state_53285[(2)]);
var state_53285__$1 = state_53285;
var statearr_53299_54601 = state_53285__$1;
(statearr_53299_54601[(2)] = inst_53277);

(statearr_53299_54601[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53286 === (8))){
var inst_53255 = (state_53285[(10)]);
var inst_53265 = (state_53285[(7)]);
var inst_53264 = (state_53285[(8)]);
var inst_53266 = (state_53285[(9)]);
var inst_53269 = (function (){var cs = inst_53255;
var vec__53260 = inst_53264;
var v = inst_53265;
var c = inst_53266;
return ((function (cs,vec__53260,v,c,inst_53255,inst_53265,inst_53264,inst_53266,state_val_53286,c__51963__auto___54581,out){
return (function (p1__53251_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__53251_SHARP_);
});
;})(cs,vec__53260,v,c,inst_53255,inst_53265,inst_53264,inst_53266,state_val_53286,c__51963__auto___54581,out))
})();
var inst_53270 = cljs.core.filterv(inst_53269,inst_53255);
var inst_53255__$1 = inst_53270;
var state_53285__$1 = (function (){var statearr_53300 = state_53285;
(statearr_53300[(10)] = inst_53255__$1);

return statearr_53300;
})();
var statearr_53301_54603 = state_53285__$1;
(statearr_53301_54603[(2)] = null);

(statearr_53301_54603[(1)] = (2));


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
});})(c__51963__auto___54581,out))
;
return ((function (switch__51789__auto__,c__51963__auto___54581,out){
return (function() {
var cljs$core$async$state_machine__51790__auto__ = null;
var cljs$core$async$state_machine__51790__auto____0 = (function (){
var statearr_53302 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53302[(0)] = cljs$core$async$state_machine__51790__auto__);

(statearr_53302[(1)] = (1));

return statearr_53302;
});
var cljs$core$async$state_machine__51790__auto____1 = (function (state_53285){
while(true){
var ret_value__51791__auto__ = (function (){try{while(true){
var result__51792__auto__ = switch__51789__auto__(state_53285);
if(cljs.core.keyword_identical_QMARK_(result__51792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51792__auto__;
}
break;
}
}catch (e53303){if((e53303 instanceof Object)){
var ex__51793__auto__ = e53303;
var statearr_53304_54604 = state_53285;
(statearr_53304_54604[(5)] = ex__51793__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53303;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54605 = state_53285;
state_53285 = G__54605;
continue;
} else {
return ret_value__51791__auto__;
}
break;
}
});
cljs$core$async$state_machine__51790__auto__ = function(state_53285){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51790__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51790__auto____1.call(this,state_53285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51790__auto____0;
cljs$core$async$state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51790__auto____1;
return cljs$core$async$state_machine__51790__auto__;
})()
;})(switch__51789__auto__,c__51963__auto___54581,out))
})();
var state__51965__auto__ = (function (){var statearr_53305 = (f__51964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51964__auto__.cljs$core$IFn$_invoke$arity$0() : f__51964__auto__.call(null));
(statearr_53305[(6)] = c__51963__auto___54581);

return statearr_53305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51965__auto__);
});})(c__51963__auto___54581,out))
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
var G__53307 = arguments.length;
switch (G__53307) {
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
var c__51963__auto___54614 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51963__auto___54614,out){
return (function (){
var f__51964__auto__ = (function (){var switch__51789__auto__ = ((function (c__51963__auto___54614,out){
return (function (state_53331){
var state_val_53332 = (state_53331[(1)]);
if((state_val_53332 === (7))){
var inst_53313 = (state_53331[(7)]);
var inst_53313__$1 = (state_53331[(2)]);
var inst_53314 = (inst_53313__$1 == null);
var inst_53315 = cljs.core.not(inst_53314);
var state_53331__$1 = (function (){var statearr_53333 = state_53331;
(statearr_53333[(7)] = inst_53313__$1);

return statearr_53333;
})();
if(inst_53315){
var statearr_53334_54615 = state_53331__$1;
(statearr_53334_54615[(1)] = (8));

} else {
var statearr_53335_54616 = state_53331__$1;
(statearr_53335_54616[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53332 === (1))){
var inst_53308 = (0);
var state_53331__$1 = (function (){var statearr_53336 = state_53331;
(statearr_53336[(8)] = inst_53308);

return statearr_53336;
})();
var statearr_53337_54617 = state_53331__$1;
(statearr_53337_54617[(2)] = null);

(statearr_53337_54617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53332 === (4))){
var state_53331__$1 = state_53331;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53331__$1,(7),ch);
} else {
if((state_val_53332 === (6))){
var inst_53326 = (state_53331[(2)]);
var state_53331__$1 = state_53331;
var statearr_53338_54618 = state_53331__$1;
(statearr_53338_54618[(2)] = inst_53326);

(statearr_53338_54618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53332 === (3))){
var inst_53328 = (state_53331[(2)]);
var inst_53329 = cljs.core.async.close_BANG_(out);
var state_53331__$1 = (function (){var statearr_53339 = state_53331;
(statearr_53339[(9)] = inst_53328);

return statearr_53339;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53331__$1,inst_53329);
} else {
if((state_val_53332 === (2))){
var inst_53308 = (state_53331[(8)]);
var inst_53310 = (inst_53308 < n);
var state_53331__$1 = state_53331;
if(cljs.core.truth_(inst_53310)){
var statearr_53340_54620 = state_53331__$1;
(statearr_53340_54620[(1)] = (4));

} else {
var statearr_53341_54621 = state_53331__$1;
(statearr_53341_54621[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53332 === (11))){
var inst_53308 = (state_53331[(8)]);
var inst_53318 = (state_53331[(2)]);
var inst_53319 = (inst_53308 + (1));
var inst_53308__$1 = inst_53319;
var state_53331__$1 = (function (){var statearr_53342 = state_53331;
(statearr_53342[(8)] = inst_53308__$1);

(statearr_53342[(10)] = inst_53318);

return statearr_53342;
})();
var statearr_53343_54622 = state_53331__$1;
(statearr_53343_54622[(2)] = null);

(statearr_53343_54622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53332 === (9))){
var state_53331__$1 = state_53331;
var statearr_53344_54623 = state_53331__$1;
(statearr_53344_54623[(2)] = null);

(statearr_53344_54623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53332 === (5))){
var state_53331__$1 = state_53331;
var statearr_53345_54625 = state_53331__$1;
(statearr_53345_54625[(2)] = null);

(statearr_53345_54625[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53332 === (10))){
var inst_53323 = (state_53331[(2)]);
var state_53331__$1 = state_53331;
var statearr_53346_54626 = state_53331__$1;
(statearr_53346_54626[(2)] = inst_53323);

(statearr_53346_54626[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53332 === (8))){
var inst_53313 = (state_53331[(7)]);
var state_53331__$1 = state_53331;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53331__$1,(11),out,inst_53313);
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
});})(c__51963__auto___54614,out))
;
return ((function (switch__51789__auto__,c__51963__auto___54614,out){
return (function() {
var cljs$core$async$state_machine__51790__auto__ = null;
var cljs$core$async$state_machine__51790__auto____0 = (function (){
var statearr_53347 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53347[(0)] = cljs$core$async$state_machine__51790__auto__);

(statearr_53347[(1)] = (1));

return statearr_53347;
});
var cljs$core$async$state_machine__51790__auto____1 = (function (state_53331){
while(true){
var ret_value__51791__auto__ = (function (){try{while(true){
var result__51792__auto__ = switch__51789__auto__(state_53331);
if(cljs.core.keyword_identical_QMARK_(result__51792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51792__auto__;
}
break;
}
}catch (e53348){if((e53348 instanceof Object)){
var ex__51793__auto__ = e53348;
var statearr_53349_54627 = state_53331;
(statearr_53349_54627[(5)] = ex__51793__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53348;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54628 = state_53331;
state_53331 = G__54628;
continue;
} else {
return ret_value__51791__auto__;
}
break;
}
});
cljs$core$async$state_machine__51790__auto__ = function(state_53331){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51790__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51790__auto____1.call(this,state_53331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51790__auto____0;
cljs$core$async$state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51790__auto____1;
return cljs$core$async$state_machine__51790__auto__;
})()
;})(switch__51789__auto__,c__51963__auto___54614,out))
})();
var state__51965__auto__ = (function (){var statearr_53350 = (f__51964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51964__auto__.cljs$core$IFn$_invoke$arity$0() : f__51964__auto__.call(null));
(statearr_53350[(6)] = c__51963__auto___54614);

return statearr_53350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51965__auto__);
});})(c__51963__auto___54614,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53352 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53352 = (function (f,ch,meta53353){
this.f = f;
this.ch = ch;
this.meta53353 = meta53353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53354,meta53353__$1){
var self__ = this;
var _53354__$1 = this;
return (new cljs.core.async.t_cljs$core$async53352(self__.f,self__.ch,meta53353__$1));
});

cljs.core.async.t_cljs$core$async53352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53354){
var self__ = this;
var _53354__$1 = this;
return self__.meta53353;
});

cljs.core.async.t_cljs$core$async53352.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53352.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async53352.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async53352.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53352.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53355 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53355 = (function (f,ch,meta53353,_,fn1,meta53356){
this.f = f;
this.ch = ch;
this.meta53353 = meta53353;
this._ = _;
this.fn1 = fn1;
this.meta53356 = meta53356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_53357,meta53356__$1){
var self__ = this;
var _53357__$1 = this;
return (new cljs.core.async.t_cljs$core$async53355(self__.f,self__.ch,self__.meta53353,self__._,self__.fn1,meta53356__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async53355.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_53357){
var self__ = this;
var _53357__$1 = this;
return self__.meta53356;
});})(___$1))
;

cljs.core.async.t_cljs$core$async53355.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53355.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async53355.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async53355.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__53351_SHARP_){
var G__53358 = (((p1__53351_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__53351_SHARP_) : self__.f.call(null,p1__53351_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__53358) : f1.call(null,G__53358));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async53355.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53353","meta53353",1801516600,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async53352","cljs.core.async/t_cljs$core$async53352",1774372931,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta53356","meta53356",104805308,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async53355.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53355.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53355";

cljs.core.async.t_cljs$core$async53355.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async53355");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53355.
 */
cljs.core.async.__GT_t_cljs$core$async53355 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async53355(f__$1,ch__$1,meta53353__$1,___$2,fn1__$1,meta53356){
return (new cljs.core.async.t_cljs$core$async53355(f__$1,ch__$1,meta53353__$1,___$2,fn1__$1,meta53356));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async53355(self__.f,self__.ch,self__.meta53353,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__53359 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__53359) : self__.f.call(null,G__53359));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async53352.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53352.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async53352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53353","meta53353",1801516600,null)], null);
});

cljs.core.async.t_cljs$core$async53352.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53352";

cljs.core.async.t_cljs$core$async53352.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async53352");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53352.
 */
cljs.core.async.__GT_t_cljs$core$async53352 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async53352(f__$1,ch__$1,meta53353){
return (new cljs.core.async.t_cljs$core$async53352(f__$1,ch__$1,meta53353));
});

}

return (new cljs.core.async.t_cljs$core$async53352(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53360 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53360 = (function (f,ch,meta53361){
this.f = f;
this.ch = ch;
this.meta53361 = meta53361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53362,meta53361__$1){
var self__ = this;
var _53362__$1 = this;
return (new cljs.core.async.t_cljs$core$async53360(self__.f,self__.ch,meta53361__$1));
});

cljs.core.async.t_cljs$core$async53360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53362){
var self__ = this;
var _53362__$1 = this;
return self__.meta53361;
});

cljs.core.async.t_cljs$core$async53360.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53360.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async53360.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53360.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async53360.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53360.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async53360.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53361","meta53361",827986728,null)], null);
});

cljs.core.async.t_cljs$core$async53360.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53360.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53360";

cljs.core.async.t_cljs$core$async53360.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async53360");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53360.
 */
cljs.core.async.__GT_t_cljs$core$async53360 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async53360(f__$1,ch__$1,meta53361){
return (new cljs.core.async.t_cljs$core$async53360(f__$1,ch__$1,meta53361));
});

}

return (new cljs.core.async.t_cljs$core$async53360(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53363 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53363 = (function (p,ch,meta53364){
this.p = p;
this.ch = ch;
this.meta53364 = meta53364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53365,meta53364__$1){
var self__ = this;
var _53365__$1 = this;
return (new cljs.core.async.t_cljs$core$async53363(self__.p,self__.ch,meta53364__$1));
});

cljs.core.async.t_cljs$core$async53363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53365){
var self__ = this;
var _53365__$1 = this;
return self__.meta53364;
});

cljs.core.async.t_cljs$core$async53363.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53363.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async53363.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async53363.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53363.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async53363.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53363.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async53363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53364","meta53364",749632074,null)], null);
});

cljs.core.async.t_cljs$core$async53363.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53363.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53363";

cljs.core.async.t_cljs$core$async53363.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async53363");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53363.
 */
cljs.core.async.__GT_t_cljs$core$async53363 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async53363(p__$1,ch__$1,meta53364){
return (new cljs.core.async.t_cljs$core$async53363(p__$1,ch__$1,meta53364));
});

}

return (new cljs.core.async.t_cljs$core$async53363(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__53367 = arguments.length;
switch (G__53367) {
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
var c__51963__auto___54645 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51963__auto___54645,out){
return (function (){
var f__51964__auto__ = (function (){var switch__51789__auto__ = ((function (c__51963__auto___54645,out){
return (function (state_53388){
var state_val_53389 = (state_53388[(1)]);
if((state_val_53389 === (7))){
var inst_53384 = (state_53388[(2)]);
var state_53388__$1 = state_53388;
var statearr_53390_54647 = state_53388__$1;
(statearr_53390_54647[(2)] = inst_53384);

(statearr_53390_54647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53389 === (1))){
var state_53388__$1 = state_53388;
var statearr_53391_54649 = state_53388__$1;
(statearr_53391_54649[(2)] = null);

(statearr_53391_54649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53389 === (4))){
var inst_53370 = (state_53388[(7)]);
var inst_53370__$1 = (state_53388[(2)]);
var inst_53371 = (inst_53370__$1 == null);
var state_53388__$1 = (function (){var statearr_53392 = state_53388;
(statearr_53392[(7)] = inst_53370__$1);

return statearr_53392;
})();
if(cljs.core.truth_(inst_53371)){
var statearr_53393_54650 = state_53388__$1;
(statearr_53393_54650[(1)] = (5));

} else {
var statearr_53394_54651 = state_53388__$1;
(statearr_53394_54651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53389 === (6))){
var inst_53370 = (state_53388[(7)]);
var inst_53375 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_53370) : p.call(null,inst_53370));
var state_53388__$1 = state_53388;
if(cljs.core.truth_(inst_53375)){
var statearr_53395_54655 = state_53388__$1;
(statearr_53395_54655[(1)] = (8));

} else {
var statearr_53396_54656 = state_53388__$1;
(statearr_53396_54656[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53389 === (3))){
var inst_53386 = (state_53388[(2)]);
var state_53388__$1 = state_53388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53388__$1,inst_53386);
} else {
if((state_val_53389 === (2))){
var state_53388__$1 = state_53388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53388__$1,(4),ch);
} else {
if((state_val_53389 === (11))){
var inst_53378 = (state_53388[(2)]);
var state_53388__$1 = state_53388;
var statearr_53397_54661 = state_53388__$1;
(statearr_53397_54661[(2)] = inst_53378);

(statearr_53397_54661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53389 === (9))){
var state_53388__$1 = state_53388;
var statearr_53398_54665 = state_53388__$1;
(statearr_53398_54665[(2)] = null);

(statearr_53398_54665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53389 === (5))){
var inst_53373 = cljs.core.async.close_BANG_(out);
var state_53388__$1 = state_53388;
var statearr_53399_54666 = state_53388__$1;
(statearr_53399_54666[(2)] = inst_53373);

(statearr_53399_54666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53389 === (10))){
var inst_53381 = (state_53388[(2)]);
var state_53388__$1 = (function (){var statearr_53400 = state_53388;
(statearr_53400[(8)] = inst_53381);

return statearr_53400;
})();
var statearr_53401_54667 = state_53388__$1;
(statearr_53401_54667[(2)] = null);

(statearr_53401_54667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53389 === (8))){
var inst_53370 = (state_53388[(7)]);
var state_53388__$1 = state_53388;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53388__$1,(11),out,inst_53370);
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
});})(c__51963__auto___54645,out))
;
return ((function (switch__51789__auto__,c__51963__auto___54645,out){
return (function() {
var cljs$core$async$state_machine__51790__auto__ = null;
var cljs$core$async$state_machine__51790__auto____0 = (function (){
var statearr_53402 = [null,null,null,null,null,null,null,null,null];
(statearr_53402[(0)] = cljs$core$async$state_machine__51790__auto__);

(statearr_53402[(1)] = (1));

return statearr_53402;
});
var cljs$core$async$state_machine__51790__auto____1 = (function (state_53388){
while(true){
var ret_value__51791__auto__ = (function (){try{while(true){
var result__51792__auto__ = switch__51789__auto__(state_53388);
if(cljs.core.keyword_identical_QMARK_(result__51792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51792__auto__;
}
break;
}
}catch (e53403){if((e53403 instanceof Object)){
var ex__51793__auto__ = e53403;
var statearr_53404_54674 = state_53388;
(statearr_53404_54674[(5)] = ex__51793__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53403;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54675 = state_53388;
state_53388 = G__54675;
continue;
} else {
return ret_value__51791__auto__;
}
break;
}
});
cljs$core$async$state_machine__51790__auto__ = function(state_53388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51790__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51790__auto____1.call(this,state_53388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51790__auto____0;
cljs$core$async$state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51790__auto____1;
return cljs$core$async$state_machine__51790__auto__;
})()
;})(switch__51789__auto__,c__51963__auto___54645,out))
})();
var state__51965__auto__ = (function (){var statearr_53405 = (f__51964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51964__auto__.cljs$core$IFn$_invoke$arity$0() : f__51964__auto__.call(null));
(statearr_53405[(6)] = c__51963__auto___54645);

return statearr_53405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51965__auto__);
});})(c__51963__auto___54645,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__53407 = arguments.length;
switch (G__53407) {
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
var c__51963__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51963__auto__){
return (function (){
var f__51964__auto__ = (function (){var switch__51789__auto__ = ((function (c__51963__auto__){
return (function (state_53469){
var state_val_53470 = (state_53469[(1)]);
if((state_val_53470 === (7))){
var inst_53465 = (state_53469[(2)]);
var state_53469__$1 = state_53469;
var statearr_53471_54681 = state_53469__$1;
(statearr_53471_54681[(2)] = inst_53465);

(statearr_53471_54681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53470 === (20))){
var inst_53435 = (state_53469[(7)]);
var inst_53446 = (state_53469[(2)]);
var inst_53447 = cljs.core.next(inst_53435);
var inst_53421 = inst_53447;
var inst_53422 = null;
var inst_53423 = (0);
var inst_53424 = (0);
var state_53469__$1 = (function (){var statearr_53472 = state_53469;
(statearr_53472[(8)] = inst_53421);

(statearr_53472[(9)] = inst_53423);

(statearr_53472[(10)] = inst_53446);

(statearr_53472[(11)] = inst_53424);

(statearr_53472[(12)] = inst_53422);

return statearr_53472;
})();
var statearr_53473_54685 = state_53469__$1;
(statearr_53473_54685[(2)] = null);

(statearr_53473_54685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53470 === (1))){
var state_53469__$1 = state_53469;
var statearr_53474_54692 = state_53469__$1;
(statearr_53474_54692[(2)] = null);

(statearr_53474_54692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53470 === (4))){
var inst_53410 = (state_53469[(13)]);
var inst_53410__$1 = (state_53469[(2)]);
var inst_53411 = (inst_53410__$1 == null);
var state_53469__$1 = (function (){var statearr_53475 = state_53469;
(statearr_53475[(13)] = inst_53410__$1);

return statearr_53475;
})();
if(cljs.core.truth_(inst_53411)){
var statearr_53476_54693 = state_53469__$1;
(statearr_53476_54693[(1)] = (5));

} else {
var statearr_53477_54700 = state_53469__$1;
(statearr_53477_54700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53470 === (15))){
var state_53469__$1 = state_53469;
var statearr_53481_54701 = state_53469__$1;
(statearr_53481_54701[(2)] = null);

(statearr_53481_54701[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53470 === (21))){
var state_53469__$1 = state_53469;
var statearr_53482_54702 = state_53469__$1;
(statearr_53482_54702[(2)] = null);

(statearr_53482_54702[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53470 === (13))){
var inst_53421 = (state_53469[(8)]);
var inst_53423 = (state_53469[(9)]);
var inst_53424 = (state_53469[(11)]);
var inst_53422 = (state_53469[(12)]);
var inst_53431 = (state_53469[(2)]);
var inst_53432 = (inst_53424 + (1));
var tmp53478 = inst_53421;
var tmp53479 = inst_53423;
var tmp53480 = inst_53422;
var inst_53421__$1 = tmp53478;
var inst_53422__$1 = tmp53480;
var inst_53423__$1 = tmp53479;
var inst_53424__$1 = inst_53432;
var state_53469__$1 = (function (){var statearr_53483 = state_53469;
(statearr_53483[(8)] = inst_53421__$1);

(statearr_53483[(9)] = inst_53423__$1);

(statearr_53483[(11)] = inst_53424__$1);

(statearr_53483[(12)] = inst_53422__$1);

(statearr_53483[(14)] = inst_53431);

return statearr_53483;
})();
var statearr_53484_54703 = state_53469__$1;
(statearr_53484_54703[(2)] = null);

(statearr_53484_54703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53470 === (22))){
var state_53469__$1 = state_53469;
var statearr_53485_54704 = state_53469__$1;
(statearr_53485_54704[(2)] = null);

(statearr_53485_54704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53470 === (6))){
var inst_53410 = (state_53469[(13)]);
var inst_53419 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_53410) : f.call(null,inst_53410));
var inst_53420 = cljs.core.seq(inst_53419);
var inst_53421 = inst_53420;
var inst_53422 = null;
var inst_53423 = (0);
var inst_53424 = (0);
var state_53469__$1 = (function (){var statearr_53486 = state_53469;
(statearr_53486[(8)] = inst_53421);

(statearr_53486[(9)] = inst_53423);

(statearr_53486[(11)] = inst_53424);

(statearr_53486[(12)] = inst_53422);

return statearr_53486;
})();
var statearr_53487_54705 = state_53469__$1;
(statearr_53487_54705[(2)] = null);

(statearr_53487_54705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53470 === (17))){
var inst_53435 = (state_53469[(7)]);
var inst_53439 = cljs.core.chunk_first(inst_53435);
var inst_53440 = cljs.core.chunk_rest(inst_53435);
var inst_53441 = cljs.core.count(inst_53439);
var inst_53421 = inst_53440;
var inst_53422 = inst_53439;
var inst_53423 = inst_53441;
var inst_53424 = (0);
var state_53469__$1 = (function (){var statearr_53488 = state_53469;
(statearr_53488[(8)] = inst_53421);

(statearr_53488[(9)] = inst_53423);

(statearr_53488[(11)] = inst_53424);

(statearr_53488[(12)] = inst_53422);

return statearr_53488;
})();
var statearr_53489_54712 = state_53469__$1;
(statearr_53489_54712[(2)] = null);

(statearr_53489_54712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53470 === (3))){
var inst_53467 = (state_53469[(2)]);
var state_53469__$1 = state_53469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53469__$1,inst_53467);
} else {
if((state_val_53470 === (12))){
var inst_53455 = (state_53469[(2)]);
var state_53469__$1 = state_53469;
var statearr_53490_54713 = state_53469__$1;
(statearr_53490_54713[(2)] = inst_53455);

(statearr_53490_54713[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53470 === (2))){
var state_53469__$1 = state_53469;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53469__$1,(4),in$);
} else {
if((state_val_53470 === (23))){
var inst_53463 = (state_53469[(2)]);
var state_53469__$1 = state_53469;
var statearr_53491_54714 = state_53469__$1;
(statearr_53491_54714[(2)] = inst_53463);

(statearr_53491_54714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53470 === (19))){
var inst_53450 = (state_53469[(2)]);
var state_53469__$1 = state_53469;
var statearr_53492_54715 = state_53469__$1;
(statearr_53492_54715[(2)] = inst_53450);

(statearr_53492_54715[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53470 === (11))){
var inst_53421 = (state_53469[(8)]);
var inst_53435 = (state_53469[(7)]);
var inst_53435__$1 = cljs.core.seq(inst_53421);
var state_53469__$1 = (function (){var statearr_53493 = state_53469;
(statearr_53493[(7)] = inst_53435__$1);

return statearr_53493;
})();
if(inst_53435__$1){
var statearr_53494_54716 = state_53469__$1;
(statearr_53494_54716[(1)] = (14));

} else {
var statearr_53495_54717 = state_53469__$1;
(statearr_53495_54717[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53470 === (9))){
var inst_53457 = (state_53469[(2)]);
var inst_53458 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_53469__$1 = (function (){var statearr_53496 = state_53469;
(statearr_53496[(15)] = inst_53457);

return statearr_53496;
})();
if(cljs.core.truth_(inst_53458)){
var statearr_53497_54718 = state_53469__$1;
(statearr_53497_54718[(1)] = (21));

} else {
var statearr_53498_54719 = state_53469__$1;
(statearr_53498_54719[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53470 === (5))){
var inst_53413 = cljs.core.async.close_BANG_(out);
var state_53469__$1 = state_53469;
var statearr_53499_54726 = state_53469__$1;
(statearr_53499_54726[(2)] = inst_53413);

(statearr_53499_54726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53470 === (14))){
var inst_53435 = (state_53469[(7)]);
var inst_53437 = cljs.core.chunked_seq_QMARK_(inst_53435);
var state_53469__$1 = state_53469;
if(inst_53437){
var statearr_53500_54727 = state_53469__$1;
(statearr_53500_54727[(1)] = (17));

} else {
var statearr_53501_54728 = state_53469__$1;
(statearr_53501_54728[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53470 === (16))){
var inst_53453 = (state_53469[(2)]);
var state_53469__$1 = state_53469;
var statearr_53502_54729 = state_53469__$1;
(statearr_53502_54729[(2)] = inst_53453);

(statearr_53502_54729[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53470 === (10))){
var inst_53424 = (state_53469[(11)]);
var inst_53422 = (state_53469[(12)]);
var inst_53429 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_53422,inst_53424);
var state_53469__$1 = state_53469;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53469__$1,(13),out,inst_53429);
} else {
if((state_val_53470 === (18))){
var inst_53435 = (state_53469[(7)]);
var inst_53444 = cljs.core.first(inst_53435);
var state_53469__$1 = state_53469;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53469__$1,(20),out,inst_53444);
} else {
if((state_val_53470 === (8))){
var inst_53423 = (state_53469[(9)]);
var inst_53424 = (state_53469[(11)]);
var inst_53426 = (inst_53424 < inst_53423);
var inst_53427 = inst_53426;
var state_53469__$1 = state_53469;
if(cljs.core.truth_(inst_53427)){
var statearr_53503_54730 = state_53469__$1;
(statearr_53503_54730[(1)] = (10));

} else {
var statearr_53504_54731 = state_53469__$1;
(statearr_53504_54731[(1)] = (11));

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
});})(c__51963__auto__))
;
return ((function (switch__51789__auto__,c__51963__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__51790__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__51790__auto____0 = (function (){
var statearr_53505 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53505[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__51790__auto__);

(statearr_53505[(1)] = (1));

return statearr_53505;
});
var cljs$core$async$mapcat_STAR__$_state_machine__51790__auto____1 = (function (state_53469){
while(true){
var ret_value__51791__auto__ = (function (){try{while(true){
var result__51792__auto__ = switch__51789__auto__(state_53469);
if(cljs.core.keyword_identical_QMARK_(result__51792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51792__auto__;
}
break;
}
}catch (e53506){if((e53506 instanceof Object)){
var ex__51793__auto__ = e53506;
var statearr_53507_54732 = state_53469;
(statearr_53507_54732[(5)] = ex__51793__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53506;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54733 = state_53469;
state_53469 = G__54733;
continue;
} else {
return ret_value__51791__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__51790__auto__ = function(state_53469){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__51790__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__51790__auto____1.call(this,state_53469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__51790__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__51790__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__51790__auto__;
})()
;})(switch__51789__auto__,c__51963__auto__))
})();
var state__51965__auto__ = (function (){var statearr_53508 = (f__51964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51964__auto__.cljs$core$IFn$_invoke$arity$0() : f__51964__auto__.call(null));
(statearr_53508[(6)] = c__51963__auto__);

return statearr_53508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51965__auto__);
});})(c__51963__auto__))
);

return c__51963__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__53510 = arguments.length;
switch (G__53510) {
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
var G__53512 = arguments.length;
switch (G__53512) {
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
var G__53514 = arguments.length;
switch (G__53514) {
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
var c__51963__auto___54743 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51963__auto___54743,out){
return (function (){
var f__51964__auto__ = (function (){var switch__51789__auto__ = ((function (c__51963__auto___54743,out){
return (function (state_53538){
var state_val_53539 = (state_53538[(1)]);
if((state_val_53539 === (7))){
var inst_53533 = (state_53538[(2)]);
var state_53538__$1 = state_53538;
var statearr_53540_54744 = state_53538__$1;
(statearr_53540_54744[(2)] = inst_53533);

(statearr_53540_54744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53539 === (1))){
var inst_53515 = null;
var state_53538__$1 = (function (){var statearr_53541 = state_53538;
(statearr_53541[(7)] = inst_53515);

return statearr_53541;
})();
var statearr_53542_54745 = state_53538__$1;
(statearr_53542_54745[(2)] = null);

(statearr_53542_54745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53539 === (4))){
var inst_53518 = (state_53538[(8)]);
var inst_53518__$1 = (state_53538[(2)]);
var inst_53519 = (inst_53518__$1 == null);
var inst_53520 = cljs.core.not(inst_53519);
var state_53538__$1 = (function (){var statearr_53543 = state_53538;
(statearr_53543[(8)] = inst_53518__$1);

return statearr_53543;
})();
if(inst_53520){
var statearr_53544_54749 = state_53538__$1;
(statearr_53544_54749[(1)] = (5));

} else {
var statearr_53545_54750 = state_53538__$1;
(statearr_53545_54750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53539 === (6))){
var state_53538__$1 = state_53538;
var statearr_53546_54751 = state_53538__$1;
(statearr_53546_54751[(2)] = null);

(statearr_53546_54751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53539 === (3))){
var inst_53535 = (state_53538[(2)]);
var inst_53536 = cljs.core.async.close_BANG_(out);
var state_53538__$1 = (function (){var statearr_53547 = state_53538;
(statearr_53547[(9)] = inst_53535);

return statearr_53547;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53538__$1,inst_53536);
} else {
if((state_val_53539 === (2))){
var state_53538__$1 = state_53538;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53538__$1,(4),ch);
} else {
if((state_val_53539 === (11))){
var inst_53518 = (state_53538[(8)]);
var inst_53527 = (state_53538[(2)]);
var inst_53515 = inst_53518;
var state_53538__$1 = (function (){var statearr_53548 = state_53538;
(statearr_53548[(7)] = inst_53515);

(statearr_53548[(10)] = inst_53527);

return statearr_53548;
})();
var statearr_53549_54755 = state_53538__$1;
(statearr_53549_54755[(2)] = null);

(statearr_53549_54755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53539 === (9))){
var inst_53518 = (state_53538[(8)]);
var state_53538__$1 = state_53538;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53538__$1,(11),out,inst_53518);
} else {
if((state_val_53539 === (5))){
var inst_53515 = (state_53538[(7)]);
var inst_53518 = (state_53538[(8)]);
var inst_53522 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53518,inst_53515);
var state_53538__$1 = state_53538;
if(inst_53522){
var statearr_53551_54758 = state_53538__$1;
(statearr_53551_54758[(1)] = (8));

} else {
var statearr_53552_54759 = state_53538__$1;
(statearr_53552_54759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53539 === (10))){
var inst_53530 = (state_53538[(2)]);
var state_53538__$1 = state_53538;
var statearr_53553_54760 = state_53538__$1;
(statearr_53553_54760[(2)] = inst_53530);

(statearr_53553_54760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53539 === (8))){
var inst_53515 = (state_53538[(7)]);
var tmp53550 = inst_53515;
var inst_53515__$1 = tmp53550;
var state_53538__$1 = (function (){var statearr_53554 = state_53538;
(statearr_53554[(7)] = inst_53515__$1);

return statearr_53554;
})();
var statearr_53555_54761 = state_53538__$1;
(statearr_53555_54761[(2)] = null);

(statearr_53555_54761[(1)] = (2));


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
});})(c__51963__auto___54743,out))
;
return ((function (switch__51789__auto__,c__51963__auto___54743,out){
return (function() {
var cljs$core$async$state_machine__51790__auto__ = null;
var cljs$core$async$state_machine__51790__auto____0 = (function (){
var statearr_53556 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53556[(0)] = cljs$core$async$state_machine__51790__auto__);

(statearr_53556[(1)] = (1));

return statearr_53556;
});
var cljs$core$async$state_machine__51790__auto____1 = (function (state_53538){
while(true){
var ret_value__51791__auto__ = (function (){try{while(true){
var result__51792__auto__ = switch__51789__auto__(state_53538);
if(cljs.core.keyword_identical_QMARK_(result__51792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51792__auto__;
}
break;
}
}catch (e53557){if((e53557 instanceof Object)){
var ex__51793__auto__ = e53557;
var statearr_53558_54763 = state_53538;
(statearr_53558_54763[(5)] = ex__51793__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53557;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54765 = state_53538;
state_53538 = G__54765;
continue;
} else {
return ret_value__51791__auto__;
}
break;
}
});
cljs$core$async$state_machine__51790__auto__ = function(state_53538){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51790__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51790__auto____1.call(this,state_53538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51790__auto____0;
cljs$core$async$state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51790__auto____1;
return cljs$core$async$state_machine__51790__auto__;
})()
;})(switch__51789__auto__,c__51963__auto___54743,out))
})();
var state__51965__auto__ = (function (){var statearr_53559 = (f__51964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51964__auto__.cljs$core$IFn$_invoke$arity$0() : f__51964__auto__.call(null));
(statearr_53559[(6)] = c__51963__auto___54743);

return statearr_53559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51965__auto__);
});})(c__51963__auto___54743,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__53561 = arguments.length;
switch (G__53561) {
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
var c__51963__auto___54767 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51963__auto___54767,out){
return (function (){
var f__51964__auto__ = (function (){var switch__51789__auto__ = ((function (c__51963__auto___54767,out){
return (function (state_53599){
var state_val_53600 = (state_53599[(1)]);
if((state_val_53600 === (7))){
var inst_53595 = (state_53599[(2)]);
var state_53599__$1 = state_53599;
var statearr_53601_54771 = state_53599__$1;
(statearr_53601_54771[(2)] = inst_53595);

(statearr_53601_54771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53600 === (1))){
var inst_53562 = (new Array(n));
var inst_53563 = inst_53562;
var inst_53564 = (0);
var state_53599__$1 = (function (){var statearr_53602 = state_53599;
(statearr_53602[(7)] = inst_53563);

(statearr_53602[(8)] = inst_53564);

return statearr_53602;
})();
var statearr_53603_54774 = state_53599__$1;
(statearr_53603_54774[(2)] = null);

(statearr_53603_54774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53600 === (4))){
var inst_53567 = (state_53599[(9)]);
var inst_53567__$1 = (state_53599[(2)]);
var inst_53568 = (inst_53567__$1 == null);
var inst_53569 = cljs.core.not(inst_53568);
var state_53599__$1 = (function (){var statearr_53604 = state_53599;
(statearr_53604[(9)] = inst_53567__$1);

return statearr_53604;
})();
if(inst_53569){
var statearr_53605_54779 = state_53599__$1;
(statearr_53605_54779[(1)] = (5));

} else {
var statearr_53606_54780 = state_53599__$1;
(statearr_53606_54780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53600 === (15))){
var inst_53589 = (state_53599[(2)]);
var state_53599__$1 = state_53599;
var statearr_53607_54781 = state_53599__$1;
(statearr_53607_54781[(2)] = inst_53589);

(statearr_53607_54781[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53600 === (13))){
var state_53599__$1 = state_53599;
var statearr_53608_54783 = state_53599__$1;
(statearr_53608_54783[(2)] = null);

(statearr_53608_54783[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53600 === (6))){
var inst_53564 = (state_53599[(8)]);
var inst_53585 = (inst_53564 > (0));
var state_53599__$1 = state_53599;
if(cljs.core.truth_(inst_53585)){
var statearr_53609_54785 = state_53599__$1;
(statearr_53609_54785[(1)] = (12));

} else {
var statearr_53610_54786 = state_53599__$1;
(statearr_53610_54786[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53600 === (3))){
var inst_53597 = (state_53599[(2)]);
var state_53599__$1 = state_53599;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53599__$1,inst_53597);
} else {
if((state_val_53600 === (12))){
var inst_53563 = (state_53599[(7)]);
var inst_53587 = cljs.core.vec(inst_53563);
var state_53599__$1 = state_53599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53599__$1,(15),out,inst_53587);
} else {
if((state_val_53600 === (2))){
var state_53599__$1 = state_53599;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53599__$1,(4),ch);
} else {
if((state_val_53600 === (11))){
var inst_53579 = (state_53599[(2)]);
var inst_53580 = (new Array(n));
var inst_53563 = inst_53580;
var inst_53564 = (0);
var state_53599__$1 = (function (){var statearr_53611 = state_53599;
(statearr_53611[(10)] = inst_53579);

(statearr_53611[(7)] = inst_53563);

(statearr_53611[(8)] = inst_53564);

return statearr_53611;
})();
var statearr_53612_54790 = state_53599__$1;
(statearr_53612_54790[(2)] = null);

(statearr_53612_54790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53600 === (9))){
var inst_53563 = (state_53599[(7)]);
var inst_53577 = cljs.core.vec(inst_53563);
var state_53599__$1 = state_53599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53599__$1,(11),out,inst_53577);
} else {
if((state_val_53600 === (5))){
var inst_53572 = (state_53599[(11)]);
var inst_53567 = (state_53599[(9)]);
var inst_53563 = (state_53599[(7)]);
var inst_53564 = (state_53599[(8)]);
var inst_53571 = (inst_53563[inst_53564] = inst_53567);
var inst_53572__$1 = (inst_53564 + (1));
var inst_53573 = (inst_53572__$1 < n);
var state_53599__$1 = (function (){var statearr_53613 = state_53599;
(statearr_53613[(12)] = inst_53571);

(statearr_53613[(11)] = inst_53572__$1);

return statearr_53613;
})();
if(cljs.core.truth_(inst_53573)){
var statearr_53614_54791 = state_53599__$1;
(statearr_53614_54791[(1)] = (8));

} else {
var statearr_53615_54792 = state_53599__$1;
(statearr_53615_54792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53600 === (14))){
var inst_53592 = (state_53599[(2)]);
var inst_53593 = cljs.core.async.close_BANG_(out);
var state_53599__$1 = (function (){var statearr_53617 = state_53599;
(statearr_53617[(13)] = inst_53592);

return statearr_53617;
})();
var statearr_53618_54793 = state_53599__$1;
(statearr_53618_54793[(2)] = inst_53593);

(statearr_53618_54793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53600 === (10))){
var inst_53583 = (state_53599[(2)]);
var state_53599__$1 = state_53599;
var statearr_53619_54794 = state_53599__$1;
(statearr_53619_54794[(2)] = inst_53583);

(statearr_53619_54794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53600 === (8))){
var inst_53572 = (state_53599[(11)]);
var inst_53563 = (state_53599[(7)]);
var tmp53616 = inst_53563;
var inst_53563__$1 = tmp53616;
var inst_53564 = inst_53572;
var state_53599__$1 = (function (){var statearr_53620 = state_53599;
(statearr_53620[(7)] = inst_53563__$1);

(statearr_53620[(8)] = inst_53564);

return statearr_53620;
})();
var statearr_53621_54795 = state_53599__$1;
(statearr_53621_54795[(2)] = null);

(statearr_53621_54795[(1)] = (2));


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
});})(c__51963__auto___54767,out))
;
return ((function (switch__51789__auto__,c__51963__auto___54767,out){
return (function() {
var cljs$core$async$state_machine__51790__auto__ = null;
var cljs$core$async$state_machine__51790__auto____0 = (function (){
var statearr_53622 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53622[(0)] = cljs$core$async$state_machine__51790__auto__);

(statearr_53622[(1)] = (1));

return statearr_53622;
});
var cljs$core$async$state_machine__51790__auto____1 = (function (state_53599){
while(true){
var ret_value__51791__auto__ = (function (){try{while(true){
var result__51792__auto__ = switch__51789__auto__(state_53599);
if(cljs.core.keyword_identical_QMARK_(result__51792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51792__auto__;
}
break;
}
}catch (e53623){if((e53623 instanceof Object)){
var ex__51793__auto__ = e53623;
var statearr_53624_54796 = state_53599;
(statearr_53624_54796[(5)] = ex__51793__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53623;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54797 = state_53599;
state_53599 = G__54797;
continue;
} else {
return ret_value__51791__auto__;
}
break;
}
});
cljs$core$async$state_machine__51790__auto__ = function(state_53599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51790__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51790__auto____1.call(this,state_53599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51790__auto____0;
cljs$core$async$state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51790__auto____1;
return cljs$core$async$state_machine__51790__auto__;
})()
;})(switch__51789__auto__,c__51963__auto___54767,out))
})();
var state__51965__auto__ = (function (){var statearr_53625 = (f__51964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51964__auto__.cljs$core$IFn$_invoke$arity$0() : f__51964__auto__.call(null));
(statearr_53625[(6)] = c__51963__auto___54767);

return statearr_53625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51965__auto__);
});})(c__51963__auto___54767,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__53627 = arguments.length;
switch (G__53627) {
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
var c__51963__auto___54799 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51963__auto___54799,out){
return (function (){
var f__51964__auto__ = (function (){var switch__51789__auto__ = ((function (c__51963__auto___54799,out){
return (function (state_53669){
var state_val_53670 = (state_53669[(1)]);
if((state_val_53670 === (7))){
var inst_53665 = (state_53669[(2)]);
var state_53669__$1 = state_53669;
var statearr_53671_54801 = state_53669__$1;
(statearr_53671_54801[(2)] = inst_53665);

(statearr_53671_54801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53670 === (1))){
var inst_53628 = [];
var inst_53629 = inst_53628;
var inst_53630 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_53669__$1 = (function (){var statearr_53672 = state_53669;
(statearr_53672[(7)] = inst_53629);

(statearr_53672[(8)] = inst_53630);

return statearr_53672;
})();
var statearr_53673_54802 = state_53669__$1;
(statearr_53673_54802[(2)] = null);

(statearr_53673_54802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53670 === (4))){
var inst_53633 = (state_53669[(9)]);
var inst_53633__$1 = (state_53669[(2)]);
var inst_53634 = (inst_53633__$1 == null);
var inst_53635 = cljs.core.not(inst_53634);
var state_53669__$1 = (function (){var statearr_53674 = state_53669;
(statearr_53674[(9)] = inst_53633__$1);

return statearr_53674;
})();
if(inst_53635){
var statearr_53675_54804 = state_53669__$1;
(statearr_53675_54804[(1)] = (5));

} else {
var statearr_53676_54805 = state_53669__$1;
(statearr_53676_54805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53670 === (15))){
var inst_53659 = (state_53669[(2)]);
var state_53669__$1 = state_53669;
var statearr_53677_54806 = state_53669__$1;
(statearr_53677_54806[(2)] = inst_53659);

(statearr_53677_54806[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53670 === (13))){
var state_53669__$1 = state_53669;
var statearr_53678_54807 = state_53669__$1;
(statearr_53678_54807[(2)] = null);

(statearr_53678_54807[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53670 === (6))){
var inst_53629 = (state_53669[(7)]);
var inst_53654 = inst_53629.length;
var inst_53655 = (inst_53654 > (0));
var state_53669__$1 = state_53669;
if(cljs.core.truth_(inst_53655)){
var statearr_53679_54809 = state_53669__$1;
(statearr_53679_54809[(1)] = (12));

} else {
var statearr_53680_54810 = state_53669__$1;
(statearr_53680_54810[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53670 === (3))){
var inst_53667 = (state_53669[(2)]);
var state_53669__$1 = state_53669;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53669__$1,inst_53667);
} else {
if((state_val_53670 === (12))){
var inst_53629 = (state_53669[(7)]);
var inst_53657 = cljs.core.vec(inst_53629);
var state_53669__$1 = state_53669;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53669__$1,(15),out,inst_53657);
} else {
if((state_val_53670 === (2))){
var state_53669__$1 = state_53669;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53669__$1,(4),ch);
} else {
if((state_val_53670 === (11))){
var inst_53637 = (state_53669[(10)]);
var inst_53633 = (state_53669[(9)]);
var inst_53647 = (state_53669[(2)]);
var inst_53648 = [];
var inst_53649 = inst_53648.push(inst_53633);
var inst_53629 = inst_53648;
var inst_53630 = inst_53637;
var state_53669__$1 = (function (){var statearr_53681 = state_53669;
(statearr_53681[(7)] = inst_53629);

(statearr_53681[(11)] = inst_53647);

(statearr_53681[(8)] = inst_53630);

(statearr_53681[(12)] = inst_53649);

return statearr_53681;
})();
var statearr_53682_54812 = state_53669__$1;
(statearr_53682_54812[(2)] = null);

(statearr_53682_54812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53670 === (9))){
var inst_53629 = (state_53669[(7)]);
var inst_53645 = cljs.core.vec(inst_53629);
var state_53669__$1 = state_53669;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53669__$1,(11),out,inst_53645);
} else {
if((state_val_53670 === (5))){
var inst_53637 = (state_53669[(10)]);
var inst_53630 = (state_53669[(8)]);
var inst_53633 = (state_53669[(9)]);
var inst_53637__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_53633) : f.call(null,inst_53633));
var inst_53638 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53637__$1,inst_53630);
var inst_53639 = cljs.core.keyword_identical_QMARK_(inst_53630,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_53640 = ((inst_53638) || (inst_53639));
var state_53669__$1 = (function (){var statearr_53683 = state_53669;
(statearr_53683[(10)] = inst_53637__$1);

return statearr_53683;
})();
if(cljs.core.truth_(inst_53640)){
var statearr_53684_54814 = state_53669__$1;
(statearr_53684_54814[(1)] = (8));

} else {
var statearr_53685_54815 = state_53669__$1;
(statearr_53685_54815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53670 === (14))){
var inst_53662 = (state_53669[(2)]);
var inst_53663 = cljs.core.async.close_BANG_(out);
var state_53669__$1 = (function (){var statearr_53687 = state_53669;
(statearr_53687[(13)] = inst_53662);

return statearr_53687;
})();
var statearr_53688_54816 = state_53669__$1;
(statearr_53688_54816[(2)] = inst_53663);

(statearr_53688_54816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53670 === (10))){
var inst_53652 = (state_53669[(2)]);
var state_53669__$1 = state_53669;
var statearr_53689_54818 = state_53669__$1;
(statearr_53689_54818[(2)] = inst_53652);

(statearr_53689_54818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53670 === (8))){
var inst_53629 = (state_53669[(7)]);
var inst_53637 = (state_53669[(10)]);
var inst_53633 = (state_53669[(9)]);
var inst_53642 = inst_53629.push(inst_53633);
var tmp53686 = inst_53629;
var inst_53629__$1 = tmp53686;
var inst_53630 = inst_53637;
var state_53669__$1 = (function (){var statearr_53690 = state_53669;
(statearr_53690[(7)] = inst_53629__$1);

(statearr_53690[(14)] = inst_53642);

(statearr_53690[(8)] = inst_53630);

return statearr_53690;
})();
var statearr_53691_54819 = state_53669__$1;
(statearr_53691_54819[(2)] = null);

(statearr_53691_54819[(1)] = (2));


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
});})(c__51963__auto___54799,out))
;
return ((function (switch__51789__auto__,c__51963__auto___54799,out){
return (function() {
var cljs$core$async$state_machine__51790__auto__ = null;
var cljs$core$async$state_machine__51790__auto____0 = (function (){
var statearr_53692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53692[(0)] = cljs$core$async$state_machine__51790__auto__);

(statearr_53692[(1)] = (1));

return statearr_53692;
});
var cljs$core$async$state_machine__51790__auto____1 = (function (state_53669){
while(true){
var ret_value__51791__auto__ = (function (){try{while(true){
var result__51792__auto__ = switch__51789__auto__(state_53669);
if(cljs.core.keyword_identical_QMARK_(result__51792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51792__auto__;
}
break;
}
}catch (e53693){if((e53693 instanceof Object)){
var ex__51793__auto__ = e53693;
var statearr_53694_54820 = state_53669;
(statearr_53694_54820[(5)] = ex__51793__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53693;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54821 = state_53669;
state_53669 = G__54821;
continue;
} else {
return ret_value__51791__auto__;
}
break;
}
});
cljs$core$async$state_machine__51790__auto__ = function(state_53669){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51790__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51790__auto____1.call(this,state_53669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51790__auto____0;
cljs$core$async$state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51790__auto____1;
return cljs$core$async$state_machine__51790__auto__;
})()
;})(switch__51789__auto__,c__51963__auto___54799,out))
})();
var state__51965__auto__ = (function (){var statearr_53695 = (f__51964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51964__auto__.cljs$core$IFn$_invoke$arity$0() : f__51964__auto__.call(null));
(statearr_53695[(6)] = c__51963__auto___54799);

return statearr_53695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51965__auto__);
});})(c__51963__auto___54799,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
