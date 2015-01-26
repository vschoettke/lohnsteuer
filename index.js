/*jslint node: true*/
'use strict';

var lohnsteuerFuncs = require('./lohnsteuer');

function resultsToNumbers(results) {
    return Object.keys(results).reduce(function (res, key) {
        res[key] = +String(results[key]);
        return res;
    }, {});
}

function resultsToStrings(results) {
    return Object.keys(results).reduce(function (res, key) {
        res[key] = String(results[key]);
        return res;
    }, {});
}

function chain(a, b) {
    return function () {
        var args = Array.prototype.slice.call(arguments);
        return a(b.apply(undefined, args));
    };
}

module.exports = {
    forYear: function (year, options) {
        var lohnsteuerFunc = lohnsteuerFuncs['lohnsteuer' + year];

        options = options || {};
        if (options.asNumbers) {
            return chain(resultsToNumbers, lohnsteuerFunc);
        }

        if (options.asStrings) {
            return chain(resultsToStrings, lohnsteuerFunc);
        }

        return lohnsteuerFunc;
    },
    resultsToNumbers: resultsToNumbers,
    resultsToStrings: resultsToStrings
};
