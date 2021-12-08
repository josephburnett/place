// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__9135__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9135 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9136__i = 0, G__9136__a = new Array(arguments.length -  0);
while (G__9136__i < G__9136__a.length) {G__9136__a[G__9136__i] = arguments[G__9136__i + 0]; ++G__9136__i;}
  args = new cljs.core.IndexedSeq(G__9136__a,0,null);
} 
return G__9135__delegate.call(this,args);};
G__9135.cljs$lang$maxFixedArity = 0;
G__9135.cljs$lang$applyTo = (function (arglist__9137){
var args = cljs.core.seq(arglist__9137);
return G__9135__delegate(args);
});
G__9135.cljs$core$IFn$_invoke$arity$variadic = G__9135__delegate;
return G__9135;
})()
);

(o.error = (function() { 
var G__9138__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9138 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9139__i = 0, G__9139__a = new Array(arguments.length -  0);
while (G__9139__i < G__9139__a.length) {G__9139__a[G__9139__i] = arguments[G__9139__i + 0]; ++G__9139__i;}
  args = new cljs.core.IndexedSeq(G__9139__a,0,null);
} 
return G__9138__delegate.call(this,args);};
G__9138.cljs$lang$maxFixedArity = 0;
G__9138.cljs$lang$applyTo = (function (arglist__9140){
var args = cljs.core.seq(arglist__9140);
return G__9138__delegate(args);
});
G__9138.cljs$core$IFn$_invoke$arity$variadic = G__9138__delegate;
return G__9138;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
