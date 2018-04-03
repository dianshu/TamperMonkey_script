// ==UserScript==
// @name         删除伯乐在线右侧边栏
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  删除伯乐在线python模块右侧边栏
// @author       feishicheng
// @match        http://python.jobbole.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // 去除右侧边栏标签
    jQuery("#sidebar").remove();
    // 设置左侧内容宽度
    var newWidth = jQuery(".header-wrapper").css("width");
    jQuery("div[id^='post-']").css("width", newWidth);
})();