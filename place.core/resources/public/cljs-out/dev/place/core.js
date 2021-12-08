// Compiled by ClojureScript 1.10.773 {}
goog.provide('place.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
place.core.multiply = (function place$core$multiply(a,b){
return (a * b);
});
place.core.instructions = "Click on the correct description of the red number.";
place.core.places = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"millions","millions",1337529614),new cljs.core.Keyword(null,"text","text",-1790561697),"million",new cljs.core.Keyword(null,"times","times",1671571467),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"hundred-thousand","hundred-thousand",-380598745),new cljs.core.Keyword(null,"text","text",-1790561697),"thousand",new cljs.core.Keyword(null,"times","times",1671571467),(100)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ten-thousand","ten-thousand",-1913316569),new cljs.core.Keyword(null,"text","text",-1790561697),"thousand",new cljs.core.Keyword(null,"times","times",1671571467),(10)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"thousand","thousand",343929021),new cljs.core.Keyword(null,"text","text",-1790561697),"thousand",new cljs.core.Keyword(null,"times","times",1671571467),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"hundred","hundred",-1718089917),new cljs.core.Keyword(null,"text","text",-1790561697),"",new cljs.core.Keyword(null,"times","times",1671571467),(100)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"tens","tens",-2107583828),new cljs.core.Keyword(null,"text","text",-1790561697),"",new cljs.core.Keyword(null,"times","times",1671571467),(10)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ones","ones",1208947912),new cljs.core.Keyword(null,"text","text",-1790561697),"",new cljs.core.Keyword(null,"times","times",1671571467),(1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"tenths","tenths",458028948),new cljs.core.Keyword(null,"text","text",-1790561697),"tenth",new cljs.core.Keyword(null,"pluralize","pluralize",-351567118),true,new cljs.core.Keyword(null,"times","times",1671571467),(1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"hundredth","hundredth",770437746),new cljs.core.Keyword(null,"text","text",-1790561697),"hundredth",new cljs.core.Keyword(null,"pluralize","pluralize",-351567118),true,new cljs.core.Keyword(null,"times","times",1671571467),(1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"thousandth","thousandth",-1675172590),new cljs.core.Keyword(null,"text","text",-1790561697),"thousandth",new cljs.core.Keyword(null,"pluralize","pluralize",-351567118),true,new cljs.core.Keyword(null,"times","times",1671571467),(1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ten-thousandth","ten-thousandth",-584451712),new cljs.core.Keyword(null,"text","text",-1790561697),"ten thousandth",new cljs.core.Keyword(null,"pluralize","pluralize",-351567118),true,new cljs.core.Keyword(null,"times","times",1671571467),(1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"hundred-thousandth","hundred-thousandth",-420729345),new cljs.core.Keyword(null,"text","text",-1790561697),"hundred thousandth",new cljs.core.Keyword(null,"pluralize","pluralize",-351567118),true,new cljs.core.Keyword(null,"times","times",1671571467),(1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"millionth","millionth",1600583628),new cljs.core.Keyword(null,"text","text",-1790561697),"millionth",new cljs.core.Keyword(null,"pluralize","pluralize",-351567118),true,new cljs.core.Keyword(null,"times","times",1671571467),(1)], null)], null);
place.core.new_number = (function place$core$new_number(){
var iter__4529__auto__ = (function place$core$new_number_$_iter__14990(s__14991){
return (new cljs.core.LazySeq(null,(function (){
var s__14991__$1 = s__14991;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__14991__$1);
if(temp__5720__auto__){
var s__14991__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14991__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__14991__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__14993 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__14992 = (0);
while(true){
if((i__14992 < size__4528__auto__)){
var _ = cljs.core._nth.call(null,c__4527__auto__,i__14992);
cljs.core.chunk_append.call(null,b__14993,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(10))));

var G__14994 = (i__14992 + (1));
i__14992 = G__14994;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14993),place$core$new_number_$_iter__14990.call(null,cljs.core.chunk_rest.call(null,s__14991__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14993),null);
}
} else {
var _ = cljs.core.first.call(null,s__14991__$2);
return cljs.core.cons.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(10))),place$core$new_number_$_iter__14990.call(null,cljs.core.rest.call(null,s__14991__$2)));
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
place.core.non_zero_indexes = (function place$core$non_zero_indexes(number){
var iter__4529__auto__ = (function place$core$non_zero_indexes_$_iter__14995(s__14996){
return (new cljs.core.LazySeq(null,(function (){
var s__14996__$1 = s__14996;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__14996__$1);
if(temp__5720__auto__){
var s__14996__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14996__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__14996__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__14998 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__14997 = (0);
while(true){
if((i__14997 < size__4528__auto__)){
var n = cljs.core._nth.call(null,c__4527__auto__,i__14997);
if((!(cljs.core._EQ_.call(null,"0",n)))){
cljs.core.chunk_append.call(null,b__14998,n);

var G__14999 = (i__14997 + (1));
i__14997 = G__14999;
continue;
} else {
var G__15000 = (i__14997 + (1));
i__14997 = G__15000;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14998),place$core$non_zero_indexes_$_iter__14995.call(null,cljs.core.chunk_rest.call(null,s__14996__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14998),null);
}
} else {
var n = cljs.core.first.call(null,s__14996__$2);
if((!(cljs.core._EQ_.call(null,"0",n)))){
return cljs.core.cons.call(null,n,place$core$non_zero_indexes_$_iter__14995.call(null,cljs.core.rest.call(null,s__14996__$2)));
} else {
var G__15001 = cljs.core.rest.call(null,s__14996__$2);
s__14996__$1 = G__15001;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,number);
});
place.core.choose_indexes = (function place$core$choose_indexes(correct_index){
var incorrect_indexes = (function (){var iter__4529__auto__ = (function place$core$choose_indexes_$_iter__15003(s__15004){
return (new cljs.core.LazySeq(null,(function (){
var s__15004__$1 = s__15004;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__15004__$1);
if(temp__5720__auto__){
var s__15004__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15004__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__15004__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__15006 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__15005 = (0);
while(true){
if((i__15005 < size__4528__auto__)){
var i = cljs.core._nth.call(null,c__4527__auto__,i__15005);
if(cljs.core.truth_(((function (i__15005,s__15004__$1,i,c__4527__auto__,size__4528__auto__,b__15006,s__15004__$2,temp__5720__auto__){
return (function (p1__15002_SHARP_){
return (!(cljs.core._EQ_.call(null,correct_index,p1__15002_SHARP_)));
});})(i__15005,s__15004__$1,i,c__4527__auto__,size__4528__auto__,b__15006,s__15004__$2,temp__5720__auto__))
)){
cljs.core.chunk_append.call(null,b__15006,i);

var G__15007 = (i__15005 + (1));
i__15005 = G__15007;
continue;
} else {
var G__15008 = (i__15005 + (1));
i__15005 = G__15008;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15006),place$core$choose_indexes_$_iter__15003.call(null,cljs.core.chunk_rest.call(null,s__15004__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15006),null);
}
} else {
var i = cljs.core.first.call(null,s__15004__$2);
if(cljs.core.truth_(((function (s__15004__$1,i,s__15004__$2,temp__5720__auto__){
return (function (p1__15002_SHARP_){
return (!(cljs.core._EQ_.call(null,correct_index,p1__15002_SHARP_)));
});})(s__15004__$1,i,s__15004__$2,temp__5720__auto__))
)){
return cljs.core.cons.call(null,i,place$core$choose_indexes_$_iter__15003.call(null,cljs.core.rest.call(null,s__15004__$2)));
} else {
var G__15009 = cljs.core.rest.call(null,s__15004__$2);
s__15004__$1 = G__15009;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.range.call(null,(0),cljs.core.count.call(null,place.core.places)));
})();
return cljs.core.shuffle.call(null,cljs.core.cons.call(null,correct_index,cljs.core.take.call(null,(4),cljs.core.shuffle.call(null,incorrect_indexes))));
});
place.core.new_problem = (function place$core$new_problem(){
var number = place.core.new_number.call(null);
var indexes = place.core.non_zero_indexes.call(null,number);
if((cljs.core.count.call(null,indexes) < (1))){
return place.core.new_problem.call(null);
} else {
var correct_index = parseInt(cljs.core.nth.call(null,indexes,cljs.core.rand_int.call(null,cljs.core.count.call(null,indexes))));
var problem_indexes = place.core.choose_indexes.call(null,correct_index);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),place.core.instructions,new cljs.core.Keyword(null,"number","number",1570378438),number,new cljs.core.Keyword(null,"index","index",-1531685915),correct_index,new cljs.core.Keyword(null,"choices","choices",1385611597),problem_indexes], null);
}
});
if((typeof place !== 'undefined') && (typeof place.core !== 'undefined') && (typeof place.core.app_state !== 'undefined')){
} else {
place.core.app_state = reagent.core.atom.call(null,place.core.new_problem.call(null));
}
place.core.get_app_element = (function place$core$get_app_element(){
return goog.dom.getElement("app");
});
place.core.render_digit = (function place$core$render_digit(digit,is_target){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"60px",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(is_target)?"red":"black")], null)], null),digit," "], null);
});
place.core.render_number = (function place$core$render_number(state){
var integers = cljs.core.take.call(null,(7),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(state));
var fractions = cljs.core.drop.call(null,(7),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(state));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4529__auto__ = (function place$core$render_number_$_iter__15010(s__15011){
return (new cljs.core.LazySeq(null,(function (){
var s__15011__$1 = s__15011;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__15011__$1);
if(temp__5720__auto__){
var s__15011__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15011__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__15011__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__15013 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__15012 = (0);
while(true){
if((i__15012 < size__4528__auto__)){
var i = cljs.core._nth.call(null,c__4527__auto__,i__15012);
cljs.core.chunk_append.call(null,b__15013,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [place.core.render_digit,cljs.core.nth.call(null,integers,i),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(state),i)], null));

var G__15018 = (i__15012 + (1));
i__15012 = G__15018;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15013),place$core$render_number_$_iter__15010.call(null,cljs.core.chunk_rest.call(null,s__15011__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15013),null);
}
} else {
var i = cljs.core.first.call(null,s__15011__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [place.core.render_digit,cljs.core.nth.call(null,integers,i),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(state),i)], null),place$core$render_number_$_iter__15010.call(null,cljs.core.rest.call(null,s__15011__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.range.call(null,(0),cljs.core.count.call(null,integers)));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"60px",new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)], null),". "], null),(function (){var iter__4529__auto__ = (function place$core$render_number_$_iter__15014(s__15015){
return (new cljs.core.LazySeq(null,(function (){
var s__15015__$1 = s__15015;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__15015__$1);
if(temp__5720__auto__){
var s__15015__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15015__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__15015__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__15017 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__15016 = (0);
while(true){
if((i__15016 < size__4528__auto__)){
var i = cljs.core._nth.call(null,c__4527__auto__,i__15016);
cljs.core.chunk_append.call(null,b__15017,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [place.core.render_digit,cljs.core.nth.call(null,fractions,i),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(state),(cljs.core.count.call(null,integers) + i))], null));

var G__15019 = (i__15016 + (1));
i__15016 = G__15019;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15017),place$core$render_number_$_iter__15014.call(null,cljs.core.chunk_rest.call(null,s__15015__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15017),null);
}
} else {
var i = cljs.core.first.call(null,s__15015__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [place.core.render_digit,cljs.core.nth.call(null,fractions,i),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(state),(cljs.core.count.call(null,integers) + i))], null),place$core$render_number_$_iter__15014.call(null,cljs.core.rest.call(null,s__15015__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.range.call(null,(0),cljs.core.count.call(null,fractions)));
})()], null);
});
place.core.render_digit_words = (function place$core$render_digit_words(digit,place_index){
var place__$1 = cljs.core.get.call(null,place.core.places,place_index);
var suffix = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(place__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"50px",new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null)], null),cljs.pprint.cl_format.call(null,null,"~R ~a~a",(digit * new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(place__$1)),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(place__$1),(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"pluralize","pluralize",-351567118).cljs$core$IFn$_invoke$arity$1(place__$1);
if(cljs.core.truth_(and__4115__auto__)){
return (digit > (1));
} else {
return and__4115__auto__;
}
})())?"s":""))], null)], null);
});
place.core.render_problem = (function place$core$render_problem(state){
var digit = parseInt(cljs.core.nth.call(null,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(state)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(state)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [place.core.render_number,state], null),(function (){var iter__4529__auto__ = (function place$core$render_problem_$_iter__15020(s__15021){
return (new cljs.core.LazySeq(null,(function (){
var s__15021__$1 = s__15021;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__15021__$1);
if(temp__5720__auto__){
var s__15021__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15021__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__15021__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__15023 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__15022 = (0);
while(true){
if((i__15022 < size__4528__auto__)){
var n = cljs.core._nth.call(null,c__4527__auto__,i__15022);
cljs.core.chunk_append.call(null,b__15023,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [place.core.render_digit_words,digit,n], null));

var G__15024 = (i__15022 + (1));
i__15022 = G__15024;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15023),place$core$render_problem_$_iter__15020.call(null,cljs.core.chunk_rest.call(null,s__15021__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15023),null);
}
} else {
var n = cljs.core.first.call(null,s__15021__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [place.core.render_digit_words,digit,n], null),place$core$render_problem_$_iter__15020.call(null,cljs.core.rest.call(null,s__15021__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,new cljs.core.Keyword(null,"choices","choices",1385611597).cljs$core$IFn$_invoke$arity$1(state));
})()], null)], null);
});
place.core.mount = (function place$core$mount(el){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [place.core.render_problem,cljs.core.deref.call(null,place.core.app_state)], null),el);
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
