"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[452],{83452:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(25773),u=t(30808),i=t(27378),o=t(88),a=t(69001);var c=function(e){var n=(0,i.useRef)(e);n.current=e,(0,i.useEffect)((function(){var e;null===(e=n.current)||void 0===e||e.call(n)}),[])},f=t(62499);function l(e,n,t,r){void 0===r&&(r=!1),(0,i.useEffect)((function(){var u="function"==typeof e?e():e,i=u?(0,f.Z)(u,n,t,r):null;return function(){null==i||i.off()}}),[e,n,t,r])}var s=t(82282),d=t(32378);function v(e){var n,t,r,u=(0,i.useState)(null),f=u[0],s=u[1],d=(0,i.useCallback)((function(){s((0,o.Z)(e.current))}),[e]);return n=function(){return e.current},t=d,r=(0,i.useRef)(),(0,i.useEffect)((function(){if(!r.current){var e="function"==typeof n?n():n;e&&(r.current=new a.do(t),r.current.observe(e))}return function(){var e;null===(e=r.current)||void 0===e||e.disconnect()}}),[n,t]),c(d),l(window,"resize",d,!1),f}var h=i.forwardRef((function(e,n){var t,a=e.as,c=void 0===a?"div":a,f=e.classPrefix,h=void 0===f?"affix":f,p=e.className,w=e.children,m=e.container,b=e.top,g=void 0===b?0:b,x=e.onChange,C=(0,u.Z)(e,["as","classPrefix","className","children","container","top","onChange"]),N=(0,i.useRef)(null),E=v(N),Z=function(e){var n=(0,i.useState)(null),t=n[0],r=n[1];return(0,i.useEffect)((function(){var n="function"==typeof e?e():e;r(n?(0,o.Z)(n):null)}),[e]),t}(m),k=function(e,n,t){var r=t.top,u=t.onChange,o=(0,i.useState)(!1),a=o[0],c=o[1],f=(0,i.useCallback)((function(){if(e){var t=window.scrollY||window.pageYOffset,i=t-(Number(e.top)-Number(r))>=0;n&&(i=i&&t<Number(n.top)+Number(n.height)),i!==a&&(c(i),null==u||u(i))}}),[a,e,n,u,r]);return l(window,"scroll",f,!1),a}(E,Z,{top:g,onChange:x}),y=(0,s.Z)(h),R=y.withClassPrefix,P=(0,y.merge)(p,((t={})[R()]=k,t)),S=k?{width:null==E?void 0:E.width,height:null==E?void 0:E.height}:void 0,z={position:"fixed",top:g,width:null==E?void 0:E.width,zIndex:10},Y=k?z:void 0;return i.createElement(c,(0,r.Z)({},C,{ref:(0,d.Z)(N,n)}),i.createElement("div",{className:P,style:Y},w),k&&i.createElement("div",{"aria-hidden":!0,style:S}))}));h.displayName="Affix";var p=h}}]);
//# sourceMappingURL=452-64500a9be25a0b4581a2.js.map