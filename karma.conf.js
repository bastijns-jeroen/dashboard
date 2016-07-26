module.exports = function (config) {
    'use strict';
    config.set({

        basePath: '',

        singleRun: true,

        frameworks: ['jspm', 'jasmine'],

        jspm: {
            loadFiles: [
                'app/**/*.spec.ts'
            ],
            serveFiles: [
                'app/**/*!(*.spec).ts',
                'tsconfig.json',
                'app/**/*.json'
            ]
        },

        proxies: {
            '/app': '/base/app',
            '/jspm_packages': '/base/jspm_packages',
            '/tsconfig.json': '/base/tsconfig.json'
        },

        reporters: ['spec'],

        browsers: ['PhantomJS2']
    });
};