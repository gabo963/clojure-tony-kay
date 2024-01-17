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
return cljs.core.cons((coll[idx]),(function (){var G__53844 = coll;
var G__53845 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__53844,G__53845) : shadow.dom.lazy_native_coll_seq.call(null,G__53844,G__53845));
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
var G__53879 = arguments.length;
switch (G__53879) {
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
var G__53887 = arguments.length;
switch (G__53887) {
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
var G__53897 = arguments.length;
switch (G__53897) {
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
var G__53908 = arguments.length;
switch (G__53908) {
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
var G__53915 = arguments.length;
switch (G__53915) {
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
var G__53918 = document;
var G__53919 = shadow.dom.dom_node(el);
return goog.dom.contains(G__53918,G__53919);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__53921 = shadow.dom.dom_node(parent);
var G__53922 = shadow.dom.dom_node(el);
return goog.dom.contains(G__53921,G__53922);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__53925 = shadow.dom.dom_node(el);
var G__53926 = cls;
return goog.dom.classlist.add(G__53925,G__53926);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__53930 = shadow.dom.dom_node(el);
var G__53931 = cls;
return goog.dom.classlist.remove(G__53930,G__53931);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__53937 = arguments.length;
switch (G__53937) {
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
var G__53939 = shadow.dom.dom_node(el);
var G__53940 = cls;
return goog.dom.classlist.toggle(G__53939,G__53940);
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
}catch (e53946){if((e53946 instanceof Object)){
var e = e53946;
return console.log("didnt support attachEvent",el,e);
} else {
throw e53946;

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
var seq__53950 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__53951 = null;
var count__53952 = (0);
var i__53953 = (0);
while(true){
if((i__53953 < count__53952)){
var el = chunk__53951.cljs$core$IIndexed$_nth$arity$2(null,i__53953);
var handler_54716__$1 = ((function (seq__53950,chunk__53951,count__53952,i__53953,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__53950,chunk__53951,count__53952,i__53953,el))
;
var G__53968_54718 = el;
var G__53969_54719 = cljs.core.name(ev);
var G__53970_54720 = handler_54716__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__53968_54718,G__53969_54719,G__53970_54720) : shadow.dom.dom_listen.call(null,G__53968_54718,G__53969_54719,G__53970_54720));


var G__54721 = seq__53950;
var G__54722 = chunk__53951;
var G__54723 = count__53952;
var G__54724 = (i__53953 + (1));
seq__53950 = G__54721;
chunk__53951 = G__54722;
count__53952 = G__54723;
i__53953 = G__54724;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__53950);
if(temp__5804__auto__){
var seq__53950__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53950__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__53950__$1);
var G__54727 = cljs.core.chunk_rest(seq__53950__$1);
var G__54728 = c__4550__auto__;
var G__54729 = cljs.core.count(c__4550__auto__);
var G__54730 = (0);
seq__53950 = G__54727;
chunk__53951 = G__54728;
count__53952 = G__54729;
i__53953 = G__54730;
continue;
} else {
var el = cljs.core.first(seq__53950__$1);
var handler_54731__$1 = ((function (seq__53950,chunk__53951,count__53952,i__53953,el,seq__53950__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__53950,chunk__53951,count__53952,i__53953,el,seq__53950__$1,temp__5804__auto__))
;
var G__53975_54732 = el;
var G__53976_54733 = cljs.core.name(ev);
var G__53977_54734 = handler_54731__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__53975_54732,G__53976_54733,G__53977_54734) : shadow.dom.dom_listen.call(null,G__53975_54732,G__53976_54733,G__53977_54734));


var G__54735 = cljs.core.next(seq__53950__$1);
var G__54736 = null;
var G__54737 = (0);
var G__54738 = (0);
seq__53950 = G__54735;
chunk__53951 = G__54736;
count__53952 = G__54737;
i__53953 = G__54738;
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
var G__53984 = arguments.length;
switch (G__53984) {
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
var G__53989 = shadow.dom.dom_node(el);
var G__53990 = cljs.core.name(ev);
var G__53991 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__53989,G__53990,G__53991) : shadow.dom.dom_listen.call(null,G__53989,G__53990,G__53991));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__53995 = shadow.dom.dom_node(el);
var G__53996 = cljs.core.name(ev);
var G__53997 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__53995,G__53996,G__53997) : shadow.dom.dom_listen_remove.call(null,G__53995,G__53996,G__53997));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__54000 = cljs.core.seq(events);
var chunk__54001 = null;
var count__54002 = (0);
var i__54003 = (0);
while(true){
if((i__54003 < count__54002)){
var vec__54015 = chunk__54001.cljs$core$IIndexed$_nth$arity$2(null,i__54003);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54015,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54015,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__54764 = seq__54000;
var G__54765 = chunk__54001;
var G__54766 = count__54002;
var G__54767 = (i__54003 + (1));
seq__54000 = G__54764;
chunk__54001 = G__54765;
count__54002 = G__54766;
i__54003 = G__54767;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54000);
if(temp__5804__auto__){
var seq__54000__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54000__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54000__$1);
var G__54769 = cljs.core.chunk_rest(seq__54000__$1);
var G__54770 = c__4550__auto__;
var G__54771 = cljs.core.count(c__4550__auto__);
var G__54772 = (0);
seq__54000 = G__54769;
chunk__54001 = G__54770;
count__54002 = G__54771;
i__54003 = G__54772;
continue;
} else {
var vec__54023 = cljs.core.first(seq__54000__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54023,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54023,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__54773 = cljs.core.next(seq__54000__$1);
var G__54774 = null;
var G__54775 = (0);
var G__54776 = (0);
seq__54000 = G__54773;
chunk__54001 = G__54774;
count__54002 = G__54775;
i__54003 = G__54776;
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
var seq__54030 = cljs.core.seq(styles);
var chunk__54031 = null;
var count__54032 = (0);
var i__54033 = (0);
while(true){
if((i__54033 < count__54032)){
var vec__54054 = chunk__54031.cljs$core$IIndexed$_nth$arity$2(null,i__54033);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54054,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54054,(1),null);
var G__54058_54786 = dom;
var G__54059_54787 = cljs.core.name(k);
var G__54060_54788 = (((v == null))?"":v);
goog.style.setStyle(G__54058_54786,G__54059_54787,G__54060_54788);


var G__54789 = seq__54030;
var G__54790 = chunk__54031;
var G__54791 = count__54032;
var G__54792 = (i__54033 + (1));
seq__54030 = G__54789;
chunk__54031 = G__54790;
count__54032 = G__54791;
i__54033 = G__54792;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54030);
if(temp__5804__auto__){
var seq__54030__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54030__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54030__$1);
var G__54793 = cljs.core.chunk_rest(seq__54030__$1);
var G__54794 = c__4550__auto__;
var G__54795 = cljs.core.count(c__4550__auto__);
var G__54796 = (0);
seq__54030 = G__54793;
chunk__54031 = G__54794;
count__54032 = G__54795;
i__54033 = G__54796;
continue;
} else {
var vec__54065 = cljs.core.first(seq__54030__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54065,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54065,(1),null);
var G__54068_54797 = dom;
var G__54069_54798 = cljs.core.name(k);
var G__54070_54799 = (((v == null))?"":v);
goog.style.setStyle(G__54068_54797,G__54069_54798,G__54070_54799);


var G__54800 = cljs.core.next(seq__54030__$1);
var G__54801 = null;
var G__54802 = (0);
var G__54803 = (0);
seq__54030 = G__54800;
chunk__54031 = G__54801;
count__54032 = G__54802;
i__54033 = G__54803;
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
var G__54073_54808 = key;
var G__54073_54809__$1 = (((G__54073_54808 instanceof cljs.core.Keyword))?G__54073_54808.fqn:null);
switch (G__54073_54809__$1) {
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
var ks_54814 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_54814,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_54814,"aria-");
}
})())){
el.setAttribute(ks_54814,value);
} else {
(el[ks_54814] = value);
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
var G__54086 = shadow.dom.dom_node(el);
var G__54087 = cls;
return goog.dom.classlist.contains(G__54086,G__54087);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__54104){
var map__54105 = p__54104;
var map__54105__$1 = (((((!((map__54105 == null))))?(((((map__54105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54105):map__54105);
var props = map__54105__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54105__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__54112 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54112,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54112,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54112,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__54117 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__54117,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__54117;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__54125 = arguments.length;
switch (G__54125) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__54132){
var vec__54134 = p__54132;
var seq__54135 = cljs.core.seq(vec__54134);
var first__54136 = cljs.core.first(seq__54135);
var seq__54135__$1 = cljs.core.next(seq__54135);
var nn = first__54136;
var first__54136__$1 = cljs.core.first(seq__54135__$1);
var seq__54135__$2 = cljs.core.next(seq__54135__$1);
var np = first__54136__$1;
var nc = seq__54135__$2;
var node = vec__54134;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54137 = nn;
var G__54138 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__54137,G__54138) : create_fn.call(null,G__54137,G__54138));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__54139 = nn;
var G__54140 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__54139,G__54140) : create_fn.call(null,G__54139,G__54140));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__54148 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54148,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54148,(1),null);
var seq__54151_54824 = cljs.core.seq(node_children);
var chunk__54152_54825 = null;
var count__54153_54826 = (0);
var i__54154_54827 = (0);
while(true){
if((i__54154_54827 < count__54153_54826)){
var child_struct_54829 = chunk__54152_54825.cljs$core$IIndexed$_nth$arity$2(null,i__54154_54827);
var children_54830 = shadow.dom.dom_node(child_struct_54829);
if(cljs.core.seq_QMARK_(children_54830)){
var seq__54193_54834 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_54830));
var chunk__54195_54835 = null;
var count__54196_54836 = (0);
var i__54197_54837 = (0);
while(true){
if((i__54197_54837 < count__54196_54836)){
var child_54838 = chunk__54195_54835.cljs$core$IIndexed$_nth$arity$2(null,i__54197_54837);
if(cljs.core.truth_(child_54838)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_54838);


var G__54841 = seq__54193_54834;
var G__54842 = chunk__54195_54835;
var G__54843 = count__54196_54836;
var G__54844 = (i__54197_54837 + (1));
seq__54193_54834 = G__54841;
chunk__54195_54835 = G__54842;
count__54196_54836 = G__54843;
i__54197_54837 = G__54844;
continue;
} else {
var G__54847 = seq__54193_54834;
var G__54848 = chunk__54195_54835;
var G__54849 = count__54196_54836;
var G__54850 = (i__54197_54837 + (1));
seq__54193_54834 = G__54847;
chunk__54195_54835 = G__54848;
count__54196_54836 = G__54849;
i__54197_54837 = G__54850;
continue;
}
} else {
var temp__5804__auto___54851 = cljs.core.seq(seq__54193_54834);
if(temp__5804__auto___54851){
var seq__54193_54852__$1 = temp__5804__auto___54851;
if(cljs.core.chunked_seq_QMARK_(seq__54193_54852__$1)){
var c__4550__auto___54853 = cljs.core.chunk_first(seq__54193_54852__$1);
var G__54855 = cljs.core.chunk_rest(seq__54193_54852__$1);
var G__54856 = c__4550__auto___54853;
var G__54857 = cljs.core.count(c__4550__auto___54853);
var G__54858 = (0);
seq__54193_54834 = G__54855;
chunk__54195_54835 = G__54856;
count__54196_54836 = G__54857;
i__54197_54837 = G__54858;
continue;
} else {
var child_54860 = cljs.core.first(seq__54193_54852__$1);
if(cljs.core.truth_(child_54860)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_54860);


var G__54861 = cljs.core.next(seq__54193_54852__$1);
var G__54862 = null;
var G__54863 = (0);
var G__54864 = (0);
seq__54193_54834 = G__54861;
chunk__54195_54835 = G__54862;
count__54196_54836 = G__54863;
i__54197_54837 = G__54864;
continue;
} else {
var G__54865 = cljs.core.next(seq__54193_54852__$1);
var G__54866 = null;
var G__54867 = (0);
var G__54868 = (0);
seq__54193_54834 = G__54865;
chunk__54195_54835 = G__54866;
count__54196_54836 = G__54867;
i__54197_54837 = G__54868;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_54830);
}


var G__54873 = seq__54151_54824;
var G__54874 = chunk__54152_54825;
var G__54875 = count__54153_54826;
var G__54876 = (i__54154_54827 + (1));
seq__54151_54824 = G__54873;
chunk__54152_54825 = G__54874;
count__54153_54826 = G__54875;
i__54154_54827 = G__54876;
continue;
} else {
var temp__5804__auto___54878 = cljs.core.seq(seq__54151_54824);
if(temp__5804__auto___54878){
var seq__54151_54882__$1 = temp__5804__auto___54878;
if(cljs.core.chunked_seq_QMARK_(seq__54151_54882__$1)){
var c__4550__auto___54884 = cljs.core.chunk_first(seq__54151_54882__$1);
var G__54885 = cljs.core.chunk_rest(seq__54151_54882__$1);
var G__54886 = c__4550__auto___54884;
var G__54887 = cljs.core.count(c__4550__auto___54884);
var G__54888 = (0);
seq__54151_54824 = G__54885;
chunk__54152_54825 = G__54886;
count__54153_54826 = G__54887;
i__54154_54827 = G__54888;
continue;
} else {
var child_struct_54889 = cljs.core.first(seq__54151_54882__$1);
var children_54890 = shadow.dom.dom_node(child_struct_54889);
if(cljs.core.seq_QMARK_(children_54890)){
var seq__54204_54892 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_54890));
var chunk__54206_54893 = null;
var count__54207_54894 = (0);
var i__54208_54895 = (0);
while(true){
if((i__54208_54895 < count__54207_54894)){
var child_54896 = chunk__54206_54893.cljs$core$IIndexed$_nth$arity$2(null,i__54208_54895);
if(cljs.core.truth_(child_54896)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_54896);


var G__54898 = seq__54204_54892;
var G__54899 = chunk__54206_54893;
var G__54900 = count__54207_54894;
var G__54901 = (i__54208_54895 + (1));
seq__54204_54892 = G__54898;
chunk__54206_54893 = G__54899;
count__54207_54894 = G__54900;
i__54208_54895 = G__54901;
continue;
} else {
var G__54905 = seq__54204_54892;
var G__54906 = chunk__54206_54893;
var G__54907 = count__54207_54894;
var G__54908 = (i__54208_54895 + (1));
seq__54204_54892 = G__54905;
chunk__54206_54893 = G__54906;
count__54207_54894 = G__54907;
i__54208_54895 = G__54908;
continue;
}
} else {
var temp__5804__auto___54909__$1 = cljs.core.seq(seq__54204_54892);
if(temp__5804__auto___54909__$1){
var seq__54204_54910__$1 = temp__5804__auto___54909__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54204_54910__$1)){
var c__4550__auto___54911 = cljs.core.chunk_first(seq__54204_54910__$1);
var G__54912 = cljs.core.chunk_rest(seq__54204_54910__$1);
var G__54913 = c__4550__auto___54911;
var G__54914 = cljs.core.count(c__4550__auto___54911);
var G__54915 = (0);
seq__54204_54892 = G__54912;
chunk__54206_54893 = G__54913;
count__54207_54894 = G__54914;
i__54208_54895 = G__54915;
continue;
} else {
var child_54916 = cljs.core.first(seq__54204_54910__$1);
if(cljs.core.truth_(child_54916)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_54916);


var G__54917 = cljs.core.next(seq__54204_54910__$1);
var G__54918 = null;
var G__54919 = (0);
var G__54920 = (0);
seq__54204_54892 = G__54917;
chunk__54206_54893 = G__54918;
count__54207_54894 = G__54919;
i__54208_54895 = G__54920;
continue;
} else {
var G__54924 = cljs.core.next(seq__54204_54910__$1);
var G__54925 = null;
var G__54926 = (0);
var G__54927 = (0);
seq__54204_54892 = G__54924;
chunk__54206_54893 = G__54925;
count__54207_54894 = G__54926;
i__54208_54895 = G__54927;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_54890);
}


var G__54929 = cljs.core.next(seq__54151_54882__$1);
var G__54930 = null;
var G__54931 = (0);
var G__54932 = (0);
seq__54151_54824 = G__54929;
chunk__54152_54825 = G__54930;
count__54153_54826 = G__54931;
i__54154_54827 = G__54932;
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
var G__54230 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__54230);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__54236 = cljs.core.seq(node);
var chunk__54237 = null;
var count__54238 = (0);
var i__54239 = (0);
while(true){
if((i__54239 < count__54238)){
var n = chunk__54237.cljs$core$IIndexed$_nth$arity$2(null,i__54239);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__54942 = seq__54236;
var G__54943 = chunk__54237;
var G__54944 = count__54238;
var G__54945 = (i__54239 + (1));
seq__54236 = G__54942;
chunk__54237 = G__54943;
count__54238 = G__54944;
i__54239 = G__54945;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54236);
if(temp__5804__auto__){
var seq__54236__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54236__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54236__$1);
var G__54947 = cljs.core.chunk_rest(seq__54236__$1);
var G__54948 = c__4550__auto__;
var G__54949 = cljs.core.count(c__4550__auto__);
var G__54950 = (0);
seq__54236 = G__54947;
chunk__54237 = G__54948;
count__54238 = G__54949;
i__54239 = G__54950;
continue;
} else {
var n = cljs.core.first(seq__54236__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__54951 = cljs.core.next(seq__54236__$1);
var G__54952 = null;
var G__54953 = (0);
var G__54954 = (0);
seq__54236 = G__54951;
chunk__54237 = G__54952;
count__54238 = G__54953;
i__54239 = G__54954;
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
var G__54246 = shadow.dom.dom_node(new$);
var G__54247 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__54246,G__54247);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__54254 = arguments.length;
switch (G__54254) {
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
var G__54260 = arguments.length;
switch (G__54260) {
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
var G__54297 = arguments.length;
switch (G__54297) {
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
var len__4730__auto___54972 = arguments.length;
var i__4731__auto___54973 = (0);
while(true){
if((i__4731__auto___54973 < len__4730__auto___54972)){
args__4736__auto__.push((arguments[i__4731__auto___54973]));

var G__54974 = (i__4731__auto___54973 + (1));
i__4731__auto___54973 = G__54974;
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
var seq__54324_54976 = cljs.core.seq(nodes);
var chunk__54325_54977 = null;
var count__54326_54978 = (0);
var i__54327_54979 = (0);
while(true){
if((i__54327_54979 < count__54326_54978)){
var node_54980 = chunk__54325_54977.cljs$core$IIndexed$_nth$arity$2(null,i__54327_54979);
fragment.appendChild(shadow.dom._to_dom(node_54980));


var G__54982 = seq__54324_54976;
var G__54983 = chunk__54325_54977;
var G__54984 = count__54326_54978;
var G__54985 = (i__54327_54979 + (1));
seq__54324_54976 = G__54982;
chunk__54325_54977 = G__54983;
count__54326_54978 = G__54984;
i__54327_54979 = G__54985;
continue;
} else {
var temp__5804__auto___54986 = cljs.core.seq(seq__54324_54976);
if(temp__5804__auto___54986){
var seq__54324_54987__$1 = temp__5804__auto___54986;
if(cljs.core.chunked_seq_QMARK_(seq__54324_54987__$1)){
var c__4550__auto___54990 = cljs.core.chunk_first(seq__54324_54987__$1);
var G__54991 = cljs.core.chunk_rest(seq__54324_54987__$1);
var G__54992 = c__4550__auto___54990;
var G__54993 = cljs.core.count(c__4550__auto___54990);
var G__54994 = (0);
seq__54324_54976 = G__54991;
chunk__54325_54977 = G__54992;
count__54326_54978 = G__54993;
i__54327_54979 = G__54994;
continue;
} else {
var node_54995 = cljs.core.first(seq__54324_54987__$1);
fragment.appendChild(shadow.dom._to_dom(node_54995));


var G__54997 = cljs.core.next(seq__54324_54987__$1);
var G__54998 = null;
var G__54999 = (0);
var G__55000 = (0);
seq__54324_54976 = G__54997;
chunk__54325_54977 = G__54998;
count__54326_54978 = G__54999;
i__54327_54979 = G__55000;
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
shadow.dom.fragment.cljs$lang$applyTo = (function (seq54319){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54319));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__54335_55007 = cljs.core.seq(scripts);
var chunk__54336_55008 = null;
var count__54337_55009 = (0);
var i__54338_55010 = (0);
while(true){
if((i__54338_55010 < count__54337_55009)){
var vec__54350_55011 = chunk__54336_55008.cljs$core$IIndexed$_nth$arity$2(null,i__54338_55010);
var script_tag_55012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54350_55011,(0),null);
var script_body_55013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54350_55011,(1),null);
eval(script_body_55013);


var G__55017 = seq__54335_55007;
var G__55018 = chunk__54336_55008;
var G__55019 = count__54337_55009;
var G__55020 = (i__54338_55010 + (1));
seq__54335_55007 = G__55017;
chunk__54336_55008 = G__55018;
count__54337_55009 = G__55019;
i__54338_55010 = G__55020;
continue;
} else {
var temp__5804__auto___55022 = cljs.core.seq(seq__54335_55007);
if(temp__5804__auto___55022){
var seq__54335_55023__$1 = temp__5804__auto___55022;
if(cljs.core.chunked_seq_QMARK_(seq__54335_55023__$1)){
var c__4550__auto___55024 = cljs.core.chunk_first(seq__54335_55023__$1);
var G__55025 = cljs.core.chunk_rest(seq__54335_55023__$1);
var G__55026 = c__4550__auto___55024;
var G__55027 = cljs.core.count(c__4550__auto___55024);
var G__55028 = (0);
seq__54335_55007 = G__55025;
chunk__54336_55008 = G__55026;
count__54337_55009 = G__55027;
i__54338_55010 = G__55028;
continue;
} else {
var vec__54353_55030 = cljs.core.first(seq__54335_55023__$1);
var script_tag_55031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54353_55030,(0),null);
var script_body_55032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54353_55030,(1),null);
eval(script_body_55032);


var G__55034 = cljs.core.next(seq__54335_55023__$1);
var G__55035 = null;
var G__55036 = (0);
var G__55037 = (0);
seq__54335_55007 = G__55034;
chunk__54336_55008 = G__55035;
count__54337_55009 = G__55036;
i__54338_55010 = G__55037;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__54356){
var vec__54357 = p__54356;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54357,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54357,(1),null);
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
var G__54360 = shadow.dom.dom_node(el);
var G__54361 = cls;
return goog.dom.getAncestorByClass(G__54360,G__54361);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__54363 = arguments.length;
switch (G__54363) {
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
var G__54367 = shadow.dom.dom_node(el);
var G__54368 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__54367,G__54368);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__54369 = shadow.dom.dom_node(el);
var G__54370 = cljs.core.name(tag);
var G__54371 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__54369,G__54370,G__54371);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__54374 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__54374);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__54376 = shadow.dom.dom_node(dom);
var G__54377 = value;
return goog.dom.forms.setValue(G__54376,G__54377);
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
var seq__54379 = cljs.core.seq(style_keys);
var chunk__54380 = null;
var count__54381 = (0);
var i__54382 = (0);
while(true){
if((i__54382 < count__54381)){
var it = chunk__54380.cljs$core$IIndexed$_nth$arity$2(null,i__54382);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__55051 = seq__54379;
var G__55052 = chunk__54380;
var G__55053 = count__54381;
var G__55054 = (i__54382 + (1));
seq__54379 = G__55051;
chunk__54380 = G__55052;
count__54381 = G__55053;
i__54382 = G__55054;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54379);
if(temp__5804__auto__){
var seq__54379__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54379__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__54379__$1);
var G__55056 = cljs.core.chunk_rest(seq__54379__$1);
var G__55057 = c__4550__auto__;
var G__55058 = cljs.core.count(c__4550__auto__);
var G__55059 = (0);
seq__54379 = G__55056;
chunk__54380 = G__55057;
count__54381 = G__55058;
i__54382 = G__55059;
continue;
} else {
var it = cljs.core.first(seq__54379__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__55060 = cljs.core.next(seq__54379__$1);
var G__55061 = null;
var G__55062 = (0);
var G__55063 = (0);
seq__54379 = G__55060;
chunk__54380 = G__55061;
count__54381 = G__55062;
i__54382 = G__55063;
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

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k54387,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__54396 = k54387;
var G__54396__$1 = (((G__54396 instanceof cljs.core.Keyword))?G__54396.fqn:null);
switch (G__54396__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54387,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__54397){
var vec__54398 = p__54397;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54398,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54398,(1),null);
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

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54386){
var self__ = this;
var G__54386__$1 = this;
return (new cljs.core.RecordIter((0),G__54386__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__54411 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__54411(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54388,other54389){
var self__ = this;
var this54388__$1 = this;
return (((!((other54389 == null)))) && ((this54388__$1.constructor === other54389.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54388__$1.x,other54389.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54388__$1.y,other54389.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54388__$1.__extmap,other54389.__extmap)));
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

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__54386){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__54422 = cljs.core.keyword_identical_QMARK_;
var expr__54423 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__54425 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__54426 = expr__54423;
return (pred__54422.cljs$core$IFn$_invoke$arity$2 ? pred__54422.cljs$core$IFn$_invoke$arity$2(G__54425,G__54426) : pred__54422.call(null,G__54425,G__54426));
})())){
return (new shadow.dom.Coordinate(G__54386,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__54428 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__54429 = expr__54423;
return (pred__54422.cljs$core$IFn$_invoke$arity$2 ? pred__54422.cljs$core$IFn$_invoke$arity$2(G__54428,G__54429) : pred__54422.call(null,G__54428,G__54429));
})())){
return (new shadow.dom.Coordinate(self__.x,G__54386,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__54386),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__54386){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__54386,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__54395){
var extmap__4424__auto__ = (function (){var G__54442 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54395,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__54395)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__54442);
} else {
return G__54442;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__54395),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__54395),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__54447 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__54447);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__54453 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__54453);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__54457 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__54457);
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

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k54461,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__54474 = k54461;
var G__54474__$1 = (((G__54474 instanceof cljs.core.Keyword))?G__54474.fqn:null);
switch (G__54474__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54461,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__54479){
var vec__54480 = p__54479;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54480,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54480,(1),null);
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

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54460){
var self__ = this;
var G__54460__$1 = this;
return (new cljs.core.RecordIter((0),G__54460__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__54491 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__54491(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54462,other54463){
var self__ = this;
var this54462__$1 = this;
return (((!((other54463 == null)))) && ((this54462__$1.constructor === other54463.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54462__$1.w,other54463.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54462__$1.h,other54463.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54462__$1.__extmap,other54463.__extmap)));
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

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__54460){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__54500 = cljs.core.keyword_identical_QMARK_;
var expr__54501 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__54503 = new cljs.core.Keyword(null,"w","w",354169001);
var G__54504 = expr__54501;
return (pred__54500.cljs$core$IFn$_invoke$arity$2 ? pred__54500.cljs$core$IFn$_invoke$arity$2(G__54503,G__54504) : pred__54500.call(null,G__54503,G__54504));
})())){
return (new shadow.dom.Size(G__54460,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__54506 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__54507 = expr__54501;
return (pred__54500.cljs$core$IFn$_invoke$arity$2 ? pred__54500.cljs$core$IFn$_invoke$arity$2(G__54506,G__54507) : pred__54500.call(null,G__54506,G__54507));
})())){
return (new shadow.dom.Size(self__.w,G__54460,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__54460),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__54460){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__54460,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__54466){
var extmap__4424__auto__ = (function (){var G__54517 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54466,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__54466)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__54517);
} else {
return G__54517;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__54466),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__54466),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__54518 = shadow.dom.dom_node(el);
return goog.style.getSize(G__54518);
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
var G__55129 = (i + (1));
var G__55130 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__55129;
ret = G__55130;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54525){
var vec__54526 = p__54525;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54526,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54526,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__54530 = arguments.length;
switch (G__54530) {
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
var G__54532_55138 = new_node;
var G__54533_55139 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__54532_55138,G__54533_55139);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__54534_55140 = new_node;
var G__54535_55141 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__54534_55140,G__54535_55141);

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
var G__55156 = ps;
var G__55157 = (i + (1));
el__$1 = G__55156;
i = G__55157;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__54536 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__54536);
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
var G__54537 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__54537);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__54538 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__54538);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__54539 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54539,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54539,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54539,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__54542_55170 = cljs.core.seq(props);
var chunk__54543_55171 = null;
var count__54544_55172 = (0);
var i__54545_55173 = (0);
while(true){
if((i__54545_55173 < count__54544_55172)){
var vec__54557_55175 = chunk__54543_55171.cljs$core$IIndexed$_nth$arity$2(null,i__54545_55173);
var k_55176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54557_55175,(0),null);
var v_55177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54557_55175,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_55176);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_55176),v_55177);


var G__55180 = seq__54542_55170;
var G__55181 = chunk__54543_55171;
var G__55182 = count__54544_55172;
var G__55183 = (i__54545_55173 + (1));
seq__54542_55170 = G__55180;
chunk__54543_55171 = G__55181;
count__54544_55172 = G__55182;
i__54545_55173 = G__55183;
continue;
} else {
var temp__5804__auto___55186 = cljs.core.seq(seq__54542_55170);
if(temp__5804__auto___55186){
var seq__54542_55187__$1 = temp__5804__auto___55186;
if(cljs.core.chunked_seq_QMARK_(seq__54542_55187__$1)){
var c__4550__auto___55188 = cljs.core.chunk_first(seq__54542_55187__$1);
var G__55190 = cljs.core.chunk_rest(seq__54542_55187__$1);
var G__55191 = c__4550__auto___55188;
var G__55192 = cljs.core.count(c__4550__auto___55188);
var G__55193 = (0);
seq__54542_55170 = G__55190;
chunk__54543_55171 = G__55191;
count__54544_55172 = G__55192;
i__54545_55173 = G__55193;
continue;
} else {
var vec__54563_55194 = cljs.core.first(seq__54542_55187__$1);
var k_55195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54563_55194,(0),null);
var v_55196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54563_55194,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_55195);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_55195),v_55196);


var G__55198 = cljs.core.next(seq__54542_55187__$1);
var G__55199 = null;
var G__55200 = (0);
var G__55201 = (0);
seq__54542_55170 = G__55198;
chunk__54543_55171 = G__55199;
count__54544_55172 = G__55200;
i__54545_55173 = G__55201;
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
var vec__54573 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54573,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54573,(1),null);
var seq__54577_55204 = cljs.core.seq(node_children);
var chunk__54579_55205 = null;
var count__54580_55206 = (0);
var i__54581_55207 = (0);
while(true){
if((i__54581_55207 < count__54580_55206)){
var child_struct_55213 = chunk__54579_55205.cljs$core$IIndexed$_nth$arity$2(null,i__54581_55207);
if((!((child_struct_55213 == null)))){
if(typeof child_struct_55213 === 'string'){
var text_55214 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_55214),child_struct_55213].join(''));
} else {
var children_55216 = shadow.dom.svg_node(child_struct_55213);
if(cljs.core.seq_QMARK_(children_55216)){
var seq__54608_55217 = cljs.core.seq(children_55216);
var chunk__54610_55218 = null;
var count__54611_55219 = (0);
var i__54612_55220 = (0);
while(true){
if((i__54612_55220 < count__54611_55219)){
var child_55221 = chunk__54610_55218.cljs$core$IIndexed$_nth$arity$2(null,i__54612_55220);
if(cljs.core.truth_(child_55221)){
node.appendChild(child_55221);


var G__55222 = seq__54608_55217;
var G__55223 = chunk__54610_55218;
var G__55224 = count__54611_55219;
var G__55225 = (i__54612_55220 + (1));
seq__54608_55217 = G__55222;
chunk__54610_55218 = G__55223;
count__54611_55219 = G__55224;
i__54612_55220 = G__55225;
continue;
} else {
var G__55226 = seq__54608_55217;
var G__55227 = chunk__54610_55218;
var G__55228 = count__54611_55219;
var G__55229 = (i__54612_55220 + (1));
seq__54608_55217 = G__55226;
chunk__54610_55218 = G__55227;
count__54611_55219 = G__55228;
i__54612_55220 = G__55229;
continue;
}
} else {
var temp__5804__auto___55230 = cljs.core.seq(seq__54608_55217);
if(temp__5804__auto___55230){
var seq__54608_55231__$1 = temp__5804__auto___55230;
if(cljs.core.chunked_seq_QMARK_(seq__54608_55231__$1)){
var c__4550__auto___55232 = cljs.core.chunk_first(seq__54608_55231__$1);
var G__55233 = cljs.core.chunk_rest(seq__54608_55231__$1);
var G__55234 = c__4550__auto___55232;
var G__55235 = cljs.core.count(c__4550__auto___55232);
var G__55236 = (0);
seq__54608_55217 = G__55233;
chunk__54610_55218 = G__55234;
count__54611_55219 = G__55235;
i__54612_55220 = G__55236;
continue;
} else {
var child_55237 = cljs.core.first(seq__54608_55231__$1);
if(cljs.core.truth_(child_55237)){
node.appendChild(child_55237);


var G__55238 = cljs.core.next(seq__54608_55231__$1);
var G__55239 = null;
var G__55240 = (0);
var G__55241 = (0);
seq__54608_55217 = G__55238;
chunk__54610_55218 = G__55239;
count__54611_55219 = G__55240;
i__54612_55220 = G__55241;
continue;
} else {
var G__55243 = cljs.core.next(seq__54608_55231__$1);
var G__55244 = null;
var G__55245 = (0);
var G__55246 = (0);
seq__54608_55217 = G__55243;
chunk__54610_55218 = G__55244;
count__54611_55219 = G__55245;
i__54612_55220 = G__55246;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_55216);
}
}


var G__55247 = seq__54577_55204;
var G__55248 = chunk__54579_55205;
var G__55249 = count__54580_55206;
var G__55250 = (i__54581_55207 + (1));
seq__54577_55204 = G__55247;
chunk__54579_55205 = G__55248;
count__54580_55206 = G__55249;
i__54581_55207 = G__55250;
continue;
} else {
var G__55251 = seq__54577_55204;
var G__55252 = chunk__54579_55205;
var G__55253 = count__54580_55206;
var G__55254 = (i__54581_55207 + (1));
seq__54577_55204 = G__55251;
chunk__54579_55205 = G__55252;
count__54580_55206 = G__55253;
i__54581_55207 = G__55254;
continue;
}
} else {
var temp__5804__auto___55255 = cljs.core.seq(seq__54577_55204);
if(temp__5804__auto___55255){
var seq__54577_55256__$1 = temp__5804__auto___55255;
if(cljs.core.chunked_seq_QMARK_(seq__54577_55256__$1)){
var c__4550__auto___55257 = cljs.core.chunk_first(seq__54577_55256__$1);
var G__55258 = cljs.core.chunk_rest(seq__54577_55256__$1);
var G__55259 = c__4550__auto___55257;
var G__55260 = cljs.core.count(c__4550__auto___55257);
var G__55261 = (0);
seq__54577_55204 = G__55258;
chunk__54579_55205 = G__55259;
count__54580_55206 = G__55260;
i__54581_55207 = G__55261;
continue;
} else {
var child_struct_55262 = cljs.core.first(seq__54577_55256__$1);
if((!((child_struct_55262 == null)))){
if(typeof child_struct_55262 === 'string'){
var text_55264 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_55264),child_struct_55262].join(''));
} else {
var children_55265 = shadow.dom.svg_node(child_struct_55262);
if(cljs.core.seq_QMARK_(children_55265)){
var seq__54619_55267 = cljs.core.seq(children_55265);
var chunk__54621_55268 = null;
var count__54622_55269 = (0);
var i__54623_55270 = (0);
while(true){
if((i__54623_55270 < count__54622_55269)){
var child_55271 = chunk__54621_55268.cljs$core$IIndexed$_nth$arity$2(null,i__54623_55270);
if(cljs.core.truth_(child_55271)){
node.appendChild(child_55271);


var G__55272 = seq__54619_55267;
var G__55273 = chunk__54621_55268;
var G__55274 = count__54622_55269;
var G__55275 = (i__54623_55270 + (1));
seq__54619_55267 = G__55272;
chunk__54621_55268 = G__55273;
count__54622_55269 = G__55274;
i__54623_55270 = G__55275;
continue;
} else {
var G__55276 = seq__54619_55267;
var G__55277 = chunk__54621_55268;
var G__55278 = count__54622_55269;
var G__55279 = (i__54623_55270 + (1));
seq__54619_55267 = G__55276;
chunk__54621_55268 = G__55277;
count__54622_55269 = G__55278;
i__54623_55270 = G__55279;
continue;
}
} else {
var temp__5804__auto___55280__$1 = cljs.core.seq(seq__54619_55267);
if(temp__5804__auto___55280__$1){
var seq__54619_55281__$1 = temp__5804__auto___55280__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54619_55281__$1)){
var c__4550__auto___55282 = cljs.core.chunk_first(seq__54619_55281__$1);
var G__55283 = cljs.core.chunk_rest(seq__54619_55281__$1);
var G__55284 = c__4550__auto___55282;
var G__55285 = cljs.core.count(c__4550__auto___55282);
var G__55286 = (0);
seq__54619_55267 = G__55283;
chunk__54621_55268 = G__55284;
count__54622_55269 = G__55285;
i__54623_55270 = G__55286;
continue;
} else {
var child_55287 = cljs.core.first(seq__54619_55281__$1);
if(cljs.core.truth_(child_55287)){
node.appendChild(child_55287);


var G__55288 = cljs.core.next(seq__54619_55281__$1);
var G__55289 = null;
var G__55290 = (0);
var G__55291 = (0);
seq__54619_55267 = G__55288;
chunk__54621_55268 = G__55289;
count__54622_55269 = G__55290;
i__54623_55270 = G__55291;
continue;
} else {
var G__55292 = cljs.core.next(seq__54619_55281__$1);
var G__55293 = null;
var G__55294 = (0);
var G__55295 = (0);
seq__54619_55267 = G__55292;
chunk__54621_55268 = G__55293;
count__54622_55269 = G__55294;
i__54623_55270 = G__55295;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_55265);
}
}


var G__55300 = cljs.core.next(seq__54577_55256__$1);
var G__55301 = null;
var G__55302 = (0);
var G__55303 = (0);
seq__54577_55204 = G__55300;
chunk__54579_55205 = G__55301;
count__54580_55206 = G__55302;
i__54581_55207 = G__55303;
continue;
} else {
var G__55304 = cljs.core.next(seq__54577_55256__$1);
var G__55305 = null;
var G__55306 = (0);
var G__55307 = (0);
seq__54577_55204 = G__55304;
chunk__54579_55205 = G__55305;
count__54580_55206 = G__55306;
i__54581_55207 = G__55307;
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

var G__54628_55308 = shadow.dom._to_svg;
var G__54629_55309 = "string";
var G__54630_55310 = ((function (G__54628_55308,G__54629_55309){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__54628_55308,G__54629_55309))
;
goog.object.set(G__54628_55308,G__54629_55309,G__54630_55310);

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

var G__54636_55316 = shadow.dom._to_svg;
var G__54637_55317 = "null";
var G__54638_55318 = ((function (G__54636_55316,G__54637_55317){
return (function (_){
return null;
});})(G__54636_55316,G__54637_55317))
;
goog.object.set(G__54636_55316,G__54637_55317,G__54638_55318);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55320 = arguments.length;
var i__4731__auto___55321 = (0);
while(true){
if((i__4731__auto___55321 < len__4730__auto___55320)){
args__4736__auto__.push((arguments[i__4731__auto___55321]));

var G__55322 = (i__4731__auto___55321 + (1));
i__4731__auto___55321 = G__55322;
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
shadow.dom.svg.cljs$lang$applyTo = (function (seq54645){
var G__54646 = cljs.core.first(seq54645);
var seq54645__$1 = cljs.core.next(seq54645);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54646,seq54645__$1);
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
var G__54660 = arguments.length;
switch (G__54660) {
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
var G__54663_55331 = shadow.dom.dom_node(el);
var G__54664_55332 = cljs.core.name(event);
var G__54665_55333 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__54663_55331,G__54664_55332,G__54665_55333) : shadow.dom.dom_listen.call(null,G__54663_55331,G__54664_55332,G__54665_55333));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__51860__auto___55334 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51860__auto___55334,buf,chan,event_fn){
return (function (){
var f__51861__auto__ = (function (){var switch__51724__auto__ = ((function (c__51860__auto___55334,buf,chan,event_fn){
return (function (state_54670){
var state_val_54671 = (state_54670[(1)]);
if((state_val_54671 === (1))){
var state_54670__$1 = state_54670;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54670__$1,(2),once_or_cleanup);
} else {
if((state_val_54671 === (2))){
var inst_54667 = (state_54670[(2)]);
var inst_54668 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_54670__$1 = (function (){var statearr_54672 = state_54670;
(statearr_54672[(7)] = inst_54667);

return statearr_54672;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54670__$1,inst_54668);
} else {
return null;
}
}
});})(c__51860__auto___55334,buf,chan,event_fn))
;
return ((function (switch__51724__auto__,c__51860__auto___55334,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__51725__auto__ = null;
var shadow$dom$state_machine__51725__auto____0 = (function (){
var statearr_54674 = [null,null,null,null,null,null,null,null];
(statearr_54674[(0)] = shadow$dom$state_machine__51725__auto__);

(statearr_54674[(1)] = (1));

return statearr_54674;
});
var shadow$dom$state_machine__51725__auto____1 = (function (state_54670){
while(true){
var ret_value__51726__auto__ = (function (){try{while(true){
var result__51727__auto__ = switch__51724__auto__(state_54670);
if(cljs.core.keyword_identical_QMARK_(result__51727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51727__auto__;
}
break;
}
}catch (e54675){if((e54675 instanceof Object)){
var ex__51728__auto__ = e54675;
var statearr_54676_55335 = state_54670;
(statearr_54676_55335[(5)] = ex__51728__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54675;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55336 = state_54670;
state_54670 = G__55336;
continue;
} else {
return ret_value__51726__auto__;
}
break;
}
});
shadow$dom$state_machine__51725__auto__ = function(state_54670){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__51725__auto____0.call(this);
case 1:
return shadow$dom$state_machine__51725__auto____1.call(this,state_54670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__51725__auto____0;
shadow$dom$state_machine__51725__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__51725__auto____1;
return shadow$dom$state_machine__51725__auto__;
})()
;})(switch__51724__auto__,c__51860__auto___55334,buf,chan,event_fn))
})();
var state__51862__auto__ = (function (){var statearr_54678 = (f__51861__auto__.cljs$core$IFn$_invoke$arity$0 ? f__51861__auto__.cljs$core$IFn$_invoke$arity$0() : f__51861__auto__.call(null));
(statearr_54678[(6)] = c__51860__auto___55334);

return statearr_54678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51862__auto__);
});})(c__51860__auto___55334,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
