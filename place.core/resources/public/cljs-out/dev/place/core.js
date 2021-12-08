// Compiled by ClojureScript 1.10.773 {}
goog.provide('place.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
place.core.multiply = (function place$core$multiply(a,b){
return (a * b);
});
place.core.places = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"millions","millions",1337529614),new cljs.core.Keyword(null,"text","text",-1790561697),"million",new cljs.core.Keyword(null,"times","times",1671571467),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"hundred-thousand","hundred-thousand",-380598745),new cljs.core.Keyword(null,"text","text",-1790561697),"thousand",new cljs.core.Keyword(null,"times","times",1671571467),(100)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ten-thousand","ten-thousand",-1913316569),new cljs.core.Keyword(null,"text","text",-1790561697),"thousand",new cljs.core.Keyword(null,"times","times",1671571467),(10)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"thousand","thousand",343929021),new cljs.core.Keyword(null,"text","text",-1790561697),"thousand",new cljs.core.Keyword(null,"times","times",1671571467),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"hundred","hundred",-1718089917),new cljs.core.Keyword(null,"text","text",-1790561697),"",new cljs.core.Keyword(null,"times","times",1671571467),(100)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"tens","tens",-2107583828),new cljs.core.Keyword(null,"text","text",-1790561697),"",new cljs.core.Keyword(null,"times","times",1671571467),(10)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ones","ones",1208947912),new cljs.core.Keyword(null,"text","text",-1790561697),"",new cljs.core.Keyword(null,"times","times",1671571467),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"tenths","tenths",458028948),new cljs.core.Keyword(null,"text","text",-1790561697),"tenth(s)",new cljs.core.Keyword(null,"times","times",1671571467),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"hundreth","hundreth",-1880852443),new cljs.core.Keyword(null,"text","text",-1790561697),"hundreth(s)",new cljs.core.Keyword(null,"times","times",1671571467),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"thousandth","thousandth",-1675172590),new cljs.core.Keyword(null,"text","text",-1790561697),"thousandth(s)",new cljs.core.Keyword(null,"times","times",1671571467),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ten-thousandth","ten-thousandth",-584451712),new cljs.core.Keyword(null,"text","text",-1790561697),"ten thousandth(s)",new cljs.core.Keyword(null,"times","times",1671571467),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"hundred-thousandth","hundred-thousandth",-420729345),new cljs.core.Keyword(null,"text","text",-1790561697),"hundred thousandth(s)",new cljs.core.Keyword(null,"times","times",1671571467),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"millionth","millionth",1600583628),new cljs.core.Keyword(null,"text","text",-1790561697),"millionth(s)",new cljs.core.Keyword(null,"times","times",1671571467),(1)], null)], null);
place.core.new_number = (function place$core$new_number(){
var iter__4529__auto__ = (function place$core$new_number_$_iter__14432(s__14433){
return (new cljs.core.LazySeq(null,(function (){
var s__14433__$1 = s__14433;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__14433__$1);
if(temp__5720__auto__){
var s__14433__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14433__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__14433__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__14435 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__14434 = (0);
while(true){
if((i__14434 < size__4528__auto__)){
var _ = cljs.core._nth.call(null,c__4527__auto__,i__14434);
cljs.core.chunk_append.call(null,b__14435,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(10))));

var G__14436 = (i__14434 + (1));
i__14434 = G__14436;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14435),place$core$new_number_$_iter__14432.call(null,cljs.core.chunk_rest.call(null,s__14433__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14435),null);
}
} else {
var _ = cljs.core.first.call(null,s__14433__$2);
return cljs.core.cons.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(10))),place$core$new_number_$_iter__14432.call(null,cljs.core.rest.call(null,s__14433__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.range.call(null,(0),cljs.core.count.call(null,place.core.places)));
});
if((typeof place !== 'undefined') && (typeof place.core !== 'undefined') && (typeof place.core.app_state !== 'undefined')){
} else {
place.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!",new cljs.core.Keyword(null,"number","number",1570378438),place.core.new_number.call(null)], null));
}
place.core.get_app_element = (function place$core$get_app_element(){
return goog.dom.getElement("app");
});
place.core.hello_world = (function place$core$hello_world(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,place.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,place.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Edit this in src/place/core.cljs and watch it change!"], null)], null);
});
place.core.mount = (function place$core$mount(el){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [place.core.hello_world], null),el);
});
place.core.mount_app_element = (function place$core$mount_app_element(){
var temp__5720__auto__ = place.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return place.core.mount.call(null,el);
} else {
return null;
}
});
place.core.mount_app_element.call(null);
place.core.on_reload = (function place$core$on_reload(){
return place.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
