var absa=window.absa||{};absa.n2fa=absa.n2fa||{};absa.n2fa.globals=absa.n2fa.globals||{};absa.n2fa.globals.oCanvas;absa.n2fa.globals.hasCanvas="false";absa.n2fa.init=function(a){if(!a){gadgets.pubsub.subscribe("SVM-form-loaded",function(b){absa.n2fa.updateFormStatusSVM(b.form,false,false,b.isUnAuth)});gadgets.pubsub.subscribe("TVM-form-loaded",function(b){absa.n2fa.updateFormStatusSVM(b,false,false,false)})}};absa.n2fa.onProcessFormCallBackSVM=function(d,b,a,c){if(typeof a=="undefined"){a=false}if(typeof c=="undefined"){c=false}absa.n2fa.updateFormStatusSVM(d,false,a,c)};absa.n2fa.updateFormStatusSVM=function(r,l,d,k){if(typeof l=="undefined"){l=false}if(typeof d=="undefined"){d=false}if(typeof k=="undefined"){k=false}var a=phe.form.getAttribute(r,"data-timeStart");var t=phe.form.getAttribute(r,"data-timeInterval");var m=phe.form.getAttribute(r,"data-timeRemaining");var n=bb.selector.query(r,".ap-n2fa-countDownTimer");var e=phe.form.getAttribute(r,"data-cellphone");var b=phe.form.getAttribute(r,"lang");if(b==null|b==""){b=absa.LANG}var h=phe.form.getAttribute(r,"data-refNo");if(h==null|h==""){h=phe.form.getAttribute(r,"data-correlationID")}var i=phe.common.getAttribute(n,"data-timeRemaining");var g=bb.selector.query(r,".ap-n2fa-errorMessageContainer");var u=bb.selector.query(r,".ap-SVM-resendButton");var o=bb.selector.query(r,".ap-SVM-sendRVNButton");var j=document.body.getAttribute("id");if(j==null){j="<none>"}var p;if(k){if(j=="ap-page-body"){p=absa.CONTEXT+"/proxy?pipe=genericWebservice"}else{p=absa.CONTEXT+"/proxy?pipe=genericWebserviceCommon"}p+="&ws=AccessControlWebService&action=getTransactionVerificationState&sId="+absa.apps.unAuthSessionID+"&lang="+b+"&referenceNumber="+encodeURIComponent(h)+"&go=now"}else{if(j=="ap-page-body"){p=absa.CONTEXT+"/proxy?pipe=genericWebservice"}else{p=absa.CONTEXT+"/proxy?pipe=genericWebserviceCommon"}p+="&ws=AccessControlWebService&action=getTransactionVerificationState&lang="+b+"&referenceNumber="+encodeURIComponent(h)+"&go=now"}if(m>(Number(a)-5)){var q=bb.selector.queryAncestor(r,".ui-wizard");if(q){var s=bb.selector.query(q,".ui-wizard-buttons");if(s){var f=bb.selector.query(s,".ap-icon-help");if(f){bb.html.replaceClass(f,"ap-icon-help","ap-icon-help-inactive")}var c=bb.selector.query(s,".ap-icon-price");if(c){phe.common.hide(c)}}}}phe.common.hide(g);phe.button.hide(u);phe.button.hide(o);var j=document.body.getAttribute("id");if(j==null){j="<none>"}if(l){if(j=="ap-page-body"){p=absa.CONTEXT+"/proxy?pipe=genericWebservice"}else{p=absa.CONTEXT+"/proxy?pipe=genericWebserviceCommon"}if(k){p+="&ws=AccessControlWebService&action=resendTransactionVerification&sId="+absa.apps.unAuthSessionID+"&referenceNumber="+encodeURIComponent(h)+"&go"}else{p+="&ws=AccessControlWebService&action=resendTransactionVerification&referenceNumber="+encodeURIComponent(h)+"&go"}}if(phe.form.isVisible(r)){absa.io.makeRequest(p,function(x){if(!x.errors.length){var B=bb.html.createElementFromString(x.text);var v=phe.common.getAttribute(B,"data-state");if((p.indexOf("resendTransactionVerification")>-1)&&(v==null)){v="Processing"}var A=3;if(l){A=Number(phe.common.getAttribute(B,"data-retries"))}var w=phe.common.getAttribute(B,"data-tranVerifType");if(w==null){w="-"}else{if(w=="SURECHECKV2_FALLBACK"){v="DO_FALLBACK"}}var y=phe.common.getAttribute(B,"data-errorCode");if(y==null){y="-"}var C=phe.common.getAttribute(B,"data-errorKey");if(C==null){C="-"}if(v=="DO_FALLBACK"&w=="SURECHECKV2_FALLBACK"){var D=bb.selector.queryAncestor(r,".ui-wizard-body-selected");if(k){D=bb.selector.queryAncestor(r,".ap-container-content")}phe.common.hide(r);var z=bb.selector.query(D,".ap-n2fa-SVM-form-fallback");phe.common.show(z)}else{if(v=="Processed"&bb.html.hasClass(r,"ap-SVM-form")){absa.n2fa.goToStepAfterSecurityVerification(r,d)}else{if(v=="Processed"&bb.html.hasClass(r,"ap-TVM-form")){absa.n2fa.goToStepAfterSecurityVerification(r)}else{if((v=="Processing")&(Number(i)>=Number(t))&&(Number(A)>=0)&(y=="-")&(C=="-")){if(n!=null){n.innerHTML=m}absa.n2fa.doCountdown(n,t,m);absa.n2fa.pollGetTransactionVerificationState(r,m,t)}else{if((v=="Processing")&&(Number(i)<Number(t))){absa.n2fa.showErrorMsg(r,B,"frontEndTimeoutError");phe.common.show(u)}else{if((v=="Processing")&(Number(A)==0)&(C.toLowerCase().indexOf("resendsexceed")>-1)){absa.n2fa.showErrorMsg(r,B,"frontEndRetriesExceededError")}else{if(v=="RevertBack"|v=="ResendRequired"){absa.n2fa.showErrorMsg(r,B,"servicesError");phe.common.show(o)}else{if(y=="InvalidAuthLevel"){if(k){absa.login.doLogout}else{absa.index.doLogout(2)}}else{absa.n2fa.showErrorMsg(r,B,"servicesError");if((Number(A)>0)&&(v!="Rejected")&&(v!="")){phe.common.show(u)}}}}}}}}}}})}};absa.n2fa.doCountdown=function(d,c,b){if(((c*1)-1)<=0){return}else{c-=1;b-=1;if(b==(absa.MAXUSSD2TIME-1)){absa.n2fa.globals.hasCanvas=phe.common.getAttribute(d,"data-canvas");if(absa.n2fa.globals.hasCanvas=="true"){var a=bb.selector.queryAncestor(d,".ui-row");absa.n2fa.globals.oCanvas=bb.selector.query(a,".ap-timer-canvas");absa.n2fa.globals.oldStartAngle=1.5;absa.n2fa.animateCanvas(absa.n2fa.globals.oCanvas,(b+1))}else{absa.n2fa.globals.hasCanvas="false"}}else{if(b>=-1){if(absa.n2fa.globals.hasCanvas=="true"){absa.n2fa.animateCanvas(absa.n2fa.globals.oCanvas,(b+1))}}}phe.common.setAttribute(d,"data-timeRemaining",b);if(d!=null){d.innerHTML=b}absa.n2fa._timer2=setTimeout(function(){absa.n2fa.doCountdown(d,c,b)},1000)}};absa.n2fa.isSupportedBrowser=function(){var a=false;if(bb.browser.name=="ie"&&bb.browser.version>=11){a=true}else{if(bb.browser.name=="edge"&&bb.browser.version>=14){a=true}else{if(bb.browser.name=="gecko"&&bb.browser.version>=52){a=true}else{if(bb.browser.name=="opera"&&bb.browser.version>=45){a=true}else{if(bb.browser.name=="webkit"&&bb.browser.version>=10.1){a=true}}}}}return a};absa.n2fa.animateCanvas=function(d,e){var f=absa.n2fa.isSupportedBrowser();if(f==false){if(d==null||d.parentNode==null){var c=document.getElementById("timerCanvasSeconds");if(c!=null){absa.n2fa.globals.oCanvas=c;c.innerText=e}}else{if(d.parentNode!=null){d.parentNode.innerHTML="<div style='background-image:url(\"/absa-online/static/style/resources/2fa/timer_circle_ie8.png\"); text-align:center; vertical-align:middle; width:50px; height:50px;'><div id='timerCanvasSeconds' style='padding-top:14px; font-family:arial; font-size:21px; color:#CC1124;'>"+e+"</div></div>"}}}else{var a=d.getContext("2d");a.beginPath();a.clearRect(0,0,50,50);a.beginPath();a.fillStyle="#F4F4F4";a.arc(25,25,20,1.5*Math.PI,-0.5*Math.PI,true);a.fill();var b=Number(e);a.beginPath();a.fillStyle="#CC1124";a.font="21px Arial";if(b<10){a.fillText(b,19,33)}else{a.fillText(b,13,33)}a.beginPath();a.strokeStyle="#CC1124";a.lineWidth=3;if(absa.MAXUSSD2TIME=="90"){switch(b){case (90):sAngle=1.5;absa.n2fa.globals.oldStartAngle=sAngle;break;case (86):sAngle=1.4;absa.n2fa.globals.oldStartAngle=sAngle;break;case (81):sAngle=1.3;absa.n2fa.globals.oldStartAngle=sAngle;break;case (77):sAngle=1.2;absa.n2fa.globals.oldStartAngle=sAngle;break;case (72):sAngle=1.1;absa.n2fa.globals.oldStartAngle=sAngle;break;case (68):sAngle=1;absa.n2fa.globals.oldStartAngle=sAngle;break;case (63):sAngle=0.9;absa.n2fa.globals.oldStartAngle=sAngle;break;case (59):sAngle=0.8;absa.n2fa.globals.oldStartAngle=sAngle;break;case (54):sAngle=0.7;absa.n2fa.globals.oldStartAngle=sAngle;break;case (50):sAngle=0.6;absa.n2fa.globals.oldStartAngle=sAngle;break;case (45):sAngle=0.5;absa.n2fa.globals.oldStartAngle=sAngle;break;case (41):sAngle=0.4;absa.n2fa.globals.oldStartAngle=sAngle;break;case (36):sAngle=0.3;absa.n2fa.globals.oldStartAngle=sAngle;break;case (32):sAngle=0.2;absa.n2fa.globals.oldStartAngle=sAngle;break;case (27):sAngle=0.1;absa.n2fa.globals.oldStartAngle=sAngle;break;case (23):sAngle=0;absa.n2fa.globals.oldStartAngle=sAngle;break;case (18):sAngle=-0.1;absa.n2fa.globals.oldStartAngle=sAngle;break;case (14):sAngle=-0.2;absa.n2fa.globals.oldStartAngle=sAngle;break;case (9):sAngle=-0.3;absa.n2fa.globals.oldStartAngle=sAngle;break;case (5):sAngle=-0.4;absa.n2fa.globals.oldStartAngle=sAngle;break;case (0):sAngle=-0.5;absa.n2fa.globals.oldStartAngle=sAngle;break;default:sAngle=absa.n2fa.globals.oldStartAngle;break}}else{switch(b){case (60):sAngle=1.5;absa.n2fa.globals.oldStartAngle=sAngle;break;case (57):sAngle=1.4;absa.n2fa.globals.oldStartAngle=sAngle;break;case (54):sAngle=1.3;absa.n2fa.globals.oldStartAngle=sAngle;break;case (51):sAngle=1.2;absa.n2fa.globals.oldStartAngle=sAngle;break;case (48):sAngle=1.1;absa.n2fa.globals.oldStartAngle=sAngle;break;case (45):sAngle=1;absa.n2fa.globals.oldStartAngle=sAngle;break;case (42):sAngle=0.9;absa.n2fa.globals.oldStartAngle=sAngle;break;case (39):sAngle=0.8;absa.n2fa.globals.oldStartAngle=sAngle;break;case (36):sAngle=0.7;absa.n2fa.globals.oldStartAngle=sAngle;break;case (33):sAngle=0.6;absa.n2fa.globals.oldStartAngle=sAngle;break;case (30):sAngle=0.5;absa.n2fa.globals.oldStartAngle=sAngle;break;case (27):sAngle=0.4;absa.n2fa.globals.oldStartAngle=sAngle;break;case (24):sAngle=0.3;absa.n2fa.globals.oldStartAngle=sAngle;break;case (21):sAngle=0.2;absa.n2fa.globals.oldStartAngle=sAngle;break;case (18):sAngle=0.1;absa.n2fa.globals.oldStartAngle=sAngle;break;case (15):sAngle=0;absa.n2fa.globals.oldStartAngle=sAngle;break;case (12):sAngle=-0.1;absa.n2fa.globals.oldStartAngle=sAngle;break;case (9):sAngle=-0.2;absa.n2fa.globals.oldStartAngle=sAngle;break;case (6):sAngle=-0.3;absa.n2fa.globals.oldStartAngle=sAngle;break;case (3):sAngle=-0.4;absa.n2fa.globals.oldStartAngle=sAngle;break;case (0):sAngle=-0.5;absa.n2fa.globals.oldStartAngle=sAngle;break;default:sAngle=absa.n2fa.globals.oldStartAngle;break}}a.arc(25,25,23,(sAngle*Math.PI),(-0.5*Math.PI),true);a.stroke()}};absa.n2fa.updateUserState=function(b){var c=false;if(b.type=="checkbox"){if(b.checked){var f=phe.checkBox.getValue(b).toLowerCase();if(f=="true"|f=="y"|f=="1"){c=true}else{c=false}}else{c=false}}else{if(b.type=="radio"){var e=phe.radioGroup.getValue(b);if(e=="true"|e=="y"|e=="1"){c=true}else{c=false}}else{try{var a=b.value.toLowerCase();if(a=="true"|a=="y"|a=="1"){c=true}}catch(d){}}}absa.n2fa._updateSecondFactorState(c)};absa.n2fa._updateSecondFactorState=function(b,e){var c=false;if(b==null){b=false}if(e==null){e=absa.SURECHECK2STATE}if(isNaN(e)){}else{switch(Number(e)){case (25):e="SURECHECKV2_SECURITYCODEREVOKED";break;case (24):e="SURECHECKV2_SECURITYCODEEXPIRED";break;case (23):e="SURECHECKV2_SECURITYCODEUSED";break;case (22):e="SURECHECKV2_SECURITYCODE";break;case (21):e="SURECHECKV2_NOPRIMARYDEVICE";break;case (20):e="SURECHECKV2";break;case (14):e="SURECHECKV2_NOSMARTPHONE";break;case (13):e="SURECHECKV2_FORCE_REGISTRATION_NEWUSER";break;case (12):e="SURECHECKV2_FORCE_REGISTRATION";break;case (11):e="SURECHECKV2_GRACEPERIOD_URGENT";break;case (10):e="SURECHECKV2_GRACEPERIOD";break;case (0):e="SURECHECKV1";break}}var a={};a.pipe="genericWebservice";a.ws="SecurityWebService";a.action="updateSecondFactorState";a.secondFactorState=e;a.snoozed=""+b;var d={};d[gadgets.io.RequestParameters.METHOD]=gadgets.io.MethodType.POST;d[gadgets.io.RequestParameters.POST_DATA]=gadgets.io.encodeValues(a);absa.io.makeRequest("proxy",function(j){if(!j.errors.length){var l=bb.html.createElementFromString(j.text);var f=bb.selector.query(l,".ap-n2fa-updateSecondFactorState");if(f){var h=f.getAttribute("result");var k=f.getAttribute("resultCode");var g=f.getAttribute("resultKey");var i=f.getAttribute("resultDefaultMessage");if(h=="success"){absa.SURECHECK2STATE=e;c=true}}}},d);return c};absa.n2fa.pollGetTransactionVerificationState=function(d,a,c){var b={};if(d!=null){b._timeout=setTimeout(function(){a-=c;phe.form.setAttribute(d,"data-timeRemaining",a);phe.form.setAttribute(d,"data-timeInterval",c);var f=false;var e=phe.form.getAttribute(d,"data-isUnAuth")||phe.form.getAttribute(d,"data-isunauth");if(e!=null){f=(e=="true")}absa.n2fa.onProcessFormCallBackSVM(d,null,false,f)},(c*1000))}};absa.n2fa.goToStepOne=function(m,j){var b;if(j){b=bb.selector.queryAncestor(m,".ap-forceLoadNode")}var n=bb.selector.queryAncestor(m,"[proxyurl]");var g=bb.selector.queryAncestor(m,".ui-tabBody");var c=bb.selector.queryAncestor(m,".ui-tableBodyRowExpandableExtension");var l=bb.selector.queryAncestor(m,".ui-modalBody[proxyurl]");var f=bb.selector.queryAncestor(m,".ap-gadget-lazyContent");var i=bb.selector.queryAncestor(m,".ap-container-content-USSD-login");if(b){absa.lazyLoadNode(b,true)}else{if(c&&c.getAttribute("dataFileView")){var k=bb.selector.queryAncestor(m,".ui-form");if(k==null){k=bb.selector.query(m,".ui-form")}if(k!=null){phe.form.setAttribute(k,"trackUnconfirmedChanges","false");k._trackUnconfirmedChanges=false;k._changed=false}phe.tableBodyRow.expandRow(c.previousSibling,phe.tableBodyRowExpandableExtention.getAttribute(c,"dataFileView"),false)}else{if(n){absa.lazyLoadNode(n,true)}else{if(g){phe.tabBody.reload(g)}else{if(l){absa.lazyLoadNode(l,true)}else{if(f){absa.lazyLoadNode(f,true)}else{if(i){doLoadNewPasswordAfterUSSD()}}}}}}}var d=bb.selector.queryAncestor(m,".ui-wizard");if(d){var e=bb.selector.query(d,".ui-wizard-buttons");if(e){var h=bb.selector.query(e,".ap-icon-help-inactive");if(h){bb.html.replaceClass(h,"ap-icon-help-inactive","ap-icon-help")}var a=bb.selector.query(e,".ap-icon-price");if(a){phe.common.show(a)}}}};absa.n2fa.goToStepAfterSecurityVerification=function(m,f){var n=bb.selector.queryAncestor(m,".ui-wizard");var o=null;if(n!=null){o=phe.wizard.getCurrentStepIndex(n)}if(o==0||o==null){var u;if(f){u=bb.selector.queryAncestor(m,".ap-forceLoadNode")}var k=bb.selector.queryAncestor(m,"[proxyurl]");var a=bb.selector.queryAncestor(m,".ui-tabBody");var v=bb.selector.queryAncestor(m,".ui-tableBodyRowExpandableExtension");var s=bb.selector.queryAncestor(m,".ui-modalBody[proxyurl]");var j=bb.selector.queryAncestor(m,".ap-gadget-lazyContent");var g=bb.selector.queryAncestor(m,".ap-container-content-USSD-login");if(u){absa.lazyLoadNode(u,true)}else{if(v&&v.getAttribute("dataFileView")){var r=bb.selector.queryAncestor(m,".ui-form");if(r==null){r=bb.selector.query(m,".ui-form")}if(r!=null){phe.form.setAttribute(r,"trackUnconfirmedChanges","false");r._trackUnconfirmedChanges=false;r._changed=false}phe.tableBodyRow.expandRow(v.previousSibling,phe.tableBodyRowExpandableExtention.getAttribute(v,"dataFileView"),false)}else{if(k){absa.lazyLoadNode(k,true)}else{if(a){phe.tabBody.reload(a)}else{if(s){absa.lazyLoadNode(s,true)}else{if(j){absa.lazyLoadNode(j,true)}else{if(g){doLoadNewPasswordAfterUSSD()}}}}}}}var n=bb.selector.queryAncestor(m,".ui-wizard");if(n){var t=bb.selector.query(n,".ui-wizard-buttons");if(t){var w=bb.selector.query(t,".ap-icon-help-inactive");if(w){bb.html.replaceClass(w,"ap-icon-help-inactive","ap-icon-help")}var e=bb.selector.query(t,".ap-icon-price");if(e){phe.common.show(e)}}}}else{var l=phe.wizard.getStepsCount(n)-1;var p=bb.selector.queryAll(n,".ui-wizard-body");var d=p[l-1];var h=bb.selector.query(d,".ui-form");var i=bb.selector.query(n,".ui-wizard-body-selected");var c=i.previousSibling;var b=bb.selector.query(c,".ui-form");phe.wizard.selectStep(c);if(phe.common.getAttribute(b,"data-special2faCase")=="true"){bb.html.fireEvent(b,"submit",true,true)}else{var q=bb.selector.query(h,".ap-TVM-form");if(q){bb.html.fireEvent(b,"submit",true,true)}else{bb.html.fireEvent(h,"submit",true,true)}var t=bb.selector.query(n,".ui-wizard-buttons");if(t){var e=bb.selector.query(t,".ap-icon-price");if(e){phe.common.show(e)}}}}};absa.n2fa.showErrorMsg=function(h,f,g){var c=0;var a=bb.selector.query(h,".ap-n2fa-errorMessageContainer");var d=bb.selector.query(a,".ap-n2fa-frontEndMessage");var i=bb.selector.query(a,".ap-n2fa-backEndErrorMessageContainer");var e=bb.selector.query(h,".ap-n2fa-countDownTimer");if(e){phe.common.setAttribute(e,"data-timeRemaining",c);if(absa.n2fa.globals.hasCanvas=="true"){absa.n2fa.animateCanvas(absa.n2fa.globals.oCanvas,c)}if(e.innerHTML!=null){e.innerHTML=c}}phe.common.show(a);phe.common.hide(i);phe.message.hide(d);var j;if(g=="frontEndTimeoutError"){j=absa.locale["Common/SVM/Error/FrontEndTimeOut"];if(j==undefined){var b=bb.selector.query(h,".ap-n2fa-errorMessageFrontEndTimeOut");j=phe.hiddenField.getValue(b)}phe.message.setMessage(d,j);phe.message.show(d)}else{if(g=="frontEndRetriesExceededError"){j=absa.locale["Security/AccessControl/Error/SVMRetriesExceeded"];if(j==undefined){var b=bb.selector.query(h,".ap-n2fa-errorMessageRetriesExceeded");j=phe.hiddenField.getValue(b)}phe.message.setMessage(d,j);phe.message.show(d)}else{if(i!=null){i.innerHTML=f.innerHTML;phe.common.show(i)}}}};absa.n2fa.onResendBtnClickSVM=function(c,b){if(!b){b=false}var e=bb.selector.queryAncestor(c,".ui-form");var a=phe.form.getAttribute(e,"data-timeStart");var d=bb.selector.query(e,".ap-n2fa-countDownTimer");phe.common.setAttribute(d,"data-timeRemaining",a);phe.form.setAttribute(e,"data-timeRemaining",a);absa.n2fa.updateFormStatusSVM(e,true,false,b)};absa.n2fa.onResendBtnClickTVM=function(b,e){var d=bb.selector.queryAncestor(b,".ui-form");var a=phe.form.getAttribute(d,"data-timeStart");var c=bb.selector.query(d,".ap-n2fa-countDownTimer");phe.common.setAttribute(c,"data-timeRemaining",a);phe.form.setAttribute(d,"data-timeRemaining",a);absa.n2fa.updateFormStatusSVM(d,true,false,e)};absa.n2fa.onSendRVNBtnClick=function(d,c){if(c==null){c=false}var e=bb.selector.queryAncestor(d,".ui-form");var b=bb.selector.queryAncestor(e,".ui-wizard-body-selected");if(c){b=bb.selector.queryAncestor(e,".ap-container-content")}phe.common.hide(e);var a=bb.selector.query(b,".ap-n2fa-SVM-form-fallback");if(a!=null){var f=bb.selector.query(a,".ap-button-extra");if(f!=null){f.click()}phe.common.show(a)}};absa.n2fa.onSendTVNBtnClick=function(a){var b=bb.selector.queryAncestor(a,".ui-form");absa.n2fa.goToStepAfterSecurityVerification(b)};absa.n2fa.onCancelBtnClickSVM=function(d,c){if(c==null){c=false}if(c){location.href=absa.CONTEXT+"?uniq="+new Date().getTime()}else{var f=bb.selector.queryAncestor(d,".ui-form");if(f){f.reset();if(f._trackUnconfirmedChanges){f._changed=false}}var a=bb.selector.queryAncestor(d,".ui-modal");if(a){phe.modal.hideModal()}else{var e=bb.selector.queryAncestor(d,".p-gadget");var b=bb.getControllerFromView(e);if(b){b.minimize();e.focus()}}}};absa.n2fa.onCancelBtnClickTVM=function(b){var a=bb.selector.queryAncestor(b,".ui-wizard");phe.wizard.selectStepAbsolute(a,0);absa.n2fa.removeTVMStep(b)};absa.n2fa.removeTVMStep=function(d){var b=bb.selector.queryAncestor(d,".ui-wizard");if(b){var a=bb.selector.query(b,".ui-wizard-body--TVN");var c=bb.selector.query(b,".ui-wizard-head--TVN");if(c){c.parentNode.removeChild(c)}if(a){a.parentNode.removeChild(a)}}};absa.n2fa.onDeviceAvailableCheckNoButtonClick=function(b){var a=bb.selector.queryAncestor(b,".ap-SC2-deviceCheckContent");var c=bb.selector.queryAncestor(b,".ap-SC2-deviceCheckForm");if(bb.html.hasClass(c,"ui-form-ioError")){phe.modal.hideModal()}else{phe.common.setAttribute(a,"proxyurl",absa.CONTEXT+"/proxy?pipe=genericEmptyResponse&xslFile=accessControl/SureCheck2-manageDevice&mode=deviceUnavailable");absa.lazyLoadNode(a,true)}};absa.n2fa.onDeviceUnavailableReasonCheckBoxClick=function(c){var d=bb.selector.queryAncestor(c,".ap-SC2-deviceUnavailableForm");var b=bb.selector.queryAll(d,".ui-checkBox");for(var a=0;a<b.length;a++){b.click}};absa.n2fa.onDeviceUnavailableonNextButtonClick=function(d){var b=bb.selector.queryAncestor(d,".ap-SC2-deviceCheckContent");var f=bb.selector.queryAncestor(d,".ap-SC2-deviceUnavailableForm");var c=bb.selector.query(f,".ap-SC2-deviceUnavailableReasons");if(phe.radioGroup.isAnyRadioItemsChecked(c)){var a=bb.selector.query(absa.gadgets.linkDelinkDevices.gadget.body,".ap-linkDelinkDevice-primaryDeviceManufacturer");var e="";if(a){e=phe.hiddenField.getValue(a)}if(absa.CLIENTTYPE=="B"){phe.common.setAttribute(b,"proxyurl",absa.CONTEXT+"/proxy?pipe=genericWebservice&ws=DeviceManagementWebService&action=removeDevice&view=deviceUnavailable&reason="+phe.radioGroup.getValue(c)+"&manufacturer="+e);absa.lazyLoadNode(b,true)}else{phe.common.setAttribute(b,"proxyurl",absa.CONTEXT+"/proxy?pipe=genericEmptyResponse&xslFile=accessControl/SureCheck2-manageDevice&mode=deviceUnavailableForNonBusiness");absa.lazyLoadNode(b,true)}}else{var g=bb.selector.query(f,".ap-SC2-reasonRequiredError");phe.common.show(g)}};absa.n2fa.onDeviceUnavailableRadioGroupClick=function(a){var b=bb.selector.queryAncestor(a,".ap-SC2-deviceUnavailableForm");var c=bb.selector.query(b,".ap-SC2-reasonRequiredError");phe.common.hide(c)};absa.n2fa.onDeviceUnavailableForgotPasscodeLinkClick=function(b){var a=bb.selector.queryAncestor(b,".ap-SC2-content");phe.common.setAttribute(a,"proxyurl",absa.CONTEXT+"/proxy?pipe=genericEmptyResponse&xslFile=SureCheck2/general&mode=forgotPasscode");absa.lazyLoadNode(a,true)};absa.n2fa.onDeviceUnavailableForgotSecurityCodeLinkClick=function(b){var a=bb.selector.queryAncestor(b,".ap-SC2-content");phe.common.setAttribute(a,"proxyurl",absa.CONTEXT+"/proxy?pipe=genericEmptyResponse&xslFile=SureCheck2/general&mode=forgotSecurityCode");absa.lazyLoadNode(a,true)};absa.n2fa.onDeviceUnavailableConfirmButtonClick=function(f){var g=bb.selector.queryAncestor(f,".ap-SC2-credsForm");var e=bb.selector.query(g,".ap-SC2-ATMPin");var c=phe.textBox.getValue(e);var a=phe.form.getAttribute(g,"context");var d=phe.form.getAttribute(g,"proxy");var b=bb.selector.queryAncestor(g,".ap-SC2-content");phe.textBox.setAttribute(e,"required","true");if(absa.form.validate(g)){phe.loadingMessage.showLoadingMessage(b);absa.xd.makeXDRequest(a,d,"/registration/j_pin_block_cache","PIN="+c,absa.n2fa.validateEncipherResponse)}};absa.n2fa.validateEncipherResponse=function(g){var j=bb.selector.query(document.body,".ap-SC2-credsForm");var e=bb.selector.query(j,".ap-SC2-ATMCardNumber");var c=bb.selector.query(j,".ap-SC2-ATMPin");var d=bb.selector.query(j,".ap-SC2-passcode");var a=phe.form.getAttribute(j,"context");var i=phe.form.getAttribute(j,"proxy");var f=bb.selector.queryAncestor(j,".ap-SC2-content");phe.loadingMessage.hideLoadingMessage(f);if(g.success){var b=absa.CONTEXT+"/proxy?pipe=genericWebservice&ws=DeviceManagementWebService&action=validatePrimaryDevicePasscodeAndATMPin";b+="&primaryDevicePasscode="+phe.textBox.getValue(d)+"&atmCardNo="+phe.textBox.getValue(e)+"&correlationId="+g.correlationId;phe.loadingMessage.showLoadingMessage(f);absa.io.makeRequest(b,function(l){phe.loadingMessage.hideLoadingMessage(f);if(!l.errors.length){var p=bb.html.createElementFromString(l.text);if(p){var o=bb.selector.query(p,".ap-error");if(o){var k=bb.selector.query(j,".ap-error");k.parentNode.replaceChild(o,k);var n=bb.selector.query(p,".ap-errorCode");if(phe.hiddenField.getValue(n)=="100"){var m=bb.selector.query(j,".ap-button-extra");phe.common.hide(m)}absa.n2fa.clearTextBoxAndMakeRequiredAgain(e);absa.n2fa.clearTextBoxAndMakeRequiredAgain(c);absa.n2fa.clearTextBoxAndMakeRequiredAgain(d)}else{phe.textBox.setAttribute(c,"required","false");phe.textBox.setValue(c,"");absa.n2fa.goToStepAfterSecurityVerification(j)}}}else{phe.form.displayIOErrorMessage(j,true)}})}else{var h=bb.selector.query(j,".ap-registration-pinBlockError");phe.common.show(h)}};absa.n2fa.clearTextBoxAndMakeRequiredAgain=function(a){phe.textBox.setAttribute(a,"required","");phe.textBox.setValue(a,"");phe.textBox.setAttribute(a,"required","true")};absa.n2fa.OnValidateSecurityCodeButtonClick=function(c){var d=bb.selector.queryAncestor(c,".ui-form--SecurityCodeForm");var b=bb.selector.query(d,".ap-SC2-securityCode");if(absa.form.validate.checkElement(b)){var a=absa.CONTEXT+"/proxy?pipe=genericWebservice&ws=DeviceManagementWebService&action=validateSecurityCode&securityCode="+phe.textBox.getValue(b);phe.loadingMessage.showLoadingMessage(d);absa.io.makeRequest(a,function(f){phe.loadingMessage.hideLoadingMessage(d);if(!f.errors.length){var i=bb.html.createElementFromString(f.text);if(i){var h=bb.selector.query(i,".ap-SC2-error");if(h){oErrorTmp=bb.selector.query(d,".ap-SC2-error");oErrorTmp.parentNode.replaceChild(h,oErrorTmp);absa.n2fa.clearTextBoxAndMakeRequiredAgain(b);var g=bb.selector.query(i,".ap-remainingAttempts");if(phe.hiddenField.getValue(g)=="0"){var e=bb.selector.query(d,".ap-SC2-validateButton");phe.common.hide(e)}}else{absa.n2fa.goToStepAfterSecurityVerification(d)}}}else{phe.form.displayIOErrorMessage(d,true)}})}else{b.focus()}};absa.n2fa.onDeviceAvailableCheckYesButtonClick=function(c,f){var e=bb.selector.queryAncestor(c,".ap-SC2-deviceCheckForm");var a=bb.selector.queryAncestor(c,".ui-wizard");var d=phe.wizard.getCurrentStepBody(a);var b=absa.CONTEXT+"/proxy?pipe=genericWebservice&ws=DeviceManagementWebService&mode=makeDevicePrimary&action="+f;phe.loadingMessage.showLoadingMessage(e);absa.io.makeRequest(b,function(h){phe.loadingMessage.hideLoadingMessage(e);if(!h.errors.length){if(h.text){var j=bb.html.createElementFromString(h.text);var g=bb.selector.query(j,".ap-TVM-form");var i=bb.selector.query(j,".ap-n2fa-SVM-form");if(g||i){absa.form.wizardBridge.handleResponse(d,h,"","",true)}else{e.parentNode.replaceChild(j,e)}}}})};absa.n2fa.checkForSecurityVerificationMAYBENOTNEEDED=function(c){var a=bb.selector.queryAncestor(c,".ui-wizard");var e=phe.wizard.getCurrentStepBody(a);var d=bb.selector.queryAncestor(c,".ui-form");var b=absa.CONTEXT+"/proxy?pipe=genericWebservice&ws=DeviceManagementWebService&action=changePrimaryDevice";phe.loadingMessage.showLoadingMessage(d);absa.io.makeRequest(b,function(h){phe.loadingMessage.hideLoadingMessage(d);if(!h.errors.length){if(h.text){var j=bb.html.createElementFromString(h.text);var g=bb.selector.query(j,".ap-TVM-form");var f=bb.selector.query(j,".securityCodeVerificationNeeded");if(g){absa.form.wizardBridge.handleResponse(e,h)}else{if(f){var i=absa.CONTEXT+"/proxy?pipe=genericEmptyResponse&xslFile=accessControl/SureCheck2-manageDevice&mode=securityCodeVerificationNeeded";absa.io.makeRequest(i,function(k){absa.form.wizardBridge.handleResponse(e,k)})}else{}}}}})};absa.n2fa.goToLastStep=function(k){var c=bb.selector.queryAncestor(k,".ui-wizard");var e=phe.wizard.getStepsCount(c)-1;var h=bb.selector.queryAll(c,".ui-wizard-body");var b=h[e-1];var g=bb.selector.query(b,".ui-form");var l=bb.selector.query(c,".ui-wizard-body-selected");var f=l.previousSibling;var j=bb.selector.query(f,".ui-form");phe.wizard.selectStep(f);if(phe.common.getAttribute(j,"data-special2faCase")=="true"){bb.html.fireEvent(j,"submit",true,true)}else{var i=bb.selector.query(g,".ap-TVM-form");if(i){bb.html.fireEvent(j,"submit",true,true)}else{bb.html.fireEvent(g,"submit",true,true)}var d=bb.selector.query(c,".ui-wizard-buttons");if(d){var a=bb.selector.query(d,".ap-icon-price");if(a){phe.common.show(a)}}}};absa.n2fa.checkForSecurityVerification=function(d,c){var a=bb.selector.queryAncestor(d,".ui-wizard");var f=phe.wizard.getCurrentStepBody(a);var e=bb.selector.queryAncestor(d,".ui-form");var g;if(c){g="changePrimaryDevice"}else{g="generateSecondFactorEnrollmentScanCode"}var b=absa.CONTEXT+"/proxy?pipe=genericEmptyResponse&xslFile=accessControl/SureCheck2-manageDevice&function="+g;phe.loadingMessage.showLoadingMessage(e);absa.io.makeRequest(b,function(h){phe.loadingMessage.hideLoadingMessage(e);if(!h.errors.length){if(h.text){var i=bb.html.createElementFromString(h.text);absa.form.wizardBridge.handleResponse(f,h)}}})};