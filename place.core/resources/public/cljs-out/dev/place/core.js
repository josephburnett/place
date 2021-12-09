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
var iter__4529__auto__ = (function place$core$new_number_$_iter__15874(s__15875){
return (new cljs.core.LazySeq(null,(function (){
var s__15875__$1 = s__15875;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__15875__$1);
if(temp__5720__auto__){
var s__15875__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15875__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__15875__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__15877 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__15876 = (0);
while(true){
if((i__15876 < size__4528__auto__)){
var _ = cljs.core._nth.call(null,c__4527__auto__,i__15876);
cljs.core.chunk_append.call(null,b__15877,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(10))));

var G__15878 = (i__15876 + (1));
i__15876 = G__15878;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15877),place$core$new_number_$_iter__15874.call(null,cljs.core.chunk_rest.call(null,s__15875__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15877),null);
}
} else {
var _ = cljs.core.first.call(null,s__15875__$2);
return cljs.core.cons.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(10))),place$core$new_number_$_iter__15874.call(null,cljs.core.rest.call(null,s__15875__$2)));
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
var iter__4529__auto__ = (function place$core$non_zero_indexes_$_iter__15879(s__15880){
return (new cljs.core.LazySeq(null,(function (){
var s__15880__$1 = s__15880;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__15880__$1);
if(temp__5720__auto__){
var s__15880__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15880__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__15880__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__15882 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__15881 = (0);
while(true){
if((i__15881 < size__4528__auto__)){
var n = cljs.core._nth.call(null,c__4527__auto__,i__15881);
if((!(cljs.core._EQ_.call(null,"0",n)))){
cljs.core.chunk_append.call(null,b__15882,n);

var G__15883 = (i__15881 + (1));
i__15881 = G__15883;
continue;
} else {
var G__15884 = (i__15881 + (1));
i__15881 = G__15884;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15882),place$core$non_zero_indexes_$_iter__15879.call(null,cljs.core.chunk_rest.call(null,s__15880__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15882),null);
}
} else {
var n = cljs.core.first.call(null,s__15880__$2);
if((!(cljs.core._EQ_.call(null,"0",n)))){
return cljs.core.cons.call(null,n,place$core$non_zero_indexes_$_iter__15879.call(null,cljs.core.rest.call(null,s__15880__$2)));
} else {
var G__15885 = cljs.core.rest.call(null,s__15880__$2);
s__15880__$1 = G__15885;
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
var incorrect_indexes = (function (){var iter__4529__auto__ = (function place$core$choose_indexes_$_iter__15887(s__15888){
return (new cljs.core.LazySeq(null,(function (){
var s__15888__$1 = s__15888;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__15888__$1);
if(temp__5720__auto__){
var s__15888__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15888__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__15888__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__15890 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__15889 = (0);
while(true){
if((i__15889 < size__4528__auto__)){
var i = cljs.core._nth.call(null,c__4527__auto__,i__15889);
if(cljs.core.truth_(((function (i__15889,s__15888__$1,i,c__4527__auto__,size__4528__auto__,b__15890,s__15888__$2,temp__5720__auto__){
return (function (p1__15886_SHARP_){
return (!(cljs.core._EQ_.call(null,correct_index,p1__15886_SHARP_)));
});})(i__15889,s__15888__$1,i,c__4527__auto__,size__4528__auto__,b__15890,s__15888__$2,temp__5720__auto__))
)){
cljs.core.chunk_append.call(null,b__15890,i);

var G__15891 = (i__15889 + (1));
i__15889 = G__15891;
continue;
} else {
var G__15892 = (i__15889 + (1));
i__15889 = G__15892;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15890),place$core$choose_indexes_$_iter__15887.call(null,cljs.core.chunk_rest.call(null,s__15888__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15890),null);
}
} else {
var i = cljs.core.first.call(null,s__15888__$2);
if(cljs.core.truth_(((function (s__15888__$1,i,s__15888__$2,temp__5720__auto__){
return (function (p1__15886_SHARP_){
return (!(cljs.core._EQ_.call(null,correct_index,p1__15886_SHARP_)));
});})(s__15888__$1,i,s__15888__$2,temp__5720__auto__))
)){
return cljs.core.cons.call(null,i,place$core$choose_indexes_$_iter__15887.call(null,cljs.core.rest.call(null,s__15888__$2)));
} else {
var G__15893 = cljs.core.rest.call(null,s__15888__$2);
s__15888__$1 = G__15893;
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"number","number",1570378438),number,new cljs.core.Keyword(null,"index","index",-1531685915),correct_index,new cljs.core.Keyword(null,"choices","choices",1385611597),problem_indexes], null);
}
});
place.core.update_score = (function place$core$update_score(score,is_correct){
if(cljs.core.truth_(is_correct)){
return ((3) + score);
} else {
var x__4214__auto__ = (0);
var y__4215__auto__ = (score - (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
}
});
if((typeof place !== 'undefined') && (typeof place.core !== 'undefined') && (typeof place.core.app_state !== 'undefined')){
} else {
place.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),place.core.instructions,new cljs.core.Keyword(null,"problem","problem",1168155148),place.core.new_problem.call(null),new cljs.core.Keyword(null,"score","score",-1963588780),(0)], null));
}
place.core.click_choice = (function place$core$click_choice(index){
return cljs.core.swap_BANG_.call(null,place.core.app_state,(function (state){
var is_correct = cljs.core._EQ_.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"problem","problem",1168155148),new cljs.core.Keyword(null,"index","index",-1531685915)], null)),index);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,(function (p1__15894_SHARP_){
if(is_correct){
return cljs.core.assoc_in.call(null,p1__15894_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"problem","problem",1168155148)], null),place.core.new_problem.call(null));
} else {
return p1__15894_SHARP_;
}
}).call(null,state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697)], null),((is_correct)?"Correct! +3":"Incorrect! -1")),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1912301393)], null),index),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780)], null),place.core.update_score.call(null,new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(state),is_correct));
}));
});
place.core.get_app_element = (function place$core$get_app_element(){
return goog.dom.getElement("app");
});
place.core.render_digit = (function place$core$render_digit(digit,is_target,index){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"60px",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(is_target)?"red":"black")], null)], null),digit," "], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index], null));
});
place.core.render_number = (function place$core$render_number(state){
var problem = new cljs.core.Keyword(null,"problem","problem",1168155148).cljs$core$IFn$_invoke$arity$1(state);
var integers = cljs.core.take.call(null,(7),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(problem));
var fractions = cljs.core.drop.call(null,(7),new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(problem));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4529__auto__ = (function place$core$render_number_$_iter__15895(s__15896){
return (new cljs.core.LazySeq(null,(function (){
var s__15896__$1 = s__15896;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__15896__$1);
if(temp__5720__auto__){
var s__15896__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15896__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__15896__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__15898 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__15897 = (0);
while(true){
if((i__15897 < size__4528__auto__)){
var i = cljs.core._nth.call(null,c__4527__auto__,i__15897);
cljs.core.chunk_append.call(null,b__15898,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [place.core.render_digit,cljs.core.nth.call(null,integers,i),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(problem),i)], null));

var G__15903 = (i__15897 + (1));
i__15897 = G__15903;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15898),place$core$render_number_$_iter__15895.call(null,cljs.core.chunk_rest.call(null,s__15896__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15898),null);
}
} else {
var i = cljs.core.first.call(null,s__15896__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [place.core.render_digit,cljs.core.nth.call(null,integers,i),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(problem),i)], null),place$core$render_number_$_iter__15895.call(null,cljs.core.rest.call(null,s__15896__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.range.call(null,(0),cljs.core.count.call(null,integers)));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"60px",new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)], null),". "], null),(function (){var iter__4529__auto__ = (function place$core$render_number_$_iter__15899(s__15900){
return (new cljs.core.LazySeq(null,(function (){
var s__15900__$1 = s__15900;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__15900__$1);
if(temp__5720__auto__){
var s__15900__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15900__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__15900__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__15902 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__15901 = (0);
while(true){
if((i__15901 < size__4528__auto__)){
var i = cljs.core._nth.call(null,c__4527__auto__,i__15901);
cljs.core.chunk_append.call(null,b__15902,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [place.core.render_digit,cljs.core.nth.call(null,fractions,i),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(problem),(cljs.core.count.call(null,integers) + i))], null));

var G__15904 = (i__15901 + (1));
i__15901 = G__15904;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15902),place$core$render_number_$_iter__15899.call(null,cljs.core.chunk_rest.call(null,s__15900__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15902),null);
}
} else {
var i = cljs.core.first.call(null,s__15900__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [place.core.render_digit,cljs.core.nth.call(null,fractions,i),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(problem),(cljs.core.count.call(null,integers) + i))], null),place$core$render_number_$_iter__15899.call(null,cljs.core.rest.call(null,s__15900__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"50px",new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.call(null,place.core.click_choice,place_index)], null),cljs.pprint.cl_format.call(null,null,"~R ~a~a",(digit * new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(place__$1)),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(place__$1),(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"pluralize","pluralize",-351567118).cljs$core$IFn$_invoke$arity$1(place__$1);
if(cljs.core.truth_(and__4115__auto__)){
return (digit > (1));
} else {
return and__4115__auto__;
}
})())?"s":""))], null)], null);
});
place.core.render_problem = (function place$core$render_problem(){
var state = cljs.core.deref.call(null,place.core.app_state);
var problem = new cljs.core.Keyword(null,"problem","problem",1168155148).cljs$core$IFn$_invoke$arity$1(state);
var digit = parseInt(cljs.core.nth.call(null,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(problem),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(problem)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(state)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"score: ",new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(state)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [place.core.render_number,state], null),(function (){var iter__4529__auto__ = (function place$core$render_problem_$_iter__15905(s__15906){
return (new cljs.core.LazySeq(null,(function (){
var s__15906__$1 = s__15906;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__15906__$1);
if(temp__5720__auto__){
var s__15906__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15906__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__15906__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__15908 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__15907 = (0);
while(true){
if((i__15907 < size__4528__auto__)){
var n = cljs.core._nth.call(null,c__4527__auto__,i__15907);
cljs.core.chunk_append.call(null,b__15908,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [place.core.render_digit_words,digit,n], null));

var G__15909 = (i__15907 + (1));
i__15907 = G__15909;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15908),place$core$render_problem_$_iter__15905.call(null,cljs.core.chunk_rest.call(null,s__15906__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15908),null);
}
} else {
var n = cljs.core.first.call(null,s__15906__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [place.core.render_digit_words,digit,n], null),place$core$render_problem_$_iter__15905.call(null,cljs.core.rest.call(null,s__15906__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,new cljs.core.Keyword(null,"choices","choices",1385611597).cljs$core$IFn$_invoke$arity$1(problem));
})()], null)], null);
});
place.core.mount = (function place$core$mount(el){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [place.core.render_problem], null),el);
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
