var app;

require.config({
    paths: {
        jQuery: "../kendo/js/jquery.min",
        kendo: "../kendo/js/kendo.mobile.min"
    },
    shim: {
        jQuery: {
            exports: "jQuery"
        },
        kendo: {
            exports: "kendo"
        }
    }
});

require(["app"], function (application) {
    app = application;
    app.init();
});