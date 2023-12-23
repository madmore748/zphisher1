var absa = window.absa || {};
absa.login = absa.login || {};

// Global introduced when Generic Modal came into picture
absa.login.oResponse = {};

function forgotPin() {
	var Params = {};
	Params[gadgets.io.RequestParameters.METHOD] = gadgets.io.MethodType.GET;
	absa.io.makeRequest("static/forgotpin.jsp", function(response){
		absa.hidePleaseWait();
		if (!response.errors.length) {
			var oContainer = document.getElementById("ap-login-container");
			oContainer.innerHTML = response.text;
			
			absa.initializeNewContent(oContainer);
			
			document.getElementById("divhowitworks").style.display = "none";
			document.getElementById("divimportantlinks").style.display = "block";
		} else {
			showErrorMessage("ap-login-form1-error");
		}
	}, Params);
};

function onFormForgotPinSubmit(oForm) {
	hideErrorMessages();
	if (absa.form.validate(oForm)) {
		doFormForgotPinSubmit(oForm);
	} else {
		var a = bb.selector.query(oForm,"#j_username");
		var b = bb.selector.query(oForm,"#j_user_no");
		var c = bb.selector.query(oForm,"#j_jcaptcha_txt");
		
		if (a.value == '') {
			a.focus();
			return false;
		}
		if (b.value == '') {
			b.focus();
			return false;
		}
		if (c.value == '') {
			c.focus();
			return false;
		}
	}
};

function doFormForgotPinSubmit(oForm) {
	absa.showPleaseWait();
	
	var sAccount	= bb.selector.query(oForm,"#j_username").value;
	var sOperator	= bb.selector.query(oForm,"#j_user_no").value;
	var sCaptcha	= bb.selector.query(oForm,"#j_jcaptcha_txt").value;
	
	var PostData = {
		AccessAccount	:	sAccount,
		Operator		:	sOperator,
		CaptchaTxt		:	sCaptcha
	};
	
	var Params = {};
	Params[gadgets.io.RequestParameters.METHOD] = gadgets.io.MethodType.POST;
	Params[gadgets.io.RequestParameters.POST_DATA] = gadgets.io.encodeValues(PostData);
	
	//absa.io.makeRequest(absa.XDPROXY + "/j_forgot_pin", function(oResponse){
	absa.io.makeRequest(absa.XDPROXY + "/j_pin_security_login", function(oResponse){
		absa.hidePleaseWait();
		if (!oResponse.errors.length) {
			var res = JSONRequest.parse(oResponse.text);
			if (res.success) {
				var PostDataB = {};
				PostDataB.lang = getLanguage();
				
				var ParamsB = {};
				ParamsB[gadgets.io.RequestParameters.METHOD] = gadgets.io.MethodType.POST;
				ParamsB[gadgets.io.RequestParameters.POST_DATA] = gadgets.io.encodeValues(PostDataB);
				
				absa.io.makeRequest(res.url, function(response) {
					absa.hidePleaseWait();
					if (!response.errors.length) {
						var oContainer = document.getElementById("ap-login-container");
						oContainer.innerHTML = response.text;
						
						absa.initializeNewContent(oContainer);
						
						document.getElementById("divhowitworks").style.display = "none";
						document.getElementById("divimportantlinks").style.display = "block";
						
						document.getElementById("timeStamp1").innerHTML = "<span>"+res.time+"</span>";
						document.getElementById("timeStamp2").innerHTML = "<span>"+res.time+"</span>";
					} else {
						showErrorMessage("ap-forgotpin-error",response.errors[0]);
					}
				}, ParamsB);
				
			} else {
				//Some failure - so show error message returned and load new captcha 
				document.getElementById("j_jcaptcha_txt").value = "";
				var oCaptchaImg = document.getElementById("jCaptchaImgID");
				if (oCaptchaImg) oCaptchaImg.src = "captchaImg?uniq=" + new Date().getTime();
				
				showErrorMessage("ap-forgotpin-error", res.errorMessage);
				absa.hidePleaseWait();
			}
		
		} else {
			//oResponse had errors
			document.getElementById("j_jcaptcha_txt").value = "";
			var oCaptchaImg = document.getElementById("jCaptchaImgID");
			if (oCaptchaImg) oCaptchaImg.src = "captchaImg?uniq=" + new Date().getTime();
			
			showErrorMessage("ap-forgotpin-error",oResponse.errors[0]);
			absa.hidePleaseWait();
		}
	}, Params);
};

function resetFormForgotPin() {
	alert("reset forgot PIN form");
};

// Account form
function onForm1Submit() {
	// Hide error messages
	hideErrorMessages();
	//
	if (absa.form.validate(bb.selector.query(document.body, '.ui-form'))) {
		doSubmitForm1();
	} else {
		//
		var a = document.getElementById("j_username");
		var b = document.getElementById("j_pin");
		var c = document.getElementById("j_user_no");
		var d = bb.selector.query(document.body, '.ui-row-captcha-show');
		
		if (a.value == '') {
			a.focus();
			return false;
		}
		if (b.value == '') {
			b.focus();
			return false;
		}
		if (c.value == '') {
			c.focus();
			return false;
		}
		//PS: Captcha - ONLY if it is displaying
		if (d) {
			if (d.value == '') {
				d.focus();
				return false;
			}	
		}
	}
};

function doSubmitForm1(){
	absa.showPleaseWait();
	
	var sAccount	= document.getElementById("j_username").value;
	var sPIN		= document.getElementById("j_pin").value;
	var sOperator	= document.getElementById("j_user_no").value;
	
	var sCaptchaObj = document.getElementById("j_jcaptcha_txt");
	var sCaptchaTxt = "";
	if (sCaptchaObj != null) {
		sCaptchaTxt = sCaptchaObj.value; 
	}
	
	// DSP 
	var sDSP = document.getElementById("dsp").value;
	var sDSPID = document.getElementById("dspid").value;
	var sDSPREFERER = document.getElementById("dspReferer").value;
	
	// Landingpage for Insurance
	var sLandingPage = document.getElementById("landingpage").value;
	
	// DSP (Digital Sales Platform)
	var sGoTo = document.getElementById("goto").value;
	
	// Clear input fields
	document.getElementById("j_username").value = "";
	document.getElementById("j_pin").value = "";
	//document.getElementById("j_user_no").value = "";
	document.getElementById("j_username").focus();
	document.getElementById("bodydiv").setAttribute("accessAccount",sAccount);

	absa.xd.makeXDRequest(
		absa.CONTEXT,
		absa.XDPROXY,
		'/j_pin_security_login',
		"AccessAccount=" + sAccount + "&PIN=" + sPIN + "&Operator=" + sOperator + "&CaptchaTxt=" + sCaptchaTxt,
		function (res, sRequestId) {
			if (!res.errorCode && res.success) {
				// PS: Device Profiling - call IBM here with the NEW csId so that they can start tying up the PreLogin and PostLogin CSID
				absa.dpS = res.csid;
				if (typeof window['isimo'] === "function") {
					if (absa.ITE == 'true') { console.log("*** do DP ***"); }
					window['isimo']('security_question');
				} else { 
					if (absa.ITE == 'true') { console.log("*** Failure DP - log to SystemErr ***"); }
					absa.io.makeRequest("proxy?pipe=genericEmptyResponse&xslFile=subtree/load&section="+absa.getDPS(""+document.body.getAttribute("sId")), function(oResponse) {}); 
				}	// PS: must be    else it does NOT send the new CSID to IBM
				
				absa.login.addLogoffEventListeners();
				
				if (res != null & res.url != null & res.url != 'null' & res.url != 'undefined') {
					if (res.wfpt != null) {
						setCookie("WFPT", res.wfpt);
						setCookie("CRE", res.wfpt);
					}
					
					if (res.url.indexOf("limitsnotset") > -1) {
						// limitsnotset.jsp
						var PostData = {};
						PostData.lang = getLanguage();
						
						var Params = {};
						Params[gadgets.io.RequestParameters.METHOD] = gadgets.io.MethodType.POST;
						Params[gadgets.io.RequestParameters.POST_DATA] = gadgets.io.encodeValues(PostData);
						
						absa.io.makeRequest(res.url, function(response){
							absa.hidePleaseWait();
							if (!response.errors.length) {
								var oContainer = document.getElementById("ap-login-container");
								oContainer.innerHTML = response.text;
								
								absa.initializeNewContent(oContainer);
								
								document.getElementById("divhowitworks").style.display = "none";
								document.getElementById("divimportantlinks").style.display = "block";
							} else {
								showErrorMessage("ap-login-form1-error");
							}
						}, Params);
						
					} else if ((res.url.indexOf("rvn") > -1) | (res.url.indexOf("svm") > -1)) {
						// rvn.jsp
						var PostData = {};
						PostData.lang = getLanguage();
						
						var Params = {};
						Params[gadgets.io.RequestParameters.METHOD] = gadgets.io.MethodType.POST;
						Params[gadgets.io.RequestParameters.POST_DATA] = gadgets.io.encodeValues(PostData);
						
						absa.io.makeRequest(res.url, function(response){
							absa.hidePleaseWait();
							if (!response.errors.length) {
								var oContainer = document.getElementById("ap-login-container");
								oContainer.innerHTML = response.text;
								
								absa.initializeNewContent(oContainer);
								
								document.getElementById("divhowitworks").style.display = "none";
								document.getElementById("divimportantlinks").style.display = "block";
								
								document.getElementById("timeStamp1").innerHTML = "<span>"+res.time+"</span>";
								document.getElementById("timeStamp2").innerHTML = "<span>"+res.time+"</span>";
								
								if (res.url.indexOf("svm") > -1) {
									absa.n2fa.init();
									
									setTimeout(function(){
										var sData = {};
										//sData.form = oCurrentForm;
										sData.form = bb.selector.query(oContainer,".ap-SVM-form");
										sData.isUnAuth = true;
										
										absa.apps.unAuthSessionID = sData.form.getAttribute("data-sid");
										gadgets.pubsub.publish("SVM-form-loaded", sData);
									}, 2000);
								}
								
							} else {
								showErrorMessage("ap-login-form1-error");
							}
						}, Params);
						
					} else {
						// login-form2.jsp
						document.getElementById("divbottomadds").style.display = "none";
						document.getElementById("divadds1").style.display = "none";
						
						//Resonance - NEW
						var oLoginContainer1 = document.getElementById("ap-container-content");
						var oLoginContainerColumn1 = document.getElementById("ap-column-1");
						var oLoginContainerColumn2 = document.getElementById("ap-column-2");
						
						var PostData = {};
						PostData.lang = getLanguage();
						PostData.acc = sAccount;
						PostData.dsp = sDSP;
						PostData.dspid = sDSPID;
						PostData.dspreferer = sDSPREFERER;
						PostData.landingpage = sLandingPage;
						PostData.goto = sGoTo;
						PostData.wfpt = res.wfpt;
						
						var Params = {};
						Params[gadgets.io.RequestParameters.METHOD] = gadgets.io.MethodType.POST;
						Params[gadgets.io.RequestParameters.POST_DATA] = gadgets.io.encodeValues(PostData);
						
						// Added sAccount for APB 
						absa.io.makeRequest(res.url, function(response) {
							absa.hidePleaseWait();
							if (!response.errors.length) {
								var oContainer = document.getElementById("ap-login-container");
								oContainer.innerHTML = response.text;
								absa.initializeNewContent(oContainer);
								
								document.getElementById("divimportantlinks").style.display = "none";
								document.getElementById("divhowitworks").style.display = "block";
								
								// Set landing page returned in auth request - EXCEPT if call was made from Amazon Feature Store
								// if from Feature Store then default select Feature Store no matter what the user chose previously
								// or if sGoto has a value which means that its an incoming request from DSP (Digital Sales Platform)
								// to load a specific gadget within AOL
								var oSelect = document.getElementById("landingpage2");
								if (sDSP == "true") {
									oSelect.value = "dsp";
									oSelect.setAttribute("defaultVal", oSelect.value);
								
								} else if (sGoTo != null && sGoTo.length > 5) {
									oSelect.value = "accounts";
									oSelect.setAttribute("defaultVal", oSelect.value);
									
								} else {
									if (sLandingPage != "") {
										//PS: If this is passed in as parameter then use it rather
										oSelect.value = sLandingPage;
										oSelect.setAttribute("defaultVal", sLandingPage);
									} else {
										//PS: User value from user profile
										if (typeof res.landingpage != "undefined" && res.landingpage != "") {
											if (res.landingpage == "dsp") {
												oSelect.value = "dsp";
												oSelect.setAttribute("defaultVal", "dsp");
												
											} else {
												oSelect.value = res.landingpage;
												oSelect.setAttribute("defaultVal", oSelect.value);
											}
										} else {
											// PS: Also default to express if NOTHING is returned after meeting with Linda on 18 Feb 2016
											oSelect.value = "express";
											oSelect.setAttribute("defaultVal", "express");
										}
									}
								}
								
								// PS: Resonance - resize the 2 divs so that PAssword screen fits.
								//ap-column-1  altering it so stuff fits on Password Screen
								bb.html.removeClass(oLoginContainerColumn1, 'accessAccountScreen');
								bb.html.removeClass(oLoginContainerColumn2, 'accessAccountScreenAdds');
								//ap-column-2  altering it so stuff fits on Password Screen
								bb.html.addClass(oLoginContainerColumn1, 'passwordScreen');
								bb.html.addClass(oLoginContainerColumn2, 'passwordScreenAdds');
								
								var tmpNum1 = document.getElementById("pff1").getAttribute("num");
								var tmpNum2 = document.getElementById("pff2").getAttribute("num");
								var tmpNum3 = document.getElementById("pff3").getAttribute("num");
								
								document.getElementById("pff1").setAttribute("aria-label", "Please type the following characters from your password, "+tmpNum1+", "+tmpNum2+" and "+tmpNum3+".");
								var tmpShowMeHow = "Please type the following characters from your password, "+tmpNum1+", "+tmpNum2+" and "+tmpNum3+". " + document.getElementById("pff1").getAttribute("showMeHow");
								document.getElementById("pff1").setAttribute("showMeHow", tmpShowMeHow);
								// PS: we do the .focus() 2 times because it solves the IE problem where focus is not moved after first call
								document.getElementById("pff1").focus();
								document.getElementById("pff1").focus();
								
								// APB Start
								var oClientType = document.getElementById("clienTypeValue");
								var oSBU = document.getElementById("sbuValue");
								var oAPBStuff = document.getElementById("showAPBStuff");
								
								if (oClientType != null && oSBU != null) {
									var pb_result = "";
									var oTmpA = document.getElementById("header_results");
									if (oTmpA != null) {
										pb_result = oTmpA.innerHTML;
									}
									
									//if (oClientType.getAttribute("value") == "S" && oSBU.getAttribute("value") == "E") {
									if (oAPBStuff) {
										if (oAPBStuff.value == "true") {
											if (oTmpA != null) {
												var oLabelA = document.getElementById("labelValue");
												if (oLabelA) {
													phe.common.hide(document.getElementById('ap-campaignImage-div'));
													phe.common.show(document.getElementById('ap-campAPBImage-div'));
													
													oTmpA.innerHTML = oLabelA.getAttribute("value");
													if (document.getElementById('theImg') != null) document.getElementById('theImg').src = "static/style/resources/apb-logo-png24.png";
												}
											}
										} else {
											phe.common.show(document.getElementById('ap-campaignImage-div'));
											phe.common.hide(document.getElementById('ap-campAPBImage-div'));
										}
									} else {
										phe.common.show(document.getElementById('ap-campaignImage-div'));
										phe.common.hide(document.getElementById('ap-campAPBImage-div'));
									}
								}
								// APB End
								
							} else {
								showErrorMessage("ap-login-form1-error");
							}
						}, Params);
					}
				}
			} else {
				absa.hidePleaseWait();
				if (res.passwordlocked) {
					showErrorMessage("ap-login-form1-error", res.errorMessage || "Password locked.");
					doSubmitForm2ForgotPasswordSpecial();
					//setTimeout(function(){ doSubmitForm2ForgotPasswordSpecial(); }, 100);
					
				} else if (res.capthaCheck == "true") {
					showErrorMessage("ap-login-form1-error", res.errorMessage || "Account requires a captcha check.");
					var oCaptchaImg = document.getElementById("jCaptchaImgID");
					var oCaptchaRow = document.getElementById("ui-row-captcha");
					if (oCaptchaRow) {
						oCaptchaImg.src = "captchaImg";
						oCaptchaRow.style.display = "";
					}
				} else {
					showErrorMessage("ap-login-form1-error", res.errorMessage || "System unavailable.");
				}
			}
		}
	);
};

function resetForm1(){
	document.getElementById("j_username").value = "";
	document.getElementById("j_pin").value = "";
	document.getElementById("j_user_no").value = "1";
};

function backToDSP(){
	var dspURL = document.getElementById("dspURL").value;
	var dsp = document.getElementById("dsp").value;
	var dspId= document.getElementById("dspid").value;
	postToDSP(dspURL, dspId, null, null, null, null, null, null, null, null);
};


// Now Post to DSP to log client in
function postToDSP(dspURL, dspID, dspToken, simSwap, isTransactional, bis, sbu, clientIP, lang, wfpt){
	// PS: if in TEST ENV then look who the DSP referer was and redirect back to that
	if (absa.ITE == 'true') {
		var sDSPREFERER = "";
		var oDSPREFERER = document.getElementById("dspReferer");
		if (oDSPREFERER != null) {
			sDSPREFERER = oDSPREFERER.value;
			if (sDSPREFERER != null) dspURL = sDSPREFERER;
		}
	}
	
	if (lang == null) lang = "E";
	
	// DSP will open AOL in a popup window for client to logon and once logged on we must close popup window and submit in the parent (window.opener)
	var daTarget = "dsp";
	if (absa.DSPWINDOWSELF != null & absa.DSPWINDOWSELF == 'true') {
		daTarget = "_self";
	}
	
	if (getCookie("WFPT") == "") {
		setCookie("WFPT", wfpt);
		setCookie("CRE", wfpt);
	}
	
	if (absa.DSPCALLJSFUNCTION == 'true' && window.opener != null && !window.opener.closed) {
		daTarget = "window.opener";
		var tmpObj = {
			"dspid" : dspID,
			"ip" : clientIP,
			"token" : dspToken,
			"simSwap" : simSwap,
			"isTransactional" : isTransactional,
			"bis" : bis,
			"sbu" : sbu,
			"lang" : lang,
			"rid" : ""+new Date().getTime(),
			"src" : "AOL",
			"page" : "default",
			"wfpt" : wfpt
		};
		
		window.opener.authenticationCallbackHandler(tmpObj);
	
	} else {
		document.write("<form novalidate name='dspForm' id='dspForm' method='POST' action='"+dspURL+"' target='"+daTarget+"'>");
		document.write("<input type='hidden' name='dspid' value='"+dspID+"'>");
		document.write("<input type='hidden' name='ip' value='"+clientIP+"'>");
		document.write("<input type='hidden' name='token' value='"+dspToken+"'>");
		document.write("<input type='hidden' name='simSwap' value='"+simSwap+"'>");
		document.write("<input type='hidden' name='isTransactional' value='"+isTransactional+"'>");
		document.write("<input type='hidden' name='lang' value='"+lang+"'>");
		document.write("<input type='hidden' name='rid' value='"+new Date().getTime()+"'>");
		document.write("<input type='hidden' name='src' value='AOL'>");
		document.write("<input type='hidden' name='page' value='default'>");
		document.write("<input type='hidden' name='bis' value='"+bis+"'>");
		document.write("<input type='hidden' name='sbu' value='"+sbu+"'>");
		document.write("<input type='hidden' name='wfpt' value='"+wfpt+"'>");
		document.write("</form>");
		
		if (daTarget == "_self") {
			document.write("<script language='javascript'>function doDSP_Login(){ var dspF = document.getElementById('dspForm'); dspF.submit(); } doDSP_Login();</script>");
		} else {
			document.write("<script language='javascript'>function doDSP_Login(){ var dspF = document.getElementById('dspForm'); dspF.submit(); if (window.opener != null && !window.opener.closed) { setTimeout(function(){ window.close()},2000); } } doDSP_Login();</script>");
		}
	}
};

//PS: for DSP make sure to set the WFPT cookie in case its NOT here yet.
function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}
function setCookie(cname, cvalue) {
	var d = new Date();
	d.setMonth(d.getMonth() + 120);
	var expires = "expires="+d.toUTCString();
	
	// Secure on current domain (ex:  ib.absa.co.za )  PS: Doing this like this so it also works in DEV, SIT and UAT 
	document.cookie = cname + "=" + cvalue + "; " + expires + "; secure; domain="+document.domain+"; path=/";
	document.cookie = cname + "=" + cvalue + "; expires=0; secure; domain="+document.domain+"; path=/absa-online";
	document.cookie = cname + "=" + cvalue + "; expires=0; secure; domain="+document.domain+"; path=/absa-online/";
	
	// .ib.absa.co.za
	document.cookie = cname + "=" + cvalue + "; " + expires + "; secure; domain=.ib.absa.co.za; path=/";
	document.cookie = cname + "=" + cvalue + "; expires=0; secure; domain=.ib.absa.co.za; path=/absa-online";
	document.cookie = cname + "=" + cvalue + "; expires=0; secure; domain=.ib.absa.co.za; path=/absa-online/";
	
	// ib.absa.co.za 
	document.cookie = cname + "=" + cvalue + "; " + expires + "; secure; domain=ib.absa.co.za; path=/";
	document.cookie = cname + "=" + cvalue + "; expires=0; secure; domain=ib.absa.co.za; path=/absa-online";
	document.cookie = cname + "=" + cvalue + "; expires=0; secure; domain=ib.absa.co.za; path=/absa-online/";
	
	// PS: See the ones being set in WebServiceUtil.java and make sure we mimic those
	// Set the first 2 correctly as SECURE 
	document.cookie = cname + "=" + cvalue + "; " + expires + "; secure; domain=.absa.co.za; path=/";
	document.cookie = cname + "=" + cvalue + "; " + expires + "; secure; domain=.absa.co.za; path=/absa-online";
	document.cookie = cname + "=" + cvalue + "; expires=0; secure; domain=.absa.co.za; path=/absa-online/";

	// PS: have to include this one in order to set cookie on domain   ib.absa.co.za (specifying it above does NOT seem to do it)
	document.cookie = cname + "=" + cvalue + "; " + expires + "; secure; path=/";
	document.cookie = cname + "=" + cvalue + "; " + expires + "; secure; path=/absa-online";
	document.cookie = cname + "=" + cvalue + "; expires=0; secure; path=/absa-online/";
}


//Now Post to Express to log client in
function postToExpress(expressURL, clientIP, eSessionID, lang){
	document.write("<form novalidate name='expressForm' id='expressForm' method='POST' action='"+expressURL+"' target='_top'>");
	document.write("<input type='hidden' name='ip' value='"+clientIP+"'>");
	document.write("<input type='hidden' name='esessionid' value='"+eSessionID+"'>");
	document.write("<input type='hidden' name='lang' value='"+lang+"'>");
	document.write("<input type='hidden' name='rid' value='"+new Date().getTime()+"'>");
	document.write("<input type='hidden' name='src' value='AOL'>");
	document.write("</form>");
	document.write("<script language='javascript'>function doExpress_Login(){ var expressF = document.getElementById('expressForm'); expressF.submit(); } doExpress_Login();</script>");
};

function checkEntries2(obj, ev) {
	var nKeyCode = ev.keyCode;
	if (nKeyCode != 9 /* TAB */ && nKeyCode != 8 /* BACKSPACE*/ && nKeyCode != 46 /* DELETE */ && nKeyCode != 16 /* SHIFT */ &&nKeyCode != 37 && nKeyCode != 39 && nKeyCode != 38 && nKeyCode != 40) {
		doMoveForm2Focus(obj);
	}
};

function onForm2Submit(){
	doSubmitForm2();
};

function doSubmitForm2() {
	hideErrorMessages();
	absa.showPleaseWait();
	
	var s = document.getElementById("pwds").value;
	var arr = new Array(Number(s));
	var landingPage = document.getElementById("landingpage2").value;
	
	// PS: The below is to ensure we do NOT pass empty spaces during logon for landingPage
	// If its blank then send Express IF its available in the list else send accounts
	landingPage = bb.string.trim(landingPage);
	if (landingPage == '') {
		landingPage = 'accounts'
		var oLandingSel = document.getElementById("landingpage2");
		if (oLandingSel != null) {
			for (var a=0; a < oLandingSel.options.length; a++ ){
				if (oLandingSel.options[a].value == 'express') {
					landingPage = 'express'
				}
			}
		}
	}
	
	
	// DSP specific Fields 
	var sDSP = "false";
	var oDSP = document.getElementById("dsp");
	if (oDSP != null) sDSP = oDSP.value;
	if (sDSP == "true") landingPage = 'dsp';
	
	var sDSPID = "0";
	var oDSPID = document.getElementById("dspid");
	if (oDSPID != null) sDSPID = oDSPID.value;
	
	var sDSPREFERER = "";
	var oDSPREFERER = document.getElementById("dspReferer");
	if (oDSPREFERER != null) sDSPREFERER = oDSPREFERER.value;
	
	// DSP (Digital Sales Platform)
	var sGoto = "";
	var oGoto = document.getElementById("goto");
	if (oGoto != null) sGoto = oGoto.value;
	
	
	var PostData = {};
	var allFieldsEntered = 0;
	for (var g=0; g < arr.length; g++) {
		arr[g] = document.getElementById("pff"+(g+1)).value;
		if (arr[g].length > 0){ allFieldsEntered = allFieldsEntered + 1; }
		PostData[document.getElementById("pff"+(g+1)).name] = arr[g];
	}
	PostData.landingpage = landingPage;
	
	// check if vi checkbox is ticked to enable vi mode
	var viCheckbox = document.getElementById("viCheckbox");
	if (viCheckbox.checked) {
		PostData.viuser = 1;
	}
	
	// DSP Params
	PostData.dsp = sDSP;
	PostData.dspid = sDSPID;
	PostData.dspreferer = sDSPREFERER;
	
	PostData.goto = sGoto;
	
	// 1st make sure user entered all 3 password fields
	if (allFieldsEntered != 3) {
		var objPF1 = document.getElementById("pff1");
		var objPF2 = document.getElementById("pff2");
		var objPF3 = document.getElementById("pff3");
		if (objPF1.value.length < 1) {
			showErrorMessage("ap-login-form2-error", "Password character "+objPF1.getAttribute("num")+" is empty.");
			objPF1.focus();
		} else if (objPF2.value.length < 1) {
			showErrorMessage("ap-login-form2-error", "Password character "+objPF2.getAttribute("num")+" is empty.");
			objPF2.focus();
		} else if ( objPF3.value.length < 1) {
			showErrorMessage("ap-login-form2-error", "Password character "+objPF3.getAttribute("num")+" is empty.");
			objPF3.focus();
		}
		absa.hidePleaseWait();
		return;
		
	} else {
		// Device Profiling
		if (typeof window['isimo'] === "function") { 
			window['isimo']('security_question'); 
		} else { 
			absa.io.makeRequest("proxy?pipe=genericEmptyResponse&xslFile=subtree/load&section="+absa.getDPS(""+document.body.getAttribute("sId")), function(oResponse) {}); 
		}
		
		var Params = {};
		Params[gadgets.io.RequestParameters.METHOD] = gadgets.io.MethodType.POST;
		Params[gadgets.io.RequestParameters.POST_DATA] = gadgets.io.encodeValues(PostData);
		
		// General Modal functionality required this to be a Inner Function
		absa.io.makeRequest("j_password_security_login", function(oResponse) {
			if (!oResponse.errors.length) {
				// PS: Assign to GLOBAL so it can be used outside of this function
				absa.login.oResponse = oResponse;
				var res = JSONRequest.parse(oResponse.text);
				if (res.success) {
					// Now check if Generic Modal is enabled and if so do its functionality
					if (absa.GENMODALC_ENABLED) {
						// PS: Special JS function call can now also be included IF its enabled
						// PS: if all 3 are TRUE then do NOT do the rest (so in other words do NOT show the modal)
						if ((absa.GENMODALC_ENABLED == 'true') & (absa.GENMODALC_SPECIALCHECK_ENABLED == 'true') & (eval(absa.GENMODALC_SPECIALCHECK_JSFUNC) == true)) {
							// so do NOT do the rest (do NOT show the modal below)
							absa.GENMODALC_ENABLED = 'false';
						}
						
						absa.CLIENTTYPE = document.getElementById('clienTypeValue').value;
						absa.SBU = document.getElementById('sbuValue').value;
						
						// IF the above is ENABLED and it results in TRUE then continue with rest.
						// IF the above is NOT enabled then just continue with the rest
						if (absa.GENMODALC_ENABLED == 'true') {
							// PS: Very specific for the 2FA pre-launch Modals
							if ((absa.GENMODALC_BIS.indexOf(absa.CLIENTTYPE) > -1) & (absa.GENMODALC_SBU.indexOf(absa.SBU) > -1)) {
								var bMustModalShow = true;
								if (absa.GENMODALC_READCONFIRM == 'true' | absa.GENMODALC_DONTSHOWAGAIN == 'true') {
									// PS: We now use stored value in DB to determine if this modal should show to client again
									if (absa.GENMODALC_HASCLIENTINDICATEDYET != null && absa.GENMODALC_HASCLIENTINDICATEDYET == 'true') {
										// Do rest of the stuff as client has already seen this modal and done the readConfirm on it
										bMustModalShow = false;
									}
								}
								
								if (bMustModalShow) {
									absa.hidePleaseWait();
									var oModal = bb.selector.query(window.document, '.ap-genericModalC-modal');
									var oModalInner = bb.selector.query(oModal, '.ui-modal');
									oModalInner.setAttribute('style','width:734px');
									phe.modal.showModal('0.5', oModal, document.body, true, 0, 120);
									
								} else {
									onForm2Submit_PostGenModalCheck();
								}
								
							} else {
								onForm2Submit_PostGenModalCheck();
							}
						} else {
							onForm2Submit_PostGenModalCheck();
						}
						
					} else { 
						onForm2Submit_PostGenModalCheck();
					}
					
				} else if (res.success_BACKUP) {
					// PS: This will either take user into AOL or into DSP
					absa.login.removeLogoffEventListener();
					if (res.dsp == true) {
						//http://eu.absa.co.ca/dsp?token=1&dspid=2&rid=3
						var arrURL = res.url.split("?");
						var arrParams = arrURL[1].split("&");
						
						var dspToken = "";
						var dspID = "";
						var simSwap = "";
						var isTransactional = "";
						var bis = "";
						var sbu = "";
						var clientIP = "";
						var lang = "E";
						var wfpt = "";
						for (var x=0; x<arrParams.length; x++) {
							if (arrParams[x].indexOf("token") > -1) {
								dspToken = arrParams[x].slice((arrParams[x].indexOf("=")+1));
							} else if (arrParams[x].indexOf("dspid") > -1) {
								dspID = arrParams[x].slice((arrParams[x].indexOf("=")+1));
							} else if (arrParams[x].indexOf("simswap") > -1) {
								simSwap = arrParams[x].slice((arrParams[x].indexOf("=")+1));
							} else if (arrParams[x].indexOf("istransactional") > -1) {
								isTransactional = arrParams[x].slice((arrParams[x].indexOf("=")+1));
							} else if (arrParams[x].indexOf("bis") > -1) {
								bis = arrParams[x].slice((arrParams[x].indexOf("=")+1));
							} else if (arrParams[x].indexOf("sbu") > -1) {
								sbu = arrParams[x].slice((arrParams[x].indexOf("=")+1));
							} else if (arrParams[x].indexOf("ip") > -1) {
								clientIP = arrParams[x].slice((arrParams[x].indexOf("=")+1));
							} else if (arrParams[x].indexOf("lang") > -1) {
								lang = arrParams[x].slice((arrParams[x].indexOf("=")+1));
							} else if (arrParams[x].indexOf("wfpt") > -1) {
								wfpt = arrParams[x].slice((arrParams[x].indexOf("=")+1));
							}
						}
						
						// PS: if testEnvironment then look at referer and redirect back there 
						// do NOT do this in PROD - security risk
						if (absa.ITE == 'true') {
							postToDSP(sDSPREFERER, dspID, dspToken, simSwap, isTransactional, bis, sbu, clientIP, lang, wfpt);
						} else {
							postToDSP(arrURL[0], dspID, dspToken, simSwap, isTransactional, bis, sbu, clientIP, lang, wfpt);
						}
						// Now Post to DSP to log client in
						//postToDSP(arrURL[0], dspID, dspToken, simSwap, isTransactional, bis, sbu, clientIP, lang, wfpt);
						
					} else if (res.express == true) {
						//http://eu.absa.co.ca/axob/j_security_autologin?esessionid=1&ip=2&rid=3
						var arrURL = res.url.split("?");
						var arrParams = arrURL[1].split("&");
						var eSessionID = "";
						var lang = "";
						var clientIP = "";
						for (var x=0; x<arrParams.length; x++) {
							if (arrParams[x].indexOf("session") > -1) {
								eSessionID = arrParams[x].slice((arrParams[x].indexOf("=")+1)); 
							} else if (arrParams[x].indexOf("ip") > -1) {
								clientIP = arrParams[x].slice((arrParams[x].indexOf("=")+1));
							} else if (arrParams[x].indexOf("lang") > -1) {
								lang = arrParams[x].slice((arrParams[x].indexOf("=")+1));
							}
						}
						
						//Now Post to Express to log client in
						postToExpress(arrURL[0], clientIP, eSessionID, lang);
						
					} else {
						location.href = res.url;
					}
					
				} else if (res.systemError) {
					absa.hidePleaseWait();
					showErrorMessage("ap-login-form2-error", res.errorMessage || "System unavailable.");
					
				} else if (res.noAccounts) {
					absa.login.removeLogoffEventListener();
					location.href = "login.jsp?noaccounts=true";
					
				} else if (res.passwordLocked) {
					absa.login.removeLogoffEventListener();
					location.href = "login.jsp?passwordlocked=true";
					
				} else {
					absa.hidePleaseWait();
					
					// Show error details
					showErrorMessage("ap-login-form2-error", res.errorMessage || "Password incorrect.");
					// Clear password fields
					document.getElementById("pff1").value = "";
					document.getElementById("pff2").value = "";
					document.getElementById("pff3").value = "";
					// Set focus on 1st password block
					document.getElementById("pff1").focus();
				}
				
			} else {
				absa.hidePleaseWait();
				showErrorMessage("ap-login-form2-error");
			}
		}, Params);
	}
};


//PS: This will be called on CLOSE of the modal above here
function onForm2Submit_PostGenModalCheck() {
	absa.showPleaseWait();
	
	var res = JSONRequest.parse(absa.login.oResponse.text);
	
	// PS: This will either take user into AOL or into Amazon feature store (used res.url)
	absa.login.removeLogoffEventListener();
	if (res.dsp == true) {
		//http://eu.absa.co.ca/dsp?token=1&dspid=2&rid=3
		var arrURL = res.url.split("?");
		var arrParams = arrURL[1].split("&");
		
		var dspToken = "";
		var dspID = "";
		var simSwap = "";
		var isTransactional = "";
		var bis = "";
		var sbu = "";
		var clientIP = "";
		var lang = "E";
		var wfpt = "";
		for (var x=0; x<arrParams.length; x++) {
			if (arrParams[x].indexOf("token") > -1) {
				dspToken = arrParams[x].slice((arrParams[x].indexOf("=")+1));
			} else if (arrParams[x].indexOf("dspid") > -1) {
				dspID = arrParams[x].slice((arrParams[x].indexOf("=")+1));
			} else if (arrParams[x].indexOf("simswap") > -1) {
				simSwap = arrParams[x].slice((arrParams[x].indexOf("=")+1));
			} else if (arrParams[x].indexOf("istransactional") > -1) {
				isTransactional = arrParams[x].slice((arrParams[x].indexOf("=")+1));
			} else if (arrParams[x].indexOf("bis") > -1) {
				bis = arrParams[x].slice((arrParams[x].indexOf("=")+1));
			} else if (arrParams[x].indexOf("sbu") > -1) {
				sbu = arrParams[x].slice((arrParams[x].indexOf("=")+1));
			} else if (arrParams[x].indexOf("ip") > -1) {
				clientIP = arrParams[x].slice((arrParams[x].indexOf("=")+1));
			} else if (arrParams[x].indexOf("lang") > -1) {
				lang = arrParams[x].slice((arrParams[x].indexOf("=")+1));
			} else if (arrParams[x].indexOf("wfpt") > -1) {
				wfpt = arrParams[x].slice((arrParams[x].indexOf("=")+1));
			}
		}
		
		//Now Post to DSP to log client in
		// PS: if testEnvironment then look at referer and redirect back there 
		// do NOT do this in PROD - security risk
		if (absa.ITE == 'true') {
			var sDSPREFERER = "";
			var oDSPREFERER = document.getElementById("dspReferer");
			if (oDSPREFERER != null) sDSPREFERER = oDSPREFERER.value;
			
			postToDSP(sDSPREFERER, dspID, dspToken, simSwap, isTransactional, bis, sbu, clientIP, lang, wfpt);
		} else {
			postToDSP(arrURL[0], dspID, dspToken, simSwap, isTransactional, bis, sbu, clientIP, lang, wfpt);
		}
		// OLD Way 
		//postToDSP(arrURL[0], dspID, dspToken, simSwap, isTransactional, bis, sbu, clientIP, lang, wfpt);
		
	} else if (res.express == true) {
		//http://eu.absa.co.ca/axob/j_security_autologin?esessionid=1&ip=2&rid=3
		var arrURL = res.url.split("?");
		var arrParams = arrURL[1].split("&");
		var eSessionID = "";
		var lang = "";
		var clientIP = "";
		for (var x=0; x<arrParams.length; x++) {
			if (arrParams[x].indexOf("session") > -1) {
				eSessionID = arrParams[x].slice((arrParams[x].indexOf("=")+1)); 
			} else if (arrParams[x].indexOf("ip") > -1) {
				clientIP = arrParams[x].slice((arrParams[x].indexOf("=")+1));
			} else if (arrParams[x].indexOf("lang") > -1) {
				lang = arrParams[x].slice((arrParams[x].indexOf("=")+1));
			}
		}
		
		//Now Post to Express to log client in
		postToExpress(arrURL[0], clientIP, eSessionID, lang);
		
	} else {
		location.href = res.url;
	}
}


function onForm2SubmitForgotPassword(){
	doSubmitForm2ForgotPassword();
};

function doSubmitForm2ForgotPassword() {
	if (typeof window["isimo"] === "function") { window['isimo']('transaction'); } else { absa.io.makeRequest("proxy?pipe=genericEmptyResponse&xslFile=subtree/load&section="+absa.getDPS(""+document.body.getAttribute("sId")), function(oResponse) {}); } // Device Profiling
	
	hideErrorMessages();
	absa.showPleaseWait();
	
	var PostData = {};
	PostData.task = "forgotpassword";
	
	var Params = {};
	Params[gadgets.io.RequestParameters.METHOD] = gadgets.io.MethodType.POST;
	Params[gadgets.io.RequestParameters.POST_DATA] = gadgets.io.encodeValues(PostData);
	
	absa.io.makeRequest("j_password_security_login", function(oResponse) {
		if (!oResponse.errors.length) {
			var res = JSONRequest.parse(oResponse.text);
			if ((res.url.indexOf("rvn") > -1) | (res.url.indexOf("svm") > -1)) {
				// rvn.jsp
				var Params2 = {};
				Params2[gadgets.io.RequestParameters.METHOD] = gadgets.io.MethodType.GET;
				
				absa.io.makeRequest(res.url + "?lang=" + getLanguage(), function(oResponse2){
					absa.hidePleaseWait();
					if (!oResponse2.errors.length) {
						var oContainer = document.getElementById("ap-login-container");
						oContainer.innerHTML = oResponse2.text;
						
						absa.initializeNewContent(oContainer);
						
						document.getElementById("divhowitworks").style.display = "none";
						document.getElementById("divimportantlinks").style.display = "block";
						
						// PS: Resonance - resize the 2 divs so that PAssword screen fits.
						var oLoginContainer1 = document.getElementById("ap-container-content");
						var oLoginContainerColumn1 = document.getElementById("ap-column-1");
						var oLoginContainerColumn2 = document.getElementById("ap-column-2");
						document.getElementById("divimportantlinks").style.display = "none";
						document.getElementById("divhowitworks").style.display = "block";
						//ap-column-1  altering it so stuff fits on Password Screen
						bb.html.removeClass(oLoginContainerColumn1, 'accessAccountScreen');
						bb.html.removeClass(oLoginContainerColumn2, 'accessAccountScreenAdds');
						//ap-column-2  altering it so stuff fits on Password Screen
						bb.html.addClass(oLoginContainerColumn1, 'passwordScreen');
						bb.html.addClass(oLoginContainerColumn2, 'passwordScreenAdds');
						
						
						document.getElementById("timeStamp1").innerHTML = "<span>"+res.time+"</span>";
						document.getElementById("timeStamp2").innerHTML = "<span>"+res.time+"</span>";
						
						if (res.url.indexOf("svm") > -1) {
							absa.n2fa.init();
							setTimeout(function(){
								var sData = {};
								//sData.form = oCurrentForm;
								sData.form = bb.selector.query(oContainer,".ap-SVM-form");
								sData.isUnAuth = true;
								absa.apps.unAuthSessionID = sData.form.getAttribute("data-sid");
								gadgets.pubsub.publish("SVM-form-loaded", sData);
							}, 2000);
						}
						
					} else {
						showErrorMessage("ap-login-form2-error");
					}
				}, Params2);
				
			} else if (res.systemError) {
				absa.hidePleaseWait();
				showErrorMessage("ap-login-form2-error", res.errorMessage || "System unavailable.");
				
			} else if (res.noAccounts) {
				absa.login.removeLogoffEventListener();
				location.href = "login.jsp?noaccounts=true";
				
			} else if (res.passwordLocked) {
				absa.login.removeLogoffEventListener();
				location.href = "login.jsp?passwordlocked=true";
				
			} else {
				absa.hidePleaseWait();
				
				// Show error details
				showErrorMessage("ap-login-form2-error", res.errorMessage || "Password incorrect.");
				// Clear password fields
				document.getElementById("pff1").value = "";
				document.getElementById("pff2").value = "";
				document.getElementById("pff3").value = "";
				// Set focus on 1st password block
				document.getElementById("pff1").focus();
			}
		
		} else {
			absa.hidePleaseWait();
			showErrorMessage("ap-login-form2-error");
		}
	}, Params);
};

//PS: Special function for when client password is locked and we AUTO take client to the reset password screen
function doSubmitForm2ForgotPasswordSpecial() {
	hideErrorMessages();
	absa.showPleaseWait();
	
	var PostData = {};
	PostData.task = "forgotpassword";
		
	var Params = {};
	Params[gadgets.io.RequestParameters.METHOD] = gadgets.io.MethodType.POST;
	Params[gadgets.io.RequestParameters.POST_DATA] = gadgets.io.encodeValues(PostData);
	
	absa.io.makeRequest("j_password_security_login", function(oResponse) {
		if (!oResponse.errors.length) {
			var res = JSONRequest.parse(oResponse.text);
			var doIt = false;
			if (res.url) {
				if (res.url.indexOf("rvn") > -1) {
					doIt = true;
				}
			}
			
			if (doIt) {
				var Params2 = {};
				Params2[gadgets.io.RequestParameters.METHOD] = gadgets.io.MethodType.GET;
				
				//absa.io.makeRequest(res.url + "?lang=" + getLanguage(), function(oResponse2){
				absa.io.makeRequest("static/rvn.jsp?lang=" + getLanguage(), function(oResponse2){
					absa.hidePleaseWait();
					if (!oResponse2.errors.length) {
						var oContainer = document.getElementById("ap-login-container");
						oContainer.innerHTML = oResponse2.text;
						
						absa.initializeNewContent(oContainer);
						
						document.getElementById("divhowitworks").style.display = "none";
						document.getElementById("divimportantlinks").style.display = "block";
						
						document.getElementById("timeStamp1").innerHTML = "<span>"+res.time+"</span>";
						document.getElementById("timeStamp2").innerHTML = "<span>"+res.time+"</span>";
					} else {
						showErrorMessage("ap-login-form2-error");
					}
				}, Params2);
			} else {
				absa.hidePleaseWait();
				showErrorMessage("ap-login-form1-error", res.errorMessage || "System unavailable.");
				setTimeout(function(){ absa.login.doLogout }, 2000);
			}
		} else {
			absa.hidePleaseWait();
			showErrorMessage("ap-login-form2-error");
			setTimeout(function(){ absa.login.doLogout }, 2000);
		}
	}, Params);
};

function resetForm2() {
	document.getElementById("pff1").value = "";
	document.getElementById("pff2").value = "";
	document.getElementById("pff3").value = "";
	
	var oSel = document.getElementById("landingpage2");
	var defaultVal = oSel.getAttribute("defaultVal");
	oSel.value = defaultVal;
	
	document.getElementById("pff1").focus();
};

function onForm3Submit() {
	// Hide error messages
	hideErrorMessages();
	
	var a = document.getElementById("password1");
	var b = document.getElementById("password2");
	
	if (a.value == '') {
		a.focus();
		return false;
	}
	if (b.value == '') {
		b.focus();
		return false;
	}
	
	if (a.value != b.value) {
		a.focus();
		
		a.value = "";
		b.value = "";
		
		var oMessage = document.getElementById("ap-login-form3-error-mismatch");
		phe.message.show(oMessage);
		phe.message.setTimeStamp(oMessage);
		
	} else if (absa.form.validate(bb.selector.query(document.body, '.ui-form'))) {
		doSubmitForm3();
	}
};

function doSubmitForm3() {
	absa.showPleaseWait();
	
	var PostData = {};
	PostData.password1 = document.getElementById("password1").value;
	PostData.landingpage = document.getElementById("landingpage3").value;
	
	var Params = {};
	Params[gadgets.io.RequestParameters.METHOD] = gadgets.io.MethodType.POST;
	Params[gadgets.io.RequestParameters.POST_DATA] = gadgets.io.encodeValues(PostData);
	
	absa.io.makeRequest("j_new_password", function(oResponse) {
		if (!oResponse.errors.length) {
			var res = JSONRequest.parse(oResponse.text);
			if (res.success) {
				// Take user into AOL
				absa.login.removeLogoffEventListener();
				location.href = res.url;
				
			} else if (res.reset) {
				var PostDataB = {};
				PostDataB.passwordreset = "true";
				PostDataB.lang = ""+getLanguage();
				
				var ParamsB = {};
				ParamsB[gadgets.io.RequestParameters.METHOD] = gadgets.io.MethodType.POST;
				ParamsB[gadgets.io.RequestParameters.POST_DATA] = gadgets.io.encodeValues(PostDataB);
				
				absa.io.makeRequest(res.url, function(oResponseB) {
					absa.hidePleaseWait();
					if (!oResponseB.errors.length) {
						var oContainer = document.getElementById("ap-login-container");
						oContainer.innerHTML = oResponseB.text;
						
						absa.initializeNewContent(oContainer);
						
						var a = bb.selector.query(oContainer,"#j_username");
						a.focus();
						
						document.getElementById("divhowitworks").style.display = "none";
						document.getElementById("divimportantlinks").style.display = "block";
					} else {
						showErrorMessage("ap-forgotpin-error",oResponseB.errors[0]);
					}
				}, ParamsB);
				
			} else {
				absa.hidePleaseWait();
				
				// Show error details
				showErrorMessage("ap-login-form3-error", res.errorMessage || "System unavailable.");
				document.getElementById("password1").focus();
			}
		} else {
			absa.hidePleaseWait();
			showErrorMessage("ap-login-form3-error");
		}
	}, Params);
};

function resetForm3() {
	document.getElementById("password1").value = "";
	document.getElementById("password2").value = "";
};

// Limits not set
function onForm4Submit() {
	// Hide error messages
	hideErrorMessages();
	doSubmitForm4();
};

function doSubmitForm4() {
	absa.showPleaseWait();
	
	var Params = {};
	Params[gadgets.io.RequestParameters.METHOD] = gadgets.io.MethodType.POST;
	absa.io.makeRequest("j_limits_not_set", function(oResponse) {
		if (!oResponse.errors.length) {
			var res = JSONRequest.parse(oResponse.text);
			if (res.success) {
				// Take user to Portal
				absa.login.removeLogoffEventListener();
				location.href = res.url;
			} else {
				absa.hidePleaseWait();
				showErrorMessage("ap-login-form4-error", res.errorMessage || "System unavailable.");
			}
		} else {
			absa.hidePleaseWait();
			showErrorMessage("ap-login-form4-error");
		}
	}, Params);
	
	return false;
};

function onForm5Submit(task, daForm) {
	// Hide error messages
	hideErrorMessages();
	
	var a = document.getElementById("RVNCode");
	if (a.value == '') {
		a.focus();
	}
	
	if (task != 'resendRVN' && absa.form.validate(bb.selector.query(document.body, '#'+daForm))) {
		doSubmitForm5(task);
	} else {
		doSubmitForm5(task);
	}
};

function doSubmitForm5(task){
	// task = resendRVN or submitRVN
	absa.showPleaseWait();
	phe.message.hide(document.getElementById("ap-login-form5-error"));
	
	var PostData = {};
	PostData.verificationCode = ""+document.getElementById("RVNCode").value;
	PostData.referenceNumber = ""+document.getElementById("refNo").value;
	PostData.task = task;
	
	var Params = {};
	Params[gadgets.io.RequestParameters.METHOD] = gadgets.io.MethodType.POST;
	Params[gadgets.io.RequestParameters.POST_DATA] = gadgets.io.encodeValues(PostData);
	
	absa.io.makeRequest("j_security_RVN", function(oResponse) {
		if (!oResponse.errors.length) {
			
			var res = JSONRequest.parse(oResponse.text);
			if (res.success && (res.url.indexOf("newpassword") > -1)) {
				//newpassword.jsp
				var PostData2 = {};
				PostData2.lang = ""+getLanguage();
				
				var Params2 = {};
				Params2[gadgets.io.RequestParameters.METHOD] = gadgets.io.MethodType.POST;
				Params2[gadgets.io.RequestParameters.POST_DATA] = gadgets.io.encodeValues(PostData2);
				
				absa.io.makeRequest(res.url, function(oResponse2){
					absa.hidePleaseWait();
					if (!oResponse2.errors.length) {
						var oContainer = document.getElementById("ap-login-container");
						oContainer.innerHTML = oResponse2.text;
						
						absa.initializeNewContent(oContainer);
						
						document.getElementById("divhowitworks").style.display = "none";
						document.getElementById("divimportantlinks").style.display = "block";
						
					} else {
						showErrorMessage("ap-login-form5-error");
					}
				}, Params2);
				
			} else if (res.success && (res.url == "")) {
				// Client chose to resendRVN so just update the RVN form
				absa.hidePleaseWait();
				document.getElementById("RVNCode").focus();
				document.getElementById("timeStamp1").innerHTML = "<span>"+res.time+"</span>";
				
			} else {
				// Show error details
				absa.hidePleaseWait();
				showErrorMessage("ap-login-form5-error", res.errorMessage || "System unavailable.");
				document.getElementById("RVNCode").focus();
				
				document.getElementById("btnRVNResend").style.display = "none";
				document.getElementById("btnRVNSubmit").style.display = "none";
				
				document.getElementById("timeStamp1").innerHTML = "<span>"+res.time+"</span>";
				try { document.getElementById("timeStamp2").innerHTML = "<span>"+res.time+"</span>"; } catch (err) {}
			}
			
		} else {
			absa.hidePleaseWait();
			showErrorMessage("ap-login-form5-error");
		}
	}, Params);
};


function doLoadNewPasswordAfterUSSD() {
	var PostDataNP = {};
	PostDataNP.lang = ""+getLanguage();
	
	var ParamsNP = {};
	ParamsNP[gadgets.io.RequestParameters.METHOD] = gadgets.io.MethodType.POST;
	ParamsNP[gadgets.io.RequestParameters.POST_DATA] = gadgets.io.encodeValues(PostDataNP);
	
	absa.io.makeRequest("static/newpassword.jsp", function(oResponseNP) {
		absa.hidePleaseWait();
		if (!oResponseNP.errors.length) {
			var oContainer = document.getElementById("ap-login-container");
			oContainer.innerHTML = oResponseNP.text;
			absa.initializeNewContent(oContainer);
			document.getElementById("divhowitworks").style.display = "none";
			document.getElementById("divimportantlinks").style.display = "block";
		} else {
			showErrorMessage("ap-login-form5-error");
		}
	}, ParamsNP);
};

// Other functions
function showErrorMessage(sId, sMessage) {
	var oMessage = document.getElementById(sId);
	phe.message.show(oMessage);
	
	if (sMessage == null) sMessage = "";
	
	if (sMessage.indexOf("~") > -1) {
		if (getLanguage() == 'af') {
			sMessage = sMessage.substring((sMessage.indexOf("~")+1));
		} else {
			sMessage = sMessage.substring(0,sMessage.indexOf("~"));
		}
	}
	
	phe.message.setMessage(oMessage, sMessage || "System unavailable. Please try again later.");
	phe.message.setTimeStamp(oMessage);
};

function hideErrorMessages() {
	var aMessages = bb.selector.queryAll(document.getElementById("ap-login-container"), ".ui-message");
	for (var nIndex = 0, nLength = aMessages.length; nIndex < nLength; nIndex++) {
		phe.message.hide(aMessages[nIndex]);
	}
};

function doMoveForm2Focus(oElement){
	if (oElement.id == "pff1") {
		if (oElement.value.length) {
			document.getElementById("pff2").focus();
		}
		
	} else if (oElement.id == "pff2") {
		if (oElement.value.length) {
			document.getElementById("pff3").focus();
		}
	}
};

function showHideHelp(oBtn) {
	absa.showMeHow.toggleLogin(oBtn, true, '.ap-container');
};

function showPasswordTips() {
	var oModal = bb.selector.query(document.body, ".modalPasswordTips");
	phe.modal.showModal(0.5, oModal, null, true);
};

function changeLang() {
	var tmpL = getLanguage();
	var tmpLoc = location.href;
	if (tmpLoc.indexOf("#") > -1) {
		tmpLoc = tmpLoc.substring(0, tmpLoc.indexOf("#"));
	}
	if (tmpLoc.indexOf("?") > -1) {
		tmpLoc = tmpLoc.substring(0, tmpLoc.indexOf("?"));
	}
	
	if (tmpL == "en") {
		location.href = tmpLoc + "?lang=af";
	} else {
		location.href = tmpLoc + "?lang=en";
	}
};

function getLanguage() {
	return document.getElementById("lang").value;
};

// PS: Added this here for new logoffModal in login process
var absa = window.absa || {};
absa.login = absa.login || {};
absa.touch = absa.touch || {};
absa.touch.enabled = false;

absa.login.init = function() {
	// Touch controller initialization
	var userAgent	= navigator.userAgent.toLowerCase(),
		bIPad		= userAgent.indexOf("ipad") > -1,
		bAndroid	= userAgent.indexOf("android") > -1;
	if (bAndroid || bIPad) {
		if (bAndroid) {
			bb.html.addClass(document.documentElement, "android");
			absa.touch.android = true;
		}
		if (bIPad) {
			bb.html.addClass(document.documentElement, "ipad");
			absa.touch.iPad = true;
		}
		
		bb.html.addClass(document.documentElement, "touch");
		absa.touch.enabled = true;
	}
	
	// Login 1 form initialization
	if (absa.touch) {
		if (absa.touch.iPad) {
			document.getElementById("j_pin").setAttribute("pattern", "[0-9]*");
		}
	}
};


//PS: No logoff modal here 
//Just log user off as allowing him to continue will not work as session on SRV side dies after 1 more minute.
absa.login.oLogoffModal;
absa.login.oDisplayTimer;
absa.login._timer1;
absa.login._timer2;
absa.login._countDownSeconds = 60;
absa.login._doSrvCallEvery = 0;
absa.login._bIsLogoffModalDisplaying = false;
absa.login.resetTimer = function() {
	clearTimeout(absa.login._timer1);
	clearTimeout(absa.login._timer2);
	absa.login._timer1 = setTimeout("absa.login.removeTime()", absa.TIMEOUT_LOGOFF);
	absa.login._bIsLogoffModalDisplaying = false;
};

absa.login.resetTimer2 = function() {
	clearTimeout(absa.login._timer1);
	clearTimeout(absa.login._timer2);
	absa.login._timer1 = setTimeout("absa.login.removeTime()", absa.TIMEOUT_LOGOFF);
	absa.login._bIsLogoffModalDisplaying = false;
	
	//PS: Now do call for img from server so that session on server does not get killed
	//cannot call pipe here as spring will log you out
	var img1 = document.createElement('img');
	img1.src = absa.CONTEXT + '/static/style/resources/absa-logo.png?uniq=' + Math.random();
	img1.style.display = 'none';
};

absa.login.removeTime = function() {
	//PS: Just log client off - do not allow option to extend session on login screen
	absa.login.doLogout();
};

absa.login.doCountdown = function(daCount) {
	absa.login._countDownSeconds = (Number(daCount) - 1);
	if (absa.login._countDownSeconds <= 0) {
		absa.login.doLogout();
	} else {
		absa.login.oDisplayTimer.innerHTML = "<b>"+absa.login._countDownSeconds+"</b>";
		absa.login._timer2 = setTimeout("absa.login.doCountdown("+absa.login._countDownSeconds+")",1000);
	}
};

absa.login.doLogout = function() {
	window.removeEventListener ? window.removeEventListener("unload", absa.login.doLogout, false) : window.detachEvent("onunload", absa.login.doLogout);
	location.href	= absa.CONTEXT + "/j_spring_security_logout?uniq=" + new Date().getTime();
};

absa.login.goToLoginForm1 = function() {
	location.href = absa.CONTEXT + '?uniq=' + new Date().getTime();
};

absa.login.addLogoffEventListeners = function() {
	absa.login.resetTimer();
	//Register event listener to reset autologoff counter
	document.addEventListener ? document.addEventListener("click", absa.login.resetTimer, false) : document.attachEvent("onclick", absa.login.resetTimer);
	window.addEventListener ? window.addEventListener("unload", absa.login.doLogout, false) : window.attachEvent("onunload", absa.login.doLogout);
	
	//Fixes the timer issue if browser looses focus and regains it.
	window.addEventListener ? window.addEventListener("blur", absa.login.aolOnBlur, false) : window.attachEvent("onblur", absa.login.aolOnBlur);
	window.addEventListener ? window.addEventListener("focus", absa.login.aolOnFocus, false) : window.attachEvent("onfocus", absa.login.aolOnFocus);
};

absa.login.removeLogoffEventListener = function() {
	document.removeEventListener ? document.removeEventListener("click", absa.login.resetTimer, false) : document.detachEvent("onclick", absa.login.resetTimer);
	window.removeEventListener ? window.removeEventListener("unload", absa.login.doLogout, false) : window.detachEvent("onunload", absa.login.doLogout);
};

//When browser looses focus and regains it check if User is not already logged off.
absa.login._blurTime;
absa.login.aolOnBlur = function() {
	absa.login._blurTime = new Date().getTime();
};

//PS: No logoff modal here - it does not work as SRV session dies if we allow it and 1 more minutes ellapses
absa.login.aolOnFocus = function() {
	if (absa.login._bIsLogoffModalDisplaying == false) {
		var focusTime = new Date().getTime();
		diffMillis = focusTime - absa.login._blurTime;
		if (isNaN(diffMillis)) {
			absa.login.resetTimer2();
		} else {
			if (diffMillis >= absa.TIMEOUT_LOGOFF) {
				absa.login.doLogout();
			} else if( diffMillis < absa.TIMEOUT_LOGOFF) {
				//else set new remaining time before showing logoff modal
				clearTimeout(absa.login._timer1);
				clearTimeout(absa.login._timer2);
				remainingTimeSeconds = Math.floor((absa.TIMEOUT_LOGOFF - diffMillis));
				absa.login._timer1 = setTimeout("absa.login.removeTime()", remainingTimeSeconds);
				absa.login._bIsLogoffModalDisplaying = false;
			}
		}
	}
};

absa.login.doLoad = function() {
	if (top != self) { 
		top.location.replace(self.location.href); 
	}
};

absa.login.doFocus = function() {
	if (top != self) { 
		top.location.replace(self.location.href); 
	}
};

absa.login.onResetPinClick = function(oLink) {
	if (typeof window['isimo'] === "function") { window['isimo']('change_details'); } else { absa.io.makeRequest("proxy?pipe=genericEmptyResponse&xslFile=subtree/load&section="+absa.getDPS(""+document.body.getAttribute("sId")), function(oResponse) {}); } // Device Profiling
	
	var oContainer = document.getElementById("ap-login-container");
	var action="resetPin/";
	
	// login-form2.jsp
	document.getElementById("divbottomadds").style.display = "none";
	document.getElementById("divadds1").style.display = "none";
	
	// PS: Resonance - resize the 2 divs so that everything on screen fits.
	var oLoginContainer1 = document.getElementById("ap-container-content");
	var oLoginContainerColumn1 = document.getElementById("ap-column-1");
	var oLoginContainerColumn2 = document.getElementById("ap-column-2");
	document.getElementById("divimportantlinks").style.display = "none";
	document.getElementById("divhowitworks").style.display = "block";
	//ap-column-1  altering it so stuff fits on Password Screen
	bb.html.removeClass(oLoginContainerColumn1, 'accessAccountScreen');
	bb.html.removeClass(oLoginContainerColumn2, 'accessAccountScreenAdds');
	//ap-column-2  altering it so stuff fits on Password Screen
	bb.html.addClass(oLoginContainerColumn1, 'passwordScreen');
	bb.html.addClass(oLoginContainerColumn2, 'passwordScreenAdds');
	phe.common.show(document.getElementById('ap-campaignImage-div'));
	phe.common.hide(document.getElementById('ap-campAPBImage-div'));
	
	// add lang	
	var str = window.location.href; 
	var n = str.indexOf('lang=af');
	if (n != '-1') {
		action = action + '?tmpLang=af';
	} 
	
	bb.html.addClass(oContainer, 'ap-common-positionRelative');
	phe.loadingMessage.showLoadingMessage(oContainer);
	
	absa.io.makeRequest(action, function(oResponse) {
		phe.loadingMessage.hideLoadingMessage(oContainer);
		oContainer.innerHTML = oResponse.text;
		absa.initializeNewContent(oContainer);
		document.getElementById("divbottomadds").style.display = "none";
		
		// Have to call this here as calling it onload of the login page was causing issues
		absa.n2fa.init();
	});
};


absa.login.genericModalChkBox = function(sModal_CorD, oChkBox, bIsReadConfirm) {
	var isChecked = phe.checkBox.isChecked(oChkBox);
	var PostData;
	if (sModal_CorD == 'C') { 
		PostData = {uniqCode : absa.GENMODALC_UNIQCODE}; 
	} else { 
		PostData = {uniqCode : absa.GENMODALD_UNIQCODE}; 
	}
	
	if (isChecked) {
		PostData.theValue = "Y";
		if(sModal_CorD == 'C'){ 
			absa.GENMODALC_HASCLIENTINDICATEDYET = "true";
		} else {
			absa.GENMODALD_HASCLIENTINDICATEDYET = "true";
		}
	} else {
		PostData.theValue = "N";
		if(sModal_CorD == 'C'){ 
			absa.GENMODALC_HASCLIENTINDICATEDYET = "false";
		} else {
			absa.GENMODALD_HASCLIENTINDICATEDYET = "false";
		}
	}
	
	var Params = {};
	Params[gadgets.io.RequestParameters.METHOD] = gadgets.io.MethodType.POST;
	Params[gadgets.io.RequestParameters.POST_DATA] = gadgets.io.encodeValues(PostData);
	
	var sURL = "";
	if (bIsReadConfirm) {
		sURL = 'proxy?pipe=genericEmptyResponse&xslFile=genericModal-updateReadConfirm';
	} else {
		sURL = 'proxy?pipe=genericEmptyResponse&xslFile=genericModal-updateDontShowAgain';
	}
	
	absa.io.makeRequest(sURL, function(oResponse) {
		if (!oResponse.errors.length) {
			//var oXHTML = bb.html.createElementFromString(oResponse.text);
			//var oErrorMessage = bb.selector.query(oXHTML, '.ap-fic-errorMessage');
			// PS: do Nothing further
		} 
	},Params);
};

absa.login.genericModalBtnJSFunc = function(sModal_C, oObj) {
	if (absa.login._genericModalCloseBtnCanWeContinue(sModal_C, oObj)) {
		// 1st close the current generic modal and then execute the below
		if (sModal_C == 'C') {
			absa.login.genericModalC_CloseBtn(oObj);
		}
		
		// 2nd now execute the JS from SDFC_Config for the respective BTN
		var oBtn = oObj; // Do this so that the NEW functions can reference  oBtn  inside themselves
		var objFuncFld = bb.selector.query(oObj,".ap-jsFunctionTxt");
		var funcTxt = bb.string.trim(objFuncFld.value);
		if (funcTxt != '' && funcTxt.length > 13) {
			// PS: the funcTxt MUST start with     function(){...}
			// PS: the function does NOT need to have a name but it can also 
			// 1st get the function parameters
			var startAt = (funcTxt.indexOf("(") + 1);
			var endAt = funcTxt.indexOf(")");
			var sParams = funcTxt.substring(startAt, endAt);
			
			//var fnParams = [1, 2, 3];
			var aFnParams = sParams.split(",");
			if (aFnParams.length == 1) {
				if (aFnParams[0] == '') {
					aFnParams[0] = oBtn;
					sParams = "oBtn";
				} else {
					aFnParams.unshift(oBtn);	//Add oBtn obj to the beginning of the array 
					sParams = "oBtn, " + sParams;
				}
			} else {
				aFnParams.unshift(oBtn);	//Add oBtn obj to the beginning of the array
				sParams = "oBtn, " + sParams;
			}
			
			// 2nd get the function body
			startAt = (funcTxt.indexOf("{") + 1);
			endAt = funcTxt.indexOf("}");
			var sFnBody = funcTxt.substring(startAt, endAt);
			
			// 3rd we now create the Function and envoke it 
			var fn = new Function(sParams, sFnBody);
			if (fn) fn.apply(null, aFnParams);
		}
	}
};

absa.login.genericModalC_CloseBtn = function(oObj) {
	if (absa.login._genericModalCloseBtnCanWeContinue('C', oObj)) {
		phe.modal.onCloseModalButtonClick(oObj);
	}
};

absa.login._genericModalCloseBtnCanWeContinue = function(sModal_C, oObj) {
	var oForm = bb.selector.queryAncestor(oObj, ".ap-genericModal-form");
	if (sModal_C == 'C') {
		if (absa.GENMODALC_READCONFIRM == 'true') {
			var oChkBox = bb.selector.query(oForm,".ap-genericModalC-chkBox-readConfirm");
			if (absa.form.validate.checkElement(oChkBox)) {
				return true;
			} else {
				return false;
			}
			
		} else {
			return true;
		}
	}
};

window.addEventListener ? window.addEventListener("load",absa.login.doLoad, false) : window.attachEvent("onload",absa.login.doLoad);
window.addEventListener ? window.addEventListener("focus",absa.login.doFocus, false) : window.attachEvent("onfocus",absa.login.doFocus);




