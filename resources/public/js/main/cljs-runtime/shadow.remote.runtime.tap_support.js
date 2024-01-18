goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__67900,p__67901){
var map__67903 = p__67900;
var map__67903__$1 = cljs.core.__destructure_map(map__67903);
var svc = map__67903__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67903__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67903__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67903__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__67904 = p__67901;
var map__67904__$1 = cljs.core.__destructure_map(map__67904);
var msg = map__67904__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67904__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67904__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67904__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67904__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__67907,p__67908){
var map__67910 = p__67907;
var map__67910__$1 = cljs.core.__destructure_map(map__67910);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67910__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__67911 = p__67908;
var map__67911__$1 = cljs.core.__destructure_map(map__67911);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67911__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__67926,p__67927){
var map__67928 = p__67926;
var map__67928__$1 = cljs.core.__destructure_map(map__67928);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67928__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67928__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__67929 = p__67927;
var map__67929__$1 = cljs.core.__destructure_map(map__67929);
var msg = map__67929__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67929__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__67930,tid){
var map__67935 = p__67930;
var map__67935__$1 = cljs.core.__destructure_map(map__67935);
var svc = map__67935__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67935__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__67963 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__67964 = null;
var count__67965 = (0);
var i__67966 = (0);
while(true){
if((i__67966 < count__67965)){
var vec__67978 = chunk__67964.cljs$core$IIndexed$_nth$arity$2(null,i__67966);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67978,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67978,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68087 = seq__67963;
var G__68088 = chunk__67964;
var G__68089 = count__67965;
var G__68090 = (i__67966 + (1));
seq__67963 = G__68087;
chunk__67964 = G__68088;
count__67965 = G__68089;
i__67966 = G__68090;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__67963);
if(temp__5804__auto__){
var seq__67963__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67963__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__67963__$1);
var G__68091 = cljs.core.chunk_rest(seq__67963__$1);
var G__68092 = c__5568__auto__;
var G__68093 = cljs.core.count(c__5568__auto__);
var G__68094 = (0);
seq__67963 = G__68091;
chunk__67964 = G__68092;
count__67965 = G__68093;
i__67966 = G__68094;
continue;
} else {
var vec__67985 = cljs.core.first(seq__67963__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67985,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67985,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68095 = cljs.core.next(seq__67963__$1);
var G__68096 = null;
var G__68097 = (0);
var G__68098 = (0);
seq__67963 = G__68095;
chunk__67964 = G__68096;
count__67965 = G__68097;
i__67966 = G__68098;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__67944_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__67944_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__67945_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__67945_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__67946_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__67946_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__67947_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__67947_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__68001){
var map__68006 = p__68001;
var map__68006__$1 = cljs.core.__destructure_map(map__68006);
var svc = map__68006__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68006__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68006__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
