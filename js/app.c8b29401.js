(function(t){function e(e){for(var r,s,u=e[0],i=e[1],a=e[2],d=0,b=[];d<u.length;d++)s=u[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&b.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(b.length)b.shift()();return c.push.apply(c,a||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},c=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var a=0;a<u.length;a++)e(u[a]);var l=i;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"06da":function(t,e,n){"use strict";n("13d9")},"13d9":function(t,e,n){},"375b":function(t,e,n){"use strict";n("81eb")},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("7a23");function o(t,e,n,o,c,s){const u=Object(r["k"])("Header"),i=Object(r["k"])("QuestionForm"),a=Object(r["k"])("Answer");return Object(r["g"])(),Object(r["d"])(r["a"],null,[Object(r["f"])(u,null,{headerContent:Object(r["n"])(()=>[Object(r["e"])("h2",null,Object(r["l"])(c.title),1),Object(r["e"])("p",null,Object(r["l"])(c.description),1)]),_:1}),Object(r["f"])(i,{onSetAnswer:s.setAnswer,questionString:c.questionString},null,8,["onSetAnswer","questionString"]),Object(r["f"])(a,{answer:c.answerString},null,8,["answer"])],64)}const c={key:0};function s(t,e,n,o,s,u){return t.$slots.headerContent?(Object(r["g"])(),Object(r["d"])("header",c,[Object(r["j"])(t.$slots,"headerContent",{},void 0,!0)])):Object(r["c"])("",!0)}var u={mounted(){console.log(this.$slots.headerContent)}},i=(n("7853"),n("6b0d")),a=n.n(i);const l=a()(u,[["render",s],["__scopeId","data-v-854c3140"]]);var d=l;const b=t=>(Object(r["i"])("data-v-02bb303e"),t=t(),Object(r["h"])(),t),p=b(()=>Object(r["e"])("button",{type:"submit"},"Помоги мне",-1));function f(t,e,n,o,c,s){return Object(r["g"])(),Object(r["d"])("form",{action:"#",onSubmit:e[2]||(e[2]=Object(r["p"])((...t)=>s.setAnswer&&s.setAnswer(...t),["prevent"]))},[Object(r["e"])("label",null,[Object(r["e"])("p",null,Object(r["l"])(n.questionString),1),Object(r["o"])(Object(r["e"])("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>c.question=t),onInput:e[1]||(e[1]=(...t)=>s.handleInput&&s.handleInput(...t))},null,544),[[r["m"],c.question]])]),p],32)}var h={props:{questionString:String},data(){return{question:""}},methods:{setAnswer(){this.question.trim()&&this.$emit("set-answer")},handleInput(){console.log(this.question)}}};n("375b");const O=a()(h,[["render",f],["__scopeId","data-v-02bb303e"]]);var j=O;function g(t,e,n,o,c,s){return Object(r["g"])(),Object(r["d"])("h3",null,Object(r["l"])(n.answer),1)}var v={props:{answer:String}};n("06da");const w=a()(v,[["render",g],["__scopeId","data-v-279ffcaa"]]);var m=w;const S=["Ты же девочка!","Ну, у других ещё хуже..","В твои 20 мне уже было 30.","В твоём возрасте я уже 10 детей нарожала.","Какие проблемы могут быть в твоём возрасте?","Роди и всё пройдёт.","Всё пройдёт, это просто фаза.","Ты такой злой!","Пожалел бы меня!","Ты - моё проклятие.","Это всё из-за недотраха.","Ты такой наивный!","Мне стыдно за тебя!","Начитался и внушил себе, что у тебя депрессия!","Я пытаюсь заботиться о тебе!","Заебал, иди нахуй!"],y=["Поговори со мной, зайка","Я помогу тебе, я - твоя мама","Ты можешь мне доверять, котик","Чем тебе помочь, зайка?"],q=()=>{const t=Math.floor(Math.random()*(S.length-0))+0;return console.log(S,t,S[t]),S[t]},_=()=>{const t=Math.floor(Math.random()*(y.length-0))+0;return console.log(y,t,y[t]),y[t]};var A={components:{Header:d,QuestionForm:j,Answer:m},data(){return{title:"Я - твоя виртуальная мама!",description:"Ты можешь поговорить со мной о чём угодно. Я здесь, чтобы помочь тебе. Позволь позаботиться о тебе, не отнимай у меня смысл жизни, кому сказала!",answerString:"",questionString:""}},watch:{answerString(){this.questionString=_()}},methods:{setAnswer(){this.answerString=q()}},mounted(){console.log("mounted"),this.questionString=_()}};n("c82e");const M=a()(A,[["render",o]]);var k=M;const x=Object(r["b"])(k);x.mount("#app")},"629a":function(t,e,n){},7853:function(t,e,n){"use strict";n("fdc6")},"81eb":function(t,e,n){},c82e:function(t,e,n){"use strict";n("629a")},fdc6:function(t,e,n){}});
//# sourceMappingURL=app.c8b29401.js.map