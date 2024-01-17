goog.provide('com.fulcrologic.fulcro.algorithms.tx_processing');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('cljs.spec.alpha');
goog.require('com.fulcrologic.fulcro.algorithms.lookup');
goog.require('com.fulcrologic.fulcro.algorithms.tempid');
goog.require('com.fulcrologic.fulcro.algorithms.do_not_use');
goog.require('com.fulcrologic.fulcro.algorithms.scheduling');
goog.require('com.fulcrologic.fulcro.mutations');
goog.require('com.fulcrologic.fulcro.specs');
goog.require('com.fulcrologic.fulcro.inspect.inspect_client');
goog.require('ghostwheel.core');
goog.require('edn_query_language.core');
goog.require('taoensso.encore');
goog.require('taoensso.timbre');


/**
 * Returns the remotes map from an app
 */
com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remotes = (function com$fulcrologic$fulcro$algorithms$tx_processing$app__GT_remotes(app__$1){
return new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
});
/**
 * Returns a set of the names of the remotes from an app
 */
com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names = (function com$fulcrologic$fulcro$algorithms$tx_processing$app__GT_remote_names(app__$1){
return cljs.core.set(cljs.core.keys(new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)))));
});
/**
 * Splits the given send queue into two send queues:
 *   [parallel-items sequential-items].
 */
com.fulcrologic.fulcro.algorithms.tx_processing.extract_parallel = (function com$fulcrologic$fulcro$algorithms$tx_processing$extract_parallel(sends){
var parallel_QMARK_ = (function (p__62932){
var map__62934 = p__62932;
var map__62934__$1 = (((((!((map__62934 == null))))?(((((map__62934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62934):map__62934);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62934__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
return cljs.core.boolean$((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"parallel?","parallel?",-25273892).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","parallel?","com.fulcrologic.fulcro.algorithms.tx-processing/parallel?",1623289535).cljs$core$IFn$_invoke$arity$1(options);
}
})());
});
var map__62925 = cljs.core.group_by(parallel_QMARK_,sends);
var map__62925__$1 = (((((!((map__62925 == null))))?(((((map__62925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62925):map__62925);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62925__$1,true);
var sequential = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62925__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(parallel),cljs.core.vec(sequential)], null);
});
/**
 * Check if the given `test` predicate is true for an AST node or for all the immediate children of an AST tree.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.every_ast_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$every_ast_QMARK_(ast_node_or_tree,test){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast_node_or_tree))){
return cljs.core.every_QMARK_(test,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast_node_or_tree));
} else {
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(ast_node_or_tree) : test.call(null,ast_node_or_tree));
}
});
/**
 * Returns true if the given AST node or tree represents a mutation or sequence of mutations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.mutation_ast_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$mutation_ast_QMARK_(ast_node_or_tree){
return com.fulcrologic.fulcro.algorithms.tx_processing.every_ast_QMARK_(ast_node_or_tree,(function (p1__62949_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__62949_SHARP_));
}));
});
/**
 * Returns true if the given AST node or tree represents a mutation or sequence of mutations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.query_ast_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$query_ast_QMARK_(ast_node_or_tree){
return com.fulcrologic.fulcro.algorithms.tx_processing.every_ast_QMARK_(ast_node_or_tree,(function (p1__62950_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__62950_SHARP_));
}));
});
/**
 * Sort function on a send queue. Leaves any active nodes in front, and sorts the remainder of the queue so that writes
 *   appear before reads, without changing the relative order in blocks of reads/writes.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.sort_queue_writes_before_reads = (function com$fulcrologic$fulcro$algorithms$tx_processing$sort_queue_writes_before_reads(send_queue){
var vec__62954 = cljs.core.split_with(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),send_queue);
var active_queue = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62954,(0),null);
var send_queue__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62954,(1),null);
var id_sequence = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__62954,active_queue,send_queue__$1){
return (function (n){
return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.first(n));
});})(vec__62954,active_queue,send_queue__$1))
,cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),send_queue__$1));
var clusters = cljs.core.group_by(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),cljs.core.vec(send_queue__$1));
var map__62957 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__62954,active_queue,send_queue__$1,id_sequence,clusters){
return (function (result,id){
var vec__62958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clusters,id);
var seq__62959 = cljs.core.seq(vec__62958);
var first__62960 = cljs.core.first(seq__62959);
var seq__62959__$1 = cljs.core.next(seq__62959);
var map__62961 = first__62960;
var map__62961__$1 = (((((!((map__62961 == null))))?(((((map__62961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62961):map__62961);
var n = map__62961__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62961__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var _ = seq__62959__$1;
var cluster = vec__62958;
if((ast == null)){
return result;
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.algorithms.tx_processing.query_ast_QMARK_(ast))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.into,cluster);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.algorithms.tx_processing.mutation_ast_QMARK_(ast))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.Keyword(null,"writes","writes",-102226269),cljs.core.into,cluster);
} else {
return result;

}
}
}
});})(vec__62954,active_queue,send_queue__$1,id_sequence,clusters))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"writes","writes",-102226269),cljs.core.PersistentVector.EMPTY], null),id_sequence);
var map__62957__$1 = (((((!((map__62957 == null))))?(((((map__62957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62957):map__62957);
var reads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62957__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var writes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62957__$1,new cljs.core.Keyword(null,"writes","writes",-102226269));
var send_queue__$2 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(active_queue,writes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reads], 0)));
return send_queue__$2;
});
com.fulcrologic.fulcro.algorithms.tx_processing.top_keys = (function com$fulcrologic$fulcro$algorithms$tx_processing$top_keys(p__62965){
var map__62966 = p__62965;
var map__62966__$1 = (((((!((map__62966 == null))))?(((((map__62966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62966):map__62966);
var ast = map__62966__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62966__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62966__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62966__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),type)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587)),children);
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([key]);
}
});
/**
 * Takes a send queue and returns a map containing a new combined send node that can act as a single network request,
 *   along with the updated send queue.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.combine_sends = (function com$fulcrologic$fulcro$algorithms$tx_processing$combine_sends(app__$1,remote_name,send_queue){
var vec__62969 = cljs.core.split_with(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),send_queue);
var active_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62969,(0),null);
var send_queue__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62969,(1),null);
var send_queue__$2 = com.fulcrologic.fulcro.algorithms.tx_processing.sort_queue_writes_before_reads(cljs.core.vec(send_queue__$1));
var id_to_send = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.first(send_queue__$2));
var options = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(cljs.core.first(send_queue__$2));
var vec__62972 = cljs.core.split_with(((function (vec__62969,active_nodes,send_queue__$1,send_queue__$2,id_to_send,options){
return (function (p1__62968_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id_to_send,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(p1__62968_SHARP_));
});})(vec__62969,active_nodes,send_queue__$1,send_queue__$2,id_to_send,options))
,send_queue__$2);
var to_send = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62972,(0),null);
var to_defer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62972,(1),null);
var tx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__62969,active_nodes,send_queue__$1,send_queue__$2,id_to_send,options,vec__62972,to_send,to_defer){
return (function (acc,p__62975){
var map__62976 = p__62975;
var map__62976__$1 = (((((!((map__62976 == null))))?(((((map__62976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62976):map__62976);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62976__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var tx = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast)))?edn_query_language.core.ast__GT_query(ast):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [edn_query_language.core.ast__GT_query(ast)], null));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,tx);
});})(vec__62969,active_nodes,send_queue__$1,send_queue__$2,id_to_send,options,vec__62972,to_send,to_defer))
,cljs.core.PersistentVector.EMPTY,to_send);
var ast = edn_query_language.core.query__GT_ast(tx);
var combined_node_id = com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$core$IFn$_invoke$arity$0();
var combined_node_idx = (0);
var combined_node = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),combined_node_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),combined_node_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),ast,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),((function (vec__62969,active_nodes,send_queue__$1,send_queue__$2,id_to_send,options,vec__62972,to_send,to_defer,tx,ast,combined_node_id,combined_node_idx){
return (function (p__62978){
var map__62979 = p__62978;
var map__62979__$1 = (((((!((map__62979 == null))))?(((((map__62979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62979):map__62979);
var combined_result = map__62979__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62979__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var seq__62981 = cljs.core.seq(to_send);
var chunk__62982 = null;
var count__62983 = (0);
var i__62984 = (0);
while(true){
if((i__62984 < count__62983)){
var map__62989 = chunk__62982.cljs$core$IIndexed$_nth$arity$2(null,i__62984);
var map__62989__$1 = (((((!((map__62989 == null))))?(((((map__62989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62989):map__62989);
var update_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62989__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755));
if(cljs.core.truth_(update_handler)){
(update_handler.cljs$core$IFn$_invoke$arity$1 ? update_handler.cljs$core$IFn$_invoke$arity$1(combined_result) : update_handler.call(null,combined_result));
} else {
}


var G__63608 = seq__62981;
var G__63609 = chunk__62982;
var G__63610 = count__62983;
var G__63611 = (i__62984 + (1));
seq__62981 = G__63608;
chunk__62982 = G__63609;
count__62983 = G__63610;
i__62984 = G__63611;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__62981);
if(temp__5804__auto__){
var seq__62981__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62981__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__62981__$1);
var G__63614 = cljs.core.chunk_rest(seq__62981__$1);
var G__63615 = c__4550__auto__;
var G__63616 = cljs.core.count(c__4550__auto__);
var G__63617 = (0);
seq__62981 = G__63614;
chunk__62982 = G__63615;
count__62983 = G__63616;
i__62984 = G__63617;
continue;
} else {
var map__62991 = cljs.core.first(seq__62981__$1);
var map__62991__$1 = (((((!((map__62991 == null))))?(((((map__62991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62991):map__62991);
var update_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62991__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755));
if(cljs.core.truth_(update_handler)){
(update_handler.cljs$core$IFn$_invoke$arity$1 ? update_handler.cljs$core$IFn$_invoke$arity$1(combined_result) : update_handler.call(null,combined_result));
} else {
}


var G__63622 = cljs.core.next(seq__62981__$1);
var G__63623 = null;
var G__63624 = (0);
var G__63625 = (0);
seq__62981 = G__63622;
chunk__62982 = G__63623;
count__62983 = G__63624;
i__62984 = G__63625;
continue;
}
} else {
return null;
}
}
break;
}
});})(vec__62969,active_nodes,send_queue__$1,send_queue__$2,id_to_send,options,vec__62972,to_send,to_defer,tx,ast,combined_node_id,combined_node_idx))
,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),((function (vec__62969,active_nodes,send_queue__$1,send_queue__$2,id_to_send,options,vec__62972,to_send,to_defer,tx,ast,combined_node_id,combined_node_idx){
return (function (p__62993){
var map__62994 = p__62993;
var map__62994__$1 = (((((!((map__62994 == null))))?(((((map__62994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62994):map__62994);
var combined_result = map__62994__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62994__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var seq__62996_63632 = cljs.core.seq(to_send);
var chunk__62997_63633 = null;
var count__62998_63634 = (0);
var i__62999_63635 = (0);
while(true){
if((i__62999_63635 < count__62998_63634)){
var map__63013_63636 = chunk__62997_63633.cljs$core$IIndexed$_nth$arity$2(null,i__62999_63635);
var map__63013_63637__$1 = (((((!((map__63013_63636 == null))))?(((((map__63013_63636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63013_63636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63013_63636):map__63013_63636);
var ast_63638__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63013_63637__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var result_handler_63639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63013_63637__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var new_body_63642 = cljs.core.select_keys(body,com.fulcrologic.fulcro.algorithms.tx_processing.top_keys(ast_63638__$1));
var result_63643 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(combined_result,new cljs.core.Keyword(null,"body","body",-2049205669),new_body_63642);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})())){
try{var map__63020_63648 = result_63643;
var map__63020_63649__$1 = (((((!((map__63020_63648 == null))))?(((((map__63020_63648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63020_63648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63020_63648):map__63020_63648);
var status_code_63650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63020_63649__$1,new cljs.core.Keyword(null,"status-code","status-code",-1060410130));
var body_63651__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63020_63649__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status_code_63650)){
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app__$1,remote_name,combined_node_id,body_63651__$1);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,remote_name,cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_code_63650));
}
}catch (e63018){var e_63656 = e63018;
}} else {
}

(result_handler_63639.cljs$core$IFn$_invoke$arity$1 ? result_handler_63639.cljs$core$IFn$_invoke$arity$1(result_63643) : result_handler_63639.call(null,result_63643));


var G__63657 = seq__62996_63632;
var G__63658 = chunk__62997_63633;
var G__63659 = count__62998_63634;
var G__63660 = (i__62999_63635 + (1));
seq__62996_63632 = G__63657;
chunk__62997_63633 = G__63658;
count__62998_63634 = G__63659;
i__62999_63635 = G__63660;
continue;
} else {
var temp__5804__auto___63663 = cljs.core.seq(seq__62996_63632);
if(temp__5804__auto___63663){
var seq__62996_63664__$1 = temp__5804__auto___63663;
if(cljs.core.chunked_seq_QMARK_(seq__62996_63664__$1)){
var c__4550__auto___63665 = cljs.core.chunk_first(seq__62996_63664__$1);
var G__63666 = cljs.core.chunk_rest(seq__62996_63664__$1);
var G__63667 = c__4550__auto___63665;
var G__63668 = cljs.core.count(c__4550__auto___63665);
var G__63669 = (0);
seq__62996_63632 = G__63666;
chunk__62997_63633 = G__63667;
count__62998_63634 = G__63668;
i__62999_63635 = G__63669;
continue;
} else {
var map__63026_63670 = cljs.core.first(seq__62996_63664__$1);
var map__63026_63671__$1 = (((((!((map__63026_63670 == null))))?(((((map__63026_63670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63026_63670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63026_63670):map__63026_63670);
var ast_63672__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63026_63671__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var result_handler_63673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63026_63671__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var new_body_63680 = cljs.core.select_keys(body,com.fulcrologic.fulcro.algorithms.tx_processing.top_keys(ast_63672__$1));
var result_63681 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(combined_result,new cljs.core.Keyword(null,"body","body",-2049205669),new_body_63680);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})())){
try{var map__63032_63682 = result_63681;
var map__63032_63683__$1 = (((((!((map__63032_63682 == null))))?(((((map__63032_63682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63032_63682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63032_63682):map__63032_63682);
var status_code_63684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63032_63683__$1,new cljs.core.Keyword(null,"status-code","status-code",-1060410130));
var body_63685__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63032_63683__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status_code_63684)){
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app__$1,remote_name,combined_node_id,body_63685__$1);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,remote_name,cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_code_63684));
}
}catch (e63031){var e_63692 = e63031;
}} else {
}

(result_handler_63673.cljs$core$IFn$_invoke$arity$1 ? result_handler_63673.cljs$core$IFn$_invoke$arity$1(result_63681) : result_handler_63673.call(null,result_63681));


var G__63693 = cljs.core.next(seq__62996_63664__$1);
var G__63694 = null;
var G__63695 = (0);
var G__63696 = (0);
seq__62996_63632 = G__63693;
chunk__62997_63633 = G__63694;
count__62998_63634 = G__63695;
i__62999_63635 = G__63696;
continue;
}
} else {
}
}
break;
}

return (com.fulcrologic.fulcro.algorithms.tx_processing.remove_send_BANG_.cljs$core$IFn$_invoke$arity$4 ? com.fulcrologic.fulcro.algorithms.tx_processing.remove_send_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,remote_name,combined_node_id,combined_node_idx) : com.fulcrologic.fulcro.algorithms.tx_processing.remove_send_BANG_.call(null,app__$1,remote_name,combined_node_id,combined_node_idx));
});})(vec__62969,active_nodes,send_queue__$1,send_queue__$2,id_to_send,options,vec__62972,to_send,to_defer,tx,ast,combined_node_id,combined_node_idx))
,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),true], null);
if(cljs.core.seq(to_send)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),combined_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(active_nodes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [combined_node], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([to_defer], 0)))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),send_queue__$2], null);
}
});
/**
 * Process the send against the user-defined remote. Catches exceptions and calls error handler with status code 500
 *   if the remote itself throws exceptions.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$net_send_BANG_(app__$1,send_node,remote_name){
var b2__46796__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remotes(app__$1),remote_name);
if(cljs.core.truth_(b2__46796__auto__)){
var remote = b2__46796__auto__;
var b2__46796__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(remote,new cljs.core.Keyword(null,"transmit!","transmit!",-107149039));
if(cljs.core.truth_(b2__46796__auto____$1)){
var transmit_BANG_ = b2__46796__auto____$1;
var b2__46796__auto____$2 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"global-eql-transform","global-eql-transform",145441548));
if(cljs.core.truth_(b2__46796__auto____$2)){
var query_transform = b2__46796__auto____$2;
var b2__46796__auto____$3 = (cljs.core.truth_(query_transform)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(send_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),query_transform):send_node);
if(cljs.core.truth_(b2__46796__auto____$3)){
var send_node__$1 = b2__46796__auto____$3;
try{if(cljs.core.truth_((function (){var or__4131__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})())){
try{var tx_63717 = edn_query_language.core.ast__GT_query(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373).cljs$core$IFn$_invoke$arity$1(send_node__$1));
com.fulcrologic.fulcro.inspect.inspect_client.send_started_BANG_(app__$1,remote_name,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(send_node__$1),tx_63717);
}catch (e63048){var e_63718 = e63048;
}} else {
}

return (transmit_BANG_.cljs$core$IFn$_invoke$arity$2 ? transmit_BANG_.cljs$core$IFn$_invoke$arity$2(remote,send_node__$1) : transmit_BANG_.call(null,remote,send_node__$1));
}catch (e63041){var e = e63041;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,154,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,send_node__$1,b2__46796__auto____$3,query_transform,b2__46796__auto____$2,transmit_BANG_,b2__46796__auto____$1,remote,b2__46796__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Send threw an exception!"], null);
});})(e,send_node__$1,b2__46796__auto____$3,query_transform,b2__46796__auto____$2,transmit_BANG_,b2__46796__auto____$1,remote,b2__46796__auto__))
,null)),null,461784098);

try{if(cljs.core.truth_((function (){var or__4131__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})())){
try{com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(send_node__$1),"Transmit Exception");
}catch (e63044){var e_63725__$1 = e63044;
}} else {
}

var G__63046 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"client-exception","client-exception",-1357213384),e], null);
var fexpr__63045 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node__$1);
return (fexpr__63045.cljs$core$IFn$_invoke$arity$1 ? fexpr__63045.cljs$core$IFn$_invoke$arity$1(G__63046) : fexpr__63045.call(null,G__63046));
}catch (e63043){var e__$1 = e63043;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"fatal","fatal",1874419888),"com.fulcrologic.fulcro.algorithms.tx-processing",null,161,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e__$1,e,send_node__$1,b2__46796__auto____$3,query_transform,b2__46796__auto____$2,transmit_BANG_,b2__46796__auto____$1,remote,b2__46796__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,"Error handler failed to handle exception!"], null);
});})(e__$1,e,send_node__$1,b2__46796__auto____$3,query_transform,b2__46796__auto____$2,transmit_BANG_,b2__46796__auto____$1,remote,b2__46796__auto__))
,null)),null,523925575);
}}} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,163,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (b2__46796__auto____$3,query_transform,b2__46796__auto____$2,transmit_BANG_,b2__46796__auto____$1,remote,b2__46796__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transmit was not defined on remote",remote_name], null);
});})(b2__46796__auto____$3,query_transform,b2__46796__auto____$2,transmit_BANG_,b2__46796__auto____$1,remote,b2__46796__auto__))
,null)),null,1055624363);

var G__63053 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"message","message",-406056002),"Transmit missing on remote."], null);
var fexpr__63052 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__63052.cljs$core$IFn$_invoke$arity$1 ? fexpr__63052.cljs$core$IFn$_invoke$arity$1(G__63053) : fexpr__63052.call(null,G__63053));
}
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,163,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (b2__46796__auto____$2,transmit_BANG_,b2__46796__auto____$1,remote,b2__46796__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transmit was not defined on remote",remote_name], null);
});})(b2__46796__auto____$2,transmit_BANG_,b2__46796__auto____$1,remote,b2__46796__auto__))
,null)),null,-1501472263);

var G__63055 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"message","message",-406056002),"Transmit missing on remote."], null);
var fexpr__63054 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__63054.cljs$core$IFn$_invoke$arity$1 ? fexpr__63054.cljs$core$IFn$_invoke$arity$1(G__63055) : fexpr__63054.call(null,G__63055));
}
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,163,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (b2__46796__auto____$1,remote,b2__46796__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transmit was not defined on remote",remote_name], null);
});})(b2__46796__auto____$1,remote,b2__46796__auto__))
,null)),null,174621751);

var G__63059 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"message","message",-406056002),"Transmit missing on remote."], null);
var fexpr__63058 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__63058.cljs$core$IFn$_invoke$arity$1 ? fexpr__63058.cljs$core$IFn$_invoke$arity$1(G__63059) : fexpr__63058.call(null,G__63059));
}
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,163,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (b2__46796__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transmit was not defined on remote",remote_name], null);
});})(b2__46796__auto__))
,null)),null,2073378905);

var G__63061 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"message","message",-406056002),"Transmit missing on remote."], null);
var fexpr__63060 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__63060.cljs$core$IFn$_invoke$arity$1 ? fexpr__63060.cljs$core$IFn$_invoke$arity$1(G__63061) : fexpr__63060.call(null,G__63061));
}
});
/**
 * Process the send queues against the remotes. Updates the send queues on the app and returns the updated send queues.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.process_send_queues_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$process_send_queues_BANG_(p__63066){
var map__63067 = p__63066;
var map__63067__$1 = (((((!((map__63067 == null))))?(((((map__63067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63067):map__63067);
var app__$1 = map__63067__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63067__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var send_queues = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom));
var remote_names = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var new_send_queues = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (send_queues,remote_names,map__63067,map__63067__$1,app__$1,runtime_atom){
return (function (new_send_queues,remote){
var send_queue = cljs.core.get.cljs$core$IFn$_invoke$arity$3(send_queues,remote,cljs.core.PersistentVector.EMPTY);
var vec__63071 = com.fulcrologic.fulcro.algorithms.tx_processing.extract_parallel(send_queue);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63071,(0),null);
var serial = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63071,(1),null);
var front = cljs.core.first(serial);
var seq__63074_63744 = cljs.core.seq(p);
var chunk__63075_63745 = null;
var count__63076_63746 = (0);
var i__63077_63747 = (0);
while(true){
if((i__63077_63747 < count__63076_63746)){
var item_63748 = chunk__63075_63745.cljs$core$IIndexed$_nth$arity$2(null,i__63077_63747);
com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,item_63748,remote);


var G__63750 = seq__63074_63744;
var G__63751 = chunk__63075_63745;
var G__63752 = count__63076_63746;
var G__63753 = (i__63077_63747 + (1));
seq__63074_63744 = G__63750;
chunk__63075_63745 = G__63751;
count__63076_63746 = G__63752;
i__63077_63747 = G__63753;
continue;
} else {
var temp__5804__auto___63755 = cljs.core.seq(seq__63074_63744);
if(temp__5804__auto___63755){
var seq__63074_63756__$1 = temp__5804__auto___63755;
if(cljs.core.chunked_seq_QMARK_(seq__63074_63756__$1)){
var c__4550__auto___63757 = cljs.core.chunk_first(seq__63074_63756__$1);
var G__63758 = cljs.core.chunk_rest(seq__63074_63756__$1);
var G__63759 = c__4550__auto___63757;
var G__63760 = cljs.core.count(c__4550__auto___63757);
var G__63761 = (0);
seq__63074_63744 = G__63758;
chunk__63075_63745 = G__63759;
count__63076_63746 = G__63760;
i__63077_63747 = G__63761;
continue;
} else {
var item_63762 = cljs.core.first(seq__63074_63756__$1);
com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,item_63762,remote);


var G__63765 = cljs.core.next(seq__63074_63756__$1);
var G__63766 = null;
var G__63767 = (0);
var G__63768 = (0);
seq__63074_63744 = G__63765;
chunk__63075_63745 = G__63766;
count__63076_63746 = G__63767;
i__63077_63747 = G__63768;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517).cljs$core$IFn$_invoke$arity$1(front))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_send_queues,remote,serial);
} else {
var map__63082 = com.fulcrologic.fulcro.algorithms.tx_processing.combine_sends(app__$1,remote,serial);
var map__63082__$1 = (((((!((map__63082 == null))))?(((((map__63082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63082):map__63082);
var send_queue__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63082__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
var send_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63082__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157));
if(cljs.core.truth_(send_node)){
com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,send_node,remote);
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_send_queues,remote,send_queue__$1);
}
});})(send_queues,remote_names,map__63067,map__63067__$1,app__$1,runtime_atom))
,cljs.core.PersistentArrayMap.EMPTY,remote_names);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),new_send_queues);

return new_send_queues;
});
com.fulcrologic.fulcro.algorithms.tx_processing.tx_node = (function com$fulcrologic$fulcro$algorithms$tx_processing$tx_node(var_args){
var G__63087 = arguments.length;
switch (G__63087) {
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$1 = (function (tx){
return com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$2(tx,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$2 = (function (tx,options){
var ast = edn_query_language.core.query__GT_ast(tx);
var ast_nodes = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var elements = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (ast,ast_nodes){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$txfilt_STAR_(n){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(n));
});})(ast,ast_nodes))
),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(((function (ast,ast_nodes){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$__GT_txnode_STAR_(idx,ast_node){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477),ast_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660),cljs.core.PersistentArrayMap.EMPTY], null);
});})(ast,ast_nodes))
)),ast_nodes);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","created","com.fulcrologic.fulcro.algorithms.tx-processing/created",859806789),com.fulcrologic.fulcro.algorithms.do_not_use.now(),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),tx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),elements], null);
});

com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$lang$maxFixedArity = 2;

com.fulcrologic.fulcro.algorithms.tx_processing.build_env = (function com$fulcrologic$fulcro$algorithms$tx_processing$build_env(var_args){
var G__63094 = arguments.length;
switch (G__63094) {
case 3:
return com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3 = (function (app__$1,p__63095,addl){
var map__63096 = p__63095;
var map__63096__$1 = (((((!((map__63096 == null))))?(((((map__63096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63096):map__63096);
var tx_node = map__63096__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63096__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var map__63098 = options;
var map__63098__$1 = (((((!((map__63098 == null))))?(((((map__63098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63098):map__63098);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63098__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63098__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var G__63101 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([addl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1),new cljs.core.Keyword(null,"app","app",-560961707),app__$1], null)], 0));
var G__63101__$1 = (cljs.core.truth_(options)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63101,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options):G__63101);
var G__63101__$2 = (cljs.core.truth_(ref)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63101__$1,new cljs.core.Keyword(null,"ref","ref",1289896967),ref):G__63101__$1);
if(cljs.core.truth_(component)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63101__$2,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__63101__$2;
}
});

com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__63102){
var map__63103 = p__63102;
var map__63103__$1 = (((((!((map__63103 == null))))?(((((map__63103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63103):map__63103);
var tx_node = map__63103__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63103__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
return com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,cljs.core.PersistentArrayMap.EMPTY);
});

com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$lang$maxFixedArity = 3;

/**
 * Run through the elements on the given tx-node and do the side-effect-free dispatch. This generates the dispatch map
 *   of things to do on that node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_elements = (function com$fulcrologic$fulcro$algorithms$tx_processing$dispatch_elements(tx_node,env,dispatch_fn){
var do_dispatch = (function com$fulcrologic$fulcro$algorithms$tx_processing$dispatch_elements_$_run_STAR_(env__$1){
try{return (dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? dispatch_fn.cljs$core$IFn$_invoke$arity$1(env__$1) : dispatch_fn.call(null,env__$1));
}catch (e63107){var e = e63107;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,241,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Dispatch of mutation failed with an exception. No dispatch generated."], null);
});})(e))
,null)),null,-1803438558);

return cljs.core.PersistentArrayMap.EMPTY;
}});
var dispatch = ((function (do_dispatch){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$dispatch_elements_$_dispatch_STAR_(p__63111){
var map__63112 = p__63111;
var map__63112__$1 = (((((!((map__63112 == null))))?(((((map__63112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63112):map__63112);
var ele = map__63112__$1;
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63112__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var map__63115 = original_ast_node;
var map__63115__$1 = (((((!((map__63115 == null))))?(((((map__63115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63115):map__63115);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63115__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node);
var G__63118 = ele;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63118,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660),do_dispatch(env__$1));
} else {
return G__63118;
}
});})(do_dispatch))
;
var dispatch_all = ((function (do_dispatch,dispatch){
return (function (eles){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(dispatch,eles);
});})(do_dispatch,dispatch))
;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(tx_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),dispatch_all);
});
/**
 * Activate all of the transactions that have been submitted since the last activation. After the items are activated
 *   a single processing step will run for the active queue.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.activate_submissions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$activate_submissions_BANG_(p__63122){
var map__63123 = p__63122;
var map__63123__$1 = (((((!((map__63123 == null))))?(((((map__63123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63123):map__63123);
var app__$1 = map__63123__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63123__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var dispatched_nodes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__63123,map__63123__$1,app__$1,runtime_atom){
return (function (p1__63120_SHARP_){
return com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_elements(p1__63120_SHARP_,com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,p1__63120_SHARP_),com.fulcrologic.fulcro.mutations.mutate);
});})(map__63123,map__63123__$1,app__$1,runtime_atom))
,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(runtime_atom,((function (dispatched_nodes,map__63123,map__63123__$1,app__$1,runtime_atom){
return (function (a){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(a,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),((function (dispatched_nodes,map__63123,map__63123__$1,app__$1,runtime_atom){
return (function (p1__63121_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,p1__63121_SHARP_,dispatched_nodes);
});})(dispatched_nodes,map__63123,map__63123__$1,app__$1,runtime_atom))
),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154),cljs.core.PersistentVector.EMPTY);
});})(dispatched_nodes,map__63123,map__63123__$1,app__$1,runtime_atom))
);

return (com.fulcrologic.fulcro.algorithms.tx_processing.process_queue_BANG_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.algorithms.tx_processing.process_queue_BANG_.cljs$core$IFn$_invoke$arity$1(app__$1) : com.fulcrologic.fulcro.algorithms.tx_processing.process_queue_BANG_.call(null,app__$1));
});
/**
 * Schedule activation of submitted transactions.  The default implementation copies all submitted transactions onto
 * the active queue and immediately does an active queue processing step.  If `tm` is not supplied (in ms) it defaults to 10ms.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$schedule_activation_BANG_(var_args){
var G__63126 = arguments.length;
switch (G__63126) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tm){
return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","activation-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/activation-scheduled?",-955561668),com.fulcrologic.fulcro.algorithms.tx_processing.activate_submissions_BANG_,tm);
});

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(10));
});

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_activation_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Schedule a processing of the active queue, which will advance the active transactions by a step.
 * If `tm` is not supplied (in ms) it defaults to 10ms.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$schedule_queue_processing_BANG_(var_args){
var G__63132 = arguments.length;
switch (G__63132) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tm){
return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","queue-processing-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/queue-processing-scheduled?",-2065549690),com.fulcrologic.fulcro.algorithms.tx_processing.process_queue_BANG_,tm);
});

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(10));
});

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Schedule actual network activity. If `tm` is not supplied (in ms) it defaults to 0ms.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$schedule_sends_BANG_(var_args){
var G__63138 = arguments.length;
switch (G__63138) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tm){
return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","sends-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/sends-scheduled?",-844941333),com.fulcrologic.fulcro.algorithms.tx_processing.process_send_queues_BANG_,tm);
});

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
});

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Runs any incomplete and non-blocked optimistic operations on a node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.advance_actions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$advance_actions_BANG_(app__$1,p__63143){
var map__63144 = p__63143;
var map__63144__$1 = (((((!((map__63144 == null))))?(((((map__63144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63144):map__63144);
var node = map__63144__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63144__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63144__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var reduction = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (remotes,map__63144,map__63144__$1,node,id,elements){
return (function (p__63146,element){
var map__63147 = p__63146;
var map__63147__$1 = (((((!((map__63147 == null))))?(((((map__63147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63147):map__63147);
var acc = map__63147__$1;
var done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63147__$1,new cljs.core.Keyword(null,"done?","done?",-1847001718));
var new_elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63147__$1,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171));
if(cljs.core.truth_(done_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171),cljs.core.conj,element);
} else {
var map__63151 = element;
var map__63151__$1 = (((((!((map__63151 == null))))?(((((map__63151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63151):map__63151);
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63151__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63151__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63151__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63151__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var map__63152 = dispatch;
var map__63152__$1 = (((((!((map__63152 == null))))?(((((map__63152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63152):map__63152);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63152__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var remote_set = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(remotes,cljs.core.set(cljs.core.keys(dispatch)));
var exec_QMARK_ = (function (){var and__4120__auto__ = action;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not((function (){var or__4131__auto__ = done_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__63157 = new cljs.core.Keyword(null,"action","action",-811238024);
return (complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(G__63157) : complete_QMARK_.call(null,G__63157));
}
})());
} else {
return and__4120__auto__;
}
})();
var fully_complete_QMARK_ = (function (){var and__4120__auto__ = (function (){var or__4131__auto__ = exec_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__63159 = new cljs.core.Keyword(null,"action","action",-811238024);
return (complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(G__63159) : complete_QMARK_.call(null,G__63159));
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(remote_set,complete_QMARK_));
} else {
return and__4120__auto__;
}
})();
var state_before = cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1));
var updated_element = (cljs.core.truth_(exec_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","state-before-action","com.fulcrologic.fulcro.algorithms.tx-processing/state-before-action",-1800721778),state_before),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,new cljs.core.Keyword(null,"action","action",-811238024)):element);
var done_QMARK___$1 = cljs.core.not(fully_complete_QMARK_);
var new_acc = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done?","done?",-1847001718),done_QMARK___$1,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_elements,updated_element)], null);
var env = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node], null));
if(cljs.core.truth_(exec_QMARK_)){
try{if(cljs.core.truth_(action)){
(action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(env) : action.call(null,env));
} else {
}
}catch (e63160){var e_63860 = e63160;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,319,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e_63860,map__63151,map__63151__$1,complete_QMARK_,dispatch,original_ast_node,idx,map__63152,map__63152__$1,action,remote_set,exec_QMARK_,fully_complete_QMARK_,state_before,updated_element,done_QMARK___$1,new_acc,env,map__63147,map__63147__$1,acc,done_QMARK_,new_elements,remotes,map__63144,map__63144__$1,node,id,elements){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_63860,"Failure dispatching optimistic action for AST node",element,"of transaction node",node], null);
});})(e_63860,map__63151,map__63151__$1,complete_QMARK_,dispatch,original_ast_node,idx,map__63152,map__63152__$1,action,remote_set,exec_QMARK_,fully_complete_QMARK_,state_before,updated_element,done_QMARK___$1,new_acc,env,map__63147,map__63147__$1,acc,done_QMARK_,new_elements,remotes,map__63144,map__63144__$1,node,id,elements))
,null)),null,-1733202600);
}
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})())){
try{var tx_63864 = edn_query_language.core.ast__GT_query(original_ast_node);
com.fulcrologic.fulcro.inspect.inspect_client.optimistic_action_finished_BANG_(app__$1,env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-id","tx-id",638275288),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"state-before","state-before",759087843),state_before,new cljs.core.Keyword(null,"tx","tx",466630418),tx_63864], null));
}catch (e63161){var e_63868 = e63161;
}} else {
}
} else {
}

return new_acc;
}
});})(remotes,map__63144,map__63144__$1,node,id,elements))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done?","done?",-1847001718),false,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171),cljs.core.PersistentVector.EMPTY], null),elements);
var new_elements = new cljs.core.Keyword(null,"new-elements","new-elements",-378003171).cljs$core$IFn$_invoke$arity$1(reduction);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),new_elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.run_actions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$run_actions_BANG_(app__$1,p__63162){
var map__63163 = p__63162;
var map__63163__$1 = (((((!((map__63163 == null))))?(((((map__63163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63163):map__63163);
var node = map__63163__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63163__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63163__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
var new_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__63163,map__63163__$1,node,id,elements){
return (function (new_elements,element){
var map__63167 = element;
var map__63167__$1 = (((((!((map__63167 == null))))?(((((map__63167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63167):map__63167);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63167__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63167__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63167__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63167__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var map__63168 = dispatch;
var map__63168__$1 = (((((!((map__63168 == null))))?(((((map__63168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63168):map__63168);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63168__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var exec_QMARK_ = (function (){var and__4120__auto__ = action;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not((function (){var G__63178 = new cljs.core.Keyword(null,"action","action",-811238024);
return (complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(G__63178) : complete_QMARK_.call(null,G__63178));
})());
} else {
return and__4120__auto__;
}
})();
var state_before = cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1));
var updated_node = (cljs.core.truth_(exec_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","state-before-action","com.fulcrologic.fulcro.algorithms.tx-processing/state-before-action",-1800721778),state_before),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,new cljs.core.Keyword(null,"action","action",-811238024)):element);
var new_acc = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_elements,updated_node);
var env = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node], null));
if(cljs.core.truth_(exec_QMARK_)){
try{(action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(env) : action.call(null,env));
}catch (e63181){var e_63889 = e63181;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,348,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e_63889,map__63167,map__63167__$1,idx,complete_QMARK_,dispatch,original_ast_node,map__63168,map__63168__$1,action,exec_QMARK_,state_before,updated_node,new_acc,env,map__63163,map__63163__$1,node,id,elements){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_63889,"Failure dispatching optimistic action for AST node",element,"of transaction node",node], null);
});})(e_63889,map__63167,map__63167__$1,idx,complete_QMARK_,dispatch,original_ast_node,map__63168,map__63168__$1,action,exec_QMARK_,state_before,updated_node,new_acc,env,map__63163,map__63163__$1,node,id,elements))
,null)),null,679300079);
}
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})())){
try{var tx_63894 = edn_query_language.core.ast__GT_query(original_ast_node);
com.fulcrologic.fulcro.inspect.inspect_client.optimistic_action_finished_BANG_(app__$1,env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-id","tx-id",638275288),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"state-before","state-before",759087843),state_before,new cljs.core.Keyword(null,"tx","tx",466630418),tx_63894], null));
}catch (e63183){var e_63897 = e63183;
}} else {
}
} else {
}

return new_acc;
});})(map__63163,map__63163__$1,node,id,elements))
,cljs.core.PersistentVector.EMPTY,elements);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),new_elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.fully_complete_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$fully_complete_QMARK_(app__$1,p__63187){
var map__63188 = p__63187;
var map__63188__$1 = (((((!((map__63188 == null))))?(((((map__63188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63188):map__63188);
var tx_node = map__63188__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63188__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
var element_complete_QMARK_ = ((function (map__63188,map__63188__$1,tx_node,elements){
return (function (p__63192){
var map__63193 = p__63192;
var map__63193__$1 = (((((!((map__63193 == null))))?(((((map__63193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63193):map__63193);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63193__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63193__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var active_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),null], null), null),remotes);
var desired_set = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(active_keys,cljs.core.set(cljs.core.keys(dispatch)));
return cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(desired_set,complete_QMARK_));
});})(map__63188,map__63188__$1,tx_node,elements))
;
return cljs.core.every_QMARK_(element_complete_QMARK_,elements);
});
/**
 * Removes the send node (if present) from the send queue on the given remote.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.remove_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$remove_send_BANG_(p__63200,remote,txn_id,ele_idx){
var map__63202 = p__63200;
var map__63202__$1 = (((((!((map__63202 == null))))?(((((map__63202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63202):map__63202);
var app__$1 = map__63202__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63202__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__63205 = cljs.core.deref(runtime_atom);
var map__63205__$1 = (((((!((map__63205 == null))))?(((((map__63205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63205):map__63205);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63205__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807));
var queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var queue__$1 = cljs.core.filterv(((function (map__63205,map__63205__$1,send_queues,queue,map__63202,map__63202__$1,app__$1,runtime_atom){
return (function (p__63207){
var map__63208 = p__63207;
var map__63208__$1 = (((((!((map__63208 == null))))?(((((map__63208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63208):map__63208);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63208__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63208__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
return (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(txn_id,id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ele_idx,idx)))));
});})(map__63205,map__63205__$1,send_queues,queue,map__63202,map__63202__$1,app__$1,runtime_atom))
,queue);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null),queue__$1);
});
/**
 * Record a network result on the given txn/element.
 * If result-key is given it is used, otherwise defaults to ::results. Also removes the network send from the send
 * queue so that remaining items can proceed, and schedules send processing.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$record_result_BANG_(var_args){
var G__63218 = arguments.length;
switch (G__63218) {
case 6:
return com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 5:
return com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (p__63222,txn_id,ele_idx,remote,result,result_key){
var map__63223 = p__63222;
var map__63223__$1 = (((((!((map__63223 == null))))?(((((map__63223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63223):map__63223);
var app__$1 = map__63223__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63223__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var active_queue = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom));
var txn_idx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (active_queue,map__63223,map__63223__$1,app__$1,runtime_atom){
return (function (idx,p__63225){
var map__63226 = p__63225;
var map__63226__$1 = (((((!((map__63226 == null))))?(((((map__63226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63226):map__63226);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63226__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,txn_id)){
return cljs.core.reduced(idx);
} else {
return (idx + (1));
}
});})(active_queue,map__63223,map__63223__$1,app__$1,runtime_atom))
,(0),active_queue);
var not_found_QMARK_ = (((txn_idx >= cljs.core.count(active_queue))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(txn_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(active_queue,txn_idx)))));
if(not_found_QMARK_){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,394,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (active_queue,txn_idx,not_found_QMARK_,map__63223,map__63223__$1,app__$1,runtime_atom){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Network result for",remote,"does not have a valid node on the active queue!"], null);
});})(active_queue,txn_idx,not_found_QMARK_,map__63223,map__63223__$1,app__$1,runtime_atom))
,null)),null,1710224649);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),txn_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx,result_key,remote], null),result);
}
});

com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (app__$1,txn_id,ele_idx,remote,result){
return com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6(app__$1,txn_id,ele_idx,remote,result,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
});

com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$lang$maxFixedArity = 6;

/**
 * Generate a new send node and add it to the appropriate send queue. Returns the new send node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.add_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$add_send_BANG_(p__63239,p__63240,ele_idx,remote){
var map__63241 = p__63239;
var map__63241__$1 = (((((!((map__63241 == null))))?(((((map__63241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63241):map__63241);
var app__$1 = map__63241__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63241__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__63243 = p__63240;
var map__63243__$1 = (((((!((map__63243 == null))))?(((((map__63243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63243):map__63243);
var tx_node = map__63243__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63243__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63243__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var handler = ((function (map__63241,map__63241__$1,app__$1,runtime_atom,map__63243,map__63243__$1,tx_node,id,options){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$add_send_BANG__$_result_handler_STAR_(result){
com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5(app__$1,id,ele_idx,remote,result);

com.fulcrologic.fulcro.algorithms.tx_processing.remove_send_BANG_(app__$1,remote,id,ele_idx);

com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(1));

return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
});})(map__63241,map__63241__$1,app__$1,runtime_atom,map__63243,map__63243__$1,tx_node,id,options))
;
var update_handler = ((function (handler,map__63241,map__63241__$1,app__$1,runtime_atom,map__63243,map__63243__$1,tx_node,id,options){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$add_send_BANG__$_progress_handler_STAR_(result){
com.fulcrologic.fulcro.algorithms.tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6(app__$1,id,ele_idx,remote,result,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));

return com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
});})(handler,map__63241,map__63241__$1,app__$1,runtime_atom,map__63243,map__63243__$1,tx_node,id,options))
;
var map__63253 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tx_node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx], null));
var map__63253__$1 = (((((!((map__63253 == null))))?(((((map__63253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63253):map__63253);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63253__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63253__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var state_before_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63253__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","state-before-action","com.fulcrologic.fulcro.algorithms.tx-processing/state-before-action",-1800721778));
var env = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node,new cljs.core.Keyword(null,"state-before-action","state-before-action",104906671),state_before_action], null));
var remote_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,remote);
var remote_desire = (cljs.core.truth_(remote_fn)?(remote_fn.cljs$core$IFn$_invoke$arity$1 ? remote_fn.cljs$core$IFn$_invoke$arity$1(env) : remote_fn.call(null,env)):null);
var ast = ((((remote_desire === false) || ((remote_desire == null))))?null:((remote_desire === true)?original_ast_node:((((cljs.core.map_QMARK_(remote_desire)) && (cljs.core.contains_QMARK_(remote_desire,new cljs.core.Keyword(null,"ast","ast",-860334068)))))?new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(remote_desire):((((cljs.core.map_QMARK_(remote_desire)) && (cljs.core.contains_QMARK_(remote_desire,new cljs.core.Keyword(null,"type","type",1174270348)))))?remote_desire:(function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,423,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (handler,update_handler,map__63253,map__63253__$1,dispatch,original_ast_node,state_before_action,env,remote_fn,remote_desire,map__63241,map__63241__$1,app__$1,runtime_atom,map__63243,map__63243__$1,tx_node,id,options){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote dispatch for",remote,"returned an invalid value.",remote_desire], null);
});})(handler,update_handler,map__63253,map__63253__$1,dispatch,original_ast_node,state_before_action,env,remote_fn,remote_desire,map__63241,map__63241__$1,app__$1,runtime_atom,map__63243,map__63243__$1,tx_node,id,options))
,null)),null,-2145346068);

return remote_desire;
})()

))));
var send_node = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),ele_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),ast,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),false,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),handler,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),update_handler], null);
if(cljs.core.truth_(ast)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([send_node], 0));

return send_node;
} else {
handler(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),"The remote AST was empty!"], null));

return null;
}
});
/**
 * Queue all (unqueued) remote actions for the given element.  Returns the (possibly updated) node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.queue_element_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$queue_element_sends_BANG_(app__$1,tx_node,p__63270){
var map__63271 = p__63270;
var map__63271__$1 = (((((!((map__63271 == null))))?(((((map__63271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63271):map__63271);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63271__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63271__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63271__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
var remotes = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(dispatch)),com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1));
var to_dispatch = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(remotes,started_QMARK_);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (remotes,to_dispatch,map__63271,map__63271__$1,idx,dispatch,started_QMARK_){
return (function (node,remote){
if(cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366)], null),cljs.core.PersistentHashSet.EMPTY),remote)){
return node;
} else {
com.fulcrologic.fulcro.algorithms.tx_processing.add_send_BANG_(app__$1,node,idx,remote);

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366)], null),cljs.core.conj,remote);
}
});})(remotes,to_dispatch,map__63271,map__63271__$1,idx,dispatch,started_QMARK_))
,tx_node,to_dispatch);
});
/**
 * Returns true if the given node has no active network operations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.idle_node_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$idle_node_QMARK_(p__63288){
var map__63290 = p__63288;
var map__63290__$1 = (((((!((map__63290 == null))))?(((((map__63290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63290):map__63290);
var tx_node = map__63290__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63290__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
return cljs.core.every_QMARK_(((function (map__63290,map__63290__$1,tx_node,elements){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$idle_node_QMARK__$_idle_QMARK__STAR_(p__63299){
var map__63300 = p__63299;
var map__63300__$1 = (((((!((map__63300 == null))))?(((((map__63300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63300):map__63300);
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63300__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63300__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var in_progress = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(started_QMARK_,complete_QMARK_);
return cljs.core.empty_QMARK_(in_progress);
});})(map__63290,map__63290__$1,tx_node,elements))
,elements);
});
/**
 * Returns a txnode element iff it has remaining (remote) work that has not been queued. Returns nil if there
 * is no such element.
 * 
 *   remote-names is the set of legal remote names.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.element_with_work = (function com$fulcrologic$fulcro$algorithms$tx_processing$element_with_work(remote_names,p__63311){
var map__63312 = p__63311;
var map__63312__$1 = (((((!((map__63312 == null))))?(((((map__63312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63312):map__63312);
var element = map__63312__$1;
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63312__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63312__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
var todo = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(remote_names,cljs.core.set(cljs.core.keys(dispatch)));
var remaining = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(todo,started_QMARK_);
if(cljs.core.seq(remaining)){
return element;
} else {
return null;
}
});
/**
 * Assumes tx-node is to be processed pessimistically. Queues the next send if the node is currently idle
 *   on the network and there are any sends left to do. Adds to the send queue, and returns the updated
 *   tx-node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.queue_next_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$queue_next_send_BANG_(app__$1,p__63324){
var map__63326 = p__63324;
var map__63326__$1 = (((((!((map__63326 == null))))?(((((map__63326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63326):map__63326);
var tx_node = map__63326__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63326__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
if(com.fulcrologic.fulcro.algorithms.tx_processing.idle_node_QMARK_(tx_node)){
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var with_work = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.tx_processing.element_with_work,remotes);
var element = cljs.core.some(with_work,elements);
if(cljs.core.truth_(element)){
return com.fulcrologic.fulcro.algorithms.tx_processing.queue_element_sends_BANG_(app__$1,tx_node,element);
} else {
return tx_node;
}
} else {
return tx_node;
}
});
/**
 * Finds any item(s) on the given node that are ready to be placed on the network queues and adds them. Non-optimistic
 *   multi-element nodes will only queue one remote operation at a time.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.queue_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$queue_sends_BANG_(app__$1,p__63338){
var map__63340 = p__63338;
var map__63340__$1 = (((((!((map__63340 == null))))?(((((map__63340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63340):map__63340);
var tx_node = map__63340__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63340__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63340__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
var optimistic_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869).cljs$core$IFn$_invoke$arity$1(options));
com.fulcrologic.fulcro.algorithms.tx_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));

if(optimistic_QMARK_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (optimistic_QMARK_,map__63340,map__63340__$1,tx_node,options,elements){
return (function (node,element){
return com.fulcrologic.fulcro.algorithms.tx_processing.queue_element_sends_BANG_(app__$1,node,element);
});})(optimistic_QMARK_,map__63340,map__63340__$1,tx_node,options,elements))
,tx_node,elements);
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.queue_next_send_BANG_(app__$1,tx_node);
}
});
/**
 * Figure out the dispatch routine to trigger for the given network result.  If it exists, send the result
 *   to it.
 * 
 *   Returns the tx-element with the remote marked complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_result_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$dispatch_result_BANG_(app__$1,tx_node,p__63348,remote){
var map__63349 = p__63348;
var map__63349__$1 = (((((!((map__63349 == null))))?(((((map__63349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63349):map__63349);
var tx_element = map__63349__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63349__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63349__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63349__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
com.fulcrologic.fulcro.algorithms.tx_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));

var result_63983 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(results,remote);
var handler_63984 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"result-action","result-action",-1254630246));
if(cljs.core.truth_(handler_63984)){
var env_63987 = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),dispatch,new cljs.core.Keyword(null,"result","result",1415092211),result_63983], null));
try{(handler_63984.cljs$core$IFn$_invoke$arity$1 ? handler_63984.cljs$core$IFn$_invoke$arity$1(env_63987) : handler_63984.call(null,env_63987));
}catch (e63353){var e_63990 = e63353;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,523,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e_63990,env_63987,result_63983,handler_63984,map__63349,map__63349__$1,tx_element,results,dispatch,original_ast_node){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_63990,"The result-action mutation handler for mutation",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"threw an exception."], null);
});})(e_63990,env_63987,result_63983,handler_63984,map__63349,map__63349__$1,tx_element,results,dispatch,original_ast_node))
,null)),null,-1755000180);
}} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(tx_element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,remote);
});
/**
 * Distribute results and mark the remotes for those elements as complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.distribute_element_results_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$distribute_element_results_BANG_(app__$1,tx_node,p__63357){
var map__63358 = p__63357;
var map__63358__$1 = (((((!((map__63358 == null))))?(((((map__63358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63358):map__63358);
var tx_element = map__63358__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63358__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63358__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__63358,map__63358__$1,tx_element,results,complete_QMARK_){
return (function (new_element,remote){
if(cljs.core.truth_((complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(remote) : complete_QMARK_.call(null,remote)))){
return new_element;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_result_BANG_(app__$1,tx_node,new_element,remote);
}
});})(map__63358,map__63358__$1,tx_element,results,complete_QMARK_))
,tx_element,cljs.core.keys(results));
});
/**
 * Walk all elements of the tx-node and call result dispatch handlers for any results that have
 *   not been distributed.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.distribute_results_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$distribute_results_BANG_(app__$1,p__63372){
var map__63373 = p__63372;
var map__63373__$1 = (((((!((map__63373 == null))))?(((((map__63373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63373):map__63373);
var tx_node = map__63373__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63373__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__63373,map__63373__$1,tx_node,elements){
return (function (element){
return com.fulcrologic.fulcro.algorithms.tx_processing.distribute_element_results_BANG_(app__$1,tx_node,element);
});})(map__63373,map__63373__$1,tx_node,elements))
,elements));
});
/**
 * Report all progress items to any registered progress dispatch and clear them from the tx-node.
 *   Returns the updated tx-node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.update_progress_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$update_progress_BANG_(app__$1,p__63383){
var map__63385 = p__63383;
var map__63385__$1 = (((((!((map__63385 == null))))?(((((map__63385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63385):map__63385);
var tx_node = map__63385__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63385__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
var get_env = ((function (map__63385,map__63385__$1,tx_node,elements){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$update_progress_BANG__$_get_env_STAR_(remote,progress){
return com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),remote,new cljs.core.Keyword(null,"progress","progress",244323547),progress], null));
});})(map__63385,map__63385__$1,tx_node,elements))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (get_env,map__63385,map__63385__$1,tx_node,elements){
return (function (node,p__63392){
var map__63394 = p__63392;
var map__63394__$1 = (((((!((map__63394 == null))))?(((((map__63394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63394):map__63394);
var element = map__63394__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63394__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63394__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63394__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var seq__63399_64009 = cljs.core.seq(progress);
var chunk__63400_64010 = null;
var count__63401_64011 = (0);
var i__63402_64012 = (0);
while(true){
if((i__63402_64012 < count__63401_64011)){
var vec__63425_64013 = chunk__63400_64010.cljs$core$IIndexed$_nth$arity$2(null,i__63402_64012);
var remote_64014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63425_64013,(0),null);
var value_64015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63425_64013,(1),null);
var env_64016 = get_env(remote_64014,value_64015);
var action_64017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"progress-action","progress-action",1342780181));
if(cljs.core.truth_(action_64017)){
try{(action_64017.cljs$core$IFn$_invoke$arity$1 ? action_64017.cljs$core$IFn$_invoke$arity$1(env_64016) : action_64017.call(null,env_64016));
}catch (e63430){var e_64020 = e63430;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,563,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__63399_64009,chunk__63400_64010,count__63401_64011,i__63402_64012,e_64020,env_64016,action_64017,vec__63425_64013,remote_64014,value_64015,map__63394,map__63394__$1,element,idx,progress,dispatch,get_env,map__63385,map__63385__$1,tx_node,elements){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_64020,"Progress action threw an exception for txn element",element], null);
});})(seq__63399_64009,chunk__63400_64010,count__63401_64011,i__63402_64012,e_64020,env_64016,action_64017,vec__63425_64013,remote_64014,value_64015,map__63394,map__63394__$1,element,idx,progress,dispatch,get_env,map__63385,map__63385__$1,tx_node,elements))
,null)),null,2134439180);
}} else {
}


var G__64023 = seq__63399_64009;
var G__64024 = chunk__63400_64010;
var G__64025 = count__63401_64011;
var G__64026 = (i__63402_64012 + (1));
seq__63399_64009 = G__64023;
chunk__63400_64010 = G__64024;
count__63401_64011 = G__64025;
i__63402_64012 = G__64026;
continue;
} else {
var temp__5804__auto___64027 = cljs.core.seq(seq__63399_64009);
if(temp__5804__auto___64027){
var seq__63399_64028__$1 = temp__5804__auto___64027;
if(cljs.core.chunked_seq_QMARK_(seq__63399_64028__$1)){
var c__4550__auto___64031 = cljs.core.chunk_first(seq__63399_64028__$1);
var G__64032 = cljs.core.chunk_rest(seq__63399_64028__$1);
var G__64033 = c__4550__auto___64031;
var G__64034 = cljs.core.count(c__4550__auto___64031);
var G__64035 = (0);
seq__63399_64009 = G__64032;
chunk__63400_64010 = G__64033;
count__63401_64011 = G__64034;
i__63402_64012 = G__64035;
continue;
} else {
var vec__63435_64036 = cljs.core.first(seq__63399_64028__$1);
var remote_64037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63435_64036,(0),null);
var value_64038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63435_64036,(1),null);
var env_64039 = get_env(remote_64037,value_64038);
var action_64040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"progress-action","progress-action",1342780181));
if(cljs.core.truth_(action_64040)){
try{(action_64040.cljs$core$IFn$_invoke$arity$1 ? action_64040.cljs$core$IFn$_invoke$arity$1(env_64039) : action_64040.call(null,env_64039));
}catch (e63440){var e_64041 = e63440;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing",null,563,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__63399_64009,chunk__63400_64010,count__63401_64011,i__63402_64012,e_64041,env_64039,action_64040,vec__63435_64036,remote_64037,value_64038,seq__63399_64028__$1,temp__5804__auto___64027,map__63394,map__63394__$1,element,idx,progress,dispatch,get_env,map__63385,map__63385__$1,tx_node,elements){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_64041,"Progress action threw an exception for txn element",element], null);
});})(seq__63399_64009,chunk__63400_64010,count__63401_64011,i__63402_64012,e_64041,env_64039,action_64040,vec__63435_64036,remote_64037,value_64038,seq__63399_64028__$1,temp__5804__auto___64027,map__63394,map__63394__$1,element,idx,progress,dispatch,get_env,map__63385,map__63385__$1,tx_node,elements))
,null)),null,-839937760);
}} else {
}


var G__64044 = cljs.core.next(seq__63399_64028__$1);
var G__64045 = null;
var G__64046 = (0);
var G__64047 = (0);
seq__63399_64009 = G__64044;
chunk__63400_64010 = G__64045;
count__63401_64011 = G__64046;
i__63402_64012 = G__64047;
continue;
}
} else {
}
}
break;
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx], null),cljs.core.dissoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));
});})(get_env,map__63385,map__63385__$1,tx_node,elements))
,tx_node,elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.process_tx_node_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$process_tx_node_BANG_(app__$1,p__63459){
var map__63462 = p__63459;
var map__63462__$1 = (((((!((map__63462 == null))))?(((((map__63462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63462):map__63462);
var tx_node = map__63462__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63462__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var optimistic_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869).cljs$core$IFn$_invoke$arity$1(options));
if(com.fulcrologic.fulcro.algorithms.tx_processing.fully_complete_QMARK_(app__$1,tx_node)){
return null;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.distribute_results_BANG_(app__$1,com.fulcrologic.fulcro.algorithms.tx_processing.update_progress_BANG_(app__$1,com.fulcrologic.fulcro.algorithms.tx_processing.queue_sends_BANG_(app__$1,(function (){var G__63472 = tx_node;
var G__63472__$1 = ((optimistic_QMARK_)?com.fulcrologic.fulcro.algorithms.tx_processing.run_actions_BANG_(app__$1,G__63472):G__63472);
if((!(optimistic_QMARK_))){
return com.fulcrologic.fulcro.algorithms.tx_processing.advance_actions_BANG_(app__$1,G__63472__$1);
} else {
return G__63472__$1;
}
})())));
}
});
com.fulcrologic.fulcro.algorithms.tx_processing.requested_refreshes = (function com$fulcrologic$fulcro$algorithms$tx_processing$requested_refreshes(app__$1,queue){

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (outer_acc,tx_node){
var env = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,tx_node);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (env){
return (function (acc,element){
var map__63488 = element;
var map__63488__$1 = (((((!((map__63488 == null))))?(((((map__63488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63488):map__63488);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63488__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var refresh = new cljs.core.Keyword(null,"refresh","refresh",1947415525).cljs$core$IFn$_invoke$arity$1(dispatch);
if(cljs.core.truth_(refresh)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.set((refresh.cljs$core$IFn$_invoke$arity$1 ? refresh.cljs$core$IFn$_invoke$arity$1(env) : refresh.call(null,env))));
} else {
return acc;
}
});})(env))
,outer_acc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330).cljs$core$IFn$_invoke$arity$1(tx_node));
}),cljs.core.PersistentHashSet.EMPTY,queue);
});
/**
 * Given a tx node and the set of legal remotes: returns a set of remotes that are active on that node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.remotes_active_on_node = (function com$fulcrologic$fulcro$algorithms$tx_processing$remotes_active_on_node(p__63500,remotes){
var map__63501 = p__63500;
var map__63501__$1 = (((((!((map__63501 == null))))?(((((map__63501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63501):map__63501);
var tx_node = map__63501__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63501__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
var active_on_element = ((function (map__63501,map__63501__$1,tx_node,elements){
return (function (p__63505){
var map__63506 = p__63505;
var map__63506__$1 = (((((!((map__63506 == null))))?(((((map__63506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63506):map__63506);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63506__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63506__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var remotes__$1 = cljs.core.set(remotes);
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(remotes__$1,cljs.core.set(cljs.core.keys(dispatch))),complete_QMARK_);
});})(map__63501,map__63501__$1,tx_node,elements))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (active_on_element,map__63501,map__63501__$1,tx_node,elements){
return (function (acc,ele){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(acc,active_on_element(ele));
});})(active_on_element,map__63501,map__63501__$1,tx_node,elements))
,cljs.core.PersistentHashSet.EMPTY,elements);
});
/**
 * Calculate which remotes still have network activity to do on the given active queue.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.active_remotes = (function com$fulcrologic$fulcro$algorithms$tx_processing$active_remotes(queue,remotes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ra,n){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(ra,com.fulcrologic.fulcro.algorithms.tx_processing.remotes_active_on_node(n,remotes));
}),cljs.core.PersistentHashSet.EMPTY,queue);
});
/**
 * Run through the active queue and do a processing step.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.process_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$process_queue_BANG_(p__63527){
var map__63528 = p__63527;
var map__63528__$1 = (((((!((map__63528 == null))))?(((((map__63528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63528):map__63528);
var app__$1 = map__63528__$1;
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63528__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63528__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var new_queue = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__63528,map__63528__$1,app__$1,state_atom,runtime_atom){
return (function com$fulcrologic$fulcro$algorithms$tx_processing$process_queue_BANG__$__STAR_pstep(new_queue,n){
var temp__5802__auto__ = com.fulcrologic.fulcro.algorithms.tx_processing.process_tx_node_BANG_(app__$1,n);
if(cljs.core.truth_(temp__5802__auto__)){
var new_node = temp__5802__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_queue,new_node);
} else {
return new_queue;
}
});})(map__63528,map__63528__$1,app__$1,state_atom,runtime_atom))
,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom)));
var accumulate = ((function (new_queue,map__63528,map__63528__$1,app__$1,state_atom,runtime_atom){
return (function (r,items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(r),items);
});})(new_queue,map__63528,map__63528__$1,app__$1,state_atom,runtime_atom))
;
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var schedule_render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
var explicit_refresh = com.fulcrologic.fulcro.algorithms.tx_processing.requested_refreshes(app__$1,new_queue);
var remotes_active_QMARK_ = com.fulcrologic.fulcro.algorithms.tx_processing.active_remotes(new_queue,remotes);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005),remotes_active_QMARK_);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),new_queue);

if(cljs.core.seq(explicit_refresh)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829),accumulate,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([explicit_refresh], 0));
} else {
}

(schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1 ? schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1(app__$1) : schedule_render_BANG_.call(null,app__$1));

return null;
});

//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.tx_processing.js.map
