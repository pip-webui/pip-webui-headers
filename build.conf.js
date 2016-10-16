module.exports = {
    module: {
        name: 'pipHeaders',
        styles: 'headers'
    },
    build: {
        js: true,
        ts: false,
        html: true,
        css: true,
        lib: true,
        images: true,
        dist: true
    },
    file: {
        lib: [
            '../pip-webui-lib/dist/**/*',
            '../pip-webui-css/dist/**/*'
        ]
    },
    samples: {
        port: 8170
    },
    api: {
        port: 8171
    }
};
