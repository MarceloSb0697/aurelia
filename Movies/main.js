export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-validation')
        .plugin('./shared/components/index');

    aurelia.start().then(a => a.setRoot());
};