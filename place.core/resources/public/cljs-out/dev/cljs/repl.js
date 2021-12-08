// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19963){
var map__19964 = p__19963;
var map__19964__$1 = (((((!((map__19964 == null))))?(((((map__19964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19964):map__19964);
var m = map__19964__$1;
var n = cljs.core.get.call(null,map__19964__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__19964__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19966_19998 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19967_19999 = null;
var count__19968_20000 = (0);
var i__19969_20001 = (0);
while(true){
if((i__19969_20001 < count__19968_20000)){
var f_20002 = cljs.core._nth.call(null,chunk__19967_19999,i__19969_20001);
cljs.core.println.call(null,"  ",f_20002);


var G__20003 = seq__19966_19998;
var G__20004 = chunk__19967_19999;
var G__20005 = count__19968_20000;
var G__20006 = (i__19969_20001 + (1));
seq__19966_19998 = G__20003;
chunk__19967_19999 = G__20004;
count__19968_20000 = G__20005;
i__19969_20001 = G__20006;
continue;
} else {
var temp__5720__auto___20007 = cljs.core.seq.call(null,seq__19966_19998);
if(temp__5720__auto___20007){
var seq__19966_20008__$1 = temp__5720__auto___20007;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19966_20008__$1)){
var c__4556__auto___20009 = cljs.core.chunk_first.call(null,seq__19966_20008__$1);
var G__20010 = cljs.core.chunk_rest.call(null,seq__19966_20008__$1);
var G__20011 = c__4556__auto___20009;
var G__20012 = cljs.core.count.call(null,c__4556__auto___20009);
var G__20013 = (0);
seq__19966_19998 = G__20010;
chunk__19967_19999 = G__20011;
count__19968_20000 = G__20012;
i__19969_20001 = G__20013;
continue;
} else {
var f_20014 = cljs.core.first.call(null,seq__19966_20008__$1);
cljs.core.println.call(null,"  ",f_20014);


var G__20015 = cljs.core.next.call(null,seq__19966_20008__$1);
var G__20016 = null;
var G__20017 = (0);
var G__20018 = (0);
seq__19966_19998 = G__20015;
chunk__19967_19999 = G__20016;
count__19968_20000 = G__20017;
i__19969_20001 = G__20018;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20019 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_20019);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_20019)))?cljs.core.second.call(null,arglists_20019):arglists_20019));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19970_20020 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19971_20021 = null;
var count__19972_20022 = (0);
var i__19973_20023 = (0);
while(true){
if((i__19973_20023 < count__19972_20022)){
var vec__19984_20024 = cljs.core._nth.call(null,chunk__19971_20021,i__19973_20023);
var name_20025 = cljs.core.nth.call(null,vec__19984_20024,(0),null);
var map__19987_20026 = cljs.core.nth.call(null,vec__19984_20024,(1),null);
var map__19987_20027__$1 = (((((!((map__19987_20026 == null))))?(((((map__19987_20026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19987_20026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19987_20026):map__19987_20026);
var doc_20028 = cljs.core.get.call(null,map__19987_20027__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20029 = cljs.core.get.call(null,map__19987_20027__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_20025);

cljs.core.println.call(null," ",arglists_20029);

if(cljs.core.truth_(doc_20028)){
cljs.core.println.call(null," ",doc_20028);
} else {
}


var G__20030 = seq__19970_20020;
var G__20031 = chunk__19971_20021;
var G__20032 = count__19972_20022;
var G__20033 = (i__19973_20023 + (1));
seq__19970_20020 = G__20030;
chunk__19971_20021 = G__20031;
count__19972_20022 = G__20032;
i__19973_20023 = G__20033;
continue;
} else {
var temp__5720__auto___20034 = cljs.core.seq.call(null,seq__19970_20020);
if(temp__5720__auto___20034){
var seq__19970_20035__$1 = temp__5720__auto___20034;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19970_20035__$1)){
var c__4556__auto___20036 = cljs.core.chunk_first.call(null,seq__19970_20035__$1);
var G__20037 = cljs.core.chunk_rest.call(null,seq__19970_20035__$1);
var G__20038 = c__4556__auto___20036;
var G__20039 = cljs.core.count.call(null,c__4556__auto___20036);
var G__20040 = (0);
seq__19970_20020 = G__20037;
chunk__19971_20021 = G__20038;
count__19972_20022 = G__20039;
i__19973_20023 = G__20040;
continue;
} else {
var vec__19989_20041 = cljs.core.first.call(null,seq__19970_20035__$1);
var name_20042 = cljs.core.nth.call(null,vec__19989_20041,(0),null);
var map__19992_20043 = cljs.core.nth.call(null,vec__19989_20041,(1),null);
var map__19992_20044__$1 = (((((!((map__19992_20043 == null))))?(((((map__19992_20043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19992_20043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19992_20043):map__19992_20043);
var doc_20045 = cljs.core.get.call(null,map__19992_20044__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20046 = cljs.core.get.call(null,map__19992_20044__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_20042);

cljs.core.println.call(null," ",arglists_20046);

if(cljs.core.truth_(doc_20045)){
cljs.core.println.call(null," ",doc_20045);
} else {
}


var G__20047 = cljs.core.next.call(null,seq__19970_20035__$1);
var G__20048 = null;
var G__20049 = (0);
var G__20050 = (0);
seq__19970_20020 = G__20047;
chunk__19971_20021 = G__20048;
count__19972_20022 = G__20049;
i__19973_20023 = G__20050;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__19994 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19995 = null;
var count__19996 = (0);
var i__19997 = (0);
while(true){
if((i__19997 < count__19996)){
var role = cljs.core._nth.call(null,chunk__19995,i__19997);
var temp__5720__auto___20051__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___20051__$1)){
var spec_20052 = temp__5720__auto___20051__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_20052));
} else {
}


var G__20053 = seq__19994;
var G__20054 = chunk__19995;
var G__20055 = count__19996;
var G__20056 = (i__19997 + (1));
seq__19994 = G__20053;
chunk__19995 = G__20054;
count__19996 = G__20055;
i__19997 = G__20056;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__19994);
if(temp__5720__auto____$1){
var seq__19994__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19994__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__19994__$1);
var G__20057 = cljs.core.chunk_rest.call(null,seq__19994__$1);
var G__20058 = c__4556__auto__;
var G__20059 = cljs.core.count.call(null,c__4556__auto__);
var G__20060 = (0);
seq__19994 = G__20057;
chunk__19995 = G__20058;
count__19996 = G__20059;
i__19997 = G__20060;
continue;
} else {
var role = cljs.core.first.call(null,seq__19994__$1);
var temp__5720__auto___20061__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___20061__$2)){
var spec_20062 = temp__5720__auto___20061__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_20062));
} else {
}


var G__20063 = cljs.core.next.call(null,seq__19994__$1);
var G__20064 = null;
var G__20065 = (0);
var G__20066 = (0);
seq__19994 = G__20063;
chunk__19995 = G__20064;
count__19996 = G__20065;
i__19997 = G__20066;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__20067 = cljs.core.conj.call(null,via,t);
var G__20068 = cljs.core.ex_cause.call(null,t);
via = G__20067;
t = G__20068;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20071 = datafied_throwable;
var map__20071__$1 = (((((!((map__20071 == null))))?(((((map__20071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20071):map__20071);
var via = cljs.core.get.call(null,map__20071__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__20071__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__20071__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20072 = cljs.core.last.call(null,via);
var map__20072__$1 = (((((!((map__20072 == null))))?(((((map__20072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20072):map__20072);
var type = cljs.core.get.call(null,map__20072__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__20072__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__20072__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20073 = data;
var map__20073__$1 = (((((!((map__20073 == null))))?(((((map__20073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20073):map__20073);
var problems = cljs.core.get.call(null,map__20073__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__20073__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__20073__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20074 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__20074__$1 = (((((!((map__20074 == null))))?(((((map__20074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20074):map__20074);
var top_data = map__20074__$1;
var source = cljs.core.get.call(null,map__20074__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__20079 = phase;
var G__20079__$1 = (((G__20079 instanceof cljs.core.Keyword))?G__20079.fqn:null);
switch (G__20079__$1) {
case "read-source":
var map__20080 = data;
var map__20080__$1 = (((((!((map__20080 == null))))?(((((map__20080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20080):map__20080);
var line = cljs.core.get.call(null,map__20080__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__20080__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20082 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__20082__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__20082,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20082);
var G__20082__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__20082__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20082__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__20082__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20082__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20083 = top_data;
var G__20083__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__20083,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20083);
var G__20083__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__20083__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20083__$1);
var G__20083__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__20083__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20083__$2);
var G__20083__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__20083__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20083__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__20083__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20083__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20084 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__20084,(0),null);
var method = cljs.core.nth.call(null,vec__20084,(1),null);
var file = cljs.core.nth.call(null,vec__20084,(2),null);
var line = cljs.core.nth.call(null,vec__20084,(3),null);
var G__20087 = top_data;
var G__20087__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__20087,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20087);
var G__20087__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__20087__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20087__$1);
var G__20087__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__20087__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20087__$2);
var G__20087__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__20087__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20087__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__20087__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20087__$4;
}

break;
case "execution":
var vec__20088 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__20088,(0),null);
var method = cljs.core.nth.call(null,vec__20088,(1),null);
var file = cljs.core.nth.call(null,vec__20088,(2),null);
var line = cljs.core.nth.call(null,vec__20088,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__20070_SHARP_){
var or__4126__auto__ = (p1__20070_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__20070_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__20091 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20091__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__20091,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20091);
var G__20091__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__20091__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20091__$1);
var G__20091__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__20091__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20091__$2);
var G__20091__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__20091__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20091__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__20091__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20091__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20079__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20095){
var map__20096 = p__20095;
var map__20096__$1 = (((((!((map__20096 == null))))?(((((map__20096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20096):map__20096);
var triage_data = map__20096__$1;
var phase = cljs.core.get.call(null,map__20096__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__20096__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__20096__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__20096__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__20096__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__20096__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__20096__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__20096__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__20098 = phase;
var G__20098__$1 = (((G__20098 instanceof cljs.core.Keyword))?G__20098.fqn:null);
switch (G__20098__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20099_20108 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20100_20109 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20101_20110 = true;
var _STAR_print_fn_STAR__temp_val__20102_20111 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20101_20110);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20102_20111);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__20093_SHARP_){
return cljs.core.dissoc.call(null,p1__20093_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20100_20109);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20099_20108);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20103_20112 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20104_20113 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20105_20114 = true;
var _STAR_print_fn_STAR__temp_val__20106_20115 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20105_20114);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20106_20115);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__20094_SHARP_){
return cljs.core.dissoc.call(null,p1__20094_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20104_20113);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20103_20112);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20098__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
