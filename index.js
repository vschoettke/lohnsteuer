/*jslint node: true*/
"use strict";

var lohnsteuerFuncs = require("./lohnsteuer");

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

var algorithms = {
    "2006": {from: new Date(2006, 0, 1), exclusiveTo: new Date(2007, 0, 1)},
    "2007": {from: new Date(2007, 0, 1), exclusiveTo: new Date(2008, 0, 1)},
    "2008": {from: new Date(2008, 0, 1), exclusiveTo: new Date(2009, 0, 1)},
    "2009": {from: new Date(2009, 0, 1), exclusiveTo: new Date(2010, 0, 1)},
    "2010": {from: new Date(2010, 0, 1), exclusiveTo: new Date(2011, 0, 1)},
    "2011BisNov": {from: new Date(2011, 0, 1), exclusiveTo: new Date(2011, 11, 1)},
    "2011Dez": {from: new Date(2011, 11, 1), exclusiveTo: new Date(2012, 0, 1)},
    "2012": {from: new Date(2012, 0, 1), exclusiveTo: new Date(2013, 0, 1)},
    "2013": {from: new Date(2013, 0, 1), exclusiveTo: new Date(2014, 0, 1)},
    "2014": {from: new Date(2014, 0, 1), exclusiveTo: new Date(2015, 0, 1)},
    "2015BisNov": {from: new Date(2015, 0, 1), exclusiveTo: new Date(2015, 11, 1)},
    "2015Dez": {from: new Date(2015, 11, 1), exclusiveTo: new Date(2016, 0, 1)},
    "2016": {from: new Date(2016, 0, 1), exclusiveTo: new Date(2017, 0, 1)},
    "2017": {from: new Date(2017, 0, 1), exclusiveTo: new Date(2018, 0, 1)}
};

function algorithmByName(name, options) {
    var lohnsteuerFunc = lohnsteuerFuncs["lohnsteuer" + name];

    if (!lohnsteuerFunc) {
        throw new Error("No german income tax algorithm for name " + String(name) + " available");
    }

    options = options || {};
    if (options.asNumbers) {
        return chain(resultsToNumbers, lohnsteuerFunc);
    }

    if (options.asStrings) {
        return chain(resultsToStrings, lohnsteuerFunc);
    }

    return lohnsteuerFunc;
}

function algorithmForDate(date, options) {
    var dateTs = new Date(date).getTime();
    var foundAlgorithmName = Object.keys(algorithms).filter(function (algorithmName) {
        var info = algorithms[algorithmName];
        return dateTs >= info.from.getTime() && dateTs < info.exclusiveTo.getTime();
    })[0];

    if (!foundAlgorithmName) {
        throw new Error("No german income tax algorithm for given date " + new Date(dateTs).toISOString() + " available");
    }

    return algorithmByName(foundAlgorithmName, options);
}

module.exports = {
    algorithmForDate: algorithmForDate,
    algorithmByName: algorithmByName,
    resultsToNumbers: resultsToNumbers,
    resultsToStrings: resultsToStrings
};
