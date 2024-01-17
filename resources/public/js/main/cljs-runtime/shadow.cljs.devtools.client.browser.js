goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56427 = arguments.length;
var i__4731__auto___56428 = (0);
while(true){
if((i__4731__auto___56428 < len__4730__auto___56427)){
args__4736__auto__.push((arguments[i__4731__auto___56428]));

var G__56429 = (i__4731__auto___56428 + (1));
i__4731__auto___56428 = G__56429;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq56123){
var G__56124 = cljs.core.first(seq56123);
var seq56123__$1 = cljs.core.next(seq56123);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56124,seq56123__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5802__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5802__auto__)){
var s = temp__5802__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__56127){
var map__56128 = p__56127;
var map__56128__$1 = (((((!((map__56128 == null))))?(((((map__56128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56128):map__56128);
var src = map__56128__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56128__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56128__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__56131 = cljs.core.seq(sources);
var chunk__56133 = null;
var count__56134 = (0);
var i__56135 = (0);
while(true){
if((i__56135 < count__56134)){
var map__56142 = chunk__56133.cljs$core$IIndexed$_nth$arity$2(null,i__56135);
var map__56142__$1 = (((((!((map__56142 == null))))?(((((map__56142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56142):map__56142);
var src = map__56142__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56142__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56142__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56142__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56142__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e56144){var e_56435 = e56144;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_56435);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_56435.message)].join('')));
}

var G__56436 = seq__56131;
var G__56437 = chunk__56133;
var G__56438 = count__56134;
var G__56439 = (i__56135 + (1));
seq__56131 = G__56436;
chunk__56133 = G__56437;
count__56134 = G__56438;
i__56135 = G__56439;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56131);
if(temp__5804__auto__){
var seq__56131__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56131__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56131__$1);
var G__56440 = cljs.core.chunk_rest(seq__56131__$1);
var G__56441 = c__4550__auto__;
var G__56442 = cljs.core.count(c__4550__auto__);
var G__56443 = (0);
seq__56131 = G__56440;
chunk__56133 = G__56441;
count__56134 = G__56442;
i__56135 = G__56443;
continue;
} else {
var map__56145 = cljs.core.first(seq__56131__$1);
var map__56145__$1 = (((((!((map__56145 == null))))?(((((map__56145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56145):map__56145);
var src = map__56145__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56145__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56145__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56145__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56145__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e56147){var e_56444 = e56147;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_56444);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_56444.message)].join('')));
}

var G__56445 = cljs.core.next(seq__56131__$1);
var G__56446 = null;
var G__56447 = (0);
var G__56448 = (0);
seq__56131 = G__56445;
chunk__56133 = G__56446;
count__56134 = G__56447;
i__56135 = G__56448;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__56148 = cljs.core.seq(js_requires);
var chunk__56149 = null;
var count__56150 = (0);
var i__56151 = (0);
while(true){
if((i__56151 < count__56150)){
var js_ns = chunk__56149.cljs$core$IIndexed$_nth$arity$2(null,i__56151);
var require_str_56449 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_56449);


var G__56450 = seq__56148;
var G__56451 = chunk__56149;
var G__56452 = count__56150;
var G__56453 = (i__56151 + (1));
seq__56148 = G__56450;
chunk__56149 = G__56451;
count__56150 = G__56452;
i__56151 = G__56453;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56148);
if(temp__5804__auto__){
var seq__56148__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56148__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56148__$1);
var G__56455 = cljs.core.chunk_rest(seq__56148__$1);
var G__56456 = c__4550__auto__;
var G__56457 = cljs.core.count(c__4550__auto__);
var G__56458 = (0);
seq__56148 = G__56455;
chunk__56149 = G__56456;
count__56150 = G__56457;
i__56151 = G__56458;
continue;
} else {
var js_ns = cljs.core.first(seq__56148__$1);
var require_str_56459 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_56459);


var G__56460 = cljs.core.next(seq__56148__$1);
var G__56461 = null;
var G__56462 = (0);
var G__56463 = (0);
seq__56148 = G__56460;
chunk__56149 = G__56461;
count__56150 = G__56462;
i__56151 = G__56463;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__56153 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__56153) : callback.call(null,G__56153));
} else {
var G__56155 = shadow.cljs.devtools.client.env.files_url();
var G__56156 = ((function (G__56155){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__56155))
;
var G__56157 = "POST";
var G__56158 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__56159 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__56155,G__56156,G__56157,G__56158,G__56159);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__56161){
var map__56162 = p__56161;
var map__56162__$1 = (((((!((map__56162 == null))))?(((((map__56162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56162):map__56162);
var msg = map__56162__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56162__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56162__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__56164 = info;
var map__56164__$1 = (((((!((map__56164 == null))))?(((((map__56164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56164):map__56164);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56164__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56164__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__56164,map__56164__$1,sources,compiled,map__56162,map__56162__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56168(s__56169){
return (new cljs.core.LazySeq(null,((function (map__56164,map__56164__$1,sources,compiled,map__56162,map__56162__$1,msg,info,reload_info){
return (function (){
var s__56169__$1 = s__56169;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__56169__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__56176 = cljs.core.first(xs__6360__auto__);
var map__56176__$1 = (((((!((map__56176 == null))))?(((((map__56176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56176):map__56176);
var src = map__56176__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56176__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56176__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__56169__$1,map__56176,map__56176__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__56164,map__56164__$1,sources,compiled,map__56162,map__56162__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56168_$_iter__56170(s__56171){
return (new cljs.core.LazySeq(null,((function (s__56169__$1,map__56176,map__56176__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__56164,map__56164__$1,sources,compiled,map__56162,map__56162__$1,msg,info,reload_info){
return (function (){
var s__56171__$1 = s__56171;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__56171__$1);
if(temp__5804__auto____$1){
var s__56171__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56171__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__56171__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__56173 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__56172 = (0);
while(true){
if((i__56172 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__56172);
cljs.core.chunk_append(b__56173,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__56465 = (i__56172 + (1));
i__56172 = G__56465;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56173),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56168_$_iter__56170(cljs.core.chunk_rest(s__56171__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56173),null);
}
} else {
var warning = cljs.core.first(s__56171__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56168_$_iter__56170(cljs.core.rest(s__56171__$2)));
}
} else {
return null;
}
break;
}
});})(s__56169__$1,map__56176,map__56176__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__56164,map__56164__$1,sources,compiled,map__56162,map__56162__$1,msg,info,reload_info))
,null,null));
});})(s__56169__$1,map__56176,map__56176__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__56164,map__56164__$1,sources,compiled,map__56162,map__56162__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56168(cljs.core.rest(s__56169__$1)));
} else {
var G__56466 = cljs.core.rest(s__56169__$1);
s__56169__$1 = G__56466;
continue;
}
} else {
var G__56467 = cljs.core.rest(s__56169__$1);
s__56169__$1 = G__56467;
continue;
}
} else {
return null;
}
break;
}
});})(map__56164,map__56164__$1,sources,compiled,map__56162,map__56162__$1,msg,info,reload_info))
,null,null));
});})(map__56164,map__56164__$1,sources,compiled,map__56162,map__56162__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__56181_56469 = cljs.core.seq(warnings);
var chunk__56182_56470 = null;
var count__56183_56471 = (0);
var i__56184_56472 = (0);
while(true){
if((i__56184_56472 < count__56183_56471)){
var map__56195_56473 = chunk__56182_56470.cljs$core$IIndexed$_nth$arity$2(null,i__56184_56472);
var map__56195_56474__$1 = (((((!((map__56195_56473 == null))))?(((((map__56195_56473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56195_56473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56195_56473):map__56195_56473);
var w_56475 = map__56195_56474__$1;
var msg_56476__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56195_56474__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_56477 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56195_56474__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_56478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56195_56474__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_56479 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56195_56474__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_56479)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_56477),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_56478),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_56476__$1)].join(''));


var G__56481 = seq__56181_56469;
var G__56482 = chunk__56182_56470;
var G__56483 = count__56183_56471;
var G__56484 = (i__56184_56472 + (1));
seq__56181_56469 = G__56481;
chunk__56182_56470 = G__56482;
count__56183_56471 = G__56483;
i__56184_56472 = G__56484;
continue;
} else {
var temp__5804__auto___56485 = cljs.core.seq(seq__56181_56469);
if(temp__5804__auto___56485){
var seq__56181_56486__$1 = temp__5804__auto___56485;
if(cljs.core.chunked_seq_QMARK_(seq__56181_56486__$1)){
var c__4550__auto___56487 = cljs.core.chunk_first(seq__56181_56486__$1);
var G__56488 = cljs.core.chunk_rest(seq__56181_56486__$1);
var G__56489 = c__4550__auto___56487;
var G__56490 = cljs.core.count(c__4550__auto___56487);
var G__56491 = (0);
seq__56181_56469 = G__56488;
chunk__56182_56470 = G__56489;
count__56183_56471 = G__56490;
i__56184_56472 = G__56491;
continue;
} else {
var map__56198_56492 = cljs.core.first(seq__56181_56486__$1);
var map__56198_56493__$1 = (((((!((map__56198_56492 == null))))?(((((map__56198_56492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56198_56492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56198_56492):map__56198_56492);
var w_56494 = map__56198_56493__$1;
var msg_56495__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56198_56493__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_56496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56198_56493__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_56497 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56198_56493__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_56498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56198_56493__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_56498)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_56496),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_56497),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_56495__$1)].join(''));


var G__56503 = cljs.core.next(seq__56181_56486__$1);
var G__56504 = null;
var G__56505 = (0);
var G__56506 = (0);
seq__56181_56469 = G__56503;
chunk__56182_56470 = G__56504;
count__56183_56471 = G__56505;
i__56184_56472 = G__56506;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__56164,map__56164__$1,sources,compiled,warnings,map__56162,map__56162__$1,msg,info,reload_info){
return (function (p__56200){
var map__56202 = p__56200;
var map__56202__$1 = (((((!((map__56202 == null))))?(((((map__56202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56202):map__56202);
var src = map__56202__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56202__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56202__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__56164,map__56164__$1,sources,compiled,warnings,map__56162,map__56162__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__56164,map__56164__$1,sources,compiled,warnings,map__56162,map__56162__$1,msg,info,reload_info){
return (function (p__56209){
var map__56210 = p__56209;
var map__56210__$1 = (((((!((map__56210 == null))))?(((((map__56210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56210):map__56210);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56210__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__56164,map__56164__$1,sources,compiled,warnings,map__56162,map__56162__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__56164,map__56164__$1,sources,compiled,warnings,map__56162,map__56162__$1,msg,info,reload_info){
return (function (p__56214){
var map__56215 = p__56214;
var map__56215__$1 = (((((!((map__56215 == null))))?(((((map__56215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56215):map__56215);
var rc = map__56215__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56215__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__56164,map__56164__$1,sources,compiled,warnings,map__56162,map__56162__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__56164,map__56164__$1,sources,compiled,warnings,map__56162,map__56162__$1,msg,info,reload_info){
return (function (p1__56160_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__56160_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__56164,map__56164__$1,sources,compiled,warnings,map__56162,map__56162__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__56226){
var map__56227 = p__56226;
var map__56227__$1 = (((((!((map__56227 == null))))?(((((map__56227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56227):map__56227);
var msg = map__56227__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56227__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__56231 = cljs.core.seq(updates);
var chunk__56236 = null;
var count__56237 = (0);
var i__56238 = (0);
while(true){
if((i__56238 < count__56237)){
var path = chunk__56236.cljs$core$IIndexed$_nth$arity$2(null,i__56238);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__56301_56515 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__56304_56516 = null;
var count__56305_56517 = (0);
var i__56306_56518 = (0);
while(true){
if((i__56306_56518 < count__56305_56517)){
var node_56521 = chunk__56304_56516.cljs$core$IIndexed$_nth$arity$2(null,i__56306_56518);
var path_match_56522 = shadow.cljs.devtools.client.browser.match_paths(node_56521.getAttribute("href"),path);
if(cljs.core.truth_(path_match_56522)){
var new_link_56523 = (function (){var G__56318 = node_56521.cloneNode(true);
G__56318.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_56522),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56318;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_56522], 0));

goog.dom.insertSiblingAfter(new_link_56523,node_56521);

goog.dom.removeNode(node_56521);


var G__56524 = seq__56301_56515;
var G__56525 = chunk__56304_56516;
var G__56526 = count__56305_56517;
var G__56527 = (i__56306_56518 + (1));
seq__56301_56515 = G__56524;
chunk__56304_56516 = G__56525;
count__56305_56517 = G__56526;
i__56306_56518 = G__56527;
continue;
} else {
var G__56530 = seq__56301_56515;
var G__56531 = chunk__56304_56516;
var G__56532 = count__56305_56517;
var G__56533 = (i__56306_56518 + (1));
seq__56301_56515 = G__56530;
chunk__56304_56516 = G__56531;
count__56305_56517 = G__56532;
i__56306_56518 = G__56533;
continue;
}
} else {
var temp__5804__auto___56534 = cljs.core.seq(seq__56301_56515);
if(temp__5804__auto___56534){
var seq__56301_56535__$1 = temp__5804__auto___56534;
if(cljs.core.chunked_seq_QMARK_(seq__56301_56535__$1)){
var c__4550__auto___56536 = cljs.core.chunk_first(seq__56301_56535__$1);
var G__56537 = cljs.core.chunk_rest(seq__56301_56535__$1);
var G__56538 = c__4550__auto___56536;
var G__56539 = cljs.core.count(c__4550__auto___56536);
var G__56540 = (0);
seq__56301_56515 = G__56537;
chunk__56304_56516 = G__56538;
count__56305_56517 = G__56539;
i__56306_56518 = G__56540;
continue;
} else {
var node_56541 = cljs.core.first(seq__56301_56535__$1);
var path_match_56542 = shadow.cljs.devtools.client.browser.match_paths(node_56541.getAttribute("href"),path);
if(cljs.core.truth_(path_match_56542)){
var new_link_56545 = (function (){var G__56322 = node_56541.cloneNode(true);
G__56322.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_56542),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56322;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_56542], 0));

goog.dom.insertSiblingAfter(new_link_56545,node_56541);

goog.dom.removeNode(node_56541);


var G__56546 = cljs.core.next(seq__56301_56535__$1);
var G__56547 = null;
var G__56548 = (0);
var G__56549 = (0);
seq__56301_56515 = G__56546;
chunk__56304_56516 = G__56547;
count__56305_56517 = G__56548;
i__56306_56518 = G__56549;
continue;
} else {
var G__56550 = cljs.core.next(seq__56301_56535__$1);
var G__56551 = null;
var G__56552 = (0);
var G__56553 = (0);
seq__56301_56515 = G__56550;
chunk__56304_56516 = G__56551;
count__56305_56517 = G__56552;
i__56306_56518 = G__56553;
continue;
}
}
} else {
}
}
break;
}


var G__56554 = seq__56231;
var G__56555 = chunk__56236;
var G__56556 = count__56237;
var G__56557 = (i__56238 + (1));
seq__56231 = G__56554;
chunk__56236 = G__56555;
count__56237 = G__56556;
i__56238 = G__56557;
continue;
} else {
var G__56560 = seq__56231;
var G__56561 = chunk__56236;
var G__56562 = count__56237;
var G__56563 = (i__56238 + (1));
seq__56231 = G__56560;
chunk__56236 = G__56561;
count__56237 = G__56562;
i__56238 = G__56563;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56231);
if(temp__5804__auto__){
var seq__56231__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56231__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56231__$1);
var G__56564 = cljs.core.chunk_rest(seq__56231__$1);
var G__56565 = c__4550__auto__;
var G__56566 = cljs.core.count(c__4550__auto__);
var G__56567 = (0);
seq__56231 = G__56564;
chunk__56236 = G__56565;
count__56237 = G__56566;
i__56238 = G__56567;
continue;
} else {
var path = cljs.core.first(seq__56231__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__56327_56568 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__56330_56569 = null;
var count__56331_56570 = (0);
var i__56332_56571 = (0);
while(true){
if((i__56332_56571 < count__56331_56570)){
var node_56574 = chunk__56330_56569.cljs$core$IIndexed$_nth$arity$2(null,i__56332_56571);
var path_match_56575 = shadow.cljs.devtools.client.browser.match_paths(node_56574.getAttribute("href"),path);
if(cljs.core.truth_(path_match_56575)){
var new_link_56576 = (function (){var G__56353 = node_56574.cloneNode(true);
G__56353.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_56575),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56353;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_56575], 0));

goog.dom.insertSiblingAfter(new_link_56576,node_56574);

goog.dom.removeNode(node_56574);


var G__56577 = seq__56327_56568;
var G__56578 = chunk__56330_56569;
var G__56579 = count__56331_56570;
var G__56580 = (i__56332_56571 + (1));
seq__56327_56568 = G__56577;
chunk__56330_56569 = G__56578;
count__56331_56570 = G__56579;
i__56332_56571 = G__56580;
continue;
} else {
var G__56581 = seq__56327_56568;
var G__56582 = chunk__56330_56569;
var G__56583 = count__56331_56570;
var G__56584 = (i__56332_56571 + (1));
seq__56327_56568 = G__56581;
chunk__56330_56569 = G__56582;
count__56331_56570 = G__56583;
i__56332_56571 = G__56584;
continue;
}
} else {
var temp__5804__auto___56587__$1 = cljs.core.seq(seq__56327_56568);
if(temp__5804__auto___56587__$1){
var seq__56327_56588__$1 = temp__5804__auto___56587__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56327_56588__$1)){
var c__4550__auto___56589 = cljs.core.chunk_first(seq__56327_56588__$1);
var G__56590 = cljs.core.chunk_rest(seq__56327_56588__$1);
var G__56591 = c__4550__auto___56589;
var G__56592 = cljs.core.count(c__4550__auto___56589);
var G__56593 = (0);
seq__56327_56568 = G__56590;
chunk__56330_56569 = G__56591;
count__56331_56570 = G__56592;
i__56332_56571 = G__56593;
continue;
} else {
var node_56594 = cljs.core.first(seq__56327_56588__$1);
var path_match_56595 = shadow.cljs.devtools.client.browser.match_paths(node_56594.getAttribute("href"),path);
if(cljs.core.truth_(path_match_56595)){
var new_link_56596 = (function (){var G__56355 = node_56594.cloneNode(true);
G__56355.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_56595),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56355;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_56595], 0));

goog.dom.insertSiblingAfter(new_link_56596,node_56594);

goog.dom.removeNode(node_56594);


var G__56599 = cljs.core.next(seq__56327_56588__$1);
var G__56600 = null;
var G__56601 = (0);
var G__56602 = (0);
seq__56327_56568 = G__56599;
chunk__56330_56569 = G__56600;
count__56331_56570 = G__56601;
i__56332_56571 = G__56602;
continue;
} else {
var G__56603 = cljs.core.next(seq__56327_56588__$1);
var G__56604 = null;
var G__56605 = (0);
var G__56606 = (0);
seq__56327_56568 = G__56603;
chunk__56330_56569 = G__56604;
count__56331_56570 = G__56605;
i__56332_56571 = G__56606;
continue;
}
}
} else {
}
}
break;
}


var G__56607 = cljs.core.next(seq__56231__$1);
var G__56608 = null;
var G__56609 = (0);
var G__56610 = (0);
seq__56231 = G__56607;
chunk__56236 = G__56608;
count__56237 = G__56609;
i__56238 = G__56610;
continue;
} else {
var G__56611 = cljs.core.next(seq__56231__$1);
var G__56612 = null;
var G__56613 = (0);
var G__56614 = (0);
seq__56231 = G__56611;
chunk__56236 = G__56612;
count__56237 = G__56613;
i__56238 = G__56614;
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
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
return (0,eval)(js);;
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__56362){
var map__56363 = p__56362;
var map__56363__$1 = (((((!((map__56363 == null))))?(((((map__56363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56363):map__56363);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56363__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56363__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__56363,map__56363__$1,id,js){
return (function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
});})(map__56363,map__56363__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__56370,done){
var map__56371 = p__56370;
var map__56371__$1 = (((((!((map__56371 == null))))?(((((map__56371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56371):map__56371);
var msg = map__56371__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56371__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56371__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56371__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56371__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__56371,map__56371__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__56374){
var map__56376 = p__56374;
var map__56376__$1 = (((((!((map__56376 == null))))?(((((map__56376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56376):map__56376);
var src = map__56376__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56376__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__56371,map__56371__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__56371,map__56371__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e56379){var e = e56379;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}});})(sources_to_load,map__56371,map__56371__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__56384,done){
var map__56385 = p__56384;
var map__56385__$1 = (((((!((map__56385 == null))))?(((((map__56385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56385):map__56385);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56385__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56385__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__56385,map__56385__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(map__56385,map__56385__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__56388){
var map__56390 = p__56388;
var map__56390__$1 = (((((!((map__56390 == null))))?(((((map__56390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56390):map__56390);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56390__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56390__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__56395,done){
var map__56396 = p__56395;
var map__56396__$1 = (((((!((map__56396 == null))))?(((((map__56396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56396):map__56396);
var msg = map__56396__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56396__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__56402_56629 = type;
var G__56402_56630__$1 = (((G__56402_56629 instanceof cljs.core.Keyword))?G__56402_56629.fqn:null);
switch (G__56402_56630__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__56408 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__56409 = ((function (G__56408){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__56408))
;
var G__56410 = "POST";
var G__56411 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__56412 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__56408,G__56409,G__56410,G__56411,G__56412);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5804__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5804__auto__)){
var s = temp__5804__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e56420){var e = e56420;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5804__auto___56632 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5804__auto___56632)){
var s_56633 = temp__5804__auto___56632;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_56633.onclose = ((function (s_56633,temp__5804__auto___56632){
return (function (e){
return null;
});})(s_56633,temp__5804__auto___56632))
;

s_56633.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5804__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5804__auto__)){
var s = temp__5804__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
