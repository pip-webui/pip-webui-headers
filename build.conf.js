module.exports = {
    module: {
        name: 'pipHeaders',
        styles: 'headers',
        export: 'pip'
    },
    build: {
        js: false,
        ts: false,
        tsd: false,
        bundle: false,
        html: false,
        less: true,
        lib: true,
        images: true,
        dist: true
    },
    file: {
        lib: [
            '../pip-webui-lib/dist/**/*'
        ]
    },
    samples: {
        port: 8170
    },
    api: {
        port: 8171
    }
};
