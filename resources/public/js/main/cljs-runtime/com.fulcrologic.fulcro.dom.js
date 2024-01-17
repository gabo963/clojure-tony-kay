goog.provide('com.fulcrologic.fulcro.dom');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('com.fulcrologic.fulcro.components');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('com.fulcrologic.fulcro.dom_common');
goog.require('taoensso.timbre');





































































































































































































com.fulcrologic.fulcro.dom.element_marker = (function (){var G__64752 = React.createElement("div",null);
var G__64753 = "$$typeof";
return goog.object.get(G__64752,G__64753);
})();
/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return ((cljs.core.object_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.element_marker,goog.object.get(x,"$$typeof"))));
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"css","css",1135045163),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64754#","p1__64754#",-1439318077,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"p1__64754#","p1__64754#",-1439318077,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"p1__64754#","p1__64754#",-1439318077,null))))),new cljs.core.Keyword(null,"js-object","js-object",1830199158),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64755#","p1__64755#",-1878244988,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"p1__64755#","p1__64755#",-1878244988,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"p1__64755#","p1__64755#",-1878244988,null))))))),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64756#","p1__64756#",308101032,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"p1__64756#","p1__64756#",308101032,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"p1__64756#","p1__64756#",308101032,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"p1__64756#","p1__64756#",308101032,null)))),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(cljs.core.keyword_QMARK_,new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.maybe_impl(cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"js-object","js-object",1830199158)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nil_QMARK_,(function (p1__64754_SHARP_){
return ((cljs.core.map_QMARK_(p1__64754_SHARP_)) && ((!(com.fulcrologic.fulcro.dom.element_QMARK_(p1__64754_SHARP_)))));
}),(function (p1__64755_SHARP_){
return ((cljs.core.object_QMARK_(p1__64755_SHARP_)) && ((!(com.fulcrologic.fulcro.dom.element_QMARK_(p1__64755_SHARP_)))));
})], null),null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64754#","p1__64754#",-1439318077,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"p1__64754#","p1__64754#",-1439318077,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"p1__64754#","p1__64754#",-1439318077,null))))),new cljs.core.Keyword(null,"js-object","js-object",1830199158),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64755#","p1__64755#",-1878244988,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"p1__64755#","p1__64755#",-1878244988,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"p1__64755#","p1__64755#",-1878244988,null))))))),cljs.spec.alpha.rep_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64756#","p1__64756#",308101032,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"p1__64756#","p1__64756#",308101032,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"p1__64756#","p1__64756#",308101032,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"p1__64756#","p1__64756#",308101032,null)))),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"element","element",1974019749)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.number_QMARK_,(function (p1__64756_SHARP_){
return ((cljs.core.vector_QMARK_(p1__64756_SHARP_)) || (cljs.core.seq_QMARK_(p1__64756_SHARP_)) || (cljs.core.array_QMARK_(p1__64756_SHARP_)));
}),cljs.core.nil_QMARK_,com.fulcrologic.fulcro.dom.element_QMARK_], null),null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64754#","p1__64754#",-1439318077,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"p1__64754#","p1__64754#",-1439318077,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"p1__64754#","p1__64754#",-1439318077,null))))),new cljs.core.Keyword(null,"js-object","js-object",1830199158),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64755#","p1__64755#",-1878244988,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"p1__64755#","p1__64755#",-1878244988,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null),new cljs.core.Symbol(null,"p1__64755#","p1__64755#",-1878244988,null))))))),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64756#","p1__64756#",308101032,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"p1__64756#","p1__64756#",308101032,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"p1__64756#","p1__64756#",308101032,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"p1__64756#","p1__64756#",308101032,null)))),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Symbol("com.fulcrologic.fulcro.dom","element?","com.fulcrologic.fulcro.dom/element?",1982816902,null)))], null)));
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return ReactDOM.render(component,el);
});
/**
 * Equivalent to React.renderToString. NOTE: You must require cljsjs.react.dom.server to use this function.
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__64785 = arguments.length;
switch (G__64785) {
case 1:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return ReactDOM.findDOMNode(component);
});

com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__64786 = component.refs;
var G__64786__$1 = (((G__64786 == null))?null:goog.object.get(G__64786,name));
if((G__64786__$1 == null)){
return null;
} else {
return ReactDOM.findDOMNode(G__64786__$1);
}
});

com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2;

/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__64796 = arguments.length;
switch (G__64796) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___65537 = arguments.length;
var i__4731__auto___65538 = (0);
while(true){
if((i__4731__auto___65538 < len__4730__auto___65537)){
args_arr__4751__auto__.push((arguments[i__4731__auto___65538]));

var G__65539 = (i__4731__auto___65538 + (1));
i__4731__auto___65538 = G__65539;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
});

com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return React.createElement(tag,opts);
});

com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return React.createElement(tag,opts,children);
});

/** @this {Function} */
com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq64793){
var G__64794 = cljs.core.first(seq64793);
var seq64793__$1 = cljs.core.next(seq64793);
var G__64795 = cljs.core.first(seq64793__$1);
var seq64793__$2 = cljs.core.next(seq64793__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64794,G__64795,seq64793__$2);
});

com.fulcrologic.fulcro.dom.create_element.cljs$lang$maxFixedArity = (2);

/**
 * Given props, which can be nil, a js-obj or a clj map: returns a js object.
 */
com.fulcrologic.fulcro.dom.convert_props = (function com$fulcrologic$fulcro$dom$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
/**
 * Used internally by the DOM element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_element_STAR_ = (function com$fulcrologic$fulcro$dom$macro_create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return React.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = goog.object.getValueByKeys(component,"state","onChange");
var next_state = ({});
var inputRef = goog.object.get(next_props,"inputRef");
var G__64805_65540 = next_state;
var G__64806_65541 = next_props;
var G__64807_65542 = ({"onChange": on_change});
goog.object.extend(G__64805_65540,G__64806_65541,G__64807_65542);

goog.object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
goog.object.remove(next_state,"inputRef");

goog.object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(next_state);
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__4120__auto__ = tag;
if(cljs.core.truth_(and__4120__auto__)){
var G__64809 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__64809) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__64809));
} else {
return and__4120__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
this$.state = (function (){var state = ({"ref": goog.object.get(props,"inputRef")});
var G__64816_65543 = state;
var G__64817_65544 = props;
var G__64818_65545 = ({"onChange": (function (){var G__64819 = goog.object.get(this$,"onChange");
var G__64820 = this$;
return goog.bind(G__64819,G__64820);
})()});
goog.object.extend(G__64816_65543,G__64817_65544,G__64818_65545);

goog.object.remove(state,"inputRef");

return state;
})();

return React.Component.apply(this$,arguments);
});
ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join('');

goog.inherits(ctor,React.Component);

var x64822_65546 = ctor.prototype;
x64822_65546.onChange = ((function (x64822_65546,ctor){
return (function (event){
var this$ = this;
var temp__5804__auto__ = this$.props.onChange;
if(cljs.core.truth_(temp__5804__auto__)){
var handler = temp__5804__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,goog.object.getValueByKeys(event,"target","value"));
} else {
return null;
}
});})(x64822_65546,ctor))
;

x64822_65546.componentWillReceiveProps = ((function (x64822_65546,ctor){
return (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state","value");
var this_node = ReactDOM.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:(function (){var G__64825 = this_node;
var G__64826 = ((function (G__64825,state_value,this_node,this$,x64822_65546,ctor){
return (function (p1__64813_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__64813_SHARP_);
});})(G__64825,state_value,this_node,this$,x64822_65546,ctor))
;
return goog.dom.findNode(G__64825,G__64826);
})());
var element_value = goog.object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__4120__auto__ = state_value;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = element_value;
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,149,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (state_value,this_node,value_node,element_value,this$,x64822_65546,ctor){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements."], null);
});})(state_value,this_node,value_node,element_value,this$,x64822_65546,ctor))
,null)),null,-618755367);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,goog.object.get(new_props,"value"));
}
});})(x64822_65546,ctor))
;

x64822_65546.render = ((function (x64822_65546,ctor){
return (function (){
var this$ = this;
return React.createElement(element,this$.state);
});})(x64822_65546,ctor))
;


var real_factory = React.createFactory(ctor);
return ((function (real_factory,ctor){
return (function() { 
var G__65547__delegate = function (props,children){
var temp__5802__auto__ = goog.object.get(props,"ref");
if(cljs.core.truth_(temp__5802__auto__)){
var r = temp__5802__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
goog.object.extend(p,props);

goog.object.set(p,"inputRef",r);

goog.object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
};
var G__65547 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__65548__i = 0, G__65548__a = new Array(arguments.length -  1);
while (G__65548__i < G__65548__a.length) {G__65548__a[G__65548__i] = arguments[G__65548__i + 1]; ++G__65548__i;}
  children = new cljs.core.IndexedSeq(G__65548__a,0,null);
} 
return G__65547__delegate.call(this,props,children);};
G__65547.cljs$lang$maxFixedArity = 1;
G__65547.cljs$lang$applyTo = (function (arglist__65549){
var props = cljs.core.first(arglist__65549);
var children = cljs.core.rest(arglist__65549);
return G__65547__delegate(props,children);
});
G__65547.cljs$core$IFn$_invoke$arity$variadic = G__65547__delegate;
return G__65547;
})()
;
;})(real_factory,ctor))
});
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_input = com.fulcrologic.fulcro.dom.wrap_form_element("input");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_textarea = com.fulcrologic.fulcro.dom.wrap_form_element("textarea");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_option = com.fulcrologic.fulcro.dom.wrap_form_element("option");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_select = com.fulcrologic.fulcro.dom.wrap_form_element("select");
com.fulcrologic.fulcro.dom.arr_append_STAR_ = (function com$fulcrologic$fulcro$dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
com.fulcrologic.fulcro.dom.arr_append = (function com$fulcrologic$fulcro$dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,com.fulcrologic.fulcro.components.force_children(tail));
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__64831 = tag;
switch (G__64831) {
case "input":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_input,props,children);

break;
case "textarea":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_textarea,props,children);

break;
case "select":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_select,props,children);

break;
case "option":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_option,props,children);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64831)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__64833 = arguments.length;
switch (G__64833) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
});

com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__64834 = args;
var seq__64835 = cljs.core.seq(vec__64834);
var first__64836 = cljs.core.first(seq__64835);
var seq__64835__$1 = cljs.core.next(seq__64835);
var head = first__64836;
var tail = seq__64835__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__64837 = (function (){var G__64838 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__64838,tail);

return G__64838;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__64837) : f.call(null,G__64837));
} else {
if(com.fulcrologic.fulcro.dom.element_QMARK_(head)){
var G__64839 = (function (){var G__64840 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__64840,args);

return G__64840;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__64839) : f.call(null,G__64839));
} else {
if(cljs.core.object_QMARK_(head)){
var G__64841 = (function (){var G__64842 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__64842,tail);

return G__64842;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__64841) : f.call(null,G__64841));
} else {
if(cljs.core.map_QMARK_(head)){
var G__64843 = (function (){var G__64844 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__64844,tail);

return G__64844;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__64843) : f.call(null,G__64843));
} else {
var G__64845 = (function (){var G__64846 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__64846,args);

return G__64846;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__64845) : f.call(null,G__64845));

}
}
}
}
});

com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3;

/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (form "hello")
 * (form nil "hello")
 * 
 * These two are made equivalent at compile time
 * (form {:onClick f} "hello")
 * (form #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (form :#the-id.klass.other-klass "hello")
 * (form :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.form = (function com$fulcrologic$fulcro$dom$form(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65552 = arguments.length;
var i__4731__auto___65553 = (0);
while(true){
if((i__4731__auto___65553 < len__4730__auto___65552)){
args__4736__auto__.push((arguments[i__4731__auto___65553]));

var G__65554 = (i__4731__auto___65553 + (1));
i__4731__auto___65553 = G__65554;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64852 = conformed_args__63365__auto__;
var map__64852__$1 = (((((!((map__64852 == null))))?(((((map__64852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64852):map__64852);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64852__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64852__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64852__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq64847){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64847));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (audio "hello")
 * (audio nil "hello")
 * 
 * These two are made equivalent at compile time
 * (audio {:onClick f} "hello")
 * (audio #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (audio :#the-id.klass.other-klass "hello")
 * (audio :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.audio = (function com$fulcrologic$fulcro$dom$audio(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65555 = arguments.length;
var i__4731__auto___65556 = (0);
while(true){
if((i__4731__auto___65556 < len__4730__auto___65555)){
args__4736__auto__.push((arguments[i__4731__auto___65556]));

var G__65557 = (i__4731__auto___65556 + (1));
i__4731__auto___65556 = G__65557;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64859 = conformed_args__63365__auto__;
var map__64859__$1 = (((((!((map__64859 == null))))?(((((map__64859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64859):map__64859);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64859__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64859__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64859__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq64854){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64854));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (input "hello")
 * (input nil "hello")
 * 
 * These two are made equivalent at compile time
 * (input {:onClick f} "hello")
 * (input #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (input :#the-id.klass.other-klass "hello")
 * (input :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.input = (function com$fulcrologic$fulcro$dom$input(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65558 = arguments.length;
var i__4731__auto___65559 = (0);
while(true){
if((i__4731__auto___65559 < len__4730__auto___65558)){
args__4736__auto__.push((arguments[i__4731__auto___65559]));

var G__65560 = (i__4731__auto___65559 + (1));
i__4731__auto___65559 = G__65560;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64862 = conformed_args__63365__auto__;
var map__64862__$1 = (((((!((map__64862 == null))))?(((((map__64862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64862):map__64862);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64862__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64862__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64862__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq64861){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64861));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menuitem "hello")
 * (menuitem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menuitem {:onClick f} "hello")
 * (menuitem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menuitem :#the-id.klass.other-klass "hello")
 * (menuitem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menuitem = (function com$fulcrologic$fulcro$dom$menuitem(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65561 = arguments.length;
var i__4731__auto___65562 = (0);
while(true){
if((i__4731__auto___65562 < len__4730__auto___65561)){
args__4736__auto__.push((arguments[i__4731__auto___65562]));

var G__65563 = (i__4731__auto___65562 + (1));
i__4731__auto___65562 = G__65563;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64872 = conformed_args__63365__auto__;
var map__64872__$1 = (((((!((map__64872 == null))))?(((((map__64872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64872):map__64872);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64872__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64872__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64872__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq64869){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64869));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (radialGradient "hello")
 * (radialGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (radialGradient {:onClick f} "hello")
 * (radialGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (radialGradient :#the-id.klass.other-klass "hello")
 * (radialGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.radialGradient = (function com$fulcrologic$fulcro$dom$radialGradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65564 = arguments.length;
var i__4731__auto___65565 = (0);
while(true){
if((i__4731__auto___65565 < len__4730__auto___65564)){
args__4736__auto__.push((arguments[i__4731__auto___65565]));

var G__65566 = (i__4731__auto___65565 + (1));
i__4731__auto___65565 = G__65566;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64886 = conformed_args__63365__auto__;
var map__64886__$1 = (((((!((map__64886 == null))))?(((((map__64886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64886):map__64886);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64886__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64886__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64886__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq64884){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64884));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMerge "hello")
 * (feMerge nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMerge {:onClick f} "hello")
 * (feMerge #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMerge :#the-id.klass.other-klass "hello")
 * (feMerge :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMerge = (function com$fulcrologic$fulcro$dom$feMerge(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65567 = arguments.length;
var i__4731__auto___65568 = (0);
while(true){
if((i__4731__auto___65568 < len__4730__auto___65567)){
args__4736__auto__.push((arguments[i__4731__auto___65568]));

var G__65569 = (i__4731__auto___65568 + (1));
i__4731__auto___65568 = G__65569;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64894 = conformed_args__63365__auto__;
var map__64894__$1 = (((((!((map__64894 == null))))?(((((map__64894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64894):map__64894);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64894__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64894__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64894__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq64889){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64889));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (set "hello")
 * (set nil "hello")
 * 
 * These two are made equivalent at compile time
 * (set {:onClick f} "hello")
 * (set #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (set :#the-id.klass.other-klass "hello")
 * (set :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.set = (function com$fulcrologic$fulcro$dom$set(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65570 = arguments.length;
var i__4731__auto___65571 = (0);
while(true){
if((i__4731__auto___65571 < len__4730__auto___65570)){
args__4736__auto__.push((arguments[i__4731__auto___65571]));

var G__65572 = (i__4731__auto___65571 + (1));
i__4731__auto___65571 = G__65572;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64903 = conformed_args__63365__auto__;
var map__64903__$1 = (((((!((map__64903 == null))))?(((((map__64903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64903):map__64903);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64903__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64903__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64903__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq64900){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64900));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting "hello")
 * (feSpecularLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting {:onClick f} "hello")
 * (feSpecularLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpecularLighting :#the-id.klass.other-klass "hello")
 * (feSpecularLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpecularLighting = (function com$fulcrologic$fulcro$dom$feSpecularLighting(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65575 = arguments.length;
var i__4731__auto___65576 = (0);
while(true){
if((i__4731__auto___65576 < len__4730__auto___65575)){
args__4736__auto__.push((arguments[i__4731__auto___65576]));

var G__65577 = (i__4731__auto___65576 + (1));
i__4731__auto___65576 = G__65577;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64909 = conformed_args__63365__auto__;
var map__64909__$1 = (((((!((map__64909 == null))))?(((((map__64909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64909):map__64909);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64909__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64909__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64909__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq64907){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64907));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (base "hello")
 * (base nil "hello")
 * 
 * These two are made equivalent at compile time
 * (base {:onClick f} "hello")
 * (base #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (base :#the-id.klass.other-klass "hello")
 * (base :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.base = (function com$fulcrologic$fulcro$dom$base(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65578 = arguments.length;
var i__4731__auto___65579 = (0);
while(true){
if((i__4731__auto___65579 < len__4730__auto___65578)){
args__4736__auto__.push((arguments[i__4731__auto___65579]));

var G__65580 = (i__4731__auto___65579 + (1));
i__4731__auto___65579 = G__65580;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64916 = conformed_args__63365__auto__;
var map__64916__$1 = (((((!((map__64916 == null))))?(((((map__64916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64916):map__64916);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64916__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64916__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64916__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq64914){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64914));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h1 "hello")
 * (h1 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h1 {:onClick f} "hello")
 * (h1 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h1 :#the-id.klass.other-klass "hello")
 * (h1 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h1 = (function com$fulcrologic$fulcro$dom$h1(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65581 = arguments.length;
var i__4731__auto___65582 = (0);
while(true){
if((i__4731__auto___65582 < len__4730__auto___65581)){
args__4736__auto__.push((arguments[i__4731__auto___65582]));

var G__65583 = (i__4731__auto___65582 + (1));
i__4731__auto___65582 = G__65583;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64922 = conformed_args__63365__auto__;
var map__64922__$1 = (((((!((map__64922 == null))))?(((((map__64922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64922):map__64922);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64922__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64922__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64922__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq64918){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64918));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feOffset "hello")
 * (feOffset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feOffset {:onClick f} "hello")
 * (feOffset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feOffset :#the-id.klass.other-klass "hello")
 * (feOffset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feOffset = (function com$fulcrologic$fulcro$dom$feOffset(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65584 = arguments.length;
var i__4731__auto___65585 = (0);
while(true){
if((i__4731__auto___65585 < len__4730__auto___65584)){
args__4736__auto__.push((arguments[i__4731__auto___65585]));

var G__65586 = (i__4731__auto___65585 + (1));
i__4731__auto___65585 = G__65586;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64928 = conformed_args__63365__auto__;
var map__64928__$1 = (((((!((map__64928 == null))))?(((((map__64928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64928):map__64928);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64928__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64928__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64928__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq64927){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64927));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (embed "hello")
 * (embed nil "hello")
 * 
 * These two are made equivalent at compile time
 * (embed {:onClick f} "hello")
 * (embed #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (embed :#the-id.klass.other-klass "hello")
 * (embed :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.embed = (function com$fulcrologic$fulcro$dom$embed(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65593 = arguments.length;
var i__4731__auto___65594 = (0);
while(true){
if((i__4731__auto___65594 < len__4730__auto___65593)){
args__4736__auto__.push((arguments[i__4731__auto___65594]));

var G__65595 = (i__4731__auto___65594 + (1));
i__4731__auto___65594 = G__65595;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64935 = conformed_args__63365__auto__;
var map__64935__$1 = (((((!((map__64935 == null))))?(((((map__64935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64935):map__64935);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64935__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64935__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64935__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq64933){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64933));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateMotion "hello")
 * (animateMotion nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateMotion {:onClick f} "hello")
 * (animateMotion #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateMotion :#the-id.klass.other-klass "hello")
 * (animateMotion :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateMotion = (function com$fulcrologic$fulcro$dom$animateMotion(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65597 = arguments.length;
var i__4731__auto___65598 = (0);
while(true){
if((i__4731__auto___65598 < len__4730__auto___65597)){
args__4736__auto__.push((arguments[i__4731__auto___65598]));

var G__65599 = (i__4731__auto___65598 + (1));
i__4731__auto___65598 = G__65599;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64941 = conformed_args__63365__auto__;
var map__64941__$1 = (((((!((map__64941 == null))))?(((((map__64941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64941):map__64941);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64941__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64941__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64941__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq64937){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64937));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h3 "hello")
 * (h3 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h3 {:onClick f} "hello")
 * (h3 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h3 :#the-id.klass.other-klass "hello")
 * (h3 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h3 = (function com$fulcrologic$fulcro$dom$h3(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65602 = arguments.length;
var i__4731__auto___65603 = (0);
while(true){
if((i__4731__auto___65603 < len__4730__auto___65602)){
args__4736__auto__.push((arguments[i__4731__auto___65603]));

var G__65604 = (i__4731__auto___65603 + (1));
i__4731__auto___65603 = G__65604;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64945 = conformed_args__63365__auto__;
var map__64945__$1 = (((((!((map__64945 == null))))?(((((map__64945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64945):map__64945);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64945__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64945__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64945__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq64943){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64943));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (body "hello")
 * (body nil "hello")
 * 
 * These two are made equivalent at compile time
 * (body {:onClick f} "hello")
 * (body #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (body :#the-id.klass.other-klass "hello")
 * (body :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.body = (function com$fulcrologic$fulcro$dom$body(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65605 = arguments.length;
var i__4731__auto___65606 = (0);
while(true){
if((i__4731__auto___65606 < len__4730__auto___65605)){
args__4736__auto__.push((arguments[i__4731__auto___65606]));

var G__65607 = (i__4731__auto___65606 + (1));
i__4731__auto___65606 = G__65607;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64952 = conformed_args__63365__auto__;
var map__64952__$1 = (((((!((map__64952 == null))))?(((((map__64952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64952):map__64952);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64952__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64952__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64952__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq64950){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64950));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hkern "hello")
 * (hkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hkern {:onClick f} "hello")
 * (hkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hkern :#the-id.klass.other-klass "hello")
 * (hkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hkern = (function com$fulcrologic$fulcro$dom$hkern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65608 = arguments.length;
var i__4731__auto___65609 = (0);
while(true){
if((i__4731__auto___65609 < len__4730__auto___65608)){
args__4736__auto__.push((arguments[i__4731__auto___65609]));

var G__65610 = (i__4731__auto___65609 + (1));
i__4731__auto___65609 = G__65610;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64955 = conformed_args__63365__auto__;
var map__64955__$1 = (((((!((map__64955 == null))))?(((((map__64955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64955):map__64955);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64955__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64955__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64955__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq64954){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64954));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (keygen "hello")
 * (keygen nil "hello")
 * 
 * These two are made equivalent at compile time
 * (keygen {:onClick f} "hello")
 * (keygen #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (keygen :#the-id.klass.other-klass "hello")
 * (keygen :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.keygen = (function com$fulcrologic$fulcro$dom$keygen(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65611 = arguments.length;
var i__4731__auto___65612 = (0);
while(true){
if((i__4731__auto___65612 < len__4730__auto___65611)){
args__4736__auto__.push((arguments[i__4731__auto___65612]));

var G__65613 = (i__4731__auto___65612 + (1));
i__4731__auto___65612 = G__65613;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64966 = conformed_args__63365__auto__;
var map__64966__$1 = (((((!((map__64966 == null))))?(((((map__64966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64966):map__64966);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64966__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64966__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64966__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq64959){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64959));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-format "hello")
 * (font-face-format nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-format {:onClick f} "hello")
 * (font-face-format #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-format :#the-id.klass.other-klass "hello")
 * (font-face-format :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_format = (function com$fulcrologic$fulcro$dom$font_face_format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65614 = arguments.length;
var i__4731__auto___65615 = (0);
while(true){
if((i__4731__auto___65615 < len__4730__auto___65614)){
args__4736__auto__.push((arguments[i__4731__auto___65615]));

var G__65616 = (i__4731__auto___65615 + (1));
i__4731__auto___65615 = G__65616;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64970 = conformed_args__63365__auto__;
var map__64970__$1 = (((((!((map__64970 == null))))?(((((map__64970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64970):map__64970);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64970__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64970__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64970__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq64969){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64969));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncA "hello")
 * (feFuncA nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncA {:onClick f} "hello")
 * (feFuncA #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncA :#the-id.klass.other-klass "hello")
 * (feFuncA :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncA = (function com$fulcrologic$fulcro$dom$feFuncA(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65617 = arguments.length;
var i__4731__auto___65618 = (0);
while(true){
if((i__4731__auto___65618 < len__4730__auto___65617)){
args__4736__auto__.push((arguments[i__4731__auto___65618]));

var G__65619 = (i__4731__auto___65618 + (1));
i__4731__auto___65618 = G__65619;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64980 = conformed_args__63365__auto__;
var map__64980__$1 = (((((!((map__64980 == null))))?(((((map__64980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64980):map__64980);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64980__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64980__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64980__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq64976){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64976));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (progress "hello")
 * (progress nil "hello")
 * 
 * These two are made equivalent at compile time
 * (progress {:onClick f} "hello")
 * (progress #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (progress :#the-id.klass.other-klass "hello")
 * (progress :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.progress = (function com$fulcrologic$fulcro$dom$progress(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65620 = arguments.length;
var i__4731__auto___65621 = (0);
while(true){
if((i__4731__auto___65621 < len__4730__auto___65620)){
args__4736__auto__.push((arguments[i__4731__auto___65621]));

var G__65622 = (i__4731__auto___65621 + (1));
i__4731__auto___65621 = G__65622;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64983 = conformed_args__63365__auto__;
var map__64983__$1 = (((((!((map__64983 == null))))?(((((map__64983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64983):map__64983);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64983__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64983__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64983__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq64982){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64982));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (main "hello")
 * (main nil "hello")
 * 
 * These two are made equivalent at compile time
 * (main {:onClick f} "hello")
 * (main #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (main :#the-id.klass.other-klass "hello")
 * (main :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.main = (function com$fulcrologic$fulcro$dom$main(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65623 = arguments.length;
var i__4731__auto___65624 = (0);
while(true){
if((i__4731__auto___65624 < len__4730__auto___65623)){
args__4736__auto__.push((arguments[i__4731__auto___65624]));

var G__65625 = (i__4731__auto___65624 + (1));
i__4731__auto___65624 = G__65625;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64986 = conformed_args__63365__auto__;
var map__64986__$1 = (((((!((map__64986 == null))))?(((((map__64986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64986):map__64986);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64986__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64986__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64986__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq64985){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64985));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cite "hello")
 * (cite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cite {:onClick f} "hello")
 * (cite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cite :#the-id.klass.other-klass "hello")
 * (cite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cite = (function com$fulcrologic$fulcro$dom$cite(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65626 = arguments.length;
var i__4731__auto___65627 = (0);
while(true){
if((i__4731__auto___65627 < len__4730__auto___65626)){
args__4736__auto__.push((arguments[i__4731__auto___65627]));

var G__65628 = (i__4731__auto___65627 + (1));
i__4731__auto___65627 = G__65628;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__64990 = conformed_args__63365__auto__;
var map__64990__$1 = (((((!((map__64990 == null))))?(((((map__64990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64990):map__64990);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64990__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64990__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64990__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq64988){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64988));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rect "hello")
 * (rect nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rect {:onClick f} "hello")
 * (rect #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rect :#the-id.klass.other-klass "hello")
 * (rect :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rect = (function com$fulcrologic$fulcro$dom$rect(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65629 = arguments.length;
var i__4731__auto___65630 = (0);
while(true){
if((i__4731__auto___65630 < len__4730__auto___65629)){
args__4736__auto__.push((arguments[i__4731__auto___65630]));

var G__65631 = (i__4731__auto___65630 + (1));
i__4731__auto___65630 = G__65631;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65001 = conformed_args__63365__auto__;
var map__65001__$1 = (((((!((map__65001 == null))))?(((((map__65001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65001):map__65001);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65001__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65001__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65001__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq64992){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64992));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tref "hello")
 * (tref nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tref {:onClick f} "hello")
 * (tref #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tref :#the-id.klass.other-klass "hello")
 * (tref :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tref = (function com$fulcrologic$fulcro$dom$tref(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65632 = arguments.length;
var i__4731__auto___65633 = (0);
while(true){
if((i__4731__auto___65633 < len__4730__auto___65632)){
args__4736__auto__.push((arguments[i__4731__auto___65633]));

var G__65634 = (i__4731__auto___65633 + (1));
i__4731__auto___65633 = G__65634;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65007 = conformed_args__63365__auto__;
var map__65007__$1 = (((((!((map__65007 == null))))?(((((map__65007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65007):map__65007);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65007__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65007__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65007__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq65005){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65005));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshpatch "hello")
 * (meshpatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshpatch {:onClick f} "hello")
 * (meshpatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshpatch :#the-id.klass.other-klass "hello")
 * (meshpatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshpatch = (function com$fulcrologic$fulcro$dom$meshpatch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65635 = arguments.length;
var i__4731__auto___65636 = (0);
while(true){
if((i__4731__auto___65636 < len__4730__auto___65635)){
args__4736__auto__.push((arguments[i__4731__auto___65636]));

var G__65637 = (i__4731__auto___65636 + (1));
i__4731__auto___65636 = G__65637;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65011 = conformed_args__63365__auto__;
var map__65011__$1 = (((((!((map__65011 == null))))?(((((map__65011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65011):map__65011);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65011__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65011__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65011__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq65010){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65010));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polyline "hello")
 * (polyline nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polyline {:onClick f} "hello")
 * (polyline #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polyline :#the-id.klass.other-klass "hello")
 * (polyline :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polyline = (function com$fulcrologic$fulcro$dom$polyline(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65638 = arguments.length;
var i__4731__auto___65639 = (0);
while(true){
if((i__4731__auto___65639 < len__4730__auto___65638)){
args__4736__auto__.push((arguments[i__4731__auto___65639]));

var G__65640 = (i__4731__auto___65639 + (1));
i__4731__auto___65639 = G__65640;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65014 = conformed_args__63365__auto__;
var map__65014__$1 = (((((!((map__65014 == null))))?(((((map__65014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65014):map__65014);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65014__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65014__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65014__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq65013){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65013));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (metadata "hello")
 * (metadata nil "hello")
 * 
 * These two are made equivalent at compile time
 * (metadata {:onClick f} "hello")
 * (metadata #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (metadata :#the-id.klass.other-klass "hello")
 * (metadata :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.metadata = (function com$fulcrologic$fulcro$dom$metadata(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65641 = arguments.length;
var i__4731__auto___65642 = (0);
while(true){
if((i__4731__auto___65642 < len__4730__auto___65641)){
args__4736__auto__.push((arguments[i__4731__auto___65642]));

var G__65643 = (i__4731__auto___65642 + (1));
i__4731__auto___65642 = G__65643;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65018 = conformed_args__63365__auto__;
var map__65018__$1 = (((((!((map__65018 == null))))?(((((map__65018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65018):map__65018);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65018__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65018__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65018__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq65016){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65016));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (map "hello")
 * (map nil "hello")
 * 
 * These two are made equivalent at compile time
 * (map {:onClick f} "hello")
 * (map #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (map :#the-id.klass.other-klass "hello")
 * (map :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.map = (function com$fulcrologic$fulcro$dom$map(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65644 = arguments.length;
var i__4731__auto___65645 = (0);
while(true){
if((i__4731__auto___65645 < len__4730__auto___65644)){
args__4736__auto__.push((arguments[i__4731__auto___65645]));

var G__65646 = (i__4731__auto___65645 + (1));
i__4731__auto___65645 = G__65646;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65021 = conformed_args__63365__auto__;
var map__65021__$1 = (((((!((map__65021 == null))))?(((((map__65021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65021):map__65021);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65021__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65021__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65021__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq65020){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65020));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (object "hello")
 * (object nil "hello")
 * 
 * These two are made equivalent at compile time
 * (object {:onClick f} "hello")
 * (object #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (object :#the-id.klass.other-klass "hello")
 * (object :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.object = (function com$fulcrologic$fulcro$dom$object(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65647 = arguments.length;
var i__4731__auto___65648 = (0);
while(true){
if((i__4731__auto___65648 < len__4730__auto___65647)){
args__4736__auto__.push((arguments[i__4731__auto___65648]));

var G__65649 = (i__4731__auto___65648 + (1));
i__4731__auto___65648 = G__65649;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65024 = conformed_args__63365__auto__;
var map__65024__$1 = (((((!((map__65024 == null))))?(((((map__65024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65024):map__65024);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65024__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65024__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65024__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq65023){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65023));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (i "hello")
 * (i nil "hello")
 * 
 * These two are made equivalent at compile time
 * (i {:onClick f} "hello")
 * (i #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (i :#the-id.klass.other-klass "hello")
 * (i :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.i = (function com$fulcrologic$fulcro$dom$i(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65650 = arguments.length;
var i__4731__auto___65651 = (0);
while(true){
if((i__4731__auto___65651 < len__4730__auto___65650)){
args__4736__auto__.push((arguments[i__4731__auto___65651]));

var G__65652 = (i__4731__auto___65651 + (1));
i__4731__auto___65651 = G__65652;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65027 = conformed_args__63365__auto__;
var map__65027__$1 = (((((!((map__65027 == null))))?(((((map__65027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65027):map__65027);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65027__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65027__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65027__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq65026){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65026));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-name "hello")
 * (font-face-name nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-name {:onClick f} "hello")
 * (font-face-name #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-name :#the-id.klass.other-klass "hello")
 * (font-face-name :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_name = (function com$fulcrologic$fulcro$dom$font_face_name(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65653 = arguments.length;
var i__4731__auto___65654 = (0);
while(true){
if((i__4731__auto___65654 < len__4730__auto___65653)){
args__4736__auto__.push((arguments[i__4731__auto___65654]));

var G__65655 = (i__4731__auto___65654 + (1));
i__4731__auto___65654 = G__65655;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65031 = conformed_args__63365__auto__;
var map__65031__$1 = (((((!((map__65031 == null))))?(((((map__65031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65031):map__65031);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65031__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65031__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65031__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq65029){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65029));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (p "hello")
 * (p nil "hello")
 * 
 * These two are made equivalent at compile time
 * (p {:onClick f} "hello")
 * (p #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (p :#the-id.klass.other-klass "hello")
 * (p :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.p = (function com$fulcrologic$fulcro$dom$p(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65656 = arguments.length;
var i__4731__auto___65657 = (0);
while(true){
if((i__4731__auto___65657 < len__4730__auto___65656)){
args__4736__auto__.push((arguments[i__4731__auto___65657]));

var G__65658 = (i__4731__auto___65657 + (1));
i__4731__auto___65657 = G__65658;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65034 = conformed_args__63365__auto__;
var map__65034__$1 = (((((!((map__65034 == null))))?(((((map__65034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65034):map__65034);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65034__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65034__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65034__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq65033){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65033));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncR "hello")
 * (feFuncR nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncR {:onClick f} "hello")
 * (feFuncR #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncR :#the-id.klass.other-klass "hello")
 * (feFuncR :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncR = (function com$fulcrologic$fulcro$dom$feFuncR(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65659 = arguments.length;
var i__4731__auto___65660 = (0);
while(true){
if((i__4731__auto___65660 < len__4730__auto___65659)){
args__4736__auto__.push((arguments[i__4731__auto___65660]));

var G__65661 = (i__4731__auto___65660 + (1));
i__4731__auto___65660 = G__65661;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65037 = conformed_args__63365__auto__;
var map__65037__$1 = (((((!((map__65037 == null))))?(((((map__65037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65037):map__65037);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65037__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65037__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65037__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq65036){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65036));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatchpath "hello")
 * (hatchpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatchpath {:onClick f} "hello")
 * (hatchpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatchpath :#the-id.klass.other-klass "hello")
 * (hatchpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatchpath = (function com$fulcrologic$fulcro$dom$hatchpath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65662 = arguments.length;
var i__4731__auto___65663 = (0);
while(true){
if((i__4731__auto___65663 < len__4730__auto___65662)){
args__4736__auto__.push((arguments[i__4731__auto___65663]));

var G__65664 = (i__4731__auto___65663 + (1));
i__4731__auto___65663 = G__65664;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65041 = conformed_args__63365__auto__;
var map__65041__$1 = (((((!((map__65041 == null))))?(((((map__65041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65041):map__65041);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65041__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65041__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65041__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq65039){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65039));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem "hello")
 * (altGlyphItem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem {:onClick f} "hello")
 * (altGlyphItem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphItem :#the-id.klass.other-klass "hello")
 * (altGlyphItem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphItem = (function com$fulcrologic$fulcro$dom$altGlyphItem(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65665 = arguments.length;
var i__4731__auto___65666 = (0);
while(true){
if((i__4731__auto___65666 < len__4730__auto___65665)){
args__4736__auto__.push((arguments[i__4731__auto___65666]));

var G__65667 = (i__4731__auto___65666 + (1));
i__4731__auto___65666 = G__65667;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65044 = conformed_args__63365__auto__;
var map__65044__$1 = (((((!((map__65044 == null))))?(((((map__65044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65044):map__65044);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65044__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65044__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65044__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq65043){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65043));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (nav "hello")
 * (nav nil "hello")
 * 
 * These two are made equivalent at compile time
 * (nav {:onClick f} "hello")
 * (nav #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (nav :#the-id.klass.other-klass "hello")
 * (nav :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.nav = (function com$fulcrologic$fulcro$dom$nav(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65668 = arguments.length;
var i__4731__auto___65669 = (0);
while(true){
if((i__4731__auto___65669 < len__4730__auto___65668)){
args__4736__auto__.push((arguments[i__4731__auto___65669]));

var G__65670 = (i__4731__auto___65669 + (1));
i__4731__auto___65669 = G__65670;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65047 = conformed_args__63365__auto__;
var map__65047__$1 = (((((!((map__65047 == null))))?(((((map__65047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65047):map__65047);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65047__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65047__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65047__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq65046){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65046));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ruby "hello")
 * (ruby nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ruby {:onClick f} "hello")
 * (ruby #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ruby :#the-id.klass.other-klass "hello")
 * (ruby :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ruby = (function com$fulcrologic$fulcro$dom$ruby(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65671 = arguments.length;
var i__4731__auto___65672 = (0);
while(true){
if((i__4731__auto___65672 < len__4730__auto___65671)){
args__4736__auto__.push((arguments[i__4731__auto___65672]));

var G__65673 = (i__4731__auto___65672 + (1));
i__4731__auto___65672 = G__65673;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65050 = conformed_args__63365__auto__;
var map__65050__$1 = (((((!((map__65050 == null))))?(((((map__65050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65050):map__65050);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65050__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65050__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65050__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq65049){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65049));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (switch "hello")
 * (switch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (switch {:onClick f} "hello")
 * (switch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (switch :#the-id.klass.other-klass "hello")
 * (switch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.switch$ = (function com$fulcrologic$fulcro$dom$switch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65674 = arguments.length;
var i__4731__auto___65675 = (0);
while(true){
if((i__4731__auto___65675 < len__4730__auto___65674)){
args__4736__auto__.push((arguments[i__4731__auto___65675]));

var G__65676 = (i__4731__auto___65675 + (1));
i__4731__auto___65675 = G__65676;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65053 = conformed_args__63365__auto__;
var map__65053__$1 = (((((!((map__65053 == null))))?(((((map__65053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65053):map__65053);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65053__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65053__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65053__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq65052){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65052));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (a "hello")
 * (a nil "hello")
 * 
 * These two are made equivalent at compile time
 * (a {:onClick f} "hello")
 * (a #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (a :#the-id.klass.other-klass "hello")
 * (a :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.a = (function com$fulcrologic$fulcro$dom$a(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65677 = arguments.length;
var i__4731__auto___65678 = (0);
while(true){
if((i__4731__auto___65678 < len__4730__auto___65677)){
args__4736__auto__.push((arguments[i__4731__auto___65678]));

var G__65679 = (i__4731__auto___65678 + (1));
i__4731__auto___65678 = G__65679;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65056 = conformed_args__63365__auto__;
var map__65056__$1 = (((((!((map__65056 == null))))?(((((map__65056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65056):map__65056);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65056__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65056__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65056__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq65055){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65055));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (view "hello")
 * (view nil "hello")
 * 
 * These two are made equivalent at compile time
 * (view {:onClick f} "hello")
 * (view #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (view :#the-id.klass.other-klass "hello")
 * (view :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.view = (function com$fulcrologic$fulcro$dom$view(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65680 = arguments.length;
var i__4731__auto___65681 = (0);
while(true){
if((i__4731__auto___65681 < len__4730__auto___65680)){
args__4736__auto__.push((arguments[i__4731__auto___65681]));

var G__65682 = (i__4731__auto___65681 + (1));
i__4731__auto___65681 = G__65682;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65059 = conformed_args__63365__auto__;
var map__65059__$1 = (((((!((map__65059 == null))))?(((((map__65059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65059):map__65059);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65059__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65059__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65059__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq65058){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65058));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menu "hello")
 * (menu nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menu {:onClick f} "hello")
 * (menu #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menu :#the-id.klass.other-klass "hello")
 * (menu :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menu = (function com$fulcrologic$fulcro$dom$menu(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65683 = arguments.length;
var i__4731__auto___65684 = (0);
while(true){
if((i__4731__auto___65684 < len__4730__auto___65683)){
args__4736__auto__.push((arguments[i__4731__auto___65684]));

var G__65685 = (i__4731__auto___65684 + (1));
i__4731__auto___65684 = G__65685;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65062 = conformed_args__63365__auto__;
var map__65062__$1 = (((((!((map__65062 == null))))?(((((map__65062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65062):map__65062);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65062__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65062__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65062__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq65061){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65061));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (blockquote "hello")
 * (blockquote nil "hello")
 * 
 * These two are made equivalent at compile time
 * (blockquote {:onClick f} "hello")
 * (blockquote #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (blockquote :#the-id.klass.other-klass "hello")
 * (blockquote :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.blockquote = (function com$fulcrologic$fulcro$dom$blockquote(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65686 = arguments.length;
var i__4731__auto___65687 = (0);
while(true){
if((i__4731__auto___65687 < len__4730__auto___65686)){
args__4736__auto__.push((arguments[i__4731__auto___65687]));

var G__65688 = (i__4731__auto___65687 + (1));
i__4731__auto___65687 = G__65688;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65065 = conformed_args__63365__auto__;
var map__65065__$1 = (((((!((map__65065 == null))))?(((((map__65065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65065):map__65065);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65065__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65065__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65065__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq65064){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65064));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (img "hello")
 * (img nil "hello")
 * 
 * These two are made equivalent at compile time
 * (img {:onClick f} "hello")
 * (img #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (img :#the-id.klass.other-klass "hello")
 * (img :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.img = (function com$fulcrologic$fulcro$dom$img(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65689 = arguments.length;
var i__4731__auto___65690 = (0);
while(true){
if((i__4731__auto___65690 < len__4730__auto___65689)){
args__4736__auto__.push((arguments[i__4731__auto___65690]));

var G__65691 = (i__4731__auto___65690 + (1));
i__4731__auto___65690 = G__65691;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65068 = conformed_args__63365__auto__;
var map__65068__$1 = (((((!((map__65068 == null))))?(((((map__65068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65068):map__65068);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65068__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65068__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65068__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq65067){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65067));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncG "hello")
 * (feFuncG nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncG {:onClick f} "hello")
 * (feFuncG #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncG :#the-id.klass.other-klass "hello")
 * (feFuncG :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncG = (function com$fulcrologic$fulcro$dom$feFuncG(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65692 = arguments.length;
var i__4731__auto___65693 = (0);
while(true){
if((i__4731__auto___65693 < len__4730__auto___65692)){
args__4736__auto__.push((arguments[i__4731__auto___65693]));

var G__65694 = (i__4731__auto___65693 + (1));
i__4731__auto___65693 = G__65694;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65071 = conformed_args__63365__auto__;
var map__65071__$1 = (((((!((map__65071 == null))))?(((((map__65071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65071):map__65071);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65071__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65071__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65071__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq65070){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65070));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (text "hello")
 * (text nil "hello")
 * 
 * These two are made equivalent at compile time
 * (text {:onClick f} "hello")
 * (text #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (text :#the-id.klass.other-klass "hello")
 * (text :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.text = (function com$fulcrologic$fulcro$dom$text(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65695 = arguments.length;
var i__4731__auto___65696 = (0);
while(true){
if((i__4731__auto___65696 < len__4730__auto___65695)){
args__4736__auto__.push((arguments[i__4731__auto___65696]));

var G__65697 = (i__4731__auto___65696 + (1));
i__4731__auto___65696 = G__65697;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65074 = conformed_args__63365__auto__;
var map__65074__$1 = (((((!((map__65074 == null))))?(((((map__65074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65074):map__65074);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65074__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65074__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65074__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq65073){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65073));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (span "hello")
 * (span nil "hello")
 * 
 * These two are made equivalent at compile time
 * (span {:onClick f} "hello")
 * (span #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (span :#the-id.klass.other-klass "hello")
 * (span :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.span = (function com$fulcrologic$fulcro$dom$span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65698 = arguments.length;
var i__4731__auto___65699 = (0);
while(true){
if((i__4731__auto___65699 < len__4730__auto___65698)){
args__4736__auto__.push((arguments[i__4731__auto___65699]));

var G__65700 = (i__4731__auto___65699 + (1));
i__4731__auto___65699 = G__65700;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65077 = conformed_args__63365__auto__;
var map__65077__$1 = (((((!((map__65077 == null))))?(((((map__65077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65077):map__65077);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65077__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65077__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65077__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq65076){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65076));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (track "hello")
 * (track nil "hello")
 * 
 * These two are made equivalent at compile time
 * (track {:onClick f} "hello")
 * (track #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (track :#the-id.klass.other-klass "hello")
 * (track :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.track = (function com$fulcrologic$fulcro$dom$track(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65701 = arguments.length;
var i__4731__auto___65702 = (0);
while(true){
if((i__4731__auto___65702 < len__4730__auto___65701)){
args__4736__auto__.push((arguments[i__4731__auto___65702]));

var G__65703 = (i__4731__auto___65702 + (1));
i__4731__auto___65702 = G__65703;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65080 = conformed_args__63365__auto__;
var map__65080__$1 = (((((!((map__65080 == null))))?(((((map__65080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65080):map__65080);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65080__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65080__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65080__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq65079){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65079));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (data "hello")
 * (data nil "hello")
 * 
 * These two are made equivalent at compile time
 * (data {:onClick f} "hello")
 * (data #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (data :#the-id.klass.other-klass "hello")
 * (data :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.data = (function com$fulcrologic$fulcro$dom$data(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65704 = arguments.length;
var i__4731__auto___65705 = (0);
while(true){
if((i__4731__auto___65705 < len__4730__auto___65704)){
args__4736__auto__.push((arguments[i__4731__auto___65705]));

var G__65706 = (i__4731__auto___65705 + (1));
i__4731__auto___65705 = G__65706;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65083 = conformed_args__63365__auto__;
var map__65083__$1 = (((((!((map__65083 == null))))?(((((map__65083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65083):map__65083);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65083__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65083__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65083__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq65082){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65082));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (u "hello")
 * (u nil "hello")
 * 
 * These two are made equivalent at compile time
 * (u {:onClick f} "hello")
 * (u #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (u :#the-id.klass.other-klass "hello")
 * (u :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.u = (function com$fulcrologic$fulcro$dom$u(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65707 = arguments.length;
var i__4731__auto___65708 = (0);
while(true){
if((i__4731__auto___65708 < len__4730__auto___65707)){
args__4736__auto__.push((arguments[i__4731__auto___65708]));

var G__65709 = (i__4731__auto___65708 + (1));
i__4731__auto___65708 = G__65709;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65086 = conformed_args__63365__auto__;
var map__65086__$1 = (((((!((map__65086 == null))))?(((((map__65086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65086):map__65086);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65086__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65086__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65086__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq65085){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65085));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dl "hello")
 * (dl nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dl {:onClick f} "hello")
 * (dl #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dl :#the-id.klass.other-klass "hello")
 * (dl :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dl = (function com$fulcrologic$fulcro$dom$dl(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65710 = arguments.length;
var i__4731__auto___65711 = (0);
while(true){
if((i__4731__auto___65711 < len__4730__auto___65710)){
args__4736__auto__.push((arguments[i__4731__auto___65711]));

var G__65712 = (i__4731__auto___65711 + (1));
i__4731__auto___65711 = G__65712;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65089 = conformed_args__63365__auto__;
var map__65089__$1 = (((((!((map__65089 == null))))?(((((map__65089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65089):map__65089);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65089__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65089__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65089__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq65088){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65088));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (select "hello")
 * (select nil "hello")
 * 
 * These two are made equivalent at compile time
 * (select {:onClick f} "hello")
 * (select #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (select :#the-id.klass.other-klass "hello")
 * (select :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.select = (function com$fulcrologic$fulcro$dom$select(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65713 = arguments.length;
var i__4731__auto___65714 = (0);
while(true){
if((i__4731__auto___65714 < len__4730__auto___65713)){
args__4736__auto__.push((arguments[i__4731__auto___65714]));

var G__65715 = (i__4731__auto___65714 + (1));
i__4731__auto___65714 = G__65715;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65092 = conformed_args__63365__auto__;
var map__65092__$1 = (((((!((map__65092 == null))))?(((((map__65092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65092):map__65092);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65092__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65092__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65092__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq65091){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65091));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polygon "hello")
 * (polygon nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polygon {:onClick f} "hello")
 * (polygon #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polygon :#the-id.klass.other-klass "hello")
 * (polygon :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polygon = (function com$fulcrologic$fulcro$dom$polygon(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65716 = arguments.length;
var i__4731__auto___65717 = (0);
while(true){
if((i__4731__auto___65717 < len__4730__auto___65716)){
args__4736__auto__.push((arguments[i__4731__auto___65717]));

var G__65718 = (i__4731__auto___65717 + (1));
i__4731__auto___65717 = G__65718;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65095 = conformed_args__63365__auto__;
var map__65095__$1 = (((((!((map__65095 == null))))?(((((map__65095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65095):map__65095);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65095__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65095__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65095__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq65094){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65094));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pattern "hello")
 * (pattern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pattern {:onClick f} "hello")
 * (pattern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pattern :#the-id.klass.other-klass "hello")
 * (pattern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pattern = (function com$fulcrologic$fulcro$dom$pattern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65719 = arguments.length;
var i__4731__auto___65720 = (0);
while(true){
if((i__4731__auto___65720 < len__4730__auto___65719)){
args__4736__auto__.push((arguments[i__4731__auto___65720]));

var G__65721 = (i__4731__auto___65720 + (1));
i__4731__auto___65720 = G__65721;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65098 = conformed_args__63365__auto__;
var map__65098__$1 = (((((!((map__65098 == null))))?(((((map__65098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65098):map__65098);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65098__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65098__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65098__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq65097){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65097));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (html "hello")
 * (html nil "hello")
 * 
 * These two are made equivalent at compile time
 * (html {:onClick f} "hello")
 * (html #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (html :#the-id.klass.other-klass "hello")
 * (html :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.html = (function com$fulcrologic$fulcro$dom$html(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65722 = arguments.length;
var i__4731__auto___65723 = (0);
while(true){
if((i__4731__auto___65723 < len__4730__auto___65722)){
args__4736__auto__.push((arguments[i__4731__auto___65723]));

var G__65724 = (i__4731__auto___65723 + (1));
i__4731__auto___65723 = G__65724;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65101 = conformed_args__63365__auto__;
var map__65101__$1 = (((((!((map__65101 == null))))?(((((map__65101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65101):map__65101);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65101__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65101__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65101__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq65100){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65100));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (foreignObject "hello")
 * (foreignObject nil "hello")
 * 
 * These two are made equivalent at compile time
 * (foreignObject {:onClick f} "hello")
 * (foreignObject #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (foreignObject :#the-id.klass.other-klass "hello")
 * (foreignObject :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.foreignObject = (function com$fulcrologic$fulcro$dom$foreignObject(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65725 = arguments.length;
var i__4731__auto___65726 = (0);
while(true){
if((i__4731__auto___65726 < len__4730__auto___65725)){
args__4736__auto__.push((arguments[i__4731__auto___65726]));

var G__65727 = (i__4731__auto___65726 + (1));
i__4731__auto___65726 = G__65727;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65104 = conformed_args__63365__auto__;
var map__65104__$1 = (((((!((map__65104 == null))))?(((((map__65104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65104):map__65104);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65104__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65104__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65104__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq65103){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65103));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (thead "hello")
 * (thead nil "hello")
 * 
 * These two are made equivalent at compile time
 * (thead {:onClick f} "hello")
 * (thead #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (thead :#the-id.klass.other-klass "hello")
 * (thead :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.thead = (function com$fulcrologic$fulcro$dom$thead(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65728 = arguments.length;
var i__4731__auto___65729 = (0);
while(true){
if((i__4731__auto___65729 < len__4730__auto___65728)){
args__4736__auto__.push((arguments[i__4731__auto___65729]));

var G__65730 = (i__4731__auto___65729 + (1));
i__4731__auto___65729 = G__65730;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65107 = conformed_args__63365__auto__;
var map__65107__$1 = (((((!((map__65107 == null))))?(((((map__65107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65107):map__65107);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65107__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65107__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65107__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq65106){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65106));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (path "hello")
 * (path nil "hello")
 * 
 * These two are made equivalent at compile time
 * (path {:onClick f} "hello")
 * (path #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (path :#the-id.klass.other-klass "hello")
 * (path :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.path = (function com$fulcrologic$fulcro$dom$path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65731 = arguments.length;
var i__4731__auto___65732 = (0);
while(true){
if((i__4731__auto___65732 < len__4730__auto___65731)){
args__4736__auto__.push((arguments[i__4731__auto___65732]));

var G__65733 = (i__4731__auto___65732 + (1));
i__4731__auto___65732 = G__65733;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65110 = conformed_args__63365__auto__;
var map__65110__$1 = (((((!((map__65110 == null))))?(((((map__65110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65110):map__65110);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65110__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65110__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65110__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq65109){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65109));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (del "hello")
 * (del nil "hello")
 * 
 * These two are made equivalent at compile time
 * (del {:onClick f} "hello")
 * (del #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (del :#the-id.klass.other-klass "hello")
 * (del :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.del = (function com$fulcrologic$fulcro$dom$del(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65734 = arguments.length;
var i__4731__auto___65735 = (0);
while(true){
if((i__4731__auto___65735 < len__4730__auto___65734)){
args__4736__auto__.push((arguments[i__4731__auto___65735]));

var G__65736 = (i__4731__auto___65735 + (1));
i__4731__auto___65735 = G__65736;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65113 = conformed_args__63365__auto__;
var map__65113__$1 = (((((!((map__65113 == null))))?(((((map__65113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65113):map__65113);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65113__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65113__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65113__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq65112){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65112));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyph "hello")
 * (altGlyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyph {:onClick f} "hello")
 * (altGlyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyph :#the-id.klass.other-klass "hello")
 * (altGlyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyph = (function com$fulcrologic$fulcro$dom$altGlyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65737 = arguments.length;
var i__4731__auto___65738 = (0);
while(true){
if((i__4731__auto___65738 < len__4730__auto___65737)){
args__4736__auto__.push((arguments[i__4731__auto___65738]));

var G__65739 = (i__4731__auto___65738 + (1));
i__4731__auto___65738 = G__65739;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65116 = conformed_args__63365__auto__;
var map__65116__$1 = (((((!((map__65116 == null))))?(((((map__65116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65116):map__65116);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65116__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65116__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65116__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq65115){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65115));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fieldset "hello")
 * (fieldset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fieldset {:onClick f} "hello")
 * (fieldset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fieldset :#the-id.klass.other-klass "hello")
 * (fieldset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fieldset = (function com$fulcrologic$fulcro$dom$fieldset(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65740 = arguments.length;
var i__4731__auto___65741 = (0);
while(true){
if((i__4731__auto___65741 < len__4730__auto___65740)){
args__4736__auto__.push((arguments[i__4731__auto___65741]));

var G__65742 = (i__4731__auto___65741 + (1));
i__4731__auto___65741 = G__65742;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65119 = conformed_args__63365__auto__;
var map__65119__$1 = (((((!((map__65119 == null))))?(((((map__65119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65119):map__65119);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65119__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65119__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65119__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq65118){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65118));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (aside "hello")
 * (aside nil "hello")
 * 
 * These two are made equivalent at compile time
 * (aside {:onClick f} "hello")
 * (aside #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (aside :#the-id.klass.other-klass "hello")
 * (aside :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.aside = (function com$fulcrologic$fulcro$dom$aside(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65743 = arguments.length;
var i__4731__auto___65744 = (0);
while(true){
if((i__4731__auto___65744 < len__4730__auto___65743)){
args__4736__auto__.push((arguments[i__4731__auto___65744]));

var G__65745 = (i__4731__auto___65744 + (1));
i__4731__auto___65744 = G__65745;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65122 = conformed_args__63365__auto__;
var map__65122__$1 = (((((!((map__65122 == null))))?(((((map__65122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65122):map__65122);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65122__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65122__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65122__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq65121){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65121));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feBlend "hello")
 * (feBlend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feBlend {:onClick f} "hello")
 * (feBlend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feBlend :#the-id.klass.other-klass "hello")
 * (feBlend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feBlend = (function com$fulcrologic$fulcro$dom$feBlend(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65746 = arguments.length;
var i__4731__auto___65747 = (0);
while(true){
if((i__4731__auto___65747 < len__4730__auto___65746)){
args__4736__auto__.push((arguments[i__4731__auto___65747]));

var G__65748 = (i__4731__auto___65747 + (1));
i__4731__auto___65747 = G__65748;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65125 = conformed_args__63365__auto__;
var map__65125__$1 = (((((!((map__65125 == null))))?(((((map__65125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65125):map__65125);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65125__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65125__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65125__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq65124){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65124));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figure "hello")
 * (figure nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figure {:onClick f} "hello")
 * (figure #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figure :#the-id.klass.other-klass "hello")
 * (figure :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figure = (function com$fulcrologic$fulcro$dom$figure(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65749 = arguments.length;
var i__4731__auto___65750 = (0);
while(true){
if((i__4731__auto___65750 < len__4730__auto___65749)){
args__4736__auto__.push((arguments[i__4731__auto___65750]));

var G__65751 = (i__4731__auto___65750 + (1));
i__4731__auto___65750 = G__65751;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65128 = conformed_args__63365__auto__;
var map__65128__$1 = (((((!((map__65128 == null))))?(((((map__65128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65128):map__65128);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65128__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65128__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65128__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq65127){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65127));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textPath "hello")
 * (textPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textPath {:onClick f} "hello")
 * (textPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textPath :#the-id.klass.other-klass "hello")
 * (textPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textPath = (function com$fulcrologic$fulcro$dom$textPath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65752 = arguments.length;
var i__4731__auto___65753 = (0);
while(true){
if((i__4731__auto___65753 < len__4730__auto___65752)){
args__4736__auto__.push((arguments[i__4731__auto___65753]));

var G__65754 = (i__4731__auto___65753 + (1));
i__4731__auto___65753 = G__65754;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65131 = conformed_args__63365__auto__;
var map__65131__$1 = (((((!((map__65131 == null))))?(((((map__65131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65131):map__65131);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65131__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65131__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65131__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq65130){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65130));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figcaption "hello")
 * (figcaption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figcaption {:onClick f} "hello")
 * (figcaption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figcaption :#the-id.klass.other-klass "hello")
 * (figcaption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figcaption = (function com$fulcrologic$fulcro$dom$figcaption(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65755 = arguments.length;
var i__4731__auto___65756 = (0);
while(true){
if((i__4731__auto___65756 < len__4730__auto___65755)){
args__4736__auto__.push((arguments[i__4731__auto___65756]));

var G__65757 = (i__4731__auto___65756 + (1));
i__4731__auto___65756 = G__65757;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65134 = conformed_args__63365__auto__;
var map__65134__$1 = (((((!((map__65134 == null))))?(((((map__65134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65134):map__65134);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65134__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65134__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65134__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq65133){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65133));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mask "hello")
 * (mask nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mask {:onClick f} "hello")
 * (mask #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mask :#the-id.klass.other-klass "hello")
 * (mask :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mask = (function com$fulcrologic$fulcro$dom$mask(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65758 = arguments.length;
var i__4731__auto___65759 = (0);
while(true){
if((i__4731__auto___65759 < len__4730__auto___65758)){
args__4736__auto__.push((arguments[i__4731__auto___65759]));

var G__65760 = (i__4731__auto___65759 + (1));
i__4731__auto___65759 = G__65760;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65137 = conformed_args__63365__auto__;
var map__65137__$1 = (((((!((map__65137 == null))))?(((((map__65137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65137):map__65137);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65137__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65137__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65137__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq65136){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65136));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (q "hello")
 * (q nil "hello")
 * 
 * These two are made equivalent at compile time
 * (q {:onClick f} "hello")
 * (q #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (q :#the-id.klass.other-klass "hello")
 * (q :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.q = (function com$fulcrologic$fulcro$dom$q(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65761 = arguments.length;
var i__4731__auto___65762 = (0);
while(true){
if((i__4731__auto___65762 < len__4730__auto___65761)){
args__4736__auto__.push((arguments[i__4731__auto___65762]));

var G__65763 = (i__4731__auto___65762 + (1));
i__4731__auto___65762 = G__65763;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65140 = conformed_args__63365__auto__;
var map__65140__$1 = (((((!((map__65140 == null))))?(((((map__65140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65140):map__65140);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65140__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65140__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65140__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq65139){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65139));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdi "hello")
 * (bdi nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdi {:onClick f} "hello")
 * (bdi #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdi :#the-id.klass.other-klass "hello")
 * (bdi :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdi = (function com$fulcrologic$fulcro$dom$bdi(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65764 = arguments.length;
var i__4731__auto___65765 = (0);
while(true){
if((i__4731__auto___65765 < len__4730__auto___65764)){
args__4736__auto__.push((arguments[i__4731__auto___65765]));

var G__65766 = (i__4731__auto___65765 + (1));
i__4731__auto___65765 = G__65766;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65143 = conformed_args__63365__auto__;
var map__65143__$1 = (((((!((map__65143 == null))))?(((((map__65143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65143):map__65143);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65143__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65143__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65143__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq65142){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65142));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDistantLight "hello")
 * (feDistantLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDistantLight {:onClick f} "hello")
 * (feDistantLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDistantLight :#the-id.klass.other-klass "hello")
 * (feDistantLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDistantLight = (function com$fulcrologic$fulcro$dom$feDistantLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65767 = arguments.length;
var i__4731__auto___65768 = (0);
while(true){
if((i__4731__auto___65768 < len__4730__auto___65767)){
args__4736__auto__.push((arguments[i__4731__auto___65768]));

var G__65769 = (i__4731__auto___65768 + (1));
i__4731__auto___65768 = G__65769;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65146 = conformed_args__63365__auto__;
var map__65146__$1 = (((((!((map__65146 == null))))?(((((map__65146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65146):map__65146);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65146__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65146__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65146__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq65145){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65145));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (video "hello")
 * (video nil "hello")
 * 
 * These two are made equivalent at compile time
 * (video {:onClick f} "hello")
 * (video #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (video :#the-id.klass.other-klass "hello")
 * (video :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.video = (function com$fulcrologic$fulcro$dom$video(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65770 = arguments.length;
var i__4731__auto___65771 = (0);
while(true){
if((i__4731__auto___65771 < len__4730__auto___65770)){
args__4736__auto__.push((arguments[i__4731__auto___65771]));

var G__65772 = (i__4731__auto___65771 + (1));
i__4731__auto___65771 = G__65772;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65149 = conformed_args__63365__auto__;
var map__65149__$1 = (((((!((map__65149 == null))))?(((((map__65149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65149):map__65149);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65149__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65149__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65149__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq65148){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65148));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (address "hello")
 * (address nil "hello")
 * 
 * These two are made equivalent at compile time
 * (address {:onClick f} "hello")
 * (address #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (address :#the-id.klass.other-klass "hello")
 * (address :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.address = (function com$fulcrologic$fulcro$dom$address(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65773 = arguments.length;
var i__4731__auto___65774 = (0);
while(true){
if((i__4731__auto___65774 < len__4730__auto___65773)){
args__4736__auto__.push((arguments[i__4731__auto___65774]));

var G__65775 = (i__4731__auto___65774 + (1));
i__4731__auto___65774 = G__65775;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65152 = conformed_args__63365__auto__;
var map__65152__$1 = (((((!((map__65152 == null))))?(((((map__65152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65152):map__65152);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65152__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65152__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65152__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq65151){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65151));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (caption "hello")
 * (caption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (caption {:onClick f} "hello")
 * (caption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (caption :#the-id.klass.other-klass "hello")
 * (caption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.caption = (function com$fulcrologic$fulcro$dom$caption(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65776 = arguments.length;
var i__4731__auto___65777 = (0);
while(true){
if((i__4731__auto___65777 < len__4730__auto___65776)){
args__4736__auto__.push((arguments[i__4731__auto___65777]));

var G__65778 = (i__4731__auto___65777 + (1));
i__4731__auto___65777 = G__65778;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65155 = conformed_args__63365__auto__;
var map__65155__$1 = (((((!((map__65155 == null))))?(((((map__65155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65155):map__65155);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65155__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65155__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65155__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq65154){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65154));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dd "hello")
 * (dd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dd {:onClick f} "hello")
 * (dd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dd :#the-id.klass.other-klass "hello")
 * (dd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dd = (function com$fulcrologic$fulcro$dom$dd(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65779 = arguments.length;
var i__4731__auto___65780 = (0);
while(true){
if((i__4731__auto___65780 < len__4730__auto___65779)){
args__4736__auto__.push((arguments[i__4731__auto___65780]));

var G__65781 = (i__4731__auto___65780 + (1));
i__4731__auto___65780 = G__65781;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65158 = conformed_args__63365__auto__;
var map__65158__$1 = (((((!((map__65158 == null))))?(((((map__65158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65158):map__65158);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65158__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65158__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65158__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq65157){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65157));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rp "hello")
 * (rp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rp {:onClick f} "hello")
 * (rp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rp :#the-id.klass.other-klass "hello")
 * (rp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rp = (function com$fulcrologic$fulcro$dom$rp(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65782 = arguments.length;
var i__4731__auto___65783 = (0);
while(true){
if((i__4731__auto___65783 < len__4730__auto___65782)){
args__4736__auto__.push((arguments[i__4731__auto___65783]));

var G__65784 = (i__4731__auto___65783 + (1));
i__4731__auto___65783 = G__65784;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65161 = conformed_args__63365__auto__;
var map__65161__$1 = (((((!((map__65161 == null))))?(((((map__65161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65161):map__65161);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65161__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65161__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65161__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq65160){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65160));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hr "hello")
 * (hr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hr {:onClick f} "hello")
 * (hr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hr :#the-id.klass.other-klass "hello")
 * (hr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hr = (function com$fulcrologic$fulcro$dom$hr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65785 = arguments.length;
var i__4731__auto___65786 = (0);
while(true){
if((i__4731__auto___65786 < len__4730__auto___65785)){
args__4736__auto__.push((arguments[i__4731__auto___65786]));

var G__65787 = (i__4731__auto___65786 + (1));
i__4731__auto___65786 = G__65787;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65164 = conformed_args__63365__auto__;
var map__65164__$1 = (((((!((map__65164 == null))))?(((((map__65164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65164):map__65164);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65164__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65164__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65164__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq65163){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65163));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meta "hello")
 * (meta nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meta {:onClick f} "hello")
 * (meta #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meta :#the-id.klass.other-klass "hello")
 * (meta :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meta = (function com$fulcrologic$fulcro$dom$meta(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65788 = arguments.length;
var i__4731__auto___65789 = (0);
while(true){
if((i__4731__auto___65789 < len__4730__auto___65788)){
args__4736__auto__.push((arguments[i__4731__auto___65789]));

var G__65790 = (i__4731__auto___65789 + (1));
i__4731__auto___65789 = G__65790;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65167 = conformed_args__63365__auto__;
var map__65167__$1 = (((((!((map__65167 == null))))?(((((map__65167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65167):map__65167);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65167__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65167__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65167__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq65166){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65166));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tbody "hello")
 * (tbody nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tbody {:onClick f} "hello")
 * (tbody #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tbody :#the-id.klass.other-klass "hello")
 * (tbody :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tbody = (function com$fulcrologic$fulcro$dom$tbody(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65791 = arguments.length;
var i__4731__auto___65792 = (0);
while(true){
if((i__4731__auto___65792 < len__4730__auto___65791)){
args__4736__auto__.push((arguments[i__4731__auto___65792]));

var G__65793 = (i__4731__auto___65792 + (1));
i__4731__auto___65792 = G__65793;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65170 = conformed_args__63365__auto__;
var map__65170__$1 = (((((!((map__65170 == null))))?(((((map__65170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65170):map__65170);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65170__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65170__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65170__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq65169){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65169));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (desc "hello")
 * (desc nil "hello")
 * 
 * These two are made equivalent at compile time
 * (desc {:onClick f} "hello")
 * (desc #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (desc :#the-id.klass.other-klass "hello")
 * (desc :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.desc = (function com$fulcrologic$fulcro$dom$desc(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65794 = arguments.length;
var i__4731__auto___65795 = (0);
while(true){
if((i__4731__auto___65795 < len__4730__auto___65794)){
args__4736__auto__.push((arguments[i__4731__auto___65795]));

var G__65796 = (i__4731__auto___65795 + (1));
i__4731__auto___65795 = G__65796;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65173 = conformed_args__63365__auto__;
var map__65173__$1 = (((((!((map__65173 == null))))?(((((map__65173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65173):map__65173);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65173__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65173__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65173__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq65172){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65172));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (table "hello")
 * (table nil "hello")
 * 
 * These two are made equivalent at compile time
 * (table {:onClick f} "hello")
 * (table #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (table :#the-id.klass.other-klass "hello")
 * (table :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.table = (function com$fulcrologic$fulcro$dom$table(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65797 = arguments.length;
var i__4731__auto___65798 = (0);
while(true){
if((i__4731__auto___65798 < len__4730__auto___65797)){
args__4736__auto__.push((arguments[i__4731__auto___65798]));

var G__65799 = (i__4731__auto___65798 + (1));
i__4731__auto___65798 = G__65799;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65176 = conformed_args__63365__auto__;
var map__65176__$1 = (((((!((map__65176 == null))))?(((((map__65176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65176):map__65176);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65176__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65176__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65176__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq65175){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65175));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pre "hello")
 * (pre nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pre {:onClick f} "hello")
 * (pre #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pre :#the-id.klass.other-klass "hello")
 * (pre :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pre = (function com$fulcrologic$fulcro$dom$pre(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65800 = arguments.length;
var i__4731__auto___65801 = (0);
while(true){
if((i__4731__auto___65801 < len__4730__auto___65800)){
args__4736__auto__.push((arguments[i__4731__auto___65801]));

var G__65802 = (i__4731__auto___65801 + (1));
i__4731__auto___65801 = G__65802;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65179 = conformed_args__63365__auto__;
var map__65179__$1 = (((((!((map__65179 == null))))?(((((map__65179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65179):map__65179);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65179__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65179__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65179__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq65178){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65178));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ul "hello")
 * (ul nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ul {:onClick f} "hello")
 * (ul #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ul :#the-id.klass.other-klass "hello")
 * (ul :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ul = (function com$fulcrologic$fulcro$dom$ul(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65803 = arguments.length;
var i__4731__auto___65804 = (0);
while(true){
if((i__4731__auto___65804 < len__4730__auto___65803)){
args__4736__auto__.push((arguments[i__4731__auto___65804]));

var G__65805 = (i__4731__auto___65804 + (1));
i__4731__auto___65804 = G__65805;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65182 = conformed_args__63365__auto__;
var map__65182__$1 = (((((!((map__65182 == null))))?(((((map__65182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65182):map__65182);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65182__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65182__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65182__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq65181){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65181));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix "hello")
 * (feConvolveMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix {:onClick f} "hello")
 * (feConvolveMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feConvolveMatrix :#the-id.klass.other-klass "hello")
 * (feConvolveMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feConvolveMatrix = (function com$fulcrologic$fulcro$dom$feConvolveMatrix(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65806 = arguments.length;
var i__4731__auto___65807 = (0);
while(true){
if((i__4731__auto___65807 < len__4730__auto___65806)){
args__4736__auto__.push((arguments[i__4731__auto___65807]));

var G__65808 = (i__4731__auto___65807 + (1));
i__4731__auto___65807 = G__65808;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65185 = conformed_args__63365__auto__;
var map__65185__$1 = (((((!((map__65185 == null))))?(((((map__65185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65185):map__65185);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65185__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65185__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65185__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq65184){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65184));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sup "hello")
 * (sup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sup {:onClick f} "hello")
 * (sup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sup :#the-id.klass.other-klass "hello")
 * (sup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sup = (function com$fulcrologic$fulcro$dom$sup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65809 = arguments.length;
var i__4731__auto___65810 = (0);
while(true){
if((i__4731__auto___65810 < len__4730__auto___65809)){
args__4736__auto__.push((arguments[i__4731__auto___65810]));

var G__65811 = (i__4731__auto___65810 + (1));
i__4731__auto___65810 = G__65811;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65188 = conformed_args__63365__auto__;
var map__65188__$1 = (((((!((map__65188 == null))))?(((((map__65188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65188):map__65188);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65188__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65188__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65188__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq65187){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65187));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dfn "hello")
 * (dfn nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dfn {:onClick f} "hello")
 * (dfn #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dfn :#the-id.klass.other-klass "hello")
 * (dfn :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dfn = (function com$fulcrologic$fulcro$dom$dfn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65812 = arguments.length;
var i__4731__auto___65813 = (0);
while(true){
if((i__4731__auto___65813 < len__4730__auto___65812)){
args__4736__auto__.push((arguments[i__4731__auto___65813]));

var G__65814 = (i__4731__auto___65813 + (1));
i__4731__auto___65813 = G__65814;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65191 = conformed_args__63365__auto__;
var map__65191__$1 = (((((!((map__65191 == null))))?(((((map__65191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65191):map__65191);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65191__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65191__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65191__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq65190){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65190));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sub "hello")
 * (sub nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sub {:onClick f} "hello")
 * (sub #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sub :#the-id.klass.other-klass "hello")
 * (sub :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sub = (function com$fulcrologic$fulcro$dom$sub(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65815 = arguments.length;
var i__4731__auto___65816 = (0);
while(true){
if((i__4731__auto___65816 < len__4730__auto___65815)){
args__4736__auto__.push((arguments[i__4731__auto___65816]));

var G__65817 = (i__4731__auto___65816 + (1));
i__4731__auto___65816 = G__65817;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65194 = conformed_args__63365__auto__;
var map__65194__$1 = (((((!((map__65194 == null))))?(((((map__65194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65194):map__65194);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65194__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65194__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65194__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq65193){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65193));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mark "hello")
 * (mark nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mark {:onClick f} "hello")
 * (mark #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mark :#the-id.klass.other-klass "hello")
 * (mark :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mark = (function com$fulcrologic$fulcro$dom$mark(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65818 = arguments.length;
var i__4731__auto___65819 = (0);
while(true){
if((i__4731__auto___65819 < len__4730__auto___65818)){
args__4736__auto__.push((arguments[i__4731__auto___65819]));

var G__65820 = (i__4731__auto___65819 + (1));
i__4731__auto___65819 = G__65820;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65197 = conformed_args__63365__auto__;
var map__65197__$1 = (((((!((map__65197 == null))))?(((((map__65197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65197):map__65197);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65197__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65197__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65197__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq65196){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65196));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap "hello")
 * (feDisplacementMap nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap {:onClick f} "hello")
 * (feDisplacementMap #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDisplacementMap :#the-id.klass.other-klass "hello")
 * (feDisplacementMap :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDisplacementMap = (function com$fulcrologic$fulcro$dom$feDisplacementMap(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65821 = arguments.length;
var i__4731__auto___65822 = (0);
while(true){
if((i__4731__auto___65822 < len__4730__auto___65821)){
args__4736__auto__.push((arguments[i__4731__auto___65822]));

var G__65823 = (i__4731__auto___65822 + (1));
i__4731__auto___65822 = G__65823;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65200 = conformed_args__63365__auto__;
var map__65200__$1 = (((((!((map__65200 == null))))?(((((map__65200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65200):map__65200);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65200__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65200__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65200__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq65199){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65199));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (unknown "hello")
 * (unknown nil "hello")
 * 
 * These two are made equivalent at compile time
 * (unknown {:onClick f} "hello")
 * (unknown #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (unknown :#the-id.klass.other-klass "hello")
 * (unknown :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.unknown = (function com$fulcrologic$fulcro$dom$unknown(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65824 = arguments.length;
var i__4731__auto___65825 = (0);
while(true){
if((i__4731__auto___65825 < len__4730__auto___65824)){
args__4736__auto__.push((arguments[i__4731__auto___65825]));

var G__65826 = (i__4731__auto___65825 + (1));
i__4731__auto___65825 = G__65826;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65203 = conformed_args__63365__auto__;
var map__65203__$1 = (((((!((map__65203 == null))))?(((((map__65203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65203):map__65203);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65203__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65203__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65203__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq65202){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65202));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (script "hello")
 * (script nil "hello")
 * 
 * These two are made equivalent at compile time
 * (script {:onClick f} "hello")
 * (script #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (script :#the-id.klass.other-klass "hello")
 * (script :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.script = (function com$fulcrologic$fulcro$dom$script(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65827 = arguments.length;
var i__4731__auto___65828 = (0);
while(true){
if((i__4731__auto___65828 < len__4730__auto___65827)){
args__4736__auto__.push((arguments[i__4731__auto___65828]));

var G__65829 = (i__4731__auto___65828 + (1));
i__4731__auto___65828 = G__65829;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65206 = conformed_args__63365__auto__;
var map__65206__$1 = (((((!((map__65206 == null))))?(((((map__65206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65206):map__65206);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65206__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65206__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65206__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq65205){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65205));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTurbulence "hello")
 * (feTurbulence nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTurbulence {:onClick f} "hello")
 * (feTurbulence #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTurbulence :#the-id.klass.other-klass "hello")
 * (feTurbulence :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTurbulence = (function com$fulcrologic$fulcro$dom$feTurbulence(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65830 = arguments.length;
var i__4731__auto___65831 = (0);
while(true){
if((i__4731__auto___65831 < len__4730__auto___65830)){
args__4736__auto__.push((arguments[i__4731__auto___65831]));

var G__65832 = (i__4731__auto___65831 + (1));
i__4731__auto___65831 = G__65832;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65209 = conformed_args__63365__auto__;
var map__65209__$1 = (((((!((map__65209 == null))))?(((((map__65209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65209):map__65209);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65209__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65209__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65209__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq65208){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65208));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (big "hello")
 * (big nil "hello")
 * 
 * These two are made equivalent at compile time
 * (big {:onClick f} "hello")
 * (big #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (big :#the-id.klass.other-klass "hello")
 * (big :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.big = (function com$fulcrologic$fulcro$dom$big(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65833 = arguments.length;
var i__4731__auto___65834 = (0);
while(true){
if((i__4731__auto___65834 < len__4730__auto___65833)){
args__4736__auto__.push((arguments[i__4731__auto___65834]));

var G__65835 = (i__4731__auto___65834 + (1));
i__4731__auto___65834 = G__65835;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65212 = conformed_args__63365__auto__;
var map__65212__$1 = (((((!((map__65212 == null))))?(((((map__65212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65212):map__65212);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65212__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65212__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65212__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq65211){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65211));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (button "hello")
 * (button nil "hello")
 * 
 * These two are made equivalent at compile time
 * (button {:onClick f} "hello")
 * (button #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (button :#the-id.klass.other-klass "hello")
 * (button :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.button = (function com$fulcrologic$fulcro$dom$button(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65836 = arguments.length;
var i__4731__auto___65837 = (0);
while(true){
if((i__4731__auto___65837 < len__4730__auto___65836)){
args__4736__auto__.push((arguments[i__4731__auto___65837]));

var G__65838 = (i__4731__auto___65837 + (1));
i__4731__auto___65837 = G__65838;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65215 = conformed_args__63365__auto__;
var map__65215__$1 = (((((!((map__65215 == null))))?(((((map__65215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65215):map__65215);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65215__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65215__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65215__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq65214){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65214));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-uri "hello")
 * (font-face-uri nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-uri {:onClick f} "hello")
 * (font-face-uri #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-uri :#the-id.klass.other-klass "hello")
 * (font-face-uri :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_uri = (function com$fulcrologic$fulcro$dom$font_face_uri(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65839 = arguments.length;
var i__4731__auto___65840 = (0);
while(true){
if((i__4731__auto___65840 < len__4730__auto___65839)){
args__4736__auto__.push((arguments[i__4731__auto___65840]));

var G__65841 = (i__4731__auto___65840 + (1));
i__4731__auto___65840 = G__65841;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65218 = conformed_args__63365__auto__;
var map__65218__$1 = (((((!((map__65218 == null))))?(((((map__65218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65218):map__65218);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65218__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65218__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65218__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq65217){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65217));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (wbr "hello")
 * (wbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (wbr {:onClick f} "hello")
 * (wbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (wbr :#the-id.klass.other-klass "hello")
 * (wbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.wbr = (function com$fulcrologic$fulcro$dom$wbr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65842 = arguments.length;
var i__4731__auto___65843 = (0);
while(true){
if((i__4731__auto___65843 < len__4730__auto___65842)){
args__4736__auto__.push((arguments[i__4731__auto___65843]));

var G__65844 = (i__4731__auto___65843 + (1));
i__4731__auto___65843 = G__65844;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65221 = conformed_args__63365__auto__;
var map__65221__$1 = (((((!((map__65221 == null))))?(((((map__65221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65221):map__65221);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65221__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65221__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65221__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq65220){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65220));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (symbol "hello")
 * (symbol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (symbol {:onClick f} "hello")
 * (symbol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (symbol :#the-id.klass.other-klass "hello")
 * (symbol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.symbol = (function com$fulcrologic$fulcro$dom$symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65845 = arguments.length;
var i__4731__auto___65846 = (0);
while(true){
if((i__4731__auto___65846 < len__4730__auto___65845)){
args__4736__auto__.push((arguments[i__4731__auto___65846]));

var G__65847 = (i__4731__auto___65846 + (1));
i__4731__auto___65846 = G__65847;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65224 = conformed_args__63365__auto__;
var map__65224__$1 = (((((!((map__65224 == null))))?(((((map__65224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65224):map__65224);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65224__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65224__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65224__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq65223){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65223));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (strong "hello")
 * (strong nil "hello")
 * 
 * These two are made equivalent at compile time
 * (strong {:onClick f} "hello")
 * (strong #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (strong :#the-id.klass.other-klass "hello")
 * (strong :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.strong = (function com$fulcrologic$fulcro$dom$strong(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65848 = arguments.length;
var i__4731__auto___65849 = (0);
while(true){
if((i__4731__auto___65849 < len__4730__auto___65848)){
args__4736__auto__.push((arguments[i__4731__auto___65849]));

var G__65850 = (i__4731__auto___65849 + (1));
i__4731__auto___65849 = G__65850;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65227 = conformed_args__63365__auto__;
var map__65227__$1 = (((((!((map__65227 == null))))?(((((map__65227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65227):map__65227);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65227__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65227__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65227__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq65226){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65226));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (use "hello")
 * (use nil "hello")
 * 
 * These two are made equivalent at compile time
 * (use {:onClick f} "hello")
 * (use #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (use :#the-id.klass.other-klass "hello")
 * (use :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.use = (function com$fulcrologic$fulcro$dom$use(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65851 = arguments.length;
var i__4731__auto___65852 = (0);
while(true){
if((i__4731__auto___65852 < len__4730__auto___65851)){
args__4736__auto__.push((arguments[i__4731__auto___65852]));

var G__65853 = (i__4731__auto___65852 + (1));
i__4731__auto___65852 = G__65853;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65230 = conformed_args__63365__auto__;
var map__65230__$1 = (((((!((map__65230 == null))))?(((((map__65230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65230):map__65230);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65230__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65230__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65230__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq65229){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65229));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (solidcolor "hello")
 * (solidcolor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (solidcolor {:onClick f} "hello")
 * (solidcolor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (solidcolor :#the-id.klass.other-klass "hello")
 * (solidcolor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.solidcolor = (function com$fulcrologic$fulcro$dom$solidcolor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65854 = arguments.length;
var i__4731__auto___65855 = (0);
while(true){
if((i__4731__auto___65855 < len__4730__auto___65854)){
args__4736__auto__.push((arguments[i__4731__auto___65855]));

var G__65856 = (i__4731__auto___65855 + (1));
i__4731__auto___65855 = G__65856;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65233 = conformed_args__63365__auto__;
var map__65233__$1 = (((((!((map__65233 == null))))?(((((map__65233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65233):map__65233);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65233__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65233__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65233__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq65232){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65232));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fePointLight "hello")
 * (fePointLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fePointLight {:onClick f} "hello")
 * (fePointLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fePointLight :#the-id.klass.other-klass "hello")
 * (fePointLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fePointLight = (function com$fulcrologic$fulcro$dom$fePointLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65857 = arguments.length;
var i__4731__auto___65858 = (0);
while(true){
if((i__4731__auto___65858 < len__4730__auto___65857)){
args__4736__auto__.push((arguments[i__4731__auto___65858]));

var G__65859 = (i__4731__auto___65858 + (1));
i__4731__auto___65858 = G__65859;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65236 = conformed_args__63365__auto__;
var map__65236__$1 = (((((!((map__65236 == null))))?(((((map__65236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65236):map__65236);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65236__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65236__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65236__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq65235){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65235));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (li "hello")
 * (li nil "hello")
 * 
 * These two are made equivalent at compile time
 * (li {:onClick f} "hello")
 * (li #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (li :#the-id.klass.other-klass "hello")
 * (li :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.li = (function com$fulcrologic$fulcro$dom$li(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65860 = arguments.length;
var i__4731__auto___65861 = (0);
while(true){
if((i__4731__auto___65861 < len__4730__auto___65860)){
args__4736__auto__.push((arguments[i__4731__auto___65861]));

var G__65862 = (i__4731__auto___65861 + (1));
i__4731__auto___65861 = G__65862;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65239 = conformed_args__63365__auto__;
var map__65239__$1 = (((((!((map__65239 == null))))?(((((map__65239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65239):map__65239);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65239__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65239__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65239__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq65238){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65238));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dt "hello")
 * (dt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dt {:onClick f} "hello")
 * (dt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dt :#the-id.klass.other-klass "hello")
 * (dt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dt = (function com$fulcrologic$fulcro$dom$dt(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65863 = arguments.length;
var i__4731__auto___65864 = (0);
while(true){
if((i__4731__auto___65864 < len__4730__auto___65863)){
args__4736__auto__.push((arguments[i__4731__auto___65864]));

var G__65865 = (i__4731__auto___65864 + (1));
i__4731__auto___65864 = G__65865;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65242 = conformed_args__63365__auto__;
var map__65242__$1 = (((((!((map__65242 == null))))?(((((map__65242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65242):map__65242);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65242__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65242__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65242__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq65241){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65241));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncB "hello")
 * (feFuncB nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncB {:onClick f} "hello")
 * (feFuncB #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncB :#the-id.klass.other-klass "hello")
 * (feFuncB :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncB = (function com$fulcrologic$fulcro$dom$feFuncB(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65866 = arguments.length;
var i__4731__auto___65867 = (0);
while(true){
if((i__4731__auto___65867 < len__4730__auto___65866)){
args__4736__auto__.push((arguments[i__4731__auto___65867]));

var G__65868 = (i__4731__auto___65867 + (1));
i__4731__auto___65867 = G__65868;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65245 = conformed_args__63365__auto__;
var map__65245__$1 = (((((!((map__65245 == null))))?(((((map__65245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65245):map__65245);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65245__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65245__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65245__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq65244){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65244));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (marker "hello")
 * (marker nil "hello")
 * 
 * These two are made equivalent at compile time
 * (marker {:onClick f} "hello")
 * (marker #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (marker :#the-id.klass.other-klass "hello")
 * (marker :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.marker = (function com$fulcrologic$fulcro$dom$marker(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65869 = arguments.length;
var i__4731__auto___65870 = (0);
while(true){
if((i__4731__auto___65870 < len__4730__auto___65869)){
args__4736__auto__.push((arguments[i__4731__auto___65870]));

var G__65871 = (i__4731__auto___65870 + (1));
i__4731__auto___65870 = G__65871;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65248 = conformed_args__63365__auto__;
var map__65248__$1 = (((((!((map__65248 == null))))?(((((map__65248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65248):map__65248);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65248__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65248__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65248__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq65247){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65247));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer "hello")
 * (feComponentTransfer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer {:onClick f} "hello")
 * (feComponentTransfer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComponentTransfer :#the-id.klass.other-klass "hello")
 * (feComponentTransfer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComponentTransfer = (function com$fulcrologic$fulcro$dom$feComponentTransfer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65872 = arguments.length;
var i__4731__auto___65873 = (0);
while(true){
if((i__4731__auto___65873 < len__4730__auto___65872)){
args__4736__auto__.push((arguments[i__4731__auto___65873]));

var G__65874 = (i__4731__auto___65873 + (1));
i__4731__auto___65873 = G__65874;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65251 = conformed_args__63365__auto__;
var map__65251__$1 = (((((!((map__65251 == null))))?(((((map__65251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65251):map__65251);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65251__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65251__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65251__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq65250){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65250));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (td "hello")
 * (td nil "hello")
 * 
 * These two are made equivalent at compile time
 * (td {:onClick f} "hello")
 * (td #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (td :#the-id.klass.other-klass "hello")
 * (td :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.td = (function com$fulcrologic$fulcro$dom$td(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65875 = arguments.length;
var i__4731__auto___65876 = (0);
while(true){
if((i__4731__auto___65876 < len__4730__auto___65875)){
args__4736__auto__.push((arguments[i__4731__auto___65876]));

var G__65877 = (i__4731__auto___65876 + (1));
i__4731__auto___65876 = G__65877;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65254 = conformed_args__63365__auto__;
var map__65254__$1 = (((((!((map__65254 == null))))?(((((map__65254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65254):map__65254);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65254__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65254__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65254__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq65253){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65253));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tr "hello")
 * (tr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tr {:onClick f} "hello")
 * (tr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tr :#the-id.klass.other-klass "hello")
 * (tr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tr = (function com$fulcrologic$fulcro$dom$tr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65878 = arguments.length;
var i__4731__auto___65879 = (0);
while(true){
if((i__4731__auto___65879 < len__4730__auto___65878)){
args__4736__auto__.push((arguments[i__4731__auto___65879]));

var G__65880 = (i__4731__auto___65879 + (1));
i__4731__auto___65879 = G__65880;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65257 = conformed_args__63365__auto__;
var map__65257__$1 = (((((!((map__65257 == null))))?(((((map__65257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65257):map__65257);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65257__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65257__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65257__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq65256){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65256));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (circle "hello")
 * (circle nil "hello")
 * 
 * These two are made equivalent at compile time
 * (circle {:onClick f} "hello")
 * (circle #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (circle :#the-id.klass.other-klass "hello")
 * (circle :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.circle = (function com$fulcrologic$fulcro$dom$circle(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65881 = arguments.length;
var i__4731__auto___65882 = (0);
while(true){
if((i__4731__auto___65882 < len__4730__auto___65881)){
args__4736__auto__.push((arguments[i__4731__auto___65882]));

var G__65883 = (i__4731__auto___65882 + (1));
i__4731__auto___65882 = G__65883;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65260 = conformed_args__63365__auto__;
var map__65260__$1 = (((((!((map__65260 == null))))?(((((map__65260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65260):map__65260);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65260__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65260__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65260__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq65259){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65259));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (section "hello")
 * (section nil "hello")
 * 
 * These two are made equivalent at compile time
 * (section {:onClick f} "hello")
 * (section #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (section :#the-id.klass.other-klass "hello")
 * (section :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.section = (function com$fulcrologic$fulcro$dom$section(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65884 = arguments.length;
var i__4731__auto___65885 = (0);
while(true){
if((i__4731__auto___65885 < len__4730__auto___65884)){
args__4736__auto__.push((arguments[i__4731__auto___65885]));

var G__65886 = (i__4731__auto___65885 + (1));
i__4731__auto___65885 = G__65886;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65263 = conformed_args__63365__auto__;
var map__65263__$1 = (((((!((map__65263 == null))))?(((((map__65263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65263):map__65263);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65263__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65263__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65263__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq65262){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65262));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDropShadow "hello")
 * (feDropShadow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDropShadow {:onClick f} "hello")
 * (feDropShadow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDropShadow :#the-id.klass.other-klass "hello")
 * (feDropShadow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDropShadow = (function com$fulcrologic$fulcro$dom$feDropShadow(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65887 = arguments.length;
var i__4731__auto___65888 = (0);
while(true){
if((i__4731__auto___65888 < len__4730__auto___65887)){
args__4736__auto__.push((arguments[i__4731__auto___65888]));

var G__65889 = (i__4731__auto___65888 + (1));
i__4731__auto___65888 = G__65889;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65266 = conformed_args__63365__auto__;
var map__65266__$1 = (((((!((map__65266 == null))))?(((((map__65266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65266):map__65266);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65266__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65266__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65266__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq65265){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65265));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (th "hello")
 * (th nil "hello")
 * 
 * These two are made equivalent at compile time
 * (th {:onClick f} "hello")
 * (th #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (th :#the-id.klass.other-klass "hello")
 * (th :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.th = (function com$fulcrologic$fulcro$dom$th(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65890 = arguments.length;
var i__4731__auto___65891 = (0);
while(true){
if((i__4731__auto___65891 < len__4730__auto___65890)){
args__4736__auto__.push((arguments[i__4731__auto___65891]));

var G__65892 = (i__4731__auto___65891 + (1));
i__4731__auto___65891 = G__65892;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65269 = conformed_args__63365__auto__;
var map__65269__$1 = (((((!((map__65269 == null))))?(((((map__65269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65269):map__65269);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65269__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65269__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65269__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq65268){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65268));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (time "hello")
 * (time nil "hello")
 * 
 * These two are made equivalent at compile time
 * (time {:onClick f} "hello")
 * (time #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (time :#the-id.klass.other-klass "hello")
 * (time :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.time = (function com$fulcrologic$fulcro$dom$time(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65893 = arguments.length;
var i__4731__auto___65894 = (0);
while(true){
if((i__4731__auto___65894 < len__4730__auto___65893)){
args__4736__auto__.push((arguments[i__4731__auto___65894]));

var G__65895 = (i__4731__auto___65894 + (1));
i__4731__auto___65894 = G__65895;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65272 = conformed_args__63365__auto__;
var map__65272__$1 = (((((!((map__65272 == null))))?(((((map__65272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65272):map__65272);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65272__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65272__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65272__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq65271){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65271));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (optgroup "hello")
 * (optgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (optgroup {:onClick f} "hello")
 * (optgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (optgroup :#the-id.klass.other-klass "hello")
 * (optgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.optgroup = (function com$fulcrologic$fulcro$dom$optgroup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65896 = arguments.length;
var i__4731__auto___65897 = (0);
while(true){
if((i__4731__auto___65897 < len__4730__auto___65896)){
args__4736__auto__.push((arguments[i__4731__auto___65897]));

var G__65898 = (i__4731__auto___65897 + (1));
i__4731__auto___65897 = G__65898;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65275 = conformed_args__63365__auto__;
var map__65275__$1 = (((((!((map__65275 == null))))?(((((map__65275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65275):map__65275);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65275__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65275__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65275__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq65274){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65274));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (iframe "hello")
 * (iframe nil "hello")
 * 
 * These two are made equivalent at compile time
 * (iframe {:onClick f} "hello")
 * (iframe #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (iframe :#the-id.klass.other-klass "hello")
 * (iframe :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.iframe = (function com$fulcrologic$fulcro$dom$iframe(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65899 = arguments.length;
var i__4731__auto___65900 = (0);
while(true){
if((i__4731__auto___65900 < len__4730__auto___65899)){
args__4736__auto__.push((arguments[i__4731__auto___65900]));

var G__65901 = (i__4731__auto___65900 + (1));
i__4731__auto___65900 = G__65901;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65278 = conformed_args__63365__auto__;
var map__65278__$1 = (((((!((map__65278 == null))))?(((((map__65278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65278):map__65278);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65278__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65278__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65278__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq65277){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65277));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (color-profile "hello")
 * (color-profile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (color-profile {:onClick f} "hello")
 * (color-profile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (color-profile :#the-id.klass.other-klass "hello")
 * (color-profile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.color_profile = (function com$fulcrologic$fulcro$dom$color_profile(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65902 = arguments.length;
var i__4731__auto___65903 = (0);
while(true){
if((i__4731__auto___65903 < len__4730__auto___65902)){
args__4736__auto__.push((arguments[i__4731__auto___65903]));

var G__65904 = (i__4731__auto___65903 + (1));
i__4731__auto___65903 = G__65904;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65281 = conformed_args__63365__auto__;
var map__65281__$1 = (((((!((map__65281 == null))))?(((((map__65281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65281):map__65281);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65281__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65281__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65281__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq65280){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65280));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (legend "hello")
 * (legend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (legend {:onClick f} "hello")
 * (legend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (legend :#the-id.klass.other-klass "hello")
 * (legend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.legend = (function com$fulcrologic$fulcro$dom$legend(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65905 = arguments.length;
var i__4731__auto___65906 = (0);
while(true){
if((i__4731__auto___65906 < len__4730__auto___65905)){
args__4736__auto__.push((arguments[i__4731__auto___65906]));

var G__65907 = (i__4731__auto___65906 + (1));
i__4731__auto___65906 = G__65907;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65284 = conformed_args__63365__auto__;
var map__65284__$1 = (((((!((map__65284 == null))))?(((((map__65284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65284):map__65284);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65284__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65284__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65284__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq65283){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65283));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (em "hello")
 * (em nil "hello")
 * 
 * These two are made equivalent at compile time
 * (em {:onClick f} "hello")
 * (em #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (em :#the-id.klass.other-klass "hello")
 * (em :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.em = (function com$fulcrologic$fulcro$dom$em(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65908 = arguments.length;
var i__4731__auto___65909 = (0);
while(true){
if((i__4731__auto___65909 < len__4730__auto___65908)){
args__4736__auto__.push((arguments[i__4731__auto___65909]));

var G__65910 = (i__4731__auto___65909 + (1));
i__4731__auto___65909 = G__65910;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65287 = conformed_args__63365__auto__;
var map__65287__$1 = (((((!((map__65287 == null))))?(((((map__65287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65287):map__65287);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65287__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65287__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65287__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq65286){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65286));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (kbd "hello")
 * (kbd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (kbd {:onClick f} "hello")
 * (kbd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (kbd :#the-id.klass.other-klass "hello")
 * (kbd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.kbd = (function com$fulcrologic$fulcro$dom$kbd(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65911 = arguments.length;
var i__4731__auto___65912 = (0);
while(true){
if((i__4731__auto___65912 < len__4730__auto___65911)){
args__4736__auto__.push((arguments[i__4731__auto___65912]));

var G__65913 = (i__4731__auto___65912 + (1));
i__4731__auto___65912 = G__65913;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65290 = conformed_args__63365__auto__;
var map__65290__$1 = (((((!((map__65290 == null))))?(((((map__65290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65290):map__65290);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65290__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65290__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65290__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq65289){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65289));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (article "hello")
 * (article nil "hello")
 * 
 * These two are made equivalent at compile time
 * (article {:onClick f} "hello")
 * (article #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (article :#the-id.klass.other-klass "hello")
 * (article :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.article = (function com$fulcrologic$fulcro$dom$article(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65914 = arguments.length;
var i__4731__auto___65915 = (0);
while(true){
if((i__4731__auto___65915 < len__4730__auto___65914)){
args__4736__auto__.push((arguments[i__4731__auto___65915]));

var G__65916 = (i__4731__auto___65915 + (1));
i__4731__auto___65915 = G__65916;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65293 = conformed_args__63365__auto__;
var map__65293__$1 = (((((!((map__65293 == null))))?(((((map__65293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65293):map__65293);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65293__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65293__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65293__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq65292){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65292));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateColor "hello")
 * (animateColor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateColor {:onClick f} "hello")
 * (animateColor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateColor :#the-id.klass.other-klass "hello")
 * (animateColor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateColor = (function com$fulcrologic$fulcro$dom$animateColor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65917 = arguments.length;
var i__4731__auto___65918 = (0);
while(true){
if((i__4731__auto___65918 < len__4730__auto___65917)){
args__4736__auto__.push((arguments[i__4731__auto___65918]));

var G__65919 = (i__4731__auto___65918 + (1));
i__4731__auto___65918 = G__65919;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65296 = conformed_args__63365__auto__;
var map__65296__$1 = (((((!((map__65296 == null))))?(((((map__65296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65296):map__65296);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65296__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65296__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65296__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq65295){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65295));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (clipPath "hello")
 * (clipPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (clipPath {:onClick f} "hello")
 * (clipPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (clipPath :#the-id.klass.other-klass "hello")
 * (clipPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.clipPath = (function com$fulcrologic$fulcro$dom$clipPath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65920 = arguments.length;
var i__4731__auto___65921 = (0);
while(true){
if((i__4731__auto___65921 < len__4730__auto___65920)){
args__4736__auto__.push((arguments[i__4731__auto___65921]));

var G__65922 = (i__4731__auto___65921 + (1));
i__4731__auto___65921 = G__65922;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65299 = conformed_args__63365__auto__;
var map__65299__$1 = (((((!((map__65299 == null))))?(((((map__65299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65299):map__65299);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65299__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65299__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65299__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq65298){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65298));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (abbr "hello")
 * (abbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (abbr {:onClick f} "hello")
 * (abbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (abbr :#the-id.klass.other-klass "hello")
 * (abbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.abbr = (function com$fulcrologic$fulcro$dom$abbr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65923 = arguments.length;
var i__4731__auto___65924 = (0);
while(true){
if((i__4731__auto___65924 < len__4730__auto___65923)){
args__4736__auto__.push((arguments[i__4731__auto___65924]));

var G__65925 = (i__4731__auto___65924 + (1));
i__4731__auto___65924 = G__65925;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65302 = conformed_args__63365__auto__;
var map__65302__$1 = (((((!((map__65302 == null))))?(((((map__65302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65302):map__65302);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65302__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65302__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65302__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq65301){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65301));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef "hello")
 * (altGlyphDef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef {:onClick f} "hello")
 * (altGlyphDef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphDef :#the-id.klass.other-klass "hello")
 * (altGlyphDef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphDef = (function com$fulcrologic$fulcro$dom$altGlyphDef(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65926 = arguments.length;
var i__4731__auto___65927 = (0);
while(true){
if((i__4731__auto___65927 < len__4730__auto___65926)){
args__4736__auto__.push((arguments[i__4731__auto___65927]));

var G__65928 = (i__4731__auto___65927 + (1));
i__4731__auto___65927 = G__65928;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65305 = conformed_args__63365__auto__;
var map__65305__$1 = (((((!((map__65305 == null))))?(((((map__65305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65305):map__65305);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65305__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65305__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65305__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq65304){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65304));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshrow "hello")
 * (meshrow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshrow {:onClick f} "hello")
 * (meshrow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshrow :#the-id.klass.other-klass "hello")
 * (meshrow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshrow = (function com$fulcrologic$fulcro$dom$meshrow(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65929 = arguments.length;
var i__4731__auto___65930 = (0);
while(true){
if((i__4731__auto___65930 < len__4730__auto___65929)){
args__4736__auto__.push((arguments[i__4731__auto___65930]));

var G__65931 = (i__4731__auto___65930 + (1));
i__4731__auto___65930 = G__65931;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65308 = conformed_args__63365__auto__;
var map__65308__$1 = (((((!((map__65308 == null))))?(((((map__65308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65308):map__65308);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65308__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65308__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65308__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq65307){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65307));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cursor "hello")
 * (cursor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cursor {:onClick f} "hello")
 * (cursor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cursor :#the-id.klass.other-klass "hello")
 * (cursor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cursor = (function com$fulcrologic$fulcro$dom$cursor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65932 = arguments.length;
var i__4731__auto___65933 = (0);
while(true){
if((i__4731__auto___65933 < len__4730__auto___65932)){
args__4736__auto__.push((arguments[i__4731__auto___65933]));

var G__65934 = (i__4731__auto___65933 + (1));
i__4731__auto___65933 = G__65934;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65311 = conformed_args__63365__auto__;
var map__65311__$1 = (((((!((map__65311 == null))))?(((((map__65311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65311):map__65311);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65311__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65311__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65311__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq65310){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65310));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animate "hello")
 * (animate nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animate {:onClick f} "hello")
 * (animate #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animate :#the-id.klass.other-klass "hello")
 * (animate :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animate = (function com$fulcrologic$fulcro$dom$animate(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65935 = arguments.length;
var i__4731__auto___65936 = (0);
while(true){
if((i__4731__auto___65936 < len__4730__auto___65935)){
args__4736__auto__.push((arguments[i__4731__auto___65936]));

var G__65937 = (i__4731__auto___65936 + (1));
i__4731__auto___65936 = G__65937;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65314 = conformed_args__63365__auto__;
var map__65314__$1 = (((((!((map__65314 == null))))?(((((map__65314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65314):map__65314);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65314__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65314__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65314__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq65313){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65313));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (source "hello")
 * (source nil "hello")
 * 
 * These two are made equivalent at compile time
 * (source {:onClick f} "hello")
 * (source #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (source :#the-id.klass.other-klass "hello")
 * (source :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.source = (function com$fulcrologic$fulcro$dom$source(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65938 = arguments.length;
var i__4731__auto___65939 = (0);
while(true){
if((i__4731__auto___65939 < len__4730__auto___65938)){
args__4736__auto__.push((arguments[i__4731__auto___65939]));

var G__65940 = (i__4731__auto___65939 + (1));
i__4731__auto___65939 = G__65940;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65317 = conformed_args__63365__auto__;
var map__65317__$1 = (((((!((map__65317 == null))))?(((((map__65317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65317):map__65317);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65317__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65317__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65317__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq65316){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65316));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (output "hello")
 * (output nil "hello")
 * 
 * These two are made equivalent at compile time
 * (output {:onClick f} "hello")
 * (output #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (output :#the-id.klass.other-klass "hello")
 * (output :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.output = (function com$fulcrologic$fulcro$dom$output(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65941 = arguments.length;
var i__4731__auto___65942 = (0);
while(true){
if((i__4731__auto___65942 < len__4730__auto___65941)){
args__4736__auto__.push((arguments[i__4731__auto___65942]));

var G__65943 = (i__4731__auto___65942 + (1));
i__4731__auto___65942 = G__65943;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65320 = conformed_args__63365__auto__;
var map__65320__$1 = (((((!((map__65320 == null))))?(((((map__65320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65320):map__65320);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65320__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65320__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65320__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq65319){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65319));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face "hello")
 * (font-face nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face {:onClick f} "hello")
 * (font-face #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face :#the-id.klass.other-klass "hello")
 * (font-face :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face = (function com$fulcrologic$fulcro$dom$font_face(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65944 = arguments.length;
var i__4731__auto___65945 = (0);
while(true){
if((i__4731__auto___65945 < len__4730__auto___65944)){
args__4736__auto__.push((arguments[i__4731__auto___65945]));

var G__65946 = (i__4731__auto___65945 + (1));
i__4731__auto___65945 = G__65946;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65323 = conformed_args__63365__auto__;
var map__65323__$1 = (((((!((map__65323 == null))))?(((((map__65323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65323):map__65323);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65323__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65323__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65323__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq65322){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65322));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMergeNode "hello")
 * (feMergeNode nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMergeNode {:onClick f} "hello")
 * (feMergeNode #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMergeNode :#the-id.klass.other-klass "hello")
 * (feMergeNode :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMergeNode = (function com$fulcrologic$fulcro$dom$feMergeNode(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65947 = arguments.length;
var i__4731__auto___65948 = (0);
while(true){
if((i__4731__auto___65948 < len__4730__auto___65947)){
args__4736__auto__.push((arguments[i__4731__auto___65948]));

var G__65949 = (i__4731__auto___65948 + (1));
i__4731__auto___65948 = G__65949;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65326 = conformed_args__63365__auto__;
var map__65326__$1 = (((((!((map__65326 == null))))?(((((map__65326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65326):map__65326);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65326__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65326__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65326__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq65325){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65325));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpotLight "hello")
 * (feSpotLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpotLight {:onClick f} "hello")
 * (feSpotLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpotLight :#the-id.klass.other-klass "hello")
 * (feSpotLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpotLight = (function com$fulcrologic$fulcro$dom$feSpotLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65950 = arguments.length;
var i__4731__auto___65951 = (0);
while(true){
if((i__4731__auto___65951 < len__4730__auto___65950)){
args__4736__auto__.push((arguments[i__4731__auto___65951]));

var G__65952 = (i__4731__auto___65951 + (1));
i__4731__auto___65951 = G__65952;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65329 = conformed_args__63365__auto__;
var map__65329__$1 = (((((!((map__65329 == null))))?(((((map__65329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65329):map__65329);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65329__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65329__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65329__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq65328){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65328));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (header "hello")
 * (header nil "hello")
 * 
 * These two are made equivalent at compile time
 * (header {:onClick f} "hello")
 * (header #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (header :#the-id.klass.other-klass "hello")
 * (header :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.header = (function com$fulcrologic$fulcro$dom$header(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65953 = arguments.length;
var i__4731__auto___65954 = (0);
while(true){
if((i__4731__auto___65954 < len__4730__auto___65953)){
args__4736__auto__.push((arguments[i__4731__auto___65954]));

var G__65955 = (i__4731__auto___65954 + (1));
i__4731__auto___65954 = G__65955;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65332 = conformed_args__63365__auto__;
var map__65332__$1 = (((((!((map__65332 == null))))?(((((map__65332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65332):map__65332);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65332__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65332__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65332__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq65331){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65331));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (datalist "hello")
 * (datalist nil "hello")
 * 
 * These two are made equivalent at compile time
 * (datalist {:onClick f} "hello")
 * (datalist #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (datalist :#the-id.klass.other-klass "hello")
 * (datalist :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.datalist = (function com$fulcrologic$fulcro$dom$datalist(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65956 = arguments.length;
var i__4731__auto___65957 = (0);
while(true){
if((i__4731__auto___65957 < len__4730__auto___65956)){
args__4736__auto__.push((arguments[i__4731__auto___65957]));

var G__65958 = (i__4731__auto___65957 + (1));
i__4731__auto___65957 = G__65958;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65335 = conformed_args__63365__auto__;
var map__65335__$1 = (((((!((map__65335 == null))))?(((((map__65335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65335):map__65335);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65335__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65335__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65335__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq65334){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65334));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tfoot "hello")
 * (tfoot nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tfoot {:onClick f} "hello")
 * (tfoot #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tfoot :#the-id.klass.other-klass "hello")
 * (tfoot :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tfoot = (function com$fulcrologic$fulcro$dom$tfoot(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65959 = arguments.length;
var i__4731__auto___65960 = (0);
while(true){
if((i__4731__auto___65960 < len__4730__auto___65959)){
args__4736__auto__.push((arguments[i__4731__auto___65960]));

var G__65961 = (i__4731__auto___65960 + (1));
i__4731__auto___65960 = G__65961;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65338 = conformed_args__63365__auto__;
var map__65338__$1 = (((((!((map__65338 == null))))?(((((map__65338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65338):map__65338);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65338__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65338__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65338__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq65337){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65337));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (s "hello")
 * (s nil "hello")
 * 
 * These two are made equivalent at compile time
 * (s {:onClick f} "hello")
 * (s #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (s :#the-id.klass.other-klass "hello")
 * (s :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.s = (function com$fulcrologic$fulcro$dom$s(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65962 = arguments.length;
var i__4731__auto___65963 = (0);
while(true){
if((i__4731__auto___65963 < len__4730__auto___65962)){
args__4736__auto__.push((arguments[i__4731__auto___65963]));

var G__65964 = (i__4731__auto___65963 + (1));
i__4731__auto___65963 = G__65964;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65341 = conformed_args__63365__auto__;
var map__65341__$1 = (((((!((map__65341 == null))))?(((((map__65341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65341):map__65341);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65341__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65341__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65341__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq65340){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65340));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatch "hello")
 * (hatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatch {:onClick f} "hello")
 * (hatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatch :#the-id.klass.other-klass "hello")
 * (hatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatch = (function com$fulcrologic$fulcro$dom$hatch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65965 = arguments.length;
var i__4731__auto___65966 = (0);
while(true){
if((i__4731__auto___65966 < len__4730__auto___65965)){
args__4736__auto__.push((arguments[i__4731__auto___65966]));

var G__65967 = (i__4731__auto___65966 + (1));
i__4731__auto___65966 = G__65967;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65344 = conformed_args__63365__auto__;
var map__65344__$1 = (((((!((map__65344 == null))))?(((((map__65344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65344):map__65344);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65344__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65344__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65344__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq65343){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65343));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ins "hello")
 * (ins nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ins {:onClick f} "hello")
 * (ins #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ins :#the-id.klass.other-klass "hello")
 * (ins :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ins = (function com$fulcrologic$fulcro$dom$ins(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65968 = arguments.length;
var i__4731__auto___65969 = (0);
while(true){
if((i__4731__auto___65969 < len__4730__auto___65968)){
args__4736__auto__.push((arguments[i__4731__auto___65969]));

var G__65970 = (i__4731__auto___65969 + (1));
i__4731__auto___65969 = G__65970;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65347 = conformed_args__63365__auto__;
var map__65347__$1 = (((((!((map__65347 == null))))?(((((map__65347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65347):map__65347);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65347__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65347__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65347__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq65346){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65346));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (footer "hello")
 * (footer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (footer {:onClick f} "hello")
 * (footer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (footer :#the-id.klass.other-klass "hello")
 * (footer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.footer = (function com$fulcrologic$fulcro$dom$footer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65971 = arguments.length;
var i__4731__auto___65972 = (0);
while(true){
if((i__4731__auto___65972 < len__4730__auto___65971)){
args__4736__auto__.push((arguments[i__4731__auto___65972]));

var G__65973 = (i__4731__auto___65972 + (1));
i__4731__auto___65972 = G__65973;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65350 = conformed_args__63365__auto__;
var map__65350__$1 = (((((!((map__65350 == null))))?(((((map__65350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65350):map__65350);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65350__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65350__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65350__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq65349){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65349));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mpath "hello")
 * (mpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mpath {:onClick f} "hello")
 * (mpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mpath :#the-id.klass.other-klass "hello")
 * (mpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mpath = (function com$fulcrologic$fulcro$dom$mpath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65974 = arguments.length;
var i__4731__auto___65975 = (0);
while(true){
if((i__4731__auto___65975 < len__4730__auto___65974)){
args__4736__auto__.push((arguments[i__4731__auto___65975]));

var G__65976 = (i__4731__auto___65975 + (1));
i__4731__auto___65975 = G__65976;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65353 = conformed_args__63365__auto__;
var map__65353__$1 = (((((!((map__65353 == null))))?(((((map__65353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65353):map__65353);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65353__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65353__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65353__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq65352){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65352));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (title "hello")
 * (title nil "hello")
 * 
 * These two are made equivalent at compile time
 * (title {:onClick f} "hello")
 * (title #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (title :#the-id.klass.other-klass "hello")
 * (title :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.title = (function com$fulcrologic$fulcro$dom$title(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65977 = arguments.length;
var i__4731__auto___65978 = (0);
while(true){
if((i__4731__auto___65978 < len__4730__auto___65977)){
args__4736__auto__.push((arguments[i__4731__auto___65978]));

var G__65979 = (i__4731__auto___65978 + (1));
i__4731__auto___65978 = G__65979;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65356 = conformed_args__63365__auto__;
var map__65356__$1 = (((((!((map__65356 == null))))?(((((map__65356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65356):map__65356);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65356__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65356__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65356__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq65355){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65355));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h5 "hello")
 * (h5 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h5 {:onClick f} "hello")
 * (h5 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h5 :#the-id.klass.other-klass "hello")
 * (h5 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h5 = (function com$fulcrologic$fulcro$dom$h5(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65980 = arguments.length;
var i__4731__auto___65981 = (0);
while(true){
if((i__4731__auto___65981 < len__4730__auto___65980)){
args__4736__auto__.push((arguments[i__4731__auto___65981]));

var G__65982 = (i__4731__auto___65981 + (1));
i__4731__auto___65981 = G__65982;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65359 = conformed_args__63365__auto__;
var map__65359__$1 = (((((!((map__65359 == null))))?(((((map__65359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65359):map__65359);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65359__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65359__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65359__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq65358){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65358));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshgradient "hello")
 * (meshgradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshgradient {:onClick f} "hello")
 * (meshgradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshgradient :#the-id.klass.other-klass "hello")
 * (meshgradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshgradient = (function com$fulcrologic$fulcro$dom$meshgradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65983 = arguments.length;
var i__4731__auto___65984 = (0);
while(true){
if((i__4731__auto___65984 < len__4730__auto___65983)){
args__4736__auto__.push((arguments[i__4731__auto___65984]));

var G__65985 = (i__4731__auto___65984 + (1));
i__4731__auto___65984 = G__65985;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65362 = conformed_args__63365__auto__;
var map__65362__$1 = (((((!((map__65362 == null))))?(((((map__65362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65362):map__65362);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65362__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65362__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65362__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq65361){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65361));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (canvas "hello")
 * (canvas nil "hello")
 * 
 * These two are made equivalent at compile time
 * (canvas {:onClick f} "hello")
 * (canvas #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (canvas :#the-id.klass.other-klass "hello")
 * (canvas :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.canvas = (function com$fulcrologic$fulcro$dom$canvas(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65986 = arguments.length;
var i__4731__auto___65987 = (0);
while(true){
if((i__4731__auto___65987 < len__4730__auto___65986)){
args__4736__auto__.push((arguments[i__4731__auto___65987]));

var G__65988 = (i__4731__auto___65987 + (1));
i__4731__auto___65987 = G__65988;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65365 = conformed_args__63365__auto__;
var map__65365__$1 = (((((!((map__65365 == null))))?(((((map__65365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65365):map__65365);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65365__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65365__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65365__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq65364){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65364));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (param "hello")
 * (param nil "hello")
 * 
 * These two are made equivalent at compile time
 * (param {:onClick f} "hello")
 * (param #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (param :#the-id.klass.other-klass "hello")
 * (param :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.param = (function com$fulcrologic$fulcro$dom$param(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65989 = arguments.length;
var i__4731__auto___65990 = (0);
while(true){
if((i__4731__auto___65990 < len__4730__auto___65989)){
args__4736__auto__.push((arguments[i__4731__auto___65990]));

var G__65991 = (i__4731__auto___65990 + (1));
i__4731__auto___65990 = G__65991;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65368 = conformed_args__63365__auto__;
var map__65368__$1 = (((((!((map__65368 == null))))?(((((map__65368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65368):map__65368);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65368__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65368__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65368__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq65367){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65367));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font "hello")
 * (font nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font {:onClick f} "hello")
 * (font #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font :#the-id.klass.other-klass "hello")
 * (font :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font = (function com$fulcrologic$fulcro$dom$font(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65992 = arguments.length;
var i__4731__auto___65993 = (0);
while(true){
if((i__4731__auto___65993 < len__4730__auto___65992)){
args__4736__auto__.push((arguments[i__4731__auto___65993]));

var G__65994 = (i__4731__auto___65993 + (1));
i__4731__auto___65993 = G__65994;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65371 = conformed_args__63365__auto__;
var map__65371__$1 = (((((!((map__65371 == null))))?(((((map__65371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65371):map__65371);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65371__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65371__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65371__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq65370){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65370));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (div "hello")
 * (div nil "hello")
 * 
 * These two are made equivalent at compile time
 * (div {:onClick f} "hello")
 * (div #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (div :#the-id.klass.other-klass "hello")
 * (div :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.div = (function com$fulcrologic$fulcro$dom$div(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65995 = arguments.length;
var i__4731__auto___65996 = (0);
while(true){
if((i__4731__auto___65996 < len__4730__auto___65995)){
args__4736__auto__.push((arguments[i__4731__auto___65996]));

var G__65997 = (i__4731__auto___65996 + (1));
i__4731__auto___65996 = G__65997;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65374 = conformed_args__63365__auto__;
var map__65374__$1 = (((((!((map__65374 == null))))?(((((map__65374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65374):map__65374);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65374__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65374__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65374__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq65373){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65373));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (option "hello")
 * (option nil "hello")
 * 
 * These two are made equivalent at compile time
 * (option {:onClick f} "hello")
 * (option #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (option :#the-id.klass.other-klass "hello")
 * (option :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.option = (function com$fulcrologic$fulcro$dom$option(var_args){
var args__4736__auto__ = [];
var len__4730__auto___65998 = arguments.length;
var i__4731__auto___65999 = (0);
while(true){
if((i__4731__auto___65999 < len__4730__auto___65998)){
args__4736__auto__.push((arguments[i__4731__auto___65999]));

var G__66000 = (i__4731__auto___65999 + (1));
i__4731__auto___65999 = G__66000;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65377 = conformed_args__63365__auto__;
var map__65377__$1 = (((((!((map__65377 == null))))?(((((map__65377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65377):map__65377);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65377__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65377__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65377__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq65376){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65376));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFlood "hello")
 * (feFlood nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFlood {:onClick f} "hello")
 * (feFlood #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFlood :#the-id.klass.other-klass "hello")
 * (feFlood :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFlood = (function com$fulcrologic$fulcro$dom$feFlood(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66001 = arguments.length;
var i__4731__auto___66002 = (0);
while(true){
if((i__4731__auto___66002 < len__4730__auto___66001)){
args__4736__auto__.push((arguments[i__4731__auto___66002]));

var G__66003 = (i__4731__auto___66002 + (1));
i__4731__auto___66002 = G__66003;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65380 = conformed_args__63365__auto__;
var map__65380__$1 = (((((!((map__65380 == null))))?(((((map__65380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65380):map__65380);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65380__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65380__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65380__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq65379){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65379));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (summary "hello")
 * (summary nil "hello")
 * 
 * These two are made equivalent at compile time
 * (summary {:onClick f} "hello")
 * (summary #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (summary :#the-id.klass.other-klass "hello")
 * (summary :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.summary = (function com$fulcrologic$fulcro$dom$summary(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66004 = arguments.length;
var i__4731__auto___66005 = (0);
while(true){
if((i__4731__auto___66005 < len__4730__auto___66004)){
args__4736__auto__.push((arguments[i__4731__auto___66005]));

var G__66006 = (i__4731__auto___66005 + (1));
i__4731__auto___66005 = G__66006;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65383 = conformed_args__63365__auto__;
var map__65383__$1 = (((((!((map__65383 == null))))?(((((map__65383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65383):map__65383);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65383__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65383__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65383__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq65382){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65382));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMorphology "hello")
 * (feMorphology nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMorphology {:onClick f} "hello")
 * (feMorphology #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMorphology :#the-id.klass.other-klass "hello")
 * (feMorphology :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMorphology = (function com$fulcrologic$fulcro$dom$feMorphology(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66007 = arguments.length;
var i__4731__auto___66008 = (0);
while(true){
if((i__4731__auto___66008 < len__4730__auto___66007)){
args__4736__auto__.push((arguments[i__4731__auto___66008]));

var G__66009 = (i__4731__auto___66008 + (1));
i__4731__auto___66008 = G__66009;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65386 = conformed_args__63365__auto__;
var map__65386__$1 = (((((!((map__65386 == null))))?(((((map__65386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65386):map__65386);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65386__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65386__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65386__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq65385){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65385));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (samp "hello")
 * (samp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (samp {:onClick f} "hello")
 * (samp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (samp :#the-id.klass.other-klass "hello")
 * (samp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.samp = (function com$fulcrologic$fulcro$dom$samp(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66010 = arguments.length;
var i__4731__auto___66011 = (0);
while(true){
if((i__4731__auto___66011 < len__4730__auto___66010)){
args__4736__auto__.push((arguments[i__4731__auto___66011]));

var G__66012 = (i__4731__auto___66011 + (1));
i__4731__auto___66011 = G__66012;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65389 = conformed_args__63365__auto__;
var map__65389__$1 = (((((!((map__65389 == null))))?(((((map__65389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65389):map__65389);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65389__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65389__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65389__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq65388){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65388));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyphRef "hello")
 * (glyphRef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyphRef {:onClick f} "hello")
 * (glyphRef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyphRef :#the-id.klass.other-klass "hello")
 * (glyphRef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyphRef = (function com$fulcrologic$fulcro$dom$glyphRef(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66013 = arguments.length;
var i__4731__auto___66014 = (0);
while(true){
if((i__4731__auto___66014 < len__4730__auto___66013)){
args__4736__auto__.push((arguments[i__4731__auto___66014]));

var G__66015 = (i__4731__auto___66014 + (1));
i__4731__auto___66014 = G__66015;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65392 = conformed_args__63365__auto__;
var map__65392__$1 = (((((!((map__65392 == null))))?(((((map__65392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65392):map__65392);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65392__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65392__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65392__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq65391){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65391));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (small "hello")
 * (small nil "hello")
 * 
 * These two are made equivalent at compile time
 * (small {:onClick f} "hello")
 * (small #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (small :#the-id.klass.other-klass "hello")
 * (small :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.small = (function com$fulcrologic$fulcro$dom$small(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66016 = arguments.length;
var i__4731__auto___66017 = (0);
while(true){
if((i__4731__auto___66017 < len__4730__auto___66016)){
args__4736__auto__.push((arguments[i__4731__auto___66017]));

var G__66018 = (i__4731__auto___66017 + (1));
i__4731__auto___66017 = G__66018;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65395 = conformed_args__63365__auto__;
var map__65395__$1 = (((((!((map__65395 == null))))?(((((map__65395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65395):map__65395);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65395__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65395__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65395__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq65394){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65394));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (style "hello")
 * (style nil "hello")
 * 
 * These two are made equivalent at compile time
 * (style {:onClick f} "hello")
 * (style #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (style :#the-id.klass.other-klass "hello")
 * (style :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.style = (function com$fulcrologic$fulcro$dom$style(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66019 = arguments.length;
var i__4731__auto___66020 = (0);
while(true){
if((i__4731__auto___66020 < len__4730__auto___66019)){
args__4736__auto__.push((arguments[i__4731__auto___66020]));

var G__66021 = (i__4731__auto___66020 + (1));
i__4731__auto___66020 = G__66021;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65398 = conformed_args__63365__auto__;
var map__65398__$1 = (((((!((map__65398 == null))))?(((((map__65398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65398):map__65398);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65398__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65398__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65398__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq65397){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65397));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textarea "hello")
 * (textarea nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textarea {:onClick f} "hello")
 * (textarea #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textarea :#the-id.klass.other-klass "hello")
 * (textarea :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textarea = (function com$fulcrologic$fulcro$dom$textarea(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66022 = arguments.length;
var i__4731__auto___66023 = (0);
while(true){
if((i__4731__auto___66023 < len__4730__auto___66022)){
args__4736__auto__.push((arguments[i__4731__auto___66023]));

var G__66024 = (i__4731__auto___66023 + (1));
i__4731__auto___66023 = G__66024;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65401 = conformed_args__63365__auto__;
var map__65401__$1 = (((((!((map__65401 == null))))?(((((map__65401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65401):map__65401);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65401__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65401__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65401__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq65400){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65400));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur "hello")
 * (feGaussianBlur nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur {:onClick f} "hello")
 * (feGaussianBlur #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feGaussianBlur :#the-id.klass.other-klass "hello")
 * (feGaussianBlur :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feGaussianBlur = (function com$fulcrologic$fulcro$dom$feGaussianBlur(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66025 = arguments.length;
var i__4731__auto___66026 = (0);
while(true){
if((i__4731__auto___66026 < len__4730__auto___66025)){
args__4736__auto__.push((arguments[i__4731__auto___66026]));

var G__66027 = (i__4731__auto___66026 + (1));
i__4731__auto___66026 = G__66027;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65404 = conformed_args__63365__auto__;
var map__65404__$1 = (((((!((map__65404 == null))))?(((((map__65404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65404):map__65404);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65404__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65404__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65404__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq65403){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65403));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h4 "hello")
 * (h4 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h4 {:onClick f} "hello")
 * (h4 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h4 :#the-id.klass.other-klass "hello")
 * (h4 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h4 = (function com$fulcrologic$fulcro$dom$h4(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66028 = arguments.length;
var i__4731__auto___66029 = (0);
while(true){
if((i__4731__auto___66029 < len__4730__auto___66028)){
args__4736__auto__.push((arguments[i__4731__auto___66029]));

var G__66030 = (i__4731__auto___66029 + (1));
i__4731__auto___66029 = G__66030;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65407 = conformed_args__63365__auto__;
var map__65407__$1 = (((((!((map__65407 == null))))?(((((map__65407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65407):map__65407);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65407__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65407__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65407__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq65406){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65406));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (head "hello")
 * (head nil "hello")
 * 
 * These two are made equivalent at compile time
 * (head {:onClick f} "hello")
 * (head #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (head :#the-id.klass.other-klass "hello")
 * (head :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.head = (function com$fulcrologic$fulcro$dom$head(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66031 = arguments.length;
var i__4731__auto___66032 = (0);
while(true){
if((i__4731__auto___66032 < len__4730__auto___66031)){
args__4736__auto__.push((arguments[i__4731__auto___66032]));

var G__66033 = (i__4731__auto___66032 + (1));
i__4731__auto___66032 = G__66033;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65410 = conformed_args__63365__auto__;
var map__65410__$1 = (((((!((map__65410 == null))))?(((((map__65410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65410):map__65410);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65410__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65410__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65410__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq65409){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65409));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (g "hello")
 * (g nil "hello")
 * 
 * These two are made equivalent at compile time
 * (g {:onClick f} "hello")
 * (g #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (g :#the-id.klass.other-klass "hello")
 * (g :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.g = (function com$fulcrologic$fulcro$dom$g(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66034 = arguments.length;
var i__4731__auto___66035 = (0);
while(true){
if((i__4731__auto___66035 < len__4730__auto___66034)){
args__4736__auto__.push((arguments[i__4731__auto___66035]));

var G__66036 = (i__4731__auto___66035 + (1));
i__4731__auto___66035 = G__66036;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65413 = conformed_args__63365__auto__;
var map__65413__$1 = (((((!((map__65413 == null))))?(((((map__65413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65413):map__65413);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65413__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65413__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65413__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq65412){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65412));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (missing-glyph "hello")
 * (missing-glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (missing-glyph {:onClick f} "hello")
 * (missing-glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (missing-glyph :#the-id.klass.other-klass "hello")
 * (missing-glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.missing_glyph = (function com$fulcrologic$fulcro$dom$missing_glyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66037 = arguments.length;
var i__4731__auto___66038 = (0);
while(true){
if((i__4731__auto___66038 < len__4730__auto___66037)){
args__4736__auto__.push((arguments[i__4731__auto___66038]));

var G__66039 = (i__4731__auto___66038 + (1));
i__4731__auto___66038 = G__66039;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65416 = conformed_args__63365__auto__;
var map__65416__$1 = (((((!((map__65416 == null))))?(((((map__65416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65416):map__65416);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65416__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65416__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65416__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq65415){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65415));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (stop "hello")
 * (stop nil "hello")
 * 
 * These two are made equivalent at compile time
 * (stop {:onClick f} "hello")
 * (stop #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (stop :#the-id.klass.other-klass "hello")
 * (stop :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.stop = (function com$fulcrologic$fulcro$dom$stop(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66040 = arguments.length;
var i__4731__auto___66041 = (0);
while(true){
if((i__4731__auto___66041 < len__4730__auto___66040)){
args__4736__auto__.push((arguments[i__4731__auto___66041]));

var G__66042 = (i__4731__auto___66041 + (1));
i__4731__auto___66041 = G__66042;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65419 = conformed_args__63365__auto__;
var map__65419__$1 = (((((!((map__65419 == null))))?(((((map__65419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65419):map__65419);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65419__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65419__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65419__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq65418){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65418));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting "hello")
 * (feDiffuseLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting {:onClick f} "hello")
 * (feDiffuseLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDiffuseLighting :#the-id.klass.other-klass "hello")
 * (feDiffuseLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDiffuseLighting = (function com$fulcrologic$fulcro$dom$feDiffuseLighting(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66043 = arguments.length;
var i__4731__auto___66044 = (0);
while(true){
if((i__4731__auto___66044 < len__4730__auto___66043)){
args__4736__auto__.push((arguments[i__4731__auto___66044]));

var G__66045 = (i__4731__auto___66044 + (1));
i__4731__auto___66044 = G__66045;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65422 = conformed_args__63365__auto__;
var map__65422__$1 = (((((!((map__65422 == null))))?(((((map__65422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65422):map__65422);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65422__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65422__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65422__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq65421){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65421));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (filter "hello")
 * (filter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (filter {:onClick f} "hello")
 * (filter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (filter :#the-id.klass.other-klass "hello")
 * (filter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.filter = (function com$fulcrologic$fulcro$dom$filter(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66046 = arguments.length;
var i__4731__auto___66047 = (0);
while(true){
if((i__4731__auto___66047 < len__4730__auto___66046)){
args__4736__auto__.push((arguments[i__4731__auto___66047]));

var G__66048 = (i__4731__auto___66047 + (1));
i__4731__auto___66047 = G__66048;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65425 = conformed_args__63365__auto__;
var map__65425__$1 = (((((!((map__65425 == null))))?(((((map__65425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65425):map__65425);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65425__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65425__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65425__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq65424){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65424));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComposite "hello")
 * (feComposite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComposite {:onClick f} "hello")
 * (feComposite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComposite :#the-id.klass.other-klass "hello")
 * (feComposite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComposite = (function com$fulcrologic$fulcro$dom$feComposite(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66049 = arguments.length;
var i__4731__auto___66050 = (0);
while(true){
if((i__4731__auto___66050 < len__4730__auto___66049)){
args__4736__auto__.push((arguments[i__4731__auto___66050]));

var G__66051 = (i__4731__auto___66050 + (1));
i__4731__auto___66050 = G__66051;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65428 = conformed_args__63365__auto__;
var map__65428__$1 = (((((!((map__65428 == null))))?(((((map__65428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65428):map__65428);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65428__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65428__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65428__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq65427){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65427));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mesh "hello")
 * (mesh nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mesh {:onClick f} "hello")
 * (mesh #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mesh :#the-id.klass.other-klass "hello")
 * (mesh :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mesh = (function com$fulcrologic$fulcro$dom$mesh(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66052 = arguments.length;
var i__4731__auto___66053 = (0);
while(true){
if((i__4731__auto___66053 < len__4730__auto___66052)){
args__4736__auto__.push((arguments[i__4731__auto___66053]));

var G__66054 = (i__4731__auto___66053 + (1));
i__4731__auto___66053 = G__66054;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65431 = conformed_args__63365__auto__;
var map__65431__$1 = (((((!((map__65431 == null))))?(((((map__65431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65431):map__65431);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65431__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65431__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65431__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq65430){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65430));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (var "hello")
 * (var nil "hello")
 * 
 * These two are made equivalent at compile time
 * (var {:onClick f} "hello")
 * (var #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (var :#the-id.klass.other-klass "hello")
 * (var :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.var$ = (function com$fulcrologic$fulcro$dom$var(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66055 = arguments.length;
var i__4731__auto___66056 = (0);
while(true){
if((i__4731__auto___66056 < len__4730__auto___66055)){
args__4736__auto__.push((arguments[i__4731__auto___66056]));

var G__66057 = (i__4731__auto___66056 + (1));
i__4731__auto___66056 = G__66057;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65434 = conformed_args__63365__auto__;
var map__65434__$1 = (((((!((map__65434 == null))))?(((((map__65434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65434):map__65434);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65434__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65434__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65434__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq65433){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65433));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tspan "hello")
 * (tspan nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tspan {:onClick f} "hello")
 * (tspan #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tspan :#the-id.klass.other-klass "hello")
 * (tspan :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tspan = (function com$fulcrologic$fulcro$dom$tspan(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66058 = arguments.length;
var i__4731__auto___66059 = (0);
while(true){
if((i__4731__auto___66059 < len__4730__auto___66058)){
args__4736__auto__.push((arguments[i__4731__auto___66059]));

var G__66060 = (i__4731__auto___66059 + (1));
i__4731__auto___66059 = G__66060;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65437 = conformed_args__63365__auto__;
var map__65437__$1 = (((((!((map__65437 == null))))?(((((map__65437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65437):map__65437);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65437__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65437__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65437__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq65436){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65436));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ol "hello")
 * (ol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ol {:onClick f} "hello")
 * (ol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ol :#the-id.klass.other-klass "hello")
 * (ol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ol = (function com$fulcrologic$fulcro$dom$ol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66061 = arguments.length;
var i__4731__auto___66062 = (0);
while(true){
if((i__4731__auto___66062 < len__4730__auto___66061)){
args__4736__auto__.push((arguments[i__4731__auto___66062]));

var G__66063 = (i__4731__auto___66062 + (1));
i__4731__auto___66062 = G__66063;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65440 = conformed_args__63365__auto__;
var map__65440__$1 = (((((!((map__65440 == null))))?(((((map__65440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65440):map__65440);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65440__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65440__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65440__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq65439){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65439));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (details "hello")
 * (details nil "hello")
 * 
 * These two are made equivalent at compile time
 * (details {:onClick f} "hello")
 * (details #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (details :#the-id.klass.other-klass "hello")
 * (details :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.details = (function com$fulcrologic$fulcro$dom$details(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66064 = arguments.length;
var i__4731__auto___66065 = (0);
while(true){
if((i__4731__auto___66065 < len__4730__auto___66064)){
args__4736__auto__.push((arguments[i__4731__auto___66065]));

var G__66066 = (i__4731__auto___66065 + (1));
i__4731__auto___66065 = G__66066;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65443 = conformed_args__63365__auto__;
var map__65443__$1 = (((((!((map__65443 == null))))?(((((map__65443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65443):map__65443);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65443__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65443__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65443__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq65442){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65442));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (line "hello")
 * (line nil "hello")
 * 
 * These two are made equivalent at compile time
 * (line {:onClick f} "hello")
 * (line #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (line :#the-id.klass.other-klass "hello")
 * (line :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.line = (function com$fulcrologic$fulcro$dom$line(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66067 = arguments.length;
var i__4731__auto___66068 = (0);
while(true){
if((i__4731__auto___66068 < len__4730__auto___66067)){
args__4736__auto__.push((arguments[i__4731__auto___66068]));

var G__66069 = (i__4731__auto___66068 + (1));
i__4731__auto___66068 = G__66069;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65446 = conformed_args__63365__auto__;
var map__65446__$1 = (((((!((map__65446 == null))))?(((((map__65446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65446):map__65446);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65446__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65446__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65446__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq65445){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65445));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (col "hello")
 * (col nil "hello")
 * 
 * These two are made equivalent at compile time
 * (col {:onClick f} "hello")
 * (col #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (col :#the-id.klass.other-klass "hello")
 * (col :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.col = (function com$fulcrologic$fulcro$dom$col(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66070 = arguments.length;
var i__4731__auto___66071 = (0);
while(true){
if((i__4731__auto___66071 < len__4730__auto___66070)){
args__4736__auto__.push((arguments[i__4731__auto___66071]));

var G__66072 = (i__4731__auto___66071 + (1));
i__4731__auto___66071 = G__66072;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65449 = conformed_args__63365__auto__;
var map__65449__$1 = (((((!((map__65449 == null))))?(((((map__65449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65449):map__65449);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65449__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65449__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65449__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq65448){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65448));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (label "hello")
 * (label nil "hello")
 * 
 * These two are made equivalent at compile time
 * (label {:onClick f} "hello")
 * (label #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (label :#the-id.klass.other-klass "hello")
 * (label :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.label = (function com$fulcrologic$fulcro$dom$label(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66073 = arguments.length;
var i__4731__auto___66074 = (0);
while(true){
if((i__4731__auto___66074 < len__4730__auto___66073)){
args__4736__auto__.push((arguments[i__4731__auto___66074]));

var G__66075 = (i__4731__auto___66074 + (1));
i__4731__auto___66074 = G__66075;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65452 = conformed_args__63365__auto__;
var map__65452__$1 = (((((!((map__65452 == null))))?(((((map__65452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65452):map__65452);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65452__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65452__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65452__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq65451){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65451));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (picture "hello")
 * (picture nil "hello")
 * 
 * These two are made equivalent at compile time
 * (picture {:onClick f} "hello")
 * (picture #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (picture :#the-id.klass.other-klass "hello")
 * (picture :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.picture = (function com$fulcrologic$fulcro$dom$picture(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66076 = arguments.length;
var i__4731__auto___66077 = (0);
while(true){
if((i__4731__auto___66077 < len__4730__auto___66076)){
args__4736__auto__.push((arguments[i__4731__auto___66077]));

var G__66078 = (i__4731__auto___66077 + (1));
i__4731__auto___66077 = G__66078;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65455 = conformed_args__63365__auto__;
var map__65455__$1 = (((((!((map__65455 == null))))?(((((map__65455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65455):map__65455);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65455__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65455__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65455__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq65454){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65454));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rt "hello")
 * (rt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rt {:onClick f} "hello")
 * (rt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rt :#the-id.klass.other-klass "hello")
 * (rt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rt = (function com$fulcrologic$fulcro$dom$rt(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66079 = arguments.length;
var i__4731__auto___66080 = (0);
while(true){
if((i__4731__auto___66080 < len__4730__auto___66079)){
args__4736__auto__.push((arguments[i__4731__auto___66080]));

var G__66081 = (i__4731__auto___66080 + (1));
i__4731__auto___66080 = G__66081;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65458 = conformed_args__63365__auto__;
var map__65458__$1 = (((((!((map__65458 == null))))?(((((map__65458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65458):map__65458);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65458__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65458__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65458__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq65457){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65457));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h6 "hello")
 * (h6 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h6 {:onClick f} "hello")
 * (h6 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h6 :#the-id.klass.other-klass "hello")
 * (h6 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h6 = (function com$fulcrologic$fulcro$dom$h6(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66082 = arguments.length;
var i__4731__auto___66083 = (0);
while(true){
if((i__4731__auto___66083 < len__4730__auto___66082)){
args__4736__auto__.push((arguments[i__4731__auto___66083]));

var G__66084 = (i__4731__auto___66083 + (1));
i__4731__auto___66083 = G__66084;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65461 = conformed_args__63365__auto__;
var map__65461__$1 = (((((!((map__65461 == null))))?(((((map__65461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65461):map__65461);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65461__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65461__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65461__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq65460){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65460));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (vkern "hello")
 * (vkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (vkern {:onClick f} "hello")
 * (vkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (vkern :#the-id.klass.other-klass "hello")
 * (vkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.vkern = (function com$fulcrologic$fulcro$dom$vkern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66085 = arguments.length;
var i__4731__auto___66086 = (0);
while(true){
if((i__4731__auto___66086 < len__4730__auto___66085)){
args__4736__auto__.push((arguments[i__4731__auto___66086]));

var G__66087 = (i__4731__auto___66086 + (1));
i__4731__auto___66086 = G__66087;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65464 = conformed_args__63365__auto__;
var map__65464__$1 = (((((!((map__65464 == null))))?(((((map__65464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65464):map__65464);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65464__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65464__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65464__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq65463){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65463));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (link "hello")
 * (link nil "hello")
 * 
 * These two are made equivalent at compile time
 * (link {:onClick f} "hello")
 * (link #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (link :#the-id.klass.other-klass "hello")
 * (link :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.link = (function com$fulcrologic$fulcro$dom$link(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66088 = arguments.length;
var i__4731__auto___66089 = (0);
while(true){
if((i__4731__auto___66089 < len__4730__auto___66088)){
args__4736__auto__.push((arguments[i__4731__auto___66089]));

var G__66090 = (i__4731__auto___66089 + (1));
i__4731__auto___66089 = G__66090;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65467 = conformed_args__63365__auto__;
var map__65467__$1 = (((((!((map__65467 == null))))?(((((map__65467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65467):map__65467);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65467__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65467__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65467__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq65466){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65466));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (defs "hello")
 * (defs nil "hello")
 * 
 * These two are made equivalent at compile time
 * (defs {:onClick f} "hello")
 * (defs #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (defs :#the-id.klass.other-klass "hello")
 * (defs :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.defs = (function com$fulcrologic$fulcro$dom$defs(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66091 = arguments.length;
var i__4731__auto___66092 = (0);
while(true){
if((i__4731__auto___66092 < len__4730__auto___66091)){
args__4736__auto__.push((arguments[i__4731__auto___66092]));

var G__66093 = (i__4731__auto___66092 + (1));
i__4731__auto___66092 = G__66093;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65470 = conformed_args__63365__auto__;
var map__65470__$1 = (((((!((map__65470 == null))))?(((((map__65470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65470):map__65470);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65470__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65470__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65470__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq65469){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65469));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyph "hello")
 * (glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyph {:onClick f} "hello")
 * (glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyph :#the-id.klass.other-klass "hello")
 * (glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyph = (function com$fulcrologic$fulcro$dom$glyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66094 = arguments.length;
var i__4731__auto___66095 = (0);
while(true){
if((i__4731__auto___66095 < len__4730__auto___66094)){
args__4736__auto__.push((arguments[i__4731__auto___66095]));

var G__66096 = (i__4731__auto___66095 + (1));
i__4731__auto___66095 = G__66096;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65473 = conformed_args__63365__auto__;
var map__65473__$1 = (((((!((map__65473 == null))))?(((((map__65473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65473):map__65473);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65473__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65473__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65473__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq65472){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65472));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (colgroup "hello")
 * (colgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (colgroup {:onClick f} "hello")
 * (colgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (colgroup :#the-id.klass.other-klass "hello")
 * (colgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.colgroup = (function com$fulcrologic$fulcro$dom$colgroup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66097 = arguments.length;
var i__4731__auto___66098 = (0);
while(true){
if((i__4731__auto___66098 < len__4730__auto___66097)){
args__4736__auto__.push((arguments[i__4731__auto___66098]));

var G__66099 = (i__4731__auto___66098 + (1));
i__4731__auto___66098 = G__66099;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65476 = conformed_args__63365__auto__;
var map__65476__$1 = (((((!((map__65476 == null))))?(((((map__65476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65476):map__65476);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65476__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65476__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65476__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq65475){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65475));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meter "hello")
 * (meter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meter {:onClick f} "hello")
 * (meter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meter :#the-id.klass.other-klass "hello")
 * (meter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meter = (function com$fulcrologic$fulcro$dom$meter(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66100 = arguments.length;
var i__4731__auto___66101 = (0);
while(true){
if((i__4731__auto___66101 < len__4730__auto___66100)){
args__4736__auto__.push((arguments[i__4731__auto___66101]));

var G__66102 = (i__4731__auto___66101 + (1));
i__4731__auto___66101 = G__66102;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65479 = conformed_args__63365__auto__;
var map__65479__$1 = (((((!((map__65479 == null))))?(((((map__65479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65479):map__65479);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65479__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65479__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65479__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq65478){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65478));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdo "hello")
 * (bdo nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdo {:onClick f} "hello")
 * (bdo #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdo :#the-id.klass.other-klass "hello")
 * (bdo :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdo = (function com$fulcrologic$fulcro$dom$bdo(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66103 = arguments.length;
var i__4731__auto___66104 = (0);
while(true){
if((i__4731__auto___66104 < len__4730__auto___66103)){
args__4736__auto__.push((arguments[i__4731__auto___66104]));

var G__66105 = (i__4731__auto___66104 + (1));
i__4731__auto___66104 = G__66105;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65482 = conformed_args__63365__auto__;
var map__65482__$1 = (((((!((map__65482 == null))))?(((((map__65482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65482):map__65482);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65482__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65482__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65482__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq65481){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65481));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feImage "hello")
 * (feImage nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feImage {:onClick f} "hello")
 * (feImage #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feImage :#the-id.klass.other-klass "hello")
 * (feImage :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feImage = (function com$fulcrologic$fulcro$dom$feImage(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66106 = arguments.length;
var i__4731__auto___66107 = (0);
while(true){
if((i__4731__auto___66107 < len__4730__auto___66106)){
args__4736__auto__.push((arguments[i__4731__auto___66107]));

var G__66108 = (i__4731__auto___66107 + (1));
i__4731__auto___66107 = G__66108;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65485 = conformed_args__63365__auto__;
var map__65485__$1 = (((((!((map__65485 == null))))?(((((map__65485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65485):map__65485);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65485__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65485__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65485__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq65484){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65484));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (b "hello")
 * (b nil "hello")
 * 
 * These two are made equivalent at compile time
 * (b {:onClick f} "hello")
 * (b #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (b :#the-id.klass.other-klass "hello")
 * (b :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.b = (function com$fulcrologic$fulcro$dom$b(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66109 = arguments.length;
var i__4731__auto___66110 = (0);
while(true){
if((i__4731__auto___66110 < len__4730__auto___66109)){
args__4736__auto__.push((arguments[i__4731__auto___66110]));

var G__66111 = (i__4731__auto___66110 + (1));
i__4731__auto___66110 = G__66111;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65488 = conformed_args__63365__auto__;
var map__65488__$1 = (((((!((map__65488 == null))))?(((((map__65488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65488):map__65488);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65488__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65488__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65488__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq65487){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65487));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (svg "hello")
 * (svg nil "hello")
 * 
 * These two are made equivalent at compile time
 * (svg {:onClick f} "hello")
 * (svg #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (svg :#the-id.klass.other-klass "hello")
 * (svg :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.svg = (function com$fulcrologic$fulcro$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66112 = arguments.length;
var i__4731__auto___66113 = (0);
while(true){
if((i__4731__auto___66113 < len__4730__auto___66112)){
args__4736__auto__.push((arguments[i__4731__auto___66113]));

var G__66114 = (i__4731__auto___66113 + (1));
i__4731__auto___66113 = G__66114;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65491 = conformed_args__63365__auto__;
var map__65491__$1 = (((((!((map__65491 == null))))?(((((map__65491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65491):map__65491);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65491__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65491__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65491__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq65490){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65490));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTile "hello")
 * (feTile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTile {:onClick f} "hello")
 * (feTile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTile :#the-id.klass.other-klass "hello")
 * (feTile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTile = (function com$fulcrologic$fulcro$dom$feTile(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66115 = arguments.length;
var i__4731__auto___66116 = (0);
while(true){
if((i__4731__auto___66116 < len__4730__auto___66115)){
args__4736__auto__.push((arguments[i__4731__auto___66116]));

var G__66117 = (i__4731__auto___66116 + (1));
i__4731__auto___66116 = G__66117;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65494 = conformed_args__63365__auto__;
var map__65494__$1 = (((((!((map__65494 == null))))?(((((map__65494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65494):map__65494);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65494__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65494__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65494__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq65493){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65493));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ellipse "hello")
 * (ellipse nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ellipse {:onClick f} "hello")
 * (ellipse #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ellipse :#the-id.klass.other-klass "hello")
 * (ellipse :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ellipse = (function com$fulcrologic$fulcro$dom$ellipse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66118 = arguments.length;
var i__4731__auto___66119 = (0);
while(true){
if((i__4731__auto___66119 < len__4730__auto___66118)){
args__4736__auto__.push((arguments[i__4731__auto___66119]));

var G__66120 = (i__4731__auto___66119 + (1));
i__4731__auto___66119 = G__66120;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65497 = conformed_args__63365__auto__;
var map__65497__$1 = (((((!((map__65497 == null))))?(((((map__65497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65497):map__65497);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65497__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65497__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65497__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq65496){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65496));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (code "hello")
 * (code nil "hello")
 * 
 * These two are made equivalent at compile time
 * (code {:onClick f} "hello")
 * (code #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (code :#the-id.klass.other-klass "hello")
 * (code :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.code = (function com$fulcrologic$fulcro$dom$code(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66121 = arguments.length;
var i__4731__auto___66122 = (0);
while(true){
if((i__4731__auto___66122 < len__4730__auto___66121)){
args__4736__auto__.push((arguments[i__4731__auto___66122]));

var G__66123 = (i__4731__auto___66122 + (1));
i__4731__auto___66122 = G__66123;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65500 = conformed_args__63365__auto__;
var map__65500__$1 = (((((!((map__65500 == null))))?(((((map__65500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65500):map__65500);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65500__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65500__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65500__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq65499){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65499));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dialog "hello")
 * (dialog nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dialog {:onClick f} "hello")
 * (dialog #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dialog :#the-id.klass.other-klass "hello")
 * (dialog :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dialog = (function com$fulcrologic$fulcro$dom$dialog(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66124 = arguments.length;
var i__4731__auto___66125 = (0);
while(true){
if((i__4731__auto___66125 < len__4730__auto___66124)){
args__4736__auto__.push((arguments[i__4731__auto___66125]));

var G__66126 = (i__4731__auto___66125 + (1));
i__4731__auto___66125 = G__66126;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65503 = conformed_args__63365__auto__;
var map__65503__$1 = (((((!((map__65503 == null))))?(((((map__65503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65503):map__65503);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65503__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65503__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65503__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq65502){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65502));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (linearGradient "hello")
 * (linearGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (linearGradient {:onClick f} "hello")
 * (linearGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (linearGradient :#the-id.klass.other-klass "hello")
 * (linearGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.linearGradient = (function com$fulcrologic$fulcro$dom$linearGradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66127 = arguments.length;
var i__4731__auto___66128 = (0);
while(true){
if((i__4731__auto___66128 < len__4730__auto___66127)){
args__4736__auto__.push((arguments[i__4731__auto___66128]));

var G__66129 = (i__4731__auto___66128 + (1));
i__4731__auto___66128 = G__66129;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65506 = conformed_args__63365__auto__;
var map__65506__$1 = (((((!((map__65506 == null))))?(((((map__65506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65506):map__65506);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65506__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65506__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65506__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq65505){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65505));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (discard "hello")
 * (discard nil "hello")
 * 
 * These two are made equivalent at compile time
 * (discard {:onClick f} "hello")
 * (discard #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (discard :#the-id.klass.other-klass "hello")
 * (discard :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.discard = (function com$fulcrologic$fulcro$dom$discard(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66130 = arguments.length;
var i__4731__auto___66131 = (0);
while(true){
if((i__4731__auto___66131 < len__4730__auto___66130)){
args__4736__auto__.push((arguments[i__4731__auto___66131]));

var G__66132 = (i__4731__auto___66131 + (1));
i__4731__auto___66131 = G__66132;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65509 = conformed_args__63365__auto__;
var map__65509__$1 = (((((!((map__65509 == null))))?(((((map__65509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65509):map__65509);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65509__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65509__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65509__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq65508){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65508));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-src "hello")
 * (font-face-src nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-src {:onClick f} "hello")
 * (font-face-src #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-src :#the-id.klass.other-klass "hello")
 * (font-face-src :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_src = (function com$fulcrologic$fulcro$dom$font_face_src(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66133 = arguments.length;
var i__4731__auto___66134 = (0);
while(true){
if((i__4731__auto___66134 < len__4730__auto___66133)){
args__4736__auto__.push((arguments[i__4731__auto___66134]));

var G__66135 = (i__4731__auto___66134 + (1));
i__4731__auto___66134 = G__66135;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65512 = conformed_args__63365__auto__;
var map__65512__$1 = (((((!((map__65512 == null))))?(((((map__65512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65512):map__65512);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65512__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65512__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65512__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq65511){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65511));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (noscript "hello")
 * (noscript nil "hello")
 * 
 * These two are made equivalent at compile time
 * (noscript {:onClick f} "hello")
 * (noscript #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (noscript :#the-id.klass.other-klass "hello")
 * (noscript :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.noscript = (function com$fulcrologic$fulcro$dom$noscript(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66136 = arguments.length;
var i__4731__auto___66137 = (0);
while(true){
if((i__4731__auto___66137 < len__4730__auto___66136)){
args__4736__auto__.push((arguments[i__4731__auto___66137]));

var G__66138 = (i__4731__auto___66137 + (1));
i__4731__auto___66137 = G__66138;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65515 = conformed_args__63365__auto__;
var map__65515__$1 = (((((!((map__65515 == null))))?(((((map__65515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65515):map__65515);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65515__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65515__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65515__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq65514){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65514));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateTransform "hello")
 * (animateTransform nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateTransform {:onClick f} "hello")
 * (animateTransform #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateTransform :#the-id.klass.other-klass "hello")
 * (animateTransform :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateTransform = (function com$fulcrologic$fulcro$dom$animateTransform(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66139 = arguments.length;
var i__4731__auto___66140 = (0);
while(true){
if((i__4731__auto___66140 < len__4730__auto___66139)){
args__4736__auto__.push((arguments[i__4731__auto___66140]));

var G__66141 = (i__4731__auto___66140 + (1));
i__4731__auto___66140 = G__66141;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65518 = conformed_args__63365__auto__;
var map__65518__$1 = (((((!((map__65518 == null))))?(((((map__65518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65518):map__65518);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65518__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65518__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65518__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq65517){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65517));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix "hello")
 * (feColorMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix {:onClick f} "hello")
 * (feColorMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feColorMatrix :#the-id.klass.other-klass "hello")
 * (feColorMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feColorMatrix = (function com$fulcrologic$fulcro$dom$feColorMatrix(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66142 = arguments.length;
var i__4731__auto___66143 = (0);
while(true){
if((i__4731__auto___66143 < len__4730__auto___66142)){
args__4736__auto__.push((arguments[i__4731__auto___66143]));

var G__66144 = (i__4731__auto___66143 + (1));
i__4731__auto___66143 = G__66144;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65521 = conformed_args__63365__auto__;
var map__65521__$1 = (((((!((map__65521 == null))))?(((((map__65521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65521):map__65521);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65521__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65521__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65521__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq65520){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65520));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h2 "hello")
 * (h2 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h2 {:onClick f} "hello")
 * (h2 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h2 :#the-id.klass.other-klass "hello")
 * (h2 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h2 = (function com$fulcrologic$fulcro$dom$h2(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66145 = arguments.length;
var i__4731__auto___66146 = (0);
while(true){
if((i__4731__auto___66146 < len__4730__auto___66145)){
args__4736__auto__.push((arguments[i__4731__auto___66146]));

var G__66147 = (i__4731__auto___66146 + (1));
i__4731__auto___66146 = G__66147;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65524 = conformed_args__63365__auto__;
var map__65524__$1 = (((((!((map__65524 == null))))?(((((map__65524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65524):map__65524);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65524__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65524__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65524__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq65523){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65523));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (area "hello")
 * (area nil "hello")
 * 
 * These two are made equivalent at compile time
 * (area {:onClick f} "hello")
 * (area #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (area :#the-id.klass.other-klass "hello")
 * (area :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.area = (function com$fulcrologic$fulcro$dom$area(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66148 = arguments.length;
var i__4731__auto___66149 = (0);
while(true){
if((i__4731__auto___66149 < len__4730__auto___66148)){
args__4736__auto__.push((arguments[i__4731__auto___66149]));

var G__66150 = (i__4731__auto___66149 + (1));
i__4731__auto___66149 = G__66150;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65527 = conformed_args__63365__auto__;
var map__65527__$1 = (((((!((map__65527 == null))))?(((((map__65527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65527):map__65527);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65527__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65527__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65527__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq65526){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65526));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (br "hello")
 * (br nil "hello")
 * 
 * These two are made equivalent at compile time
 * (br {:onClick f} "hello")
 * (br #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (br :#the-id.klass.other-klass "hello")
 * (br :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.br = (function com$fulcrologic$fulcro$dom$br(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66151 = arguments.length;
var i__4731__auto___66152 = (0);
while(true){
if((i__4731__auto___66152 < len__4730__auto___66151)){
args__4736__auto__.push((arguments[i__4731__auto___66152]));

var G__66153 = (i__4731__auto___66152 + (1));
i__4731__auto___66152 = G__66153;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65530 = conformed_args__63365__auto__;
var map__65530__$1 = (((((!((map__65530 == null))))?(((((map__65530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65530):map__65530);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65530__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65530__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65530__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq65529){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65529));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (image "hello")
 * (image nil "hello")
 * 
 * These two are made equivalent at compile time
 * (image {:onClick f} "hello")
 * (image #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (image :#the-id.klass.other-klass "hello")
 * (image :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.image = (function com$fulcrologic$fulcro$dom$image(var_args){
var args__4736__auto__ = [];
var len__4730__auto___66154 = arguments.length;
var i__4731__auto___66155 = (0);
while(true){
if((i__4731__auto___66155 < len__4730__auto___66154)){
args__4736__auto__.push((arguments[i__4731__auto___66155]));

var G__66156 = (i__4731__auto___66155 + (1));
i__4731__auto___66155 = G__66156;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63365__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.conform_BANG_(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","dom-element-args","com.fulcrologic.fulcro.dom/dom-element-args",-927171079),args);
var map__65533 = conformed_args__63365__auto__;
var map__65533__$1 = (((((!((map__65533 == null))))?(((((map__65533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65533):map__65533);
var css__63368__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65533__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63367__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65533__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63366__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65533__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63367__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63367__auto__);
var attrs_value__63369__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__63366__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63369__auto__], null),children__63367__auto____$1),css__63368__auto__);
});

com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq65532){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65532));
});


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
