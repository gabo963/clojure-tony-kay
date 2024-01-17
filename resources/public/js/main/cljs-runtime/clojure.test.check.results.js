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

var G__44938_44955 = clojure.test.check.results.pass_QMARK_;
var G__44939_44956 = "_";
var G__44940_44957 = ((function (G__44938_44955,G__44939_44956){
return (function (this$){
return cljs.core.boolean$(this$);
});})(G__44938_44955,G__44939_44956))
;
goog.object.set(G__44938_44955,G__44939_44956,G__44940_44957);

var G__44941_44959 = clojure.test.check.results.result_data;
var G__44942_44960 = "_";
var G__44943_44961 = ((function (G__44941_44959,G__44942_44960){
return (function (this$){
return null;
});})(G__44941_44959,G__44942_44960))
;
goog.object.set(G__44941_44959,G__44942_44960,G__44943_44961);

goog.object.set(clojure.test.check.results.Result,"null",true);

var G__44944_44964 = clojure.test.check.results.pass_QMARK_;
var G__44945_44965 = "null";
var G__44946_44966 = ((function (G__44944_44964,G__44945_44965){
return (function (this$){
return false;
});})(G__44944_44964,G__44945_44965))
;
goog.object.set(G__44944_44964,G__44945_44965,G__44946_44966);

var G__44947_44967 = clojure.test.check.results.result_data;
var G__44948_44968 = "null";
var G__44949_44969 = ((function (G__44947_44967,G__44948_44968){
return (function (this$){
return null;
});})(G__44947_44967,G__44948_44968))
;
goog.object.set(G__44947_44967,G__44948_44968,G__44949_44969);

//# sourceMappingURL=clojure.test.check.results.js.map
