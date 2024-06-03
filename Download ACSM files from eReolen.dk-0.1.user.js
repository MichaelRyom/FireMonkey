// ==UserScript==
// @name            Download ACSM files from eReolen.dk
// @namespace       https://github.com/MichaelRyom
// @description     Implements a TamperMonkey context menu, which will download the ACSM file for the given book lend. ACSM files are used by Adobe Digital Editions. Simply lend a book on eReolen.dk, click "Læs" and right click and use the TamperMonkey menu.
// @version         0.1
// @author          Michael Ryom
// @match           https://ereolen.dk/ting/object/*
// @grant           GM_openInTab
// @run-at          context-menu
// ==/UserScript==


(function() {
    'use strict';
    const orderIdElem = document.getElementById('pubhub-reader').getAttribute('order-id');
    const orderId = orderIdElem ? orderIdElem.trim() : 'Not found';
    const url = "https://service.pubhub.dk/Download.aspx?id="+orderId;
    console.log(orderId);
    GM_openInTab(url);
})();
