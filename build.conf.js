module.exports = {
    module: {
        name: 'pipHeaders',
        styles: 'index',
        export: 'pip.headers',
        standalone: 'pip.headers'
    },
    build: {
        js: false,
        ts: false,
        tsd: false,
        bundle: false,
        html: false,
        sass: true,
        lib: true,
        images: false,
        dist: false
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
