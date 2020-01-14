// ==UserScript==
// @name         替换宋体为更纱黑体(Sarasa Gothic SC)
// @namespace    https://github.com/li-zyang
// @version      0.1
// @description  将网页中的宋体（或者默认字体）替换为更纱黑体，此脚本依赖本地安装的更纱黑体 (Sarasa Gothic SC)
// @author       li-zyang
// @include      http://*/*
// @include      https://*/*
// @grant        unsafeWindow
// ==/UserScript==
(function() {
  function addStyle(rules) {
    var styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    document.getElementsByTagName('body')[0].appendChild(styleElement);
    styleElement.appendChild(document.createTextNode(rules));
  }
  addStyle(
    'body {'+
      '-webkit-font-smoothing:"subpixel-antialiased !important";'+
      'font-family:"Sarasa Gothic SC"'+
    '}'+
    '@font-face {'+
      'font-family:"Arial Black";'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:"Arial Black";'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Arial Black")'+
    '}'+
    '@font-face {'+
      'font-family:Arial;'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:Arial;'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Arial")'+
    '}'+
    '@font-face {'+
      'font-family:Calibri;'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:Calibri;'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Calibri")'+
    '}'+
    '@font-face {'+
      'font-family:Cambria;'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:Cambria;'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Cambria")'+
    '}'+
    '@font-face {'+
      'font-family:Candara;'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:Candara;'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Candara")'+
    '}'+
    '@font-face {'+
      'font-family:"Comic Sans MS";'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:"Comic Sans MS";'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Comic Sans MS")'+
    '}'+
    '@font-face {'+
      'font-family:Constantia;'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:Constantia;'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Constantia")'+
    '}'+
    '@font-face {'+
      'font-family:Corbel;'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:Corbel;'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Corbel")'+
    '}'+
    '@font-face {'+
      'font-family:Georgia;'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:Georgia;'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Georgia")'+
    '}'+
    '@font-face {'+
      'font-family:Helvetica;'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:Helvetica;'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Helvetica")'+
    '}'+
    '@font-face {'+
      'font-family:Impact;'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:Impact;'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Impact")'+
    '}'+
    '@font-face {'+
      'font-family:"Lucida Grande";'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:"Lucida Grande";'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Lucida Grande")'+
    '}'+
    '@font-face {'+
      'font-family:Mceinline;'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:Mceinline;'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Mceinline")'+
    '}'+
    '@font-face {'+
      'font-family:"Palatino Linotype";'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:"Palatino Linotype";'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Palatino Linotype")'+
    '}'+
    '@font-face {'+
      'font-family:"Segoe UI";'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:"Segoe UI";'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Segoe UI")'+
    '}'+
    '@font-face {'+
      'font-family:"Tahoma Bold";'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:"Tahoma Bold";'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Tahoma Bold")'+
    '}'+
    '@font-face {'+
      'font-family:Tahoma;'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:Tahoma;'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Tahoma")'+
    '}'+
    '@font-face {'+
      'font-family:"Times CY";'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:"Times CY";'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Times CY")'+
    '}'+
    '@font-face {'+
      'font-family:"Times New Roman";'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:"Times New Roman";'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Times New Roman")'+
    '}'+
    '@font-face {'+
      'font-family:Times;'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:Times;'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Times")'+
    '}'+
    '@font-face {'+
      'font-family:"Trebuchet MS";'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:"Trebuchet MS";'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Trebuchet MS")'+
    '}'+
    '@font-face {'+
      'font-family:Verdana;'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:Verdana;'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Verdana")'+
    '}'+
    '@font-face {'+
      'font-family:sans-serif;'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:sans-serif;'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("sans-serif")'+
    '}'+
    '@font-face {'+
      'font-family:serif;'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:serif;'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("serif")'+
    '}'+
    '@font-face {'+
      'font-family:"Arial SimSun";'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:"Arial SimSun";'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Segoe UI")'+
    '}'+
    '@font-face {'+
      'font-family:FZLanTingHei-R-GBK;'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:FZLanTingHei-R-GBK;'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Segoe UI")'+
    '}'+
    '@font-face {'+
      'font-family:"Heiti SC";'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:"Heiti SC";'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Segoe UI")'+
    '}'+
    '@font-face {'+
      'font-family:"Microsoft Jhenghei";'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:"Microsoft Jhenghei";'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Segoe UI")'+
    '}'+
    '@font-face {'+
      'font-family:"Sarasa Gothic SC";'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:"Sarasa Gothic SC";'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Segoe UI")'+
    '}'+
    '@font-face {'+
      'font-family:MingLiU;'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:MingLiU;'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Segoe UI")'+
    '}'+
    '@font-face {'+
      'font-family:MingLiU-ExtB;'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:MingLiU-ExtB;'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Segoe UI")'+
    '}'+
    '@font-face {'+
      'font-family:MingLiU_HKSCS;'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:MingLiU_HKSCS;'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Segoe UI")'+
    '}'+
    '@font-face {'+
      'font-family:MingLiU_HKSCS-ExtB;'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:MingLiU_HKSCS-ExtB;'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Segoe UI")'+
    '}'+
    '@font-face {'+
      'font-family:NSimsun;'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:NSimsun;'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Segoe UI")'+
    '}'+
    '@font-face {'+
      'font-family:PMingLiU;'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:PMingLiU;'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Segoe UI")'+
    '}'+
    '@font-face {'+
      'font-family:PMingLiU-ExtB;'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:PMingLiU-ExtB;'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Segoe UI")'+
    '}'+
    '@font-face {'+
      'font-family:STHeiti;'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:STHeiti;'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Segoe UI")'+
    '}'+
    '@font-face {'+
      'font-family:Simhei;'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:Simhei;'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Segoe UI")'+
    '}'+
    '@font-face {'+
      'font-family:Simsun;'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:Simsun;'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Segoe UI")'+
    '}'+
    '@font-face {'+
      'font-family:"Source Han Sans CN";'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:"Source Han Sans CN";'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Segoe UI")'+
    '}'+
    '@font-face {'+
      'font-family:"WenQuanYi Zen Hei";'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:"WenQuanYi Zen Hei";'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Segoe UI")'+
    '}'+
    '@font-face {'+
      'font-family:kaiti;'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:kaiti;'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Segoe UI")'+
    '}'+
    '@font-face {'+
      'font-family:"noto sans";'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:"noto sans";'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Segoe UI")'+
    '}'+
    '@font-face {'+
      'font-family:"simsun Arial";'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:"simsun Arial";'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Segoe UI")'+
    '}'+
    '@font-face {'+
      'font-family:"宋体";'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:"宋体";'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Segoe UI")'+
    '}'+
    '@font-face {'+
      'font-family:"宋體";'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:"宋體";'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Segoe UI")'+
    '}'+
    '@font-face {'+
      'font-family:"微软雅黑";'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:"微软雅黑";'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Segoe UI")'+
    '}'+
    '@font-face {'+
      'font-family:"新宋体";'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:"新宋体";'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Segoe UI")'+
    '}'+
    '@font-face {'+
      'font-family:"新細明體";'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:"新細明體";'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Segoe UI")'+
    '}'+
    '@font-face {'+
      'font-family:"瀹嬩綋";'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:"瀹嬩綋";'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Segoe UI")'+
    '}'+
    '@font-face {'+
      'font-family:"細明體";'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:"細明體";'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Segoe UI")'+
    '}'+
    '@font-face {'+
      'font-family:"隶书";'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:"隶书";'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Segoe UI")'+
    '}'+
    '@font-face {'+
      'font-family:"黑体";'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:"黑体";'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Segoe UI")'+
    '}'+
    '@font-face {'+
      'font-family:"Andale Mono";'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:"Andale Mono";'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Consolas")'+
    '}'+
    '@font-face {'+
      'font-family:Consolas;'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:Consolas;'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Consolas")'+
    '}'+
    '@font-face {'+
      'font-family:"Courier New";'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:"Courier New";'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Consolas")'+
    '}'+
    '@font-face {'+
      'font-family:Courier;'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:Courier;'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Consolas")'+
    '}'+
    '@font-face {'+
      'font-family:"Lucida Console";'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:"Lucida Console";'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Consolas")'+
    '}'+
    '@font-face {'+
      'font-family:Menlo;'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:Menlo;'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Consolas")'+
    '}'+
    '@font-face {'+
      'font-family:Monaco;'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:Monaco;'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Consolas")'+
    '}'+
    '@font-face {'+
      'font-family:mono;'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:mono;'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Consolas")'+
    '}'+
    '@font-face {'+
      'font-family:monospace;'+
      'unicode-range:U+2E80-FFFF;'+
      'src:local("Sarasa Gothic SC")'+
    '}'+
    '@font-face {'+
      'font-family:monospace;'+
      'unicode-range:U+0000-2E7F;'+
      'src:local("Consolas")'+
    '}');
})();
