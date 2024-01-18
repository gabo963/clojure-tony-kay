goog.provide('com.fulcrologic.guardrails.core');
com.fulcrologic.guardrails.core._EQ__GT_ = new cljs.core.Keyword(null,"ret","ret",-468222814);
com.fulcrologic.guardrails.core._BAR_ = new cljs.core.Keyword(null,"st","st",1455255828);
com.fulcrologic.guardrails.core._LT__ = new cljs.core.Keyword(null,"gen","gen",142575302);
com.fulcrologic.guardrails.core.global_context = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
/**
 * Push a global context, accessible from all threads, onto a stack.
 * Used to add information to what guardrails will report when a function failed a check.
 */
com.fulcrologic.guardrails.core.enter_global_context_BANG_ = (function com$fulcrologic$guardrails$core$enter_global_context_BANG_(ctx){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.guardrails.core.global_context,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.cons,ctx));
});
/**
 * Pops a global context (see `enter-global-context!`).
 * Should be passed the same context that was pushed, although is not enforced, as it's only to be easily compatible with fulcro-spec's hooks API.
 */
com.fulcrologic.guardrails.core.leave_global_context_BANG_ = (function com$fulcrologic$guardrails$core$leave_global_context_BANG_(ctx){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.guardrails.core.global_context,cljs.core.rest);
});
com.fulcrologic.guardrails.core.get_global_context = (function com$fulcrologic$guardrails$core$get_global_context(){
return cljs.core.first(cljs.core.deref(com.fulcrologic.guardrails.core.global_context));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.pending_check_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.pending_check_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((10000)));
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.async_go_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.async_go_channel = (function (){var c__53974__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53975__auto__ = (function (){var switch__53800__auto__ = (function (state_56596){
var state_val_56597 = (state_56596[(1)]);
if((state_val_56597 === (7))){
var inst_56592 = (state_56596[(2)]);
var state_56596__$1 = state_56596;
var statearr_56602_56847 = state_56596__$1;
(statearr_56602_56847[(2)] = inst_56592);

(statearr_56602_56847[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56597 === (1))){
var state_56596__$1 = state_56596;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56596__$1,(2),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_56597 === (4))){
var inst_56594 = (state_56596[(2)]);
var state_56596__$1 = state_56596;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56596__$1,inst_56594);
} else {
if((state_val_56597 === (6))){
var inst_56590 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Guardrails ASYNC LOOP STOPPED ****************************************"], 0));
var state_56596__$1 = state_56596;
var statearr_56603_56850 = state_56596__$1;
(statearr_56603_56850[(2)] = inst_56590);

(statearr_56603_56850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56597 === (3))){
var inst_56571 = (state_56596[(7)]);
var state_56596__$1 = state_56596;
if(cljs.core.truth_(inst_56571)){
var statearr_56605_56853 = state_56596__$1;
(statearr_56605_56853[(1)] = (5));

} else {
var statearr_56606_56855 = state_56596__$1;
(statearr_56606_56855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56597 === (12))){
var inst_56587 = (state_56596[(2)]);
var inst_56571 = inst_56587;
var state_56596__$1 = (function (){var statearr_56609 = state_56596;
(statearr_56609[(7)] = inst_56571);

return statearr_56609;
})();
var statearr_56611_56858 = state_56596__$1;
(statearr_56611_56858[(2)] = null);

(statearr_56611_56858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56597 === (2))){
var inst_56570 = (state_56596[(2)]);
var inst_56571 = inst_56570;
var state_56596__$1 = (function (){var statearr_56613 = state_56596;
(statearr_56613[(7)] = inst_56571);

return statearr_56613;
})();
var statearr_56615_56860 = state_56596__$1;
(statearr_56615_56860[(2)] = null);

(statearr_56615_56860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56597 === (11))){
var _ = (function (){var statearr_56618 = state_56596;
(statearr_56618[(4)] = cljs.core.rest((state_56596[(4)])));

return statearr_56618;
})();
var state_56596__$1 = state_56596;
var ex56608 = (state_56596__$1[(2)]);
var statearr_56619_56862 = state_56596__$1;
(statearr_56619_56862[(5)] = ex56608);


var statearr_56621_56863 = state_56596__$1;
(statearr_56621_56863[(1)] = (10));

(statearr_56621_56863[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56597 === (9))){
var inst_56584 = (state_56596[(2)]);
var state_56596__$1 = (function (){var statearr_56623 = state_56596;
(statearr_56623[(8)] = inst_56584);

return statearr_56623;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56596__$1,(12),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_56597 === (5))){
var state_56596__$1 = state_56596;
var statearr_56627_56867 = state_56596__$1;
(statearr_56627_56867[(2)] = null);

(statearr_56627_56867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56597 === (10))){
var inst_56575 = (state_56596[(2)]);
var state_56596__$1 = (function (){var statearr_56630 = state_56596;
(statearr_56630[(9)] = inst_56575);

return statearr_56630;
})();
var statearr_56631_56869 = state_56596__$1;
(statearr_56631_56869[(2)] = null);

(statearr_56631_56869[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56597 === (8))){
var inst_56571 = (state_56596[(7)]);
var _ = (function (){var statearr_56634 = state_56596;
(statearr_56634[(4)] = cljs.core.cons((11),(state_56596[(4)])));

return statearr_56634;
})();
var inst_56581 = (inst_56571.cljs$core$IFn$_invoke$arity$0 ? inst_56571.cljs$core$IFn$_invoke$arity$0() : inst_56571.call(null));
var ___$1 = (function (){var statearr_56637 = state_56596;
(statearr_56637[(4)] = cljs.core.rest((state_56596[(4)])));

return statearr_56637;
})();
var state_56596__$1 = state_56596;
var statearr_56638_56871 = state_56596__$1;
(statearr_56638_56871[(2)] = inst_56581);

(statearr_56638_56871[(1)] = (9));


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
});
return (function() {
var com$fulcrologic$guardrails$core$state_machine__53801__auto__ = null;
var com$fulcrologic$guardrails$core$state_machine__53801__auto____0 = (function (){
var statearr_56640 = [null,null,null,null,null,null,null,null,null,null];
(statearr_56640[(0)] = com$fulcrologic$guardrails$core$state_machine__53801__auto__);

(statearr_56640[(1)] = (1));

return statearr_56640;
});
var com$fulcrologic$guardrails$core$state_machine__53801__auto____1 = (function (state_56596){
while(true){
var ret_value__53802__auto__ = (function (){try{while(true){
var result__53803__auto__ = switch__53800__auto__(state_56596);
if(cljs.core.keyword_identical_QMARK_(result__53803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53803__auto__;
}
break;
}
}catch (e56643){var ex__53804__auto__ = e56643;
var statearr_56644_56873 = state_56596;
(statearr_56644_56873[(2)] = ex__53804__auto__);


if(cljs.core.seq((state_56596[(4)]))){
var statearr_56645_56875 = state_56596;
(statearr_56645_56875[(1)] = cljs.core.first((state_56596[(4)])));

} else {
throw ex__53804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56876 = state_56596;
state_56596 = G__56876;
continue;
} else {
return ret_value__53802__auto__;
}
break;
}
});
com$fulcrologic$guardrails$core$state_machine__53801__auto__ = function(state_56596){
switch(arguments.length){
case 0:
return com$fulcrologic$guardrails$core$state_machine__53801__auto____0.call(this);
case 1:
return com$fulcrologic$guardrails$core$state_machine__53801__auto____1.call(this,state_56596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$guardrails$core$state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$guardrails$core$state_machine__53801__auto____0;
com$fulcrologic$guardrails$core$state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$guardrails$core$state_machine__53801__auto____1;
return com$fulcrologic$guardrails$core$state_machine__53801__auto__;
})()
})();
var state__53976__auto__ = (function (){var statearr_56646 = f__53975__auto__();
(statearr_56646[(6)] = c__53974__auto__);

return statearr_56646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53976__auto__);
}));

return c__53974__auto__;
})();
}
com.fulcrologic.guardrails.core.output_fn = (function com$fulcrologic$guardrails$core$output_fn(data){
var map__56648 = data;
var map__56648__$1 = cljs.core.__destructure_map(map__56648);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56648__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56648__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56648__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56648__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56648__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56648__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56648__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56648__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
return [clojure.string.upper_case(cljs.core.name(level))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.force(msg_)),(function (){var temp__5804__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__5804__auto__)){
var err = temp__5804__auto__;
return ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1(err))].join('');
} else {
return null;
}
})()].join('');
});
com.fulcrologic.guardrails.core.now_ms = (function com$fulcrologic$guardrails$core$now_ms(){
return cljs.core.inst_ms((new Date()));
});
com.fulcrologic.guardrails.core.tap = (((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.tap_GT_ !== 'undefined'))?(new cljs.core.Var((function (){
return cljs.core.tap_GT_;
}),cljs.core.with_meta(new cljs.core.Symbol("cljs.core","tap>","cljs.core/tap>",895722640,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"tap>","tap>",1822490677,null),"cljs/core.cljs",20,1,11858,11858,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Sends x to any taps. Returns the result of *exec-tap-fn*, a Boolean value.",((cljs.core.tap_GT_)?cljs.core.tap_GT_.cljs$lang$test:null)]))):null);
com.fulcrologic.guardrails.core.run_check = (function com$fulcrologic$guardrails$core$run_check(p__56678,spec,value){
var map__56680 = p__56678;
var map__56680__$1 = cljs.core.__destructure_map(map__56680);
var tap_GT__QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56680__$1,new cljs.core.Keyword(null,"tap>?","tap>?",212454486));
var args_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56680__$1,new cljs.core.Keyword(null,"args?","args?",-1963723548));
var vararg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56680__$1,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777));
var callsite = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56680__$1,new cljs.core.Keyword(null,"callsite","callsite",243654023));
var throw_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56680__$1,new cljs.core.Keyword(null,"throw?","throw?",-2036749118));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56680__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004));
var expound_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56680__$1,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481));
var start_56888 = com.fulcrologic.guardrails.core.now_ms();
var vargs_QMARK__56889 = (function (){var and__5043__auto__ = args_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return vararg_QMARK_;
} else {
return and__5043__auto__;
}
})();
var varg_56890 = (cljs.core.truth_(vargs_QMARK__56889)?cljs.core.last(cljs.core.seq(value)):null);
var specable_args_56891 = (cljs.core.truth_(vargs_QMARK__56889)?((cljs.core.map_QMARK_(varg_56890))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.flatten(cljs.core.seq(varg_56890))):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.seq(varg_56890))):value);
var valid_exception_56892 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
try{if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,specable_args_56891)){
} else {
var problem_56895 = expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$3(spec,specable_args_56891,expound_opts);
var description_56896 = ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name),(cljs.core.truth_(args_QMARK_)?" argument list":" return type"),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problem_56895)].join('');
var context_56897 = com.fulcrologic.guardrails.core.get_global_context();
if(cljs.core.truth_((function (){var and__5043__auto__ = com.fulcrologic.guardrails.core.tap;
if(cljs.core.truth_(and__5043__auto__)){
return tap_GT__QMARK_;
} else {
return and__5043__auto__;
}
})())){
var G__56694_56899 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec,new cljs.core.Keyword("com.fulcrologic.guardrails","explain-data","com.fulcrologic.guardrails/explain-data",-1120944464),cljs.spec.alpha.explain_data(spec,specable_args_56891)], null);
(com.fulcrologic.guardrails.core.tap.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.guardrails.core.tap.cljs$core$IFn$_invoke$arity$1(G__56694_56899) : com.fulcrologic.guardrails.core.tap.call(null,G__56694_56899));
} else {
}

if(cljs.core.truth_(throw_QMARK_)){
cljs.core.reset_BANG_(valid_exception_56892,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((function (){var G__56766 = description_56896;
if(cljs.core.truth_(context_56897)){
return ["\nContext: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context_56897),G__56766].join('');
} else {
return G__56766;
}
})(),cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec,new cljs.core.Keyword("com.fulcrologic.guardrails","context","com.fulcrologic.guardrails/context",-834538901),context_56897], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.guardrails","val","com.fulcrologic.guardrails/val",132345656),specable_args_56891], null))));
} else {
com.fulcrologic.guardrails.utils.report_problem([description_56896,"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = callsite;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("",cljs.core.PersistentArrayMap.EMPTY);
}
})()))].join(''));
}
}
}catch (e56690){var e_56907 = e56690;
com.fulcrologic.guardrails.utils.report_exception(e_56907,"BUG: Internal error in expound or clojure spec.\n");
}finally {var duration_56911 = (com.fulcrologic.guardrails.core.now_ms() - start_56888);
if((duration_56911 > (100))){
com.fulcrologic.guardrails.utils.report_problem(["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," ",(cljs.core.truth_(args_QMARK_)?"argument specs":"return spec")," took ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration_56911),"ms to run."].join(''));
} else {
}
}
if(cljs.core.truth_(cljs.core.deref(valid_exception_56892))){
throw cljs.core.deref(valid_exception_56892);
} else {
}

return null;
});
com.fulcrologic.guardrails.core.callsite_exception = (function com$fulcrologic$guardrails$core$callsite_exception(){
return (new Error(""));
});

//# sourceMappingURL=com.fulcrologic.guardrails.core.js.map
