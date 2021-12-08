// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__9477 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__9478 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__9478);

try{return reagent.dom.global$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__9479 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__9480 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__9480);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__9479);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__9477);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__9482 = arguments.length;
switch (G__9482) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
(reagent.impl.template.find_dom_node = reagent.dom.dom_node);
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__9484_9488 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__9485_9489 = null;
var count__9486_9490 = (0);
var i__9487_9491 = (0);
while(true){
if((i__9487_9491 < count__9486_9490)){
var v_9492 = cljs.core._nth.call(null,chunk__9485_9489,i__9487_9491);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_9492);


var G__9493 = seq__9484_9488;
var G__9494 = chunk__9485_9489;
var G__9495 = count__9486_9490;
var G__9496 = (i__9487_9491 + (1));
seq__9484_9488 = G__9493;
chunk__9485_9489 = G__9494;
count__9486_9490 = G__9495;
i__9487_9491 = G__9496;
continue;
} else {
var temp__5720__auto___9497 = cljs.core.seq.call(null,seq__9484_9488);
if(temp__5720__auto___9497){
var seq__9484_9498__$1 = temp__5720__auto___9497;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9484_9498__$1)){
var c__4556__auto___9499 = cljs.core.chunk_first.call(null,seq__9484_9498__$1);
var G__9500 = cljs.core.chunk_rest.call(null,seq__9484_9498__$1);
var G__9501 = c__4556__auto___9499;
var G__9502 = cljs.core.count.call(null,c__4556__auto___9499);
var G__9503 = (0);
seq__9484_9488 = G__9500;
chunk__9485_9489 = G__9501;
count__9486_9490 = G__9502;
i__9487_9491 = G__9503;
continue;
} else {
var v_9504 = cljs.core.first.call(null,seq__9484_9498__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_9504);


var G__9505 = cljs.core.next.call(null,seq__9484_9498__$1);
var G__9506 = null;
var G__9507 = (0);
var G__9508 = (0);
seq__9484_9488 = G__9505;
chunk__9485_9489 = G__9506;
count__9486_9490 = G__9507;
i__9487_9491 = G__9508;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map
