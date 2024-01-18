goog.provide('com.fulcrologic.fulcro.dom');
goog.scope(function(){
  com.fulcrologic.fulcro.dom.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});





































































































































































































/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return module$node_modules$react$index.isValidElement(x);
});
com.fulcrologic.fulcro.dom.child__GT_typed_child = (function com$fulcrologic$fulcro$dom$child__GT_typed_child(child){
if(typeof child === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),child], null);
} else {
if(typeof child === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),child], null);
} else {
if(((cljs.core.vector_QMARK_(child)) || (((cljs.core.seq_QMARK_(child)) || (cljs.core.array_QMARK_(child)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),child], null);
} else {
if((child == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),child], null);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(child))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),child], null);
} else {
return null;
}
}
}
}
}
});
/**
 * Runtime parsing of DOM tag arguments. Returns a map with keys :css, :attrs, and :children.
 */
com.fulcrologic.fulcro.dom.parse_args = (function com$fulcrologic$fulcro$dom$parse_args(args){
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__65055){
var vec__65056 = p__65055;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65056,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65056,(1),null);
var pair = vec__65056;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__65059){
var vec__65060 = p__65059;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65060,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65060,(1),null);
var pair = vec__65060;
var has_arg_QMARK_ = cljs.core.seq(args__$1);
var arg = cljs.core.first(args__$1);
if(((has_arg_QMARK_) && ((arg == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),null], null))], null);
} else {
if(((cljs.core.object_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-object","js-object",1830199158),arg], null))], null);
} else {
if(((cljs.core.map_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),arg], null))], null);
} else {
return pair;

}
}
}
});
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__65063){
var vec__65070 = p__65063;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65070,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65070,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__65073 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65073,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__65073;
}
})()], null);
});
return cljs.core.second(parse_children(parse_attrs(parse_css(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null)))));
});
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return module$node_modules$react_dom$index.render(component,el);
});
/**
 * This fn is outdated - it expects js/ReactDOMServer to be defined (used to be provided cljsjs.react.dom.server).
 *   It is better to do it yourself (under shadow-cljs):
 * 
 * ```clj
 * (ns ex (:require ["react-dom/server" :as react-dom-server] ...))
 * (react-dom-server/renderToString c)
 * ```
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__65075 = arguments.length;
switch (G__65075) {
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

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return module$node_modules$react_dom$index.findDOMNode(component);
}));

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__65081 = component.refs;
var G__65081__$1 = (((G__65081 == null))?null:com.fulcrologic.fulcro.dom.goog$module$goog$object.get(G__65081,name));
if((G__65081__$1 == null)){
return null;
} else {
return module$node_modules$react_dom$index.findDOMNode(G__65081__$1);
}
}));

(com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2);

/**
 * React component that wraps dom/input to prevent cursor madness.
 */
com.fulcrologic.fulcro.dom.Input = com.fulcrologic.fulcro.dom.inputs.StringBufferedInput(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","Input","com.fulcrologic.fulcro.dom/Input",-2041077839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string->model","string->model",-134531957),cljs.core.identity,new cljs.core.Keyword(null,"model->string","model->string",-2085451701),cljs.core.identity], null));
/**
 * A wrapped input. Use this when you see the cursor jump around while you're trying to type in an input. Drop-in replacement
 * for `dom/input`.
 * 
 * NOTE: The onChange and onBlur handlers will receive a string value, not an event. If you want the raw event on changes use onInput.
 */
com.fulcrologic.fulcro.dom.ui_input = (function (){var factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.Input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
return (function (props){
var temp__5802__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5802__auto__)){
var ref = temp__5802__auto__;
var G__65082 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
var G__65083 = (function (){var G__65084 = r;
if((G__65084 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__65084);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__65083) : ref.call(null,G__65083));
}));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__65082) : factory.call(null,G__65082));
} else {
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(props) : factory.call(null,props));
}
});
})();
/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__65092 = arguments.length;
switch (G__65092) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___66338 = arguments.length;
var i__5770__auto___66339 = (0);
while(true){
if((i__5770__auto___66339 < len__5769__auto___66338)){
args_arr__5794__auto__.push((arguments[i__5770__auto___66339]));

var G__66340 = (i__5770__auto___66339 + (1));
i__5770__auto___66339 = G__66340;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return module$node_modules$react$index.createElement(tag,opts);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,tag,opts,children);
}));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq65089){
var G__65090 = cljs.core.first(seq65089);
var seq65089__$1 = cljs.core.next(seq65089);
var G__65091 = cljs.core.first(seq65089__$1);
var seq65089__$2 = cljs.core.next(seq65089__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65090,G__65091,seq65089__$2);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$lang$maxFixedArity = (2));

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

return module$node_modules$react$index.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(component,"state","cached-props","onChange");
var next_state = ({});
var inputRef = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(next_props,"inputRef");
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(next_state,next_props,({"onChange": on_change}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(next_state,"inputRef");

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(({"cached-props": next_state}));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__5043__auto__ = tag;
if(cljs.core.truth_(and__5043__auto__)){
var G__65104 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__65104) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__65104));
} else {
return and__5043__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
(this$.state = (function (){var state = ({"ref": com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"inputRef")});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(state,props,({"onChange": goog.bind(com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$,"onChange"),this$)}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(state,"inputRef");

return ({"cached-props": state});
})());

return module$node_modules$react$index.Component.apply(this$,arguments);
});
(ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''));

goog.inherits(ctor,module$node_modules$react$index.Component);

var x65111_66341 = ctor.prototype;
(x65111_66341.onChange = (function (event){
var this$ = this;
var temp__5804__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$.props,"onChange");
if(cljs.core.truth_(temp__5804__auto__)){
var handler = temp__5804__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(event,"target","value"));
} else {
return null;
}
}));

(x65111_66341.UNSAFE_componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props","value");
var this_node = module$node_modules$react_dom$index.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,(function (p1__65106_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__65106_SHARP_);
})));
var element_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__5043__auto__ = state_value;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = element_value;
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,187,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements. See https://book.fulcrologic.com/#warn-dom-type-mismatch"], null);
}),null)),null,1224341294,null);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,com.fulcrologic.fulcro.dom.goog$module$goog$object.get(new_props,"value"));
}
}));

(x65111_66341.render = (function (){
var this$ = this;
return module$node_modules$react$index.createElement(element,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props"));
}));


var real_factory = (function() { 
var G__66342__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(module$node_modules$react$index.createElement,ctor,args);
};
var G__66342 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66343__i = 0, G__66343__a = new Array(arguments.length -  0);
while (G__66343__i < G__66343__a.length) {G__66343__a[G__66343__i] = arguments[G__66343__i + 0]; ++G__66343__i;}
  args = new cljs.core.IndexedSeq(G__66343__a,0,null);
} 
return G__66342__delegate.call(this,args);};
G__66342.cljs$lang$maxFixedArity = 0;
G__66342.cljs$lang$applyTo = (function (arglist__66344){
var args = cljs.core.seq(arglist__66344);
return G__66342__delegate(args);
});
G__66342.cljs$core$IFn$_invoke$arity$variadic = G__66342__delegate;
return G__66342;
})()
;
return (function() { 
var G__66345__delegate = function (props,children){
var t = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"type");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"file")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,"input",props,children);
} else {
var temp__5802__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"ref");
if(cljs.core.truth_(temp__5802__auto__)){
var r = temp__5802__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(p,props);

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(p,"inputRef",r);

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
}
};
var G__66345 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__66346__i = 0, G__66346__a = new Array(arguments.length -  1);
while (G__66346__i < G__66346__a.length) {G__66346__a[G__66346__i] = arguments[G__66346__i + 1]; ++G__66346__i;}
  children = new cljs.core.IndexedSeq(G__66346__a,0,null);
} 
return G__66345__delegate.call(this,props,children);};
G__66345.cljs$lang$maxFixedArity = 1;
G__66345.cljs$lang$applyTo = (function (arglist__66347){
var props = cljs.core.first(arglist__66347);
var children = cljs.core.rest(arglist__66347);
return G__66345__delegate(props,children);
});
G__66345.cljs$core$IFn$_invoke$arity$variadic = G__66345__delegate;
return G__66345;
})()
;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,tail);
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__65121 = tag;
switch (G__65121) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65121)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__65123 = arguments.length;
switch (G__65123) {
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

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__65124 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__65125 = cljs.core.seq(vec__65124);
var first__65126 = cljs.core.first(seq__65125);
var seq__65125__$1 = cljs.core.next(seq__65125);
var head = first__65126;
var tail = seq__65125__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__65127 = (function (){var G__65128 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__65128,tail);

return G__65128;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__65127) : f.call(null,G__65127));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__65129 = (function (){var G__65130 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__65130,args);

return G__65130;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__65129) : f.call(null,G__65129));
} else {
if(cljs.core.object_QMARK_(head)){
var G__65131 = (function (){var G__65132 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__65132,tail);

return G__65132;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__65131) : f.call(null,G__65131));
} else {
if(cljs.core.map_QMARK_(head)){
var G__65137 = (function (){var G__65138 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__65138,tail);

return G__65138;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__65137) : f.call(null,G__65137));
} else {
var G__65147 = (function (){var G__65148 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__65148,args);

return G__65148;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__65147) : f.call(null,G__65147));

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3);

/**
 * Just like macro-create-element, but never wraps form input types.
 */
com.fulcrologic.fulcro.dom.macro_create_unwrapped_element = (function com$fulcrologic$fulcro$dom$macro_create_unwrapped_element(var_args){
var G__65155 = arguments.length;
switch (G__65155) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__65182 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__65183 = cljs.core.seq(vec__65182);
var first__65184 = cljs.core.first(seq__65183);
var seq__65183__$1 = cljs.core.next(seq__65183);
var head = first__65184;
var tail = seq__65183__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__65191 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__65191,tail);

return G__65191;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__65198 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__65198,args);

return G__65198;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__65208 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__65208,tail);

return G__65208;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__65217 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__65217,tail);

return G__65217;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__65218 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__65218,args);

return G__65218;
})());

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$lang$maxFixedArity = 3);

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
var args__5775__auto__ = [];
var len__5769__auto___66351 = arguments.length;
var i__5770__auto___66352 = (0);
while(true){
if((i__5770__auto___66352 < len__5769__auto___66351)){
args__5775__auto__.push((arguments[i__5770__auto___66352]));

var G__66353 = (i__5770__auto___66352 + (1));
i__5770__auto___66352 = G__66353;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65300 = conformed_args__63810__auto__;
var map__65300__$1 = cljs.core.__destructure_map(map__65300);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65300__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65300__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65300__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq65294){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65294));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66354 = arguments.length;
var i__5770__auto___66355 = (0);
while(true){
if((i__5770__auto___66355 < len__5769__auto___66354)){
args__5775__auto__.push((arguments[i__5770__auto___66355]));

var G__66356 = (i__5770__auto___66355 + (1));
i__5770__auto___66355 = G__66356;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65303 = conformed_args__63810__auto__;
var map__65303__$1 = cljs.core.__destructure_map(map__65303);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65303__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65303__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65303__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq65302){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65302));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66357 = arguments.length;
var i__5770__auto___66358 = (0);
while(true){
if((i__5770__auto___66358 < len__5769__auto___66357)){
args__5775__auto__.push((arguments[i__5770__auto___66358]));

var G__66359 = (i__5770__auto___66358 + (1));
i__5770__auto___66358 = G__66359;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65309 = conformed_args__63810__auto__;
var map__65309__$1 = cljs.core.__destructure_map(map__65309);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65309__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65309__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65309__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq65304){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65304));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66360 = arguments.length;
var i__5770__auto___66361 = (0);
while(true){
if((i__5770__auto___66361 < len__5769__auto___66360)){
args__5775__auto__.push((arguments[i__5770__auto___66361]));

var G__66362 = (i__5770__auto___66361 + (1));
i__5770__auto___66361 = G__66362;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65315 = conformed_args__63810__auto__;
var map__65315__$1 = cljs.core.__destructure_map(map__65315);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65315__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65315__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65315__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq65314){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65314));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66363 = arguments.length;
var i__5770__auto___66364 = (0);
while(true){
if((i__5770__auto___66364 < len__5769__auto___66363)){
args__5775__auto__.push((arguments[i__5770__auto___66364]));

var G__66365 = (i__5770__auto___66364 + (1));
i__5770__auto___66364 = G__66365;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65321 = conformed_args__63810__auto__;
var map__65321__$1 = cljs.core.__destructure_map(map__65321);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65321__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65321__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65321__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq65320){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65320));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66369 = arguments.length;
var i__5770__auto___66370 = (0);
while(true){
if((i__5770__auto___66370 < len__5769__auto___66369)){
args__5775__auto__.push((arguments[i__5770__auto___66370]));

var G__66371 = (i__5770__auto___66370 + (1));
i__5770__auto___66370 = G__66371;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65334 = conformed_args__63810__auto__;
var map__65334__$1 = cljs.core.__destructure_map(map__65334);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65334__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65334__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65334__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq65326){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65326));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66372 = arguments.length;
var i__5770__auto___66373 = (0);
while(true){
if((i__5770__auto___66373 < len__5769__auto___66372)){
args__5775__auto__.push((arguments[i__5770__auto___66373]));

var G__66374 = (i__5770__auto___66373 + (1));
i__5770__auto___66373 = G__66374;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65339 = conformed_args__63810__auto__;
var map__65339__$1 = cljs.core.__destructure_map(map__65339);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65339__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65339__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65339__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq65336){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65336));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66375 = arguments.length;
var i__5770__auto___66376 = (0);
while(true){
if((i__5770__auto___66376 < len__5769__auto___66375)){
args__5775__auto__.push((arguments[i__5770__auto___66376]));

var G__66377 = (i__5770__auto___66376 + (1));
i__5770__auto___66376 = G__66377;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65345 = conformed_args__63810__auto__;
var map__65345__$1 = cljs.core.__destructure_map(map__65345);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65345__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65345__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65345__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq65343){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65343));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66380 = arguments.length;
var i__5770__auto___66381 = (0);
while(true){
if((i__5770__auto___66381 < len__5769__auto___66380)){
args__5775__auto__.push((arguments[i__5770__auto___66381]));

var G__66382 = (i__5770__auto___66381 + (1));
i__5770__auto___66381 = G__66382;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65354 = conformed_args__63810__auto__;
var map__65354__$1 = cljs.core.__destructure_map(map__65354);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65354__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65354__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65354__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq65350){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65350));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66383 = arguments.length;
var i__5770__auto___66384 = (0);
while(true){
if((i__5770__auto___66384 < len__5769__auto___66383)){
args__5775__auto__.push((arguments[i__5770__auto___66384]));

var G__66385 = (i__5770__auto___66384 + (1));
i__5770__auto___66384 = G__66385;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65358 = conformed_args__63810__auto__;
var map__65358__$1 = cljs.core.__destructure_map(map__65358);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65358__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65358__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65358__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq65356){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65356));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66386 = arguments.length;
var i__5770__auto___66387 = (0);
while(true){
if((i__5770__auto___66387 < len__5769__auto___66386)){
args__5775__auto__.push((arguments[i__5770__auto___66387]));

var G__66388 = (i__5770__auto___66387 + (1));
i__5770__auto___66387 = G__66388;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65368 = conformed_args__63810__auto__;
var map__65368__$1 = cljs.core.__destructure_map(map__65368);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65368__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65368__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65368__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq65364){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65364));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66389 = arguments.length;
var i__5770__auto___66390 = (0);
while(true){
if((i__5770__auto___66390 < len__5769__auto___66389)){
args__5775__auto__.push((arguments[i__5770__auto___66390]));

var G__66391 = (i__5770__auto___66390 + (1));
i__5770__auto___66390 = G__66391;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65373 = conformed_args__63810__auto__;
var map__65373__$1 = cljs.core.__destructure_map(map__65373);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65373__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65373__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65373__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq65371){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65371));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66392 = arguments.length;
var i__5770__auto___66393 = (0);
while(true){
if((i__5770__auto___66393 < len__5769__auto___66392)){
args__5775__auto__.push((arguments[i__5770__auto___66393]));

var G__66394 = (i__5770__auto___66393 + (1));
i__5770__auto___66393 = G__66394;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65381 = conformed_args__63810__auto__;
var map__65381__$1 = cljs.core.__destructure_map(map__65381);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65381__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65381__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65381__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq65378){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65378));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66395 = arguments.length;
var i__5770__auto___66396 = (0);
while(true){
if((i__5770__auto___66396 < len__5769__auto___66395)){
args__5775__auto__.push((arguments[i__5770__auto___66396]));

var G__66397 = (i__5770__auto___66396 + (1));
i__5770__auto___66396 = G__66397;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65395 = conformed_args__63810__auto__;
var map__65395__$1 = cljs.core.__destructure_map(map__65395);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65395__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65395__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65395__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq65390){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65390));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66400 = arguments.length;
var i__5770__auto___66401 = (0);
while(true){
if((i__5770__auto___66401 < len__5769__auto___66400)){
args__5775__auto__.push((arguments[i__5770__auto___66401]));

var G__66402 = (i__5770__auto___66401 + (1));
i__5770__auto___66401 = G__66402;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65398 = conformed_args__63810__auto__;
var map__65398__$1 = cljs.core.__destructure_map(map__65398);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65398__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65398__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65398__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq65397){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65397));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66405 = arguments.length;
var i__5770__auto___66406 = (0);
while(true){
if((i__5770__auto___66406 < len__5769__auto___66405)){
args__5775__auto__.push((arguments[i__5770__auto___66406]));

var G__66407 = (i__5770__auto___66406 + (1));
i__5770__auto___66406 = G__66407;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65402 = conformed_args__63810__auto__;
var map__65402__$1 = cljs.core.__destructure_map(map__65402);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65402__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65402__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65402__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq65399){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65399));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66408 = arguments.length;
var i__5770__auto___66409 = (0);
while(true){
if((i__5770__auto___66409 < len__5769__auto___66408)){
args__5775__auto__.push((arguments[i__5770__auto___66409]));

var G__66410 = (i__5770__auto___66409 + (1));
i__5770__auto___66409 = G__66410;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65406 = conformed_args__63810__auto__;
var map__65406__$1 = cljs.core.__destructure_map(map__65406);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65406__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65406__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65406__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq65404){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65404));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66416 = arguments.length;
var i__5770__auto___66417 = (0);
while(true){
if((i__5770__auto___66417 < len__5769__auto___66416)){
args__5775__auto__.push((arguments[i__5770__auto___66417]));

var G__66418 = (i__5770__auto___66417 + (1));
i__5770__auto___66417 = G__66418;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65412 = conformed_args__63810__auto__;
var map__65412__$1 = cljs.core.__destructure_map(map__65412);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65412__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65412__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65412__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq65411){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65411));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66425 = arguments.length;
var i__5770__auto___66426 = (0);
while(true){
if((i__5770__auto___66426 < len__5769__auto___66425)){
args__5775__auto__.push((arguments[i__5770__auto___66426]));

var G__66427 = (i__5770__auto___66426 + (1));
i__5770__auto___66426 = G__66427;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65418 = conformed_args__63810__auto__;
var map__65418__$1 = cljs.core.__destructure_map(map__65418);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65418__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65418__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65418__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq65414){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65414));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66428 = arguments.length;
var i__5770__auto___66429 = (0);
while(true){
if((i__5770__auto___66429 < len__5769__auto___66428)){
args__5775__auto__.push((arguments[i__5770__auto___66429]));

var G__66430 = (i__5770__auto___66429 + (1));
i__5770__auto___66429 = G__66430;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65422 = conformed_args__63810__auto__;
var map__65422__$1 = cljs.core.__destructure_map(map__65422);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65422__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65422__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65422__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq65419){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65419));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66431 = arguments.length;
var i__5770__auto___66432 = (0);
while(true){
if((i__5770__auto___66432 < len__5769__auto___66431)){
args__5775__auto__.push((arguments[i__5770__auto___66432]));

var G__66435 = (i__5770__auto___66432 + (1));
i__5770__auto___66432 = G__66435;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65426 = conformed_args__63810__auto__;
var map__65426__$1 = cljs.core.__destructure_map(map__65426);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65426__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65426__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65426__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq65424){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65424));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66438 = arguments.length;
var i__5770__auto___66439 = (0);
while(true){
if((i__5770__auto___66439 < len__5769__auto___66438)){
args__5775__auto__.push((arguments[i__5770__auto___66439]));

var G__66440 = (i__5770__auto___66439 + (1));
i__5770__auto___66439 = G__66440;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65430 = conformed_args__63810__auto__;
var map__65430__$1 = cljs.core.__destructure_map(map__65430);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65430__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65430__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65430__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq65428){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65428));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66441 = arguments.length;
var i__5770__auto___66442 = (0);
while(true){
if((i__5770__auto___66442 < len__5769__auto___66441)){
args__5775__auto__.push((arguments[i__5770__auto___66442]));

var G__66444 = (i__5770__auto___66442 + (1));
i__5770__auto___66442 = G__66444;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65443 = conformed_args__63810__auto__;
var map__65443__$1 = cljs.core.__destructure_map(map__65443);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65443__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65443__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65443__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq65434){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65434));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66447 = arguments.length;
var i__5770__auto___66448 = (0);
while(true){
if((i__5770__auto___66448 < len__5769__auto___66447)){
args__5775__auto__.push((arguments[i__5770__auto___66448]));

var G__66449 = (i__5770__auto___66448 + (1));
i__5770__auto___66448 = G__66449;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65447 = conformed_args__63810__auto__;
var map__65447__$1 = cljs.core.__destructure_map(map__65447);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65447__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65447__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65447__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq65445){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65445));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66452 = arguments.length;
var i__5770__auto___66453 = (0);
while(true){
if((i__5770__auto___66453 < len__5769__auto___66452)){
args__5775__auto__.push((arguments[i__5770__auto___66453]));

var G__66454 = (i__5770__auto___66453 + (1));
i__5770__auto___66453 = G__66454;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65452 = conformed_args__63810__auto__;
var map__65452__$1 = cljs.core.__destructure_map(map__65452);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65452__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65452__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65452__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq65450){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65450));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66456 = arguments.length;
var i__5770__auto___66457 = (0);
while(true){
if((i__5770__auto___66457 < len__5769__auto___66456)){
args__5775__auto__.push((arguments[i__5770__auto___66457]));

var G__66458 = (i__5770__auto___66457 + (1));
i__5770__auto___66457 = G__66458;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65467 = conformed_args__63810__auto__;
var map__65467__$1 = cljs.core.__destructure_map(map__65467);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65467__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65467__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65467__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq65458){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65458));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66461 = arguments.length;
var i__5770__auto___66462 = (0);
while(true){
if((i__5770__auto___66462 < len__5769__auto___66461)){
args__5775__auto__.push((arguments[i__5770__auto___66462]));

var G__66463 = (i__5770__auto___66462 + (1));
i__5770__auto___66462 = G__66463;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65470 = conformed_args__63810__auto__;
var map__65470__$1 = cljs.core.__destructure_map(map__65470);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65470__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65470__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65470__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq65468){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65468));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66464 = arguments.length;
var i__5770__auto___66465 = (0);
while(true){
if((i__5770__auto___66465 < len__5769__auto___66464)){
args__5775__auto__.push((arguments[i__5770__auto___66465]));

var G__66466 = (i__5770__auto___66465 + (1));
i__5770__auto___66465 = G__66466;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65475 = conformed_args__63810__auto__;
var map__65475__$1 = cljs.core.__destructure_map(map__65475);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65475__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65475__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65475__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq65472){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65472));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66467 = arguments.length;
var i__5770__auto___66468 = (0);
while(true){
if((i__5770__auto___66468 < len__5769__auto___66467)){
args__5775__auto__.push((arguments[i__5770__auto___66468]));

var G__66469 = (i__5770__auto___66468 + (1));
i__5770__auto___66468 = G__66469;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65481 = conformed_args__63810__auto__;
var map__65481__$1 = cljs.core.__destructure_map(map__65481);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65481__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65481__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65481__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq65476){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65476));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66471 = arguments.length;
var i__5770__auto___66472 = (0);
while(true){
if((i__5770__auto___66472 < len__5769__auto___66471)){
args__5775__auto__.push((arguments[i__5770__auto___66472]));

var G__66473 = (i__5770__auto___66472 + (1));
i__5770__auto___66472 = G__66473;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65493 = conformed_args__63810__auto__;
var map__65493__$1 = cljs.core.__destructure_map(map__65493);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65493__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65493__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65493__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq65486){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65486));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66474 = arguments.length;
var i__5770__auto___66475 = (0);
while(true){
if((i__5770__auto___66475 < len__5769__auto___66474)){
args__5775__auto__.push((arguments[i__5770__auto___66475]));

var G__66477 = (i__5770__auto___66475 + (1));
i__5770__auto___66475 = G__66477;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65499 = conformed_args__63810__auto__;
var map__65499__$1 = cljs.core.__destructure_map(map__65499);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65499__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65499__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65499__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq65494){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65494));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66479 = arguments.length;
var i__5770__auto___66480 = (0);
while(true){
if((i__5770__auto___66480 < len__5769__auto___66479)){
args__5775__auto__.push((arguments[i__5770__auto___66480]));

var G__66481 = (i__5770__auto___66480 + (1));
i__5770__auto___66480 = G__66481;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65513 = conformed_args__63810__auto__;
var map__65513__$1 = cljs.core.__destructure_map(map__65513);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65513__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65513__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65513__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq65502){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65502));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66484 = arguments.length;
var i__5770__auto___66485 = (0);
while(true){
if((i__5770__auto___66485 < len__5769__auto___66484)){
args__5775__auto__.push((arguments[i__5770__auto___66485]));

var G__66486 = (i__5770__auto___66485 + (1));
i__5770__auto___66485 = G__66486;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65524 = conformed_args__63810__auto__;
var map__65524__$1 = cljs.core.__destructure_map(map__65524);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65524__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65524__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65524__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq65522){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65522));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66489 = arguments.length;
var i__5770__auto___66490 = (0);
while(true){
if((i__5770__auto___66490 < len__5769__auto___66489)){
args__5775__auto__.push((arguments[i__5770__auto___66490]));

var G__66493 = (i__5770__auto___66490 + (1));
i__5770__auto___66490 = G__66493;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65531 = conformed_args__63810__auto__;
var map__65531__$1 = cljs.core.__destructure_map(map__65531);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65531__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65531__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65531__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq65525){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65525));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66498 = arguments.length;
var i__5770__auto___66499 = (0);
while(true){
if((i__5770__auto___66499 < len__5769__auto___66498)){
args__5775__auto__.push((arguments[i__5770__auto___66499]));

var G__66500 = (i__5770__auto___66499 + (1));
i__5770__auto___66499 = G__66500;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65536 = conformed_args__63810__auto__;
var map__65536__$1 = cljs.core.__destructure_map(map__65536);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65536__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65536__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65536__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq65535){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65535));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66501 = arguments.length;
var i__5770__auto___66502 = (0);
while(true){
if((i__5770__auto___66502 < len__5769__auto___66501)){
args__5775__auto__.push((arguments[i__5770__auto___66502]));

var G__66503 = (i__5770__auto___66502 + (1));
i__5770__auto___66502 = G__66503;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65542 = conformed_args__63810__auto__;
var map__65542__$1 = cljs.core.__destructure_map(map__65542);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65542__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65542__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65542__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq65537){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65537));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66504 = arguments.length;
var i__5770__auto___66505 = (0);
while(true){
if((i__5770__auto___66505 < len__5769__auto___66504)){
args__5775__auto__.push((arguments[i__5770__auto___66505]));

var G__66506 = (i__5770__auto___66505 + (1));
i__5770__auto___66505 = G__66506;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65548 = conformed_args__63810__auto__;
var map__65548__$1 = cljs.core.__destructure_map(map__65548);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65548__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65548__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65548__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq65547){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65547));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66507 = arguments.length;
var i__5770__auto___66508 = (0);
while(true){
if((i__5770__auto___66508 < len__5769__auto___66507)){
args__5775__auto__.push((arguments[i__5770__auto___66508]));

var G__66509 = (i__5770__auto___66508 + (1));
i__5770__auto___66508 = G__66509;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65555 = conformed_args__63810__auto__;
var map__65555__$1 = cljs.core.__destructure_map(map__65555);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65555__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65555__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65555__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq65550){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65550));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66510 = arguments.length;
var i__5770__auto___66511 = (0);
while(true){
if((i__5770__auto___66511 < len__5769__auto___66510)){
args__5775__auto__.push((arguments[i__5770__auto___66511]));

var G__66512 = (i__5770__auto___66511 + (1));
i__5770__auto___66511 = G__66512;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65559 = conformed_args__63810__auto__;
var map__65559__$1 = cljs.core.__destructure_map(map__65559);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65559__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65559__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65559__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq65557){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65557));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66513 = arguments.length;
var i__5770__auto___66514 = (0);
while(true){
if((i__5770__auto___66514 < len__5769__auto___66513)){
args__5775__auto__.push((arguments[i__5770__auto___66514]));

var G__66515 = (i__5770__auto___66514 + (1));
i__5770__auto___66514 = G__66515;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65564 = conformed_args__63810__auto__;
var map__65564__$1 = cljs.core.__destructure_map(map__65564);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65564__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65564__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65564__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq65561){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65561));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66516 = arguments.length;
var i__5770__auto___66517 = (0);
while(true){
if((i__5770__auto___66517 < len__5769__auto___66516)){
args__5775__auto__.push((arguments[i__5770__auto___66517]));

var G__66518 = (i__5770__auto___66517 + (1));
i__5770__auto___66517 = G__66518;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65572 = conformed_args__63810__auto__;
var map__65572__$1 = cljs.core.__destructure_map(map__65572);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65572__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65572__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65572__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq65569){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65569));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66519 = arguments.length;
var i__5770__auto___66520 = (0);
while(true){
if((i__5770__auto___66520 < len__5769__auto___66519)){
args__5775__auto__.push((arguments[i__5770__auto___66520]));

var G__66521 = (i__5770__auto___66520 + (1));
i__5770__auto___66520 = G__66521;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65577 = conformed_args__63810__auto__;
var map__65577__$1 = cljs.core.__destructure_map(map__65577);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65577__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65577__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65577__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq65574){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65574));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66522 = arguments.length;
var i__5770__auto___66523 = (0);
while(true){
if((i__5770__auto___66523 < len__5769__auto___66522)){
args__5775__auto__.push((arguments[i__5770__auto___66523]));

var G__66524 = (i__5770__auto___66523 + (1));
i__5770__auto___66523 = G__66524;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65595 = conformed_args__63810__auto__;
var map__65595__$1 = cljs.core.__destructure_map(map__65595);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65595__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65595__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65595__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq65585){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65585));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66525 = arguments.length;
var i__5770__auto___66526 = (0);
while(true){
if((i__5770__auto___66526 < len__5769__auto___66525)){
args__5775__auto__.push((arguments[i__5770__auto___66526]));

var G__66527 = (i__5770__auto___66526 + (1));
i__5770__auto___66526 = G__66527;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65606 = conformed_args__63810__auto__;
var map__65606__$1 = cljs.core.__destructure_map(map__65606);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65606__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65606__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65606__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq65605){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65605));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66528 = arguments.length;
var i__5770__auto___66529 = (0);
while(true){
if((i__5770__auto___66529 < len__5769__auto___66528)){
args__5775__auto__.push((arguments[i__5770__auto___66529]));

var G__66530 = (i__5770__auto___66529 + (1));
i__5770__auto___66529 = G__66530;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65619 = conformed_args__63810__auto__;
var map__65619__$1 = cljs.core.__destructure_map(map__65619);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65619__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65619__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65619__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq65615){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65615));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66531 = arguments.length;
var i__5770__auto___66532 = (0);
while(true){
if((i__5770__auto___66532 < len__5769__auto___66531)){
args__5775__auto__.push((arguments[i__5770__auto___66532]));

var G__66533 = (i__5770__auto___66532 + (1));
i__5770__auto___66532 = G__66533;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65635 = conformed_args__63810__auto__;
var map__65635__$1 = cljs.core.__destructure_map(map__65635);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65635__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65635__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65635__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq65632){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65632));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66534 = arguments.length;
var i__5770__auto___66535 = (0);
while(true){
if((i__5770__auto___66535 < len__5769__auto___66534)){
args__5775__auto__.push((arguments[i__5770__auto___66535]));

var G__66536 = (i__5770__auto___66535 + (1));
i__5770__auto___66535 = G__66536;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65637 = conformed_args__63810__auto__;
var map__65637__$1 = cljs.core.__destructure_map(map__65637);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65637__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65637__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65637__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq65636){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65636));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66537 = arguments.length;
var i__5770__auto___66538 = (0);
while(true){
if((i__5770__auto___66538 < len__5769__auto___66537)){
args__5775__auto__.push((arguments[i__5770__auto___66538]));

var G__66539 = (i__5770__auto___66538 + (1));
i__5770__auto___66538 = G__66539;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65645 = conformed_args__63810__auto__;
var map__65645__$1 = cljs.core.__destructure_map(map__65645);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65645__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65645__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65645__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq65640){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65640));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66540 = arguments.length;
var i__5770__auto___66541 = (0);
while(true){
if((i__5770__auto___66541 < len__5769__auto___66540)){
args__5775__auto__.push((arguments[i__5770__auto___66541]));

var G__66542 = (i__5770__auto___66541 + (1));
i__5770__auto___66541 = G__66542;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65663 = conformed_args__63810__auto__;
var map__65663__$1 = cljs.core.__destructure_map(map__65663);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65663__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65663__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65663__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq65650){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65650));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66543 = arguments.length;
var i__5770__auto___66544 = (0);
while(true){
if((i__5770__auto___66544 < len__5769__auto___66543)){
args__5775__auto__.push((arguments[i__5770__auto___66544]));

var G__66545 = (i__5770__auto___66544 + (1));
i__5770__auto___66544 = G__66545;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65665 = conformed_args__63810__auto__;
var map__65665__$1 = cljs.core.__destructure_map(map__65665);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65665__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65665__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65665__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq65664){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65664));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66546 = arguments.length;
var i__5770__auto___66547 = (0);
while(true){
if((i__5770__auto___66547 < len__5769__auto___66546)){
args__5775__auto__.push((arguments[i__5770__auto___66547]));

var G__66548 = (i__5770__auto___66547 + (1));
i__5770__auto___66547 = G__66548;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65672 = conformed_args__63810__auto__;
var map__65672__$1 = cljs.core.__destructure_map(map__65672);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65672__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65672__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65672__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq65669){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65669));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66549 = arguments.length;
var i__5770__auto___66550 = (0);
while(true){
if((i__5770__auto___66550 < len__5769__auto___66549)){
args__5775__auto__.push((arguments[i__5770__auto___66550]));

var G__66551 = (i__5770__auto___66550 + (1));
i__5770__auto___66550 = G__66551;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65676 = conformed_args__63810__auto__;
var map__65676__$1 = cljs.core.__destructure_map(map__65676);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65676__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65676__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65676__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq65674){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65674));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66552 = arguments.length;
var i__5770__auto___66553 = (0);
while(true){
if((i__5770__auto___66553 < len__5769__auto___66552)){
args__5775__auto__.push((arguments[i__5770__auto___66553]));

var G__66554 = (i__5770__auto___66553 + (1));
i__5770__auto___66553 = G__66554;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65680 = conformed_args__63810__auto__;
var map__65680__$1 = cljs.core.__destructure_map(map__65680);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65680__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65680__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65680__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq65678){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65678));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66555 = arguments.length;
var i__5770__auto___66556 = (0);
while(true){
if((i__5770__auto___66556 < len__5769__auto___66555)){
args__5775__auto__.push((arguments[i__5770__auto___66556]));

var G__66557 = (i__5770__auto___66556 + (1));
i__5770__auto___66556 = G__66557;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65690 = conformed_args__63810__auto__;
var map__65690__$1 = cljs.core.__destructure_map(map__65690);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65690__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65690__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65690__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq65682){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65682));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66558 = arguments.length;
var i__5770__auto___66559 = (0);
while(true){
if((i__5770__auto___66559 < len__5769__auto___66558)){
args__5775__auto__.push((arguments[i__5770__auto___66559]));

var G__66560 = (i__5770__auto___66559 + (1));
i__5770__auto___66559 = G__66560;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65698 = conformed_args__63810__auto__;
var map__65698__$1 = cljs.core.__destructure_map(map__65698);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65698__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65698__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65698__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq65691){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65691));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66561 = arguments.length;
var i__5770__auto___66562 = (0);
while(true){
if((i__5770__auto___66562 < len__5769__auto___66561)){
args__5775__auto__.push((arguments[i__5770__auto___66562]));

var G__66563 = (i__5770__auto___66562 + (1));
i__5770__auto___66562 = G__66563;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65708 = conformed_args__63810__auto__;
var map__65708__$1 = cljs.core.__destructure_map(map__65708);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65708__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65708__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65708__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq65702){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65702));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66564 = arguments.length;
var i__5770__auto___66565 = (0);
while(true){
if((i__5770__auto___66565 < len__5769__auto___66564)){
args__5775__auto__.push((arguments[i__5770__auto___66565]));

var G__66566 = (i__5770__auto___66565 + (1));
i__5770__auto___66565 = G__66566;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65716 = conformed_args__63810__auto__;
var map__65716__$1 = cljs.core.__destructure_map(map__65716);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65716__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65716__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65716__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq65709){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65709));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66567 = arguments.length;
var i__5770__auto___66568 = (0);
while(true){
if((i__5770__auto___66568 < len__5769__auto___66567)){
args__5775__auto__.push((arguments[i__5770__auto___66568]));

var G__66569 = (i__5770__auto___66568 + (1));
i__5770__auto___66568 = G__66569;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65722 = conformed_args__63810__auto__;
var map__65722__$1 = cljs.core.__destructure_map(map__65722);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65722__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65722__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65722__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq65720){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65720));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66570 = arguments.length;
var i__5770__auto___66571 = (0);
while(true){
if((i__5770__auto___66571 < len__5769__auto___66570)){
args__5775__auto__.push((arguments[i__5770__auto___66571]));

var G__66572 = (i__5770__auto___66571 + (1));
i__5770__auto___66571 = G__66572;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65727 = conformed_args__63810__auto__;
var map__65727__$1 = cljs.core.__destructure_map(map__65727);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65727__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65727__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65727__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq65723){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65723));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66573 = arguments.length;
var i__5770__auto___66574 = (0);
while(true){
if((i__5770__auto___66574 < len__5769__auto___66573)){
args__5775__auto__.push((arguments[i__5770__auto___66574]));

var G__66575 = (i__5770__auto___66574 + (1));
i__5770__auto___66574 = G__66575;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65734 = conformed_args__63810__auto__;
var map__65734__$1 = cljs.core.__destructure_map(map__65734);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65734__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65734__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65734__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq65732){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65732));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66576 = arguments.length;
var i__5770__auto___66577 = (0);
while(true){
if((i__5770__auto___66577 < len__5769__auto___66576)){
args__5775__auto__.push((arguments[i__5770__auto___66577]));

var G__66578 = (i__5770__auto___66577 + (1));
i__5770__auto___66577 = G__66578;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65736 = conformed_args__63810__auto__;
var map__65736__$1 = cljs.core.__destructure_map(map__65736);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65736__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65736__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65736__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq65735){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65735));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66579 = arguments.length;
var i__5770__auto___66580 = (0);
while(true){
if((i__5770__auto___66580 < len__5769__auto___66579)){
args__5775__auto__.push((arguments[i__5770__auto___66580]));

var G__66581 = (i__5770__auto___66580 + (1));
i__5770__auto___66580 = G__66581;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65746 = conformed_args__63810__auto__;
var map__65746__$1 = cljs.core.__destructure_map(map__65746);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65746__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65746__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65746__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq65741){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65741));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66582 = arguments.length;
var i__5770__auto___66583 = (0);
while(true){
if((i__5770__auto___66583 < len__5769__auto___66582)){
args__5775__auto__.push((arguments[i__5770__auto___66583]));

var G__66584 = (i__5770__auto___66583 + (1));
i__5770__auto___66583 = G__66584;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65752 = conformed_args__63810__auto__;
var map__65752__$1 = cljs.core.__destructure_map(map__65752);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65752__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65752__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65752__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq65748){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65748));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66585 = arguments.length;
var i__5770__auto___66586 = (0);
while(true){
if((i__5770__auto___66586 < len__5769__auto___66585)){
args__5775__auto__.push((arguments[i__5770__auto___66586]));

var G__66587 = (i__5770__auto___66586 + (1));
i__5770__auto___66586 = G__66587;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65754 = conformed_args__63810__auto__;
var map__65754__$1 = cljs.core.__destructure_map(map__65754);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65754__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65754__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65754__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq65753){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65753));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66588 = arguments.length;
var i__5770__auto___66589 = (0);
while(true){
if((i__5770__auto___66589 < len__5769__auto___66588)){
args__5775__auto__.push((arguments[i__5770__auto___66589]));

var G__66590 = (i__5770__auto___66589 + (1));
i__5770__auto___66589 = G__66590;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65756 = conformed_args__63810__auto__;
var map__65756__$1 = cljs.core.__destructure_map(map__65756);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65756__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65756__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65756__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq65755){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65755));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66591 = arguments.length;
var i__5770__auto___66592 = (0);
while(true){
if((i__5770__auto___66592 < len__5769__auto___66591)){
args__5775__auto__.push((arguments[i__5770__auto___66592]));

var G__66593 = (i__5770__auto___66592 + (1));
i__5770__auto___66592 = G__66593;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65758 = conformed_args__63810__auto__;
var map__65758__$1 = cljs.core.__destructure_map(map__65758);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65758__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65758__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65758__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq65757){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65757));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66594 = arguments.length;
var i__5770__auto___66595 = (0);
while(true){
if((i__5770__auto___66595 < len__5769__auto___66594)){
args__5775__auto__.push((arguments[i__5770__auto___66595]));

var G__66596 = (i__5770__auto___66595 + (1));
i__5770__auto___66595 = G__66596;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65768 = conformed_args__63810__auto__;
var map__65768__$1 = cljs.core.__destructure_map(map__65768);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65768__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65768__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65768__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq65763){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65763));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66597 = arguments.length;
var i__5770__auto___66598 = (0);
while(true){
if((i__5770__auto___66598 < len__5769__auto___66597)){
args__5775__auto__.push((arguments[i__5770__auto___66598]));

var G__66599 = (i__5770__auto___66598 + (1));
i__5770__auto___66598 = G__66599;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65775 = conformed_args__63810__auto__;
var map__65775__$1 = cljs.core.__destructure_map(map__65775);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65775__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65775__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65775__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq65770){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65770));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66600 = arguments.length;
var i__5770__auto___66601 = (0);
while(true){
if((i__5770__auto___66601 < len__5769__auto___66600)){
args__5775__auto__.push((arguments[i__5770__auto___66601]));

var G__66602 = (i__5770__auto___66601 + (1));
i__5770__auto___66601 = G__66602;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65780 = conformed_args__63810__auto__;
var map__65780__$1 = cljs.core.__destructure_map(map__65780);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65780__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65780__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65780__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq65777){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65777));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66603 = arguments.length;
var i__5770__auto___66604 = (0);
while(true){
if((i__5770__auto___66604 < len__5769__auto___66603)){
args__5775__auto__.push((arguments[i__5770__auto___66604]));

var G__66605 = (i__5770__auto___66604 + (1));
i__5770__auto___66604 = G__66605;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65783 = conformed_args__63810__auto__;
var map__65783__$1 = cljs.core.__destructure_map(map__65783);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65783__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65783__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65783__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq65782){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65782));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66606 = arguments.length;
var i__5770__auto___66607 = (0);
while(true){
if((i__5770__auto___66607 < len__5769__auto___66606)){
args__5775__auto__.push((arguments[i__5770__auto___66607]));

var G__66608 = (i__5770__auto___66607 + (1));
i__5770__auto___66607 = G__66608;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65792 = conformed_args__63810__auto__;
var map__65792__$1 = cljs.core.__destructure_map(map__65792);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65792__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65792__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65792__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq65791){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65791));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66609 = arguments.length;
var i__5770__auto___66610 = (0);
while(true){
if((i__5770__auto___66610 < len__5769__auto___66609)){
args__5775__auto__.push((arguments[i__5770__auto___66610]));

var G__66611 = (i__5770__auto___66610 + (1));
i__5770__auto___66610 = G__66611;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65797 = conformed_args__63810__auto__;
var map__65797__$1 = cljs.core.__destructure_map(map__65797);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65797__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65797__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65797__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq65793){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65793));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66612 = arguments.length;
var i__5770__auto___66613 = (0);
while(true){
if((i__5770__auto___66613 < len__5769__auto___66612)){
args__5775__auto__.push((arguments[i__5770__auto___66613]));

var G__66614 = (i__5770__auto___66613 + (1));
i__5770__auto___66613 = G__66614;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65811 = conformed_args__63810__auto__;
var map__65811__$1 = cljs.core.__destructure_map(map__65811);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65811__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65811__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65811__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq65806){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65806));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66615 = arguments.length;
var i__5770__auto___66616 = (0);
while(true){
if((i__5770__auto___66616 < len__5769__auto___66615)){
args__5775__auto__.push((arguments[i__5770__auto___66616]));

var G__66617 = (i__5770__auto___66616 + (1));
i__5770__auto___66616 = G__66617;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65821 = conformed_args__63810__auto__;
var map__65821__$1 = cljs.core.__destructure_map(map__65821);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65821__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65821__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65821__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq65820){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65820));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66618 = arguments.length;
var i__5770__auto___66619 = (0);
while(true){
if((i__5770__auto___66619 < len__5769__auto___66618)){
args__5775__auto__.push((arguments[i__5770__auto___66619]));

var G__66620 = (i__5770__auto___66619 + (1));
i__5770__auto___66619 = G__66620;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65833 = conformed_args__63810__auto__;
var map__65833__$1 = cljs.core.__destructure_map(map__65833);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65833__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65833__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65833__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq65827){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65827));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66621 = arguments.length;
var i__5770__auto___66622 = (0);
while(true){
if((i__5770__auto___66622 < len__5769__auto___66621)){
args__5775__auto__.push((arguments[i__5770__auto___66622]));

var G__66623 = (i__5770__auto___66622 + (1));
i__5770__auto___66622 = G__66623;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65843 = conformed_args__63810__auto__;
var map__65843__$1 = cljs.core.__destructure_map(map__65843);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65843__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65843__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65843__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq65837){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65837));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66624 = arguments.length;
var i__5770__auto___66625 = (0);
while(true){
if((i__5770__auto___66625 < len__5769__auto___66624)){
args__5775__auto__.push((arguments[i__5770__auto___66625]));

var G__66626 = (i__5770__auto___66625 + (1));
i__5770__auto___66625 = G__66626;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65860 = conformed_args__63810__auto__;
var map__65860__$1 = cljs.core.__destructure_map(map__65860);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65860__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65860__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65860__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq65851){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65851));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66627 = arguments.length;
var i__5770__auto___66628 = (0);
while(true){
if((i__5770__auto___66628 < len__5769__auto___66627)){
args__5775__auto__.push((arguments[i__5770__auto___66628]));

var G__66629 = (i__5770__auto___66628 + (1));
i__5770__auto___66628 = G__66629;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65872 = conformed_args__63810__auto__;
var map__65872__$1 = cljs.core.__destructure_map(map__65872);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65872__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65872__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65872__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq65871){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65871));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66630 = arguments.length;
var i__5770__auto___66631 = (0);
while(true){
if((i__5770__auto___66631 < len__5769__auto___66630)){
args__5775__auto__.push((arguments[i__5770__auto___66631]));

var G__66632 = (i__5770__auto___66631 + (1));
i__5770__auto___66631 = G__66632;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65879 = conformed_args__63810__auto__;
var map__65879__$1 = cljs.core.__destructure_map(map__65879);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65879__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65879__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65879__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq65873){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65873));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66633 = arguments.length;
var i__5770__auto___66634 = (0);
while(true){
if((i__5770__auto___66634 < len__5769__auto___66633)){
args__5775__auto__.push((arguments[i__5770__auto___66634]));

var G__66635 = (i__5770__auto___66634 + (1));
i__5770__auto___66634 = G__66635;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65886 = conformed_args__63810__auto__;
var map__65886__$1 = cljs.core.__destructure_map(map__65886);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65886__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65886__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65886__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq65881){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65881));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66636 = arguments.length;
var i__5770__auto___66637 = (0);
while(true){
if((i__5770__auto___66637 < len__5769__auto___66636)){
args__5775__auto__.push((arguments[i__5770__auto___66637]));

var G__66638 = (i__5770__auto___66637 + (1));
i__5770__auto___66637 = G__66638;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65890 = conformed_args__63810__auto__;
var map__65890__$1 = cljs.core.__destructure_map(map__65890);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65890__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65890__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65890__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq65887){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65887));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66639 = arguments.length;
var i__5770__auto___66640 = (0);
while(true){
if((i__5770__auto___66640 < len__5769__auto___66639)){
args__5775__auto__.push((arguments[i__5770__auto___66640]));

var G__66641 = (i__5770__auto___66640 + (1));
i__5770__auto___66640 = G__66641;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65901 = conformed_args__63810__auto__;
var map__65901__$1 = cljs.core.__destructure_map(map__65901);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65901__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65901__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65901__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq65894){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65894));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66642 = arguments.length;
var i__5770__auto___66643 = (0);
while(true){
if((i__5770__auto___66643 < len__5769__auto___66642)){
args__5775__auto__.push((arguments[i__5770__auto___66643]));

var G__66644 = (i__5770__auto___66643 + (1));
i__5770__auto___66643 = G__66644;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65912 = conformed_args__63810__auto__;
var map__65912__$1 = cljs.core.__destructure_map(map__65912);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65912__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65912__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65912__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq65902){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65902));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66645 = arguments.length;
var i__5770__auto___66646 = (0);
while(true){
if((i__5770__auto___66646 < len__5769__auto___66645)){
args__5775__auto__.push((arguments[i__5770__auto___66646]));

var G__66647 = (i__5770__auto___66646 + (1));
i__5770__auto___66646 = G__66647;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65924 = conformed_args__63810__auto__;
var map__65924__$1 = cljs.core.__destructure_map(map__65924);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65924__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65924__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65924__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq65915){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65915));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66648 = arguments.length;
var i__5770__auto___66649 = (0);
while(true){
if((i__5770__auto___66649 < len__5769__auto___66648)){
args__5775__auto__.push((arguments[i__5770__auto___66649]));

var G__66650 = (i__5770__auto___66649 + (1));
i__5770__auto___66649 = G__66650;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65937 = conformed_args__63810__auto__;
var map__65937__$1 = cljs.core.__destructure_map(map__65937);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65937__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65937__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65937__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq65930){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65930));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66651 = arguments.length;
var i__5770__auto___66652 = (0);
while(true){
if((i__5770__auto___66652 < len__5769__auto___66651)){
args__5775__auto__.push((arguments[i__5770__auto___66652]));

var G__66653 = (i__5770__auto___66652 + (1));
i__5770__auto___66652 = G__66653;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65949 = conformed_args__63810__auto__;
var map__65949__$1 = cljs.core.__destructure_map(map__65949);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65949__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65949__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65949__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq65945){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65945));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66654 = arguments.length;
var i__5770__auto___66655 = (0);
while(true){
if((i__5770__auto___66655 < len__5769__auto___66654)){
args__5775__auto__.push((arguments[i__5770__auto___66655]));

var G__66656 = (i__5770__auto___66655 + (1));
i__5770__auto___66655 = G__66656;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65953 = conformed_args__63810__auto__;
var map__65953__$1 = cljs.core.__destructure_map(map__65953);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65953__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65953__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65953__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq65950){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65950));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66657 = arguments.length;
var i__5770__auto___66658 = (0);
while(true){
if((i__5770__auto___66658 < len__5769__auto___66657)){
args__5775__auto__.push((arguments[i__5770__auto___66658]));

var G__66659 = (i__5770__auto___66658 + (1));
i__5770__auto___66658 = G__66659;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65960 = conformed_args__63810__auto__;
var map__65960__$1 = cljs.core.__destructure_map(map__65960);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65960__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65960__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65960__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq65958){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65958));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66660 = arguments.length;
var i__5770__auto___66661 = (0);
while(true){
if((i__5770__auto___66661 < len__5769__auto___66660)){
args__5775__auto__.push((arguments[i__5770__auto___66661]));

var G__66662 = (i__5770__auto___66661 + (1));
i__5770__auto___66661 = G__66662;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65967 = conformed_args__63810__auto__;
var map__65967__$1 = cljs.core.__destructure_map(map__65967);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65967__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65967__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65967__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq65964){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65964));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66663 = arguments.length;
var i__5770__auto___66664 = (0);
while(true){
if((i__5770__auto___66664 < len__5769__auto___66663)){
args__5775__auto__.push((arguments[i__5770__auto___66664]));

var G__66665 = (i__5770__auto___66664 + (1));
i__5770__auto___66664 = G__66665;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65980 = conformed_args__63810__auto__;
var map__65980__$1 = cljs.core.__destructure_map(map__65980);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65980__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65980__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65980__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq65971){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65971));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66666 = arguments.length;
var i__5770__auto___66667 = (0);
while(true){
if((i__5770__auto___66667 < len__5769__auto___66666)){
args__5775__auto__.push((arguments[i__5770__auto___66667]));

var G__66668 = (i__5770__auto___66667 + (1));
i__5770__auto___66667 = G__66668;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65983 = conformed_args__63810__auto__;
var map__65983__$1 = cljs.core.__destructure_map(map__65983);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65983__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65983__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65983__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq65982){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65982));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66669 = arguments.length;
var i__5770__auto___66670 = (0);
while(true){
if((i__5770__auto___66670 < len__5769__auto___66669)){
args__5775__auto__.push((arguments[i__5770__auto___66670]));

var G__66671 = (i__5770__auto___66670 + (1));
i__5770__auto___66670 = G__66671;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65987 = conformed_args__63810__auto__;
var map__65987__$1 = cljs.core.__destructure_map(map__65987);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65987__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65987__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65987__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq65984){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65984));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66672 = arguments.length;
var i__5770__auto___66673 = (0);
while(true){
if((i__5770__auto___66673 < len__5769__auto___66672)){
args__5775__auto__.push((arguments[i__5770__auto___66673]));

var G__66674 = (i__5770__auto___66673 + (1));
i__5770__auto___66673 = G__66674;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65992 = conformed_args__63810__auto__;
var map__65992__$1 = cljs.core.__destructure_map(map__65992);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65992__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65992__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65992__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq65990){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65990));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66675 = arguments.length;
var i__5770__auto___66676 = (0);
while(true){
if((i__5770__auto___66676 < len__5769__auto___66675)){
args__5775__auto__.push((arguments[i__5770__auto___66676]));

var G__66677 = (i__5770__auto___66676 + (1));
i__5770__auto___66676 = G__66677;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__65996 = conformed_args__63810__auto__;
var map__65996__$1 = cljs.core.__destructure_map(map__65996);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65996__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65996__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65996__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq65995){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65995));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66678 = arguments.length;
var i__5770__auto___66679 = (0);
while(true){
if((i__5770__auto___66679 < len__5769__auto___66678)){
args__5775__auto__.push((arguments[i__5770__auto___66679]));

var G__66680 = (i__5770__auto___66679 + (1));
i__5770__auto___66679 = G__66680;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66002 = conformed_args__63810__auto__;
var map__66002__$1 = cljs.core.__destructure_map(map__66002);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66002__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66002__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66002__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq65999){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65999));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66681 = arguments.length;
var i__5770__auto___66682 = (0);
while(true){
if((i__5770__auto___66682 < len__5769__auto___66681)){
args__5775__auto__.push((arguments[i__5770__auto___66682]));

var G__66683 = (i__5770__auto___66682 + (1));
i__5770__auto___66682 = G__66683;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66016 = conformed_args__63810__auto__;
var map__66016__$1 = cljs.core.__destructure_map(map__66016);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66016__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66016__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66016__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq66005){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66005));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66684 = arguments.length;
var i__5770__auto___66685 = (0);
while(true){
if((i__5770__auto___66685 < len__5769__auto___66684)){
args__5775__auto__.push((arguments[i__5770__auto___66685]));

var G__66686 = (i__5770__auto___66685 + (1));
i__5770__auto___66685 = G__66686;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66018 = conformed_args__63810__auto__;
var map__66018__$1 = cljs.core.__destructure_map(map__66018);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66018__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66018__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66018__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq66017){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66017));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66687 = arguments.length;
var i__5770__auto___66688 = (0);
while(true){
if((i__5770__auto___66688 < len__5769__auto___66687)){
args__5775__auto__.push((arguments[i__5770__auto___66688]));

var G__66689 = (i__5770__auto___66688 + (1));
i__5770__auto___66688 = G__66689;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66024 = conformed_args__63810__auto__;
var map__66024__$1 = cljs.core.__destructure_map(map__66024);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66024__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66024__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66024__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq66023){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66023));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66690 = arguments.length;
var i__5770__auto___66691 = (0);
while(true){
if((i__5770__auto___66691 < len__5769__auto___66690)){
args__5775__auto__.push((arguments[i__5770__auto___66691]));

var G__66692 = (i__5770__auto___66691 + (1));
i__5770__auto___66691 = G__66692;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66030 = conformed_args__63810__auto__;
var map__66030__$1 = cljs.core.__destructure_map(map__66030);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66030__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66030__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66030__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq66029){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66029));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66693 = arguments.length;
var i__5770__auto___66694 = (0);
while(true){
if((i__5770__auto___66694 < len__5769__auto___66693)){
args__5775__auto__.push((arguments[i__5770__auto___66694]));

var G__66695 = (i__5770__auto___66694 + (1));
i__5770__auto___66694 = G__66695;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66036 = conformed_args__63810__auto__;
var map__66036__$1 = cljs.core.__destructure_map(map__66036);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66036__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66036__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66036__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq66031){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66031));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66696 = arguments.length;
var i__5770__auto___66697 = (0);
while(true){
if((i__5770__auto___66697 < len__5769__auto___66696)){
args__5775__auto__.push((arguments[i__5770__auto___66697]));

var G__66698 = (i__5770__auto___66697 + (1));
i__5770__auto___66697 = G__66698;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66038 = conformed_args__63810__auto__;
var map__66038__$1 = cljs.core.__destructure_map(map__66038);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66038__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66038__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66038__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq66037){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66037));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66699 = arguments.length;
var i__5770__auto___66700 = (0);
while(true){
if((i__5770__auto___66700 < len__5769__auto___66699)){
args__5775__auto__.push((arguments[i__5770__auto___66700]));

var G__66701 = (i__5770__auto___66700 + (1));
i__5770__auto___66700 = G__66701;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66047 = conformed_args__63810__auto__;
var map__66047__$1 = cljs.core.__destructure_map(map__66047);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66047__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66047__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66047__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq66046){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66046));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66702 = arguments.length;
var i__5770__auto___66703 = (0);
while(true){
if((i__5770__auto___66703 < len__5769__auto___66702)){
args__5775__auto__.push((arguments[i__5770__auto___66703]));

var G__66704 = (i__5770__auto___66703 + (1));
i__5770__auto___66703 = G__66704;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66051 = conformed_args__63810__auto__;
var map__66051__$1 = cljs.core.__destructure_map(map__66051);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66051__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66051__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66051__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq66048){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66048));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66705 = arguments.length;
var i__5770__auto___66706 = (0);
while(true){
if((i__5770__auto___66706 < len__5769__auto___66705)){
args__5775__auto__.push((arguments[i__5770__auto___66706]));

var G__66707 = (i__5770__auto___66706 + (1));
i__5770__auto___66706 = G__66707;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66056 = conformed_args__63810__auto__;
var map__66056__$1 = cljs.core.__destructure_map(map__66056);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66056__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66056__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66056__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq66054){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66054));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66708 = arguments.length;
var i__5770__auto___66709 = (0);
while(true){
if((i__5770__auto___66709 < len__5769__auto___66708)){
args__5775__auto__.push((arguments[i__5770__auto___66709]));

var G__66710 = (i__5770__auto___66709 + (1));
i__5770__auto___66709 = G__66710;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66059 = conformed_args__63810__auto__;
var map__66059__$1 = cljs.core.__destructure_map(map__66059);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66059__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66059__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66059__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq66058){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66058));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66711 = arguments.length;
var i__5770__auto___66712 = (0);
while(true){
if((i__5770__auto___66712 < len__5769__auto___66711)){
args__5775__auto__.push((arguments[i__5770__auto___66712]));

var G__66713 = (i__5770__auto___66712 + (1));
i__5770__auto___66712 = G__66713;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66068 = conformed_args__63810__auto__;
var map__66068__$1 = cljs.core.__destructure_map(map__66068);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66068__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66068__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66068__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq66064){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66064));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66714 = arguments.length;
var i__5770__auto___66715 = (0);
while(true){
if((i__5770__auto___66715 < len__5769__auto___66714)){
args__5775__auto__.push((arguments[i__5770__auto___66715]));

var G__66716 = (i__5770__auto___66715 + (1));
i__5770__auto___66715 = G__66716;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66073 = conformed_args__63810__auto__;
var map__66073__$1 = cljs.core.__destructure_map(map__66073);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66073__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66073__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66073__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq66071){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66071));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66717 = arguments.length;
var i__5770__auto___66718 = (0);
while(true){
if((i__5770__auto___66718 < len__5769__auto___66717)){
args__5775__auto__.push((arguments[i__5770__auto___66718]));

var G__66719 = (i__5770__auto___66718 + (1));
i__5770__auto___66718 = G__66719;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66077 = conformed_args__63810__auto__;
var map__66077__$1 = cljs.core.__destructure_map(map__66077);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66077__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66077__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66077__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq66076){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66076));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66720 = arguments.length;
var i__5770__auto___66721 = (0);
while(true){
if((i__5770__auto___66721 < len__5769__auto___66720)){
args__5775__auto__.push((arguments[i__5770__auto___66721]));

var G__66722 = (i__5770__auto___66721 + (1));
i__5770__auto___66721 = G__66722;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66082 = conformed_args__63810__auto__;
var map__66082__$1 = cljs.core.__destructure_map(map__66082);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66082__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66082__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66082__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq66079){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66079));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66723 = arguments.length;
var i__5770__auto___66724 = (0);
while(true){
if((i__5770__auto___66724 < len__5769__auto___66723)){
args__5775__auto__.push((arguments[i__5770__auto___66724]));

var G__66725 = (i__5770__auto___66724 + (1));
i__5770__auto___66724 = G__66725;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66085 = conformed_args__63810__auto__;
var map__66085__$1 = cljs.core.__destructure_map(map__66085);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66085__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66085__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66085__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq66084){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66084));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66726 = arguments.length;
var i__5770__auto___66727 = (0);
while(true){
if((i__5770__auto___66727 < len__5769__auto___66726)){
args__5775__auto__.push((arguments[i__5770__auto___66727]));

var G__66728 = (i__5770__auto___66727 + (1));
i__5770__auto___66727 = G__66728;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66127 = conformed_args__63810__auto__;
var map__66127__$1 = cljs.core.__destructure_map(map__66127);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66127__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66127__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66127__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq66098){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66098));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66729 = arguments.length;
var i__5770__auto___66730 = (0);
while(true){
if((i__5770__auto___66730 < len__5769__auto___66729)){
args__5775__auto__.push((arguments[i__5770__auto___66730]));

var G__66731 = (i__5770__auto___66730 + (1));
i__5770__auto___66730 = G__66731;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66162 = conformed_args__63810__auto__;
var map__66162__$1 = cljs.core.__destructure_map(map__66162);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66162__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66162__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66162__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq66148){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66148));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66732 = arguments.length;
var i__5770__auto___66733 = (0);
while(true){
if((i__5770__auto___66733 < len__5769__auto___66732)){
args__5775__auto__.push((arguments[i__5770__auto___66733]));

var G__66734 = (i__5770__auto___66733 + (1));
i__5770__auto___66733 = G__66734;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66165 = conformed_args__63810__auto__;
var map__66165__$1 = cljs.core.__destructure_map(map__66165);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66165__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66165__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66165__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq66163){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66163));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66735 = arguments.length;
var i__5770__auto___66736 = (0);
while(true){
if((i__5770__auto___66736 < len__5769__auto___66735)){
args__5775__auto__.push((arguments[i__5770__auto___66736]));

var G__66737 = (i__5770__auto___66736 + (1));
i__5770__auto___66736 = G__66737;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66167 = conformed_args__63810__auto__;
var map__66167__$1 = cljs.core.__destructure_map(map__66167);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66167__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66167__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66167__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq66166){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66166));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66738 = arguments.length;
var i__5770__auto___66739 = (0);
while(true){
if((i__5770__auto___66739 < len__5769__auto___66738)){
args__5775__auto__.push((arguments[i__5770__auto___66739]));

var G__66740 = (i__5770__auto___66739 + (1));
i__5770__auto___66739 = G__66740;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66169 = conformed_args__63810__auto__;
var map__66169__$1 = cljs.core.__destructure_map(map__66169);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66169__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66169__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66169__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq66168){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66168));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66741 = arguments.length;
var i__5770__auto___66742 = (0);
while(true){
if((i__5770__auto___66742 < len__5769__auto___66741)){
args__5775__auto__.push((arguments[i__5770__auto___66742]));

var G__66743 = (i__5770__auto___66742 + (1));
i__5770__auto___66742 = G__66743;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66171 = conformed_args__63810__auto__;
var map__66171__$1 = cljs.core.__destructure_map(map__66171);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66171__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66171__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66171__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq66170){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66170));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66744 = arguments.length;
var i__5770__auto___66745 = (0);
while(true){
if((i__5770__auto___66745 < len__5769__auto___66744)){
args__5775__auto__.push((arguments[i__5770__auto___66745]));

var G__66746 = (i__5770__auto___66745 + (1));
i__5770__auto___66745 = G__66746;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66173 = conformed_args__63810__auto__;
var map__66173__$1 = cljs.core.__destructure_map(map__66173);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66173__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66173__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66173__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq66172){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66172));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66747 = arguments.length;
var i__5770__auto___66748 = (0);
while(true){
if((i__5770__auto___66748 < len__5769__auto___66747)){
args__5775__auto__.push((arguments[i__5770__auto___66748]));

var G__66749 = (i__5770__auto___66748 + (1));
i__5770__auto___66748 = G__66749;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66175 = conformed_args__63810__auto__;
var map__66175__$1 = cljs.core.__destructure_map(map__66175);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66175__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66175__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66175__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq66174){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66174));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66750 = arguments.length;
var i__5770__auto___66751 = (0);
while(true){
if((i__5770__auto___66751 < len__5769__auto___66750)){
args__5775__auto__.push((arguments[i__5770__auto___66751]));

var G__66752 = (i__5770__auto___66751 + (1));
i__5770__auto___66751 = G__66752;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66177 = conformed_args__63810__auto__;
var map__66177__$1 = cljs.core.__destructure_map(map__66177);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66177__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66177__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66177__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq66176){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66176));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66753 = arguments.length;
var i__5770__auto___66754 = (0);
while(true){
if((i__5770__auto___66754 < len__5769__auto___66753)){
args__5775__auto__.push((arguments[i__5770__auto___66754]));

var G__66755 = (i__5770__auto___66754 + (1));
i__5770__auto___66754 = G__66755;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66179 = conformed_args__63810__auto__;
var map__66179__$1 = cljs.core.__destructure_map(map__66179);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66179__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66179__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66179__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq66178){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66178));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66756 = arguments.length;
var i__5770__auto___66757 = (0);
while(true){
if((i__5770__auto___66757 < len__5769__auto___66756)){
args__5775__auto__.push((arguments[i__5770__auto___66757]));

var G__66758 = (i__5770__auto___66757 + (1));
i__5770__auto___66757 = G__66758;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66181 = conformed_args__63810__auto__;
var map__66181__$1 = cljs.core.__destructure_map(map__66181);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66181__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66181__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66181__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq66180){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66180));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66759 = arguments.length;
var i__5770__auto___66760 = (0);
while(true){
if((i__5770__auto___66760 < len__5769__auto___66759)){
args__5775__auto__.push((arguments[i__5770__auto___66760]));

var G__66761 = (i__5770__auto___66760 + (1));
i__5770__auto___66760 = G__66761;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66183 = conformed_args__63810__auto__;
var map__66183__$1 = cljs.core.__destructure_map(map__66183);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66183__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66183__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66183__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq66182){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66182));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66762 = arguments.length;
var i__5770__auto___66763 = (0);
while(true){
if((i__5770__auto___66763 < len__5769__auto___66762)){
args__5775__auto__.push((arguments[i__5770__auto___66763]));

var G__66764 = (i__5770__auto___66763 + (1));
i__5770__auto___66763 = G__66764;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66185 = conformed_args__63810__auto__;
var map__66185__$1 = cljs.core.__destructure_map(map__66185);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66185__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66185__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66185__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq66184){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66184));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66765 = arguments.length;
var i__5770__auto___66766 = (0);
while(true){
if((i__5770__auto___66766 < len__5769__auto___66765)){
args__5775__auto__.push((arguments[i__5770__auto___66766]));

var G__66767 = (i__5770__auto___66766 + (1));
i__5770__auto___66766 = G__66767;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66187 = conformed_args__63810__auto__;
var map__66187__$1 = cljs.core.__destructure_map(map__66187);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66187__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66187__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66187__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq66186){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66186));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66768 = arguments.length;
var i__5770__auto___66769 = (0);
while(true){
if((i__5770__auto___66769 < len__5769__auto___66768)){
args__5775__auto__.push((arguments[i__5770__auto___66769]));

var G__66770 = (i__5770__auto___66769 + (1));
i__5770__auto___66769 = G__66770;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66189 = conformed_args__63810__auto__;
var map__66189__$1 = cljs.core.__destructure_map(map__66189);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66189__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66189__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66189__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq66188){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66188));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66771 = arguments.length;
var i__5770__auto___66772 = (0);
while(true){
if((i__5770__auto___66772 < len__5769__auto___66771)){
args__5775__auto__.push((arguments[i__5770__auto___66772]));

var G__66773 = (i__5770__auto___66772 + (1));
i__5770__auto___66772 = G__66773;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66191 = conformed_args__63810__auto__;
var map__66191__$1 = cljs.core.__destructure_map(map__66191);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66191__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66191__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66191__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq66190){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66190));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66774 = arguments.length;
var i__5770__auto___66775 = (0);
while(true){
if((i__5770__auto___66775 < len__5769__auto___66774)){
args__5775__auto__.push((arguments[i__5770__auto___66775]));

var G__66776 = (i__5770__auto___66775 + (1));
i__5770__auto___66775 = G__66776;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66193 = conformed_args__63810__auto__;
var map__66193__$1 = cljs.core.__destructure_map(map__66193);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66193__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66193__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66193__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq66192){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66192));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66777 = arguments.length;
var i__5770__auto___66778 = (0);
while(true){
if((i__5770__auto___66778 < len__5769__auto___66777)){
args__5775__auto__.push((arguments[i__5770__auto___66778]));

var G__66779 = (i__5770__auto___66778 + (1));
i__5770__auto___66778 = G__66779;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66195 = conformed_args__63810__auto__;
var map__66195__$1 = cljs.core.__destructure_map(map__66195);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66195__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66195__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66195__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq66194){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66194));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66780 = arguments.length;
var i__5770__auto___66781 = (0);
while(true){
if((i__5770__auto___66781 < len__5769__auto___66780)){
args__5775__auto__.push((arguments[i__5770__auto___66781]));

var G__66782 = (i__5770__auto___66781 + (1));
i__5770__auto___66781 = G__66782;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66197 = conformed_args__63810__auto__;
var map__66197__$1 = cljs.core.__destructure_map(map__66197);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66197__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66197__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66197__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq66196){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66196));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66783 = arguments.length;
var i__5770__auto___66784 = (0);
while(true){
if((i__5770__auto___66784 < len__5769__auto___66783)){
args__5775__auto__.push((arguments[i__5770__auto___66784]));

var G__66785 = (i__5770__auto___66784 + (1));
i__5770__auto___66784 = G__66785;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66199 = conformed_args__63810__auto__;
var map__66199__$1 = cljs.core.__destructure_map(map__66199);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66199__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66199__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66199__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq66198){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66198));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66786 = arguments.length;
var i__5770__auto___66787 = (0);
while(true){
if((i__5770__auto___66787 < len__5769__auto___66786)){
args__5775__auto__.push((arguments[i__5770__auto___66787]));

var G__66788 = (i__5770__auto___66787 + (1));
i__5770__auto___66787 = G__66788;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66201 = conformed_args__63810__auto__;
var map__66201__$1 = cljs.core.__destructure_map(map__66201);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66201__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66201__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66201__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq66200){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66200));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66789 = arguments.length;
var i__5770__auto___66790 = (0);
while(true){
if((i__5770__auto___66790 < len__5769__auto___66789)){
args__5775__auto__.push((arguments[i__5770__auto___66790]));

var G__66791 = (i__5770__auto___66790 + (1));
i__5770__auto___66790 = G__66791;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66203 = conformed_args__63810__auto__;
var map__66203__$1 = cljs.core.__destructure_map(map__66203);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66203__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66203__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66203__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq66202){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66202));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66792 = arguments.length;
var i__5770__auto___66793 = (0);
while(true){
if((i__5770__auto___66793 < len__5769__auto___66792)){
args__5775__auto__.push((arguments[i__5770__auto___66793]));

var G__66794 = (i__5770__auto___66793 + (1));
i__5770__auto___66793 = G__66794;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66205 = conformed_args__63810__auto__;
var map__66205__$1 = cljs.core.__destructure_map(map__66205);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66205__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66205__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66205__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq66204){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66204));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66795 = arguments.length;
var i__5770__auto___66796 = (0);
while(true){
if((i__5770__auto___66796 < len__5769__auto___66795)){
args__5775__auto__.push((arguments[i__5770__auto___66796]));

var G__66797 = (i__5770__auto___66796 + (1));
i__5770__auto___66796 = G__66797;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66207 = conformed_args__63810__auto__;
var map__66207__$1 = cljs.core.__destructure_map(map__66207);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66207__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66207__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66207__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq66206){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66206));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66798 = arguments.length;
var i__5770__auto___66799 = (0);
while(true){
if((i__5770__auto___66799 < len__5769__auto___66798)){
args__5775__auto__.push((arguments[i__5770__auto___66799]));

var G__66800 = (i__5770__auto___66799 + (1));
i__5770__auto___66799 = G__66800;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66209 = conformed_args__63810__auto__;
var map__66209__$1 = cljs.core.__destructure_map(map__66209);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66209__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66209__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66209__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq66208){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66208));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66801 = arguments.length;
var i__5770__auto___66802 = (0);
while(true){
if((i__5770__auto___66802 < len__5769__auto___66801)){
args__5775__auto__.push((arguments[i__5770__auto___66802]));

var G__66803 = (i__5770__auto___66802 + (1));
i__5770__auto___66802 = G__66803;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66211 = conformed_args__63810__auto__;
var map__66211__$1 = cljs.core.__destructure_map(map__66211);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66211__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66211__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66211__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq66210){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66210));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66804 = arguments.length;
var i__5770__auto___66805 = (0);
while(true){
if((i__5770__auto___66805 < len__5769__auto___66804)){
args__5775__auto__.push((arguments[i__5770__auto___66805]));

var G__66806 = (i__5770__auto___66805 + (1));
i__5770__auto___66805 = G__66806;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66213 = conformed_args__63810__auto__;
var map__66213__$1 = cljs.core.__destructure_map(map__66213);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66213__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66213__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66213__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq66212){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66212));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66807 = arguments.length;
var i__5770__auto___66808 = (0);
while(true){
if((i__5770__auto___66808 < len__5769__auto___66807)){
args__5775__auto__.push((arguments[i__5770__auto___66808]));

var G__66809 = (i__5770__auto___66808 + (1));
i__5770__auto___66808 = G__66809;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66215 = conformed_args__63810__auto__;
var map__66215__$1 = cljs.core.__destructure_map(map__66215);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66215__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66215__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66215__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq66214){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66214));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66810 = arguments.length;
var i__5770__auto___66811 = (0);
while(true){
if((i__5770__auto___66811 < len__5769__auto___66810)){
args__5775__auto__.push((arguments[i__5770__auto___66811]));

var G__66812 = (i__5770__auto___66811 + (1));
i__5770__auto___66811 = G__66812;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66217 = conformed_args__63810__auto__;
var map__66217__$1 = cljs.core.__destructure_map(map__66217);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66217__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66217__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66217__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq66216){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66216));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66813 = arguments.length;
var i__5770__auto___66814 = (0);
while(true){
if((i__5770__auto___66814 < len__5769__auto___66813)){
args__5775__auto__.push((arguments[i__5770__auto___66814]));

var G__66815 = (i__5770__auto___66814 + (1));
i__5770__auto___66814 = G__66815;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66219 = conformed_args__63810__auto__;
var map__66219__$1 = cljs.core.__destructure_map(map__66219);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66219__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66219__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66219__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq66218){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66218));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66816 = arguments.length;
var i__5770__auto___66817 = (0);
while(true){
if((i__5770__auto___66817 < len__5769__auto___66816)){
args__5775__auto__.push((arguments[i__5770__auto___66817]));

var G__66818 = (i__5770__auto___66817 + (1));
i__5770__auto___66817 = G__66818;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66221 = conformed_args__63810__auto__;
var map__66221__$1 = cljs.core.__destructure_map(map__66221);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66221__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66221__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66221__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq66220){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66220));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66819 = arguments.length;
var i__5770__auto___66820 = (0);
while(true){
if((i__5770__auto___66820 < len__5769__auto___66819)){
args__5775__auto__.push((arguments[i__5770__auto___66820]));

var G__66821 = (i__5770__auto___66820 + (1));
i__5770__auto___66820 = G__66821;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66223 = conformed_args__63810__auto__;
var map__66223__$1 = cljs.core.__destructure_map(map__66223);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66223__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66223__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66223__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq66222){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66222));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66822 = arguments.length;
var i__5770__auto___66823 = (0);
while(true){
if((i__5770__auto___66823 < len__5769__auto___66822)){
args__5775__auto__.push((arguments[i__5770__auto___66823]));

var G__66824 = (i__5770__auto___66823 + (1));
i__5770__auto___66823 = G__66824;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66225 = conformed_args__63810__auto__;
var map__66225__$1 = cljs.core.__destructure_map(map__66225);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66225__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66225__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66225__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq66224){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66224));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66825 = arguments.length;
var i__5770__auto___66826 = (0);
while(true){
if((i__5770__auto___66826 < len__5769__auto___66825)){
args__5775__auto__.push((arguments[i__5770__auto___66826]));

var G__66827 = (i__5770__auto___66826 + (1));
i__5770__auto___66826 = G__66827;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66227 = conformed_args__63810__auto__;
var map__66227__$1 = cljs.core.__destructure_map(map__66227);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66227__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66227__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66227__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq66226){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66226));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66828 = arguments.length;
var i__5770__auto___66829 = (0);
while(true){
if((i__5770__auto___66829 < len__5769__auto___66828)){
args__5775__auto__.push((arguments[i__5770__auto___66829]));

var G__66830 = (i__5770__auto___66829 + (1));
i__5770__auto___66829 = G__66830;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66229 = conformed_args__63810__auto__;
var map__66229__$1 = cljs.core.__destructure_map(map__66229);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66229__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66229__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66229__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq66228){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66228));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66831 = arguments.length;
var i__5770__auto___66832 = (0);
while(true){
if((i__5770__auto___66832 < len__5769__auto___66831)){
args__5775__auto__.push((arguments[i__5770__auto___66832]));

var G__66833 = (i__5770__auto___66832 + (1));
i__5770__auto___66832 = G__66833;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66231 = conformed_args__63810__auto__;
var map__66231__$1 = cljs.core.__destructure_map(map__66231);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66231__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66231__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66231__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq66230){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66230));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66834 = arguments.length;
var i__5770__auto___66835 = (0);
while(true){
if((i__5770__auto___66835 < len__5769__auto___66834)){
args__5775__auto__.push((arguments[i__5770__auto___66835]));

var G__66836 = (i__5770__auto___66835 + (1));
i__5770__auto___66835 = G__66836;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66233 = conformed_args__63810__auto__;
var map__66233__$1 = cljs.core.__destructure_map(map__66233);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66233__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66233__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66233__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq66232){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66232));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66837 = arguments.length;
var i__5770__auto___66838 = (0);
while(true){
if((i__5770__auto___66838 < len__5769__auto___66837)){
args__5775__auto__.push((arguments[i__5770__auto___66838]));

var G__66839 = (i__5770__auto___66838 + (1));
i__5770__auto___66838 = G__66839;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66235 = conformed_args__63810__auto__;
var map__66235__$1 = cljs.core.__destructure_map(map__66235);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66235__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66235__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66235__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq66234){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66234));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66840 = arguments.length;
var i__5770__auto___66841 = (0);
while(true){
if((i__5770__auto___66841 < len__5769__auto___66840)){
args__5775__auto__.push((arguments[i__5770__auto___66841]));

var G__66842 = (i__5770__auto___66841 + (1));
i__5770__auto___66841 = G__66842;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66237 = conformed_args__63810__auto__;
var map__66237__$1 = cljs.core.__destructure_map(map__66237);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66237__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66237__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66237__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq66236){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66236));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66843 = arguments.length;
var i__5770__auto___66844 = (0);
while(true){
if((i__5770__auto___66844 < len__5769__auto___66843)){
args__5775__auto__.push((arguments[i__5770__auto___66844]));

var G__66845 = (i__5770__auto___66844 + (1));
i__5770__auto___66844 = G__66845;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66239 = conformed_args__63810__auto__;
var map__66239__$1 = cljs.core.__destructure_map(map__66239);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66239__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66239__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66239__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq66238){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66238));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66846 = arguments.length;
var i__5770__auto___66847 = (0);
while(true){
if((i__5770__auto___66847 < len__5769__auto___66846)){
args__5775__auto__.push((arguments[i__5770__auto___66847]));

var G__66848 = (i__5770__auto___66847 + (1));
i__5770__auto___66847 = G__66848;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66241 = conformed_args__63810__auto__;
var map__66241__$1 = cljs.core.__destructure_map(map__66241);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66241__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66241__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66241__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq66240){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66240));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66849 = arguments.length;
var i__5770__auto___66850 = (0);
while(true){
if((i__5770__auto___66850 < len__5769__auto___66849)){
args__5775__auto__.push((arguments[i__5770__auto___66850]));

var G__66851 = (i__5770__auto___66850 + (1));
i__5770__auto___66850 = G__66851;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66243 = conformed_args__63810__auto__;
var map__66243__$1 = cljs.core.__destructure_map(map__66243);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66243__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66243__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66243__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq66242){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66242));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66852 = arguments.length;
var i__5770__auto___66853 = (0);
while(true){
if((i__5770__auto___66853 < len__5769__auto___66852)){
args__5775__auto__.push((arguments[i__5770__auto___66853]));

var G__66854 = (i__5770__auto___66853 + (1));
i__5770__auto___66853 = G__66854;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66245 = conformed_args__63810__auto__;
var map__66245__$1 = cljs.core.__destructure_map(map__66245);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66245__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66245__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66245__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq66244){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66244));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66855 = arguments.length;
var i__5770__auto___66856 = (0);
while(true){
if((i__5770__auto___66856 < len__5769__auto___66855)){
args__5775__auto__.push((arguments[i__5770__auto___66856]));

var G__66857 = (i__5770__auto___66856 + (1));
i__5770__auto___66856 = G__66857;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66247 = conformed_args__63810__auto__;
var map__66247__$1 = cljs.core.__destructure_map(map__66247);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66247__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66247__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66247__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq66246){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66246));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66858 = arguments.length;
var i__5770__auto___66859 = (0);
while(true){
if((i__5770__auto___66859 < len__5769__auto___66858)){
args__5775__auto__.push((arguments[i__5770__auto___66859]));

var G__66860 = (i__5770__auto___66859 + (1));
i__5770__auto___66859 = G__66860;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66249 = conformed_args__63810__auto__;
var map__66249__$1 = cljs.core.__destructure_map(map__66249);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66249__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66249__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66249__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq66248){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66248));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66861 = arguments.length;
var i__5770__auto___66862 = (0);
while(true){
if((i__5770__auto___66862 < len__5769__auto___66861)){
args__5775__auto__.push((arguments[i__5770__auto___66862]));

var G__66863 = (i__5770__auto___66862 + (1));
i__5770__auto___66862 = G__66863;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66251 = conformed_args__63810__auto__;
var map__66251__$1 = cljs.core.__destructure_map(map__66251);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66251__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66251__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66251__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq66250){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66250));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66864 = arguments.length;
var i__5770__auto___66865 = (0);
while(true){
if((i__5770__auto___66865 < len__5769__auto___66864)){
args__5775__auto__.push((arguments[i__5770__auto___66865]));

var G__66866 = (i__5770__auto___66865 + (1));
i__5770__auto___66865 = G__66866;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66253 = conformed_args__63810__auto__;
var map__66253__$1 = cljs.core.__destructure_map(map__66253);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66253__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66253__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66253__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq66252){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66252));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66867 = arguments.length;
var i__5770__auto___66868 = (0);
while(true){
if((i__5770__auto___66868 < len__5769__auto___66867)){
args__5775__auto__.push((arguments[i__5770__auto___66868]));

var G__66869 = (i__5770__auto___66868 + (1));
i__5770__auto___66868 = G__66869;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66255 = conformed_args__63810__auto__;
var map__66255__$1 = cljs.core.__destructure_map(map__66255);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66255__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66255__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66255__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq66254){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66254));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66870 = arguments.length;
var i__5770__auto___66871 = (0);
while(true){
if((i__5770__auto___66871 < len__5769__auto___66870)){
args__5775__auto__.push((arguments[i__5770__auto___66871]));

var G__66872 = (i__5770__auto___66871 + (1));
i__5770__auto___66871 = G__66872;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66257 = conformed_args__63810__auto__;
var map__66257__$1 = cljs.core.__destructure_map(map__66257);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66257__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66257__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66257__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq66256){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66256));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66873 = arguments.length;
var i__5770__auto___66874 = (0);
while(true){
if((i__5770__auto___66874 < len__5769__auto___66873)){
args__5775__auto__.push((arguments[i__5770__auto___66874]));

var G__66875 = (i__5770__auto___66874 + (1));
i__5770__auto___66874 = G__66875;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66259 = conformed_args__63810__auto__;
var map__66259__$1 = cljs.core.__destructure_map(map__66259);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66259__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66259__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66259__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq66258){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66258));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66876 = arguments.length;
var i__5770__auto___66877 = (0);
while(true){
if((i__5770__auto___66877 < len__5769__auto___66876)){
args__5775__auto__.push((arguments[i__5770__auto___66877]));

var G__66878 = (i__5770__auto___66877 + (1));
i__5770__auto___66877 = G__66878;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66261 = conformed_args__63810__auto__;
var map__66261__$1 = cljs.core.__destructure_map(map__66261);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66261__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66261__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66261__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq66260){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66260));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66879 = arguments.length;
var i__5770__auto___66880 = (0);
while(true){
if((i__5770__auto___66880 < len__5769__auto___66879)){
args__5775__auto__.push((arguments[i__5770__auto___66880]));

var G__66881 = (i__5770__auto___66880 + (1));
i__5770__auto___66880 = G__66881;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66263 = conformed_args__63810__auto__;
var map__66263__$1 = cljs.core.__destructure_map(map__66263);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66263__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66263__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66263__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq66262){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66262));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66882 = arguments.length;
var i__5770__auto___66883 = (0);
while(true){
if((i__5770__auto___66883 < len__5769__auto___66882)){
args__5775__auto__.push((arguments[i__5770__auto___66883]));

var G__66884 = (i__5770__auto___66883 + (1));
i__5770__auto___66883 = G__66884;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66265 = conformed_args__63810__auto__;
var map__66265__$1 = cljs.core.__destructure_map(map__66265);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66265__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66265__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66265__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq66264){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66264));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66885 = arguments.length;
var i__5770__auto___66886 = (0);
while(true){
if((i__5770__auto___66886 < len__5769__auto___66885)){
args__5775__auto__.push((arguments[i__5770__auto___66886]));

var G__66887 = (i__5770__auto___66886 + (1));
i__5770__auto___66886 = G__66887;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66267 = conformed_args__63810__auto__;
var map__66267__$1 = cljs.core.__destructure_map(map__66267);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66267__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66267__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66267__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq66266){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66266));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66888 = arguments.length;
var i__5770__auto___66889 = (0);
while(true){
if((i__5770__auto___66889 < len__5769__auto___66888)){
args__5775__auto__.push((arguments[i__5770__auto___66889]));

var G__66890 = (i__5770__auto___66889 + (1));
i__5770__auto___66889 = G__66890;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66269 = conformed_args__63810__auto__;
var map__66269__$1 = cljs.core.__destructure_map(map__66269);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66269__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66269__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66269__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq66268){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66268));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66891 = arguments.length;
var i__5770__auto___66892 = (0);
while(true){
if((i__5770__auto___66892 < len__5769__auto___66891)){
args__5775__auto__.push((arguments[i__5770__auto___66892]));

var G__66893 = (i__5770__auto___66892 + (1));
i__5770__auto___66892 = G__66893;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66271 = conformed_args__63810__auto__;
var map__66271__$1 = cljs.core.__destructure_map(map__66271);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66271__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66271__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66271__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq66270){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66270));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66894 = arguments.length;
var i__5770__auto___66895 = (0);
while(true){
if((i__5770__auto___66895 < len__5769__auto___66894)){
args__5775__auto__.push((arguments[i__5770__auto___66895]));

var G__66896 = (i__5770__auto___66895 + (1));
i__5770__auto___66895 = G__66896;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66273 = conformed_args__63810__auto__;
var map__66273__$1 = cljs.core.__destructure_map(map__66273);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66273__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66273__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66273__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq66272){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66272));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66897 = arguments.length;
var i__5770__auto___66898 = (0);
while(true){
if((i__5770__auto___66898 < len__5769__auto___66897)){
args__5775__auto__.push((arguments[i__5770__auto___66898]));

var G__66899 = (i__5770__auto___66898 + (1));
i__5770__auto___66898 = G__66899;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66275 = conformed_args__63810__auto__;
var map__66275__$1 = cljs.core.__destructure_map(map__66275);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66275__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66275__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66275__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq66274){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66274));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66900 = arguments.length;
var i__5770__auto___66901 = (0);
while(true){
if((i__5770__auto___66901 < len__5769__auto___66900)){
args__5775__auto__.push((arguments[i__5770__auto___66901]));

var G__66902 = (i__5770__auto___66901 + (1));
i__5770__auto___66901 = G__66902;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66277 = conformed_args__63810__auto__;
var map__66277__$1 = cljs.core.__destructure_map(map__66277);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66277__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66277__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66277__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq66276){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66276));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66903 = arguments.length;
var i__5770__auto___66904 = (0);
while(true){
if((i__5770__auto___66904 < len__5769__auto___66903)){
args__5775__auto__.push((arguments[i__5770__auto___66904]));

var G__66905 = (i__5770__auto___66904 + (1));
i__5770__auto___66904 = G__66905;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66279 = conformed_args__63810__auto__;
var map__66279__$1 = cljs.core.__destructure_map(map__66279);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66279__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66279__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66279__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq66278){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66278));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66906 = arguments.length;
var i__5770__auto___66907 = (0);
while(true){
if((i__5770__auto___66907 < len__5769__auto___66906)){
args__5775__auto__.push((arguments[i__5770__auto___66907]));

var G__66908 = (i__5770__auto___66907 + (1));
i__5770__auto___66907 = G__66908;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66281 = conformed_args__63810__auto__;
var map__66281__$1 = cljs.core.__destructure_map(map__66281);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66281__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66281__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66281__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq66280){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66280));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66909 = arguments.length;
var i__5770__auto___66910 = (0);
while(true){
if((i__5770__auto___66910 < len__5769__auto___66909)){
args__5775__auto__.push((arguments[i__5770__auto___66910]));

var G__66911 = (i__5770__auto___66910 + (1));
i__5770__auto___66910 = G__66911;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66283 = conformed_args__63810__auto__;
var map__66283__$1 = cljs.core.__destructure_map(map__66283);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66283__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66283__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66283__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq66282){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66282));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66912 = arguments.length;
var i__5770__auto___66913 = (0);
while(true){
if((i__5770__auto___66913 < len__5769__auto___66912)){
args__5775__auto__.push((arguments[i__5770__auto___66913]));

var G__66914 = (i__5770__auto___66913 + (1));
i__5770__auto___66913 = G__66914;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66285 = conformed_args__63810__auto__;
var map__66285__$1 = cljs.core.__destructure_map(map__66285);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66285__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66285__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66285__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq66284){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66284));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66915 = arguments.length;
var i__5770__auto___66916 = (0);
while(true){
if((i__5770__auto___66916 < len__5769__auto___66915)){
args__5775__auto__.push((arguments[i__5770__auto___66916]));

var G__66917 = (i__5770__auto___66916 + (1));
i__5770__auto___66916 = G__66917;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66287 = conformed_args__63810__auto__;
var map__66287__$1 = cljs.core.__destructure_map(map__66287);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66287__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66287__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66287__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq66286){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66286));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66918 = arguments.length;
var i__5770__auto___66919 = (0);
while(true){
if((i__5770__auto___66919 < len__5769__auto___66918)){
args__5775__auto__.push((arguments[i__5770__auto___66919]));

var G__66920 = (i__5770__auto___66919 + (1));
i__5770__auto___66919 = G__66920;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66289 = conformed_args__63810__auto__;
var map__66289__$1 = cljs.core.__destructure_map(map__66289);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66289__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66289__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66289__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq66288){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66288));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66921 = arguments.length;
var i__5770__auto___66922 = (0);
while(true){
if((i__5770__auto___66922 < len__5769__auto___66921)){
args__5775__auto__.push((arguments[i__5770__auto___66922]));

var G__66923 = (i__5770__auto___66922 + (1));
i__5770__auto___66922 = G__66923;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66291 = conformed_args__63810__auto__;
var map__66291__$1 = cljs.core.__destructure_map(map__66291);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66291__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66291__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66291__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq66290){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66290));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66924 = arguments.length;
var i__5770__auto___66925 = (0);
while(true){
if((i__5770__auto___66925 < len__5769__auto___66924)){
args__5775__auto__.push((arguments[i__5770__auto___66925]));

var G__66926 = (i__5770__auto___66925 + (1));
i__5770__auto___66925 = G__66926;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66293 = conformed_args__63810__auto__;
var map__66293__$1 = cljs.core.__destructure_map(map__66293);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66293__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66293__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66293__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq66292){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66292));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66927 = arguments.length;
var i__5770__auto___66928 = (0);
while(true){
if((i__5770__auto___66928 < len__5769__auto___66927)){
args__5775__auto__.push((arguments[i__5770__auto___66928]));

var G__66929 = (i__5770__auto___66928 + (1));
i__5770__auto___66928 = G__66929;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66295 = conformed_args__63810__auto__;
var map__66295__$1 = cljs.core.__destructure_map(map__66295);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66295__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66295__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66295__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq66294){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66294));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66930 = arguments.length;
var i__5770__auto___66931 = (0);
while(true){
if((i__5770__auto___66931 < len__5769__auto___66930)){
args__5775__auto__.push((arguments[i__5770__auto___66931]));

var G__66932 = (i__5770__auto___66931 + (1));
i__5770__auto___66931 = G__66932;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66297 = conformed_args__63810__auto__;
var map__66297__$1 = cljs.core.__destructure_map(map__66297);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66297__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66297__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66297__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq66296){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66296));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66933 = arguments.length;
var i__5770__auto___66934 = (0);
while(true){
if((i__5770__auto___66934 < len__5769__auto___66933)){
args__5775__auto__.push((arguments[i__5770__auto___66934]));

var G__66935 = (i__5770__auto___66934 + (1));
i__5770__auto___66934 = G__66935;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66299 = conformed_args__63810__auto__;
var map__66299__$1 = cljs.core.__destructure_map(map__66299);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66299__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66299__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66299__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq66298){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66298));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66936 = arguments.length;
var i__5770__auto___66937 = (0);
while(true){
if((i__5770__auto___66937 < len__5769__auto___66936)){
args__5775__auto__.push((arguments[i__5770__auto___66937]));

var G__66938 = (i__5770__auto___66937 + (1));
i__5770__auto___66937 = G__66938;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66301 = conformed_args__63810__auto__;
var map__66301__$1 = cljs.core.__destructure_map(map__66301);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66301__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66301__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66301__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq66300){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66300));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66939 = arguments.length;
var i__5770__auto___66940 = (0);
while(true){
if((i__5770__auto___66940 < len__5769__auto___66939)){
args__5775__auto__.push((arguments[i__5770__auto___66940]));

var G__66941 = (i__5770__auto___66940 + (1));
i__5770__auto___66940 = G__66941;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66303 = conformed_args__63810__auto__;
var map__66303__$1 = cljs.core.__destructure_map(map__66303);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66303__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66303__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66303__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq66302){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66302));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66942 = arguments.length;
var i__5770__auto___66943 = (0);
while(true){
if((i__5770__auto___66943 < len__5769__auto___66942)){
args__5775__auto__.push((arguments[i__5770__auto___66943]));

var G__66944 = (i__5770__auto___66943 + (1));
i__5770__auto___66943 = G__66944;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66305 = conformed_args__63810__auto__;
var map__66305__$1 = cljs.core.__destructure_map(map__66305);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66305__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66305__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66305__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq66304){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66304));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66945 = arguments.length;
var i__5770__auto___66946 = (0);
while(true){
if((i__5770__auto___66946 < len__5769__auto___66945)){
args__5775__auto__.push((arguments[i__5770__auto___66946]));

var G__66947 = (i__5770__auto___66946 + (1));
i__5770__auto___66946 = G__66947;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66307 = conformed_args__63810__auto__;
var map__66307__$1 = cljs.core.__destructure_map(map__66307);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66307__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66307__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66307__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq66306){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66306));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66948 = arguments.length;
var i__5770__auto___66949 = (0);
while(true){
if((i__5770__auto___66949 < len__5769__auto___66948)){
args__5775__auto__.push((arguments[i__5770__auto___66949]));

var G__66950 = (i__5770__auto___66949 + (1));
i__5770__auto___66949 = G__66950;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66309 = conformed_args__63810__auto__;
var map__66309__$1 = cljs.core.__destructure_map(map__66309);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66309__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66309__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66309__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq66308){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66308));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66951 = arguments.length;
var i__5770__auto___66952 = (0);
while(true){
if((i__5770__auto___66952 < len__5769__auto___66951)){
args__5775__auto__.push((arguments[i__5770__auto___66952]));

var G__66953 = (i__5770__auto___66952 + (1));
i__5770__auto___66952 = G__66953;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66311 = conformed_args__63810__auto__;
var map__66311__$1 = cljs.core.__destructure_map(map__66311);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66311__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66311__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66311__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq66310){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66310));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66954 = arguments.length;
var i__5770__auto___66955 = (0);
while(true){
if((i__5770__auto___66955 < len__5769__auto___66954)){
args__5775__auto__.push((arguments[i__5770__auto___66955]));

var G__66956 = (i__5770__auto___66955 + (1));
i__5770__auto___66955 = G__66956;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66313 = conformed_args__63810__auto__;
var map__66313__$1 = cljs.core.__destructure_map(map__66313);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66313__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66313__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66313__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq66312){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66312));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66957 = arguments.length;
var i__5770__auto___66958 = (0);
while(true){
if((i__5770__auto___66958 < len__5769__auto___66957)){
args__5775__auto__.push((arguments[i__5770__auto___66958]));

var G__66959 = (i__5770__auto___66958 + (1));
i__5770__auto___66958 = G__66959;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66315 = conformed_args__63810__auto__;
var map__66315__$1 = cljs.core.__destructure_map(map__66315);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66315__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66315__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66315__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq66314){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66314));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66960 = arguments.length;
var i__5770__auto___66961 = (0);
while(true){
if((i__5770__auto___66961 < len__5769__auto___66960)){
args__5775__auto__.push((arguments[i__5770__auto___66961]));

var G__66962 = (i__5770__auto___66961 + (1));
i__5770__auto___66961 = G__66962;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66317 = conformed_args__63810__auto__;
var map__66317__$1 = cljs.core.__destructure_map(map__66317);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66317__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66317__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66317__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq66316){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66316));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66963 = arguments.length;
var i__5770__auto___66964 = (0);
while(true){
if((i__5770__auto___66964 < len__5769__auto___66963)){
args__5775__auto__.push((arguments[i__5770__auto___66964]));

var G__66965 = (i__5770__auto___66964 + (1));
i__5770__auto___66964 = G__66965;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66319 = conformed_args__63810__auto__;
var map__66319__$1 = cljs.core.__destructure_map(map__66319);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66319__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66319__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66319__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq66318){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66318));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66966 = arguments.length;
var i__5770__auto___66967 = (0);
while(true){
if((i__5770__auto___66967 < len__5769__auto___66966)){
args__5775__auto__.push((arguments[i__5770__auto___66967]));

var G__66968 = (i__5770__auto___66967 + (1));
i__5770__auto___66967 = G__66968;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66321 = conformed_args__63810__auto__;
var map__66321__$1 = cljs.core.__destructure_map(map__66321);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66321__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66321__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66321__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq66320){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66320));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66969 = arguments.length;
var i__5770__auto___66970 = (0);
while(true){
if((i__5770__auto___66970 < len__5769__auto___66969)){
args__5775__auto__.push((arguments[i__5770__auto___66970]));

var G__66971 = (i__5770__auto___66970 + (1));
i__5770__auto___66970 = G__66971;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66323 = conformed_args__63810__auto__;
var map__66323__$1 = cljs.core.__destructure_map(map__66323);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66323__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66323__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66323__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq66322){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66322));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66972 = arguments.length;
var i__5770__auto___66973 = (0);
while(true){
if((i__5770__auto___66973 < len__5769__auto___66972)){
args__5775__auto__.push((arguments[i__5770__auto___66973]));

var G__66974 = (i__5770__auto___66973 + (1));
i__5770__auto___66973 = G__66974;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66325 = conformed_args__63810__auto__;
var map__66325__$1 = cljs.core.__destructure_map(map__66325);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66325__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66325__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66325__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq66324){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66324));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66975 = arguments.length;
var i__5770__auto___66976 = (0);
while(true){
if((i__5770__auto___66976 < len__5769__auto___66975)){
args__5775__auto__.push((arguments[i__5770__auto___66976]));

var G__66977 = (i__5770__auto___66976 + (1));
i__5770__auto___66976 = G__66977;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66327 = conformed_args__63810__auto__;
var map__66327__$1 = cljs.core.__destructure_map(map__66327);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66327__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66327__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66327__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq66326){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66326));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66978 = arguments.length;
var i__5770__auto___66979 = (0);
while(true){
if((i__5770__auto___66979 < len__5769__auto___66978)){
args__5775__auto__.push((arguments[i__5770__auto___66979]));

var G__66980 = (i__5770__auto___66979 + (1));
i__5770__auto___66979 = G__66980;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66329 = conformed_args__63810__auto__;
var map__66329__$1 = cljs.core.__destructure_map(map__66329);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66329__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66329__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66329__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq66328){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66328));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66981 = arguments.length;
var i__5770__auto___66982 = (0);
while(true){
if((i__5770__auto___66982 < len__5769__auto___66981)){
args__5775__auto__.push((arguments[i__5770__auto___66982]));

var G__66983 = (i__5770__auto___66982 + (1));
i__5770__auto___66982 = G__66983;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66331 = conformed_args__63810__auto__;
var map__66331__$1 = cljs.core.__destructure_map(map__66331);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66331__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66331__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66331__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq66330){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66330));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66984 = arguments.length;
var i__5770__auto___66985 = (0);
while(true){
if((i__5770__auto___66985 < len__5769__auto___66984)){
args__5775__auto__.push((arguments[i__5770__auto___66985]));

var G__66986 = (i__5770__auto___66985 + (1));
i__5770__auto___66985 = G__66986;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66333 = conformed_args__63810__auto__;
var map__66333__$1 = cljs.core.__destructure_map(map__66333);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66333__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66333__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66333__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq66332){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66332));
}));


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
var args__5775__auto__ = [];
var len__5769__auto___66987 = arguments.length;
var i__5770__auto___66988 = (0);
while(true){
if((i__5770__auto___66988 < len__5769__auto___66987)){
args__5775__auto__.push((arguments[i__5770__auto___66988]));

var G__66989 = (i__5770__auto___66988 + (1));
i__5770__auto___66988 = G__66989;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__63810__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__66335 = conformed_args__63810__auto__;
var map__66335__$1 = cljs.core.__destructure_map(map__66335);
var css__63813__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66335__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__63812__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66335__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__63811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66335__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__63812__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__63812__auto__);
var attrs_value__63814__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__63811__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__63814__auto__], null),children__63812__auto____$1),css__63813__auto__);
}));

(com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq66334){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66334));
}));


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
