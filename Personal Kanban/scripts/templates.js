define(["jQuery", "kendo"], function ($, kendo) {
"use strict";

    var _getText = function (selector) {
            return $(selector).text().trim();
        },

        _getFunc = function (selector) {
            return kendo.template(_getText(selector));
        };

    return {
        status: _getFunc("#status-template")
    }
});