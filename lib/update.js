#!/usr/bin/env node

'use strict';

var http = require('http-get');

function checkNewVersion() {
    var promise = new Y.Promise(function(resolve, reject) {
        var request = http.get(platformURI, fileName, function(error, result) {
            if (error) {
                reject(error);
            }
            else {
                resolve({
                    file: fileName,
                    platform: platform
                });
            }
        });
    });
}