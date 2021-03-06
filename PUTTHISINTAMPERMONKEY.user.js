// ==UserScript==
// @name         Auto RO boi
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @require      jquery-3.1.1.min.js
// @match        https://www.nationstates.net/page=regional_officer*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var checkboxes = document.querySelectorAll('input[type=checkbox]')
    checkboxes[3].click();
    checkboxes[5].click();
    checkboxes[6].click();
    checkboxes[7].click();
    document.getElementsByClassName("button icon primary")[0].focus();
    // Your code here...
})();
