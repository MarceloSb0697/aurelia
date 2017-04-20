
export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging() 
        .plugin('./src/shared/components/index');

    aurelia.start().then(a => a.setRoot('src/app', document.body));
};
 