/*
 * Portal API Implementation
 * Copyright 2010 Backbase - All rights reserved.
 */
var portal=window.portal||{};(function(){var b=document.getElementsByTagName("script");var d=b[b.length-1];var a=d?String(d.src):"./";var c=a.substring(0,a.lastIndexOf("/"));portal.baseURI=c+"/..";portal.xml={};portal.xml.getLocalName=function(g){return g.localName||g.baseName};portal.xml.getTextContent=function(g){return g.textContent||g.text||""};portal.xml.hasAttribute=function(g,h){return g.hasAttribute?g.hasAttribute(h):function(i){return i&&i.specified}(g.attributes.getNamedItem(h))};portal.form={};function f(i,g,h){if(i[g]){if(typeof i[g]=="string"){i[g]=[i[g]]}i[g].push(h)}else{i[g]=h}}portal.form.getData=function(k){var m={},n,g,l,q,p,h,o;for(var n=0,g=k.elements.length;n<g;n++){p=k.elements[n];h=p.name;if(h&&!p.disabled){switch(p.type){case"file":case undefined:case"reset":break;case"radio":case"checkbox":if(p.checked){f(m,h,p.value)}break;case"submit":if(document.activeElement===p){f(m,h,p.value)}break;case"select-one":if(p.selectedIndex>-1){o=p.options[p.selectedIndex];f(m,h,(o.attributes.value&&o.attributes.value.specified)?o.value:(o.text||o.innerText||""))}break;case"select-multiple":if(p.selectedIndex>-1){for(l=p.selectedIndex,q=p.options.length;l<q;l++){o=p.options[l];if(o.selected){f(m,h,(o.attributes.value&&o.attributes.value.specified)?o.value:(o.text||o.innerText||""))}}}break;default:f(m,h,p.value);break}}}return m};portal.locale={};portal.getLocale=function(g){return portal.locale[g]||g};portal.version="4.2.2 (20100618-0120)";function e(g){var h=new Function;h.prototype=g.prototype;return new h}portal.gadget={};portal.gadget.Gadget=function(h,g,i,j){window[h]=this;this.identifier=h;this.loading=true;this.src=i.src;this.body=g;g.id=h;this.preferences=i.preferences;this.includes=[];this._class=i;this._window=j};portal.gadget.Gadget.prototype.body=null;portal.gadget.Gadget.prototype.identifier=null;portal.gadget.Gadget.prototype.loading=null;portal.gadget.Gadget.prototype.preferences=null;portal.gadget.Gadget.prototype.src=null;portal.gadget.Gadget.prototype.title=null;portal.gadget.Gadget.prototype.icon=null;portal.gadget.Gadget.prototype.includes=null;portal.gadget.Gadget.prototype.setTitle=function(g){return this._window.setTitle(g)};portal.gadget.Gadget.prototype.setIcon=function(g){return this._window.setIcon(g)};portal.gadget.Gadget.prototype.showLoading=function(){return this._window.showLoading()};portal.gadget.Gadget.prototype.hideLoading=function(){return this._window.hideLoading()};portal.gadget.Gadget.prototype.showPreferences=function(){return this._window.showPreferences()};portal.gadget.Gadget.prototype.hidePreferences=function(){return this._window.hidePreferences()};portal.gadget.Gadget.prototype.maximize=function(){return this._window.maximize()};portal.gadget.Gadget.prototype.minimize=function(){return this._window.minimize()};portal.gadget.Gadget.prototype.restore=function(){return this._window.restore()};portal.gadget.Gadget.prototype.setPreference=function(g,h){return this._window.setPreference(g,h)};portal.gadget.Gadget.prototype.getPreference=function(g){return this._window.getPreference(g)};portal.gadget.Gadget.prototype.setPreferenceFromElement=function(g){return this._window.setPreferenceFromElement(g)};portal.gadget.Gadget.prototype.setAutoRefresh=function(g){return this._window.setAutoRefresh(g)};portal.gadget.Gadget.prototype.registerInclude=function(g){this.includes.push(g)};portal.gadget.Gadget.prototype.refreshIncludes=function(j){var h=this.includes,i=h.length;j=j||function(){};if(i){for(var g=0;g<h.length;++g){h[g].refresh(function(){!--i&&j()})}}else{j()}};portal.gadget.Template=function(h){var i=h,l=-1,k=[],g={},j="";while((l=i.indexOf("${"))>=0){if(l!==0){k.push(i.slice(0,l));i=i.slice(l)}l=i.indexOf("}");if(l<0){throw new Error("Template instance creation failed! Reason: incomplete replacement variable definition.")}j=i.slice(2,l);if(!j){throw new Error("Template instance creation failed! Reason: empty variable definition.")}k.push("");g[j]=k.length-1;i=i.slice(l+1)}k.push(i);this._compiled=k;this._variables=g};portal.gadget.Template.prototype.generate=function(i){var h=typeof i=="function"?i:function(l){return i[l]},g=this._variables,k=this._compiled;for(var j in g){if(g.hasOwnProperty(j)){k[g[j]]=h(j)}}return k.join("")};portal.gadget.HttpParam=function(i,j,h,g){this.name=new portal.gadget.Template(i||String(portal.gadget.HttpParam.id++));this.value=new portal.gadget.Template(String(j));this.destination=h=="proxy"?"proxy":"target";this.method=g||"GET"};portal.gadget.HttpParam.id=0;portal.gadget.HttpParam.PROXY_PARAM_PREFIX="internal-";portal.gadget.HttpParam.prototype.toQueryString=function(g){return encodeURIComponent(this.getName(g))+"="+encodeURIComponent(this.getValue(g))};portal.gadget.HttpParam.prototype.getName=function(h){function i(j){return h.getPreference(j)}var g=this.name.generate(i);if(this.destination=="proxy"&&this.method=="POST"){g=portal.gadget.HttpParam.PROXY_PARAM_PREFIX+g}return g};portal.gadget.HttpParam.prototype.getValue=function(g){function h(i){return g.getPreference(i)}return this.value.generate(h)};portal.gadget.HttpPreferenceParam=function(h,g){portal.gadget.HttpParam.call(this,h,"","target",g)};portal.gadget.HttpPreferenceParam.prototype=e(portal.gadget.HttpParam);portal.gadget.HttpPreferenceParam.prototype.getValue=function(g){return g.getPreference(this.getName(g))};portal.gadget.HttpPreferenceParam.prototype.toQueryString=function(l){var k=[];var g=this.getValue(l).split(",");var h=encodeURIComponent(this.getName(l))+"=";for(var j=0;j<g.length;j++){k.push(h+encodeURIComponent(g[j]))}return k.join("&")};portal.gadget.HttpParams=function(){this._params=[]};portal.gadget.HttpParams.prototype.add=function(g){if(g instanceof portal.gadget.HttpParam){this._params.push(g)}else{throw new Error("Attempt to add not an HttpParam instance to HttpParams collection!")}};portal.gadget.HttpParams.prototype.toQueryString=function(l,h,j){var k=this._params,m=[],i=null;for(var g=0;g<k.length;++g){i=k[g];if(i.method==h&&(!j||i.destination==j)){m.push(i.toQueryString(l))}}return m.join("&")};portal.gadget.HttpParams.prototype.toJSONObject=function(l,n,p){var h=this._params,m={},g=null,j=null;for(var i=0;i<h.length;++i){g=h[i];if(g.method==n&&(!p||g.destination==p)){var k=g.getName(l);var o=g.getValue(l);if(!m[k]){m[k]=o}else{if(typeof m[k]=="string"){m[k]=[m[k],o]}else{m[k].push(o)}}}}return m};portal.gadget.IncludeConfig=function(h){var k=h.url,n=k.match(/([^\?]*)\??([^\?]*)/);this.url=new portal.gadget.Template(n[1]);this.proxy=h.proxy;this.method=h.method;var j=n[2],l=j?j.split("&"):[],m=null,i=new portal.gadget.HttpParams();for(var g=0;g<l.length;++g){m=l[g].split("=");if(m[1]){i.add(new portal.gadget.HttpParam(m.shift(),m.join("="),"target","GET"))}}this.httpParams=i};portal.gadget.IncludeConfig.CSS_CLASS="p-include";portal.gadget.Include=function(g,h,i){if(!(g instanceof portal.gadget.Gadget)){throw new Error("Not a portal.gadget instance passed to portal.gadget.Include!")}if(!h||h.nodeType!=1){throw new Error("Incorrect view gate was passed to portal.gadget.Include!")}if(!(i instanceof portal.gadget.IncludeConfig)){throw new Error("Not a portal.gadget.IncludeConfig instance passed to portal.gadget.Include!")}this.gadget=g;this.viewGate=h;this.config=i};portal.gadget.Include.setTitleFromHttpHeader=false;portal.gadget.Include.prototype.setContent=function(i,g){var h=this.viewGate;while(h.firstChild){h.removeChild(h.firstChild)}if(g){while(i.firstChild){h.appendChild(i.firstChild)}}else{h.appendChild(i)}};portal.gadget.Include.prototype.refresh=function(l){function m(n){return g.getPreference(n)}l=l||function(){};var h=this,g=this.gadget,j=this.config.httpParams,i=j.toQueryString(g,"GET","target"),k=this.config.url.generate(m);if(!this.config.proxy){k=bb.uri.resolveUri(k,g.src)}k=k+(i?(k.indexOf("?")!=-1?"&":"?")+i:"");if(this.config.proxy){k=gadgets.io.getProxyUrl(k,j.toJSONObject(g,"GET","proxy"))}gadgets.io.makeRequest(k,function(o){if(portal.gadget.Include.setTitleFromHttpHeader){var n=o.getHeader("X-BB-Portal-Title");if(n){g.setTitle(n)}else{var p=g._class;g.setTitle(p.title||"")}}h.setContent(bb.html.createElementFromString("<div>"+o.text+"</div>"),true);l.call(g,o)},{method:this.config.method,headers:{Referer:g.src},data:this.config.method=="POST"?j.toQueryString(g,"POST"):""})}})();
/*
 * Opensocial gadgets API http://www.opensocial.org/
 * Backbase implementation for opensocial API support, based on 0.8 spec.
 * Copyright 2010 Backbase - All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var gadgets=window.gadgets||{};if(!gadgets.config){gadgets.config={proxyUrl:"proxy"}}if(window.portal){gadgets.config.proxyUrl=portal.baseURI+"/"+gadgets.config.proxyUrl}gadgets.io=function(){return{encodeValues:function(a){var e=[],d;for(var c in a){if(a.hasOwnProperty(c)){d=a[c];if(typeof d=="object"&&d.length){for(var b=0;b<d.length;b++){e.push(encodeURIComponent(c),"=",encodeURIComponent(d[b]),"&")}}else{e.push(encodeURIComponent(c),"=",encodeURIComponent(d),"&")}}}return e.join("")},getProxyUrl:function(a,b){b=b||{};if(a){b.url=a}return gadgets.config.proxyUrl+(gadgets.config.proxyUrl.indexOf("?")==-1?"?":"&")+gadgets.io.encodeValues(b)},makeRequest:function(b,h,c){c=c||{};var a=c[gadgets.io.RequestParameters.METHOD]||gadgets.io.MethodType.GET;var d=c[gadgets.io.RequestParameters.HEADERS]||{};var f=c[gadgets.io.RequestParameters.POST_DATA]||null;var g=c[gadgets.io.RequestParameters.TIMEOUT]||30000;if(a===gadgets.io.MethodType.POST&&!d["Content-Type"]&&f){d["Content-Type"]="application/x-www-form-urlencoded"}var j=new XMLHttpRequest();j.open(a,b,true);for(var e in d){if(d.hasOwnProperty(e)){j.setRequestHeader(e,d[e])}}if(g){if(typeof g!="number"){g=parseInt(g,10)}g=setTimeout(function(){j.abort()},g)}j.onreadystatechange=function(){if(j.readyState==2){j._headersReceived=true}if(j.readyState==4){if(g){clearTimeout(g)}if(h){var n={text:j.responseText,data:null,errors:[],status:j.status,headers:{}};var m=j._headersReceived?String(j.getAllResponseHeaders()).split("\n"):[];for(var k=0;k<m.length;k++){var o=bb.string.trim(m[k]).split(": ");if(o.length>1){n.headers[o.shift()]=o.join(": ")}}n.getHeader=function(p){p=(p||"").toLowerCase();for(var i in this.headers){if(this.headers.hasOwnProperty(i)){if((i||"").toLowerCase()==p){return this.headers[i]}}}return null};if(bb.browser.opera&&!j.status){j.status=204;j.statusText="No Content"}if((!j.status&&(location.protocol=="file:"||location.protocol=="chrome:"))||(j.status>=200&&j.status<300)||j.status==304||j.status==1223){switch(c[gadgets.io.RequestParameters.CONTENT_TYPE]){case gadgets.io.ContentType.DOM:n.data=j.responseXML;break;case gadgets.io.ContentType.JSON:try{n.data=gadgets.json.parse(j.responseText)}catch(l){n.errors[n.errors.length]=l.message||l}break;case gadgets.io.ContentType.FEED:n.errors[n.errors.length]="Not implemented";break;case gadgets.io.ContentType.TEXT:default:n.data=j.responseText;break}}else{if(j.status==0){n.errors[n.errors.length]="No connection to server"}else{n.errors[n.errors.length]="HTTP error:"+j.status;if(j.statusText){n.errors[n.errors.length]=j.statusText}}}h(n)}}};j.send(f);return j}}}();gadgets.io.RequestParameters={METHOD:"method",CONTENT_TYPE:"type",POST_DATA:"data",HEADERS:"headers",AUTHORIZATION:"authorization",NUM_ENTRIES:"NUM_ENTRIES",GET_SUMMARIES:"GET_SUMMARIES",TIMEOUT:"timeout"};gadgets.io.MethodType={GET:"GET",POST:"POST",PUT:"PUT",DELETE:"DELETE",HEAD:"HEAD"};gadgets.io.ContentType={TEXT:"text",DOM:"xml",JSON:"json",FEED:"feed"};gadgets.io.AuthorizationType={NONE:"NONE",SIGNED:"SIGNED",OAUTH:"OAUTH"};gadgets.io.ProxyUrlRequestParameters={REFRESH_INTERVAL:"refresh",BACKBASE_PTC_PIPE:"pipe"};if(!this.JSON){JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z"};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==="string"){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}})();gadgets.json=function(){return{stringify:JSON.stringify,parse:function(b){b=b.replace(/\\x(..)/g,"\\u00$1");try{b=JSON.parse(b)}catch(a){a.message+=". Source: "+b;throw a}return b}}}();gadgets.pubsub=function(){return{publish:function(a,c){var b=bb.document.createEvent("CustomEvent");b.initCustomEventNS("gadgets.pubsub",a,false,false,c);bb.document.dispatchEvent(b)},subscribe:function(a,b){b._subscribeEvent=function(c){b(c.detail)};bb.document.addEventListenerNS("gadgets.pubsub",a,b._subscribeEvent,false)},unsubscribe:function(a,b){bb.document.removeEventListenerNS("gadgets.pubsub",a,b._subscribeEvent,false);b._subscribeEvent=null}}}();gadgets.util=function(){function d(h){var i;var g=h;var e=g.indexOf("?");var f=g.indexOf("#");if(f===-1){i=g.substr(e+1)}else{i=[g.substr(e+1,f-e-1),"&",g.substr(f+1)].join("")}return i.split("&")}var c=null;var a={0:false,10:true,13:true,34:true,39:true,60:true,62:true,92:true,8232:true,8233:true};function b(e,f){return String.fromCharCode(f)}return{getUrlParameters:function(o){if(c!==null&&typeof o==="undefined"){return c}var k={};c={};var f=d(o||document.location.href);var m=window.decodeURIComponent?decodeURIComponent:unescape;for(var h=0,g=f.length;h<g;++h){var l=f[h].indexOf("=");if(l===-1){continue}var e=f[h].substring(0,l);var n=f[h].substring(l+1);n=n.replace(/\+/g," ");k[e]=m(n)}if(typeof o==="undefined"){c=k}return k},escapeString:function(k){if(!k){return k}var f=[],h,l;for(var g=0,e=k.length;g<e;++g){h=k.charCodeAt(g);l=a[h];if(l===true){f.push("&#",h,";")}else{if(l!==false){f.push(k.charAt(g))}}}return f.join("")},unescapeString:function(e){if(!e){return e}return e.replace(/&#([0-9]+);/g,b)}}}();gadgets.util.getUrlParameters();
/*
 * Portal API Implementation
 * Copyright 2010 Backbase - All rights reserved.
 */
var portal=window.portal||{};(function(){var i=!!document.namespaces;function j(m,o,n){m.addEventListener?m.addEventListener(o,n,false):m.attachEvent("on"+o,n)}function h(r,t,s,n,m,q){var o="";if(typeof s=="number"){var p=new Date();p.setTime(p.getTime()+(s*24*60*60*1000));o+="; expires="+p.toUTCString()}o+="; path="+(typeof n=="string"?n:"/");if(typeof m=="string"){o+="; domain="+m}if(q){o+="; secure"}document.cookie=encodeURIComponent(r)+"="+encodeURIComponent(t)+o}function f(){var p={};var n=document.cookie.split("; ");for(var o=0;o<n.length;o++){var m=n[o].split("=");p[decodeURIComponent(m[0])]=decodeURIComponent(m[1])}return p}function k(){this._oPreferences={}}k.prototype.setValue=function(m,n){this._oPreferences[m]=n};k.prototype.hasKey=function(m){return m in this._oPreferences};k.prototype.getValue=function(m){return this._oPreferences[m]};function e(n,m){if(n&&typeof localStorage!="undefined"){this._oStorage=localStorage}else{if(n&&typeof globalStorage!="undefined"){this._oStorage=globalStorage[document.location.hostname]}else{this._oStorage==null}}this._sPrefix=m||"bb-standalone-localStorage-"}e.prototype.setValue=function(m,n){if(this._oStorage){this._oStorage[m]=n}else{h(this._sPrefix+m,n,365)}};e.prototype.hasKey=function(m){if(this._oStorage){return m in this._oStorage}else{return(this._sPrefix+m) in f()}};e.prototype.getValue=function(m){if(this._oStorage){return this._oStorage[m]}else{return f()[this._sPrefix+m]}};function l(o){var n=document.createElement("div"),p=new portal.gadget.IncludeConfig({url:String(o.getAttribute("src")||""),proxy:(o.getAttribute("proxy")||"").toLowerCase()=="true",method:(o.getAttribute("method")||"GET").toUpperCase()});var s=o.getElementsByTagName("*");for(var m=0,q=null;m<s.length;++m){q=s[m];var r=String(q.nodeName).toLowerCase().split(":").pop();if(/http-(proxy-)?param/.test(r)){p.httpParams.add(new portal.gadget.HttpParam(q.getAttribute("name"),q.getAttribute("value"),r=="http-proxy-param"?"proxy":"target",q.getAttribute("method")))}else{if(r=="http-preference-param"){p.httpParams.add(new portal.gadget.HttpPreferenceParam(q.getAttribute("name"),q.getAttribute("method")))}else{if(q.parentNode==o){n.appendChild(q.cloneNode(true))}}}}n.className=portal.gadget.IncludeConfig.CSS_CLASS;o.parentNode.replaceChild(n,o);return p}function d(m){this.preferences={};this.includes=[];this.handlers={};this.src=String(m.src);this.icon="";this.title=""}d.prototype.build=function(r){var v=r.getElementsByTagName((i?"":"g:")+"preference");var n=r.documentElement;var p=r.body;for(var m=0,o;o=v[m];m++){if(!i||o.scopeName=="g"){this.preferences[o.getAttribute("name")]={type:o.getAttribute("type"),"default":o.getAttribute("default"),label:o.getAttribute("label"),onchange:o.getAttribute("onchange"),values:[]}}}var v=r.getElementsByTagName((i?"":"g:")+"include");var u=[];while(o=v[0]){if(!i||o.scopeName=="g"){this.includes.push(l(o))}}this.htmlClass=n.getAttribute("class");this.htmlStyle=n.getAttribute("style");this.bodyClass=p.getAttribute("class");this.bodyStyle=p.getAttribute("style");var s=p.attributes;for(var m=0,t,q;t=s[m];m++){q=t.nodeName.toLowerCase();if(q.substr(0,4)=="g:on"){this.handlers[q.substr(4)]=t.nodeValue}}};function g(n,o,q){this.id=n;this.storage=q;this.gadgetClass=o;this.gadget=new portal.gadget.Gadget(n,document.body,o,this);if(o.includes.length){if(!window.bb){throw"	The backbase client framework is required if you want to use g:include and run a gadget standalone"}var p=bb.selector.queryAll(document.body,"."+portal.gadget.IncludeConfig.CSS_CLASS);for(var m=0;m<o.includes.length;++m){this.gadget.registerInclude(new portal.gadget.Include(this.gadget,p[m],o.includes[m]))}}}g.prototype.load=function(){var m=this;this.gadget.refreshIncludes(function(){new Function("event",m.gadgetClass.handlers.load)();j(window,"unload",new Function("event",m.gadgetClass.handlers.unload))})};g.prototype.setPreference=function(m,n){this.storage.setValue(m,n)};g.prototype.getPreference=function(m){return(this.storage.hasKey(m)?this.storage.getValue(m):this.gadgetClass.preferences[m]["default"])||""};g.prototype.setTitle=function(m){var n=document.createElement("div");n.innerHTML=m;document.title=n.innerText||n.textContent;n=null};g.prototype.showLoading=function(){};g.prototype.hideLoading=function(){};g.prototype.setIcon=function(){};g.prototype.showPreferences=function(){};g.prototype.hidePreferences=function(){};g.prototype.maximize=function(){};g.prototype.minimize=function(){};g.prototype.restore=function(){};g.prototype.setAutoRefresh=function(){if(this.autoRefreshInterval){clearInterval(this.autoRefreshInterval)}this.autoRefreshInterval=parseInt(minutes)>0?setInterval(new Function("event",this.gadgetClass.handlers.refresh),minutes*60000):null};g.prototype.setPreferenceFromElement=function(){};function c(){if(arguments.callee.isLoaded){return}arguments.callee.isLoaded=true;if(window.bb&&!window.bbDoOnload){throw"portal standalone.js should be declared after the backbase javascript engine file"}var m=new d({src:String(document.location.href)});m.build(document);var o=new e(true,"bb-standalone-gadget-"+m.src);var n=new g("__GADGET__",m,o);n.load();j(window,"unload",b)}function b(){}if(window.bb){window.bbDoOnload=c;bb.preRegisterXMLString('<script xmlns="http://www.backbase.com/2006/xel" type="text/javascript">bb.document.addEventListener("load", window.bbDoOnload, false);<\/script>')}else{if(i){var a=setInterval(function(){var n=document.createElement("p");try{n.doScroll("left");clearInterval(a);a=null;c();n=null}catch(m){n=null}},1)}else{j(document,"DOMContentLoaded",c)}}})();
