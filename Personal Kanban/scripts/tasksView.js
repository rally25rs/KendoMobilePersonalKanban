define(["jQuery", "kendo", "data", "templates"], function ($, kendo, data, templates) {
    "use strict";

    var viewModel = kendo.observable({
            selectedStatus: data.statuses[0],
        }),

        _onStatusChange = function (e) {
            viewModel.set("selectedStatus", data.statuses[e.page]);
        },

        _initStatuses = function () {
            var scrollView = $("#tasks-view-statuses");
            $.each(data.statuses, function (index, task) {
                scrollView.append(templates.status(task));
            });
            scrollView.kendoMobileScrollView({
                change: _onStatusChange
            });
        };

    
    return {
        init: function (e) {
            _initStatuses();
        },
        viewModel: viewModel
    };
});