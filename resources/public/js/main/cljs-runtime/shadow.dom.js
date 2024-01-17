goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__54053 = coll;
var G__54054 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__54053,G__54054) : shadow.dom.lazy_native_coll_seq.call(null,G__54053,G__54054));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__54073 = arguments.length;
switch (G__54073) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__54101 = arguments.length;
switch (G__54101) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__54106 = arguments.length;
switch (G__54106) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__54112 = arguments.length;
switch (G__54112) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__54127 = arguments.length;
switch (G__54127) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__54131 = document;
var G__54132 = shadow.dom.dom_node(el);
return goog.dom.contains(G__54131,G__54132);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__54135 = shadow.dom.dom_node(parent);
var G__54136 = shadow.dom.dom_node(el);
return goog.dom.contains(G__54135,G__54136);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__54138 = shadow.dom.dom_node(el);
var G__54139 = cls;
return goog.dom.classlist.add(G__54138,G__54139);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__54142 = shadow.dom.dom_node(el);
var G__54143 = cls;
return goog.dom.classlist.remove(G__54142,G__54143);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__54148 = arguments.length;
switch (G__54148) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__54150 = shadow.dom.dom_node(el);
var G__54151 = cls;
return goog.dom.classlist.toggle(G__54150,G__54151);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e54157){if((e54157 instanceof Object)){
var e = e54157;
return console.log("didnt support attachEvent",el,e);
} else {
throw e54157;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__54167 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__54168 = null;
var count__54169 = (0);
var i__54170 = (0);
while(true){
if((i__54170 < count__54169)){
var el = chunk__54168.cljs$core$IIndexed$_nth$arity$2(null,i__54170);
var handler_54822__$1 = ((function (seq__54167,chunk__54168,count__54169,i__54170,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__54167,chunk__54168,count__54169,i__54170,el))
;
var G__54184_54823 = el;
var G__54185_54824 = cljs.core.name(ev);
var G__54186_54825 = handler_54822__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__54184_54823,G__54185_54824,G__54186_54825) : shadow.dom.dom_listen.call(null,G__54184_54823,G__54185_54824,G__54186_54825));


var G__54826 = seq__54167;
var G__54827 = chunk__54168;
var G__54828 = count__54169;
var G__54829 = (i__54170 + (1));
seq__54167 = G__54826;
chunk__54168 = G__54827;
count__54169 = G__54828;
i__54170 = G__54829;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54167);
if(temp__5804__auto__){
var seq__54167__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54167__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54167__$1);
var G__54830 = cljs.core.chunk_rest(seq__54167__$1);
var G__54831 = c__4550__auto__;
var G__54832 = cljs.core.count(c__4550__auto__);
var G__54833 = (0);
seq__54167 = G__54830;
chunk__54168 = G__54831;
count__54169 = G__54832;
i__54170 = G__54833;
continue;
} else {
var el = cljs.core.first(seq__54167__$1);
var handler_54834__$1 = ((function (seq__54167,chunk__54168,count__54169,i__54170,el,seq__54167__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__54167,chunk__54168,count__54169,i__54170,el,seq__54167__$1,temp__5804__auto__))
;
var G__54190_54835 = el;
var G__54191_54836 = cljs.core.name(ev);
var G__54192_54837 = handler_54834__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__54190_54835,G__54191_54836,G__54192_54837) : shadow.dom.dom_listen.call(null,G__54190_54835,G__54191_54836,G__54192_54837));


var G__54838 = cljs.core.next(seq__54167__$1);
var G__54839 = null;
var G__54840 = (0);
var G__54841 = (0);
seq__54167 = G__54838;
chunk__54168 = G__54839;
count__54169 = G__54840;
i__54170 = G__54841;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__54196 = arguments.length;
switch (G__54196) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__54205 = shadow.dom.dom_node(el);
var G__54206 = cljs.core.name(ev);
var G__54207 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__54205,G__54206,G__54207) : shadow.dom.dom_listen.call(null,G__54205,G__54206,G__54207));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__54215 = shadow.dom.dom_node(el);
var G__54216 = cljs.core.name(ev);
var G__54217 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__54215,G__54216,G__54217) : shadow.dom.dom_listen_remove.call(null,G__54215,G__54216,G__54217));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__54220 = cljs.core.seq(events);
var chunk__54221 = null;
var count__54222 = (0);
var i__54223 = (0);
while(true){
if((i__54223 < count__54222)){
var vec__54236 = chunk__54221.cljs$core$IIndexed$_nth$arity$2(null,i__54223);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54236,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54236,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__54843 = seq__54220;
var G__54844 = chunk__54221;
var G__54845 = count__54222;
var G__54846 = (i__54223 + (1));
seq__54220 = G__54843;
chunk__54221 = G__54844;
count__54222 = G__54845;
i__54223 = G__54846;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54220);
if(temp__5804__auto__){
var seq__54220__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54220__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54220__$1);
var G__54847 = cljs.core.chunk_rest(seq__54220__$1);
var G__54848 = c__4550__auto__;
var G__54849 = cljs.core.count(c__4550__auto__);
var G__54850 = (0);
seq__54220 = G__54847;
chunk__54221 = G__54848;
count__54222 = G__54849;
i__54223 = G__54850;
continue;
} else {
var vec__54240 = cljs.core.first(seq__54220__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54240,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54240,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__54851 = cljs.core.next(seq__54220__$1);
var G__54852 = null;
var G__54853 = (0);
var G__54854 = (0);
seq__54220 = G__54851;
chunk__54221 = G__54852;
count__54222 = G__54853;
i__54223 = G__54854;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__54247 = cljs.core.seq(styles);
var chunk__54248 = null;
var count__54249 = (0);
var i__54250 = (0);
while(true){
if((i__54250 < count__54249)){
var vec__54267 = chunk__54248.cljs$core$IIndexed$_nth$arity$2(null,i__54250);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54267,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54267,(1),null);
var G__54271_54855 = dom;
var G__54272_54856 = cljs.core.name(k);
var G__54273_54857 = (((v == null))?"":v);
goog.style.setStyle(G__54271_54855,G__54272_54856,G__54273_54857);


var G__54858 = seq__54247;
var G__54859 = chunk__54248;
var G__54860 = count__54249;
var G__54861 = (i__54250 + (1));
seq__54247 = G__54858;
chunk__54248 = G__54859;
count__54249 = G__54860;
i__54250 = G__54861;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54247);
if(temp__5804__auto__){
var seq__54247__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54247__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54247__$1);
var G__54862 = cljs.core.chunk_rest(seq__54247__$1);
var G__54863 = c__4550__auto__;
var G__54864 = cljs.core.count(c__4550__auto__);
var G__54865 = (0);
seq__54247 = G__54862;
chunk__54248 = G__54863;
count__54249 = G__54864;
i__54250 = G__54865;
continue;
} else {
var vec__54274 = cljs.core.first(seq__54247__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54274,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54274,(1),null);
var G__54277_54866 = dom;
var G__54278_54867 = cljs.core.name(k);
var G__54279_54868 = (((v == null))?"":v);
goog.style.setStyle(G__54277_54866,G__54278_54867,G__54279_54868);


var G__54869 = cljs.core.next(seq__54247__$1);
var G__54870 = null;
var G__54871 = (0);
var G__54872 = (0);
seq__54247 = G__54869;
chunk__54248 = G__54870;
count__54249 = G__54871;
i__54250 = G__54872;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__54280_54873 = key;
var G__54280_54874__$1 = (((G__54280_54873 instanceof cljs.core.Keyword))?G__54280_54873.fqn:null);
switch (G__54280_54874__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_54876 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_54876,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_54876,"aria-");
}
})())){
el.setAttribute(ks_54876,value);
} else {
(el[ks_54876] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__54284 = shadow.dom.dom_node(el);
var G__54285 = cls;
return goog.dom.classlist.contains(G__54284,G__54285);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__54296){
var map__54297 = p__54296;
var map__54297__$1 = (((((!((map__54297 == null))))?(((((map__54297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54297):map__54297);
var props = map__54297__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54297__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__54299 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54299,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54299,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54299,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__54304 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__54304,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__54304;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__54306 = arguments.length;
switch (G__54306) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__54314){
var vec__54315 = p__54314;
var seq__54316 = cljs.core.seq(vec__54315);
var first__54317 = cljs.core.first(seq__54316);
var seq__54316__$1 = cljs.core.next(seq__54316);
var nn = first__54317;
var first__54317__$1 = cljs.core.first(seq__54316__$1);
var seq__54316__$2 = cljs.core.next(seq__54316__$1);
var np = first__54317__$1;
var nc = seq__54316__$2;
var node = vec__54315;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54318 = nn;
var G__54319 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__54318,G__54319) : create_fn.call(null,G__54318,G__54319));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54320 = nn;
var G__54321 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__54320,G__54321) : create_fn.call(null,G__54320,G__54321));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__54328 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54328,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54328,(1),null);
var seq__54331_54884 = cljs.core.seq(node_children);
var chunk__54332_54885 = null;
var count__54333_54886 = (0);
var i__54334_54887 = (0);
while(true){
if((i__54334_54887 < count__54333_54886)){
var child_struct_54888 = chunk__54332_54885.cljs$core$IIndexed$_nth$arity$2(null,i__54334_54887);
var children_54889 = shadow.dom.dom_node(child_struct_54888);
if(cljs.core.seq_QMARK_(children_54889)){
var seq__54389_54890 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_54889));
var chunk__54391_54891 = null;
var count__54392_54892 = (0);
var i__54393_54893 = (0);
while(true){
if((i__54393_54893 < count__54392_54892)){
var child_54894 = chunk__54391_54891.cljs$core$IIndexed$_nth$arity$2(null,i__54393_54893);
if(cljs.core.truth_(child_54894)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_54894);


var G__54895 = seq__54389_54890;
var G__54896 = chunk__54391_54891;
var G__54897 = count__54392_54892;
var G__54898 = (i__54393_54893 + (1));
seq__54389_54890 = G__54895;
chunk__54391_54891 = G__54896;
count__54392_54892 = G__54897;
i__54393_54893 = G__54898;
continue;
} else {
var G__54899 = seq__54389_54890;
var G__54900 = chunk__54391_54891;
var G__54901 = count__54392_54892;
var G__54902 = (i__54393_54893 + (1));
seq__54389_54890 = G__54899;
chunk__54391_54891 = G__54900;
count__54392_54892 = G__54901;
i__54393_54893 = G__54902;
continue;
}
} else {
var temp__5804__auto___54903 = cljs.core.seq(seq__54389_54890);
if(temp__5804__auto___54903){
var seq__54389_54904__$1 = temp__5804__auto___54903;
if(cljs.core.chunked_seq_QMARK_(seq__54389_54904__$1)){
var c__4550__auto___54905 = cljs.core.chunk_first(seq__54389_54904__$1);
var G__54906 = cljs.core.chunk_rest(seq__54389_54904__$1);
var G__54907 = c__4550__auto___54905;
var G__54908 = cljs.core.count(c__4550__auto___54905);
var G__54909 = (0);
seq__54389_54890 = G__54906;
chunk__54391_54891 = G__54907;
count__54392_54892 = G__54908;
i__54393_54893 = G__54909;
continue;
} else {
var child_54911 = cljs.core.first(seq__54389_54904__$1);
if(cljs.core.truth_(child_54911)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_54911);


var G__54912 = cljs.core.next(seq__54389_54904__$1);
var G__54913 = null;
var G__54914 = (0);
var G__54915 = (0);
seq__54389_54890 = G__54912;
chunk__54391_54891 = G__54913;
count__54392_54892 = G__54914;
i__54393_54893 = G__54915;
continue;
} else {
var G__54916 = cljs.core.next(seq__54389_54904__$1);
var G__54917 = null;
var G__54918 = (0);
var G__54919 = (0);
seq__54389_54890 = G__54916;
chunk__54391_54891 = G__54917;
count__54392_54892 = G__54918;
i__54393_54893 = G__54919;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_54889);
}


var G__54920 = seq__54331_54884;
var G__54921 = chunk__54332_54885;
var G__54922 = count__54333_54886;
var G__54923 = (i__54334_54887 + (1));
seq__54331_54884 = G__54920;
chunk__54332_54885 = G__54921;
count__54333_54886 = G__54922;
i__54334_54887 = G__54923;
continue;
} else {
var temp__5804__auto___54925 = cljs.core.seq(seq__54331_54884);
if(temp__5804__auto___54925){
var seq__54331_54926__$1 = temp__5804__auto___54925;
if(cljs.core.chunked_seq_QMARK_(seq__54331_54926__$1)){
var c__4550__auto___54928 = cljs.core.chunk_first(seq__54331_54926__$1);
var G__54929 = cljs.core.chunk_rest(seq__54331_54926__$1);
var G__54930 = c__4550__auto___54928;
var G__54931 = cljs.core.count(c__4550__auto___54928);
var G__54932 = (0);
seq__54331_54884 = G__54929;
chunk__54332_54885 = G__54930;
count__54333_54886 = G__54931;
i__54334_54887 = G__54932;
continue;
} else {
var child_struct_54933 = cljs.core.first(seq__54331_54926__$1);
var children_54934 = shadow.dom.dom_node(child_struct_54933);
if(cljs.core.seq_QMARK_(children_54934)){
var seq__54408_54935 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_54934));
var chunk__54410_54936 = null;
var count__54411_54937 = (0);
var i__54412_54938 = (0);
while(true){
if((i__54412_54938 < count__54411_54937)){
var child_54939 = chunk__54410_54936.cljs$core$IIndexed$_nth$arity$2(null,i__54412_54938);
if(cljs.core.truth_(child_54939)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_54939);


var G__54940 = seq__54408_54935;
var G__54941 = chunk__54410_54936;
var G__54942 = count__54411_54937;
var G__54943 = (i__54412_54938 + (1));
seq__54408_54935 = G__54940;
chunk__54410_54936 = G__54941;
count__54411_54937 = G__54942;
i__54412_54938 = G__54943;
continue;
} else {
var G__54945 = seq__54408_54935;
var G__54946 = chunk__54410_54936;
var G__54947 = count__54411_54937;
var G__54948 = (i__54412_54938 + (1));
seq__54408_54935 = G__54945;
chunk__54410_54936 = G__54946;
count__54411_54937 = G__54947;
i__54412_54938 = G__54948;
continue;
}
} else {
var temp__5804__auto___54949__$1 = cljs.core.seq(seq__54408_54935);
if(temp__5804__auto___54949__$1){
var seq__54408_54950__$1 = temp__5804__auto___54949__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54408_54950__$1)){
var c__4550__auto___54951 = cljs.core.chunk_first(seq__54408_54950__$1);
var G__54952 = cljs.core.chunk_rest(seq__54408_54950__$1);
var G__54953 = c__4550__auto___54951;
var G__54954 = cljs.core.count(c__4550__auto___54951);
var G__54955 = (0);
seq__54408_54935 = G__54952;
chunk__54410_54936 = G__54953;
count__54411_54937 = G__54954;
i__54412_54938 = G__54955;
continue;
} else {
var child_54956 = cljs.core.first(seq__54408_54950__$1);
if(cljs.core.truth_(child_54956)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_54956);


var G__54957 = cljs.core.next(seq__54408_54950__$1);
var G__54958 = null;
var G__54959 = (0);
var G__54960 = (0);
seq__54408_54935 = G__54957;
chunk__54410_54936 = G__54958;
count__54411_54937 = G__54959;
i__54412_54938 = G__54960;
continue;
} else {
var G__54962 = cljs.core.next(seq__54408_54950__$1);
var G__54963 = null;
var G__54964 = (0);
var G__54965 = (0);
seq__54408_54935 = G__54962;
chunk__54410_54936 = G__54963;
count__54411_54937 = G__54964;
i__54412_54938 = G__54965;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_54934);
}


var G__54969 = cljs.core.next(seq__54331_54926__$1);
var G__54970 = null;
var G__54971 = (0);
var G__54972 = (0);
seq__54331_54884 = G__54969;
chunk__54332_54885 = G__54970;
count__54333_54886 = G__54971;
i__54334_54887 = G__54972;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__54422 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__54422);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__54424 = cljs.core.seq(node);
var chunk__54425 = null;
var count__54426 = (0);
var i__54427 = (0);
while(true){
if((i__54427 < count__54426)){
var n = chunk__54425.cljs$core$IIndexed$_nth$arity$2(null,i__54427);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__54978 = seq__54424;
var G__54979 = chunk__54425;
var G__54980 = count__54426;
var G__54981 = (i__54427 + (1));
seq__54424 = G__54978;
chunk__54425 = G__54979;
count__54426 = G__54980;
i__54427 = G__54981;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54424);
if(temp__5804__auto__){
var seq__54424__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54424__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54424__$1);
var G__54985 = cljs.core.chunk_rest(seq__54424__$1);
var G__54986 = c__4550__auto__;
var G__54987 = cljs.core.count(c__4550__auto__);
var G__54988 = (0);
seq__54424 = G__54985;
chunk__54425 = G__54986;
count__54426 = G__54987;
i__54427 = G__54988;
continue;
} else {
var n = cljs.core.first(seq__54424__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__54989 = cljs.core.next(seq__54424__$1);
var G__54990 = null;
var G__54991 = (0);
var G__54992 = (0);
seq__54424 = G__54989;
chunk__54425 = G__54990;
count__54426 = G__54991;
i__54427 = G__54992;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__54429 = shadow.dom.dom_node(new$);
var G__54430 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__54429,G__54430);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__54432 = arguments.length;
switch (G__54432) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__54435 = arguments.length;
switch (G__54435) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__54441 = arguments.length;
switch (G__54441) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55006 = arguments.length;
var i__4731__auto___55007 = (0);
while(true){
if((i__4731__auto___55007 < len__4730__auto___55006)){
args__4736__auto__.push((arguments[i__4731__auto___55007]));

var G__55008 = (i__4731__auto___55007 + (1));
i__4731__auto___55007 = G__55008;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__54449_55009 = cljs.core.seq(nodes);
var chunk__54450_55010 = null;
var count__54451_55011 = (0);
var i__54452_55012 = (0);
while(true){
if((i__54452_55012 < count__54451_55011)){
var node_55013 = chunk__54450_55010.cljs$core$IIndexed$_nth$arity$2(null,i__54452_55012);
fragment.appendChild(shadow.dom._to_dom(node_55013));


var G__55014 = seq__54449_55009;
var G__55015 = chunk__54450_55010;
var G__55016 = count__54451_55011;
var G__55017 = (i__54452_55012 + (1));
seq__54449_55009 = G__55014;
chunk__54450_55010 = G__55015;
count__54451_55011 = G__55016;
i__54452_55012 = G__55017;
continue;
} else {
var temp__5804__auto___55018 = cljs.core.seq(seq__54449_55009);
if(temp__5804__auto___55018){
var seq__54449_55019__$1 = temp__5804__auto___55018;
if(cljs.core.chunked_seq_QMARK_(seq__54449_55019__$1)){
var c__4550__auto___55020 = cljs.core.chunk_first(seq__54449_55019__$1);
var G__55021 = cljs.core.chunk_rest(seq__54449_55019__$1);
var G__55022 = c__4550__auto___55020;
var G__55023 = cljs.core.count(c__4550__auto___55020);
var G__55024 = (0);
seq__54449_55009 = G__55021;
chunk__54450_55010 = G__55022;
count__54451_55011 = G__55023;
i__54452_55012 = G__55024;
continue;
} else {
var node_55025 = cljs.core.first(seq__54449_55019__$1);
fragment.appendChild(shadow.dom._to_dom(node_55025));


var G__55026 = cljs.core.next(seq__54449_55019__$1);
var G__55027 = null;
var G__55028 = (0);
var G__55029 = (0);
seq__54449_55009 = G__55026;
chunk__54450_55010 = G__55027;
count__54451_55011 = G__55028;
i__54452_55012 = G__55029;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq54446){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54446));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__54461_55035 = cljs.core.seq(scripts);
var chunk__54462_55036 = null;
var count__54463_55037 = (0);
var i__54464_55038 = (0);
while(true){
if((i__54464_55038 < count__54463_55037)){
var vec__54475_55039 = chunk__54462_55036.cljs$core$IIndexed$_nth$arity$2(null,i__54464_55038);
var script_tag_55040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54475_55039,(0),null);
var script_body_55041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54475_55039,(1),null);
eval(script_body_55041);


var G__55042 = seq__54461_55035;
var G__55043 = chunk__54462_55036;
var G__55044 = count__54463_55037;
var G__55045 = (i__54464_55038 + (1));
seq__54461_55035 = G__55042;
chunk__54462_55036 = G__55043;
count__54463_55037 = G__55044;
i__54464_55038 = G__55045;
continue;
} else {
var temp__5804__auto___55046 = cljs.core.seq(seq__54461_55035);
if(temp__5804__auto___55046){
var seq__54461_55047__$1 = temp__5804__auto___55046;
if(cljs.core.chunked_seq_QMARK_(seq__54461_55047__$1)){
var c__4550__auto___55048 = cljs.core.chunk_first(seq__54461_55047__$1);
var G__55049 = cljs.core.chunk_rest(seq__54461_55047__$1);
var G__55050 = c__4550__auto___55048;
var G__55051 = cljs.core.count(c__4550__auto___55048);
var G__55052 = (0);
seq__54461_55035 = G__55049;
chunk__54462_55036 = G__55050;
count__54463_55037 = G__55051;
i__54464_55038 = G__55052;
continue;
} else {
var vec__54478_55053 = cljs.core.first(seq__54461_55047__$1);
var script_tag_55054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54478_55053,(0),null);
var script_body_55055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54478_55053,(1),null);
eval(script_body_55055);


var G__55057 = cljs.core.next(seq__54461_55047__$1);
var G__55058 = null;
var G__55059 = (0);
var G__55060 = (0);
seq__54461_55035 = G__55057;
chunk__54462_55036 = G__55058;
count__54463_55037 = G__55059;
i__54464_55038 = G__55060;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__54483){
var vec__54484 = p__54483;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54484,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54484,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__54490 = shadow.dom.dom_node(el);
var G__54491 = cls;
return goog.dom.getAncestorByClass(G__54490,G__54491);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__54497 = arguments.length;
switch (G__54497) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__54504 = shadow.dom.dom_node(el);
var G__54505 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__54504,G__54505);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__54511 = shadow.dom.dom_node(el);
var G__54512 = cljs.core.name(tag);
var G__54513 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__54511,G__54512,G__54513);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__54517 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__54517);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__54523 = shadow.dom.dom_node(dom);
var G__54524 = value;
return goog.dom.forms.setValue(G__54523,G__54524);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__54531 = cljs.core.seq(style_keys);
var chunk__54532 = null;
var count__54533 = (0);
var i__54534 = (0);
while(true){
if((i__54534 < count__54533)){
var it = chunk__54532.cljs$core$IIndexed$_nth$arity$2(null,i__54534);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__55069 = seq__54531;
var G__55070 = chunk__54532;
var G__55071 = count__54533;
var G__55072 = (i__54534 + (1));
seq__54531 = G__55069;
chunk__54532 = G__55070;
count__54533 = G__55071;
i__54534 = G__55072;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54531);
if(temp__5804__auto__){
var seq__54531__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54531__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54531__$1);
var G__55073 = cljs.core.chunk_rest(seq__54531__$1);
var G__55074 = c__4550__auto__;
var G__55075 = cljs.core.count(c__4550__auto__);
var G__55076 = (0);
seq__54531 = G__55073;
chunk__54532 = G__55074;
count__54533 = G__55075;
i__54534 = G__55076;
continue;
} else {
var it = cljs.core.first(seq__54531__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__55077 = cljs.core.next(seq__54531__$1);
var G__55078 = null;
var G__55079 = (0);
var G__55080 = (0);
seq__54531 = G__55077;
chunk__54532 = G__55078;
count__54533 = G__55079;
i__54534 = G__55080;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k54539,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__54545 = k54539;
var G__54545__$1 = (((G__54545 instanceof cljs.core.Keyword))?G__54545.fqn:null);
switch (G__54545__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54539,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__54546){
var vec__54547 = p__54546;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54547,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54547,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54538){
var self__ = this;
var G__54538__$1 = this;
return (new cljs.core.RecordIter((0),G__54538__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__54558 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__54558(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54540,other54541){
var self__ = this;
var this54540__$1 = this;
return (((!((other54541 == null)))) && ((this54540__$1.constructor === other54541.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54540__$1.x,other54541.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54540__$1.y,other54541.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54540__$1.__extmap,other54541.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__54538){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__54563 = cljs.core.keyword_identical_QMARK_;
var expr__54564 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__54566 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__54567 = expr__54564;
return (pred__54563.cljs$core$IFn$_invoke$arity$2 ? pred__54563.cljs$core$IFn$_invoke$arity$2(G__54566,G__54567) : pred__54563.call(null,G__54566,G__54567));
})())){
return (new shadow.dom.Coordinate(G__54538,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__54568 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__54569 = expr__54564;
return (pred__54563.cljs$core$IFn$_invoke$arity$2 ? pred__54563.cljs$core$IFn$_invoke$arity$2(G__54568,G__54569) : pred__54563.call(null,G__54568,G__54569));
})())){
return (new shadow.dom.Coordinate(self__.x,G__54538,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__54538),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__54538){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__54538,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__54542){
var extmap__4424__auto__ = (function (){var G__54575 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54542,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__54542)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__54575);
} else {
return G__54575;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__54542),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__54542),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__54578 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__54578);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__54580 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__54580);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__54582 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__54582);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k54584,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__54592 = k54584;
var G__54592__$1 = (((G__54592 instanceof cljs.core.Keyword))?G__54592.fqn:null);
switch (G__54592__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54584,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__54595){
var vec__54596 = p__54595;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54596,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54596,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54583){
var self__ = this;
var G__54583__$1 = this;
return (new cljs.core.RecordIter((0),G__54583__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__54602 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__54602(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54585,other54586){
var self__ = this;
var this54585__$1 = this;
return (((!((other54586 == null)))) && ((this54585__$1.constructor === other54586.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54585__$1.w,other54586.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54585__$1.h,other54586.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54585__$1.__extmap,other54586.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__54583){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__54606 = cljs.core.keyword_identical_QMARK_;
var expr__54607 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__54609 = new cljs.core.Keyword(null,"w","w",354169001);
var G__54610 = expr__54607;
return (pred__54606.cljs$core$IFn$_invoke$arity$2 ? pred__54606.cljs$core$IFn$_invoke$arity$2(G__54609,G__54610) : pred__54606.call(null,G__54609,G__54610));
})())){
return (new shadow.dom.Size(G__54583,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__54611 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__54612 = expr__54607;
return (pred__54606.cljs$core$IFn$_invoke$arity$2 ? pred__54606.cljs$core$IFn$_invoke$arity$2(G__54611,G__54612) : pred__54606.call(null,G__54611,G__54612));
})())){
return (new shadow.dom.Size(self__.w,G__54583,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__54583),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__54583){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__54583,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__54589){
var extmap__4424__auto__ = (function (){var G__54619 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54589,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__54589)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__54619);
} else {
return G__54619;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__54589),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__54589),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__54624 = shadow.dom.dom_node(el);
return goog.style.getSize(G__54624);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__55128 = (i + (1));
var G__55129 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__55128;
ret = G__55129;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54633){
var vec__54634 = p__54633;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54634,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54634,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__54638 = arguments.length;
switch (G__54638) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__54639_55137 = new_node;
var G__54640_55138 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__54639_55137,G__54640_55138);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__54641_55139 = new_node;
var G__54642_55140 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__54641_55139,G__54642_55140);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__55147 = ps;
var G__55148 = (i + (1));
el__$1 = G__55147;
i = G__55148;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__54643 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__54643);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__54646 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__54646);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__54648 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__54648);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__54652 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54652,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54652,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54652,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__54657_55158 = cljs.core.seq(props);
var chunk__54658_55159 = null;
var count__54659_55160 = (0);
var i__54660_55161 = (0);
while(true){
if((i__54660_55161 < count__54659_55160)){
var vec__54671_55162 = chunk__54658_55159.cljs$core$IIndexed$_nth$arity$2(null,i__54660_55161);
var k_55163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54671_55162,(0),null);
var v_55164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54671_55162,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_55163);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_55163),v_55164);


var G__55166 = seq__54657_55158;
var G__55167 = chunk__54658_55159;
var G__55168 = count__54659_55160;
var G__55169 = (i__54660_55161 + (1));
seq__54657_55158 = G__55166;
chunk__54658_55159 = G__55167;
count__54659_55160 = G__55168;
i__54660_55161 = G__55169;
continue;
} else {
var temp__5804__auto___55170 = cljs.core.seq(seq__54657_55158);
if(temp__5804__auto___55170){
var seq__54657_55171__$1 = temp__5804__auto___55170;
if(cljs.core.chunked_seq_QMARK_(seq__54657_55171__$1)){
var c__4550__auto___55172 = cljs.core.chunk_first(seq__54657_55171__$1);
var G__55173 = cljs.core.chunk_rest(seq__54657_55171__$1);
var G__55174 = c__4550__auto___55172;
var G__55175 = cljs.core.count(c__4550__auto___55172);
var G__55176 = (0);
seq__54657_55158 = G__55173;
chunk__54658_55159 = G__55174;
count__54659_55160 = G__55175;
i__54660_55161 = G__55176;
continue;
} else {
var vec__54676_55178 = cljs.core.first(seq__54657_55171__$1);
var k_55179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54676_55178,(0),null);
var v_55180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54676_55178,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_55179);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_55179),v_55180);


var G__55181 = cljs.core.next(seq__54657_55171__$1);
var G__55182 = null;
var G__55183 = (0);
var G__55184 = (0);
seq__54657_55158 = G__55181;
chunk__54658_55159 = G__55182;
count__54659_55160 = G__55183;
i__54660_55161 = G__55184;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__54682 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54682,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54682,(1),null);
var seq__54686_55187 = cljs.core.seq(node_children);
var chunk__54688_55188 = null;
var count__54689_55189 = (0);
var i__54690_55190 = (0);
while(true){
if((i__54690_55190 < count__54689_55189)){
var child_struct_55192 = chunk__54688_55188.cljs$core$IIndexed$_nth$arity$2(null,i__54690_55190);
if((!((child_struct_55192 == null)))){
if(typeof child_struct_55192 === 'string'){
var text_55193 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_55193),child_struct_55192].join(''));
} else {
var children_55194 = shadow.dom.svg_node(child_struct_55192);
if(cljs.core.seq_QMARK_(children_55194)){
var seq__54720_55195 = cljs.core.seq(children_55194);
var chunk__54722_55196 = null;
var count__54723_55197 = (0);
var i__54724_55198 = (0);
while(true){
if((i__54724_55198 < count__54723_55197)){
var child_55199 = chunk__54722_55196.cljs$core$IIndexed$_nth$arity$2(null,i__54724_55198);
if(cljs.core.truth_(child_55199)){
node.appendChild(child_55199);


var G__55201 = seq__54720_55195;
var G__55202 = chunk__54722_55196;
var G__55203 = count__54723_55197;
var G__55204 = (i__54724_55198 + (1));
seq__54720_55195 = G__55201;
chunk__54722_55196 = G__55202;
count__54723_55197 = G__55203;
i__54724_55198 = G__55204;
continue;
} else {
var G__55205 = seq__54720_55195;
var G__55206 = chunk__54722_55196;
var G__55207 = count__54723_55197;
var G__55208 = (i__54724_55198 + (1));
seq__54720_55195 = G__55205;
chunk__54722_55196 = G__55206;
count__54723_55197 = G__55207;
i__54724_55198 = G__55208;
continue;
}
} else {
var temp__5804__auto___55210 = cljs.core.seq(seq__54720_55195);
if(temp__5804__auto___55210){
var seq__54720_55211__$1 = temp__5804__auto___55210;
if(cljs.core.chunked_seq_QMARK_(seq__54720_55211__$1)){
var c__4550__auto___55212 = cljs.core.chunk_first(seq__54720_55211__$1);
var G__55213 = cljs.core.chunk_rest(seq__54720_55211__$1);
var G__55214 = c__4550__auto___55212;
var G__55215 = cljs.core.count(c__4550__auto___55212);
var G__55216 = (0);
seq__54720_55195 = G__55213;
chunk__54722_55196 = G__55214;
count__54723_55197 = G__55215;
i__54724_55198 = G__55216;
continue;
} else {
var child_55217 = cljs.core.first(seq__54720_55211__$1);
if(cljs.core.truth_(child_55217)){
node.appendChild(child_55217);


var G__55218 = cljs.core.next(seq__54720_55211__$1);
var G__55219 = null;
var G__55220 = (0);
var G__55221 = (0);
seq__54720_55195 = G__55218;
chunk__54722_55196 = G__55219;
count__54723_55197 = G__55220;
i__54724_55198 = G__55221;
continue;
} else {
var G__55222 = cljs.core.next(seq__54720_55211__$1);
var G__55223 = null;
var G__55224 = (0);
var G__55225 = (0);
seq__54720_55195 = G__55222;
chunk__54722_55196 = G__55223;
count__54723_55197 = G__55224;
i__54724_55198 = G__55225;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_55194);
}
}


var G__55231 = seq__54686_55187;
var G__55232 = chunk__54688_55188;
var G__55233 = count__54689_55189;
var G__55234 = (i__54690_55190 + (1));
seq__54686_55187 = G__55231;
chunk__54688_55188 = G__55232;
count__54689_55189 = G__55233;
i__54690_55190 = G__55234;
continue;
} else {
var G__55235 = seq__54686_55187;
var G__55236 = chunk__54688_55188;
var G__55237 = count__54689_55189;
var G__55238 = (i__54690_55190 + (1));
seq__54686_55187 = G__55235;
chunk__54688_55188 = G__55236;
count__54689_55189 = G__55237;
i__54690_55190 = G__55238;
continue;
}
} else {
var temp__5804__auto___55239 = cljs.core.seq(seq__54686_55187);
if(temp__5804__auto___55239){
var seq__54686_55241__$1 = temp__5804__auto___55239;
if(cljs.core.chunked_seq_QMARK_(seq__54686_55241__$1)){
var c__4550__auto___55242 = cljs.core.chunk_first(seq__54686_55241__$1);
var G__55243 = cljs.core.chunk_rest(seq__54686_55241__$1);
var G__55244 = c__4550__auto___55242;
var G__55245 = cljs.core.count(c__4550__auto___55242);
var G__55246 = (0);
seq__54686_55187 = G__55243;
chunk__54688_55188 = G__55244;
count__54689_55189 = G__55245;
i__54690_55190 = G__55246;
continue;
} else {
var child_struct_55247 = cljs.core.first(seq__54686_55241__$1);
if((!((child_struct_55247 == null)))){
if(typeof child_struct_55247 === 'string'){
var text_55248 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_55248),child_struct_55247].join(''));
} else {
var children_55249 = shadow.dom.svg_node(child_struct_55247);
if(cljs.core.seq_QMARK_(children_55249)){
var seq__54735_55250 = cljs.core.seq(children_55249);
var chunk__54737_55251 = null;
var count__54738_55252 = (0);
var i__54739_55253 = (0);
while(true){
if((i__54739_55253 < count__54738_55252)){
var child_55255 = chunk__54737_55251.cljs$core$IIndexed$_nth$arity$2(null,i__54739_55253);
if(cljs.core.truth_(child_55255)){
node.appendChild(child_55255);


var G__55257 = seq__54735_55250;
var G__55258 = chunk__54737_55251;
var G__55259 = count__54738_55252;
var G__55260 = (i__54739_55253 + (1));
seq__54735_55250 = G__55257;
chunk__54737_55251 = G__55258;
count__54738_55252 = G__55259;
i__54739_55253 = G__55260;
continue;
} else {
var G__55262 = seq__54735_55250;
var G__55263 = chunk__54737_55251;
var G__55264 = count__54738_55252;
var G__55265 = (i__54739_55253 + (1));
seq__54735_55250 = G__55262;
chunk__54737_55251 = G__55263;
count__54738_55252 = G__55264;
i__54739_55253 = G__55265;
continue;
}
} else {
var temp__5804__auto___55267__$1 = cljs.core.seq(seq__54735_55250);
if(temp__5804__auto___55267__$1){
var seq__54735_55268__$1 = temp__5804__auto___55267__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54735_55268__$1)){
var c__4550__auto___55269 = cljs.core.chunk_first(seq__54735_55268__$1);
var G__55270 = cljs.core.chunk_rest(seq__54735_55268__$1);
var G__55271 = c__4550__auto___55269;
var G__55272 = cljs.core.count(c__4550__auto___55269);
var G__55273 = (0);
seq__54735_55250 = G__55270;
chunk__54737_55251 = G__55271;
count__54738_55252 = G__55272;
i__54739_55253 = G__55273;
continue;
} else {
var child_55274 = cljs.core.first(seq__54735_55268__$1);
if(cljs.core.truth_(child_55274)){
node.appendChild(child_55274);


var G__55275 = cljs.core.next(seq__54735_55268__$1);
var G__55276 = null;
var G__55277 = (0);
var G__55278 = (0);
seq__54735_55250 = G__55275;
chunk__54737_55251 = G__55276;
count__54738_55252 = G__55277;
i__54739_55253 = G__55278;
continue;
} else {
var G__55279 = cljs.core.next(seq__54735_55268__$1);
var G__55280 = null;
var G__55281 = (0);
var G__55282 = (0);
seq__54735_55250 = G__55279;
chunk__54737_55251 = G__55280;
count__54738_55252 = G__55281;
i__54739_55253 = G__55282;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_55249);
}
}


var G__55284 = cljs.core.next(seq__54686_55241__$1);
var G__55285 = null;
var G__55286 = (0);
var G__55287 = (0);
seq__54686_55187 = G__55284;
chunk__54688_55188 = G__55285;
count__54689_55189 = G__55286;
i__54690_55190 = G__55287;
continue;
} else {
var G__55291 = cljs.core.next(seq__54686_55241__$1);
var G__55292 = null;
var G__55293 = (0);
var G__55294 = (0);
seq__54686_55187 = G__55291;
chunk__54688_55188 = G__55292;
count__54689_55189 = G__55293;
i__54690_55190 = G__55294;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__54746_55295 = shadow.dom._to_svg;
var G__54747_55296 = "string";
var G__54748_55297 = ((function (G__54746_55295,G__54747_55296){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__54746_55295,G__54747_55296))
;
goog.object.set(G__54746_55295,G__54747_55296,G__54748_55297);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__54752_55298 = shadow.dom._to_svg;
var G__54753_55299 = "null";
var G__54754_55300 = ((function (G__54752_55298,G__54753_55299){
return (function (_){
return null;
});})(G__54752_55298,G__54753_55299))
;
goog.object.set(G__54752_55298,G__54753_55299,G__54754_55300);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55301 = arguments.length;
var i__4731__auto___55302 = (0);
while(true){
if((i__4731__auto___55302 < len__4730__auto___55301)){
args__4736__auto__.push((arguments[i__4731__auto___55302]));

var G__55303 = (i__4731__auto___55302 + (1));
i__4731__auto___55302 = G__55303;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq54756){
var G__54757 = cljs.core.first(seq54756);
var seq54756__$1 = cljs.core.next(seq54756);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54757,seq54756__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__54764 = arguments.length;
switch (G__54764) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__54768_55307 = shadow.dom.dom_node(el);
var G__54769_55308 = cljs.core.name(event);
var G__54770_55309 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__54768_55307,G__54769_55308,G__54770_55309) : shadow.dom.dom_listen.call(null,G__54768_55307,G__54769_55308,G__54770_55309));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__51963__auto___55311 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51963__auto___55311,buf,chan,event_fn){
return (function (){
var f__51964__auto__ = (function (){var switch__51789__auto__ = ((function (c__51963__auto___55311,buf,chan,event_fn){
return (function (state_54777){
var state_val_54778 = (state_54777[(1)]);
if((state_val_54778 === (1))){
var state_54777__$1 = state_54777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54777__$1,(2),once_or_cleanup);
} else {
if((state_val_54778 === (2))){
var inst_54773 = (state_54777[(2)]);
var inst_54775 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_54777__$1 = (function (){var statearr_54782 = state_54777;
(statearr_54782[(7)] = inst_54773);

return statearr_54782;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54777__$1,inst_54775);
} else {
return null;
}
}
});})(c__51963__auto___55311,buf,chan,event_fn))
;
return ((function (switch__51789__auto__,c__51963__auto___55311,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__51790__auto__ = null;
var shadow$dom$state_machine__51790__auto____0 = (function (){
var statearr_54784 = [null,null,null,null,null,null,null,null];
(statearr_54784[(0)] = shadow$dom$state_machine__51790__auto__);

(statearr_54784[(1)] = (1));

return statearr_54784;
});
var shadow$dom$state_machine__51790__auto____1 = (function (state_54777){
while(true){
var ret_value__51791__auto__ = (function (){try{while(true){
var result__51792__auto__ = switch__51789__auto__(state_54777);
if(cljs.core.keyword_identical_QMARK_(result__51792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51792__auto__;
}
break;
}
}catch (e54787){if((e54787 instanceof Object)){
var ex__51793__auto__ = e54787;
var statearr_54788_55314 = state_54777;
(statearr_54788_55314[(5)] = ex__51793__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54787;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55315 = state_54777;
state_54777 = G__55315;
continue;
} else {
return ret_value__51791__auto__;
}
break;
}
});
shadow$dom$state_machine__51790__auto__ = function(state_54777){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__51790__auto____0.call(this);
case 1:
return shadow$dom$state_machine__51790__auto____1.call(this,state_54777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__51790__auto____0;
shadow$dom$state_machine__51790__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__51790__auto____1;
return shadow$dom$state_machine__51790__auto__;
})()
;})(switch__51789__auto__,c__51963__auto___55311,buf,chan,event_fn))
})();
var state__51965__auto__ = (function (){var statearr_54789 = (f__51964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51964__auto__.cljs$core$IFn$_invoke$arity$0() : f__51964__auto__.call(null));
(statearr_54789[(6)] = c__51963__auto___55311);

return statearr_54789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51965__auto__);
});})(c__51963__auto___55311,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
