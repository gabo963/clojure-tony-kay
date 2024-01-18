goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69321 = arguments.length;
var i__5770__auto___69322 = (0);
while(true){
if((i__5770__auto___69322 < len__5769__auto___69321)){
args__5775__auto__.push((arguments[i__5770__auto___69322]));

var G__69323 = (i__5770__auto___69322 + (1));
i__5770__auto___69322 = G__69323;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq69041){
var G__69042 = cljs.core.first(seq69041);
var seq69041__$1 = cljs.core.next(seq69041);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69042,seq69041__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__69043 = cljs.core.seq(sources);
var chunk__69044 = null;
var count__69045 = (0);
var i__69046 = (0);
while(true){
if((i__69046 < count__69045)){
var map__69051 = chunk__69044.cljs$core$IIndexed$_nth$arity$2(null,i__69046);
var map__69051__$1 = cljs.core.__destructure_map(map__69051);
var src = map__69051__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69051__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69051__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69051__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69051__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e69052){var e_69324 = e69052;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_69324);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_69324.message)].join('')));
}

var G__69325 = seq__69043;
var G__69326 = chunk__69044;
var G__69327 = count__69045;
var G__69328 = (i__69046 + (1));
seq__69043 = G__69325;
chunk__69044 = G__69326;
count__69045 = G__69327;
i__69046 = G__69328;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__69043);
if(temp__5804__auto__){
var seq__69043__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69043__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__69043__$1);
var G__69329 = cljs.core.chunk_rest(seq__69043__$1);
var G__69330 = c__5568__auto__;
var G__69331 = cljs.core.count(c__5568__auto__);
var G__69332 = (0);
seq__69043 = G__69329;
chunk__69044 = G__69330;
count__69045 = G__69331;
i__69046 = G__69332;
continue;
} else {
var map__69053 = cljs.core.first(seq__69043__$1);
var map__69053__$1 = cljs.core.__destructure_map(map__69053);
var src = map__69053__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69053__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69053__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69053__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69053__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e69054){var e_69333 = e69054;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_69333);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_69333.message)].join('')));
}

var G__69334 = cljs.core.next(seq__69043__$1);
var G__69335 = null;
var G__69336 = (0);
var G__69337 = (0);
seq__69043 = G__69334;
chunk__69044 = G__69335;
count__69045 = G__69336;
i__69046 = G__69337;
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
return null;
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
var seq__69055 = cljs.core.seq(js_requires);
var chunk__69056 = null;
var count__69057 = (0);
var i__69058 = (0);
while(true){
if((i__69058 < count__69057)){
var js_ns = chunk__69056.cljs$core$IIndexed$_nth$arity$2(null,i__69058);
var require_str_69338 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_69338);


var G__69339 = seq__69055;
var G__69340 = chunk__69056;
var G__69341 = count__69057;
var G__69342 = (i__69058 + (1));
seq__69055 = G__69339;
chunk__69056 = G__69340;
count__69057 = G__69341;
i__69058 = G__69342;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__69055);
if(temp__5804__auto__){
var seq__69055__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69055__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__69055__$1);
var G__69343 = cljs.core.chunk_rest(seq__69055__$1);
var G__69344 = c__5568__auto__;
var G__69345 = cljs.core.count(c__5568__auto__);
var G__69346 = (0);
seq__69055 = G__69343;
chunk__69056 = G__69344;
count__69057 = G__69345;
i__69058 = G__69346;
continue;
} else {
var js_ns = cljs.core.first(seq__69055__$1);
var require_str_69347 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_69347);


var G__69348 = cljs.core.next(seq__69055__$1);
var G__69349 = null;
var G__69350 = (0);
var G__69351 = (0);
seq__69055 = G__69348;
chunk__69056 = G__69349;
count__69057 = G__69350;
i__69058 = G__69351;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__69060){
var map__69061 = p__69060;
var map__69061__$1 = cljs.core.__destructure_map(map__69061);
var msg = map__69061__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69061__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69061__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__69062(s__69063){
return (new cljs.core.LazySeq(null,(function (){
var s__69063__$1 = s__69063;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__69063__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__69068 = cljs.core.first(xs__6360__auto__);
var map__69068__$1 = cljs.core.__destructure_map(map__69068);
var src = map__69068__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69068__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69068__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__69063__$1,map__69068,map__69068__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__69061,map__69061__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__69062_$_iter__69064(s__69065){
return (new cljs.core.LazySeq(null,((function (s__69063__$1,map__69068,map__69068__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__69061,map__69061__$1,msg,info,reload_info){
return (function (){
var s__69065__$1 = s__69065;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__69065__$1);
if(temp__5804__auto____$1){
var s__69065__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__69065__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__69065__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__69067 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__69066 = (0);
while(true){
if((i__69066 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__69066);
cljs.core.chunk_append(b__69067,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__69352 = (i__69066 + (1));
i__69066 = G__69352;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69067),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__69062_$_iter__69064(cljs.core.chunk_rest(s__69065__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69067),null);
}
} else {
var warning = cljs.core.first(s__69065__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__69062_$_iter__69064(cljs.core.rest(s__69065__$2)));
}
} else {
return null;
}
break;
}
});})(s__69063__$1,map__69068,map__69068__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__69061,map__69061__$1,msg,info,reload_info))
,null,null));
});})(s__69063__$1,map__69068,map__69068__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__69061,map__69061__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__69062(cljs.core.rest(s__69063__$1)));
} else {
var G__69353 = cljs.core.rest(s__69063__$1);
s__69063__$1 = G__69353;
continue;
}
} else {
var G__69354 = cljs.core.rest(s__69063__$1);
s__69063__$1 = G__69354;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__69069_69355 = cljs.core.seq(warnings);
var chunk__69070_69356 = null;
var count__69071_69357 = (0);
var i__69072_69358 = (0);
while(true){
if((i__69072_69358 < count__69071_69357)){
var map__69075_69359 = chunk__69070_69356.cljs$core$IIndexed$_nth$arity$2(null,i__69072_69358);
var map__69075_69360__$1 = cljs.core.__destructure_map(map__69075_69359);
var w_69361 = map__69075_69360__$1;
var msg_69362__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69075_69360__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_69363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69075_69360__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_69364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69075_69360__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_69365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69075_69360__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_69365)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_69363),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_69364),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_69362__$1)].join(''));


var G__69366 = seq__69069_69355;
var G__69367 = chunk__69070_69356;
var G__69368 = count__69071_69357;
var G__69369 = (i__69072_69358 + (1));
seq__69069_69355 = G__69366;
chunk__69070_69356 = G__69367;
count__69071_69357 = G__69368;
i__69072_69358 = G__69369;
continue;
} else {
var temp__5804__auto___69370 = cljs.core.seq(seq__69069_69355);
if(temp__5804__auto___69370){
var seq__69069_69371__$1 = temp__5804__auto___69370;
if(cljs.core.chunked_seq_QMARK_(seq__69069_69371__$1)){
var c__5568__auto___69372 = cljs.core.chunk_first(seq__69069_69371__$1);
var G__69373 = cljs.core.chunk_rest(seq__69069_69371__$1);
var G__69374 = c__5568__auto___69372;
var G__69375 = cljs.core.count(c__5568__auto___69372);
var G__69376 = (0);
seq__69069_69355 = G__69373;
chunk__69070_69356 = G__69374;
count__69071_69357 = G__69375;
i__69072_69358 = G__69376;
continue;
} else {
var map__69076_69377 = cljs.core.first(seq__69069_69371__$1);
var map__69076_69378__$1 = cljs.core.__destructure_map(map__69076_69377);
var w_69379 = map__69076_69378__$1;
var msg_69380__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69076_69378__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_69381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69076_69378__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_69382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69076_69378__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_69383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69076_69378__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_69383)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_69381),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_69382),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_69380__$1)].join(''));


var G__69384 = cljs.core.next(seq__69069_69371__$1);
var G__69385 = null;
var G__69386 = (0);
var G__69387 = (0);
seq__69069_69355 = G__69384;
chunk__69070_69356 = G__69385;
count__69071_69357 = G__69386;
i__69072_69358 = G__69387;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__69059_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__69059_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
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
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__69077){
var map__69078 = p__69077;
var map__69078__$1 = cljs.core.__destructure_map(map__69078);
var msg = map__69078__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69078__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69078__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__69079 = cljs.core.seq(updates);
var chunk__69081 = null;
var count__69082 = (0);
var i__69083 = (0);
while(true){
if((i__69083 < count__69082)){
var path = chunk__69081.cljs$core$IIndexed$_nth$arity$2(null,i__69083);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__69193_69388 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__69197_69389 = null;
var count__69198_69390 = (0);
var i__69199_69391 = (0);
while(true){
if((i__69199_69391 < count__69198_69390)){
var node_69392 = chunk__69197_69389.cljs$core$IIndexed$_nth$arity$2(null,i__69199_69391);
if(cljs.core.not(node_69392.shadow$old)){
var path_match_69393 = shadow.cljs.devtools.client.browser.match_paths(node_69392.getAttribute("href"),path);
if(cljs.core.truth_(path_match_69393)){
var new_link_69394 = (function (){var G__69225 = node_69392.cloneNode(true);
G__69225.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_69393),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__69225;
})();
(node_69392.shadow$old = true);

(new_link_69394.onload = ((function (seq__69193_69388,chunk__69197_69389,count__69198_69390,i__69199_69391,seq__69079,chunk__69081,count__69082,i__69083,new_link_69394,path_match_69393,node_69392,path,map__69078,map__69078__$1,msg,updates,reload_info){
return (function (e){
var seq__69226_69395 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__69228_69396 = null;
var count__69229_69397 = (0);
var i__69230_69398 = (0);
while(true){
if((i__69230_69398 < count__69229_69397)){
var map__69234_69399 = chunk__69228_69396.cljs$core$IIndexed$_nth$arity$2(null,i__69230_69398);
var map__69234_69400__$1 = cljs.core.__destructure_map(map__69234_69399);
var task_69401 = map__69234_69400__$1;
var fn_str_69402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69234_69400__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_69403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69234_69400__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_69404 = goog.getObjectByName(fn_str_69402,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_69403)].join(''));

(fn_obj_69404.cljs$core$IFn$_invoke$arity$2 ? fn_obj_69404.cljs$core$IFn$_invoke$arity$2(path,new_link_69394) : fn_obj_69404.call(null,path,new_link_69394));


var G__69405 = seq__69226_69395;
var G__69406 = chunk__69228_69396;
var G__69407 = count__69229_69397;
var G__69408 = (i__69230_69398 + (1));
seq__69226_69395 = G__69405;
chunk__69228_69396 = G__69406;
count__69229_69397 = G__69407;
i__69230_69398 = G__69408;
continue;
} else {
var temp__5804__auto___69409 = cljs.core.seq(seq__69226_69395);
if(temp__5804__auto___69409){
var seq__69226_69410__$1 = temp__5804__auto___69409;
if(cljs.core.chunked_seq_QMARK_(seq__69226_69410__$1)){
var c__5568__auto___69411 = cljs.core.chunk_first(seq__69226_69410__$1);
var G__69412 = cljs.core.chunk_rest(seq__69226_69410__$1);
var G__69413 = c__5568__auto___69411;
var G__69414 = cljs.core.count(c__5568__auto___69411);
var G__69415 = (0);
seq__69226_69395 = G__69412;
chunk__69228_69396 = G__69413;
count__69229_69397 = G__69414;
i__69230_69398 = G__69415;
continue;
} else {
var map__69235_69416 = cljs.core.first(seq__69226_69410__$1);
var map__69235_69417__$1 = cljs.core.__destructure_map(map__69235_69416);
var task_69418 = map__69235_69417__$1;
var fn_str_69419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69235_69417__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_69420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69235_69417__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_69421 = goog.getObjectByName(fn_str_69419,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_69420)].join(''));

(fn_obj_69421.cljs$core$IFn$_invoke$arity$2 ? fn_obj_69421.cljs$core$IFn$_invoke$arity$2(path,new_link_69394) : fn_obj_69421.call(null,path,new_link_69394));


var G__69422 = cljs.core.next(seq__69226_69410__$1);
var G__69423 = null;
var G__69424 = (0);
var G__69425 = (0);
seq__69226_69395 = G__69422;
chunk__69228_69396 = G__69423;
count__69229_69397 = G__69424;
i__69230_69398 = G__69425;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_69392);
});})(seq__69193_69388,chunk__69197_69389,count__69198_69390,i__69199_69391,seq__69079,chunk__69081,count__69082,i__69083,new_link_69394,path_match_69393,node_69392,path,map__69078,map__69078__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_69393], 0));

goog.dom.insertSiblingAfter(new_link_69394,node_69392);


var G__69426 = seq__69193_69388;
var G__69427 = chunk__69197_69389;
var G__69428 = count__69198_69390;
var G__69429 = (i__69199_69391 + (1));
seq__69193_69388 = G__69426;
chunk__69197_69389 = G__69427;
count__69198_69390 = G__69428;
i__69199_69391 = G__69429;
continue;
} else {
var G__69430 = seq__69193_69388;
var G__69431 = chunk__69197_69389;
var G__69432 = count__69198_69390;
var G__69433 = (i__69199_69391 + (1));
seq__69193_69388 = G__69430;
chunk__69197_69389 = G__69431;
count__69198_69390 = G__69432;
i__69199_69391 = G__69433;
continue;
}
} else {
var G__69434 = seq__69193_69388;
var G__69435 = chunk__69197_69389;
var G__69436 = count__69198_69390;
var G__69437 = (i__69199_69391 + (1));
seq__69193_69388 = G__69434;
chunk__69197_69389 = G__69435;
count__69198_69390 = G__69436;
i__69199_69391 = G__69437;
continue;
}
} else {
var temp__5804__auto___69438 = cljs.core.seq(seq__69193_69388);
if(temp__5804__auto___69438){
var seq__69193_69439__$1 = temp__5804__auto___69438;
if(cljs.core.chunked_seq_QMARK_(seq__69193_69439__$1)){
var c__5568__auto___69440 = cljs.core.chunk_first(seq__69193_69439__$1);
var G__69441 = cljs.core.chunk_rest(seq__69193_69439__$1);
var G__69442 = c__5568__auto___69440;
var G__69443 = cljs.core.count(c__5568__auto___69440);
var G__69444 = (0);
seq__69193_69388 = G__69441;
chunk__69197_69389 = G__69442;
count__69198_69390 = G__69443;
i__69199_69391 = G__69444;
continue;
} else {
var node_69445 = cljs.core.first(seq__69193_69439__$1);
if(cljs.core.not(node_69445.shadow$old)){
var path_match_69446 = shadow.cljs.devtools.client.browser.match_paths(node_69445.getAttribute("href"),path);
if(cljs.core.truth_(path_match_69446)){
var new_link_69447 = (function (){var G__69236 = node_69445.cloneNode(true);
G__69236.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_69446),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__69236;
})();
(node_69445.shadow$old = true);

(new_link_69447.onload = ((function (seq__69193_69388,chunk__69197_69389,count__69198_69390,i__69199_69391,seq__69079,chunk__69081,count__69082,i__69083,new_link_69447,path_match_69446,node_69445,seq__69193_69439__$1,temp__5804__auto___69438,path,map__69078,map__69078__$1,msg,updates,reload_info){
return (function (e){
var seq__69237_69448 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__69239_69449 = null;
var count__69240_69450 = (0);
var i__69241_69451 = (0);
while(true){
if((i__69241_69451 < count__69240_69450)){
var map__69245_69452 = chunk__69239_69449.cljs$core$IIndexed$_nth$arity$2(null,i__69241_69451);
var map__69245_69453__$1 = cljs.core.__destructure_map(map__69245_69452);
var task_69454 = map__69245_69453__$1;
var fn_str_69455 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69245_69453__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_69456 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69245_69453__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_69457 = goog.getObjectByName(fn_str_69455,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_69456)].join(''));

(fn_obj_69457.cljs$core$IFn$_invoke$arity$2 ? fn_obj_69457.cljs$core$IFn$_invoke$arity$2(path,new_link_69447) : fn_obj_69457.call(null,path,new_link_69447));


var G__69458 = seq__69237_69448;
var G__69459 = chunk__69239_69449;
var G__69460 = count__69240_69450;
var G__69461 = (i__69241_69451 + (1));
seq__69237_69448 = G__69458;
chunk__69239_69449 = G__69459;
count__69240_69450 = G__69460;
i__69241_69451 = G__69461;
continue;
} else {
var temp__5804__auto___69462__$1 = cljs.core.seq(seq__69237_69448);
if(temp__5804__auto___69462__$1){
var seq__69237_69463__$1 = temp__5804__auto___69462__$1;
if(cljs.core.chunked_seq_QMARK_(seq__69237_69463__$1)){
var c__5568__auto___69464 = cljs.core.chunk_first(seq__69237_69463__$1);
var G__69465 = cljs.core.chunk_rest(seq__69237_69463__$1);
var G__69466 = c__5568__auto___69464;
var G__69467 = cljs.core.count(c__5568__auto___69464);
var G__69468 = (0);
seq__69237_69448 = G__69465;
chunk__69239_69449 = G__69466;
count__69240_69450 = G__69467;
i__69241_69451 = G__69468;
continue;
} else {
var map__69246_69469 = cljs.core.first(seq__69237_69463__$1);
var map__69246_69470__$1 = cljs.core.__destructure_map(map__69246_69469);
var task_69471 = map__69246_69470__$1;
var fn_str_69472 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69246_69470__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_69473 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69246_69470__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_69474 = goog.getObjectByName(fn_str_69472,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_69473)].join(''));

(fn_obj_69474.cljs$core$IFn$_invoke$arity$2 ? fn_obj_69474.cljs$core$IFn$_invoke$arity$2(path,new_link_69447) : fn_obj_69474.call(null,path,new_link_69447));


var G__69475 = cljs.core.next(seq__69237_69463__$1);
var G__69476 = null;
var G__69477 = (0);
var G__69478 = (0);
seq__69237_69448 = G__69475;
chunk__69239_69449 = G__69476;
count__69240_69450 = G__69477;
i__69241_69451 = G__69478;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_69445);
});})(seq__69193_69388,chunk__69197_69389,count__69198_69390,i__69199_69391,seq__69079,chunk__69081,count__69082,i__69083,new_link_69447,path_match_69446,node_69445,seq__69193_69439__$1,temp__5804__auto___69438,path,map__69078,map__69078__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_69446], 0));

goog.dom.insertSiblingAfter(new_link_69447,node_69445);


var G__69479 = cljs.core.next(seq__69193_69439__$1);
var G__69480 = null;
var G__69481 = (0);
var G__69482 = (0);
seq__69193_69388 = G__69479;
chunk__69197_69389 = G__69480;
count__69198_69390 = G__69481;
i__69199_69391 = G__69482;
continue;
} else {
var G__69483 = cljs.core.next(seq__69193_69439__$1);
var G__69484 = null;
var G__69485 = (0);
var G__69486 = (0);
seq__69193_69388 = G__69483;
chunk__69197_69389 = G__69484;
count__69198_69390 = G__69485;
i__69199_69391 = G__69486;
continue;
}
} else {
var G__69487 = cljs.core.next(seq__69193_69439__$1);
var G__69488 = null;
var G__69489 = (0);
var G__69490 = (0);
seq__69193_69388 = G__69487;
chunk__69197_69389 = G__69488;
count__69198_69390 = G__69489;
i__69199_69391 = G__69490;
continue;
}
}
} else {
}
}
break;
}


var G__69491 = seq__69079;
var G__69492 = chunk__69081;
var G__69493 = count__69082;
var G__69494 = (i__69083 + (1));
seq__69079 = G__69491;
chunk__69081 = G__69492;
count__69082 = G__69493;
i__69083 = G__69494;
continue;
} else {
var G__69495 = seq__69079;
var G__69496 = chunk__69081;
var G__69497 = count__69082;
var G__69498 = (i__69083 + (1));
seq__69079 = G__69495;
chunk__69081 = G__69496;
count__69082 = G__69497;
i__69083 = G__69498;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__69079);
if(temp__5804__auto__){
var seq__69079__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69079__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__69079__$1);
var G__69499 = cljs.core.chunk_rest(seq__69079__$1);
var G__69500 = c__5568__auto__;
var G__69501 = cljs.core.count(c__5568__auto__);
var G__69502 = (0);
seq__69079 = G__69499;
chunk__69081 = G__69500;
count__69082 = G__69501;
i__69083 = G__69502;
continue;
} else {
var path = cljs.core.first(seq__69079__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__69247_69503 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__69251_69504 = null;
var count__69252_69505 = (0);
var i__69253_69506 = (0);
while(true){
if((i__69253_69506 < count__69252_69505)){
var node_69507 = chunk__69251_69504.cljs$core$IIndexed$_nth$arity$2(null,i__69253_69506);
if(cljs.core.not(node_69507.shadow$old)){
var path_match_69508 = shadow.cljs.devtools.client.browser.match_paths(node_69507.getAttribute("href"),path);
if(cljs.core.truth_(path_match_69508)){
var new_link_69509 = (function (){var G__69279 = node_69507.cloneNode(true);
G__69279.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_69508),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__69279;
})();
(node_69507.shadow$old = true);

(new_link_69509.onload = ((function (seq__69247_69503,chunk__69251_69504,count__69252_69505,i__69253_69506,seq__69079,chunk__69081,count__69082,i__69083,new_link_69509,path_match_69508,node_69507,path,seq__69079__$1,temp__5804__auto__,map__69078,map__69078__$1,msg,updates,reload_info){
return (function (e){
var seq__69280_69510 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__69282_69511 = null;
var count__69283_69512 = (0);
var i__69284_69513 = (0);
while(true){
if((i__69284_69513 < count__69283_69512)){
var map__69288_69514 = chunk__69282_69511.cljs$core$IIndexed$_nth$arity$2(null,i__69284_69513);
var map__69288_69515__$1 = cljs.core.__destructure_map(map__69288_69514);
var task_69516 = map__69288_69515__$1;
var fn_str_69517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69288_69515__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_69518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69288_69515__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_69519 = goog.getObjectByName(fn_str_69517,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_69518)].join(''));

(fn_obj_69519.cljs$core$IFn$_invoke$arity$2 ? fn_obj_69519.cljs$core$IFn$_invoke$arity$2(path,new_link_69509) : fn_obj_69519.call(null,path,new_link_69509));


var G__69520 = seq__69280_69510;
var G__69521 = chunk__69282_69511;
var G__69522 = count__69283_69512;
var G__69523 = (i__69284_69513 + (1));
seq__69280_69510 = G__69520;
chunk__69282_69511 = G__69521;
count__69283_69512 = G__69522;
i__69284_69513 = G__69523;
continue;
} else {
var temp__5804__auto___69524__$1 = cljs.core.seq(seq__69280_69510);
if(temp__5804__auto___69524__$1){
var seq__69280_69525__$1 = temp__5804__auto___69524__$1;
if(cljs.core.chunked_seq_QMARK_(seq__69280_69525__$1)){
var c__5568__auto___69526 = cljs.core.chunk_first(seq__69280_69525__$1);
var G__69527 = cljs.core.chunk_rest(seq__69280_69525__$1);
var G__69528 = c__5568__auto___69526;
var G__69529 = cljs.core.count(c__5568__auto___69526);
var G__69530 = (0);
seq__69280_69510 = G__69527;
chunk__69282_69511 = G__69528;
count__69283_69512 = G__69529;
i__69284_69513 = G__69530;
continue;
} else {
var map__69289_69531 = cljs.core.first(seq__69280_69525__$1);
var map__69289_69532__$1 = cljs.core.__destructure_map(map__69289_69531);
var task_69533 = map__69289_69532__$1;
var fn_str_69534 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69289_69532__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_69535 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69289_69532__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_69536 = goog.getObjectByName(fn_str_69534,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_69535)].join(''));

(fn_obj_69536.cljs$core$IFn$_invoke$arity$2 ? fn_obj_69536.cljs$core$IFn$_invoke$arity$2(path,new_link_69509) : fn_obj_69536.call(null,path,new_link_69509));


var G__69537 = cljs.core.next(seq__69280_69525__$1);
var G__69538 = null;
var G__69539 = (0);
var G__69540 = (0);
seq__69280_69510 = G__69537;
chunk__69282_69511 = G__69538;
count__69283_69512 = G__69539;
i__69284_69513 = G__69540;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_69507);
});})(seq__69247_69503,chunk__69251_69504,count__69252_69505,i__69253_69506,seq__69079,chunk__69081,count__69082,i__69083,new_link_69509,path_match_69508,node_69507,path,seq__69079__$1,temp__5804__auto__,map__69078,map__69078__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_69508], 0));

goog.dom.insertSiblingAfter(new_link_69509,node_69507);


var G__69541 = seq__69247_69503;
var G__69542 = chunk__69251_69504;
var G__69543 = count__69252_69505;
var G__69544 = (i__69253_69506 + (1));
seq__69247_69503 = G__69541;
chunk__69251_69504 = G__69542;
count__69252_69505 = G__69543;
i__69253_69506 = G__69544;
continue;
} else {
var G__69545 = seq__69247_69503;
var G__69546 = chunk__69251_69504;
var G__69547 = count__69252_69505;
var G__69548 = (i__69253_69506 + (1));
seq__69247_69503 = G__69545;
chunk__69251_69504 = G__69546;
count__69252_69505 = G__69547;
i__69253_69506 = G__69548;
continue;
}
} else {
var G__69549 = seq__69247_69503;
var G__69550 = chunk__69251_69504;
var G__69551 = count__69252_69505;
var G__69552 = (i__69253_69506 + (1));
seq__69247_69503 = G__69549;
chunk__69251_69504 = G__69550;
count__69252_69505 = G__69551;
i__69253_69506 = G__69552;
continue;
}
} else {
var temp__5804__auto___69553__$1 = cljs.core.seq(seq__69247_69503);
if(temp__5804__auto___69553__$1){
var seq__69247_69554__$1 = temp__5804__auto___69553__$1;
if(cljs.core.chunked_seq_QMARK_(seq__69247_69554__$1)){
var c__5568__auto___69555 = cljs.core.chunk_first(seq__69247_69554__$1);
var G__69556 = cljs.core.chunk_rest(seq__69247_69554__$1);
var G__69557 = c__5568__auto___69555;
var G__69558 = cljs.core.count(c__5568__auto___69555);
var G__69559 = (0);
seq__69247_69503 = G__69556;
chunk__69251_69504 = G__69557;
count__69252_69505 = G__69558;
i__69253_69506 = G__69559;
continue;
} else {
var node_69560 = cljs.core.first(seq__69247_69554__$1);
if(cljs.core.not(node_69560.shadow$old)){
var path_match_69561 = shadow.cljs.devtools.client.browser.match_paths(node_69560.getAttribute("href"),path);
if(cljs.core.truth_(path_match_69561)){
var new_link_69562 = (function (){var G__69290 = node_69560.cloneNode(true);
G__69290.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_69561),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__69290;
})();
(node_69560.shadow$old = true);

(new_link_69562.onload = ((function (seq__69247_69503,chunk__69251_69504,count__69252_69505,i__69253_69506,seq__69079,chunk__69081,count__69082,i__69083,new_link_69562,path_match_69561,node_69560,seq__69247_69554__$1,temp__5804__auto___69553__$1,path,seq__69079__$1,temp__5804__auto__,map__69078,map__69078__$1,msg,updates,reload_info){
return (function (e){
var seq__69291_69563 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__69293_69564 = null;
var count__69294_69565 = (0);
var i__69295_69566 = (0);
while(true){
if((i__69295_69566 < count__69294_69565)){
var map__69299_69567 = chunk__69293_69564.cljs$core$IIndexed$_nth$arity$2(null,i__69295_69566);
var map__69299_69568__$1 = cljs.core.__destructure_map(map__69299_69567);
var task_69569 = map__69299_69568__$1;
var fn_str_69570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69299_69568__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_69571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69299_69568__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_69572 = goog.getObjectByName(fn_str_69570,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_69571)].join(''));

(fn_obj_69572.cljs$core$IFn$_invoke$arity$2 ? fn_obj_69572.cljs$core$IFn$_invoke$arity$2(path,new_link_69562) : fn_obj_69572.call(null,path,new_link_69562));


var G__69573 = seq__69291_69563;
var G__69574 = chunk__69293_69564;
var G__69575 = count__69294_69565;
var G__69576 = (i__69295_69566 + (1));
seq__69291_69563 = G__69573;
chunk__69293_69564 = G__69574;
count__69294_69565 = G__69575;
i__69295_69566 = G__69576;
continue;
} else {
var temp__5804__auto___69577__$2 = cljs.core.seq(seq__69291_69563);
if(temp__5804__auto___69577__$2){
var seq__69291_69578__$1 = temp__5804__auto___69577__$2;
if(cljs.core.chunked_seq_QMARK_(seq__69291_69578__$1)){
var c__5568__auto___69579 = cljs.core.chunk_first(seq__69291_69578__$1);
var G__69580 = cljs.core.chunk_rest(seq__69291_69578__$1);
var G__69581 = c__5568__auto___69579;
var G__69582 = cljs.core.count(c__5568__auto___69579);
var G__69583 = (0);
seq__69291_69563 = G__69580;
chunk__69293_69564 = G__69581;
count__69294_69565 = G__69582;
i__69295_69566 = G__69583;
continue;
} else {
var map__69300_69584 = cljs.core.first(seq__69291_69578__$1);
var map__69300_69585__$1 = cljs.core.__destructure_map(map__69300_69584);
var task_69586 = map__69300_69585__$1;
var fn_str_69587 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69300_69585__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_69588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69300_69585__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_69589 = goog.getObjectByName(fn_str_69587,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_69588)].join(''));

(fn_obj_69589.cljs$core$IFn$_invoke$arity$2 ? fn_obj_69589.cljs$core$IFn$_invoke$arity$2(path,new_link_69562) : fn_obj_69589.call(null,path,new_link_69562));


var G__69590 = cljs.core.next(seq__69291_69578__$1);
var G__69591 = null;
var G__69592 = (0);
var G__69593 = (0);
seq__69291_69563 = G__69590;
chunk__69293_69564 = G__69591;
count__69294_69565 = G__69592;
i__69295_69566 = G__69593;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_69560);
});})(seq__69247_69503,chunk__69251_69504,count__69252_69505,i__69253_69506,seq__69079,chunk__69081,count__69082,i__69083,new_link_69562,path_match_69561,node_69560,seq__69247_69554__$1,temp__5804__auto___69553__$1,path,seq__69079__$1,temp__5804__auto__,map__69078,map__69078__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_69561], 0));

goog.dom.insertSiblingAfter(new_link_69562,node_69560);


var G__69594 = cljs.core.next(seq__69247_69554__$1);
var G__69595 = null;
var G__69596 = (0);
var G__69597 = (0);
seq__69247_69503 = G__69594;
chunk__69251_69504 = G__69595;
count__69252_69505 = G__69596;
i__69253_69506 = G__69597;
continue;
} else {
var G__69598 = cljs.core.next(seq__69247_69554__$1);
var G__69599 = null;
var G__69600 = (0);
var G__69601 = (0);
seq__69247_69503 = G__69598;
chunk__69251_69504 = G__69599;
count__69252_69505 = G__69600;
i__69253_69506 = G__69601;
continue;
}
} else {
var G__69602 = cljs.core.next(seq__69247_69554__$1);
var G__69603 = null;
var G__69604 = (0);
var G__69605 = (0);
seq__69247_69503 = G__69602;
chunk__69251_69504 = G__69603;
count__69252_69505 = G__69604;
i__69253_69506 = G__69605;
continue;
}
}
} else {
}
}
break;
}


var G__69606 = cljs.core.next(seq__69079__$1);
var G__69607 = null;
var G__69608 = (0);
var G__69609 = (0);
seq__69079 = G__69606;
chunk__69081 = G__69607;
count__69082 = G__69608;
i__69083 = G__69609;
continue;
} else {
var G__69610 = cljs.core.next(seq__69079__$1);
var G__69611 = null;
var G__69612 = (0);
var G__69613 = (0);
seq__69079 = G__69610;
chunk__69081 = G__69611;
count__69082 = G__69612;
i__69083 = G__69613;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__69301){
var map__69302 = p__69301;
var map__69302__$1 = cljs.core.__destructure_map(map__69302);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69302__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__69303){
var map__69304 = p__69303;
var map__69304__$1 = cljs.core.__destructure_map(map__69304);
var _ = map__69304__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69304__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__69305,done,error){
var map__69306 = p__69305;
var map__69306__$1 = cljs.core.__destructure_map(map__69306);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69306__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__69307,done,error){
var map__69308 = p__69307;
var map__69308__$1 = cljs.core.__destructure_map(map__69308);
var msg = map__69308__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69308__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69308__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69308__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__69309){
var map__69310 = p__69309;
var map__69310__$1 = cljs.core.__destructure_map(map__69310);
var src = map__69310__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69310__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__69311 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__69311) : done.call(null,G__69311));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__69312){
var map__69313 = p__69312;
var map__69313__$1 = cljs.core.__destructure_map(map__69313);
var msg__$1 = map__69313__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69313__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e69314){var ex = e69314;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__69315){
var map__69316 = p__69315;
var map__69316__$1 = cljs.core.__destructure_map(map__69316);
var env = map__69316__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69316__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__69317){
var map__69318 = p__69317;
var map__69318__$1 = cljs.core.__destructure_map(map__69318);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69318__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69318__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__69319){
var map__69320 = p__69319;
var map__69320__$1 = cljs.core.__destructure_map(map__69320);
var svc = map__69320__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69320__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
