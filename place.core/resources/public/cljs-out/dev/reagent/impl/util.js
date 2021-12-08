// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('clojure.string');
reagent.impl.util.is_client = (((typeof window !== 'undefined')) && ((!((window.document == null)))));
reagent.impl.util._STAR_non_reactive_STAR_ = false;
reagent.impl.util.memoize_1 = (function reagent$impl$util$memoize_1(f){
var mem = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return (function (arg){
var v = cljs.core.get.call(null,cljs.core.deref.call(null,mem),arg);
if((!((v == null)))){
return v;
} else {
var ret = f.call(null,arg);
cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,arg,ret);

return ret;
}
});
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function reagent$impl$util$capitalize(s){
if((cljs.core.count.call(null,s) < (2))){
return clojure.string.upper_case.call(null,s);
} else {
return [clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,(0),(1))),cljs.core.subs.call(null,s,(1))].join('');
}
});
reagent.impl.util.dash_to_prop_name = (function reagent$impl$util$dash_to_prop_name(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name.call(null,dashed);
var vec__9016 = clojure.string.split.call(null,name_str,/-/);
var seq__9017 = cljs.core.seq.call(null,vec__9016);
var first__9018 = cljs.core.first.call(null,seq__9017);
var seq__9017__$1 = cljs.core.next.call(null,seq__9017);
var start = first__9018;
var parts = seq__9017__$1;
if(cljs.core.truth_(reagent.impl.util.dont_camel_case.call(null,start))){
return name_str;
} else {
return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,reagent.impl.util.capitalize,parts));
}
}
});
reagent.impl.util.dash_to_method_name = (function reagent$impl$util$dash_to_method_name(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name.call(null,dashed);
var name_str__$1 = clojure.string.replace.call(null,name_str,/(unsafe|UNSAFE)[-_]/,"UNSAFE_");
var vec__9019 = clojure.string.split.call(null,name_str__$1,/-/);
var seq__9020 = cljs.core.seq.call(null,vec__9019);
var first__9021 = cljs.core.first.call(null,seq__9020);
var seq__9020__$1 = cljs.core.next.call(null,seq__9020);
var start = first__9021;
var parts = seq__9020__$1;
return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,reagent.impl.util.capitalize,parts));
}
});
reagent.impl.util.fun_name = (function reagent$impl$util$fun_name(f){
var n = (function (){var or__4126__auto__ = ((cljs.core.fn_QMARK_.call(null,f))?(function (){var or__4126__auto__ = f.displayName;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var n = f.name;
if(((typeof n === 'string') && (cljs.core.seq.call(null,n)))){
return n;
} else {
return null;
}
}
})():false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (((((!((f == null))))?(((((f.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === f.cljs$core$INamed$))))?true:false):false))?cljs.core.name.call(null,f):false);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var m = cljs.core.meta.call(null,f);
if(cljs.core.map_QMARK_.call(null,m)){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(n)){
return clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"$",".");
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.Fn}
*/
reagent.impl.util.PartialFn = (function (pfn,f,args){
this.pfn = pfn;
this.f = f;
this.args = args;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reagent.impl.util.PartialFn.prototype.cljs$core$Fn$ = cljs.core.PROTOCOL_SENTINEL);

(reagent.impl.util.PartialFn.prototype.call = (function() {
var G__9029 = null;
var G__9029__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null);
});
var G__9029__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a);
});
var G__9029__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b);
});
var G__9029__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c);
});
var G__9029__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d);
});
var G__9029__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e);
});
var G__9029__7 = (function (self__,a,b,c,d,e,f__$1){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1);
});
var G__9029__8 = (function (self__,a,b,c,d,e,f__$1,g){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g);
});
var G__9029__9 = (function (self__,a,b,c,d,e,f__$1,g,h){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h);
});
var G__9029__10 = (function (self__,a,b,c,d,e,f__$1,g,h,i){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i);
});
var G__9029__11 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j);
});
var G__9029__12 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k);
});
var G__9029__13 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l);
});
var G__9029__14 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
});
var G__9029__15 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
});
var G__9029__16 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
});
var G__9029__17 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
});
var G__9029__18 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
});
var G__9029__19 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
});
var G__9029__20 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
});
var G__9029__21 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
});
var G__9029__22 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return cljs.core.apply.call(null,self__.pfn,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
});
G__9029 = function(self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__9029__1.call(this,self__);
case 2:
return G__9029__2.call(this,self__,a);
case 3:
return G__9029__3.call(this,self__,a,b);
case 4:
return G__9029__4.call(this,self__,a,b,c);
case 5:
return G__9029__5.call(this,self__,a,b,c,d);
case 6:
return G__9029__6.call(this,self__,a,b,c,d,e);
case 7:
return G__9029__7.call(this,self__,a,b,c,d,e,f__$1);
case 8:
return G__9029__8.call(this,self__,a,b,c,d,e,f__$1,g);
case 9:
return G__9029__9.call(this,self__,a,b,c,d,e,f__$1,g,h);
case 10:
return G__9029__10.call(this,self__,a,b,c,d,e,f__$1,g,h,i);
case 11:
return G__9029__11.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j);
case 12:
return G__9029__12.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k);
case 13:
return G__9029__13.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l);
case 14:
return G__9029__14.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
case 15:
return G__9029__15.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
case 16:
return G__9029__16.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
case 17:
return G__9029__17.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__9029__18.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__9029__19.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__9029__20.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__9029__21.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__9029__22.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__9029.cljs$core$IFn$_invoke$arity$1 = G__9029__1;
G__9029.cljs$core$IFn$_invoke$arity$2 = G__9029__2;
G__9029.cljs$core$IFn$_invoke$arity$3 = G__9029__3;
G__9029.cljs$core$IFn$_invoke$arity$4 = G__9029__4;
G__9029.cljs$core$IFn$_invoke$arity$5 = G__9029__5;
G__9029.cljs$core$IFn$_invoke$arity$6 = G__9029__6;
G__9029.cljs$core$IFn$_invoke$arity$7 = G__9029__7;
G__9029.cljs$core$IFn$_invoke$arity$8 = G__9029__8;
G__9029.cljs$core$IFn$_invoke$arity$9 = G__9029__9;
G__9029.cljs$core$IFn$_invoke$arity$10 = G__9029__10;
G__9029.cljs$core$IFn$_invoke$arity$11 = G__9029__11;
G__9029.cljs$core$IFn$_invoke$arity$12 = G__9029__12;
G__9029.cljs$core$IFn$_invoke$arity$13 = G__9029__13;
G__9029.cljs$core$IFn$_invoke$arity$14 = G__9029__14;
G__9029.cljs$core$IFn$_invoke$arity$15 = G__9029__15;
G__9029.cljs$core$IFn$_invoke$arity$16 = G__9029__16;
G__9029.cljs$core$IFn$_invoke$arity$17 = G__9029__17;
G__9029.cljs$core$IFn$_invoke$arity$18 = G__9029__18;
G__9029.cljs$core$IFn$_invoke$arity$19 = G__9029__19;
G__9029.cljs$core$IFn$_invoke$arity$20 = G__9029__20;
G__9029.cljs$core$IFn$_invoke$arity$21 = G__9029__21;
G__9029.cljs$core$IFn$_invoke$arity$22 = G__9029__22;
return G__9029;
})()
);

(reagent.impl.util.PartialFn.prototype.apply = (function (self__,args9028){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9028)));
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return self__.pfn.call(null);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f__$1){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f__$1,g){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f__$1,g,h){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f__$1,g,h,i){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f__$1,g,h,i,j){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f__$1,g,h,i,j,k){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
return cljs.core.apply.call(null,self__.pfn,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof reagent.impl.util.PartialFn)) && (cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args)));
}));

(reagent.impl.util.PartialFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
}));

(reagent.impl.util.PartialFn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pfn","pfn",-513383568,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
}));

(reagent.impl.util.PartialFn.cljs$lang$type = true);

(reagent.impl.util.PartialFn.cljs$lang$ctorStr = "reagent.impl.util/PartialFn");

(reagent.impl.util.PartialFn.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"reagent.impl.util/PartialFn");
}));

/**
 * Positional factory function for reagent.impl.util/PartialFn.
 */
reagent.impl.util.__GT_PartialFn = (function reagent$impl$util$__GT_PartialFn(pfn,f,args){
return (new reagent.impl.util.PartialFn(pfn,f,args));
});

reagent.impl.util.make_partial_fn = (function reagent$impl$util$make_partial_fn(f,args){
return reagent.impl.util.__GT_PartialFn.call(null,cljs.core.apply.call(null,cljs.core.partial,f,args),f,args);
});
reagent.impl.util.named_QMARK_ = (function reagent$impl$util$named_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)));
});
reagent.impl.util.class_names = (function reagent$impl$util$class_names(var_args){
var G__9034 = arguments.length;
switch (G__9034) {
case 0:
return reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___9036 = arguments.length;
var i__4737__auto___9037 = (0);
while(true){
if((i__4737__auto___9037 < len__4736__auto___9036)){
args_arr__4757__auto__.push((arguments[i__4737__auto___9037]));

var G__9038 = (i__4737__auto___9037 + (1));
i__4737__auto___9037 = G__9038;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1 = (function (class$){
if(cljs.core.coll_QMARK_.call(null,class$)){
var classes = cljs.core.keep.call(null,(function (c){
if(cljs.core.truth_(c)){
if(reagent.impl.util.named_QMARK_.call(null,c)){
return cljs.core.name.call(null,c);
} else {
return c;
}
} else {
return null;
}
}),class$);
if(cljs.core.seq.call(null,classes)){
return clojure.string.join.call(null," ",classes);
} else {
return null;
}
} else {
if(reagent.impl.util.named_QMARK_.call(null,class$)){
return cljs.core.name.call(null,class$);
} else {
return class$;
}
}
}));

(reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(cljs.core.truth_(a)){
if(cljs.core.truth_(b)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.util.class_names.call(null,a))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.util.class_names.call(null,b))].join('');
} else {
return reagent.impl.util.class_names.call(null,a);
}
} else {
return reagent.impl.util.class_names.call(null,b);
}
}));

(reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,rst){
return cljs.core.reduce.call(null,reagent.impl.util.class_names,reagent.impl.util.class_names.call(null,a,b),rst);
}));

/** @this {Function} */
(reagent.impl.util.class_names.cljs$lang$applyTo = (function (seq9031){
var G__9032 = cljs.core.first.call(null,seq9031);
var seq9031__$1 = cljs.core.next.call(null,seq9031);
var G__9033 = cljs.core.first.call(null,seq9031__$1);
var seq9031__$2 = cljs.core.next.call(null,seq9031__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9032,G__9033,seq9031__$2);
}));

(reagent.impl.util.class_names.cljs$lang$maxFixedArity = (2));

reagent.impl.util.merge_class = (function reagent$impl$util$merge_class(p1,p2){
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",-2030961996),reagent.impl.util.class_names.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2)));
});
reagent.impl.util.merge_style = (function reagent$impl$util$merge_style(p1,p2){
var style = (function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__5720__auto__)){
var s1 = temp__5720__auto__;
var temp__5720__auto____$1 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__5720__auto____$1)){
var s2 = temp__5720__auto____$1;
return cljs.core.merge.call(null,s1,s2);
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"style","style",-496642736),style);
}
});
reagent.impl.util.merge_props = (function reagent$impl$util$merge_props(var_args){
var G__9043 = arguments.length;
switch (G__9043) {
case 0:
return reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___9045 = arguments.length;
var i__4737__auto___9046 = (0);
while(true){
if((i__4737__auto___9046 < len__4736__auto___9045)){
args_arr__4757__auto__.push((arguments[i__4737__auto___9046]));

var G__9047 = (i__4737__auto___9046 + (1));
i__4737__auto___9046 = G__9047;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$1 = (function (p){
var temp__5718__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core.truth_(temp__5718__auto__)){
var c = temp__5718__auto__;
return cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"class","class",-2030961996),reagent.impl.util.class_names.call(null,c));
} else {
return p;
}
}));

(reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$2 = (function (p1,p2){
if((p1 == null)){
var temp__5718__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__5718__auto__)){
var c = temp__5718__auto__;
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",-2030961996),reagent.impl.util.class_names.call(null,c));
} else {
return p2;
}
} else {
if(cljs.core.map_QMARK_.call(null,p1)){
} else {
throw (new Error(["Assert failed: ",["Property must be a map, not ",cljs.core.pr_str.call(null,p1)].join(''),"\n","(map? p1)"].join('')));
}

return cljs.core.merge.call(null,p1,reagent.impl.util.merge_style.call(null,p1,reagent.impl.util.merge_class.call(null,p1,p2)));
}
}));

(reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$variadic = (function (p1,p2,ps){
return cljs.core.reduce.call(null,reagent.impl.util.merge_props,reagent.impl.util.merge_props.call(null,p1,p2),ps);
}));

/** @this {Function} */
(reagent.impl.util.merge_props.cljs$lang$applyTo = (function (seq9040){
var G__9041 = cljs.core.first.call(null,seq9040);
var seq9040__$1 = cljs.core.next.call(null,seq9040);
var G__9042 = cljs.core.first.call(null,seq9040__$1);
var seq9040__$2 = cljs.core.next.call(null,seq9040__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9041,G__9042,seq9040__$2);
}));

(reagent.impl.util.merge_props.cljs$lang$maxFixedArity = (2));

reagent.impl.util._STAR_always_update_STAR_ = false;
reagent.impl.util.force_update = (function reagent$impl$util$force_update(comp,deep){
if(cljs.core.truth_(deep)){
var _STAR_always_update_STAR__orig_val__9048 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__9049 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__9049);

try{return comp.forceUpdate();
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__9048);
}} else {
return comp.forceUpdate();
}
});

//# sourceMappingURL=util.js.map
