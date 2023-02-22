(function(){var g={frameRate:150,animationTime:400,stepSize:60,pulseAlgorithm:true,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:true,arrowScroll:50,touchpadSupport:false,fixedBackground:true,excluded:""};var I=g;var u=false;var v=false;var j={x:0,y:0};var n=false;var T=document.documentElement;var a;var H;var Q;var h=[];var x=/^Mac/.test(navigator.platform);var C={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36};function o(){if(I.keyboardSupport){b("keydown",D)}}function m(){if(n||!document.body){return}n=true;var ac=document.body;var ag=document.documentElement;var aj=window.innerHeight;var ai=ac.scrollHeight;T=(document.compatMode.indexOf("CSS")>=0)?ag:ac;a=ac;o();if(top!=self){v=true}else{if(ai>aj&&(ac.offsetHeight<=aj||ag.offsetHeight<=aj)){var af=document.createElement("div");af.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+T.scrollHeight+"px";document.body.appendChild(af);var ah;Q=function(){if(ah){return}ah=setTimeout(function(){if(u){return}af.style.height="0";af.style.height=T.scrollHeight+"px";ah=null},500)};setTimeout(Q,10);b("resize",Q);var ae={attributes:true,childList:true,characterData:false};H=new G(Q);H.observe(ac,ae);if(T.offsetHeight<=aj){var ad=document.createElement("div");ad.style.clear="both";ac.appendChild(ad)}}}if(!I.fixedBackground&&!u){ac.style.backgroundAttachment="scroll";ag.style.backgroundAttachment="scroll"}}function e(){H&&H.disconnect();R(ab,aa);R("mousedown",F);R("keydown",D);R("resize",Q);R("load",m)}var P=[];var M=false;var E=Date.now();function V(ad,af,aj){k(af,aj);if(I.accelerationMax!=1){var ag=Date.now();var ac=ag-E;if(ac<I.accelerationDelta){var ae=(1+(50/ac))/2;if(ae>1){ae=Math.min(ae,I.accelerationMax);af*=ae;aj*=ae}}E=Date.now()}P.push({x:af,y:aj,lastX:(af<0)?0.99:-0.99,lastY:(aj<0)?0.99:-0.99,start:Date.now()});if(M){return}var ah=(ad===document.body);var ai=function(at){var ao=Date.now();var aq=0;var ar=0;for(var am=0;am<P.length;am++){var an=P[am];var ak=ao-an.start;var al=(ak>=I.animationTime);var ap=(al)?1:ak/I.animationTime;if(I.pulseAlgorithm){ap=N(ap)}var au=(an.x*ap-an.lastX)>>0;var av=(an.y*ap-an.lastY)>>0;aq+=au;ar+=av;an.lastX+=au;an.lastY+=av;if(al){P.splice(am,1);am--}}if(ah){window.scrollBy(aq,ar)}else{if(aq){ad.scrollLeft+=aq}if(ar){ad.scrollTop+=ar}}if(!af&&!aj){P=[]}if(P.length){S(ai,ad,(1000/I.frameRate+1))}else{M=false}};S(ai,ad,0);M=true}function aa(ae){if(!n){m()}var ag=ae.target;var af=K(ag);if(!af||ae.defaultPrevented||ae.ctrlKey){return true}if(z(a,"embed")||(z(ag,"embed")&&/\.pdf/i.test(ag.src))||z(a,"object")){return true}var ac=-ae.wheelDeltaX||ae.deltaX||0;var ad=-ae.wheelDeltaY||ae.deltaY||0;if(x){if(ae.wheelDeltaX&&r(ae.wheelDeltaX,120)){ac=-120*(ae.wheelDeltaX/Math.abs(ae.wheelDeltaX))}if(ae.wheelDeltaY&&r(ae.wheelDeltaY,120)){ad=-120*(ae.wheelDeltaY/Math.abs(ae.wheelDeltaY))}}if(!ac&&!ad){ad=-ae.wheelDelta||0}if(ae.deltaMode===1){ac*=40;ad*=40}if(!I.touchpadSupport&&B(ad)){return true}if(Math.abs(ac)>1.2){ac*=I.stepSize/120}if(Math.abs(ad)>1.2){ad*=I.stepSize/120}V(af,ac,ad);ae.preventDefault();U()}function D(ag){var ak=ag.target;var ai=ag.ctrlKey||ag.altKey||ag.metaKey||(ag.shiftKey&&ag.keyCode!==C.spacebar);if(!document.contains(a)){a=document.activeElement}var ah=/^(textarea|select|embed|object)$/i;var ac=/^(button|submit|radio|checkbox|file|color|image)$/i;if(ah.test(ak.nodeName)||z(ak,"input")&&!ac.test(ak.type)||z(a,"video")||w(ag)||ak.isContentEditable||ag.defaultPrevented||ai){return true}if((z(ak,"button")||z(ak,"input")&&ac.test(ak.type))&&ag.keyCode===C.spacebar){return true}var aj,al=0,am=0;var af=K(a);var ad=af.clientHeight;if(af==document.body){ad=window.innerHeight}switch(ag.keyCode){case C.up:am=-I.arrowScroll;break;case C.down:am=I.arrowScroll;break;case C.spacebar:aj=ag.shiftKey?1:-1;am=-aj*ad*0.9;break;case C.pageup:am=-ad*0.9;break;case C.pagedown:am=ad*0.9;break;case C.home:am=-af.scrollTop;break;case C.end:var ae=af.scrollHeight-af.scrollTop-ad;am=(ae>0)?ae+10:0;break;case C.left:al=-I.arrowScroll;break;case C.right:al=I.arrowScroll;break;default:return true}V(af,al,am);ag.preventDefault();U()}function F(ac){a=ac.target}var Y=(function(){var ac=0;return function(ad){return ad.uniqueID||(ad.uniqueID=ac++)}})();var d={};var f;function U(){clearTimeout(f);f=setInterval(function(){d={}},1*1000)}function W(ac,ae){for(var ad=ac.length;ad--;){d[Y(ac[ad])]=ae}return ae}function K(ae){var af=[];var ac=document.body;var ah=T.scrollHeight;do{var ad=d[Y(ae)];if(ad){return W(af,ad)}af.push(ae);if(ah===ae.scrollHeight){var ai=L(T)&&L(ac);var ag=ai||J(T);if(v&&q(T)||!v&&ag){return W(af,l())}}else{if(q(ae)&&J(ae)){return W(af,ae)}}}while(ae=ae.parentElement)}function q(ac){return(ac.clientHeight+10<ac.scrollHeight)}function L(ac){var ad=getComputedStyle(ac,"").getPropertyValue("overflow-y");return(ad!=="hidden")}function J(ac){var ad=getComputedStyle(ac,"").getPropertyValue("overflow-y");return(ad==="scroll"||ad==="auto")}function b(ad,ac){window.addEventListener(ad,ac,{passive:false})}function R(ad,ac){window.removeEventListener(ad,ac,false)}function z(ac,ad){return(ac.nodeName||"").toLowerCase()===ad.toLowerCase()}function k(ac,ad){ac=(ac>0)?1:-1;ad=(ad>0)?1:-1;if(j.x!==ac||j.y!==ad){j.x=ac;j.y=ad;P=[];E=0}}var i;if(window.localStorage&&localStorage.SS_deltaBuffer){h=localStorage.SS_deltaBuffer.split(",")}function B(ac){if(!ac){return}if(!h.length){h=[ac,ac,ac]}ac=Math.abs(ac);h.push(ac);h.shift();clearTimeout(i);i=setTimeout(function(){if(window.localStorage){localStorage.SS_deltaBuffer=h.join(",")}},1000);return !c(120)&&!c(100)}function r(ad,ac){return(Math.floor(ad/ac)==ad/ac)}function c(ac){return(r(h[0],ac)&&r(h[1],ac)&&r(h[2],ac))}function w(ad){var ac=ad.target;var ae=false;if(document.URL.indexOf("www.youtube.com/watch")!=-1){do{ae=(ac.classList&&ac.classList.contains("html5-video-controls"));if(ae){break}}while(ac=ac.parentNode)}return ae}var S=(function(){return(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(ac,ae,ad){window.setTimeout(ac,ad||(1000/60))})})();var G=(window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver);var l=(function(){var ac;return function(){if(!ac){var af=document.createElement("div");af.style.cssText="height:10000px;width:1px;";document.body.appendChild(af);var ad=document.body.scrollTop;var ae=document.documentElement.scrollTop;window.scrollBy(0,3);if(document.body.scrollTop!=ad){(ac=document.body)}else{(ac=document.documentElement)}window.scrollBy(0,-3);document.body.removeChild(af)}return ac}})();function O(af){var ae,ad,ac;af=af*I.pulseScale;if(af<1){ae=af-(1-Math.exp(-af))}else{ad=Math.exp(-1);af-=1;ac=1-Math.exp(-af);ae=ad+(ac*(1-ad))}return ae*I.pulseNormalize}function N(ac){if(ac>=1){return 1}if(ac<=0){return 0}if(I.pulseNormalize==1){I.pulseNormalize/=O(1)}return O(ac)}var Z=window.navigator.userAgent;var s=/Edge/.test(Z);var p=/chrome/i.test(Z)&&!s;var A=/safari/i.test(Z)&&!s;var y=/mobile/i.test(Z);var t=(p||A)&&!y;var ab;if("onwheel" in document.createElement("div")){ab="wheel"}else{if("onmousewheel" in document.createElement("div")){ab="mousewheel"}}if(ab&&t){b(ab,aa);b("mousedown",F);b("load",m)}function X(ad){for(var ac in ad){if(g.hasOwnProperty(ac)){I[ac]=ad[ac]}}}X.destroy=e;if(window.SmoothScrollOptions){X(window.SmoothScrollOptions)}if(typeof define==="function"&&define.amd){define(function(){return X})}else{if("object"==typeof exports){module.exports=X}else{window.SmoothScroll=X}}})();