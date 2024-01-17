goog.provide('ghostwheel.logging');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.pprint');
ghostwheel.logging._STAR_nesting = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("");
ghostwheel.logging._STAR_report_output_STAR_ = new cljs.core.Keyword(null,"js-console","js-console",1240105791);
ghostwheel.logging.ghostwheel_colors = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"base1","base1",-1379049855),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"purple1","purple1",1665392325),new cljs.core.Keyword(null,"base3","base3",-1172895995),new cljs.core.Keyword(null,"purple0","purple0",-1668477083),new cljs.core.Keyword(null,"orange0","orange0",1459969095),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"base2","base2",1736987560),new cljs.core.Keyword(null,"green0","green0",935416937),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"green1","green1",1162170698),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"violet","violet",-1351470549),new cljs.core.Keyword(null,"purple2","purple2",-1568108659),new cljs.core.Keyword(null,"base0","base0",128742798),new cljs.core.Keyword(null,"orange1","orange1",1540366992),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"base00","base00",-1549387019),new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"base01","base01",277019065),new cljs.core.Keyword(null,"base03","base03",269270489),new cljs.core.Keyword(null,"base02","base02",-1734030562),new cljs.core.Keyword(null,"black","black",1294279647)],["#93a1a1","#cb4b16","#b87a93","#fdf6e3","#967a93","#fe8709","#b58900","#eee8d5","#82da38","#859900","#54a627","#2aa198","#6c71c4","#7d9cf8","#839496","#f17d3e","#dc322f","#268bd2","#657b83","#d33682","#586e75","#002b36","#073642","#002b36"]);
ghostwheel.logging.ops_with_bindings = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 21, [new cljs.core.Symbol(null,"deftype","deftype",1980826088,null),null,new cljs.core.Symbol(null,"defmethod","defmethod",-579171823,null),null,new cljs.core.Symbol("ghostwheel.tracer","extend-protocol","ghostwheel.tracer/extend-protocol",-1387613853,null),null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,new cljs.core.Symbol(null,"defn","defn",-126010802,null),null,new cljs.core.Symbol("ghostwheel.tracer","defmethod","ghostwheel.tracer/defmethod",41043138,null),null,new cljs.core.Symbol(null,"extend-protocol","extend-protocol",306378578,null),null,new cljs.core.Symbol("ghostwheel.tracer","defn-","ghostwheel.tracer/defn-",410431175,null),null,new cljs.core.Symbol("ghostwheel.tracer","let","ghostwheel.tracer/let",-1135560835,null),null,new cljs.core.Symbol("ghostwheel.tracer","defn","ghostwheel.tracer/defn",-1888156609,null),null,new cljs.core.Symbol(null,"extend-type","extend-type",1123355921,null),null,new cljs.core.Symbol("ghostwheel.tracer","reify","ghostwheel.tracer/reify",-914829536,null),null,new cljs.core.Symbol("ghostwheel.tracer","fn","ghostwheel.tracer/fn",-1296883590,null),null,new cljs.core.Symbol(null,"reify","reify",1885539699,null),null,new cljs.core.Symbol(null,"let","let",358118826,null),null,new cljs.core.Symbol(null,"fn","fn",465265323,null),null,new cljs.core.Symbol(null,"defrecord","defrecord",273038109,null),null,new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),null,new cljs.core.Symbol("ghostwheel.tracer","deftype","ghostwheel.tracer/deftype",-1592147015,null),null,new cljs.core.Symbol("ghostwheel.tracer","defrecord","ghostwheel.tracer/defrecord",-917570066,null),null,new cljs.core.Symbol("ghostwheel.tracer","extend-type","ghostwheel.tracer/extend-type",704466912,null),null], null), null);
ghostwheel.logging.wrap_line = (function ghostwheel$logging$wrap_line(size,text){
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,["~{~<~%~1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),":;~A~> ~}"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.split.cljs$core$IFn$_invoke$arity$2(text,/ /)], 0));
});
ghostwheel.logging.wrap = (function ghostwheel$logging$wrap(line){
return ghostwheel.logging.wrap_line((80),line);
});
ghostwheel.logging.truncate_string = (function ghostwheel$logging$truncate_string(long_string,limit){
if((cljs.core.count(long_string) > limit)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(long_string,(0),limit)),"..."].join('');
} else {
return long_string;
}
});
ghostwheel.logging.get_styled_label = (function ghostwheel$logging$get_styled_label(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57023 = arguments.length;
var i__4731__auto___57024 = (0);
while(true){
if((i__4731__auto___57024 < len__4730__auto___57023)){
args__4736__auto__.push((arguments[i__4731__auto___57024]));

var G__57025 = (i__4731__auto___57024 + (1));
i__4731__auto___57024 = G__57025;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return ghostwheel.logging.get_styled_label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

ghostwheel.logging.get_styled_label.cljs$core$IFn$_invoke$arity$variadic = (function (label,p__56961,output,p__56962){
var map__56963 = p__56961;
var map__56963__$1 = (((((!((map__56963 == null))))?(((((map__56963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56963):map__56963);
var style = map__56963__$1;
var foreground = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56963__$1,new cljs.core.Keyword("ghostwheel.logging","foreground","ghostwheel.logging/foreground",-473507023));
var background = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56963__$1,new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56963__$1,new cljs.core.Keyword("ghostwheel.logging","weight","ghostwheel.logging/weight",-88030216));
var vec__56964 = p__56962;
var length = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56964,(0),null);
if(cljs.core.not(style)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label], null);
} else {
var label__$1 = (function (){var G__56968 = (cljs.core.truth_(length)?ghostwheel.logging.truncate_string(label,length):label);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(output,new cljs.core.Keyword(null,"js-console","js-console",1240105791))){
return ["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56968)].join('');
} else {
return G__56968;
}
})();
var style__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(output,new cljs.core.Keyword(null,"js-console","js-console",1240105791)))?["color: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(foreground)?foreground:(cljs.core.truth_(background)?"white":new cljs.core.Keyword(null,"black","black",1294279647).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)
))),";","background: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(background)?background:"white")),";","font-weight: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(weight)?weight:"500")),";",(cljs.core.truth_(background)?"text-shadow: 0.5px 0.5px black;":null),(cljs.core.truth_(background)?"padding: 2px 6px; border-radius: 2px;":null)].join(''):null);
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [label__$1,style__$1], null)));
}
});

ghostwheel.logging.get_styled_label.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
ghostwheel.logging.get_styled_label.cljs$lang$applyTo = (function (seq56957){
var G__56958 = cljs.core.first(seq56957);
var seq56957__$1 = cljs.core.next(seq56957);
var G__56959 = cljs.core.first(seq56957__$1);
var seq56957__$2 = cljs.core.next(seq56957__$1);
var G__56960 = cljs.core.first(seq56957__$2);
var seq56957__$3 = cljs.core.next(seq56957__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56958,G__56959,G__56960,seq56957__$3);
});

ghostwheel.logging.plain_log = (function ghostwheel$logging$plain_log(msg){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56969_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ghostwheel.logging._STAR_nesting)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__56969_SHARP_)].join('');
}),clojure.string.split_lines(((typeof msg === 'string')?msg:(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56970_57027 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56971_57028 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56972_57029 = true;
var _STAR_print_fn_STAR__temp_val__56973_57030 = ((function (_STAR_print_newline_STAR__orig_val__56970_57027,_STAR_print_fn_STAR__orig_val__56971_57028,_STAR_print_newline_STAR__temp_val__56972_57029,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__56970_57027,_STAR_print_fn_STAR__orig_val__56971_57028,_STAR_print_newline_STAR__temp_val__56972_57029,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56972_57029;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56973_57030;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(msg);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56971_57028;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56970_57027;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()))))], 0));
});
ghostwheel.logging.log = (function ghostwheel$logging$log(var_args){
var G__56975 = arguments.length;
switch (G__56975) {
case 0:
return ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$0 = (function (){
return ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$2("",null);
});

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1 = (function (msg){
return ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$2(msg,null);
});

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$2 = (function (msg,style){
var styled_msg = ghostwheel.logging.get_styled_label(msg,style,ghostwheel.logging._STAR_report_output_STAR_);
var G__56977 = ghostwheel.logging._STAR_report_output_STAR_;
var G__56977__$1 = (((G__56977 instanceof cljs.core.Keyword))?G__56977.fqn:null);
switch (G__56977__$1) {
case "repl":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging.plain_log,styled_msg);

break;
case "js-console":
return console.log.apply(console,cljs.core.to_array(styled_msg));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56977__$1)].join('')));

}
});

ghostwheel.logging.log.cljs$lang$maxFixedArity = 2;

ghostwheel.logging.DBG = (function ghostwheel$logging$DBG(var_args){
var G__56981 = arguments.length;
switch (G__56981) {
case 0:
return ghostwheel.logging.DBG.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___57037 = arguments.length;
var i__4731__auto___57038 = (0);
while(true){
if((i__4731__auto___57038 < len__4730__auto___57037)){
args_arr__4751__auto__.push((arguments[i__4731__auto___57038]));

var G__57039 = (i__4731__auto___57038 + (1));
i__4731__auto___57038 = G__57039;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((0)),(0),null));
return ghostwheel.logging.DBG.cljs$core$IFn$_invoke$arity$variadic(argseq__4752__auto__);

}
});

ghostwheel.logging.DBG.cljs$core$IFn$_invoke$arity$0 = (function (){
return ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1("#> MARK");
});

ghostwheel.logging.DBG.cljs$core$IFn$_invoke$arity$variadic = (function (msgs){
var seq__56984_57041 = cljs.core.seq(msgs);
var chunk__56985_57042 = null;
var count__56986_57043 = (0);
var i__56987_57044 = (0);
while(true){
if((i__56987_57044 < count__56986_57043)){
var msg_57045 = chunk__56985_57042.cljs$core$IIndexed$_nth$arity$2(null,i__56987_57044);
if((msg_57045 == null)){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1("nil");
} else {
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(msg_57045);
}


var G__57046 = seq__56984_57041;
var G__57047 = chunk__56985_57042;
var G__57048 = count__56986_57043;
var G__57049 = (i__56987_57044 + (1));
seq__56984_57041 = G__57046;
chunk__56985_57042 = G__57047;
count__56986_57043 = G__57048;
i__56987_57044 = G__57049;
continue;
} else {
var temp__5804__auto___57050 = cljs.core.seq(seq__56984_57041);
if(temp__5804__auto___57050){
var seq__56984_57051__$1 = temp__5804__auto___57050;
if(cljs.core.chunked_seq_QMARK_(seq__56984_57051__$1)){
var c__4550__auto___57052 = cljs.core.chunk_first(seq__56984_57051__$1);
var G__57053 = cljs.core.chunk_rest(seq__56984_57051__$1);
var G__57054 = c__4550__auto___57052;
var G__57055 = cljs.core.count(c__4550__auto___57052);
var G__57056 = (0);
seq__56984_57041 = G__57053;
chunk__56985_57042 = G__57054;
count__56986_57043 = G__57055;
i__56987_57044 = G__57056;
continue;
} else {
var msg_57057 = cljs.core.first(seq__56984_57051__$1);
if((msg_57057 == null)){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1("nil");
} else {
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(msg_57057);
}


var G__57058 = cljs.core.next(seq__56984_57051__$1);
var G__57059 = null;
var G__57060 = (0);
var G__57061 = (0);
seq__56984_57041 = G__57058;
chunk__56985_57042 = G__57059;
count__56986_57043 = G__57060;
i__56987_57044 = G__57061;
continue;
}
} else {
}
}
break;
}

return cljs.core.last(msgs);
});

/** @this {Function} */
ghostwheel.logging.DBG.cljs$lang$applyTo = (function (seq56980){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56980));
});

ghostwheel.logging.DBG.cljs$lang$maxFixedArity = (0);

ghostwheel.logging.log_raw = (function ghostwheel$logging$log_raw(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57062 = arguments.length;
var i__4731__auto___57063 = (0);
while(true){
if((i__4731__auto___57063 < len__4730__auto___57062)){
args__4736__auto__.push((arguments[i__4731__auto___57063]));

var G__57064 = (i__4731__auto___57063 + (1));
i__4731__auto___57063 = G__57064;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return ghostwheel.logging.log_raw.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

ghostwheel.logging.log_raw.cljs$core$IFn$_invoke$arity$variadic = (function (format_strings,objs){
var G__56990 = ghostwheel.logging._STAR_report_output_STAR_;
var G__56990__$1 = (((G__56990 instanceof cljs.core.Keyword))?G__56990.fqn:null);
switch (G__56990__$1) {
case "repl":
var seq__56991 = cljs.core.seq(objs);
var chunk__56992 = null;
var count__56993 = (0);
var i__56994 = (0);
while(true){
if((i__56994 < count__56993)){
var obj = chunk__56992.cljs$core$IIndexed$_nth$arity$2(null,i__56994);
ghostwheel.logging.plain_log(obj);


var G__57074 = seq__56991;
var G__57075 = chunk__56992;
var G__57076 = count__56993;
var G__57077 = (i__56994 + (1));
seq__56991 = G__57074;
chunk__56992 = G__57075;
count__56993 = G__57076;
i__56994 = G__57077;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56991);
if(temp__5804__auto__){
var seq__56991__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56991__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56991__$1);
var G__57079 = cljs.core.chunk_rest(seq__56991__$1);
var G__57080 = c__4550__auto__;
var G__57081 = cljs.core.count(c__4550__auto__);
var G__57082 = (0);
seq__56991 = G__57079;
chunk__56992 = G__57080;
count__56993 = G__57081;
i__56994 = G__57082;
continue;
} else {
var obj = cljs.core.first(seq__56991__$1);
ghostwheel.logging.plain_log(obj);


var G__57086 = cljs.core.next(seq__56991__$1);
var G__57087 = null;
var G__57088 = (0);
var G__57089 = (0);
seq__56991 = G__57086;
chunk__56992 = G__57087;
count__56993 = G__57088;
i__56994 = G__57089;
continue;
}
} else {
return null;
}
}
break;
}

break;
case "js-console":
return console.log.apply(console,cljs.core.to_array(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(format_strings,objs)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56990__$1)].join('')));

}
});

ghostwheel.logging.log_raw.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
ghostwheel.logging.log_raw.cljs$lang$applyTo = (function (seq56988){
var G__56989 = cljs.core.first(seq56988);
var seq56988__$1 = cljs.core.next(seq56988);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56989,seq56988__$1);
});

ghostwheel.logging.error = (function ghostwheel$logging$error(msg){
var G__56997 = ghostwheel.logging._STAR_report_output_STAR_;
var G__56997__$1 = (((G__56997 instanceof cljs.core.Keyword))?G__56997.fqn:null);
switch (G__56997__$1) {
case "repl":
ghostwheel.logging.plain_log("ERROR:");

return ghostwheel.logging.plain_log(msg);

break;
case "js-console":
return console.error(msg);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56997__$1)].join('')));

}
});
ghostwheel.logging.plain_group = (function ghostwheel$logging$plain_group(label){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$0();

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(["|> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join(''));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging._STAR_nesting,(function (p1__56998_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__56998_SHARP_),"| "].join('');
}));
});
ghostwheel.logging.group_STAR_ = (function ghostwheel$logging$group_STAR_(var_args){
var G__57000 = arguments.length;
switch (G__57000) {
case 2:
return ghostwheel.logging.group_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return ghostwheel.logging.group_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ghostwheel.logging.group_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (open_QMARK_,label){
return ghostwheel.logging.group_STAR_.cljs$core$IFn$_invoke$arity$3(open_QMARK_,label,null);
});

ghostwheel.logging.group_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (open_QMARK_,label,style){
var styled_label = ghostwheel.logging.get_styled_label(label,style,ghostwheel.logging._STAR_report_output_STAR_);
var G__57001 = ghostwheel.logging._STAR_report_output_STAR_;
var G__57001__$1 = (((G__57001 instanceof cljs.core.Keyword))?G__57001.fqn:null);
switch (G__57001__$1) {
case "repl":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging.plain_group,styled_label);

break;
case "js-console":
return (cljs.core.truth_(open_QMARK_)?console.group:console.groupCollapsed).apply(console,cljs.core.to_array(styled_label));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57001__$1)].join('')));

}
});

ghostwheel.logging.group_STAR_.cljs$lang$maxFixedArity = 3;

ghostwheel.logging.group = (function ghostwheel$logging$group(var_args){
var G__57007 = arguments.length;
switch (G__57007) {
case 1:
return ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$1 = (function (label){
return ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2(label,null);
});

ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2 = (function (label,style){
return ghostwheel.logging.group_STAR_.cljs$core$IFn$_invoke$arity$3(true,label,style);
});

ghostwheel.logging.group.cljs$lang$maxFixedArity = 2;

ghostwheel.logging.group_collapsed = (function ghostwheel$logging$group_collapsed(var_args){
var G__57009 = arguments.length;
switch (G__57009) {
case 1:
return ghostwheel.logging.group_collapsed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ghostwheel.logging.group_collapsed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ghostwheel.logging.group_collapsed.cljs$core$IFn$_invoke$arity$1 = (function (label){
return ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2(label,null);
});

ghostwheel.logging.group_collapsed.cljs$core$IFn$_invoke$arity$2 = (function (label,style){
return ghostwheel.logging.group_STAR_.cljs$core$IFn$_invoke$arity$3(false,label,style);
});

ghostwheel.logging.group_collapsed.cljs$lang$maxFixedArity = 2;

var plain_group_end_57101 = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging._STAR_nesting,(function (p1__57010_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__57010_SHARP_,(0),(function (){var x__4219__auto__ = (0);
var y__4220__auto__ = (cljs.core.count(p1__57010_SHARP_) - (2));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})());
}));
});
ghostwheel.logging.group_end = ((function (plain_group_end_57101){
return (function ghostwheel$logging$group_end(){
var G__57011 = ghostwheel.logging._STAR_report_output_STAR_;
var G__57011__$1 = (((G__57011 instanceof cljs.core.Keyword))?G__57011.fqn:null);
switch (G__57011__$1) {
case "repl":
return plain_group_end_57101();

break;
case "js-console":
return console.groupEnd();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57011__$1)].join('')));

}
});})(plain_group_end_57101))
;
ghostwheel.logging.log_bold = (function ghostwheel$logging$log_bold(msg){
return ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","weight","ghostwheel.logging/weight",-88030216),"bold"], null));
});
ghostwheel.logging.clog = (function ghostwheel$logging$clog(data){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(data);

return data;
});
/**
 * Pretty console log
 */
ghostwheel.logging.pr_clog = (function ghostwheel$logging$pr_clog(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57103 = arguments.length;
var i__4731__auto___57104 = (0);
while(true){
if((i__4731__auto___57104 < len__4730__auto___57103)){
args__4736__auto__.push((arguments[i__4731__auto___57104]));

var G__57105 = (i__4731__auto___57104 + (1));
i__4731__auto___57104 = G__57105;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return ghostwheel.logging.pr_clog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

ghostwheel.logging.pr_clog.cljs$core$IFn$_invoke$arity$variadic = (function (label,data,p__57015){
var vec__57016 = p__57015;
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57016,(0),null);
if(cljs.core.truth_(data)){
ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2(label,style);

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(data);

ghostwheel.logging.group_end();
} else {
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$2(label,style);
}

return data;
});

ghostwheel.logging.pr_clog.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
ghostwheel.logging.pr_clog.cljs$lang$applyTo = (function (seq57012){
var G__57013 = cljs.core.first(seq57012);
var seq57012__$1 = cljs.core.next(seq57012);
var G__57014 = cljs.core.first(seq57012__$1);
var seq57012__$2 = cljs.core.next(seq57012__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57013,G__57014,seq57012__$2);
});


//# sourceMappingURL=ghostwheel.logging.js.map
