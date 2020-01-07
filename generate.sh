#!/bin/bash
node helper/convert.js helper/Lohnsteuer2006Big.xml >lohnsteuer/lohnsteuer2006.js && \
node helper/convert.js helper/Lohnsteuer2007Big.xml >lohnsteuer/lohnsteuer2007.js && \
node helper/convert.js helper/Lohnsteuer2008Big.xml >lohnsteuer/lohnsteuer2008.js && \
node helper/convert.js helper/Lohnsteuer2009Big.xml >lohnsteuer/lohnsteuer2009.js && \
node helper/convert.js helper/Lohnsteuer2010Big.xml >lohnsteuer/lohnsteuer2010.js && \
node helper/convert.js helper/Lohnsteuer2011BisNovember.xml >lohnsteuer/lohnsteuer2011BisNov.js && \
node helper/convert.js helper/Lohnsteuer2011Dezember.xml >lohnsteuer/lohnsteuer2011Dez.js && \
node helper/convert.js helper/Lohnsteuer2012.xml >lohnsteuer/lohnsteuer2012.js && \
node helper/convert.js helper/Lohnsteuer2013_2.xml >lohnsteuer/lohnsteuer2013.js && \
node helper/convert.js helper/Lohnsteuer2014.xml >lohnsteuer/lohnsteuer2014.js && \
node helper/convert.js helper/Lohnsteuer2015BisNovember.xml >lohnsteuer/lohnsteuer2015BisNov.js && \
node helper/convert.js helper/Lohnsteuer2015Dezember.xml >lohnsteuer/lohnsteuer2015Dez.js && \
node helper/convert.js helper/Lohnsteuer2016.xml >lohnsteuer/lohnsteuer2016.js && \
node helper/convert.js helper/Lohnsteuer2017.xml >lohnsteuer/lohnsteuer2017.js && \
node helper/convert.js helper/Lohnsteuer2018.xml >lohnsteuer/lohnsteuer2018.js && \
node helper/convert.js helper/Lohnsteuer2019.xml >lohnsteuer/lohnsteuer2019.js && \
node helper/convert.js helper/Lohnsteuer2020.xml >lohnsteuer/lohnsteuer2020.js && \
echo "done"
