import{E as Y,r as C,f as k,C as R,e as D,F as J,i as je,l as b,m as qe,n as X,p as Q,q as Z,v as ee,L as Me,t as te}from"./index.esm2017-eab9435f.js";function $e(e){return Array.prototype.slice.call(e)}function ne(e){return new Promise(function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}})}function N(e,t,n){var r,i=new Promise(function(o,a){r=e[t].apply(e,n),ne(r).then(o,a)});return i.request=r,i}function Fe(e,t,n){var r=N(e,t,n);return r.then(function(i){if(!!i)return new T(i,r.request)})}function A(e,t,n){n.forEach(function(r){Object.defineProperty(e.prototype,r,{get:function(){return this[t][r]},set:function(i){this[t][r]=i}})})}function B(e,t,n,r){r.forEach(function(i){i in n.prototype&&(e.prototype[i]=function(){return N(this[t],i,arguments)})})}function x(e,t,n,r){r.forEach(function(i){i in n.prototype&&(e.prototype[i]=function(){return this[t][i].apply(this[t],arguments)})})}function re(e,t,n,r){r.forEach(function(i){i in n.prototype&&(e.prototype[i]=function(){return Fe(this[t],i,arguments)})})}function m(e){this._index=e}A(m,"_index",["name","keyPath","multiEntry","unique"]);B(m,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]);re(m,"_index",IDBIndex,["openCursor","openKeyCursor"]);function T(e,t){this._cursor=e,this._request=t}A(T,"_cursor",["direction","key","primaryKey","value"]);B(T,"_cursor",IDBCursor,["update","delete"]);["advance","continue","continuePrimaryKey"].forEach(function(e){e in IDBCursor.prototype&&(T.prototype[e]=function(){var t=this,n=arguments;return Promise.resolve().then(function(){return t._cursor[e].apply(t._cursor,n),ne(t._request).then(function(r){if(!!r)return new T(r,t._request)})})})});function d(e){this._store=e}d.prototype.createIndex=function(){return new m(this._store.createIndex.apply(this._store,arguments))};d.prototype.index=function(){return new m(this._store.index.apply(this._store,arguments))};A(d,"_store",["name","keyPath","indexNames","autoIncrement"]);B(d,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]);re(d,"_store",IDBObjectStore,["openCursor","openKeyCursor"]);x(d,"_store",IDBObjectStore,["deleteIndex"]);function v(e){this._tx=e,this.complete=new Promise(function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}})}v.prototype.objectStore=function(){return new d(this._tx.objectStore.apply(this._tx,arguments))};A(v,"_tx",["objectStoreNames","mode"]);x(v,"_tx",IDBTransaction,["abort"]);function O(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new v(n)}O.prototype.createObjectStore=function(){return new d(this._db.createObjectStore.apply(this._db,arguments))};A(O,"_db",["name","version","objectStoreNames"]);x(O,"_db",IDBDatabase,["deleteObjectStore","close"]);function P(e){this._db=e}P.prototype.transaction=function(){return new v(this._db.transaction.apply(this._db,arguments))};A(P,"_db",["name","version","objectStoreNames"]);x(P,"_db",IDBDatabase,["close"]);["openCursor","openKeyCursor"].forEach(function(e){[d,m].forEach(function(t){e in t.prototype&&(t.prototype[e.replace("open","iterate")]=function(){var n=$e(arguments),r=n[n.length-1],i=this._store||this._index,o=i[e].apply(i,n.slice(0,-1));o.onsuccess=function(){r(o.result)}})})});[m,d].forEach(function(e){e.prototype.getAll||(e.prototype.getAll=function(t,n){var r=this,i=[];return new Promise(function(o){r.iterateCursor(t,function(a){if(!a){o(i);return}if(i.push(a.value),n!==void 0&&i.length==n){o(i);return}a.continue()})})})});function Ne(e,t,n){var r=N(indexedDB,"open",[e,t]),i=r.request;return i&&(i.onupgradeneeded=function(o){n&&n(new O(i.result,o.oldVersion,i.transaction))}),r.then(function(o){return new P(o)})}const ie="@firebase/installations",L="0.5.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe=1e4,ae=`w:${L}`,se="FIS_v2",Be="https://firebaseinstallations.googleapis.com/v1",Le=60*60*1e3,Ve="installations",Ke="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},y=new Y(Ve,Ke,ze);function ce(e){return e instanceof J&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue({projectId:e}){return`${Be}/projects/${e}/installations`}function le(e){return{token:e.token,requestStatus:2,expiresIn:Ge(e.expiresIn),creationTime:Date.now()}}async function fe(e,t){const r=(await t.json()).error;return y.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function de({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Ue(e,{refreshToken:t}){const n=de(e);return n.append("Authorization",We(t)),n}async function pe(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Ge(e){return Number(e.replace("s","000"))}function We(e){return`${se} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function He(e,{fid:t}){const n=ue(e),r=de(e),i={fid:t,authVersion:se,appId:e.appId,sdkVersion:ae},o={method:"POST",headers:r,body:JSON.stringify(i)},a=await pe(()=>fetch(n,o));if(a.ok){const s=await a.json();return{fid:s.fid||t,registrationStatus:2,refreshToken:s.refreshToken,authToken:le(s.authToken)}}else throw await fe("Create Installation",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=/^[cdef][\w-]{21}$/,V="";function Xe(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Qe(e);return Je.test(n)?n:V}catch{return V}}function Qe(e){return Ye(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge=new Map;function me(e,t){const n=j(e);ye(n,t),Ze(n,t)}function ye(e,t){const n=ge.get(e);if(!!n)for(const r of n)r(t)}function Ze(e,t){const n=et();n&&n.postMessage({key:e,fid:t}),tt()}let w=null;function et(){return!w&&"BroadcastChannel"in self&&(w=new BroadcastChannel("[Firebase] FID Change"),w.onmessage=e=>{ye(e.data.key,e.data.fid)}),w}function tt(){ge.size===0&&w&&(w.close(),w=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt="firebase-installations-database",rt=1,I="firebase-installations-store";let K=null;function z(){return K||(K=Ne(nt,rt,e=>{switch(e.oldVersion){case 0:e.createObjectStore(I)}})),K}async function q(e,t){const n=j(e),i=(await z()).transaction(I,"readwrite"),o=i.objectStore(I),a=await o.get(n);return await o.put(t,n),await i.complete,(!a||a.fid!==t.fid)&&me(e,t.fid),t}async function we(e){const t=j(e),r=(await z()).transaction(I,"readwrite");await r.objectStore(I).delete(t),await r.complete}async function M(e,t){const n=j(e),i=(await z()).transaction(I,"readwrite"),o=i.objectStore(I),a=await o.get(n),s=t(a);return s===void 0?await o.delete(n):await o.put(s,n),await i.complete,s&&(!a||a.fid!==s.fid)&&me(e,s.fid),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(e){let t;const n=await M(e,r=>{const i=it(r),o=ot(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===V?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function it(e){const t=e||{fid:Xe(),registrationStatus:0};return be(t)}function ot(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(y.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=at(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:st(e)}:{installationEntry:t}}async function at(e,t){try{const n=await He(e,t);return q(e,n)}catch(n){throw ce(n)&&n.customData.serverCode===409?await we(e):await q(e,{fid:t.fid,registrationStatus:0}),n}}async function st(e){let t=await Ie(e);for(;t.registrationStatus===1;)await he(100),t=await Ie(e);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await U(e);return r||n}return t}function Ie(e){return M(e,t=>{if(!t)throw y.create("installation-not-found");return be(t)})}function be(e){return ct(e)?{fid:e.fid,registrationStatus:0}:e}function ct(e){return e.registrationStatus===1&&e.registrationTime+oe<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut({appConfig:e,platformLoggerProvider:t},n){const r=lt(e,n),i=Ue(e,n),o=t.getImmediate({optional:!0});o&&i.append("x-firebase-client",o.getPlatformInfoString());const a={installation:{sdkVersion:ae}},s={method:"POST",headers:i,body:JSON.stringify(a)},c=await pe(()=>fetch(r,s));if(c.ok){const f=await c.json();return le(f)}else throw await fe("Generate Auth Token",c)}function lt(e,{fid:t}){return`${ue(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(e,t=!1){let n;const r=await M(e.appConfig,o=>{if(!Te(o))throw y.create("not-registered");const a=o.authToken;if(!t&&pt(a))return o;if(a.requestStatus===1)return n=ft(e,t),o;{if(!navigator.onLine)throw y.create("app-offline");const s=gt(o);return n=dt(e,s),s}});return n?await n:r.authToken}async function ft(e,t){let n=await Ae(e.appConfig);for(;n.authToken.requestStatus===1;)await he(100),n=await Ae(e.appConfig);const r=n.authToken;return r.requestStatus===0?G(e,t):r}function Ae(e){return M(e,t=>{if(!Te(t))throw y.create("not-registered");const n=t.authToken;return mt(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function dt(e,t){try{const n=await ut(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await q(e.appConfig,r),n}catch(n){if(ce(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await we(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await q(e.appConfig,r)}throw n}}function Te(e){return e!==void 0&&e.registrationStatus===2}function pt(e){return e.requestStatus===2&&!ht(e)}function ht(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Le}function gt(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function mt(e){return e.requestStatus===1&&e.requestTime+oe<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yt(e){const t=e,{installationEntry:n,registrationPromise:r}=await U(t.appConfig);return r?r.catch(console.error):G(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wt(e,t=!1){const n=e;return await It(n.appConfig),(await G(n,t)).token}async function It(e){const{registrationPromise:t}=await U(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(e){if(!e||!e.options)throw W("App Configuration");if(!e.name)throw W("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw W(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function W(e){return y.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve="installations",At="installations-internal",Tt=e=>{const t=e.getProvider("app").getImmediate(),n=bt(t),r=D(t,"platform-logger");return{app:t,appConfig:n,platformLoggerProvider:r,_delete:()=>Promise.resolve()}},vt=e=>{const t=e.getProvider("app").getImmediate(),n=D(t,ve).getImmediate();return{getId:()=>yt(n),getToken:i=>wt(n,i)}};function _t(){k(new R(ve,Tt,"PUBLIC")),k(new R(At,vt,"PRIVATE"))}_t();C(ie,L);C(ie,L,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $="analytics",St="firebase_id",Et="origin",Ct=60*1e3,kt="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",_e="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u=new Me("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Rt(e,t){const n=document.createElement("script");n.src=`${_e}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function Dt(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function xt(e,t,n,r,i,o){const a=r[i];try{if(a)await t[a];else{const c=(await Se(n)).find(f=>f.measurementId===i);c&&await t[c.appId]}}catch(s){u.error(s)}e("config",i,o)}async function Ot(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const s=await Se(n);for(const c of a){const f=s.find(S=>S.measurementId===c),g=f&&t[f.appId];if(g)o.push(g);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){u.error(o)}}function Pt(e,t,n,r){async function i(o,a,s){try{o==="event"?await Ot(e,t,n,a,s):o==="config"?await xt(e,t,n,r,a,s):e("set",a)}catch(c){u.error(c)}}return i}function jt(e,t,n,r,i){let o=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=Pt(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function qt(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(_e))return t;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},l=new Y("analytics","Analytics",Mt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=30,Ft=1e3;class Nt{constructor(t={},n=Ft){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Ee=new Nt;function Bt(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Lt(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:Bt(r)},o=kt.replace("{app-id}",n),a=await fetch(o,i);if(a.status!==200&&a.status!==304){let s="";try{const c=await a.json();((t=c.error)===null||t===void 0?void 0:t.message)&&(s=c.error.message)}catch{}throw l.create("config-fetch-failed",{httpStatus:a.status,responseMessage:s})}return a.json()}async function Vt(e,t=Ee,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw l.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw l.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new Ut;return setTimeout(async()=>{s.abort()},n!==void 0?n:Ct),Ce({appId:r,apiKey:i,measurementId:o},a,s,t)}async function Ce(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Ee){const{appId:o,measurementId:a}=e;try{await Kt(r,t)}catch(s){if(a)return u.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${s.message}]`),{appId:o,measurementId:a};throw s}try{const s=await Lt(e);return i.deleteThrottleMetadata(o),s}catch(s){if(!zt(s)){if(i.deleteThrottleMetadata(o),a)return u.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${s.message}]`),{appId:o,measurementId:a};throw s}const c=Number(s.customData.httpStatus)===503?te(n,i.intervalMillis,$t):te(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,f),u.debug(`Calling attemptFetch again in ${c} millis`),Ce(e,f,r,i)}}function Kt(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(l.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function zt(e){if(!(e instanceof J)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Ut{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gt(){if(Z())try{await ee()}catch(e){return u.warn(l.create("indexeddb-unavailable",{errorInfo:e}).message),!1}else return u.warn(l.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Wt(e,t,n,r,i,o,a){var s;const c=Vt(e);c.then(h=>{n[h.measurementId]=h.appId,e.options.measurementId&&h.measurementId!==e.options.measurementId&&u.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>u.error(h)),t.push(c);const f=Gt().then(h=>{if(h)return r.getId()}),[g,S]=await Promise.all([c,f]);qt()||Rt(o,g.measurementId),i("js",new Date);const E=(s=a==null?void 0:a.config)!==null&&s!==void 0?s:{};return E[Et]="firebase",E.update=!0,S!=null&&(E[St]=S),i("config",g.measurementId,E),g.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t){this.app=t}_delete(){return delete p[this.app.options.appId],Promise.resolve()}}let p={},ke=[];const Re={};let F="dataLayer",De="gtag",xe,_,H=!1;function sn(e){if(H)throw l.create("already-initialized");e.dataLayerName&&(F=e.dataLayerName),e.gtagName&&(De=e.gtagName)}function Yt(){const e=[];if(X()&&e.push("This is a browser extension environment."),Q()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=l.create("invalid-analytics-context",{errorInfo:t});u.warn(n.message)}}function Jt(e,t,n){Yt();const r=e.options.appId;if(!r)throw l.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)u.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw l.create("no-api-key");if(p[r]!=null)throw l.create("already-exists",{id:r});if(!H){Dt(F);const{wrappedGtag:o,gtagCore:a}=jt(p,ke,Re,F,De);_=o,xe=a,H=!0}return p[r]=Wt(e,ke,Re,t,xe,F,n),new Ht(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,a=Object.assign(Object.assign({},r),{send_to:o});e("event",n,a)}}async function Qt(e,t,n,r){if(r&&r.global)return e("set",{screen_name:n}),Promise.resolve();{const i=await t;e("config",i,{update:!0,screen_name:n})}}async function Zt(e,t,n,r){if(r&&r.global)return e("set",{user_id:n}),Promise.resolve();{const i=await t;e("config",i,{update:!0,user_id:n})}}async function en(e,t,n,r){if(r&&r.global){const i={};for(const o of Object.keys(n))i[`user_properties.${o}`]=n[o];return e("set",i),Promise.resolve()}else{const i=await t;e("config",i,{update:!0,user_properties:n})}}async function tn(e,t){const n=await e;window[`ga-disable-${n}`]=!t}function cn(e=je()){e=b(e);const t=D(e,$);return t.isInitialized()?t.getImmediate():nn(e)}function nn(e,t={}){const n=D(e,$);if(n.isInitialized()){const i=n.getImmediate();if(qe(t,n.getOptions()))return i;throw l.create("already-initialized")}return n.initialize({options:t})}async function un(){if(X()||!Q()||!Z())return!1;try{return await ee()}catch{return!1}}function ln(e,t,n){e=b(e),Qt(_,p[e.app.options.appId],t,n).catch(r=>u.error(r))}function fn(e,t,n){e=b(e),Zt(_,p[e.app.options.appId],t,n).catch(r=>u.error(r))}function dn(e,t,n){e=b(e),en(_,p[e.app.options.appId],t,n).catch(r=>u.error(r))}function pn(e,t){e=b(e),tn(p[e.app.options.appId],t).catch(n=>u.error(n))}function rn(e,t,n,r){e=b(e),Xt(_,p[e.app.options.appId],t,n,r).catch(i=>u.error(i))}const Oe="@firebase/analytics",Pe="0.7.4";function on(){k(new R($,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Jt(r,i,n)},"PUBLIC")),k(new R("analytics-internal",e,"PRIVATE")),C(Oe,Pe),C(Oe,Pe,"esm2017");function e(t){try{const n=t.getProvider($).getImmediate();return{logEvent:(r,i,o)=>rn(n,r,i,o)}}catch(n){throw l.create("interop-component-reg-failed",{reason:n})}}}on();export{cn as getAnalytics,nn as initializeAnalytics,un as isSupported,rn as logEvent,pn as setAnalyticsCollectionEnabled,ln as setCurrentScreen,fn as setUserId,dn as setUserProperties,sn as settings};
