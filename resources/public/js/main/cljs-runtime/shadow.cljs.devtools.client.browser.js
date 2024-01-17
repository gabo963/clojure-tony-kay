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
var len__4730__auto___56555 = arguments.length;
var i__4731__auto___56556 = (0);
while(true){
if((i__4731__auto___56556 < len__4730__auto___56555)){
args__4736__auto__.push((arguments[i__4731__auto___56556]));

var G__56557 = (i__4731__auto___56556 + (1));
i__4731__auto___56556 = G__56557;
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
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq56285){
var G__56286 = cljs.core.first(seq56285);
var seq56285__$1 = cljs.core.next(seq56285);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56286,seq56285__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__56289){
var map__56290 = p__56289;
var map__56290__$1 = (((((!((map__56290 == null))))?(((((map__56290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56290):map__56290);
var src = map__56290__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56290__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56290__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__56297 = cljs.core.seq(sources);
var chunk__56298 = null;
var count__56299 = (0);
var i__56300 = (0);
while(true){
if((i__56300 < count__56299)){
var map__56311 = chunk__56298.cljs$core$IIndexed$_nth$arity$2(null,i__56300);
var map__56311__$1 = (((((!((map__56311 == null))))?(((((map__56311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56311):map__56311);
var src = map__56311__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56311__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56311__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56311__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56311__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e56313){var e_56565 = e56313;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_56565);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_56565.message)].join('')));
}

var G__56570 = seq__56297;
var G__56571 = chunk__56298;
var G__56572 = count__56299;
var G__56573 = (i__56300 + (1));
seq__56297 = G__56570;
chunk__56298 = G__56571;
count__56299 = G__56572;
i__56300 = G__56573;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56297);
if(temp__5804__auto__){
var seq__56297__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56297__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56297__$1);
var G__56578 = cljs.core.chunk_rest(seq__56297__$1);
var G__56579 = c__4550__auto__;
var G__56580 = cljs.core.count(c__4550__auto__);
var G__56581 = (0);
seq__56297 = G__56578;
chunk__56298 = G__56579;
count__56299 = G__56580;
i__56300 = G__56581;
continue;
} else {
var map__56316 = cljs.core.first(seq__56297__$1);
var map__56316__$1 = (((((!((map__56316 == null))))?(((((map__56316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56316):map__56316);
var src = map__56316__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56316__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56316__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56316__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56316__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e56320){var e_56584 = e56320;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_56584);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_56584.message)].join('')));
}

var G__56587 = cljs.core.next(seq__56297__$1);
var G__56588 = null;
var G__56589 = (0);
var G__56590 = (0);
seq__56297 = G__56587;
chunk__56298 = G__56588;
count__56299 = G__56589;
i__56300 = G__56590;
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
var seq__56327 = cljs.core.seq(js_requires);
var chunk__56328 = null;
var count__56329 = (0);
var i__56330 = (0);
while(true){
if((i__56330 < count__56329)){
var js_ns = chunk__56328.cljs$core$IIndexed$_nth$arity$2(null,i__56330);
var require_str_56593 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_56593);


var G__56594 = seq__56327;
var G__56595 = chunk__56328;
var G__56596 = count__56329;
var G__56597 = (i__56330 + (1));
seq__56327 = G__56594;
chunk__56328 = G__56595;
count__56329 = G__56596;
i__56330 = G__56597;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56327);
if(temp__5804__auto__){
var seq__56327__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56327__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56327__$1);
var G__56600 = cljs.core.chunk_rest(seq__56327__$1);
var G__56601 = c__4550__auto__;
var G__56602 = cljs.core.count(c__4550__auto__);
var G__56603 = (0);
seq__56327 = G__56600;
chunk__56328 = G__56601;
count__56329 = G__56602;
i__56330 = G__56603;
continue;
} else {
var js_ns = cljs.core.first(seq__56327__$1);
var require_str_56604 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_56604);


var G__56605 = cljs.core.next(seq__56327__$1);
var G__56606 = null;
var G__56607 = (0);
var G__56608 = (0);
seq__56327 = G__56605;
chunk__56328 = G__56606;
count__56329 = G__56607;
i__56330 = G__56608;
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
var G__56335 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__56335) : callback.call(null,G__56335));
} else {
var G__56336 = shadow.cljs.devtools.client.env.files_url();
var G__56337 = ((function (G__56336){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__56336))
;
var G__56338 = "POST";
var G__56339 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__56340 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__56336,G__56337,G__56338,G__56339,G__56340);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__56348){
var map__56349 = p__56348;
var map__56349__$1 = (((((!((map__56349 == null))))?(((((map__56349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56349):map__56349);
var msg = map__56349__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56349__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56349__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__56353 = info;
var map__56353__$1 = (((((!((map__56353 == null))))?(((((map__56353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56353):map__56353);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56353__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56353__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__56353,map__56353__$1,sources,compiled,map__56349,map__56349__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56355(s__56356){
return (new cljs.core.LazySeq(null,((function (map__56353,map__56353__$1,sources,compiled,map__56349,map__56349__$1,msg,info,reload_info){
return (function (){
var s__56356__$1 = s__56356;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__56356__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__56363 = cljs.core.first(xs__6360__auto__);
var map__56363__$1 = (((((!((map__56363 == null))))?(((((map__56363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56363):map__56363);
var src = map__56363__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56363__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56363__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__56356__$1,map__56363,map__56363__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__56353,map__56353__$1,sources,compiled,map__56349,map__56349__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56355_$_iter__56357(s__56358){
return (new cljs.core.LazySeq(null,((function (s__56356__$1,map__56363,map__56363__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__56353,map__56353__$1,sources,compiled,map__56349,map__56349__$1,msg,info,reload_info){
return (function (){
var s__56358__$1 = s__56358;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__56358__$1);
if(temp__5804__auto____$1){
var s__56358__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56358__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__56358__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__56360 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__56359 = (0);
while(true){
if((i__56359 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__56359);
cljs.core.chunk_append(b__56360,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__56635 = (i__56359 + (1));
i__56359 = G__56635;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56360),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56355_$_iter__56357(cljs.core.chunk_rest(s__56358__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56360),null);
}
} else {
var warning = cljs.core.first(s__56358__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56355_$_iter__56357(cljs.core.rest(s__56358__$2)));
}
} else {
return null;
}
break;
}
});})(s__56356__$1,map__56363,map__56363__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__56353,map__56353__$1,sources,compiled,map__56349,map__56349__$1,msg,info,reload_info))
,null,null));
});})(s__56356__$1,map__56363,map__56363__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__56353,map__56353__$1,sources,compiled,map__56349,map__56349__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__56355(cljs.core.rest(s__56356__$1)));
} else {
var G__56639 = cljs.core.rest(s__56356__$1);
s__56356__$1 = G__56639;
continue;
}
} else {
var G__56640 = cljs.core.rest(s__56356__$1);
s__56356__$1 = G__56640;
continue;
}
} else {
return null;
}
break;
}
});})(map__56353,map__56353__$1,sources,compiled,map__56349,map__56349__$1,msg,info,reload_info))
,null,null));
});})(map__56353,map__56353__$1,sources,compiled,map__56349,map__56349__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__56369_56646 = cljs.core.seq(warnings);
var chunk__56370_56647 = null;
var count__56371_56648 = (0);
var i__56372_56649 = (0);
while(true){
if((i__56372_56649 < count__56371_56648)){
var map__56379_56654 = chunk__56370_56647.cljs$core$IIndexed$_nth$arity$2(null,i__56372_56649);
var map__56379_56655__$1 = (((((!((map__56379_56654 == null))))?(((((map__56379_56654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56379_56654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56379_56654):map__56379_56654);
var w_56656 = map__56379_56655__$1;
var msg_56657__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56379_56655__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_56658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56379_56655__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_56659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56379_56655__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_56660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56379_56655__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_56660)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_56658),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_56659),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_56657__$1)].join(''));


var G__56666 = seq__56369_56646;
var G__56667 = chunk__56370_56647;
var G__56668 = count__56371_56648;
var G__56669 = (i__56372_56649 + (1));
seq__56369_56646 = G__56666;
chunk__56370_56647 = G__56667;
count__56371_56648 = G__56668;
i__56372_56649 = G__56669;
continue;
} else {
var temp__5804__auto___56670 = cljs.core.seq(seq__56369_56646);
if(temp__5804__auto___56670){
var seq__56369_56671__$1 = temp__5804__auto___56670;
if(cljs.core.chunked_seq_QMARK_(seq__56369_56671__$1)){
var c__4550__auto___56676 = cljs.core.chunk_first(seq__56369_56671__$1);
var G__56677 = cljs.core.chunk_rest(seq__56369_56671__$1);
var G__56678 = c__4550__auto___56676;
var G__56679 = cljs.core.count(c__4550__auto___56676);
var G__56680 = (0);
seq__56369_56646 = G__56677;
chunk__56370_56647 = G__56678;
count__56371_56648 = G__56679;
i__56372_56649 = G__56680;
continue;
} else {
var map__56381_56682 = cljs.core.first(seq__56369_56671__$1);
var map__56381_56683__$1 = (((((!((map__56381_56682 == null))))?(((((map__56381_56682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56381_56682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56381_56682):map__56381_56682);
var w_56684 = map__56381_56683__$1;
var msg_56685__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56381_56683__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_56686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56381_56683__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_56687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56381_56683__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_56688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56381_56683__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_56688)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_56686),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_56687),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_56685__$1)].join(''));


var G__56694 = cljs.core.next(seq__56369_56671__$1);
var G__56695 = null;
var G__56696 = (0);
var G__56697 = (0);
seq__56369_56646 = G__56694;
chunk__56370_56647 = G__56695;
count__56371_56648 = G__56696;
i__56372_56649 = G__56697;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__56353,map__56353__$1,sources,compiled,warnings,map__56349,map__56349__$1,msg,info,reload_info){
return (function (p__56385){
var map__56386 = p__56385;
var map__56386__$1 = (((((!((map__56386 == null))))?(((((map__56386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56386):map__56386);
var src = map__56386__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56386__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56386__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__56353,map__56353__$1,sources,compiled,warnings,map__56349,map__56349__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__56353,map__56353__$1,sources,compiled,warnings,map__56349,map__56349__$1,msg,info,reload_info){
return (function (p__56388){
var map__56389 = p__56388;
var map__56389__$1 = (((((!((map__56389 == null))))?(((((map__56389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56389):map__56389);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56389__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__56353,map__56353__$1,sources,compiled,warnings,map__56349,map__56349__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__56353,map__56353__$1,sources,compiled,warnings,map__56349,map__56349__$1,msg,info,reload_info){
return (function (p__56391){
var map__56392 = p__56391;
var map__56392__$1 = (((((!((map__56392 == null))))?(((((map__56392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56392):map__56392);
var rc = map__56392__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56392__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__56353,map__56353__$1,sources,compiled,warnings,map__56349,map__56349__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__56353,map__56353__$1,sources,compiled,warnings,map__56349,map__56349__$1,msg,info,reload_info){
return (function (p1__56347_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__56347_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__56353,map__56353__$1,sources,compiled,warnings,map__56349,map__56349__$1,msg,info,reload_info))
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__56396){
var map__56397 = p__56396;
var map__56397__$1 = (((((!((map__56397 == null))))?(((((map__56397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56397):map__56397);
var msg = map__56397__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56397__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__56401 = cljs.core.seq(updates);
var chunk__56403 = null;
var count__56404 = (0);
var i__56405 = (0);
while(true){
if((i__56405 < count__56404)){
var path = chunk__56403.cljs$core$IIndexed$_nth$arity$2(null,i__56405);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__56435_56744 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__56438_56745 = null;
var count__56439_56746 = (0);
var i__56440_56747 = (0);
while(true){
if((i__56440_56747 < count__56439_56746)){
var node_56748 = chunk__56438_56745.cljs$core$IIndexed$_nth$arity$2(null,i__56440_56747);
var path_match_56749 = shadow.cljs.devtools.client.browser.match_paths(node_56748.getAttribute("href"),path);
if(cljs.core.truth_(path_match_56749)){
var new_link_56750 = (function (){var G__56445 = node_56748.cloneNode(true);
G__56445.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_56749),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56445;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_56749], 0));

goog.dom.insertSiblingAfter(new_link_56750,node_56748);

goog.dom.removeNode(node_56748);


var G__56751 = seq__56435_56744;
var G__56752 = chunk__56438_56745;
var G__56753 = count__56439_56746;
var G__56754 = (i__56440_56747 + (1));
seq__56435_56744 = G__56751;
chunk__56438_56745 = G__56752;
count__56439_56746 = G__56753;
i__56440_56747 = G__56754;
continue;
} else {
var G__56756 = seq__56435_56744;
var G__56757 = chunk__56438_56745;
var G__56758 = count__56439_56746;
var G__56759 = (i__56440_56747 + (1));
seq__56435_56744 = G__56756;
chunk__56438_56745 = G__56757;
count__56439_56746 = G__56758;
i__56440_56747 = G__56759;
continue;
}
} else {
var temp__5804__auto___56761 = cljs.core.seq(seq__56435_56744);
if(temp__5804__auto___56761){
var seq__56435_56763__$1 = temp__5804__auto___56761;
if(cljs.core.chunked_seq_QMARK_(seq__56435_56763__$1)){
var c__4550__auto___56764 = cljs.core.chunk_first(seq__56435_56763__$1);
var G__56766 = cljs.core.chunk_rest(seq__56435_56763__$1);
var G__56767 = c__4550__auto___56764;
var G__56768 = cljs.core.count(c__4550__auto___56764);
var G__56769 = (0);
seq__56435_56744 = G__56766;
chunk__56438_56745 = G__56767;
count__56439_56746 = G__56768;
i__56440_56747 = G__56769;
continue;
} else {
var node_56770 = cljs.core.first(seq__56435_56763__$1);
var path_match_56771 = shadow.cljs.devtools.client.browser.match_paths(node_56770.getAttribute("href"),path);
if(cljs.core.truth_(path_match_56771)){
var new_link_56772 = (function (){var G__56448 = node_56770.cloneNode(true);
G__56448.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_56771),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56448;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_56771], 0));

goog.dom.insertSiblingAfter(new_link_56772,node_56770);

goog.dom.removeNode(node_56770);


var G__56773 = cljs.core.next(seq__56435_56763__$1);
var G__56774 = null;
var G__56775 = (0);
var G__56776 = (0);
seq__56435_56744 = G__56773;
chunk__56438_56745 = G__56774;
count__56439_56746 = G__56775;
i__56440_56747 = G__56776;
continue;
} else {
var G__56777 = cljs.core.next(seq__56435_56763__$1);
var G__56778 = null;
var G__56779 = (0);
var G__56780 = (0);
seq__56435_56744 = G__56777;
chunk__56438_56745 = G__56778;
count__56439_56746 = G__56779;
i__56440_56747 = G__56780;
continue;
}
}
} else {
}
}
break;
}


var G__56781 = seq__56401;
var G__56782 = chunk__56403;
var G__56783 = count__56404;
var G__56784 = (i__56405 + (1));
seq__56401 = G__56781;
chunk__56403 = G__56782;
count__56404 = G__56783;
i__56405 = G__56784;
continue;
} else {
var G__56785 = seq__56401;
var G__56786 = chunk__56403;
var G__56787 = count__56404;
var G__56788 = (i__56405 + (1));
seq__56401 = G__56785;
chunk__56403 = G__56786;
count__56404 = G__56787;
i__56405 = G__56788;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56401);
if(temp__5804__auto__){
var seq__56401__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56401__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56401__$1);
var G__56789 = cljs.core.chunk_rest(seq__56401__$1);
var G__56790 = c__4550__auto__;
var G__56791 = cljs.core.count(c__4550__auto__);
var G__56792 = (0);
seq__56401 = G__56789;
chunk__56403 = G__56790;
count__56404 = G__56791;
i__56405 = G__56792;
continue;
} else {
var path = cljs.core.first(seq__56401__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__56449_56795 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__56452_56796 = null;
var count__56453_56797 = (0);
var i__56454_56798 = (0);
while(true){
if((i__56454_56798 < count__56453_56797)){
var node_56799 = chunk__56452_56796.cljs$core$IIndexed$_nth$arity$2(null,i__56454_56798);
var path_match_56800 = shadow.cljs.devtools.client.browser.match_paths(node_56799.getAttribute("href"),path);
if(cljs.core.truth_(path_match_56800)){
var new_link_56801 = (function (){var G__56462 = node_56799.cloneNode(true);
G__56462.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_56800),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56462;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_56800], 0));

goog.dom.insertSiblingAfter(new_link_56801,node_56799);

goog.dom.removeNode(node_56799);


var G__56802 = seq__56449_56795;
var G__56803 = chunk__56452_56796;
var G__56804 = count__56453_56797;
var G__56805 = (i__56454_56798 + (1));
seq__56449_56795 = G__56802;
chunk__56452_56796 = G__56803;
count__56453_56797 = G__56804;
i__56454_56798 = G__56805;
continue;
} else {
var G__56806 = seq__56449_56795;
var G__56807 = chunk__56452_56796;
var G__56808 = count__56453_56797;
var G__56809 = (i__56454_56798 + (1));
seq__56449_56795 = G__56806;
chunk__56452_56796 = G__56807;
count__56453_56797 = G__56808;
i__56454_56798 = G__56809;
continue;
}
} else {
var temp__5804__auto___56810__$1 = cljs.core.seq(seq__56449_56795);
if(temp__5804__auto___56810__$1){
var seq__56449_56811__$1 = temp__5804__auto___56810__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56449_56811__$1)){
var c__4550__auto___56812 = cljs.core.chunk_first(seq__56449_56811__$1);
var G__56813 = cljs.core.chunk_rest(seq__56449_56811__$1);
var G__56814 = c__4550__auto___56812;
var G__56815 = cljs.core.count(c__4550__auto___56812);
var G__56816 = (0);
seq__56449_56795 = G__56813;
chunk__56452_56796 = G__56814;
count__56453_56797 = G__56815;
i__56454_56798 = G__56816;
continue;
} else {
var node_56817 = cljs.core.first(seq__56449_56811__$1);
var path_match_56819 = shadow.cljs.devtools.client.browser.match_paths(node_56817.getAttribute("href"),path);
if(cljs.core.truth_(path_match_56819)){
var new_link_56821 = (function (){var G__56466 = node_56817.cloneNode(true);
G__56466.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_56819),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__56466;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_56819], 0));

goog.dom.insertSiblingAfter(new_link_56821,node_56817);

goog.dom.removeNode(node_56817);


var G__56825 = cljs.core.next(seq__56449_56811__$1);
var G__56826 = null;
var G__56827 = (0);
var G__56828 = (0);
seq__56449_56795 = G__56825;
chunk__56452_56796 = G__56826;
count__56453_56797 = G__56827;
i__56454_56798 = G__56828;
continue;
} else {
var G__56829 = cljs.core.next(seq__56449_56811__$1);
var G__56830 = null;
var G__56831 = (0);
var G__56832 = (0);
seq__56449_56795 = G__56829;
chunk__56452_56796 = G__56830;
count__56453_56797 = G__56831;
i__56454_56798 = G__56832;
continue;
}
}
} else {
}
}
break;
}


var G__56833 = cljs.core.next(seq__56401__$1);
var G__56834 = null;
var G__56835 = (0);
var G__56836 = (0);
seq__56401 = G__56833;
chunk__56403 = G__56834;
count__56404 = G__56835;
i__56405 = G__56836;
continue;
} else {
var G__56837 = cljs.core.next(seq__56401__$1);
var G__56838 = null;
var G__56839 = (0);
var G__56840 = (0);
seq__56401 = G__56837;
chunk__56403 = G__56838;
count__56404 = G__56839;
i__56405 = G__56840;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__56473){
var map__56474 = p__56473;
var map__56474__$1 = (((((!((map__56474 == null))))?(((((map__56474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56474):map__56474);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56474__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56474__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__56474,map__56474__$1,id,js){
return (function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
});})(map__56474,map__56474__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__56481,done){
var map__56482 = p__56481;
var map__56482__$1 = (((((!((map__56482 == null))))?(((((map__56482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56482):map__56482);
var msg = map__56482__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56482__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56482__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56482__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56482__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__56482,map__56482__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__56491){
var map__56492 = p__56491;
var map__56492__$1 = (((((!((map__56492 == null))))?(((((map__56492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56492):map__56492);
var src = map__56492__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56492__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__56482,map__56482__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__56482,map__56482__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e56497){var e = e56497;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}});})(sources_to_load,map__56482,map__56482__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__56498,done){
var map__56499 = p__56498;
var map__56499__$1 = (((((!((map__56499 == null))))?(((((map__56499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56499):map__56499);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56499__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56499__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__56499,map__56499__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(map__56499,map__56499__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__56501){
var map__56502 = p__56501;
var map__56502__$1 = (((((!((map__56502 == null))))?(((((map__56502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56502):map__56502);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56502__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56502__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__56505,done){
var map__56506 = p__56505;
var map__56506__$1 = (((((!((map__56506 == null))))?(((((map__56506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56506):map__56506);
var msg = map__56506__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56506__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__56510_56862 = type;
var G__56510_56863__$1 = (((G__56510_56862 instanceof cljs.core.Keyword))?G__56510_56862.fqn:null);
switch (G__56510_56863__$1) {
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
var G__56516 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__56517 = ((function (G__56516){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__56516))
;
var G__56518 = "POST";
var G__56519 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__56520 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__56516,G__56517,G__56518,G__56519,G__56520);
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
}catch (e56528){var e = e56528;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5804__auto___56873 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5804__auto___56873)){
var s_56874 = temp__5804__auto___56873;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_56874.onclose = ((function (s_56874,temp__5804__auto___56873){
return (function (e){
return null;
});})(s_56874,temp__5804__auto___56873))
;

s_56874.close();

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
