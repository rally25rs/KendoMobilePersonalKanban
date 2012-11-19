define(["jQuery", "kendo", "tasksView"], function ($, kendo, tasksView) {
    "use strict";

    var _kendoApp,
                
        _init = function () {
            _kendoApp = new kendo.mobile.Application(document.body, { transition: "slide" });
        };

    return {
        init: _init,
        tasksView: tasksView
    }
});