goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_67891 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_67891(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_67894 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_67894(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__67154 = coll;
var G__67155 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__67154,G__67155) : shadow.dom.lazy_native_coll_seq.call(null,G__67154,G__67155));
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
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

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
var G__67203 = arguments.length;
switch (G__67203) {
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

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__67210 = arguments.length;
switch (G__67210) {
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

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__67213 = arguments.length;
switch (G__67213) {
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

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__67221 = arguments.length;
switch (G__67221) {
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

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__67229 = arguments.length;
switch (G__67229) {
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

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__67244 = arguments.length;
switch (G__67244) {
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

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e67249){if((e67249 instanceof Object)){
var e = e67249;
return console.log("didnt support attachEvent",el,e);
} else {
throw e67249;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__67250 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__67251 = null;
var count__67252 = (0);
var i__67253 = (0);
while(true){
if((i__67253 < count__67252)){
var el = chunk__67251.cljs$core$IIndexed$_nth$arity$2(null,i__67253);
var handler_67909__$1 = ((function (seq__67250,chunk__67251,count__67252,i__67253,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__67250,chunk__67251,count__67252,i__67253,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_67909__$1);


var G__67912 = seq__67250;
var G__67913 = chunk__67251;
var G__67914 = count__67252;
var G__67915 = (i__67253 + (1));
seq__67250 = G__67912;
chunk__67251 = G__67913;
count__67252 = G__67914;
i__67253 = G__67915;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__67250);
if(temp__5804__auto__){
var seq__67250__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67250__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__67250__$1);
var G__67916 = cljs.core.chunk_rest(seq__67250__$1);
var G__67917 = c__5568__auto__;
var G__67918 = cljs.core.count(c__5568__auto__);
var G__67919 = (0);
seq__67250 = G__67916;
chunk__67251 = G__67917;
count__67252 = G__67918;
i__67253 = G__67919;
continue;
} else {
var el = cljs.core.first(seq__67250__$1);
var handler_67920__$1 = ((function (seq__67250,chunk__67251,count__67252,i__67253,el,seq__67250__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__67250,chunk__67251,count__67252,i__67253,el,seq__67250__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_67920__$1);


var G__67921 = cljs.core.next(seq__67250__$1);
var G__67922 = null;
var G__67923 = (0);
var G__67924 = (0);
seq__67250 = G__67921;
chunk__67251 = G__67922;
count__67252 = G__67923;
i__67253 = G__67924;
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
var G__67255 = arguments.length;
switch (G__67255) {
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

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__67257 = cljs.core.seq(events);
var chunk__67258 = null;
var count__67259 = (0);
var i__67260 = (0);
while(true){
if((i__67260 < count__67259)){
var vec__67268 = chunk__67258.cljs$core$IIndexed$_nth$arity$2(null,i__67260);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67268,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67268,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__67931 = seq__67257;
var G__67932 = chunk__67258;
var G__67933 = count__67259;
var G__67934 = (i__67260 + (1));
seq__67257 = G__67931;
chunk__67258 = G__67932;
count__67259 = G__67933;
i__67260 = G__67934;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__67257);
if(temp__5804__auto__){
var seq__67257__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67257__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__67257__$1);
var G__67936 = cljs.core.chunk_rest(seq__67257__$1);
var G__67937 = c__5568__auto__;
var G__67938 = cljs.core.count(c__5568__auto__);
var G__67939 = (0);
seq__67257 = G__67936;
chunk__67258 = G__67937;
count__67259 = G__67938;
i__67260 = G__67939;
continue;
} else {
var vec__67273 = cljs.core.first(seq__67257__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67273,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67273,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__67940 = cljs.core.next(seq__67257__$1);
var G__67941 = null;
var G__67942 = (0);
var G__67943 = (0);
seq__67257 = G__67940;
chunk__67258 = G__67941;
count__67259 = G__67942;
i__67260 = G__67943;
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
var seq__67276 = cljs.core.seq(styles);
var chunk__67277 = null;
var count__67278 = (0);
var i__67279 = (0);
while(true){
if((i__67279 < count__67278)){
var vec__67286 = chunk__67277.cljs$core$IIndexed$_nth$arity$2(null,i__67279);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67286,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67286,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__67948 = seq__67276;
var G__67949 = chunk__67277;
var G__67950 = count__67278;
var G__67951 = (i__67279 + (1));
seq__67276 = G__67948;
chunk__67277 = G__67949;
count__67278 = G__67950;
i__67279 = G__67951;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__67276);
if(temp__5804__auto__){
var seq__67276__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67276__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__67276__$1);
var G__67952 = cljs.core.chunk_rest(seq__67276__$1);
var G__67953 = c__5568__auto__;
var G__67954 = cljs.core.count(c__5568__auto__);
var G__67955 = (0);
seq__67276 = G__67952;
chunk__67277 = G__67953;
count__67278 = G__67954;
i__67279 = G__67955;
continue;
} else {
var vec__67290 = cljs.core.first(seq__67276__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67290,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67290,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__67956 = cljs.core.next(seq__67276__$1);
var G__67957 = null;
var G__67958 = (0);
var G__67959 = (0);
seq__67276 = G__67956;
chunk__67277 = G__67957;
count__67278 = G__67958;
i__67279 = G__67959;
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
var G__67293_67960 = key;
var G__67293_67961__$1 = (((G__67293_67960 instanceof cljs.core.Keyword))?G__67293_67960.fqn:null);
switch (G__67293_67961__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

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
var ks_67970 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_67970,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_67970,"aria-");
}
})())){
el.setAttribute(ks_67970,value);
} else {
(el[ks_67970] = value);
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
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__67313){
var map__67314 = p__67313;
var map__67314__$1 = cljs.core.__destructure_map(map__67314);
var props = map__67314__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67314__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__67315 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67315,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67315,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67315,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__67318 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__67318,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__67318;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__67323 = arguments.length;
switch (G__67323) {
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

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
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
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
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
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__67328){
var vec__67332 = p__67328;
var seq__67333 = cljs.core.seq(vec__67332);
var first__67334 = cljs.core.first(seq__67333);
var seq__67333__$1 = cljs.core.next(seq__67333);
var nn = first__67334;
var first__67334__$1 = cljs.core.first(seq__67333__$1);
var seq__67333__$2 = cljs.core.next(seq__67333__$1);
var np = first__67334__$1;
var nc = seq__67333__$2;
var node = vec__67332;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__67346 = nn;
var G__67347 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__67346,G__67347) : create_fn.call(null,G__67346,G__67347));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__67348 = nn;
var G__67349 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__67348,G__67349) : create_fn.call(null,G__67348,G__67349));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__67350 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67350,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67350,(1),null);
var seq__67353_67992 = cljs.core.seq(node_children);
var chunk__67354_67993 = null;
var count__67355_67994 = (0);
var i__67356_67995 = (0);
while(true){
if((i__67356_67995 < count__67355_67994)){
var child_struct_67996 = chunk__67354_67993.cljs$core$IIndexed$_nth$arity$2(null,i__67356_67995);
var children_68000 = shadow.dom.dom_node(child_struct_67996);
if(cljs.core.seq_QMARK_(children_68000)){
var seq__67384_68002 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_68000));
var chunk__67386_68003 = null;
var count__67387_68004 = (0);
var i__67388_68005 = (0);
while(true){
if((i__67388_68005 < count__67387_68004)){
var child_68007 = chunk__67386_68003.cljs$core$IIndexed$_nth$arity$2(null,i__67388_68005);
if(cljs.core.truth_(child_68007)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_68007);


var G__68008 = seq__67384_68002;
var G__68009 = chunk__67386_68003;
var G__68010 = count__67387_68004;
var G__68011 = (i__67388_68005 + (1));
seq__67384_68002 = G__68008;
chunk__67386_68003 = G__68009;
count__67387_68004 = G__68010;
i__67388_68005 = G__68011;
continue;
} else {
var G__68012 = seq__67384_68002;
var G__68013 = chunk__67386_68003;
var G__68014 = count__67387_68004;
var G__68015 = (i__67388_68005 + (1));
seq__67384_68002 = G__68012;
chunk__67386_68003 = G__68013;
count__67387_68004 = G__68014;
i__67388_68005 = G__68015;
continue;
}
} else {
var temp__5804__auto___68016 = cljs.core.seq(seq__67384_68002);
if(temp__5804__auto___68016){
var seq__67384_68017__$1 = temp__5804__auto___68016;
if(cljs.core.chunked_seq_QMARK_(seq__67384_68017__$1)){
var c__5568__auto___68018 = cljs.core.chunk_first(seq__67384_68017__$1);
var G__68019 = cljs.core.chunk_rest(seq__67384_68017__$1);
var G__68020 = c__5568__auto___68018;
var G__68021 = cljs.core.count(c__5568__auto___68018);
var G__68022 = (0);
seq__67384_68002 = G__68019;
chunk__67386_68003 = G__68020;
count__67387_68004 = G__68021;
i__67388_68005 = G__68022;
continue;
} else {
var child_68023 = cljs.core.first(seq__67384_68017__$1);
if(cljs.core.truth_(child_68023)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_68023);


var G__68024 = cljs.core.next(seq__67384_68017__$1);
var G__68025 = null;
var G__68026 = (0);
var G__68027 = (0);
seq__67384_68002 = G__68024;
chunk__67386_68003 = G__68025;
count__67387_68004 = G__68026;
i__67388_68005 = G__68027;
continue;
} else {
var G__68030 = cljs.core.next(seq__67384_68017__$1);
var G__68031 = null;
var G__68032 = (0);
var G__68033 = (0);
seq__67384_68002 = G__68030;
chunk__67386_68003 = G__68031;
count__67387_68004 = G__68032;
i__67388_68005 = G__68033;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_68000);
}


var G__68035 = seq__67353_67992;
var G__68036 = chunk__67354_67993;
var G__68037 = count__67355_67994;
var G__68038 = (i__67356_67995 + (1));
seq__67353_67992 = G__68035;
chunk__67354_67993 = G__68036;
count__67355_67994 = G__68037;
i__67356_67995 = G__68038;
continue;
} else {
var temp__5804__auto___68040 = cljs.core.seq(seq__67353_67992);
if(temp__5804__auto___68040){
var seq__67353_68041__$1 = temp__5804__auto___68040;
if(cljs.core.chunked_seq_QMARK_(seq__67353_68041__$1)){
var c__5568__auto___68042 = cljs.core.chunk_first(seq__67353_68041__$1);
var G__68043 = cljs.core.chunk_rest(seq__67353_68041__$1);
var G__68044 = c__5568__auto___68042;
var G__68045 = cljs.core.count(c__5568__auto___68042);
var G__68046 = (0);
seq__67353_67992 = G__68043;
chunk__67354_67993 = G__68044;
count__67355_67994 = G__68045;
i__67356_67995 = G__68046;
continue;
} else {
var child_struct_68048 = cljs.core.first(seq__67353_68041__$1);
var children_68049 = shadow.dom.dom_node(child_struct_68048);
if(cljs.core.seq_QMARK_(children_68049)){
var seq__67397_68050 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_68049));
var chunk__67399_68051 = null;
var count__67400_68052 = (0);
var i__67401_68053 = (0);
while(true){
if((i__67401_68053 < count__67400_68052)){
var child_68054 = chunk__67399_68051.cljs$core$IIndexed$_nth$arity$2(null,i__67401_68053);
if(cljs.core.truth_(child_68054)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_68054);


var G__68055 = seq__67397_68050;
var G__68056 = chunk__67399_68051;
var G__68057 = count__67400_68052;
var G__68058 = (i__67401_68053 + (1));
seq__67397_68050 = G__68055;
chunk__67399_68051 = G__68056;
count__67400_68052 = G__68057;
i__67401_68053 = G__68058;
continue;
} else {
var G__68059 = seq__67397_68050;
var G__68060 = chunk__67399_68051;
var G__68061 = count__67400_68052;
var G__68062 = (i__67401_68053 + (1));
seq__67397_68050 = G__68059;
chunk__67399_68051 = G__68060;
count__67400_68052 = G__68061;
i__67401_68053 = G__68062;
continue;
}
} else {
var temp__5804__auto___68063__$1 = cljs.core.seq(seq__67397_68050);
if(temp__5804__auto___68063__$1){
var seq__67397_68066__$1 = temp__5804__auto___68063__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67397_68066__$1)){
var c__5568__auto___68067 = cljs.core.chunk_first(seq__67397_68066__$1);
var G__68068 = cljs.core.chunk_rest(seq__67397_68066__$1);
var G__68069 = c__5568__auto___68067;
var G__68070 = cljs.core.count(c__5568__auto___68067);
var G__68071 = (0);
seq__67397_68050 = G__68068;
chunk__67399_68051 = G__68069;
count__67400_68052 = G__68070;
i__67401_68053 = G__68071;
continue;
} else {
var child_68072 = cljs.core.first(seq__67397_68066__$1);
if(cljs.core.truth_(child_68072)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_68072);


var G__68073 = cljs.core.next(seq__67397_68066__$1);
var G__68074 = null;
var G__68075 = (0);
var G__68076 = (0);
seq__67397_68050 = G__68073;
chunk__67399_68051 = G__68074;
count__67400_68052 = G__68075;
i__67401_68053 = G__68076;
continue;
} else {
var G__68077 = cljs.core.next(seq__67397_68066__$1);
var G__68078 = null;
var G__68079 = (0);
var G__68080 = (0);
seq__67397_68050 = G__68077;
chunk__67399_68051 = G__68078;
count__67400_68052 = G__68079;
i__67401_68053 = G__68080;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_68049);
}


var G__68081 = cljs.core.next(seq__67353_68041__$1);
var G__68082 = null;
var G__68083 = (0);
var G__68084 = (0);
seq__67353_67992 = G__68081;
chunk__67354_67993 = G__68082;
count__67355_67994 = G__68083;
i__67356_67995 = G__68084;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__67421 = cljs.core.seq(node);
var chunk__67422 = null;
var count__67423 = (0);
var i__67424 = (0);
while(true){
if((i__67424 < count__67423)){
var n = chunk__67422.cljs$core$IIndexed$_nth$arity$2(null,i__67424);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__68099 = seq__67421;
var G__68100 = chunk__67422;
var G__68101 = count__67423;
var G__68102 = (i__67424 + (1));
seq__67421 = G__68099;
chunk__67422 = G__68100;
count__67423 = G__68101;
i__67424 = G__68102;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__67421);
if(temp__5804__auto__){
var seq__67421__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67421__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__67421__$1);
var G__68103 = cljs.core.chunk_rest(seq__67421__$1);
var G__68104 = c__5568__auto__;
var G__68105 = cljs.core.count(c__5568__auto__);
var G__68106 = (0);
seq__67421 = G__68103;
chunk__67422 = G__68104;
count__67423 = G__68105;
i__67424 = G__68106;
continue;
} else {
var n = cljs.core.first(seq__67421__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__68108 = cljs.core.next(seq__67421__$1);
var G__68109 = null;
var G__68110 = (0);
var G__68111 = (0);
seq__67421 = G__68108;
chunk__67422 = G__68109;
count__67423 = G__68110;
i__67424 = G__68111;
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
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__67455 = arguments.length;
switch (G__67455) {
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

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__67457 = arguments.length;
switch (G__67457) {
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

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

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
var G__67471 = arguments.length;
switch (G__67471) {
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

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

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
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___68115 = arguments.length;
var i__5770__auto___68116 = (0);
while(true){
if((i__5770__auto___68116 < len__5769__auto___68115)){
args__5775__auto__.push((arguments[i__5770__auto___68116]));

var G__68117 = (i__5770__auto___68116 + (1));
i__5770__auto___68116 = G__68117;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__67505_68118 = cljs.core.seq(nodes);
var chunk__67506_68119 = null;
var count__67507_68120 = (0);
var i__67508_68121 = (0);
while(true){
if((i__67508_68121 < count__67507_68120)){
var node_68122 = chunk__67506_68119.cljs$core$IIndexed$_nth$arity$2(null,i__67508_68121);
fragment.appendChild(shadow.dom._to_dom(node_68122));


var G__68123 = seq__67505_68118;
var G__68124 = chunk__67506_68119;
var G__68125 = count__67507_68120;
var G__68126 = (i__67508_68121 + (1));
seq__67505_68118 = G__68123;
chunk__67506_68119 = G__68124;
count__67507_68120 = G__68125;
i__67508_68121 = G__68126;
continue;
} else {
var temp__5804__auto___68127 = cljs.core.seq(seq__67505_68118);
if(temp__5804__auto___68127){
var seq__67505_68128__$1 = temp__5804__auto___68127;
if(cljs.core.chunked_seq_QMARK_(seq__67505_68128__$1)){
var c__5568__auto___68129 = cljs.core.chunk_first(seq__67505_68128__$1);
var G__68130 = cljs.core.chunk_rest(seq__67505_68128__$1);
var G__68131 = c__5568__auto___68129;
var G__68132 = cljs.core.count(c__5568__auto___68129);
var G__68133 = (0);
seq__67505_68118 = G__68130;
chunk__67506_68119 = G__68131;
count__67507_68120 = G__68132;
i__67508_68121 = G__68133;
continue;
} else {
var node_68134 = cljs.core.first(seq__67505_68128__$1);
fragment.appendChild(shadow.dom._to_dom(node_68134));


var G__68135 = cljs.core.next(seq__67505_68128__$1);
var G__68136 = null;
var G__68137 = (0);
var G__68138 = (0);
seq__67505_68118 = G__68135;
chunk__67506_68119 = G__68136;
count__67507_68120 = G__68137;
i__67508_68121 = G__68138;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq67504){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67504));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__67511_68139 = cljs.core.seq(scripts);
var chunk__67512_68140 = null;
var count__67513_68141 = (0);
var i__67514_68142 = (0);
while(true){
if((i__67514_68142 < count__67513_68141)){
var vec__67526_68143 = chunk__67512_68140.cljs$core$IIndexed$_nth$arity$2(null,i__67514_68142);
var script_tag_68144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67526_68143,(0),null);
var script_body_68145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67526_68143,(1),null);
eval(script_body_68145);


var G__68146 = seq__67511_68139;
var G__68147 = chunk__67512_68140;
var G__68148 = count__67513_68141;
var G__68149 = (i__67514_68142 + (1));
seq__67511_68139 = G__68146;
chunk__67512_68140 = G__68147;
count__67513_68141 = G__68148;
i__67514_68142 = G__68149;
continue;
} else {
var temp__5804__auto___68150 = cljs.core.seq(seq__67511_68139);
if(temp__5804__auto___68150){
var seq__67511_68151__$1 = temp__5804__auto___68150;
if(cljs.core.chunked_seq_QMARK_(seq__67511_68151__$1)){
var c__5568__auto___68152 = cljs.core.chunk_first(seq__67511_68151__$1);
var G__68153 = cljs.core.chunk_rest(seq__67511_68151__$1);
var G__68154 = c__5568__auto___68152;
var G__68155 = cljs.core.count(c__5568__auto___68152);
var G__68156 = (0);
seq__67511_68139 = G__68153;
chunk__67512_68140 = G__68154;
count__67513_68141 = G__68155;
i__67514_68142 = G__68156;
continue;
} else {
var vec__67531_68157 = cljs.core.first(seq__67511_68151__$1);
var script_tag_68158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67531_68157,(0),null);
var script_body_68159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67531_68157,(1),null);
eval(script_body_68159);


var G__68160 = cljs.core.next(seq__67511_68151__$1);
var G__68161 = null;
var G__68162 = (0);
var G__68163 = (0);
seq__67511_68139 = G__68160;
chunk__67512_68140 = G__68161;
count__67513_68141 = G__68162;
i__67514_68142 = G__68163;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__67536){
var vec__67537 = p__67536;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67537,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67537,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__67550 = arguments.length;
switch (G__67550) {
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

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
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
var seq__67556 = cljs.core.seq(style_keys);
var chunk__67557 = null;
var count__67558 = (0);
var i__67559 = (0);
while(true){
if((i__67559 < count__67558)){
var it = chunk__67557.cljs$core$IIndexed$_nth$arity$2(null,i__67559);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__68165 = seq__67556;
var G__68166 = chunk__67557;
var G__68167 = count__67558;
var G__68168 = (i__67559 + (1));
seq__67556 = G__68165;
chunk__67557 = G__68166;
count__67558 = G__68167;
i__67559 = G__68168;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__67556);
if(temp__5804__auto__){
var seq__67556__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67556__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__67556__$1);
var G__68169 = cljs.core.chunk_rest(seq__67556__$1);
var G__68170 = c__5568__auto__;
var G__68171 = cljs.core.count(c__5568__auto__);
var G__68172 = (0);
seq__67556 = G__68169;
chunk__67557 = G__68170;
count__67558 = G__68171;
i__67559 = G__68172;
continue;
} else {
var it = cljs.core.first(seq__67556__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__68173 = cljs.core.next(seq__67556__$1);
var G__68174 = null;
var G__68175 = (0);
var G__68176 = (0);
seq__67556 = G__68173;
chunk__67557 = G__68174;
count__67558 = G__68175;
i__67559 = G__68176;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k67575,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__67602 = k67575;
var G__67602__$1 = (((G__67602 instanceof cljs.core.Keyword))?G__67602.fqn:null);
switch (G__67602__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k67575,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__67603){
var vec__67604 = p__67603;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67604,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67604,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67574){
var self__ = this;
var G__67574__$1 = this;
return (new cljs.core.RecordIter((0),G__67574__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this67576,other67577){
var self__ = this;
var this67576__$1 = this;
return (((!((other67577 == null)))) && ((((this67576__$1.constructor === other67577.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67576__$1.x,other67577.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67576__$1.y,other67577.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67576__$1.__extmap,other67577.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k67575){
var self__ = this;
var this__5350__auto____$1 = this;
var G__67660 = k67575;
var G__67660__$1 = (((G__67660 instanceof cljs.core.Keyword))?G__67660.fqn:null);
switch (G__67660__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k67575);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__67574){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__67667 = cljs.core.keyword_identical_QMARK_;
var expr__67668 = k__5352__auto__;
if(cljs.core.truth_((pred__67667.cljs$core$IFn$_invoke$arity$2 ? pred__67667.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__67668) : pred__67667.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__67668)))){
return (new shadow.dom.Coordinate(G__67574,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67667.cljs$core$IFn$_invoke$arity$2 ? pred__67667.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__67668) : pred__67667.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__67668)))){
return (new shadow.dom.Coordinate(self__.x,G__67574,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__67574),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__67574){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__67574,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__67588){
var extmap__5385__auto__ = (function (){var G__67682 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__67588,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__67588)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__67682);
} else {
return G__67682;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__67588),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__67588),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k67685,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__67700 = k67685;
var G__67700__$1 = (((G__67700 instanceof cljs.core.Keyword))?G__67700.fqn:null);
switch (G__67700__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k67685,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__67702){
var vec__67706 = p__67702;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67706,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67706,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67684){
var self__ = this;
var G__67684__$1 = this;
return (new cljs.core.RecordIter((0),G__67684__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this67686,other67687){
var self__ = this;
var this67686__$1 = this;
return (((!((other67687 == null)))) && ((((this67686__$1.constructor === other67687.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67686__$1.w,other67687.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67686__$1.h,other67687.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67686__$1.__extmap,other67687.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k67685){
var self__ = this;
var this__5350__auto____$1 = this;
var G__67717 = k67685;
var G__67717__$1 = (((G__67717 instanceof cljs.core.Keyword))?G__67717.fqn:null);
switch (G__67717__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k67685);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__67684){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__67718 = cljs.core.keyword_identical_QMARK_;
var expr__67719 = k__5352__auto__;
if(cljs.core.truth_((pred__67718.cljs$core$IFn$_invoke$arity$2 ? pred__67718.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__67719) : pred__67718.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__67719)))){
return (new shadow.dom.Size(G__67684,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67718.cljs$core$IFn$_invoke$arity$2 ? pred__67718.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__67719) : pred__67718.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__67719)))){
return (new shadow.dom.Size(self__.w,G__67684,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__67684),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__67684){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__67684,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__67693){
var extmap__5385__auto__ = (function (){var G__67722 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__67693,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__67693)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__67722);
} else {
return G__67722;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__67693),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__67693),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
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
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__68209 = (i + (1));
var G__68210 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__68209;
ret = G__68210;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__67734){
var vec__67735 = p__67734;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67735,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67735,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__67741 = arguments.length;
switch (G__67741) {
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

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

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
var G__68212 = ps;
var G__68213 = (i + (1));
el__$1 = G__68212;
i = G__68213;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__67756 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67756,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67756,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67756,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__67761_68214 = cljs.core.seq(props);
var chunk__67762_68215 = null;
var count__67763_68216 = (0);
var i__67764_68217 = (0);
while(true){
if((i__67764_68217 < count__67763_68216)){
var vec__67777_68218 = chunk__67762_68215.cljs$core$IIndexed$_nth$arity$2(null,i__67764_68217);
var k_68219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67777_68218,(0),null);
var v_68220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67777_68218,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_68219);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_68219),v_68220);


var G__68222 = seq__67761_68214;
var G__68223 = chunk__67762_68215;
var G__68224 = count__67763_68216;
var G__68225 = (i__67764_68217 + (1));
seq__67761_68214 = G__68222;
chunk__67762_68215 = G__68223;
count__67763_68216 = G__68224;
i__67764_68217 = G__68225;
continue;
} else {
var temp__5804__auto___68226 = cljs.core.seq(seq__67761_68214);
if(temp__5804__auto___68226){
var seq__67761_68227__$1 = temp__5804__auto___68226;
if(cljs.core.chunked_seq_QMARK_(seq__67761_68227__$1)){
var c__5568__auto___68228 = cljs.core.chunk_first(seq__67761_68227__$1);
var G__68229 = cljs.core.chunk_rest(seq__67761_68227__$1);
var G__68230 = c__5568__auto___68228;
var G__68231 = cljs.core.count(c__5568__auto___68228);
var G__68232 = (0);
seq__67761_68214 = G__68229;
chunk__67762_68215 = G__68230;
count__67763_68216 = G__68231;
i__67764_68217 = G__68232;
continue;
} else {
var vec__67780_68233 = cljs.core.first(seq__67761_68227__$1);
var k_68234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67780_68233,(0),null);
var v_68235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67780_68233,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_68234);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_68234),v_68235);


var G__68236 = cljs.core.next(seq__67761_68227__$1);
var G__68237 = null;
var G__68238 = (0);
var G__68239 = (0);
seq__67761_68214 = G__68236;
chunk__67762_68215 = G__68237;
count__67763_68216 = G__68238;
i__67764_68217 = G__68239;
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
var vec__67794 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67794,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67794,(1),null);
var seq__67797_68240 = cljs.core.seq(node_children);
var chunk__67799_68241 = null;
var count__67800_68242 = (0);
var i__67801_68243 = (0);
while(true){
if((i__67801_68243 < count__67800_68242)){
var child_struct_68244 = chunk__67799_68241.cljs$core$IIndexed$_nth$arity$2(null,i__67801_68243);
if((!((child_struct_68244 == null)))){
if(typeof child_struct_68244 === 'string'){
var text_68245 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_68245),child_struct_68244].join(''));
} else {
var children_68246 = shadow.dom.svg_node(child_struct_68244);
if(cljs.core.seq_QMARK_(children_68246)){
var seq__67818_68247 = cljs.core.seq(children_68246);
var chunk__67820_68248 = null;
var count__67821_68249 = (0);
var i__67822_68250 = (0);
while(true){
if((i__67822_68250 < count__67821_68249)){
var child_68251 = chunk__67820_68248.cljs$core$IIndexed$_nth$arity$2(null,i__67822_68250);
if(cljs.core.truth_(child_68251)){
node.appendChild(child_68251);


var G__68252 = seq__67818_68247;
var G__68253 = chunk__67820_68248;
var G__68254 = count__67821_68249;
var G__68255 = (i__67822_68250 + (1));
seq__67818_68247 = G__68252;
chunk__67820_68248 = G__68253;
count__67821_68249 = G__68254;
i__67822_68250 = G__68255;
continue;
} else {
var G__68256 = seq__67818_68247;
var G__68257 = chunk__67820_68248;
var G__68258 = count__67821_68249;
var G__68259 = (i__67822_68250 + (1));
seq__67818_68247 = G__68256;
chunk__67820_68248 = G__68257;
count__67821_68249 = G__68258;
i__67822_68250 = G__68259;
continue;
}
} else {
var temp__5804__auto___68260 = cljs.core.seq(seq__67818_68247);
if(temp__5804__auto___68260){
var seq__67818_68261__$1 = temp__5804__auto___68260;
if(cljs.core.chunked_seq_QMARK_(seq__67818_68261__$1)){
var c__5568__auto___68262 = cljs.core.chunk_first(seq__67818_68261__$1);
var G__68263 = cljs.core.chunk_rest(seq__67818_68261__$1);
var G__68264 = c__5568__auto___68262;
var G__68265 = cljs.core.count(c__5568__auto___68262);
var G__68266 = (0);
seq__67818_68247 = G__68263;
chunk__67820_68248 = G__68264;
count__67821_68249 = G__68265;
i__67822_68250 = G__68266;
continue;
} else {
var child_68267 = cljs.core.first(seq__67818_68261__$1);
if(cljs.core.truth_(child_68267)){
node.appendChild(child_68267);


var G__68268 = cljs.core.next(seq__67818_68261__$1);
var G__68269 = null;
var G__68270 = (0);
var G__68271 = (0);
seq__67818_68247 = G__68268;
chunk__67820_68248 = G__68269;
count__67821_68249 = G__68270;
i__67822_68250 = G__68271;
continue;
} else {
var G__68272 = cljs.core.next(seq__67818_68261__$1);
var G__68273 = null;
var G__68274 = (0);
var G__68275 = (0);
seq__67818_68247 = G__68272;
chunk__67820_68248 = G__68273;
count__67821_68249 = G__68274;
i__67822_68250 = G__68275;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_68246);
}
}


var G__68276 = seq__67797_68240;
var G__68277 = chunk__67799_68241;
var G__68278 = count__67800_68242;
var G__68279 = (i__67801_68243 + (1));
seq__67797_68240 = G__68276;
chunk__67799_68241 = G__68277;
count__67800_68242 = G__68278;
i__67801_68243 = G__68279;
continue;
} else {
var G__68280 = seq__67797_68240;
var G__68281 = chunk__67799_68241;
var G__68282 = count__67800_68242;
var G__68283 = (i__67801_68243 + (1));
seq__67797_68240 = G__68280;
chunk__67799_68241 = G__68281;
count__67800_68242 = G__68282;
i__67801_68243 = G__68283;
continue;
}
} else {
var temp__5804__auto___68284 = cljs.core.seq(seq__67797_68240);
if(temp__5804__auto___68284){
var seq__67797_68285__$1 = temp__5804__auto___68284;
if(cljs.core.chunked_seq_QMARK_(seq__67797_68285__$1)){
var c__5568__auto___68286 = cljs.core.chunk_first(seq__67797_68285__$1);
var G__68287 = cljs.core.chunk_rest(seq__67797_68285__$1);
var G__68288 = c__5568__auto___68286;
var G__68289 = cljs.core.count(c__5568__auto___68286);
var G__68290 = (0);
seq__67797_68240 = G__68287;
chunk__67799_68241 = G__68288;
count__67800_68242 = G__68289;
i__67801_68243 = G__68290;
continue;
} else {
var child_struct_68291 = cljs.core.first(seq__67797_68285__$1);
if((!((child_struct_68291 == null)))){
if(typeof child_struct_68291 === 'string'){
var text_68292 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_68292),child_struct_68291].join(''));
} else {
var children_68293 = shadow.dom.svg_node(child_struct_68291);
if(cljs.core.seq_QMARK_(children_68293)){
var seq__67831_68294 = cljs.core.seq(children_68293);
var chunk__67833_68295 = null;
var count__67834_68296 = (0);
var i__67835_68297 = (0);
while(true){
if((i__67835_68297 < count__67834_68296)){
var child_68298 = chunk__67833_68295.cljs$core$IIndexed$_nth$arity$2(null,i__67835_68297);
if(cljs.core.truth_(child_68298)){
node.appendChild(child_68298);


var G__68299 = seq__67831_68294;
var G__68300 = chunk__67833_68295;
var G__68301 = count__67834_68296;
var G__68302 = (i__67835_68297 + (1));
seq__67831_68294 = G__68299;
chunk__67833_68295 = G__68300;
count__67834_68296 = G__68301;
i__67835_68297 = G__68302;
continue;
} else {
var G__68303 = seq__67831_68294;
var G__68304 = chunk__67833_68295;
var G__68305 = count__67834_68296;
var G__68306 = (i__67835_68297 + (1));
seq__67831_68294 = G__68303;
chunk__67833_68295 = G__68304;
count__67834_68296 = G__68305;
i__67835_68297 = G__68306;
continue;
}
} else {
var temp__5804__auto___68307__$1 = cljs.core.seq(seq__67831_68294);
if(temp__5804__auto___68307__$1){
var seq__67831_68308__$1 = temp__5804__auto___68307__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67831_68308__$1)){
var c__5568__auto___68309 = cljs.core.chunk_first(seq__67831_68308__$1);
var G__68310 = cljs.core.chunk_rest(seq__67831_68308__$1);
var G__68311 = c__5568__auto___68309;
var G__68312 = cljs.core.count(c__5568__auto___68309);
var G__68313 = (0);
seq__67831_68294 = G__68310;
chunk__67833_68295 = G__68311;
count__67834_68296 = G__68312;
i__67835_68297 = G__68313;
continue;
} else {
var child_68314 = cljs.core.first(seq__67831_68308__$1);
if(cljs.core.truth_(child_68314)){
node.appendChild(child_68314);


var G__68315 = cljs.core.next(seq__67831_68308__$1);
var G__68316 = null;
var G__68317 = (0);
var G__68318 = (0);
seq__67831_68294 = G__68315;
chunk__67833_68295 = G__68316;
count__67834_68296 = G__68317;
i__67835_68297 = G__68318;
continue;
} else {
var G__68319 = cljs.core.next(seq__67831_68308__$1);
var G__68320 = null;
var G__68321 = (0);
var G__68322 = (0);
seq__67831_68294 = G__68319;
chunk__67833_68295 = G__68320;
count__67834_68296 = G__68321;
i__67835_68297 = G__68322;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_68293);
}
}


var G__68323 = cljs.core.next(seq__67797_68285__$1);
var G__68324 = null;
var G__68325 = (0);
var G__68326 = (0);
seq__67797_68240 = G__68323;
chunk__67799_68241 = G__68324;
count__67800_68242 = G__68325;
i__67801_68243 = G__68326;
continue;
} else {
var G__68327 = cljs.core.next(seq__67797_68285__$1);
var G__68328 = null;
var G__68329 = (0);
var G__68330 = (0);
seq__67797_68240 = G__68327;
chunk__67799_68241 = G__68328;
count__67800_68242 = G__68329;
i__67801_68243 = G__68330;
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
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___68331 = arguments.length;
var i__5770__auto___68332 = (0);
while(true){
if((i__5770__auto___68332 < len__5769__auto___68331)){
args__5775__auto__.push((arguments[i__5770__auto___68332]));

var G__68333 = (i__5770__auto___68332 + (1));
i__5770__auto___68332 = G__68333;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq67844){
var G__67846 = cljs.core.first(seq67844);
var seq67844__$1 = cljs.core.next(seq67844);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67846,seq67844__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__67855 = arguments.length;
switch (G__67855) {
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

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__53974__auto___68335 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__53975__auto__ = (function (){var switch__53800__auto__ = (function (state_67864){
var state_val_67865 = (state_67864[(1)]);
if((state_val_67865 === (1))){
var state_67864__$1 = state_67864;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67864__$1,(2),once_or_cleanup);
} else {
if((state_val_67865 === (2))){
var inst_67861 = (state_67864[(2)]);
var inst_67862 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_67864__$1 = (function (){var statearr_67870 = state_67864;
(statearr_67870[(7)] = inst_67861);

return statearr_67870;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_67864__$1,inst_67862);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__53801__auto__ = null;
var shadow$dom$state_machine__53801__auto____0 = (function (){
var statearr_67872 = [null,null,null,null,null,null,null,null];
(statearr_67872[(0)] = shadow$dom$state_machine__53801__auto__);

(statearr_67872[(1)] = (1));

return statearr_67872;
});
var shadow$dom$state_machine__53801__auto____1 = (function (state_67864){
while(true){
var ret_value__53802__auto__ = (function (){try{while(true){
var result__53803__auto__ = switch__53800__auto__(state_67864);
if(cljs.core.keyword_identical_QMARK_(result__53803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__53803__auto__;
}
break;
}
}catch (e67873){var ex__53804__auto__ = e67873;
var statearr_67874_68338 = state_67864;
(statearr_67874_68338[(2)] = ex__53804__auto__);


if(cljs.core.seq((state_67864[(4)]))){
var statearr_67875_68339 = state_67864;
(statearr_67875_68339[(1)] = cljs.core.first((state_67864[(4)])));

} else {
throw ex__53804__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__53802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68344 = state_67864;
state_67864 = G__68344;
continue;
} else {
return ret_value__53802__auto__;
}
break;
}
});
shadow$dom$state_machine__53801__auto__ = function(state_67864){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__53801__auto____0.call(this);
case 1:
return shadow$dom$state_machine__53801__auto____1.call(this,state_67864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__53801__auto____0;
shadow$dom$state_machine__53801__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__53801__auto____1;
return shadow$dom$state_machine__53801__auto__;
})()
})();
var state__53976__auto__ = (function (){var statearr_67880 = f__53975__auto__();
(statearr_67880[(6)] = c__53974__auto___68335);

return statearr_67880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__53976__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
