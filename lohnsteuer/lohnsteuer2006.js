/*jslint node:true*/
"use strict";

var BigDecimal = require("big-decimal");
if (typeof BigDecimal !== "function") {
    BigDecimal = BigDecimal.BigDecimal;
}

// const double[]
var TAB1 = [0.0,
0.400,
0.384,
0.368,
0.352,
0.336,
0.320,
0.304,
0.288,
0.272,
0.256,
0.240,
0.224,
0.208,
0.192,
0.176,
0.160,
0.152,
0.144,
0.136,
0.128,
0.120,
0.112,
0.104,
0.096,
0.088,
0.080,
0.072,
0.064,
0.056,
0.048,
0.040,
0.032,
0.024,
0.016,
0.008,
0.000];
// const long[]
var TAB2 = [0,
3000,
2880,
2760,
2640,
2520,
2400,
2280,
2160,
2040,
1920,
1800,
1680,
1560,
1440,
1320,
1200,
1140,
1080,
1020,
960,
900,
840,
780,
720,
660,
600,
540,
480,
420,
360,
300,
240,
180,
120,
60,
0];
// const long[]
var TAB3 = [0,
900,
864,
828,
792,
756,
720,
684,
648,
612,
576,
540,
504,
468,
432,
396,
360,
342,
324,
306,
288,
270,
252,
234,
216,
198,
180,
162,
144,
126,
108,
90,
72,
54,
36,
18,
0];
// const double[]
var TAB4 = [0.0,
0.400,
0.384,
0.368,
0.352,
0.336,
0.320,
0.304,
0.288,
0.272,
0.256,
0.240,
0.224,
0.208,
0.192,
0.176,
0.160,
0.152,
0.144,
0.136,
0.128,
0.120,
0.112,
0.104,
0.096,
0.088,
0.080,
0.072,
0.064,
0.056,
0.048,
0.040,
0.032,
0.024,
0.016,
0.008,
0.000];
// const long[]
var TAB5 = [0,
1900,
1824,
1748,
1672,
1596,
1520,
1444,
1368,
1292,
1216,
1140,
1064,
988,
912,
836,
760,
722,
684,
646,
608,
570,
532,
494,
456,
418,
380,
342,
304,
266,
228,
190,
152,
114,
76,
38,
0];
// const BigDecimal
var ZAHL0 = BigDecimal.ZERO;
// const BigDecimal
var ZAHL1 = new BigDecimal("1");
// const BigDecimal
var ZAHL2 = new BigDecimal("2");
// const BigDecimal
var ZAHL3 = new BigDecimal("3");
// const BigDecimal
var ZAHL4 = new BigDecimal("4");
// const BigDecimal
var ZAHL5 = new BigDecimal("5");
// const BigDecimal
var ZAHL6 = new BigDecimal("6");
// const BigDecimal
var ZAHL7 = new BigDecimal("7");
// const BigDecimal
var ZAHL8 = new BigDecimal("8");
// const BigDecimal
var ZAHL9 = new BigDecimal("9");
// const BigDecimal
var ZAHL10 = new BigDecimal("10");
// const BigDecimal
var ZAHL11 = new BigDecimal("11");
// const BigDecimal
var ZAHL12 = new BigDecimal("12");
// const BigDecimal
var ZAHL100 = new BigDecimal("100");
// const BigDecimal
var ZAHL360 = new BigDecimal("360");
module.exports = function Lohnsteuer2006Big(args) {
    //   EINGABEPARAMETER
    //  Auf die Vollendung des 64. Lebensjahres folgende
    //              Kalenderjahr (erforderlich, wenn ALTER1=1)
    // int - Implicit Default
    var AJAHR = (args.AJAHR !== undefined) ? args.AJAHR : 0;

    //  1, wenn das 64. Lebensjahr zu Beginn des Kalenderjahres vollendet wurde, in dem
    //              der Lohnzahlungszeitraum endet (§ 24 a EStG), sonst = 0
    // int - Implicit Default
    var ALTER1 = (args.ALTER1 !== undefined) ? args.ALTER1 : 0;

    //  In der Lohnsteuerkarte des Arbeitnehmers eingetragener Hinzurechnungsbetrag
    //              fuer den Lohnzahlungszeitraum in Cents
    // BigDecimal - Implicit Default
    var HINZUR = (args.HINZUR !== undefined) ? new BigDecimal(String(args.HINZUR)) : BigDecimal.ZERO;

    //  Jahresfreibetrag nach Ma&szlig;gabe der Eintragungen auf der
    //              Lohnsteuerkarte in Cents (ggf. 0)
    // BigDecimal - Implicit Default
    var JFREIB = (args.JFREIB !== undefined) ? new BigDecimal(String(args.JFREIB)) : BigDecimal.ZERO;

    //  Jahreshinzurechnungsbetrag in Cents (ggf. 0)
    // BigDecimal - Implicit Default
    var JHINZU = (args.JHINZU !== undefined) ? new BigDecimal(String(args.JHINZU)) : BigDecimal.ZERO;

    //  Voraussichtlicher Jahresarbeitslohn ohne sonstige Bezuege und
    //              ohne Verguetung fuer mehrjaehrige Taetigkeit in Cents (ggf. 0)
    //              Anmerkung: Die Eingabe dieses Feldes ist erforderlich bei Eingabe
    //              „sonstiger Bezuege“ (Feld SONSTB) oder bei Eingabe der „Verguetung
    //              fuer mehrjaehrige Taetigkeit“ (Feld VMT).
    // BigDecimal - Implicit Default
    var JRE4 = (args.JRE4 !== undefined) ? new BigDecimal(String(args.JRE4)) : BigDecimal.ZERO;

    //  In JRE4 enthaltene Versorgungsbezuege in Cents (ggf. 0)
    // BigDecimal - Implicit Default
    var JVBEZ = (args.JVBEZ !== undefined) ? new BigDecimal(String(args.JVBEZ)) : BigDecimal.ZERO;

    //  1 = der Arbeitnehmer ist im Lohnzahlungszeitraum in der gesetzlichen
    //              Rentenversicherung versicherungsfrei und gehoert zu den in
    //              § 10 c Abs. 3 EStG genannten Personen.
    //              Bei anderen Arbeitnehmern ist „0“ einzusetzen.
    //              Fuer die Zuordnung sind allein die dem Arbeitgeber ohnehin bekannten
    //              Tatsachen ma&szlig;gebend; zusaetzliche Ermittlungen braucht
    //              der Arbeitgeber nicht anzustellen.
    // int - Implicit Default
    var KRV = (args.KRV !== undefined) ? args.KRV : 0;

    //  Lohnzahlungszeitraum:
    //              1 = Jahr
    //              2 = Monat
    //              3 = Woche
    //              4 = Tag
    // int - Implicit Default
    var LZZ = (args.LZZ !== undefined) ? args.LZZ : 0;

    //  Religionsgemeinschaft des Arbeitnehmers lt. Lohnsteuerkarte (bei
    //              keiner Religionszugehoerigkeit = 0)
    // int - Implicit Default
    var R = (args.R !== undefined) ? args.R : 0;

    //  Steuerpflichtiger Arbeitslohn vor Beruecksichtigung der Freibetraege
    //              fuer Versorgungsbezuege, des Altersentlastungsbetrags und des auf
    //              der Lohnsteuerkarte fuer den Lohnzahlungszeitraum eingetragenen
    //              Freibetrags in Cents.
    // BigDecimal - Implicit Default
    var RE4 = (args.RE4 !== undefined) ? new BigDecimal(String(args.RE4)) : BigDecimal.ZERO;

    //  Sonstige Bezuege (ohne Verguetung aus mehrjaehriger Taetigkeit) einschliesslich
    //              Sterbegeld bei Versorgungsbezuegen sowie Kapitalauszahlungen/Abfindungen,
    //              soweit es sich nicht um Bezuege fuer mehrere Jahre handelt in Cents (ggf. 0)
    // BigDecimal - Implicit Default
    var SONSTB = (args.SONSTB !== undefined) ? new BigDecimal(String(args.SONSTB)) : BigDecimal.ZERO;

    //  Sterbegeld bei Versorgungsbezuegen sowie Kapitalauszahlungen/Abfindungen,
    //              soweit es sich nicht um Bezuege fuer mehrere Jahre handelt
    //              (in SONSTB enthalten) in Cents
    // BigDecimal - Implicit Default
    var STERBE = (args.STERBE !== undefined) ? new BigDecimal(String(args.STERBE)) : BigDecimal.ZERO;

    //  Steuerklasse:
    //              1 = I
    //              2 = II
    //              3 = III
    //              4 = IV
    //              5 = V
    //              6 = VI
    // int - Implicit Default
    var STKL = (args.STKL !== undefined) ? args.STKL : 0;

    //  In RE4 enthaltene Versorgungsbezuege in Cents (ggf. 0)
    // BigDecimal - Implicit Default
    var VBEZ = (args.VBEZ !== undefined) ? new BigDecimal(String(args.VBEZ)) : BigDecimal.ZERO;

    //  Vorsorgungsbezug im Januar 2005 bzw. fuer den ersten vollen Monat
    //              in Cents
    // BigDecimal - Implicit Default
    var VBEZM = (args.VBEZM !== undefined) ? new BigDecimal(String(args.VBEZM)) : BigDecimal.ZERO;

    //  Voraussichtliche Sonderzahlungen im Kalenderjahr des Versorgungsbeginns
    //              bei Versorgungsempfaengern ohne Sterbegeld, Kapitalauszahlungen/Abfindungen
    //              bei Versorgungsbezuegen in Cents
    // BigDecimal - Implicit Default
    var VBEZS = (args.VBEZS !== undefined) ? new BigDecimal(String(args.VBEZS)) : BigDecimal.ZERO;

    //  In SONSTB enthaltene Versorgungsbezuege einschliesslich Sterbegeld
    //             in Cents (ggf. 0)
    // BigDecimal - Implicit Default
    var VBS = (args.VBS !== undefined) ? new BigDecimal(String(args.VBS)) : BigDecimal.ZERO;

    //  Jahr, in dem der Versorgungsbezug erstmalig gewaehrt wurde; werden
    //              mehrere Versorgungsbezuege gezahlt, so gilt der aelteste erstmalige Bezug
    // int - Implicit Default
    var VJAHR = (args.VJAHR !== undefined) ? args.VJAHR : 0;

    //  Kapitalauszahlungen/Abfindungen bei Versorgungsbezuegen fuer mehrere Jahre in Cents (ggf. 0)
    // BigDecimal - Implicit Default
    var VKAPA = (args.VKAPA !== undefined) ? new BigDecimal(String(args.VKAPA)) : BigDecimal.ZERO;

    //  Verguetung fuer mehrjaehrige Taetigkeit ohne Kapitalauszahlungen/Abfindungen bei
    //              Versorgungsbezuegen in Cents (ggf. 0)
    // BigDecimal - Implicit Default
    var VMT = (args.VMT !== undefined) ? new BigDecimal(String(args.VMT)) : BigDecimal.ZERO;

    //  In der Lohnsteuerkarte des Arbeitnehmers eingetragener Freibetrag
    //              fuer den Lohnzahlungszeitraum in Cents
    // BigDecimal - Implicit Default
    var WFUNDF = (args.WFUNDF !== undefined) ? new BigDecimal(String(args.WFUNDF)) : BigDecimal.ZERO;

    //  Zahl der Freibetraege fuer Kinder (eine Dezimalstelle, nur bei Steuerklassen
    //              I, II, III und IV)
    // BigDecimal - Implicit Default
    var ZKF = (args.ZKF !== undefined) ? new BigDecimal(String(args.ZKF)) : BigDecimal.ZERO;

    //  Zahl der Monate, fuer die Versorgungsbezuege gezahlt werden (nur
    //              erforderlich bei Jahresberechnung (LZZ = 1)
    // int - Implicit Default
    var ZMVB = (args.ZMVB !== undefined) ? args.ZMVB : 0;

    //   AUSGABEPARAMETER
    //  Bemessungsgrundlage fuer die Kirchenlohnsteuer in Cents
    var BK = BigDecimal.ZERO; // BigDecimal

    //  Bemessungsgrundlage der sonstigen Einkuenfte (ohne Verguetung
    //              fuer mehrjaehrige Taetigkeit) fuer die Kirchenlohnsteuer in Cents
    var BKS = BigDecimal.ZERO; // BigDecimal

    var BKV = BigDecimal.ZERO; // BigDecimal

    //  Fuer den Lohnzahlungszeitraum einzubehaltende Lohnsteuer in Cents
    var LSTLZZ = BigDecimal.ZERO; // BigDecimal

    //  Fuer den Lohnzahlungszeitraum einzubehaltender Solidaritaetszuschlag
    //              in Cents
    var SOLZLZZ = BigDecimal.ZERO; // BigDecimal

    //  Solidaritaetszuschlag fuer sonstige Bezuege (ohne Verguetung fuer mehrjaehrige
    //              Taetigkeit) in Cents
    var SOLZS = BigDecimal.ZERO; // BigDecimal

    //  Solidaritaetszuschlag fuer die Verguetung fuer mehrjaehrige Taetigkeit in
    //              Cents
    var SOLZV = BigDecimal.ZERO; // BigDecimal

    //  Lohnsteuer fuer sonstige Einkuenfte (ohne Verguetung fuer mehrjaehrige
    //              Taetigkeit) in Cents
    var STS = BigDecimal.ZERO; // BigDecimal

    //  Lohnsteuer fuer Verguetung fuer mehrjaehrige Taetigkeit in Cents
    var STV = BigDecimal.ZERO; // BigDecimal

    //   INTERNE FELDER
    //  Altersentlastungsbetrag nach Alterseinkuenftegesetz in Cents
    var ALTE = BigDecimal.ZERO; // BigDecimal

    //  Arbeitnehmer-Pauschbetrag in EURO
    var ANP = BigDecimal.ZERO; // BigDecimal

    //  Auf den Lohnzahlungszeitraum entfallender Anteil von Jahreswerten
    //              auf ganze Cents abgerundet
    var ANTEIL1 = BigDecimal.ZERO; // BigDecimal

    //  Auf den Lohnzahlungszeitraum entfallender Anteil von Jahreswerten
    //              auf ganze Cents aufgerundet
    var ANTEIL2 = BigDecimal.ZERO; // BigDecimal

    //  Bemessungsgrundlage fuer Altersentlastungsbetrag in Cents
    var BMG = BigDecimal.ZERO; // BigDecimal

    //  Differenz zwischen ST1 und ST2 in EURO
    var DIFF = BigDecimal.ZERO; // BigDecimal

    //  Entlastungsbetrag fuer Alleinerziehende in EURO
    var EFA = BigDecimal.ZERO; // BigDecimal

    //  Versorgungsfreibetrag in Cents
    var FVB = BigDecimal.ZERO; // BigDecimal

    //  Zuschlag zum Versorgungsfreibetrag in EURO
    var FVBZ = BigDecimal.ZERO; // BigDecimal

    //  Massgeblich maximaler Versorgungsfreibetrag in Cents
    var HFVB = BigDecimal.ZERO; // BigDecimal

    //  Nummer der Tabellenwerte fuer Versorgungsparameter
    var J = 0; // int

    //  Jahressteuer nach § 51a EStG, aus der Solidaritaetszuschlag und
    //              Bemessungsgrundlage fuer die Kirchenlohnsteuer ermittelt werden in EURO
    var JBMG = BigDecimal.ZERO; // BigDecimal

    //  Jahreswert, dessen Anteil fuer einen Lohnzahlungszeitraum in
    //              UPANTEIL errechnet werden soll in Cents
    var JW = BigDecimal.ZERO; // BigDecimal

    //  Nummer der Tabellenwerte fuer Parameter bei Altersentlastungsbetrag
    var K = 0; // int

    //  Kennzeichen bei Verguetung fuer mehrjaehrige Taetigkeit
    //              0 = beim Vorwegabzug ist ZRE4VP zu beruecksichtigen
    //              1 = beim Vorwegabzug ist ZRE4VP1 zu beruecksichtigen
    var KENNZ = 0; // int

    //  Summe der Freibetraege fuer Kinder in EURO
    var KFB = BigDecimal.ZERO; // BigDecimal

    //  Kennzahl fuer die Einkommensteuer-Tabellenart:
    //              1 = Grundtabelle
    //              2 = Splittingtabelle
    var KZTAB = 0; // int

    //  Jahreslohnsteuer in EURO
    var LSTJAHR = BigDecimal.ZERO; // BigDecimal

    //  Zwischenfelder der Jahreslohnsteuer in Cents
    var LST1 = BigDecimal.ZERO; // BigDecimal

    var LST2 = BigDecimal.ZERO; // BigDecimal

    var LST3 = BigDecimal.ZERO; // BigDecimal

    //  Mindeststeuer fuer die Steuerklassen V und VI in EURO
    var MIST = BigDecimal.ZERO; // BigDecimal

    //  Arbeitslohn des Lohnzahlungszeitraums nach Abzug der Freibetraege
    //              fuer Versorgungsbezuege, des Altersentlastungsbetrags und des
    //              in der Lohnsteuerkarte eingetragenen Freibetrags und Hinzurechnung
    //              eines Hinzurechnungsbetrags in Cents. Entspricht dem Arbeitslohn,
    //              fuer den die Lohnsteuer im personellen Verfahren aus der
    //              zum Lohnzahlungszeitraum gehoerenden Tabelle abgelesen wuerde
    var RE4LZZ = BigDecimal.ZERO; // BigDecimal

    //  Arbeitslohn des Lohnzahlungszeitraums nach Abzug der Freibetraege
    //              fuer Versorgungsbezuege und des Altersentlastungsbetrags in
    //              Cents zur Berechnung der Vorsorgepauschale
    var RE4LZZV = BigDecimal.ZERO; // BigDecimal

    //  Rechenwert in Gleitkommadarstellung
    var RW = BigDecimal.ZERO; // BigDecimal

    //  Sonderausgaben-Pauschbetrag in EURO
    var SAP = BigDecimal.ZERO; // BigDecimal

    //  Freigrenze fuer den Solidaritaetszuschlag in EURO
    var SOLZFREI = BigDecimal.ZERO; // BigDecimal

    //  Solidaritaetszuschlag auf die Jahreslohnsteuer in EURO, C (2 Dezimalstellen)
    var SOLZJ = BigDecimal.ZERO; // BigDecimal

    //  Zwischenwert fuer den Solidaritaetszuschlag auf die Jahreslohnsteuer
    //              in EURO, C (2 Dezimalstellen)
    var SOLZMIN = BigDecimal.ZERO; // BigDecimal

    //  Tarifliche Einkommensteuer in EURO
    var ST = BigDecimal.ZERO; // BigDecimal

    //  Tarifliche Einkommensteuer auf das 1,25-fache ZX in EURO
    var ST1 = BigDecimal.ZERO; // BigDecimal

    //  Tarifliche Einkommensteuer auf das 0,75-fache ZX in EURO
    var ST2 = BigDecimal.ZERO; // BigDecimal

    //  Bemessungsgrundlage fuer den Versorgungsfreibetrag in Cents
    var VBEZB = BigDecimal.ZERO; // BigDecimal

    //  Hoechstbetrag der Vorsorgepauschale nach Alterseinkuenftegesetz in EURO, C
    var VHB = BigDecimal.ZERO; // BigDecimal

    //  Vorsorgepauschale in EURO, C (2 Dezimalstellen)
    var VSP = BigDecimal.ZERO; // BigDecimal

    //  Vorsorgepauschale nach Alterseinkuenftegesetz in EURO, C
    var VSPN = BigDecimal.ZERO; // BigDecimal

    //  Zwischenwert 1 bei der Berechnung der Vorsorgepauschale nach
    //              dem Alterseinkuenftegesetz in EURO, C (2 Dezimalstellen)
    var VSP1 = BigDecimal.ZERO; // BigDecimal

    //  Zwischenwert 2 bei der Berechnung der Vorsorgepauschale nach
    //              dem Alterseinkuenftegesetz in EURO, C (2 Dezimalstellen)
    var VSP2 = BigDecimal.ZERO; // BigDecimal

    //  Hoechstbetrag der Vorsorgepauschale nach § 10c Abs. 3 EStG in EURO
    var VSPKURZ = BigDecimal.ZERO; // BigDecimal

    //  Hoechstbetrag der Vorsorgepauschale nach § 10c Abs. 2 Nr. 2 EStG in EURO
    var VSPMAX1 = BigDecimal.ZERO; // BigDecimal

    //  Hoechstbetrag der Vorsorgepauschale nach § 10c Abs. 2 Nr. 3 EStG in EURO
    var VSPMAX2 = BigDecimal.ZERO; // BigDecimal

    //  Vorsorgepauschale nach § 10c Abs. 2 Satz 2 EStG vor der Hoechstbetragsberechnung
    //              in EURO, C (2 Dezimalstellen)
    var VSPO = BigDecimal.ZERO; // BigDecimal

    //  Fuer den Abzug nach § 10c Abs. 2 Nrn. 2 und 3 EStG verbleibender
    //              Rest von VSPO in EURO, C (2 Dezimalstellen)
    var VSPREST = BigDecimal.ZERO; // BigDecimal

    //  Hoechstbetrag der Vorsorgepauschale nach § 10c Abs. 2 Nr. 1 EStG
    //              in EURO, C (2 Dezimalstellen)
    var VSPVOR = BigDecimal.ZERO; // BigDecimal

    //  Zu versteuerndes Einkommen gem. § 32a Abs. 1 und 2 EStG
    //              (2 Dezimalstellen)
    var X = BigDecimal.ZERO; // BigDecimal

    //  gem. § 32a Abs. 1 EStG (6 Dezimalstellen)
    var Y = BigDecimal.ZERO; // BigDecimal

    //  Auf einen Jahreslohn hochgerechnetes RE4LZZ in EURO, C (2 Dezimalstellen)
    var ZRE4 = BigDecimal.ZERO; // BigDecimal

    //  Auf einen Jahreslohn hochgerechnetes RE4LZZV zur Berechnung
    //              der Vorsorgepauschale in EURO, C (2 Dezimalstellen)
    var ZRE4VP = BigDecimal.ZERO; // BigDecimal

    //  Sicherungsfeld von ZRE4VP in EURO,C bei der Berechnung des Vorwegabzugs
    //              fuer die Verguetung fuer mehrjaehrige Taetigkeit
    var ZRE4VP1 = BigDecimal.ZERO; // BigDecimal

    //  Feste Tabellenfreibetraege (ohne Vorsorgepauschale) in EURO
    var ZTABFB = BigDecimal.ZERO; // BigDecimal

    //  Auf einen Jahreslohn hochgerechnetes (VBEZ abzueglich FVB) in
    //              EURO, C (2 Dezimalstellen)
    var ZVBEZ = BigDecimal.ZERO; // BigDecimal

    //  Zu versteuerndes Einkommen in EURO
    var ZVE = BigDecimal.ZERO; // BigDecimal

    //  Zwischenfelder zu X fuer die Berechnung der Steuer nach § 39b
    //              Abs. 2 Satz 8 EStG in EURO.
    var ZX = BigDecimal.ZERO; // BigDecimal

    var ZZX = BigDecimal.ZERO; // BigDecimal

    var HOCH = BigDecimal.ZERO; // BigDecimal

    var VERGL = BigDecimal.ZERO; // BigDecimal

    //  Tabelle fuer die Vomhundertsaetze des Versorgungsfreibetrags

    //  Tabelle fuer die Hoechstbetrage des Versorgungsfreibetrags

    //  Tabelle fuer die Zuschlaege zum Versorgungsfreibetrag

    //  Tabelle fuer die Vomhundertsaetze des Altersentlastungsbetrags

    //  Tabelle fuer die Hoechstbetraege des Altersentlastungsbetrags

    //  Zahlenkonstanten fuer im Plan oft genutzte BigDecimal Werte















    //  PROGRAMMABLAUFPLAN 2006
    function main() {
        MRE4LZZ();
        KENNZ = 0;
        RE4LZZ = RE4.subtract(FVB).subtract(ALTE).subtract(WFUNDF).add(HINZUR);
        RE4LZZV = RE4.subtract(FVB).subtract(ALTE);
        MRE4();
        MZTABFB();
        MLSTJAHR();
        LSTJAHR = ST;
        JW = LSTJAHR.multiply(ZAHL100);
        UPANTEIL();
        LSTLZZ = ANTEIL1;
        if (ZKF.compareTo(ZAHL0) === 1) {
            ZTABFB = ZTABFB.add(KFB);
            MLSTJAHR();
            JBMG = ST;
        } else {
            JBMG = LSTJAHR;
        }
        MSOLZ();
        MSONST();
        MVMT();
    }

    //  Freibetraege fuer Versorgungsbezuege, Altersentlastungsbetrag (§39b Abs. 2 Satz 2 EStG)
    //          PAP Seite 10
    function MRE4LZZ() {
        if (VBEZ.compareTo(ZAHL0) === 0) {
            FVBZ = ZAHL0;
            FVB = ZAHL0;
        } else {
            if (VJAHR < 2006) {
                J = 1;
            } else {
                if (VJAHR < 2040) {
                    J = VJAHR - 2004;
                } else {
                    J = 36;
                }
            }
            if (LZZ === 1) {
                if (((STERBE.add(VKAPA)).compareTo(ZAHL0)) === 1) {
                    VBEZB = (VBEZM.multiply(new BigDecimal(String(ZMVB)))).add(VBEZS);
                    HFVB = new BigDecimal(String(TAB2[J] * 100));
                    FVBZ = new BigDecimal(String(TAB3[J]));
                } else {
                    VBEZB = (VBEZM.multiply(new BigDecimal(String(ZMVB)))).add(VBEZS);
                    HFVB = new BigDecimal(String(TAB2[J] / 12 * ZMVB * 100));
                    FVBZ = (new BigDecimal(String(TAB3[J] / 12 * ZMVB))).setScale(0, BigDecimal.ROUND_UP);
                }
            } else {
                VBEZB = ((VBEZM.multiply(ZAHL12)).add(VBEZS)).setScale(2, BigDecimal.ROUND_DOWN);
                HFVB = new BigDecimal(String(TAB2[J] * 100));
                FVBZ = new BigDecimal(String(TAB3[J]));
            }
            FVB = (VBEZB.multiply(new BigDecimal(String(TAB1[J])))).setScale(0, BigDecimal.ROUND_UP);
            if (FVB.compareTo(HFVB) === 1) {
                FVB = HFVB;
            } else {
            }
            JW = FVB;
            UPANTEIL();
            FVB = ANTEIL2;
        }
        if (ALTER1 === 0) {
            ALTE = ZAHL0;
        } else {
            if (AJAHR < 2006) {
                K = 1;
            } else {
                if (AJAHR < 2040) {
                    K = AJAHR - 2004;
                } else {
                    K = 36;
                }
            }
            BMG = RE4.subtract(VBEZ);
            ALTE = (BMG.multiply(new BigDecimal(String(TAB4[K])))).setScale(0, BigDecimal.ROUND_UP);
            JW = new BigDecimal(String(TAB5[K] * 100));
            UPANTEIL();
            if (ALTE.compareTo(ANTEIL2) === 1) {
                ALTE = ANTEIL2;
            } else {
            }
        }
    }

    //  Massgeblicher Arbeitslohn fuer die Jahreslohnsteuer
    //          PAP Seite 12
    function MRE4() {
        if (LZZ === 1) {
            ZRE4 = RE4LZZ.divide(ZAHL100, 2, BigDecimal.ROUND_DOWN);
            ZRE4VP = RE4LZZV.divide(ZAHL100, 2, BigDecimal.ROUND_DOWN);
            ZVBEZ = (VBEZ.subtract(FVB)).divide(ZAHL100, 2, BigDecimal.ROUND_DOWN);
        } else {
            if (LZZ === 2) {
                ZRE4 = ((RE4LZZ.add(new BigDecimal("0.67"))).multiply(new BigDecimal("0.12"))).setScale(2, BigDecimal.ROUND_DOWN);
                ZRE4VP = ((RE4LZZV.add(new BigDecimal("0.67"))).multiply(new BigDecimal("0.12"))).setScale(2, BigDecimal.ROUND_DOWN);
                ZVBEZ = ((VBEZ.subtract(FVB).add(new BigDecimal("0.67"))).multiply(new BigDecimal("0.12"))).setScale(2, BigDecimal.ROUND_DOWN);
            } else {
                if (LZZ === 3) {
                    ZRE4 = ((RE4LZZ.add(new BigDecimal("0.89"))).multiply(new BigDecimal(String(3.6/7.0)))).setScale(2, BigDecimal.ROUND_DOWN);
                    ZRE4VP = ((RE4LZZV.add(new BigDecimal("0.89"))).multiply(new BigDecimal(String(3.6/7.0)))).setScale(2, BigDecimal.ROUND_DOWN);
                    ZVBEZ = ((VBEZ.subtract(FVB).add(new BigDecimal("0.89"))).multiply(new BigDecimal(String(3.6/7.0)))).setScale(2, BigDecimal.ROUND_DOWN);
                } else {
                    ZRE4 = ((RE4LZZ.add(new BigDecimal("0.56"))).multiply(new BigDecimal("3.6"))).setScale(2, BigDecimal.ROUND_DOWN);
                    ZRE4VP = ((RE4LZZV.add(new BigDecimal("0.56"))).multiply(new BigDecimal("3.6"))).setScale(2, BigDecimal.ROUND_DOWN);
                    ZVBEZ = ((VBEZ.subtract(FVB).add(new BigDecimal("0.56"))).multiply(new BigDecimal("3.6"))).setScale(2, BigDecimal.ROUND_DOWN);
                }
            }
        }
        if (ZRE4.compareTo(ZAHL0) === -1) {
            ZRE4 = ZAHL0;
        } else {
        }
        if (ZVBEZ.compareTo(ZAHL0) === -1) {
            ZVBEZ = ZAHL0;
        } else {
        }
    }

    //  Ermittlung der festen Tabellenfreibetraege (ohne Vorsorgepauschale)
    //          PAP Seite 13
    function MZTABFB() {
        ANP = ZAHL0;
        if (ZVBEZ.compareTo(ZAHL0) === 1) {
            if (ZVBEZ.compareTo(FVBZ) === -1) {
                //  Fehler im PAP? double -> int, Nachkommastellen abschneiden
                FVBZ = ZVBEZ.setScale(0, BigDecimal.ROUND_DOWN);
            } else {
            }
        } else {
        }
        if (STKL < 6) {
            if (ZVBEZ.compareTo(ZAHL0) === 1) {
                if ((ZVBEZ.subtract(FVBZ)).compareTo(new BigDecimal("102")) === -1) {
                    //  Fehler im PAP? double -> int, Nachkommastellen abschneiden
                    ANP = (ZVBEZ.subtract(FVBZ)).setScale(0, BigDecimal.ROUND_DOWN);
                } else {
                    ANP = new BigDecimal("102");
                }
            } else {
            }
        } else {
        }
        if (STKL < 6) {
            if (ZRE4.compareTo(ZVBEZ) === 1) {
                if ((ZRE4.subtract(ZVBEZ)).compareTo(new BigDecimal("920")) === -1) {
                    //  Fehler im PAP? double -> int, Nachkommastellen abschneiden
                    ANP = (ANP.add(ZRE4).subtract(ZVBEZ)).setScale(0, BigDecimal.ROUND_DOWN);
                } else {
                    ANP = ANP.add(new BigDecimal("920"));
                }
            } else {
            }
        } else {
        }
        KZTAB = 1;
        if (STKL === 1)         //  ZKF ist double und KFB ist integer. Nachkommastellen abschneiden! 4x!!!
{
            SAP = new BigDecimal("36");
            KFB = (ZKF.multiply(new BigDecimal("5808"))).setScale(0, BigDecimal.ROUND_DOWN);
        } else {
            if (STKL === 2) {
                EFA = new BigDecimal("1308");
                SAP = new BigDecimal("36");
                KFB = (ZKF.multiply(new BigDecimal("5808"))).setScale(0, BigDecimal.ROUND_DOWN);
            } else {
                if (STKL === 3) {
                    KZTAB = 2;
                    SAP = new BigDecimal("72");
                    KFB = (ZKF.multiply(new BigDecimal("5808"))).setScale(0, BigDecimal.ROUND_DOWN);
                } else {
                    if (STKL === 4) {
                        SAP = new BigDecimal("36");
                        KFB = (ZKF.multiply(new BigDecimal("2904"))).setScale(0, BigDecimal.ROUND_DOWN);
                    } else {
                        KFB = ZAHL0;
                    }
                }
            }
        }
        ZTABFB = EFA.add(ANP).add(SAP).add(FVBZ);
    }

    //  Ermittlung Jahreslohnsteuer
    //          PAP Seite 14
    function MLSTJAHR() {
        if (STKL < 5) {
            UPEVP();
        } else {
            VSP = ZAHL0;
        }
        //  ZVE ist in EURO, ZRE4 in EURO,Cent
        ZVE = (ZRE4.subtract(ZTABFB).subtract(VSP)).setScale(0, BigDecimal.ROUND_DOWN);
        if (ZVE.compareTo(ZAHL1) === -1) {
            ZVE = ZAHL0;
            X = ZAHL0;
        } else {
            X = ZVE.divide(new BigDecimal(String(KZTAB)), 0, BigDecimal.ROUND_DOWN);
        }
        if (STKL < 5) {
            UPTAB05();
        } else {
            MST5_6();
        }
    }

    //  Vorsorgepauschale (§39b Abs. 2 Satz 6 Nr 3 EStG)
    //          PAP Seite 15
    function UPEVP() {
        if (KRV === 1) {
            VSP1 = ZAHL0;
        } else {
            if (ZRE4VP.compareTo(new BigDecimal("63000")) === 1) {
                ZRE4VP = new BigDecimal("63000");
            } else {
            }
            VSP1 = (ZRE4VP.multiply(new BigDecimal("0.24"))).setScale(2, BigDecimal.ROUND_DOWN);
            VSP1 = (VSP1.multiply(new BigDecimal("0.0975"))).setScale(2, BigDecimal.ROUND_DOWN);
        }
        VSP2 = ZRE4VP.multiply(new BigDecimal("0.11"));
        VHB = new BigDecimal(String(1500 * KZTAB));
        if (VSP2.compareTo(VHB) === 1) {
            VSP2 = VHB;
        } else {
        }
        //  Erst auf 2 nachkommastellen kuerzen, dann aufrunden, sonst
        //              wird die Jahreslohnsteuer ggf. um 1 EUR zu hoch angesetzt.
        //              Hinweis: wieder aufgehoben, da bei VSP1 eine Rundung fehlte.
        VSPN = (VSP1.add(VSP2)).setScale(0, BigDecimal.ROUND_UP);
        MVSP();
        if (VSPN.compareTo(VSP) === 1) {
            VSP = VSPN.setScale(2, BigDecimal.ROUND_DOWN);
        } else {
        }
    }

    //  Vorsorgepauschale (§39b Abs. 2 Satz 6 Nr 3 EStG) Vergleichsberechnung
    //          fuer Guenstigerpruefung
    //          PAP Seite 16
    function MVSP() {
        if (KENNZ === 1) {
            VSPO = ZRE4VP1.multiply(new BigDecimal("0.2"));
        } else {
            VSPO = ZRE4VP.multiply(new BigDecimal("0.2"));
        }
        VSPVOR = new BigDecimal(String(KZTAB * 3068));
        VSPMAX1 = new BigDecimal(String(KZTAB * 1334));
        VSPMAX2 = new BigDecimal(String(KZTAB * 667));
        VSPKURZ = new BigDecimal(String(KZTAB * 1134));
        if (KRV === 1) {
            if (VSPO.compareTo(VSPKURZ) === 1) {
                VSP = VSPKURZ;
            } else {
                VSP = VSPO.setScale(2, BigDecimal.ROUND_UP);
            }
        } else {
            UMVSP();
        }
    }

    //  Vorsorgepauschale
    //          PAP Seite 17
    function UMVSP() {
        if (KENNZ === 1) {
            VSPVOR = VSPVOR.subtract(ZRE4VP1.multiply(new BigDecimal("0.16")));
        } else {
            VSPVOR = VSPVOR.subtract(ZRE4VP.multiply(new BigDecimal("0.16")));
        }
        if (VSPVOR.compareTo(ZAHL0) === -1) {
            VSPVOR = ZAHL0;
        } else {
        }
        if (VSPO.compareTo(VSPVOR) === 1) {
            VSP = VSPVOR;
            VSPREST = VSPO.subtract(VSPVOR);
            if (VSPREST.compareTo(VSPMAX1) === 1) {
                VSP = VSP.add(VSPMAX1);
                VSPREST = (VSPREST.subtract(VSPMAX1)).divide(ZAHL2, 2, BigDecimal.ROUND_UP);
                if (VSPREST.compareTo(VSPMAX2) === 1) {
                    VSP = (VSP.add(VSPMAX2)).setScale(0, BigDecimal.ROUND_UP);
                } else {
                    VSP = (VSP.add(VSPREST)).setScale(0, BigDecimal.ROUND_UP);
                }
            } else {
                VSP = (VSP.add(VSPREST)).setScale(0, BigDecimal.ROUND_UP);
            }
        } else {
            VSP = VSPO.setScale(0, BigDecimal.ROUND_UP);
        }
    }

    //  Lohnsteuer fuer die Steuerklassen V und VI (§ 39b Abs. 2 Satz 8 EStG)
    //          PAP Seite 18
    function MST5_6() {
        ZZX = X;
        if (ZZX.compareTo(new BigDecimal("25812")) === 1) {
            ZX = new BigDecimal("25812");
            UP5_6();
            ST = (ST.add((ZZX.subtract(new BigDecimal("25812"))).multiply(new BigDecimal("0.42")))).setScale(0, BigDecimal.ROUND_DOWN);
        } else {
            ZX = ZZX;
            UP5_6();
            if (ZZX.compareTo(new BigDecimal("9144")) === 1) {
                VERGL = ST;
                ZX = new BigDecimal("9144");
                UP5_6();
                HOCH = (ST.add((ZZX.subtract(new BigDecimal("9144"))).multiply(new BigDecimal("0.42")))).setScale(0, BigDecimal.ROUND_DOWN);
                if (HOCH.compareTo(VERGL) === -1) {
                    ST = HOCH;
                } else {
                    ST = VERGL;
                }
            } else {
            }
        }
    }

    //  Lohnsteuer fuer die Steuerklassen V und VI (§ 39b Abs. 2 Satz 8 EStG)
    //          PAP Seite 18
    function UP5_6() {
        X = ZX.multiply(new BigDecimal("1.25"));
        UPTAB05();
        ST1 = ST;
        X = ZX.multiply(new BigDecimal("0.75"));
        UPTAB05();
        ST2 = ST;
        DIFF = (ST1.subtract(ST2)).multiply(ZAHL2);
        MIST = (ZX.multiply(new BigDecimal("0.15"))).setScale(0, BigDecimal.ROUND_DOWN);
        if (MIST.compareTo(DIFF) === 1) {
            ST = MIST;
        } else {
            ST = DIFF;
        }
    }

    //  Solidaritaetszuschlag
    //          PAP Seite 19
    function MSOLZ() {
        SOLZFREI = new BigDecimal(String(972 * KZTAB));
        if (JBMG.compareTo(SOLZFREI) === 1) {
            SOLZJ = (JBMG.multiply(new BigDecimal(String(5.5/100)))).setScale(2, BigDecimal.ROUND_DOWN);
            SOLZMIN = (JBMG.subtract(SOLZFREI)).multiply(new BigDecimal(String(20.0/100.0)));
            if (SOLZMIN.compareTo(SOLZJ) === -1) {
                SOLZJ = SOLZMIN;
            } else {
            }
            JW = SOLZJ.multiply(ZAHL100).setScale(0, BigDecimal.ROUND_DOWN);
            UPANTEIL();
            SOLZLZZ = ANTEIL1;
        } else {
            SOLZLZZ = ZAHL0;
        }
        if (R > 0) {
            JW = JBMG.multiply(ZAHL100);
            UPANTEIL();
            BK = ANTEIL1;
        } else {
            BK = ZAHL0;
        }
    }

    //  Anteil von Jahresbetraegen fuer einen LZZ (§ 39b Abs. 2 Satz 10 EStG)
    //          PAP Seite 20
    function UPANTEIL() {
        if (LZZ === 1) {
            ANTEIL1 = JW;
            ANTEIL2 = JW;
        } else {
            if (LZZ === 2) {
                ANTEIL1 = JW.divide(ZAHL12, 0, BigDecimal.ROUND_DOWN);
                ANTEIL2 = JW.divide(ZAHL12, 0, BigDecimal.ROUND_UP);
            } else {
                if (LZZ === 3) {
                    ANTEIL1 = (JW.multiply(ZAHL7)).divide(ZAHL360, 0, BigDecimal.ROUND_DOWN);
                    ANTEIL2 = (JW.multiply(ZAHL7)).divide(ZAHL360, 0, BigDecimal.ROUND_UP);
                } else {
                    ANTEIL1 = JW.divide(ZAHL360, 0, BigDecimal.ROUND_DOWN);
                    ANTEIL2 = JW.divide(ZAHL360, 0, BigDecimal.ROUND_UP);
                }
            }
        }
    }

    //  Berechnung sonstiger Bezuege nach § 39b Abs. 3 Saetze 1 bis 7 EStG)
    //          PAP Seite 21
    function MSONST() {
        if (SONSTB.compareTo(ZAHL0) === 1) {
            LZZ = 1;
            VBEZ = JVBEZ;
            RE4 = JRE4;
            MRE4LZZ();
            MRE4LZZ2();
            MLSTJAHR();
            LST1 = ST.multiply(ZAHL100);
            VBEZ = JVBEZ.add(VBS);
            RE4 = JRE4.add(SONSTB);
            VBEZS = VBEZS.add(STERBE);
            MRE4LZZ();
            MRE4LZZ2();
            MLSTJAHR();
            LST2 = ST.multiply(ZAHL100);
            STS = LST2.subtract(LST1);
            SOLZS = STS.multiply(new BigDecimal("5.5")).divide(ZAHL100, 0, BigDecimal.ROUND_DOWN);
            if (R > 0) {
                BKS = STS;
            } else {
                BKS = ZAHL0;
            }
        } else {
            STS = ZAHL0;
            SOLZS = ZAHL0;
            BKS = ZAHL0;
        }
    }

    //  Berechnung sonstiger Bezuege nach § 39b Abs. 3 Saetze 1 bis 7 EStG)
    //          PAP Seite 21
    function MRE4LZZ2() {
        RE4LZZ = RE4.subtract(FVB).subtract(ALTE).subtract(JFREIB).add(JHINZU);
        RE4LZZV = RE4.subtract(FVB).subtract(ALTE);
        MRE4();
        MZTABFB();
    }

    //  Berechnung der Verguetung fuer mehrjaehrige Taetigkeit nach § 39b Abs. 3 Satz 9 EStG)
    //          PAP Seite 22
    function MVMT() {
        if ((VMT.add(VKAPA)).compareTo(ZAHL0) === 1) {
            LZZ = 1;
            VBEZ = JVBEZ.add(VBS);
            RE4 = JRE4.add(SONSTB);
            MRE4LZZ();
            MRE4LZZ2();
            MLSTJAHR();
            LST1 = ST.multiply(ZAHL100);
            VMT = VMT.add(VKAPA);
            VBEZS = VBEZS.add(VKAPA);
            VBEZ = VBEZ.add(VKAPA);
            RE4 = JRE4.add(SONSTB).add(VMT);
            MRE4LZZ();
            MRE4LZZ2();
            KENNZ = 1;
            ZRE4VP1 = ZRE4VP;
            MLSTJAHR();
            LST3 = ST.multiply(ZAHL100);
            VBEZ = VBEZ.subtract(VKAPA);
            RE4 = JRE4.add(SONSTB);
            MRE4LZZ();
            if ((RE4.subtract(JFREIB).add(JHINZU)).compareTo(ZAHL0) === -1) {
                RE4 = RE4.subtract(JFREIB).add(JHINZU);
                JFREIB = ZAHL0;
                JHINZU = ZAHL0;
                RE4 = (RE4.add(VMT)).divide(ZAHL5, 0, BigDecimal.ROUND_DOWN);
                MRE4LZZ2();
                MLSTJAHR();
                LST2 = ST.multiply(ZAHL100);
                STV = LST2.multiply(ZAHL5);
            } else {
                RE4 = RE4.add(VMT.divide(ZAHL5, 0, BigDecimal.ROUND_DOWN));
                MRE4LZZ2();
                MLSTJAHR();
                LST2 = ST.multiply(ZAHL100);
                STV = (LST2.subtract(LST1)).multiply(ZAHL5);
            }
            LST3 = LST3.subtract(LST1);
            if (LST3.compareTo(STV) === -1) {
                STV = LST3;
            } else {
            }
            SOLZV = (STV.multiply(new BigDecimal("5.5"))).divide(ZAHL100, 0, BigDecimal.ROUND_DOWN);
            if (R > 0) {
                BKV = STV;
            } else {
                BKV = ZAHL0;
            }
        } else {
            STV = ZAHL0;
            SOLZV = ZAHL0;
            BKV = ZAHL0;
        }
    }

    //  Berechnung der Verguetung fuer mehrjaehrige Taetigkeit nach § 39b Abs. 3 Satz 9 EStG)
    //          PAP Seite 23
    function UPTAB05() {
        if (X.compareTo(new BigDecimal("7665")) === -1) {
            ST = ZAHL0;
        } else {
            if (X.compareTo(new BigDecimal("12740")) === -1) {
                Y = (X.subtract(new BigDecimal("7664"))).divide(new BigDecimal("10000"), 6, BigDecimal.ROUND_DOWN);
                RW = Y.multiply(new BigDecimal("883.74"));
                RW = RW.add(new BigDecimal("1500"));
                ST = (RW.multiply(Y)).setScale(0, BigDecimal.ROUND_DOWN);
            } else {
                if (X.compareTo(new BigDecimal("52152")) === -1) {
                    Y = (X.subtract(new BigDecimal("12739"))).divide(new BigDecimal("10000"), 6, BigDecimal.ROUND_DOWN);
                    RW = Y.multiply(new BigDecimal("228.74"));
                    RW = RW.add(new BigDecimal("2397"));
                    RW = RW.multiply(Y);
                    ST = (RW.add(new BigDecimal("989"))).setScale(0, BigDecimal.ROUND_DOWN);
                } else {
                    ST = ((X.multiply(new BigDecimal("0.42"))).subtract(new BigDecimal("7914"))).setScale(0, BigDecimal.ROUND_DOWN);
                }
            }
        }
        ST = ST.multiply(new BigDecimal(String(KZTAB)));
    }

    main();

    return {
        BK: BK,
        BKS: BKS,
        BKV: BKV,
        LSTLZZ: LSTLZZ,
        SOLZLZZ: SOLZLZZ,
        SOLZS: SOLZS,
        SOLZV: SOLZV,
        STS: STS,
        STV: STV
    };
};
