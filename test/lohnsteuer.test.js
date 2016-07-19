/*jslint node: true*/
/*global describe, it*/
'use strict';

var expect = require('chai').expect;

var lohnsteuer = require('../');

describe('lohnsteuer', function () {
    it('should calculate the german wage tax for 2015 correctly', function () {
//       <?xml version="1.0" encoding="UTF-8"?>
//         <lohnsteuer jahr="2015">
//         <eingaben>
//           <eingabe name="STKL" value="1" status="ok" />
//           <eingabe name="LZZ" value="1" status="ok" />
//           <eingabe name="RE4" value="2500000" status="ok" />
//         </eingaben>
//         <ausgaben>
//           <ausgabe name="BK" value="0" />
//           <ausgabe name="BKS" value="0" />
//           <ausgabe name="BKV" value="0" />
//           <ausgabe name="LSTLZZ" value="277400" />
//           <ausgabe name="SOLZLZZ" value="15257" />
//           <ausgabe name="SOLZS" value="0" />
//           <ausgabe name="SOLZV" value="0" />
//           <ausgabe name="STS" value="0" />
//           <ausgabe name="STV" value="0" />
//           <ausgabe name="VKVLZZ" value="0" />
//           <ausgabe name="VKVSONST" value="0" />
//         </ausgaben>
//       </lohnsteuer>
        expect(lohnsteuer.forYear("2015BisNov", {asNumbers: true})({
            STKL: 1,
            LZZ: 1,
            RE4: 2500000
        })).to.eql({
            BK: 0,
            BKS: 0,
            BKV: 0,
            LSTLZZ: 277400,
            SOLZLZZ: 15260,
            SOLZS: 0,
            SOLZV: 0,
            STS: 0,
            STV: 0,
            VKVLZZ: 0,
            VKVSONST: 0
        });
    });

});
