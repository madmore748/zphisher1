absa.form=absa.form||{};absa.form.attachHandlers=function(m,k){if(!k){k=absa.form.handlers}var g=bb.selector.queryAll(m,".ui-form");if(g.length){for(var i=0;i<g.length;i++){bb.html.addEventListener(g[i],"submit",function(c){if(c.stopPropagation){c.stopPropagation()}if(c.preventDefault){c.preventDefault()}if(bb.browser.ie){c.returnValue=false}if(this.getAttribute("formtype")!="nosubmit"){absa.form.validateAndSubmit(this)}return false});bb.html.addEventListener(g[i],"reset",function(c){var o=c.target||c.srcElement;absa.form.cleanValidate(o);if(o&&o._trackUnconfirmedChanges){o._changed=false}});absa.form.attachFormFieldHandlers(g[i],k)}}else{var n=bb.selector.queryAncestor(m,".ui-form");if(n){var e=bb.selector.queryAll(m,"input, select, button, textarea");if(e){absa.form.attachFormFieldHandlers(n,k,e)}}}var d=bb.selector.query(m,".ui-form-field[bbf_autofocus=true]");if(d&&d.offsetHeight>0){d.focus();d.focus()}var f=bb.selector.query(m,".ap-SVM-form");if(f){var h=phe.form.getAttribute(f,"data-timeStart");var b=phe.form.getAttribute(f,"data-timeRemaining");if(Number(b)==Number(h)){var a=phe.form.getAttribute(f,"data-isUnAuth");var j={};j.form=f;if(a=="true"){j.isUnAuth=true}gadgets.pubsub.publish("SVM-form-loaded",j)}}var l=bb.selector.query(m,".ap-simSwopHold-form");if(l){gadgets.pubsub.publish("simSwopHold-form-loaded",l)}};absa.form.disableEnableFormButtons=function(e,a){var d=a=="disable"?true:false;for(var f=0;f<e.elements.length;f++){var b=e.elements[f];if(b.tagName.toLowerCase()=="button"||b.getAttribute("type")=="submit"||b.getAttribute("type")=="reset"||b.getAttribute("type")=="button"){if(d){phe.button.disableButton(b)}else{phe.button.enableButton(b)}}}};absa.form.validateAndSubmit=function(c){if(bb.browser.ie){phe.helpText.hideHelptext()}absa.form.disableEnableFormButtons(c,"disable");var a=absa.form.validate(c);if(a){var d=absa.util.attributeToFunction(c,"oncallback",["response"]);var b=absa.util.attributeToFunction(c,"onbeforesubmit");absa.form.submit(c,d,b)}else{absa.form.disableEnableFormButtons(c,"enable")}};absa.form.attachFormFieldHandlers=function(o,p,r){var g=o.getAttribute("formtype");if(o.getAttribute("trackUnconfirmedChanges")==="true"){o._trackUnconfirmedChanges=true}else{o._trackUnconfirmedChanges=false}var q=(g!=null)?((absa[g]!=null)?absa[g]["handlers"]:null):null;var f=(q!=null)?((q.blur!=null)?q.blur:p.blur):p.blur;var h=(q!=null)?((q.change!=null)?q.change:p.change):p.change;var k=(q!=null)?((q.focus!=null)?q.focus:p.focus):p.focus;var a=(q!=null)?((q.mouseover!=null)?q.mouseover:p.mouseover):p.mouseover;var e=(q!=null)?((q.mouseout!=null)?q.mouseout:p.mouseout):p.mouseout;var j=r||o.elements||[];var n=bb.selector.queryAll(o,".ap-icon-info");if(n[0]){for(var m=0;m<n.length;m++){bb.html.addEventListener(n[m],"mouseover",function(b){if(bb.browser.ie){b.currentView=b.srcElement}else{b.currentView=b.currentTarget}absa.showMeHow.showHelpText(b.currentView)});bb.html.addEventListener(n[m],"mouseout",function(b){phe.helpText.hideHelptext()})}}for(var i=0;i<j.length;i++){var l=j[i];var d=l.tagName.toLowerCase();if((d=="input"&&(l.getAttribute("type")!="submit"))||d=="select"||d=="textarea"){bb.html.addEventListener(l,"blur",function(b){if(bb.browser.ie){b.currentView=b.srcElement}else{b.currentView=b.currentTarget}f(b.currentView)});bb.html.addEventListener(l,"change",function(b){if(bb.browser.ie){b.currentView=b.srcElement}else{b.currentView=b.currentTarget}h(b.currentView)});bb.html.addEventListener(l,"focus",function(b){if(bb.browser.ie){b.currentView=b.srcElement}else{b.currentView=b.currentTarget}k(b.currentView)});bb.html.addEventListener(l,"mouseover",function(b){if(bb.browser.ie){b.currentView=b.srcElement}else{b.currentView=b.currentTarget}a(b.currentView)});bb.html.addEventListener(l,"mouseout",function(b){if(bb.browser.ie){b.currentView=b.srcElement}else{b.currentView=b.currentTarget}e(b.currentView)})}}};absa.form.handlers=absa.form.handlers||{};absa.form.handlers.blur=function(a){a.isFocus=false;if(!a.name){return}var b=absa.form.validate.checkElement(a);phe.helpText.hideHelptext()};absa.form.handlers.change=function(c){if(!c.name){return}if(c.form&&c.form._trackUnconfirmedChanges&&c.getAttribute("trackUnconfirmedChanges")!="false"){c.form._changed=true}var d=absa.form.validate.checkElement(c);if(d){phe.helpText.hideHelptext()}var b=bb.selector.queryAncestor(c,".ap-container")||bb.selector.queryAncestor(c,".ui-modal-content");if(b){var a=bb.selector.query(b,".p-gadget-header");if(c.offsetHeight>0&&c.offsetWidth>0){if(a!=null){bb.html.addEventListener(a,"click",function(){if(c.form){c.form._changed=false}})}}else{if(a){bb.html.removeEventListener(a,"click",function(){return})}}}};absa.form.handlers.focus=function(a){var c=bb.selector.queryAncestor(a,".ui-tableBodyRowExpandableExtension")||bb.selector.queryAncestor(a,".p-gadget-content")||bb.selector.queryAncestor(a,".ui-modal-content")||bb.selector.queryAncestor(a,".ap-container")||bb.selector.queryAncestor(a,".ap-container-content");if(c&&bb.selector.match(c,".ui-showMeHow")){absa.showMeHow.showHelpText(a)}else{if(bb.selector.match(a,".ui-incorrect-value")){phe.helpText.showHelptext(a);absa.vi.setState(a,"aria-invalid","true");var b=". "+absa.locale["Common/General/Label/ErrorMessage"];b+=" "+a.getAttribute("helpText");if(bb.browser.ie){b+=". "+absa.locale["Common/General/Label/Invalid"]}absa.vi.applyInputLabel(a,b,absa.vi.getLabelObject(a))}else{phe.helpText.hideHelptext();absa.vi.setState(a,"aria-invalid","false");absa.vi.setInputLabel(a)}}a.isFocus=true};absa.form.handlers.mouseover=function(a){var b=bb.selector.queryAncestor(a,".ui-tableBodyRowExpandableExtension")||bb.selector.queryAncestor(a,".p-gadget-content")||bb.selector.queryAncestor(a,".ap-container-content")||bb.selector.queryAncestor(a,".ui-modal-content");if(b&&bb.selector.match(b,".ui-showMeHow")){absa.showMeHow.showHelpText(a)}else{if(bb.selector.match(a,".ui-incorrect-value")){phe.helpText.showHelptext(a)}}};absa.form.handlers.mouseout=function(a){var b=bb.selector.queryAncestor(a,".p-gadget-content")||bb.selector.queryAncestor(a,".ap-container-content")||bb.selector.queryAncestor(a,".ui-modal-content");if(bb.selector.match(a,".ui-incorrect-value")&&(!a.isFocus)||b&&bb.selector.match(b,".ui-showMeHow")){phe.helpText.hideHelptext()}};absa.form.submit=function(l,f,g){if(g){g.call(l)}absa.form.hideValidationErrors(l);var h=String(l.getAttribute("method")).toUpperCase();var c=String(l.getAttribute("action"));var j="";var n=bb.selector.queryAll(l,".ap-table-stickyRow");if(n.length>0){var d=document.createElement("form");var e=document.createElement("table");var k=document.createElement("tbody");for(var b=0;b<n.length;b++){var m=n[b].cloneNode(true);k.appendChild(m)}e.appendChild(k);d.appendChild(e);j=absa.form.buildQueryString(d.elements)}else{j=absa.form.buildQueryString(l.elements)}if(h=="POST"){if(!l){return}bb.html.addClass(l,"p-include-loading");var i={};i[gadgets.io.RequestParameters.METHOD]=gadgets.io.MethodType.POST;i[gadgets.io.RequestParameters.POST_DATA]=j;phe.loadingMessage.showLoadingMessage(l,absa.locale["Common/General/Label/Processing"]+"...");var a=l.style.position;l.style.position="relative";phe.form.displayIOErrorMessage(l,false);absa.io.makeRequest(c,function(r){absa.form.disableEnableFormButtons(l,"enable");l.style.position=a;bb.html.removeClass(l,"p-include-loading");phe.loadingMessage.hideLoadingMessage(l);if(!r.errors.length){if(f){f.apply(l,arguments)}else{var s=bb.html.createElementFromString(r.text);var u=bb.selector.query(s,".validationErrors");if(u){absa.form.showValidationErrors(l,u)}else{l.parentNode.replaceChild(s,l);absa.initializeNewContent(s);var o=bb.selector.queryAncestor(s,".p-gadget-content");if(o==null){o=bb.selector.queryAncestor(s,".ui-tabBody-selected")}if(o==null){o=bb.selector.queryAncestor(s,".ap-container-content")}if(o!=null){var p=bb.selector.query(o,".ui-wizard");if(p==null){var t=bb.selector.queryAll(s,".ui-slider");if(t){if(t.length){for(var q=0;q<t.length;q++){phe.slider.initializeBehavior(t[q])}}}}}}}}else{phe.form.displayIOErrorMessage(l,true,r.status,r.errors)}},i)}else{bb.history.add(c+(c.indexOf("?")==-1?"?":"&")+j)}return false};absa.form.validate=function(l){var e=true;var b=0;for(var j=0;j<l.elements.length;j++){var k=l.elements[j];if(!k.disabled&&k.name&&k.getAttribute("type")!="hidden"&&(k.offsetHeight>0&&k.offsetWidth>0)){var d=k.tagName.toLowerCase();if(d=="input"||d=="select"||d=="textarea"||d=="checkbox"){var a;if(d=="select"){a="select"}else{if(d=="textarea"){a="textarea"}else{a=(k.getAttribute("type")!=null)?k.getAttribute("type").toLowerCase():"text"}}if((a=="checkbox")||(a=="text")||(a=="tel")||(a=="email")||(a=="number")||(a=="password")||(a=="select")||(a=="textarea")||(a=="input")){var h;if(bb.html.hasClass(k,"ui-fileUpload--value")){var i=bb.selector.queryAncestor(k,".ui-fileUpload"),g=bb.selector.query(i,".ui-fileUpload--input");if(bb.html.hasClass(k,"ui-fileUpload_working")){b++;e=false;h=phe.inputReadOnlyText.getAttribute(g,"data-fileUploadValidationText");g.setAttribute("helptext",h);bb.html.addClass(g,"ui-incorrect-value")}else{g.setAttribute("helptext",phe.inputReadOnlyText.getAttribute(g,"requiredText"));if(!absa.form.validate.checkElement(k)){b++;e=false;bb.html.addClass(g,"ui-incorrect-value")}else{bb.html.removeClass(g,"ui-incorrect-value")}}}else{if(!absa.form.validate.checkElement(k)){b++;e=false;if(b==1){k.focus()}}}}}}}var f=absa.util.attributeToFunction(l,"customValidation");if(f){if(!f.call(l)){e=false}}absa.form.validate.toggleErrorMessage(l,e);return e};absa.form.cleanValidate=function(d){for(var f=0;f<d.elements.length;f++){var b=d.elements[f];if(!b.disabled){var a=b.tagName.toLowerCase();if(a=="input"||a=="select"||a=="textarea"){var e;if(a=="select"){e="select"}else{if(a=="textarea"){e="textarea"}else{e=(b.getAttribute("type")!=null)?b.getAttribute("type").toLowerCase():"text"}}if((b.name)&&((e=="checkbox")||(e=="text")||(e=="password")||(e=="select")||(e=="textarea"))){absa.form.validate.toggleErrorMessage(b,true)}}}}absa.form.validate.toggleErrorMessage(d,true)};absa.form.validate.REQUIRED_VALIDATION_ERROR=1;absa.form.validate.SCHEMA_TYPE_VALIDATION_ERROR=2;absa.form.validate.DATE_PICKER_VALIDATION_ERROR=3;absa.form.validate.CUSTOM_VALIDATION_ERROR=4;absa.form.validate.FILE_NOT_UPLOADED_VALIDATION_ERROR=5;absa.form.validate.DATE_PICKER2_VALIDATION_ERROR=6;absa.form.validate.checkElement=function(f,e,j,m){var i=bb.selector.query(f,"input");if(i){f=i}var b=true;var l=f.getAttribute("bbf_required")=="true";var k=(e?e.join("-"):f.value);var a=(e?j:bb.string.trim(k)=="");var n=f.getAttribute("bbf_type");var h=0;if(f.getAttribute("type")&&f.getAttribute("type").toLowerCase()=="checkbox"){a=!f.checked}if((absa.VI=="true")&&f.getAttribute("type")&&f.getAttribute("type").toLowerCase()=="text"){var d=i.value;i.value=bb.string.trim(d)}if(l){b=!a;if(!b){h=absa.form.validate.REQUIRED_VALIDATION_ERROR}}if(b&&n&&!a){n=n.split(":")[1]||n;var g=bb.schema.getType("http://ws.online.absa.co.za/common/simpleTypes/",n);if(g){b=b&&bb.schema.validateSimpleType(k,g,null);if(!b){h=absa.form.validate.SCHEMA_TYPE_VALIDATION_ERROR}}}if(b&&bb.html.hasClass(f,"ui-datePicker--input")){b=b&&phe.datePicker.validateDate(f);if(!b){h=absa.form.validate.DATE_PICKER_VALIDATION_ERROR}}if(b&&bb.html.hasClass(f,"ui-datePicker2--input")){b=b&&phe.datePicker2.validateDate(f);if(!b){h=absa.form.validate.DATE_PICKER2_VALIDATION_ERROR}}var c=absa.util.attributeToFunction(f,"customValidation");if(b&&c){b=b&&c.call(f);if(!b){h=absa.form.validate.CUSTOM_VALIDATION_ERROR}}if(!m){absa.form.validate.toggleErrorMessage(f,b,h)}return b};absa.form.validate.toggleErrorMessage=function(e,d,f){var h=e.form||e;var b="";if(!bb.selector.match(e,".ui-form")){if(d){bb.html.removeClass(e,"ui-incorrect-value");e.removeAttribute("helpText");if(bb.browser.ie&&(bb.browser.version<8)&&(e.tagName.toLowerCase()=="select")){e.parentNode.style.border=""}}else{bb.html.addClass(e,"ui-incorrect-value");switch(f){case absa.form.validate.REQUIRED_VALIDATION_ERROR:b=e.getAttribute("requiredText");break;case absa.form.validate.SCHEMA_TYPE_VALIDATION_ERROR:b=e.getAttribute("schemaTypeText");break;case absa.form.validate.DATE_PICKER_VALIDATION_ERROR:b=e.getAttribute("datePickerErrorMsg");break;case absa.form.validate.DATE_PICKER2_VALIDATION_ERROR:b=e.getAttribute("datePicker2ErrorMsg");break;case absa.form.validate.CUSTOM_VALIDATION_ERROR:b=e.getAttribute("customValidationText");break;default:b=f}e.setAttribute("helptext",b)}}else{if(d){bb.html.removeClass(e,"ui-form-incorrect-values")}else{bb.html.addClass(e,"ui-form-incorrect-values")}}var a=e.getAttribute("validate-as");if(a){for(var g=bb.selector.queryAll(h,".absa-for-"+a),i=0;i<g.length;i++){if(g[i]){g[i].style.display=(d?"none":"block")}}}};absa.form.buildQueryString=function(g){var e=[];for(var d=0,a=g.length;d<a;d++){var c=g[d];if(!c.disabled&&c.name){switch(c.tagName.toLowerCase()){case"input":switch(c.type){case"radio":case"checkbox":if(c.checked){e.push(c.name+"="+encodeURIComponent(c.value))}break;default:var h=c.value;e.push(c.name+"="+encodeURIComponent(h))}break;case"select":if(c.multiple){for(var b=0;b<c.options.length;b++){var f=c.options[b];if(f.selected){if(bb.browser.ie&&(!f.attributes.value||!f.attributes.value.specified)){e.push(c.name+"="+encodeURIComponent(f.innerText))}else{e.push(c.name+"="+encodeURIComponent(f.value))}}}}else{if(c.selectedIndex!=-1){var f=c.options[c.selectedIndex];if(bb.browser.ie&&(!f.attributes.value||!f.attributes.value.specified)){e.push(c.name+"="+encodeURIComponent(f.innerText))}else{e.push(c.name+"="+encodeURIComponent(f.value))}}}break;case"textarea":e.push(c.name+"="+encodeURIComponent(c.value));break;case"button":if(c.type=="submit"&&document.activeElement==c){e.push(c.name+"="+encodeURIComponent((c.innerText||c.textContent)))}break}}}return e.join("&")};absa.form.isFormChanged=function(c){var a=bb.selector.queryAll(c,'.ui-form[trackUnconfirmedChanges="true"]');for(var b=0;b<a.length;b++){var d=a[b];if(d._changed&&d.offsetHeight>0&&d.offsetWidth>0){return true}}return false};absa.form.hideValidationErrors=function(a){var b=bb.selector.query(a,".validation-place-holder");if(b){b.innerHTML=""}};absa.form.showValidationErrors=function(k,c){var g=bb.selector.query(k,".validation-place-holder");var e=bb.selector.queryAll(c,".validationError");var a=bb.selector.query(c,".validationMessages");if(e.length>0){for(var d=0;d<e.length;d++){var j=e[d].getAttribute("field");var b=j.indexOf("[");var l=e[d].getAttribute("key");var f=bb.selector.query(k,'*[name="'+j+'"]');if(f==null){f=bb.selector.query(k,'*[ac="'+j+'"]')}if(b>=0){f=bb.selector.query(k,"."+j.substring(0,b)+"_"+j.substring(b,j.indexOf("]")));if(f==null){f=bb.selector.query(k,'*[ac="'+j.substring(0,b)+"_"+j.substring(b,j.indexOf("]"))+'"]')}}if(j!=""&&f&&f.type!="hidden"){absa.form.validate.toggleErrorMessage(f,false,l);f.focus();var h=bb.selector.queryAncestor(f,".ui-form");phe.form.displayErrorMessage(h,true)}else{if(g&&a!=null){g.innerHTML=a.innerHTML}}}}else{if(a){if(g){g.innerHTML=a.innerHTML}}}};