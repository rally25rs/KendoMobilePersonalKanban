var app;

require.config({
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