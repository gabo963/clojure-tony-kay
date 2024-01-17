goog.provide('clojure.test.check.results');
goog.require('cljs.core');

/**
 * @interface
 */
clojure.test.check.results.Result = function(){};

/**
 * A boolean indicating if the result passed.
 */
clojure.test.check.results.pass_QMARK_ = (function clojure$test$check$results$pass_QMARK_(result){
if((((!((result == null)))) && ((!((result.clojure$test$check$results$Result$pass_QMARK_$arity$1 == null)))))){
return result.clojure$test$check$results$Result$pass_QMARK_$arity$1(result);
} else {
var x__4433__auto__ = (((result == null))?null:result);
var m__4434__auto__ = (clojure.test.check.results.pass_QMARK_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4434__auto__.call(null,result));
} else {
var m__4431__auto__ = (clojure.test.check.results.pass_QMARK_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4431__auto__.call(null,result));
} else {
throw cljs.core.missing_protocol("Result.pass?",result);
}
}
}
});

/**
 * A map of data about the trial.
 */
clojure.test.check.results.result_data = (function clojure$test$check$results$result_data(result){
if((((!((result == null)))) && ((!((result.clojure$test$check$results$Result$result_data$arity$1 == null)))))){
return result.clojure$test$check$results$Result$result_data$arity$1(result);
} else {
var x__4433__auto__ = (((result == null))?null:result);
var m__4434__auto__ = (clojure.test.check.results.result_data[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4434__auto__.call(null,result));
} else {
var m__4431__auto__ = (clojure.test.check.results.result_data["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(result) : m__4431__auto__.call(null,result));
} else {
throw cljs.core.missing_protocol("Result.result-data",result);
}
}
}
});

goog.object.set(clojure.test.check.results.Result,"_",true);

var G__44795_44816 = clojure.test.check.results.pass_QMARK_;
var G__44796_44817 = "_";
var G__44797_44818 = ((function (G__44795_44816,G__44796_44817){
return (function (this$){
return cljs.core.boolean$(this$);
});})(G__44795_44816,G__44796_44817))
;
goog.object.set(G__44795_44816,G__44796_44817,G__44797_44818);

var G__44798_44824 = clojure.test.check.results.result_data;
var G__44799_44825 = "_";
var G__44800_44826 = ((function (G__44798_44824,G__44799_44825){
return (function (this$){
return null;
});})(G__44798_44824,G__44799_44825))
;
goog.object.set(G__44798_44824,G__44799_44825,G__44800_44826);

goog.object.set(clojure.test.check.results.Result,"null",true);

var G__44802_44830 = clojure.test.check.results.pass_QMARK_;
var G__44803_44831 = "null";
var G__44804_44832 = ((function (G__44802_44830,G__44803_44831){
return (function (this$){
return false;
});})(G__44802_44830,G__44803_44831))
;
goog.object.set(G__44802_44830,G__44803_44831,G__44804_44832);

var G__44805_44834 = clojure.test.check.results.result_data;
var G__44806_44835 = "null";
var G__44807_44836 = ((function (G__44805_44834,G__44806_44835){
return (function (this$){
return null;
});})(G__44805_44834,G__44806_44835))
;
goog.object.set(G__44805_44834,G__44806_44835,G__44807_44836);

//# sourceMappingURL=clojure.test.check.results.js.map
