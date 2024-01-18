goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__67319,res){
var map__67320 = p__67319;
var map__67320__$1 = cljs.core.__destructure_map(map__67320);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67320__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67320__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__67321 = res;
var G__67321__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67321,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__67321);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67321__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__67321__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__67325 = arguments.length;
switch (G__67325) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__67326,msg,handlers,timeout_after_ms){
var map__67327 = p__67326;
var map__67327__$1 = cljs.core.__destructure_map(map__67327);
var runtime = map__67327__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67327__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___67425 = arguments.length;
var i__5770__auto___67426 = (0);
while(true){
if((i__5770__auto___67426 < len__5769__auto___67425)){
args__5775__auto__.push((arguments[i__5770__auto___67426]));

var G__67427 = (i__5770__auto___67426 + (1));
i__5770__auto___67426 = G__67427;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__67335,ev,args){
var map__67336 = p__67335;
var map__67336__$1 = cljs.core.__destructure_map(map__67336);
var runtime = map__67336__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67336__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__67337 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__67340 = null;
var count__67341 = (0);
var i__67342 = (0);
while(true){
if((i__67342 < count__67341)){
var ext = chunk__67340.cljs$core$IIndexed$_nth$arity$2(null,i__67342);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__67430 = seq__67337;
var G__67431 = chunk__67340;
var G__67432 = count__67341;
var G__67433 = (i__67342 + (1));
seq__67337 = G__67430;
chunk__67340 = G__67431;
count__67341 = G__67432;
i__67342 = G__67433;
continue;
} else {
var G__67434 = seq__67337;
var G__67435 = chunk__67340;
var G__67436 = count__67341;
var G__67437 = (i__67342 + (1));
seq__67337 = G__67434;
chunk__67340 = G__67435;
count__67341 = G__67436;
i__67342 = G__67437;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__67337);
if(temp__5804__auto__){
var seq__67337__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67337__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__67337__$1);
var G__67438 = cljs.core.chunk_rest(seq__67337__$1);
var G__67439 = c__5568__auto__;
var G__67440 = cljs.core.count(c__5568__auto__);
var G__67441 = (0);
seq__67337 = G__67438;
chunk__67340 = G__67439;
count__67341 = G__67440;
i__67342 = G__67441;
continue;
} else {
var ext = cljs.core.first(seq__67337__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__67442 = cljs.core.next(seq__67337__$1);
var G__67443 = null;
var G__67444 = (0);
var G__67445 = (0);
seq__67337 = G__67442;
chunk__67340 = G__67443;
count__67341 = G__67444;
i__67342 = G__67445;
continue;
} else {
var G__67446 = cljs.core.next(seq__67337__$1);
var G__67447 = null;
var G__67448 = (0);
var G__67449 = (0);
seq__67337 = G__67446;
chunk__67340 = G__67447;
count__67341 = G__67448;
i__67342 = G__67449;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq67329){
var G__67330 = cljs.core.first(seq67329);
var seq67329__$1 = cljs.core.next(seq67329);
var G__67331 = cljs.core.first(seq67329__$1);
var seq67329__$2 = cljs.core.next(seq67329__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67330,G__67331,seq67329__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__67363,p__67364){
var map__67365 = p__67363;
var map__67365__$1 = cljs.core.__destructure_map(map__67365);
var runtime = map__67365__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67365__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67366 = p__67364;
var map__67366__$1 = cljs.core.__destructure_map(map__67366);
var msg = map__67366__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67366__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__67367 = cljs.core.deref(state_ref);
var map__67367__$1 = cljs.core.__destructure_map(map__67367);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67367__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67367__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__67374){
var map__67375 = p__67374;
var map__67375__$1 = cljs.core.__destructure_map(map__67375);
var runtime = map__67375__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67375__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__67376,msg){
var map__67377 = p__67376;
var map__67377__$1 = cljs.core.__destructure_map(map__67377);
var runtime = map__67377__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67377__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__67378,key,p__67379){
var map__67380 = p__67378;
var map__67380__$1 = cljs.core.__destructure_map(map__67380);
var state = map__67380__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67380__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__67381 = p__67379;
var map__67381__$1 = cljs.core.__destructure_map(map__67381);
var spec = map__67381__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67381__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__67382,key,spec){
var map__67383 = p__67382;
var map__67383__$1 = cljs.core.__destructure_map(map__67383);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67383__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__67390_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__67390_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__67391_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__67391_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__67392_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__67392_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__67393_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__67393_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__67394_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__67394_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__67395,key){
var map__67396 = p__67395;
var map__67396__$1 = cljs.core.__destructure_map(map__67396);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67396__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__67402,msg){
var map__67404 = p__67402;
var map__67404__$1 = cljs.core.__destructure_map(map__67404);
var runtime = map__67404__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67404__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__67405,p__67406){
var map__67407 = p__67405;
var map__67407__$1 = cljs.core.__destructure_map(map__67407);
var runtime = map__67407__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67407__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__67408 = p__67406;
var map__67408__$1 = cljs.core.__destructure_map(map__67408);
var msg = map__67408__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67408__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67408__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__67409 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__67411 = null;
var count__67412 = (0);
var i__67413 = (0);
while(true){
if((i__67413 < count__67412)){
var map__67417 = chunk__67411.cljs$core$IIndexed$_nth$arity$2(null,i__67413);
var map__67417__$1 = cljs.core.__destructure_map(map__67417);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67417__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__67476 = seq__67409;
var G__67477 = chunk__67411;
var G__67478 = count__67412;
var G__67479 = (i__67413 + (1));
seq__67409 = G__67476;
chunk__67411 = G__67477;
count__67412 = G__67478;
i__67413 = G__67479;
continue;
} else {
var G__67480 = seq__67409;
var G__67481 = chunk__67411;
var G__67482 = count__67412;
var G__67483 = (i__67413 + (1));
seq__67409 = G__67480;
chunk__67411 = G__67481;
count__67412 = G__67482;
i__67413 = G__67483;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__67409);
if(temp__5804__auto__){
var seq__67409__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67409__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__67409__$1);
var G__67484 = cljs.core.chunk_rest(seq__67409__$1);
var G__67485 = c__5568__auto__;
var G__67486 = cljs.core.count(c__5568__auto__);
var G__67487 = (0);
seq__67409 = G__67484;
chunk__67411 = G__67485;
count__67412 = G__67486;
i__67413 = G__67487;
continue;
} else {
var map__67418 = cljs.core.first(seq__67409__$1);
var map__67418__$1 = cljs.core.__destructure_map(map__67418);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67418__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__67492 = cljs.core.next(seq__67409__$1);
var G__67493 = null;
var G__67494 = (0);
var G__67495 = (0);
seq__67409 = G__67492;
chunk__67411 = G__67493;
count__67412 = G__67494;
i__67413 = G__67495;
continue;
} else {
var G__67496 = cljs.core.next(seq__67409__$1);
var G__67497 = null;
var G__67498 = (0);
var G__67499 = (0);
seq__67409 = G__67496;
chunk__67411 = G__67497;
count__67412 = G__67498;
i__67413 = G__67499;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
