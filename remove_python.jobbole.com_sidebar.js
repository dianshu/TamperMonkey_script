// ==UserScript==
// @name         删除伯乐在线右侧边栏
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  删除伯乐在线文章右侧边栏
// @author       feishicheng
// @match        http://*.jobbole.com/*
// @grant        none
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

(function() {
    'use strict';
    // 去除右侧边栏标签
    $("#sidebar").remove();
    // 设置左侧内容宽度
    var newWidth = jQuery(".header-wrapper").css("width");
    jQuery("div[id^='post-']").css("width", newWidth);
})();
