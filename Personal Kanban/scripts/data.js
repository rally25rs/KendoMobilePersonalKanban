define(["kendo"], function (kendo) {
    "use strict";
    var LOCALSTORAGE_NAME = "cws_PersonalKanbanData",

        _data,

        _initialData = {
            statuses: [
                { name: "To Do", limit: Infinity, tasks: [{name: "One"}, {name: "Two"}, {name: "Three"}] },
                { name: "In Progress", limit: 3, tasks: [] },
                { name: "Done", limit: Infinity, tasks: [] }
            ]
        },

        _save = function () {
            localStorage[LOCALSTORAGE_NAME] = JSON.stringify(_data);
        },

        _load = function () {
            var saved = localStorage[LOCALSTORAGE_NAME];
            _data = kendo.observable(saved ? JSON.parse(saved) : _initialData);
        };

    _load();

    return {
        statuses: _data.statuses
    };
});