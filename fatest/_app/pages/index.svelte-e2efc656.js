import{_ as u}from"../chunks/preload-helper-ec9aa979.js";import{S as y,i as I,s as k,e as m,t as v,k as g,c as b,a as E,g as h,d as r,n as R,f,H as A,J as x,I as d,A as T}from"../chunks/vendor-ce93ce47.js";function j(p){let t,i,n,a,l,o,c;return{c(){t=m("h1"),i=v("Firebase Analytics Test"),n=g(),a=m("button"),l=v("Enviar Evento")},l(e){t=b(e,"H1",{});var s=E(t);i=h(s,"Firebase Analytics Test"),s.forEach(r),n=R(e),a=b(e,"BUTTON",{});var _=E(a);l=h(_,"Enviar Evento"),_.forEach(r)},m(e,s){f(e,t,s),A(t,i),f(e,n,s),f(e,a,s),A(a,l),o||(c=x(a,"click",p[0]),o=!0)},p:d,i:d,o:d,d(e){e&&r(t),e&&r(n),e&&r(a),o=!1,c()}}}function w(p){let t,i,n,a;return T(async()=>{const o=await u(()=>import("../chunks/index.esm-aea5f234.js"),["chunks/index.esm-aea5f234.js","chunks/index.esm2017-eab9435f.js"]),c=await u(()=>import("../chunks/index.esm-34cc5488.js"),["chunks/index.esm-34cc5488.js","chunks/index.esm2017-eab9435f.js"]);t=o.initializeApp,i=c.getAnalytics,n=c.logEvent;const s=t({apiKey:"AIzaSyDdRRGO_rd28JwkIM4SOd7bEeokbIwhpRo",authDomain:"fatest-502c7.firebaseapp.com",projectId:"fatest-502c7",storageBucket:"fatest-502c7.appspot.com",messagingSenderId:"148486833157",appId:"1:148486833157:web:3dfc089271a654a5f0c86c",measurementId:"G-Y6R9H1LYWJ"});a=i(s)}),[()=>{console.log(a),n(a,"fatest_evento",{dato_personalizado:"Dato de prueba"})}]}class S extends y{constructor(t){super();I(this,t,w,j,k,{})}}export{S as default};
