/*jslint node:true*/
"use strict";

var BigDecimal = require("big-decimal");
if (typeof BigDecimal !== "function") {
    BigDecimal = BigDecimal.BigDecimal;
}

// const BigDecimal[]
var TAB1 = [BigDecimal.ZERO,
new BigDecimal("0.4"),
new BigDecimal("0.384"),
new BigDecimal("0.368"),
new BigDecimal("0.352"),
new BigDecimal("0.336"),
new BigDecimal("0.32"),
new BigDecimal("0.304"),
new BigDecimal("0.288"),
new BigDecimal("0.272"),
new BigDecimal("0.256"),
new BigDecimal("0.24"),
new BigDecimal("0.224"),
new BigDecimal("0.208"),
new BigDecimal("0.192"),
new BigDecimal("0.176"),
new BigDecimal("0.16"),
new BigDecimal("0.152"),
new BigDecimal("0.144"),
new BigDecimal("0.136"),
new BigDecimal("0.128"),
new BigDecimal("0.12"),
new BigDecimal("0.112"),
new BigDecimal("0.104"),
new BigDecimal("0.096"),
new BigDecimal("0.088"),
new BigDecimal("0.08"),
new BigDecimal("0.072"),
new BigDecimal("0.064"),
new BigDecimal("0.056"),
new BigDecimal("0.048"),
new BigDecimal("0.04"),
new BigDecimal("0.032"),
new BigDecimal("0.024"),
new BigDecimal("0.016"),
new BigDecimal("0.008"),
BigDecimal.ZERO];
// const BigDecimal[]
var TAB2 = [BigDecimal.ZERO,
new BigDecimal("3000"),
new BigDecimal("2880"),
new BigDecimal("2760"),
new BigDecimal("2640"),
new BigDecimal("2520"),
new BigDecimal("2400"),
new BigDecimal("2280"),
new BigDecimal("2160"),
new BigDecimal("2040"),
new BigDecimal("1920"),
new BigDecimal("1800"),
new BigDecimal("1680"),
new BigDecimal("1560"),
new BigDecimal("1440"),
new BigDecimal("1320"),
new BigDecimal("1200"),
new BigDecimal("1140"),
new BigDecimal("1080"),
new BigDecimal("1020"),
new BigDecimal("960"),
new BigDecimal("900"),
new BigDecimal("840"),
new BigDecimal("780"),
new BigDecimal("720"),
new BigDecimal("660"),
new BigDecimal("600"),
new BigDecimal("540"),
new BigDecimal("480"),
new BigDecimal("420"),
new BigDecimal("360"),
new BigDecimal("300"),
new BigDecimal("240"),
new BigDecimal("180"),
new BigDecimal("120"),
new BigDecimal("60"),
BigDecimal.ZERO];
// const BigDecimal[]
var TAB3 = [BigDecimal.ZERO,
new BigDecimal("900"),
new BigDecimal("864"),
new BigDecimal("828"),
new BigDecimal("792"),
new BigDecimal("756"),
new BigDecimal("720"),
new BigDecimal("684"),
new BigDecimal("648"),
new BigDecimal("612"),
new BigDecimal("576"),
new BigDecimal("540"),
new BigDecimal("504"),
new BigDecimal("468"),
new BigDecimal("432"),
new BigDecimal("396"),
new BigDecimal("360"),
new BigDecimal("342"),
new BigDecimal("324"),
new BigDecimal("306"),
new BigDecimal("288"),
new BigDecimal("270"),
new BigDecimal("252"),
new BigDecimal("234"),
new BigDecimal("216"),
new BigDecimal("198"),
new BigDecimal("180"),
new BigDecimal("162"),
new BigDecimal("144"),
new BigDecimal("126"),
new BigDecimal("108"),
new BigDecimal("90"),
new BigDecimal("72"),
new BigDecimal("54"),
new BigDecimal("36"),
new BigDecimal("18"),
BigDecimal.ZERO];
// const BigDecimal[]
var TAB4 = [BigDecimal.ZERO,
new BigDecimal("0.4"),
new BigDecimal("0.384"),
new BigDecimal("0.368"),
new BigDecimal("0.352"),
new BigDecimal("0.336"),
new BigDecimal("0.32"),
new BigDecimal("0.304"),
new BigDecimal("0.288"),
new BigDecimal("0.272"),
new BigDecimal("0.256"),
new BigDecimal("0.24"),
new BigDecimal("0.224"),
new BigDecimal("0.208"),
new BigDecimal("0.192"),
new BigDecimal("0.176"),
new BigDecimal("0.16"),
new BigDecimal("0.152"),
new BigDecimal("0.144"),
new BigDecimal("0.136"),
new BigDecimal("0.128"),
new BigDecimal("0.12"),
new BigDecimal("0.112"),
new BigDecimal("0.104"),
new BigDecimal("0.096"),
new BigDecimal("0.088"),
new BigDecimal("0.08"),
new BigDecimal("0.072"),
new BigDecimal("0.064"),
new BigDecimal("0.056"),
new BigDecimal("0.048"),
new BigDecimal("0.04"),
new BigDecimal("0.032"),
new BigDecimal("0.024"),
new BigDecimal("0.016"),
new BigDecimal("0.008"),
BigDecimal.ZERO];
// const BigDecimal[]
var TAB5 = [BigDecimal.ZERO,
new BigDecimal("1900"),
new BigDecimal("1824"),
new BigDecimal("1748"),
new BigDecimal("1672"),
new BigDecimal("1596"),
new BigDecimal("1520"),
new BigDecimal("1444"),
new BigDecimal("1368"),
new BigDecimal("1292"),
new BigDecimal("1216"),
new BigDecimal("1140"),
new BigDecimal("1064"),
new BigDecimal("988"),
new BigDecimal("912"),
new BigDecimal("836"),
new BigDecimal("760"),
new BigDecimal("722"),
new BigDecimal("684"),
new BigDecimal("646"),
new BigDecimal("608"),
new BigDecimal("570"),
new BigDecimal("532"),
new BigDecimal("494"),
new BigDecimal("456"),
new BigDecimal("418"),
new BigDecimal("380"),
new BigDecimal("342"),
new BigDecimal("304"),
new BigDecimal("266"),
new BigDecimal("228"),
new BigDecimal("190"),
new BigDecimal("152"),
new BigDecimal("114"),
new BigDecimal("76"),
new BigDecimal("38"),
BigDecimal.ZERO];
// const BigDecimal
var ZAHL1 = BigDecimal.ONE;
// const BigDecimal
var ZAHL2 = new BigDecimal("2");
// const BigDecimal
var ZAHL5 = new BigDecimal("5");
// const BigDecimal
var ZAHL7 = new BigDecimal("7");
// const BigDecimal
var ZAHL12 = new BigDecimal("12");
// const BigDecimal
var ZAHL100 = new BigDecimal("100");
// const BigDecimal
var ZAHL360 = new BigDecimal("360");
// const BigDecimal
var ZAHL500 = new BigDecimal("500");
// const BigDecimal
var ZAHL700 = new BigDecimal("700");
// const BigDecimal
var ZAHL1000 = new BigDecimal("1000");
// const BigDecimal
var ZAHL10000 = new BigDecimal("10000");
module.exports = function Lohnsteuer2021Big(args) {
    //  Stand: 2020-11-03
    //  ITZBund Berlin
    //   EINGABEPARAMETER
    //  1, wenn die Anwendung des Faktorverfahrens gewählt wurden (nur in Steuerklasse IV)
    // int
    var af = (args.af !== undefined) ? args.af : 1;

    //  Auf die Vollendung des 64. Lebensjahres folgende
    //                  Kalenderjahr (erforderlich, wenn ALTER1=1)
    // int - Implicit Default
    var AJAHR = (args.AJAHR !== undefined) ? args.AJAHR : 0;

    //  1, wenn das 64. Lebensjahr zu Beginn des Kalenderjahres vollendet wurde, in dem
    //                  der Lohnzahlungszeitraum endet (§ 24 a EStG), sonst = 0
    // int - Implicit Default
    var ALTER1 = (args.ALTER1 !== undefined) ? args.ALTER1 : 0;

    //  in VKAPA und VMT enthaltene Entschädigungen nach §24 Nummer 1 EStG in Cent
    // BigDecimal
    var ENTSCH = (args.ENTSCH !== undefined) ? new BigDecimal(String(args.ENTSCH)) : BigDecimal.ZERO;

    //  eingetragener Faktor mit drei Nachkommastellen
    // double
    var f = (args.f !== undefined) ? args.f : 1.0;

    //  Jahresfreibetrag nach Maßgabe der Eintragungen auf der
    //                  Lohnsteuerkarte in Cents (ggf. 0)
    // BigDecimal - Implicit Default
    var JFREIB = (args.JFREIB !== undefined) ? new BigDecimal(String(args.JFREIB)) : BigDecimal.ZERO;

    //  Jahreshinzurechnungsbetrag in Cents (ggf. 0)
    // BigDecimal - Implicit Default
    var JHINZU = (args.JHINZU !== undefined) ? new BigDecimal(String(args.JHINZU)) : BigDecimal.ZERO;

    //  Voraussichtlicher Jahresarbeitslohn ohne sonstige Bezüge und ohne Vergütung für mehrjährige Tätigkeit in Cent.
    //                  Anmerkung: Die Eingabe dieses Feldes (ggf. 0) ist erforderlich bei Eingabe „sonsti-ger Bezüge“ (Feld SONSTB)
    //                  oder bei Eingabe der „Vergütung für mehrjährige Tätigkeit“ (Feld VMT).
    //                  Sind in einem vorangegangenen Abrechnungszeitraum bereits sonstige Bezüge gezahlt worden, so sind sie dem
    //                  voraussichtlichen Jahresarbeitslohn hinzuzurechnen. Vergütungen für mehrere Jahres aus einem vorangegangenen
    //                  Abrechnungszeitraum sind in voller Höhe hinzuzurechnen.
    // BigDecimal - Implicit Default
    var JRE4 = (args.JRE4 !== undefined) ? new BigDecimal(String(args.JRE4)) : BigDecimal.ZERO;

    //  In JRE4 enthaltene Versorgungsbezuege in Cents (ggf. 0)
    // BigDecimal - Implicit Default
    var JVBEZ = (args.JVBEZ !== undefined) ? new BigDecimal(String(args.JVBEZ)) : BigDecimal.ZERO;

    // Merker für die Vorsorgepauschale
    //                 2 = der Arbeitnehmer ist NICHT in der gesetzlichen Rentenversicherung versichert.
    //
    //                 1 = der Arbeitnehmer ist in der gesetzlichen Rentenversicherung versichert, es gilt die
    //                     Beitragsbemessungsgrenze OST.
    //
    //                 0 = der Arbeitnehmer ist in der gesetzlichen Rentenversicherung versichert, es gilt die
    //                     Beitragsbemessungsgrenze WEST.
    // int - Implicit Default
    var KRV = (args.KRV !== undefined) ? args.KRV : 0;

    //  Einkommensbezogener Zusatzbeitragssatz eines gesetzlich krankenversicherten Arbeitnehmers,
    //              auf dessen Basis der an die Krankenkasse zu zahlende Zusatzbeitrag berechnet wird,
    //              in Prozent (bspw. 0,90 für 0,90 %) mit 2 Dezimalstellen.
    //              Der von der Kranken-kasse festgesetzte Zusatzbeitragssatz ist bei Abweichungen unmaßgeblich.
    // BigDecimal - Implicit Default
    var KVZ = (args.KVZ !== undefined) ? new BigDecimal(String(args.KVZ)) : BigDecimal.ZERO;

    //  Lohnzahlungszeitraum:
    //                  1 = Jahr
    //                  2 = Monat
    //                  3 = Woche
    //                  4 = Tag
    // int - Implicit Default
    var LZZ = (args.LZZ !== undefined) ? args.LZZ : 0;

    //  In der Lohnsteuerkarte des Arbeitnehmers eingetragener Freibetrag für
    //                  den Lohnzahlungszeitraum in Cent
    // BigDecimal - Implicit Default
    var LZZFREIB = (args.LZZFREIB !== undefined) ? new BigDecimal(String(args.LZZFREIB)) : BigDecimal.ZERO;

    //  In der Lohnsteuerkarte des Arbeitnehmers eingetragener Hinzurechnungsbetrag
    //                  für den Lohnzahlungszeitraum in Cent
    // BigDecimal - Implicit Default
    var LZZHINZU = (args.LZZHINZU !== undefined) ? new BigDecimal(String(args.LZZHINZU)) : BigDecimal.ZERO;

    //  Dem Arbeitgeber mitgeteilte Zahlungen des Arbeitnehmers zur privaten
    //                  Kranken- bzw. Pflegeversicherung im Sinne des §10 Abs. 1 Nr. 3 EStG 2010
    //                  als Monatsbetrag in Cent (der Wert ist inabhängig vom Lohnzahlungszeitraum immer
    //                  als Monatsbetrag anzugeben).
    // BigDecimal
    var PKPV = (args.PKPV !== undefined) ? new BigDecimal(String(args.PKPV)) : BigDecimal.ZERO;

    //  Krankenversicherung:
    //                  0 = gesetzlich krankenversicherte Arbeitnehmer
    //                  1 = ausschließlich privat krankenversicherte Arbeitnehmer OHNE Arbeitgeberzuschuss
    //                  2 = ausschließlich privat krankenversicherte Arbeitnehmer MIT Arbeitgeberzuschuss
    // int
    var PKV = (args.PKV !== undefined) ? args.PKV : 0;

    //  1, wenn bei der sozialen Pflegeversicherung die Besonderheiten in Sachsen zu berücksichtigen sind bzw.
    //                      zu berücksichtigen wären, sonst 0.
    // int
    var PVS = (args.PVS !== undefined) ? args.PVS : 0;

    //  1, wenn er der Arbeitnehmer den Zuschlag zur sozialen Pflegeversicherung
    //                      zu zahlen hat, sonst 0.
    // int
    var PVZ = (args.PVZ !== undefined) ? args.PVZ : 0;

    //  Religionsgemeinschaft des Arbeitnehmers lt. Lohnsteuerkarte (bei
    //                  keiner Religionszugehoerigkeit = 0)
    // int - Implicit Default
    var R = (args.R !== undefined) ? args.R : 0;

    //  Steuerpflichtiger Arbeitslohn vor Beruecksichtigung der Freibetraege
    //                  fuer Versorgungsbezuege, des Altersentlastungsbetrags und des auf
    //                  der Lohnsteuerkarte fuer den Lohnzahlungszeitraum eingetragenen
    //                  Freibetrags in Cents.
    // BigDecimal - Implicit Default
    var RE4 = (args.RE4 !== undefined) ? new BigDecimal(String(args.RE4)) : BigDecimal.ZERO;

    //  Sonstige Bezuege (ohne Verguetung aus mehrjaehriger Taetigkeit) einschliesslich
    //                  Sterbegeld bei Versorgungsbezuegen sowie Kapitalauszahlungen/Abfindungen,
    //                  soweit es sich nicht um Bezuege fuer mehrere Jahre handelt in Cents (ggf. 0)
    // BigDecimal - Implicit Default
    var SONSTB = (args.SONSTB !== undefined) ? new BigDecimal(String(args.SONSTB)) : BigDecimal.ZERO;

    //  Sterbegeld bei Versorgungsbezuegen sowie Kapitalauszahlungen/Abfindungen,
    //                  soweit es sich nicht um Bezuege fuer mehrere Jahre handelt
    //                  (in SONSTB enthalten) in Cents
    // BigDecimal - Implicit Default
    var STERBE = (args.STERBE !== undefined) ? new BigDecimal(String(args.STERBE)) : BigDecimal.ZERO;

    //  Steuerklasse:
    //                  1 = I
    //                  2 = II
    //                  3 = III
    //                  4 = IV
    //                  5 = V
    //                  6 = VI
    // int - Implicit Default
    var STKL = (args.STKL !== undefined) ? args.STKL : 0;

    //  In RE4 enthaltene Versorgungsbezuege in Cents (ggf. 0)
    // BigDecimal - Implicit Default
    var VBEZ = (args.VBEZ !== undefined) ? new BigDecimal(String(args.VBEZ)) : BigDecimal.ZERO;

    //  Vorsorgungsbezug im Januar 2005 bzw. fuer den ersten vollen Monat
    //                  in Cents
    // BigDecimal - Implicit Default
    var VBEZM = (args.VBEZM !== undefined) ? new BigDecimal(String(args.VBEZM)) : BigDecimal.ZERO;

    //  Voraussichtliche Sonderzahlungen im Kalenderjahr des Versorgungsbeginns
    //                  bei Versorgungsempfaengern ohne Sterbegeld, Kapitalauszahlungen/Abfindungen
    //                  bei Versorgungsbezuegen in Cents
    // BigDecimal - Implicit Default
    var VBEZS = (args.VBEZS !== undefined) ? new BigDecimal(String(args.VBEZS)) : BigDecimal.ZERO;

    //  In SONSTB enthaltene Versorgungsbezuege einschliesslich Sterbegeld
    //                 in Cents (ggf. 0)
    // BigDecimal - Implicit Default
    var VBS = (args.VBS !== undefined) ? new BigDecimal(String(args.VBS)) : BigDecimal.ZERO;

    //  Jahr, in dem der Versorgungsbezug erstmalig gewaehrt wurde; werden
    //                  mehrere Versorgungsbezuege gezahlt, so gilt der aelteste erstmalige Bezug
    // int - Implicit Default
    var VJAHR = (args.VJAHR !== undefined) ? args.VJAHR : 0;

    //  Kapitalauszahlungen / Abfindungen / Nachzahlungen bei Versorgungsbezügen
    //                  für mehrere Jahre in Cent (ggf. 0)
    // BigDecimal - Implicit Default
    var VKAPA = (args.VKAPA !== undefined) ? new BigDecimal(String(args.VKAPA)) : BigDecimal.ZERO;

    //  Vergütung für mehrjährige Tätigkeit ohne Kapitalauszahlungen und ohne Abfindungen
    //                  bei Versorgungsbezügen in Cent (ggf. 0)
    // BigDecimal - Implicit Default
    var VMT = (args.VMT !== undefined) ? new BigDecimal(String(args.VMT)) : BigDecimal.ZERO;

    //  Zahl der Freibetraege fuer Kinder (eine Dezimalstelle, nur bei Steuerklassen
    //                  I, II, III und IV)
    // BigDecimal - Implicit Default
    var ZKF = (args.ZKF !== undefined) ? new BigDecimal(String(args.ZKF)) : BigDecimal.ZERO;

    //  Zahl der Monate, fuer die Versorgungsbezuege gezahlt werden (nur
    //                  erforderlich bei Jahresberechnung (LZZ = 1)
    // int - Implicit Default
    var ZMVB = (args.ZMVB !== undefined) ? args.ZMVB : 0;

    //  In JRE4 enthaltene Entschädigungen nach § 24 Nummer 1 EStG in Cent
    // BigDecimal
    var JRE4ENT = (args.JRE4ENT !== undefined) ? new BigDecimal(String(args.JRE4ENT)) : BigDecimal.ZERO;

    //  In SONSTB enthaltene Entschädigungen nach § 24 Nummer 1 EStG in Cent
    // BigDecimal
    var SONSTENT = (args.SONSTENT !== undefined) ? new BigDecimal(String(args.SONSTENT)) : BigDecimal.ZERO;

    //   AUSGABEPARAMETER
    //  Bemessungsgrundlage fuer die Kirchenlohnsteuer in Cents
    var BK = BigDecimal.ZERO; // BigDecimal

    //  Bemessungsgrundlage der sonstigen Einkuenfte (ohne Verguetung
    //                  fuer mehrjaehrige Taetigkeit) fuer die Kirchenlohnsteuer in Cents
    var BKS = BigDecimal.ZERO; // BigDecimal

    var BKV = BigDecimal.ZERO; // BigDecimal

    //  Fuer den Lohnzahlungszeitraum einzubehaltende Lohnsteuer in Cents
    var LSTLZZ = BigDecimal.ZERO; // BigDecimal

    //  Fuer den Lohnzahlungszeitraum einzubehaltender Solidaritaetszuschlag
    //                  in Cents
    var SOLZLZZ = BigDecimal.ZERO; // BigDecimal

    //  Solidaritaetszuschlag fuer sonstige Bezuege (ohne Verguetung fuer mehrjaehrige
    //                  Taetigkeit) in Cents
    var SOLZS = BigDecimal.ZERO; // BigDecimal

    //  Solidaritaetszuschlag fuer die Verguetung fuer mehrjaehrige Taetigkeit in
    //                  Cents
    var SOLZV = BigDecimal.ZERO; // BigDecimal

    //  Lohnsteuer fuer sonstige Einkuenfte (ohne Verguetung fuer mehrjaehrige
    //                  Taetigkeit) in Cents
    var STS = BigDecimal.ZERO; // BigDecimal

    //  Lohnsteuer fuer Verguetung fuer mehrjaehrige Taetigkeit in Cents
    var STV = BigDecimal.ZERO; // BigDecimal

    //  Für den Lohnzahlungszeitraum berücksichtigte Beiträge des Arbeitnehmers zur
    //                  privaten Basis-Krankenversicherung und privaten Pflege-Pflichtversicherung (ggf. auch
    //                  die Mindestvorsorgepauschale) in Cent beim laufenden Arbeitslohn. Für Zwecke der Lohn-
    //                  steuerbescheinigung sind die einzelnen Ausgabewerte außerhalb des eigentlichen Lohn-
    //                  steuerbescheinigungsprogramms zu addieren; hinzuzurechnen sind auch die Ausgabewerte
    //                  VKVSONST
    var VKVLZZ = BigDecimal.ZERO; // BigDecimal

    //  Für den Lohnzahlungszeitraum berücksichtigte Beiträge des Arbeitnehmers
    //                  zur privaten Basis-Krankenversicherung und privaten Pflege-Pflichtversicherung (ggf.
    //                  auch die Mindestvorsorgepauschale) in Cent bei sonstigen Bezügen. Der Ausgabewert kann
    //                  auch negativ sein. Für tarifermäßigt zu besteuernde Vergütungen für mehrjährige
    //                  Tätigkeiten enthält der PAP keinen entsprechenden Ausgabewert.
    var VKVSONST = BigDecimal.ZERO; // BigDecimal

    //   AUSGABEPARAMETER DBA
    //  Verbrauchter Freibetrag bei Berechnung des laufenden Arbeitslohns, in Cent
    var VFRB = BigDecimal.ZERO; // BigDecimal

    //  Verbrauchter Freibetrag bei Berechnung des voraussichtlichen Jahresarbeitslohns, in Cent
    var VFRBS1 = BigDecimal.ZERO; // BigDecimal

    //  Verbrauchter Freibetrag bei Berechnung der sonstigen Bezüge, in Cent
    var VFRBS2 = BigDecimal.ZERO; // BigDecimal

    //  Für die weitergehende Berücksichtigung des Steuerfreibetrags nach dem DBA Türkei verfügbares ZVE über
    //                 dem Grundfreibetrag bei der Berechnung des laufenden Arbeitslohns, in Cent
    var WVFRB = BigDecimal.ZERO; // BigDecimal

    //  Für die weitergehende Berücksichtigung des Steuerfreibetrags nach dem DBA Türkei verfügbares ZVE über dem Grundfreibetrag
    //                 bei der Berechnung des voraussichtlichen Jahresarbeitslohns, in Cent
    var WVFRBO = BigDecimal.ZERO; // BigDecimal

    //  Für die weitergehende Berücksichtigung des Steuerfreibetrags nach dem DBA Türkei verfügbares ZVE
    //                 über dem Grundfreibetrag bei der Berechnung der sonstigen Bezüge, in Cent
    var WVFRBM = BigDecimal.ZERO; // BigDecimal

    //   INTERNE FELDER
    //  Altersentlastungsbetrag nach Alterseinkünftegesetz in €,
    //                      Cent (2 Dezimalstellen)
    var ALTE = BigDecimal.ZERO; // BigDecimal

    //  Arbeitnehmer-Pauschbetrag in EURO
    var ANP = BigDecimal.ZERO; // BigDecimal

    //  Auf den Lohnzahlungszeitraum entfallender Anteil von Jahreswerten
    //                      auf ganze Cents abgerundet
    var ANTEIL1 = BigDecimal.ZERO; // BigDecimal

    //  Bemessungsgrundlage für Altersentlastungsbetrag in €, Cent
    //                      (2 Dezimalstellen)
    var BMG = BigDecimal.ZERO; // BigDecimal

    //  Beitragsbemessungsgrenze in der gesetzlichen Krankenversicherung
    //                     und der sozialen Pflegeversicherung in Euro
    var BBGKVPV = BigDecimal.ZERO; // BigDecimal

    //   Nach Programmablaufplan 2019
    var bd = BigDecimal.ZERO; // BigDecimal

    //  allgemeine Beitragsbemessungsgrenze in der allgemeinen Renten-versicherung in Euro
    var BBGRV = BigDecimal.ZERO; // BigDecimal

    //  Differenz zwischen ST1 und ST2 in EURO
    var DIFF = BigDecimal.ZERO; // BigDecimal

    //  Entlastungsbetrag fuer Alleinerziehende in EURO
    var EFA = BigDecimal.ZERO; // BigDecimal

    //  Versorgungsfreibetrag in €, Cent (2 Dezimalstellen)
    var FVB = BigDecimal.ZERO; // BigDecimal

    //  Versorgungsfreibetrag in €, Cent (2 Dezimalstellen) für die Berechnung
    //                      der Lohnsteuer für den sonstigen Bezug
    var FVBSO = BigDecimal.ZERO; // BigDecimal

    //  Zuschlag zum Versorgungsfreibetrag in EURO
    var FVBZ = BigDecimal.ZERO; // BigDecimal

    //  Zuschlag zum Versorgungsfreibetrag in EURO fuer die Berechnung
    //                      der Lohnsteuer beim sonstigen Bezug
    var FVBZSO = BigDecimal.ZERO; // BigDecimal

    //  Grundfreibetrag in Euro
    var GFB = BigDecimal.ZERO; // BigDecimal

    //  Maximaler Altersentlastungsbetrag in €
    var HBALTE = BigDecimal.ZERO; // BigDecimal

    //  Massgeblicher maximaler Versorgungsfreibetrag in €
    var HFVB = BigDecimal.ZERO; // BigDecimal

    //  Massgeblicher maximaler Zuschlag zum Versorgungsfreibetrag in €,Cent
    //                      (2 Dezimalstellen)
    var HFVBZ = BigDecimal.ZERO; // BigDecimal

    //  Massgeblicher maximaler Zuschlag zum Versorgungsfreibetrag in €, Cent
    //                      (2 Dezimalstellen) für die Berechnung der Lohnsteuer für den
    //                      sonstigen Bezug
    var HFVBZSO = BigDecimal.ZERO; // BigDecimal

    //  Nummer der Tabellenwerte fuer Versorgungsparameter
    var J = 0; // int

    //  Jahressteuer nach § 51a EStG, aus der Solidaritaetszuschlag und
    //                      Bemessungsgrundlage fuer die Kirchenlohnsteuer ermittelt werden in EURO
    var JBMG = BigDecimal.ZERO; // BigDecimal

    //  Auf einen Jahreslohn hochgerechneter LZZFREIB in €, Cent
    //                      (2 Dezimalstellen)
    var JLFREIB = BigDecimal.ZERO; // BigDecimal

    //  Auf einen Jahreslohn hochgerechnete LZZHINZU in €, Cent
    //                      (2 Dezimalstellen)
    var JLHINZU = BigDecimal.ZERO; // BigDecimal

    //  Jahreswert, dessen Anteil fuer einen Lohnzahlungszeitraum in
    //                      UPANTEIL errechnet werden soll in Cents
    var JW = BigDecimal.ZERO; // BigDecimal

    //  Nummer der Tabellenwerte fuer Parameter bei Altersentlastungsbetrag
    var K = 0; // int

    //  Merker für Berechnung Lohnsteuer für mehrjährige Tätigkeit.
    //                      0 = normale Steuerberechnung
    //                      1 = Steuerberechnung für mehrjährige Tätigkeit
    //                      2 = entfällt
    var KENNVMT = 0; // int

    //  Summe der Freibetraege fuer Kinder in EURO
    var KFB = BigDecimal.ZERO; // BigDecimal

    //  Beitragssatz des Arbeitgebers zur Krankenversicherung
    var KVSATZAG = BigDecimal.ZERO; // BigDecimal

    //  Beitragssatz des Arbeitnehmers zur Krankenversicherung
    var KVSATZAN = BigDecimal.ZERO; // BigDecimal

    //  Kennzahl fuer die Einkommensteuer-Tabellenart:
    //                      1 = Grundtabelle
    //                      2 = Splittingtabelle
    var KZTAB = 0; // int

    //  Jahreslohnsteuer in EURO
    var LSTJAHR = BigDecimal.ZERO; // BigDecimal

    //  Zwischenfelder der Jahreslohnsteuer in Cent
    var LST1 = BigDecimal.ZERO; // BigDecimal

    var LST2 = BigDecimal.ZERO; // BigDecimal

    var LST3 = BigDecimal.ZERO; // BigDecimal

    var LSTOSO = BigDecimal.ZERO; // BigDecimal

    var LSTSO = BigDecimal.ZERO; // BigDecimal

    //  Mindeststeuer fuer die Steuerklassen V und VI in EURO
    var MIST = BigDecimal.ZERO; // BigDecimal

    //  Beitragssatz des Arbeitgebers zur Pflegeversicherung
    var PVSATZAG = BigDecimal.ZERO; // BigDecimal

    //  Beitragssatz des Arbeitnehmers zur Pflegeversicherung
    var PVSATZAN = BigDecimal.ZERO; // BigDecimal

    //  Beitragssatz des Arbeitnehmers in der allgemeinen gesetzlichen Rentenversicherung (4 Dezimalstellen)
    var RVSATZAN = BigDecimal.ZERO; // BigDecimal

    //  Rechenwert in Gleitkommadarstellung
    var RW = BigDecimal.ZERO; // BigDecimal

    //  Sonderausgaben-Pauschbetrag in EURO
    var SAP = BigDecimal.ZERO; // BigDecimal

    //  Freigrenze fuer den Solidaritaetszuschlag in EURO
    var SOLZFREI = BigDecimal.ZERO; // BigDecimal

    //  Solidaritaetszuschlag auf die Jahreslohnsteuer in EURO, C (2 Dezimalstellen)
    var SOLZJ = BigDecimal.ZERO; // BigDecimal

    //  Zwischenwert fuer den Solidaritaetszuschlag auf die Jahreslohnsteuer
    //                      in EURO, C (2 Dezimalstellen)
    var SOLZMIN = BigDecimal.ZERO; // BigDecimal

    //  Neu ab 2021: Bemessungsgrundlage des Solidaritätszuschlags zur Prüfung der Freigrenze beim Solidaritätszuschlag für sonstige Bezüge (ohne Vergütung für mehrjährige Tätigkeit) in Euro
    var SOLZSBMG = BigDecimal.ZERO; // BigDecimal

    //  Neu ab 2021: Zu versteuerndes Einkommen für die Ermittlung der Bemessungsgrundlage des Solidaritätszuschlags zur Prüfung der Freigrenze beim Solidaritätszuschlag für sonstige Bezüge (ohne Vergütung für mehrjährige Tätigkeit) in Euro, Cent (2 Dezimalstellen)
    var SOLZSZVE = BigDecimal.ZERO; // BigDecimal

    //  Neu ab 2021: Bemessungsgrundlage des Solidaritätszuschlags für die Prüfung der Freigrenze beim Solidaritätszuschlag für die Vergütung für mehrjährige Tätigkeit in Euro
    var SOLZVBMG = BigDecimal.ZERO; // BigDecimal

    //  Tarifliche Einkommensteuer in EURO
    var ST = BigDecimal.ZERO; // BigDecimal

    //  Tarifliche Einkommensteuer auf das 1,25-fache ZX in EURO
    var ST1 = BigDecimal.ZERO; // BigDecimal

    //  Tarifliche Einkommensteuer auf das 0,75-fache ZX in EURO
    var ST2 = BigDecimal.ZERO; // BigDecimal

    //  Zwischenfeld zur Ermittlung der Steuer auf Vergütungen für mehrjährige Tätigkeit
    var STOVMT = BigDecimal.ZERO; // BigDecimal

    //  Teilbetragssatz der Vorsorgepauschale für die Rentenversicherung (2 Dezimalstellen)
    var TBSVORV = BigDecimal.ZERO; // BigDecimal

    //  Bemessungsgrundlage fuer den Versorgungsfreibetrag in Cents
    var VBEZB = BigDecimal.ZERO; // BigDecimal

    //  Bemessungsgrundlage für den Versorgungsfreibetrag in Cent für
    //                      den sonstigen Bezug
    var VBEZBSO = BigDecimal.ZERO; // BigDecimal

    //  Hoechstbetrag der Vorsorgepauschale nach Alterseinkuenftegesetz in EURO, C
    var VHB = BigDecimal.ZERO; // BigDecimal

    //  Vorsorgepauschale in EURO, C (2 Dezimalstellen)
    var VSP = BigDecimal.ZERO; // BigDecimal

    //  Vorsorgepauschale nach Alterseinkuenftegesetz in EURO, C
    var VSPN = BigDecimal.ZERO; // BigDecimal

    //  Zwischenwert 1 bei der Berechnung der Vorsorgepauschale nach
    //                      dem Alterseinkuenftegesetz in EURO, C (2 Dezimalstellen)
    var VSP1 = BigDecimal.ZERO; // BigDecimal

    //  Zwischenwert 2 bei der Berechnung der Vorsorgepauschale nach
    //                      dem Alterseinkuenftegesetz in EURO, C (2 Dezimalstellen)
    var VSP2 = BigDecimal.ZERO; // BigDecimal

    //  Vorsorgepauschale mit Teilbeträgen für die gesetzliche Kranken- und
    //                      soziale Pflegeversicherung nach fiktiven Beträgen oder ggf. für die
    //                      private Basiskrankenversicherung und private Pflege-Pflichtversicherung
    //                      in Euro, Cent (2 Dezimalstellen)
    var VSP3 = BigDecimal.ZERO; // BigDecimal

    //  Erster Grenzwert in Steuerklasse V/VI in Euro
    var W1STKL5 = BigDecimal.ZERO; // BigDecimal

    //  Zweiter Grenzwert in Steuerklasse V/VI in Euro
    var W2STKL5 = BigDecimal.ZERO; // BigDecimal

    //  Dritter Grenzwert in Steuerklasse V/VI in Euro
    var W3STKL5 = BigDecimal.ZERO; // BigDecimal

    //  Hoechstbetrag der Vorsorgepauschale nach § 10c Abs. 2 Nr. 2 EStG in EURO
    var VSPMAX1 = BigDecimal.ZERO; // BigDecimal

    //  Hoechstbetrag der Vorsorgepauschale nach § 10c Abs. 2 Nr. 3 EStG in EURO
    var VSPMAX2 = BigDecimal.ZERO; // BigDecimal

    //  Vorsorgepauschale nach § 10c Abs. 2 Satz 2 EStG vor der Hoechstbetragsberechnung
    //                      in EURO, C (2 Dezimalstellen)
    var VSPO = BigDecimal.ZERO; // BigDecimal

    //  Fuer den Abzug nach § 10c Abs. 2 Nrn. 2 und 3 EStG verbleibender
    //                      Rest von VSPO in EURO, C (2 Dezimalstellen)
    var VSPREST = BigDecimal.ZERO; // BigDecimal

    //  Hoechstbetrag der Vorsorgepauschale nach § 10c Abs. 2 Nr. 1 EStG
    //                      in EURO, C (2 Dezimalstellen)
    var VSPVOR = BigDecimal.ZERO; // BigDecimal

    //  Zu versteuerndes Einkommen gem. § 32a Abs. 1 und 2 EStG €, C
    //                      (2 Dezimalstellen)
    var X = BigDecimal.ZERO; // BigDecimal

    //  gem. § 32a Abs. 1 EStG (6 Dezimalstellen)
    var Y = BigDecimal.ZERO; // BigDecimal

    //  Auf einen Jahreslohn hochgerechnetes RE4 in €, C (2 Dezimalstellen)
    //                      nach Abzug der Freibeträge nach § 39 b Abs. 2 Satz 3 und 4.
    var ZRE4 = BigDecimal.ZERO; // BigDecimal

    //  Auf einen Jahreslohn hochgerechnetes RE4 in €, C (2 Dezimalstellen)
    var ZRE4J = BigDecimal.ZERO; // BigDecimal

    //  Auf einen Jahreslohn hochgerechnetes RE4 in €, C (2 Dezimalstellen)
    //                      nach Abzug des Versorgungsfreibetrags und des Alterentlastungsbetrags
    //                      zur Berechnung der Vorsorgepauschale in €, Cent (2 Dezimalstellen)
    var ZRE4VP = BigDecimal.ZERO; // BigDecimal

    //  Feste Tabellenfreibeträge (ohne Vorsorgepauschale) in €, Cent
    //                      (2 Dezimalstellen)
    var ZTABFB = BigDecimal.ZERO; // BigDecimal

    //  Auf einen Jahreslohn hochgerechnetes (VBEZ abzueglich FVB) in
    //                      EURO, C (2 Dezimalstellen)
    var ZVBEZ = BigDecimal.ZERO; // BigDecimal

    //  Auf einen Jahreslohn hochgerechnetes VBEZ in €, C (2 Dezimalstellen)
    var ZVBEZJ = BigDecimal.ZERO; // BigDecimal

    //  Zu versteuerndes Einkommen in €, C (2 Dezimalstellen)
    var ZVE = BigDecimal.ZERO; // BigDecimal

    //  Zwischenfelder zu X fuer die Berechnung der Steuer nach § 39b
    //                      Abs. 2 Satz 7 EStG in €
    var ZX = BigDecimal.ZERO; // BigDecimal

    var ZZX = BigDecimal.ZERO; // BigDecimal

    var HOCH = BigDecimal.ZERO; // BigDecimal

    var VERGL = BigDecimal.ZERO; // BigDecimal

    //  Jahreswert der berücksichtigten Beiträge zur privaten Basis-Krankenversicherung und
    //                       privaten Pflege-Pflichtversicherung (ggf. auch die Mindestvorsorgepauschale) in Cent.
    var VKV = BigDecimal.ZERO; // BigDecimal

    //  Tabelle fuer die Vomhundertsaetze des Versorgungsfreibetrags

    //  Tabelle fuer die Hoechstbetrage des Versorgungsfreibetrags

    //  Tabelle fuer die Zuschlaege zum Versorgungsfreibetrag

    //  Tabelle fuer die Vomhundertsaetze des Altersentlastungsbetrags

    //  Tabelle fuer die Hoechstbetraege des Altersentlastungsbetrags

    //  Zahlenkonstanten fuer im Plan oft genutzte BigDecimal Werte











    //  PROGRAMMABLAUFPLAN, PAP Seite 14
    function main() {
        MPARA();
        MRE4JL();
        VBEZBSO = BigDecimal.ZERO;
        KENNVMT = 0;
        MRE4();
        MRE4ABZ();
        MBERECH();
        MSONST();
        MVMT();
    }

    //  Zuweisung von Werten für bestimmte Sozialversicherungsparameter  PAP Seite 15
    function MPARA() {
        if (KRV < 2)         //  &lt; = <
{
            if (KRV === 0) {
                BBGRV = new BigDecimal("85200");
                //  Geändert für 2021
            } else {
                BBGRV = new BigDecimal("80400");
                //  Geändert für 2021
            }
            RVSATZAN = new BigDecimal("0.093");
            //  Neu 2019
            TBSVORV = new BigDecimal("0.84");
            //  Geändert für 2021
        } else {
            //  Nichts zu tun
        }
        BBGKVPV = new BigDecimal("58050");
        //  Geändert für 2021
        bd = new BigDecimal("2");
        //  Neu 2019
        KVSATZAN = (KVZ.divide(bd).divide(ZAHL100)).add(new BigDecimal("0.07"));
        //  Neu 2019
        KVSATZAG = new BigDecimal(String(0.0065+0.07));
        //  Geändert für 2021
        if (PVS === 1) {
            PVSATZAN = new BigDecimal("0.02025");
            //  Neu 2019
            PVSATZAG = new BigDecimal("0.01025");
            //  Neu 2019
        } else {
            PVSATZAN = new BigDecimal("0.01525");
            //  Neu 2019
            PVSATZAG = new BigDecimal("0.01525");
            //  Neu 2019
        }
        if (PVZ === 1) {
            PVSATZAN = PVSATZAN.add(new BigDecimal("0.0025"));
        }
        //  Anfang Geändert für 2021
        W1STKL5 = new BigDecimal("11237");
        W2STKL5 = new BigDecimal("28959");
        W3STKL5 = new BigDecimal("219690");
        GFB = new BigDecimal("9744");
        SOLZFREI = new BigDecimal("16956");
        //  Ende Geändert für 2021
    }

    //  Ermittlung des Jahresarbeitslohns nach § 39 b Abs. 2 Satz 2 EStG, PAP Seite 16
    function MRE4JL() {
        if (LZZ === 1) {
            ZRE4J = RE4.divide(ZAHL100, 2, BigDecimal.ROUND_DOWN);
            ZVBEZJ = VBEZ.divide(ZAHL100, 2, BigDecimal.ROUND_DOWN);
            JLFREIB = LZZFREIB.divide(ZAHL100, 2, BigDecimal.ROUND_DOWN);
            JLHINZU = LZZHINZU.divide(ZAHL100, 2, BigDecimal.ROUND_DOWN);
        } else {
            if (LZZ === 2) {
                ZRE4J = (RE4.multiply(ZAHL12)).divide(ZAHL100, 2, BigDecimal.ROUND_DOWN);
                ZVBEZJ = (VBEZ.multiply(ZAHL12)).divide(ZAHL100, 2, BigDecimal.ROUND_DOWN);
                JLFREIB = (LZZFREIB.multiply(ZAHL12)).divide(ZAHL100, 2, BigDecimal.ROUND_DOWN);
                JLHINZU = (LZZHINZU.multiply(ZAHL12)).divide(ZAHL100, 2, BigDecimal.ROUND_DOWN);
            } else {
                if (LZZ === 3) {
                    ZRE4J = (RE4.multiply(ZAHL360)).divide(ZAHL700, 2, BigDecimal.ROUND_DOWN);
                    ZVBEZJ = (VBEZ.multiply(ZAHL360)).divide(ZAHL700, 2, BigDecimal.ROUND_DOWN);
                    JLFREIB = (LZZFREIB.multiply(ZAHL360)).divide(ZAHL700, 2, BigDecimal.ROUND_DOWN);
                    JLHINZU = (LZZHINZU.multiply(ZAHL360)).divide(ZAHL700, 2, BigDecimal.ROUND_DOWN);
                } else {
                    ZRE4J = (RE4.multiply(ZAHL360)).divide(ZAHL100, 2, BigDecimal.ROUND_DOWN);
                    ZVBEZJ = (VBEZ.multiply(ZAHL360)).divide(ZAHL100, 2, BigDecimal.ROUND_DOWN);
                    JLFREIB = (LZZFREIB.multiply(ZAHL360)).divide(ZAHL100, 2, BigDecimal.ROUND_DOWN);
                    JLHINZU = (LZZHINZU.multiply(ZAHL360)).divide(ZAHL100, 2, BigDecimal.ROUND_DOWN);
                }
            }
        }
        if (af === 0) {
            f = 1;
        }
    }

    //  Freibeträge für Versorgungsbezüge, Altersentlastungsbetrag (§ 39b Abs. 2 Satz 3 EStG), PAP Seite 17
    function MRE4() {
        if (ZVBEZJ.compareTo(BigDecimal.ZERO) === 0) {
            FVBZ = BigDecimal.ZERO;
            FVB = BigDecimal.ZERO;
            FVBZSO = BigDecimal.ZERO;
            FVBSO = BigDecimal.ZERO;
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
                VBEZB = (VBEZM.multiply(new BigDecimal(String(ZMVB)))).add(VBEZS);
                HFVB = TAB2[J].divide(ZAHL12).multiply(new BigDecimal(String(ZMVB)));
                FVBZ = TAB3[J].divide(ZAHL12).multiply(new BigDecimal(String(ZMVB))).setScale(0, BigDecimal.ROUND_UP);
            } else {
                VBEZB = ((VBEZM.multiply(ZAHL12)).add(VBEZS)).setScale(2, BigDecimal.ROUND_DOWN);
                HFVB = TAB2[J];
                FVBZ = TAB3[J];
            }
            FVB = ((VBEZB.multiply(TAB1[J]))).divide(ZAHL100).setScale(2, BigDecimal.ROUND_UP);
            if (FVB.compareTo(HFVB) === 1) {
                FVB = HFVB;
            }
            if (FVB.compareTo(ZVBEZJ) === 1) {
                FVB = ZVBEZJ;
            }
            FVBSO = (FVB.add((VBEZBSO.multiply(TAB1[J])).divide(ZAHL100))).setScale(2, BigDecimal.ROUND_UP);
            if (FVBSO.compareTo(TAB2[J]) === 1) {
                FVBSO = TAB2[J];
            }
            HFVBZSO = (((VBEZB.add(VBEZBSO)).divide(ZAHL100)).subtract(FVBSO)).setScale(2, BigDecimal.ROUND_DOWN);
            FVBZSO = (FVBZ.add((VBEZBSO).divide(ZAHL100))).setScale(0, BigDecimal.ROUND_UP);
            if (FVBZSO.compareTo(HFVBZSO) === 1) {
                FVBZSO = HFVBZSO.setScale(0, BigDecimal.ROUND_UP);
            }
            if (FVBZSO.compareTo(TAB3[J]) === 1) {
                FVBZSO = TAB3[J];
            }
            HFVBZ = ((VBEZB.divide(ZAHL100)).subtract(FVB)).setScale(2, BigDecimal.ROUND_DOWN);
            if (FVBZ.compareTo(HFVBZ) === 1) {
                FVBZ = HFVBZ.setScale(0, BigDecimal.ROUND_UP);
            }
        }
        MRE4ALTE();
    }

    //  Altersentlastungsbetrag (§ 39b Abs. 2 Satz 3 EStG), PAP Seite 18
    function MRE4ALTE() {
        if (ALTER1 === 0) {
            ALTE = BigDecimal.ZERO;
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
            BMG = ZRE4J.subtract(ZVBEZJ);
            //  Lt. PAP muss hier auf ganze EUR gerundet werden
            ALTE = (BMG.multiply(TAB4[K])).setScale(0, BigDecimal.ROUND_UP);
            HBALTE = TAB5[K];
            if (ALTE.compareTo(HBALTE) === 1) {
                ALTE = HBALTE;
            }
        }
    }

    //  Ermittlung des Jahresarbeitslohns nach Abzug der Freibeträge nach § 39 b Abs. 2 Satz 3 und 4 EStG, PAP Seite 20
    function MRE4ABZ() {
        ZRE4 = (ZRE4J.subtract(FVB).subtract(ALTE).subtract(JLFREIB).add(JLHINZU)).setScale(2, BigDecimal.ROUND_DOWN);
        if (ZRE4.compareTo(BigDecimal.ZERO) === -1) {
            ZRE4 = BigDecimal.ZERO;
        }
        ZRE4VP = ZRE4J;
        if (KENNVMT === 2) {
            ZRE4VP = ZRE4VP.subtract(ENTSCH.divide(ZAHL100)).setScale(2, BigDecimal.ROUND_DOWN);
        }
        ZVBEZ = ZVBEZJ.subtract(FVB).setScale(2, BigDecimal.ROUND_DOWN);
        if (ZVBEZ.compareTo(BigDecimal.ZERO) === -1) {
            ZVBEZ = BigDecimal.ZERO;
        }
    }

    //  Berechnung fuer laufende Lohnzahlungszeitraueme Seite 21
    function MBERECH() {
        MZTABFB();
        VFRB = ((ANP.add(FVB.add(FVBZ))).multiply(ZAHL100)).setScale(0, BigDecimal.ROUND_DOWN);
        MLSTJAHR();
        WVFRB = ((ZVE.subtract(GFB)).multiply(ZAHL100)).setScale(0, BigDecimal.ROUND_DOWN);
        if (WVFRB.compareTo(BigDecimal.ZERO) === -1)         //  WVFRB < 0
{
            WVFRB = BigDecimal.ZERO;
        }
        LSTJAHR = (ST.multiply(new BigDecimal(String(f)))).setScale(0, BigDecimal.ROUND_DOWN);
        UPLSTLZZ();
        UPVKVLZZ();
        if (ZKF.compareTo(BigDecimal.ZERO) === 1)         //  ZKF > 0
{
            ZTABFB = ZTABFB.add(KFB);
            MRE4ABZ();
            MLSTJAHR();
            JBMG = (ST.multiply(new BigDecimal(String(f)))).setScale(0, BigDecimal.ROUND_DOWN);
        } else {
            JBMG = LSTJAHR;
        }
        MSOLZ();
    }

    //  Ermittlung der festen Tabellenfreibeträge (ohne Vorsorgepauschale), PAP Seite 22
    function MZTABFB() {
        ANP = BigDecimal.ZERO;
        if (ZVBEZ.compareTo(BigDecimal.ZERO) >= 0 && ZVBEZ.compareTo(FVBZ) === -1) {
            FVBZ = new BigDecimal(String(ZVBEZ.longValue()));
        }
        if (STKL < 6) {
            if (ZVBEZ.compareTo(BigDecimal.ZERO) === 1) {
                if ((ZVBEZ.subtract(FVBZ)).compareTo(new BigDecimal("102")) === -1) {
                    ANP = (ZVBEZ.subtract(FVBZ)).setScale(0, BigDecimal.ROUND_UP);
                } else {
                    ANP = new BigDecimal("102");
                }
            }
        } else {
            FVBZ = BigDecimal.ZERO;
            FVBZSO = BigDecimal.ZERO;
        }
        if (STKL < 6) {
            if (ZRE4.compareTo(ZVBEZ) === 1) {
                if (ZRE4.subtract(ZVBEZ).compareTo(ZAHL1000) === -1) {
                    ANP = ANP.add(ZRE4).subtract(ZVBEZ).setScale(0, BigDecimal.ROUND_UP);
                } else {
                    ANP = ANP.add(ZAHL1000);
                }
            }
        }
        KZTAB = 1;
        if (STKL === 1) {
            SAP = new BigDecimal("36");
            KFB = (ZKF.multiply(new BigDecimal("8388"))).setScale(0, BigDecimal.ROUND_DOWN);
            //  Geändert für 2021
        } else {
            if (STKL === 2) {
                EFA = new BigDecimal("1908");
                SAP = new BigDecimal("36");
                KFB = (ZKF.multiply(new BigDecimal("8388"))).setScale(0, BigDecimal.ROUND_DOWN);
                //  Geändert für 2021
            } else {
                if (STKL === 3) {
                    KZTAB = 2;
                    SAP = new BigDecimal("36");
                    KFB = (ZKF.multiply(new BigDecimal("8388"))).setScale(0, BigDecimal.ROUND_DOWN);
                    //  Geändert für 2021
                } else {
                    if (STKL === 4) {
                        SAP = new BigDecimal("36");
                        KFB = (ZKF.multiply(new BigDecimal("4194"))).setScale(0, BigDecimal.ROUND_DOWN);
                        //  Geändert für 2021
                    } else {
                        if (STKL === 5) {
                            SAP = new BigDecimal("36");
                            KFB = BigDecimal.ZERO;
                        } else {
                            KFB = BigDecimal.ZERO;
                        }
                    }
                }
            }
        }
        ZTABFB = (EFA.add(ANP).add(SAP).add(FVBZ)).setScale(2, BigDecimal.ROUND_DOWN);
    }

    //  Ermittlung Jahreslohnsteuer, PAP Seite 23
    function MLSTJAHR() {
        UPEVP();
        if (KENNVMT !== 1) {
            ZVE = (ZRE4.subtract(ZTABFB).subtract(VSP)).setScale(2, BigDecimal.ROUND_DOWN);
            UPMLST();
        } else {
            ZVE = (ZRE4.subtract(ZTABFB).subtract(VSP).subtract((VMT).divide(ZAHL100)).subtract((VKAPA).divide(ZAHL100))).setScale(2, BigDecimal.ROUND_DOWN);
            if (ZVE.compareTo(BigDecimal.ZERO) === -1) {
                ZVE = ZVE.add(VMT.divide(ZAHL100)).add(VKAPA.divide(ZAHL100)).divide(ZAHL5).setScale(2, BigDecimal.ROUND_DOWN);
                UPMLST();
                ST = (ST.multiply(ZAHL5)).setScale(0, BigDecimal.ROUND_DOWN);
            } else {
                UPMLST();
                STOVMT = ST;
                ZVE = (ZVE.add(((VMT.add(VKAPA)).divide(ZAHL500)))).setScale(2, BigDecimal.ROUND_DOWN);
                UPMLST();
                ST = (((ST.subtract(STOVMT)).multiply(ZAHL5)).add(STOVMT)).setScale(0, BigDecimal.ROUND_DOWN);
            }
        }
    }

    //  PAP Seite 24
    function UPVKVLZZ() {
        UPVKV();
        JW = VKV;
        UPANTEIL();
        VKVLZZ = ANTEIL1;
    }

    //  PAP Seite 24
    function UPVKV() {
        if (PKV > 0) {
            if (VSP2.compareTo(VSP3) === 1) {
                VKV = VSP2.multiply(ZAHL100);
            } else {
                VKV = VSP3.multiply(ZAHL100);
            }
        } else {
            VKV = BigDecimal.ZERO;
        }
    }

    //  PAP Seite 25
    function UPLSTLZZ() {
        JW = LSTJAHR.multiply(ZAHL100);
        UPANTEIL();
        LSTLZZ = ANTEIL1;
    }

    //  Ermittlung der Jahreslohnsteuer aus dem Einkommensteuertarif. PAP Seite 26
    function UPMLST() {
        if (ZVE.compareTo(ZAHL1) === -1) {
            ZVE = BigDecimal.ZERO;
            X = BigDecimal.ZERO;
        } else {
            X = (ZVE.divide(new BigDecimal(String(KZTAB)))).setScale(0, BigDecimal.ROUND_DOWN);
        }
        if (STKL < 5) {
            //  Änderung für 2021
            UPTAB21();
        } else {
            MST5_6();
        }
    }

    //      Vorsorgepauschale (§ 39b Absatz 2 Satz 5 Nummer 3 und Absatz 4 EStG) PAP Seite 27
    function UPEVP() {
        if (KRV > 1)         //  &lt; = < &gt; = >
{
            VSP1 = BigDecimal.ZERO;
        } else {
            if (ZRE4VP.compareTo(BBGRV) === 1) {
                ZRE4VP = BBGRV;
            }
            VSP1 = (TBSVORV.multiply(ZRE4VP)).setScale(2, BigDecimal.ROUND_DOWN);
            VSP1 = (VSP1.multiply(RVSATZAN)).setScale(2, BigDecimal.ROUND_DOWN);
        }
        VSP2 = (ZRE4VP.multiply(new BigDecimal("0.12"))).setScale(2, BigDecimal.ROUND_DOWN);
        if (STKL === 3) {
            VHB = new BigDecimal("3000");
        } else {
            VHB = new BigDecimal("1900");
        }
        if (VSP2.compareTo(VHB) === 1) {
            VSP2 = VHB;
        }
        VSPN = (VSP1.add(VSP2)).setScale(0, BigDecimal.ROUND_UP);
        MVSP();
        if (VSPN.compareTo(VSP) === 1) {
            VSP = VSPN.setScale(2, BigDecimal.ROUND_DOWN);
        }
    }

    //  Vorsorgepauschale (§39b Abs. 2 Satz 5 Nr 3 EStG) Vergleichsberechnung fuer Guenstigerpruefung, PAP Seite 28
    function MVSP() {
        if (ZRE4VP.compareTo(BBGKVPV) === 1) {
            ZRE4VP = BBGKVPV;
        }
        if (PKV > 0) {
            if (STKL === 6) {
                VSP3 = BigDecimal.ZERO;
            } else {
                VSP3 = PKPV.multiply(ZAHL12).divide(ZAHL100);
                if (PKV === 2) {
                    VSP3 = VSP3.subtract(ZRE4VP.multiply(KVSATZAG.add(PVSATZAG))).setScale(2, BigDecimal.ROUND_DOWN);
                }
            }
        } else {
            VSP3 = ZRE4VP.multiply(KVSATZAN.add(PVSATZAN)).setScale(2, BigDecimal.ROUND_DOWN);
        }
        VSP = VSP3.add(VSP1).setScale(0, BigDecimal.ROUND_UP);
    }

    //  Lohnsteuer fuer die Steuerklassen V und VI (§ 39b Abs. 2 Satz 7 EStG), PAP Seite 29
    function MST5_6() {
        ZZX = X;
        if (ZZX.compareTo(W2STKL5) === 1) {
            ZX = W2STKL5;
            UP5_6();
            if (ZZX.compareTo(W3STKL5) === 1) {
                ST = (ST.add((W3STKL5.subtract(W2STKL5)).multiply(new BigDecimal("0.42")))).setScale(0, BigDecimal.ROUND_DOWN);
                ST = (ST.add((ZZX.subtract(W3STKL5)).multiply(new BigDecimal("0.45")))).setScale(0, BigDecimal.ROUND_DOWN);
            } else {
                ST = (ST.add((ZZX.subtract(W2STKL5)).multiply(new BigDecimal("0.42")))).setScale(0, BigDecimal.ROUND_DOWN);
            }
        } else {
            ZX = ZZX;
            UP5_6();
            if (ZZX.compareTo(W1STKL5) === 1) {
                VERGL = ST;
                ZX = W1STKL5;
                UP5_6();
                HOCH = (ST.add((ZZX.subtract(W1STKL5)).multiply(new BigDecimal("0.42")))).setScale(0, BigDecimal.ROUND_DOWN);
                //  Neuer Wert 2014
                if (HOCH.compareTo(VERGL) === -1) {
                    ST = HOCH;
                } else {
                    ST = VERGL;
                }
            }
        }
    }

    //  Unterprogramm zur Lohnsteuer fuer die Steuerklassen V und VI (§ 39b Abs. 2 Satz 7 EStG), PAP Seite 30
    function UP5_6() {
        X = (ZX.multiply(new BigDecimal("1.25"))).setScale(2, BigDecimal.ROUND_DOWN);
        //  Änderung für 2021
        UPTAB21();
        ST1 = ST;
        X = (ZX.multiply(new BigDecimal("0.75"))).setScale(2, BigDecimal.ROUND_DOWN);
        //  Änderung für 2021
        UPTAB21();
        ST2 = ST;
        DIFF = (ST1.subtract(ST2)).multiply(ZAHL2);
        MIST = (ZX.multiply(new BigDecimal("0.14"))).setScale(0, BigDecimal.ROUND_DOWN);
        if (MIST.compareTo(DIFF) === 1) {
            ST = MIST;
        } else {
            ST = DIFF;
        }
    }

    //  Solidaritaetszuschlag, PAP Seite 31
    function MSOLZ() {
        SOLZFREI = (SOLZFREI.multiply(new BigDecimal(String(KZTAB))));
        if (JBMG.compareTo(SOLZFREI) === 1) {
            SOLZJ = (JBMG.multiply(new BigDecimal("5.5"))).divide(ZAHL100).setScale(2, BigDecimal.ROUND_DOWN);
            SOLZMIN = (JBMG.subtract(SOLZFREI)).multiply(new BigDecimal("11.9")).divide(ZAHL100).setScale(2, BigDecimal.ROUND_DOWN);
            //  Änderung für 2021
            if (SOLZMIN.compareTo(SOLZJ) === -1) {
                SOLZJ = SOLZMIN;
            }
            JW = SOLZJ.multiply(ZAHL100).setScale(0, BigDecimal.ROUND_DOWN);
            UPANTEIL();
            SOLZLZZ = ANTEIL1;
        } else {
            SOLZLZZ = BigDecimal.ZERO;
        }
        if (R > 0) {
            JW = JBMG.multiply(ZAHL100);
            UPANTEIL();
            BK = ANTEIL1;
        } else {
            BK = BigDecimal.ZERO;
        }
    }

    //  Anteil von Jahresbetraegen fuer einen LZZ (§ 39b Abs. 2 Satz 9 EStG), PAP Seite 32
    function UPANTEIL() {
        if (LZZ === 1) {
            ANTEIL1 = JW;
        } else {
            if (LZZ === 2) {
                ANTEIL1 = JW.divide(ZAHL12, 0, BigDecimal.ROUND_DOWN);
            } else {
                if (LZZ === 3) {
                    ANTEIL1 = (JW.multiply(ZAHL7)).divide(ZAHL360, 0, BigDecimal.ROUND_DOWN);
                } else {
                    ANTEIL1 = JW.divide(ZAHL360, 0, BigDecimal.ROUND_DOWN);
                }
            }
        }
    }

    //  Berechnung sonstiger Bezuege nach § 39b Abs. 3 Saetze 1 bis 8 EStG), PAP Seite 33
    function MSONST() {
        LZZ = 1;
        if (ZMVB === 0) {
            ZMVB = 12;
        }
        if (SONSTB.compareTo(BigDecimal.ZERO) === 0) {
            VKVSONST = BigDecimal.ZERO;
            LSTSO = BigDecimal.ZERO;
            STS = BigDecimal.ZERO;
            SOLZS = BigDecimal.ZERO;
            BKS = BigDecimal.ZERO;
        } else {
            MOSONST();
            UPVKV();
            VKVSONST = VKV;
            ZRE4J = ((JRE4.add(SONSTB)).divide(ZAHL100)).setScale(2, BigDecimal.ROUND_DOWN);
            ZVBEZJ = ((JVBEZ.add(VBS)).divide(ZAHL100)).setScale(2, BigDecimal.ROUND_DOWN);
            VBEZBSO = STERBE;
            MRE4SONST();
            MLSTJAHR();
            WVFRBM = (ZVE.subtract(GFB)).multiply(ZAHL100).setScale(2, BigDecimal.ROUND_DOWN);
            if (WVFRBM.compareTo(BigDecimal.ZERO) === -1)             //  WVFRBM < 0
{
                WVFRBM = BigDecimal.ZERO;
            }
            UPVKV();
            VKVSONST = VKV.subtract(VKVSONST);
            LSTSO = ST.multiply(ZAHL100);
            //      lt. PAP muss hier auf ganze EUR aufgerundet werden,
            //                     allerdings muss der Wert in Cent vorgehalten werden,
            //                     deshalb nach dem Aufrunden auf ganze EUR durch 'divide(ZAHL100, 0, BigDecimal.ROUND_DOWN)'
            //                     wieder die Multiplikation mit 100
            STS = LSTSO.subtract(LSTOSO).multiply(new BigDecimal(String(f))).divide(ZAHL100, 0, BigDecimal.ROUND_DOWN).multiply(ZAHL100);
            if (STS.compareTo(BigDecimal.ZERO) === -1) {
                STS = BigDecimal.ZERO;
            }
            MSOLZSTS();
            //  Neu ab 2021
            if (R > 0) {
                BKS = STS;
            } else {
                BKS = BigDecimal.ZERO;
            }
        }
    }

    //  Berechnung des SolZ auf sonstige Bezüge, PAP Seite 34, Neu ab 2021
    function MSOLZSTS() {
        if (ZKF.compareTo(BigDecimal.ZERO) === 1)         //  ZKF > 0
{
            SOLZSZVE = ZVE.subtract(KFB);
        } else {
            SOLZSZVE = ZVE;
        }
        if (SOLZSZVE.compareTo(BigDecimal.ONE) === -1)         //  SOLZSZVE < 1
{
            SOLZSZVE = BigDecimal.ZERO;
            X = BigDecimal.ZERO;
        } else {
            X = SOLZSZVE.divide(new BigDecimal(String(KZTAB)), 0, BigDecimal.ROUND_DOWN);
        }
        if (STKL < 5)         //  STKL < 5
{
            UPTAB21();
        } else {
            MST5_6();
        }
        SOLZSBMG = ST.multiply(new BigDecimal(String(f))).setScale(0, BigDecimal.ROUND_DOWN);
        if (SOLZSBMG.compareTo(SOLZFREI) === 1)         //  SOLZSBMG > SOLZFREI
{
            SOLZS = STS.multiply(new BigDecimal("5.5")).divide(ZAHL100, 0, BigDecimal.ROUND_DOWN);
        } else {
            SOLZS = BigDecimal.ZERO;
        }
    }

    //  Berechnung der Verguetung fuer mehrjaehrige Taetigkeit nach § 39b Abs. 3 Satz 9 und 10 EStG), PAP Seite 35
    function MVMT() {
        if (VKAPA.compareTo(BigDecimal.ZERO) === -1) {
            VKAPA = BigDecimal.ZERO;
        }
        if ((VMT.add(VKAPA)).compareTo(BigDecimal.ZERO) === 1) {
            if (LSTSO.compareTo(BigDecimal.ZERO) === 0) {
                MOSONST();
                LST1 = LSTOSO;
            } else {
                LST1 = LSTSO;
            }
            VBEZBSO = STERBE.add(VKAPA);
            ZRE4J = ((JRE4.add(SONSTB).add(VMT).add(VKAPA)).divide(ZAHL100)).setScale(2, BigDecimal.ROUND_DOWN);
            ZVBEZJ = ((JVBEZ.add(VBS).add(VKAPA)).divide(ZAHL100)).setScale(2, BigDecimal.ROUND_DOWN);
            KENNVMT = 2;
            MRE4SONST();
            MLSTJAHR();
            LST3 = ST.multiply(ZAHL100);
            MRE4ABZ();
            ZRE4VP = ZRE4VP.subtract(JRE4ENT.divide(ZAHL100)).subtract(SONSTENT.divide(ZAHL100));
            KENNVMT = 1;
            MLSTJAHR();
            LST2 = ST.multiply(ZAHL100);
            STV = LST2.subtract(LST1);
            LST3 = LST3.subtract(LST1);
            if (LST3.compareTo(STV) === -1) {
                STV = LST3;
            }
            if (STV.compareTo(BigDecimal.ZERO) === -1) {
                STV = BigDecimal.ZERO;
            } else {
                //
                //                     lt. PAP muss hier auf ganze EUR abgerundet werden.
                //                    Allerdings muss auch hier der Wert in Cent vorgehalten werden,
                //                     weshalb nach dem Aufrunden auf ganze EUR durch 'divide(ZAHL100, 0, BigDecimal.ROUND_DOWN)'
                //                     wieder die Multiplikation mit 100 erfolgt.
                //
                STV = STV.multiply(new BigDecimal(String(f))).divide(ZAHL100, 0, BigDecimal.ROUND_DOWN).multiply(ZAHL100);
            }
            //  Beginn Neu 2021
            SOLZVBMG = STV.divide(ZAHL100, 0, BigDecimal.ROUND_DOWN).add(JBMG);
            if (SOLZVBMG.compareTo(SOLZFREI) === 1)             //  SOLZVBMG > SOLZFREI
{
                SOLZV = STV.multiply(new BigDecimal("5.5")).divide(ZAHL100, 0, BigDecimal.ROUND_DOWN);
            } else {
                SOLZV = BigDecimal.ZERO;
            }
            //  Ende Neu 2021
            if (R > 0) {
                BKV = STV;
            } else {
                BKV = BigDecimal.ZERO;
            }
        } else {
            STV = BigDecimal.ZERO;
            SOLZV = BigDecimal.ZERO;
            BKV = BigDecimal.ZERO;
        }
    }

    //  Sonderberechnung ohne sonstige Bezüge für Berechnung bei sonstigen Bezügen oder Vergütung für mehrjährige Tätigkeit, PAP Seite 36
    function MOSONST() {
        ZRE4J = (JRE4.divide(ZAHL100)).setScale(2, BigDecimal.ROUND_DOWN);
        ZVBEZJ = (JVBEZ.divide(ZAHL100)).setScale(2, BigDecimal.ROUND_DOWN);
        JLFREIB = JFREIB.divide(ZAHL100, 2, BigDecimal.ROUND_DOWN);
        JLHINZU = JHINZU.divide(ZAHL100, 2, BigDecimal.ROUND_DOWN);
        MRE4();
        MRE4ABZ();
        ZRE4VP = ZRE4VP.subtract(JRE4ENT.divide(ZAHL100));
        MZTABFB();
        VFRBS1 = ((ANP.add(FVB.add(FVBZ))).multiply(ZAHL100)).setScale(2, BigDecimal.ROUND_DOWN);
        MLSTJAHR();
        WVFRBO = ((ZVE.subtract(GFB)).multiply(ZAHL100)).setScale(2, BigDecimal.ROUND_DOWN);
        if (WVFRBO.compareTo(BigDecimal.ZERO) === -1) {
            WVFRBO = BigDecimal.ZERO;
        }
        LSTOSO = ST.multiply(ZAHL100);
    }

    //  Sonderberechnung mit sonstige Bezüge für Berechnung bei sonstigen Bezügen oder Vergütung für mehrjährige Tätigkeit, PAP Seite 37
    function MRE4SONST() {
        MRE4();
        FVB = FVBSO;
        MRE4ABZ();
        ZRE4VP = ZRE4VP.subtract(JRE4ENT.divide(ZAHL100)).subtract(SONSTENT.divide(ZAHL100));
        FVBZ = FVBZSO;
        MZTABFB();
        VFRBS2 = ((((ANP.add(FVB).add(FVBZ))).multiply(ZAHL100))).subtract(VFRBS1);
    }

    //  Komplett Neu 2020
    //  Tarifliche Einkommensteuer §32a EStG, PAP Seite 38
    function UPTAB21() {
        //  Änderung für 2021
        if (X.compareTo(GFB.add(ZAHL1)) === -1) {
            ST = BigDecimal.ZERO;
        } else {
            if (X.compareTo(new BigDecimal("14754")) === -1)             //  Geändert für 2021
{
                Y = (X.subtract(GFB)).divide(ZAHL10000, 6, BigDecimal.ROUND_DOWN);
                RW = Y.multiply(new BigDecimal("995.21"));
                //  Geändert für 2021
                RW = RW.add(new BigDecimal("1400"));
                ST = (RW.multiply(Y)).setScale(0, BigDecimal.ROUND_DOWN);
            } else {
                if (X.compareTo(new BigDecimal("57919")) === -1)                 //  Geändert für 2021
{
                    Y = (X.subtract(new BigDecimal("14753"))).divide(ZAHL10000, 6, BigDecimal.ROUND_DOWN);
                    //  Geändert für 2021
                    RW = Y.multiply(new BigDecimal("208.85"));
                    //  Geändert für 2021
                    RW = RW.add(new BigDecimal("2397"));
                    RW = RW.multiply(Y);
                    ST = (RW.add(new BigDecimal("950.96"))).setScale(0, BigDecimal.ROUND_DOWN);
                    //  Geändert für 2021
                } else {
                    if (X.compareTo(new BigDecimal("274613")) === -1)                     //  Geändert für 2021
{
                        ST = ((X.multiply(new BigDecimal("0.42"))).subtract(new BigDecimal("9136.63"))).setScale(0, BigDecimal.ROUND_DOWN);
                        //  Geändert für 2021
                    } else {
                        ST = ((X.multiply(new BigDecimal("0.45"))).subtract(new BigDecimal("17374.99"))).setScale(0, BigDecimal.ROUND_DOWN);
                        //  Geändert für 2021
                    }
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
        STV: STV,
        VKVLZZ: VKVLZZ,
        VKVSONST: VKVSONST,
        VFRB: VFRB,
        VFRBS1: VFRBS1,
        VFRBS2: VFRBS2,
        WVFRB: WVFRB,
        WVFRBO: WVFRBO,
        WVFRBM: WVFRBM
    };
};
