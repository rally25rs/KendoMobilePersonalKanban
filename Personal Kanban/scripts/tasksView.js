define(["jQuery", "data", "templates"], function ($, data, templates) {
    "use strict";

    var selectedStatus = data.statuses[0],

        _onStatusChange = function (e) {
            selectedStatus = data.statuses[e.page];
        },

        _populateStatuses = function () {
            var scrollView = $("#tasks-view-statuses");
            $.each(data.statuses, function (index, task) {
                scrollView.append(templates.status(task));
            });
            scrollView.kendoMobileScrollView({
                change: _onStatusChange
            });
        },

        _populateTasks = function () {
            $("#tasks-view-tasks").kendoMobileListView({
                dataSource: selectedStatus.tasks,
                template: templates.task
            });
        };

    
    return {
        selectedStatus: selectedStatus,

        init: function (e) {
            _populateStatuses();
            _populateTasks();
        }
    };
});