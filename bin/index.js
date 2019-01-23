#!/usr/bin/env node

'use-strict';

const boxen = require('boxen');
const chalk= require('chalk');


const options = {
padding: 1,
margin: 1,
borderStyle: "round",
align: "center",
float: "center",
dimBorder: "true",
};

const data= {
    "br": "\n",
    "name": "Julie Vanderbyse",
    "handle": "JVDB",
    "work": "Junior Web Developper",
    "github": "https://github.com/JVDB18",
    "twitter": "https://twitter.com/VanderbyseJ",

};

const av3=".,_------.___,   \' r'"
const av4="', '-._a      '-' .'"
const av5="'.    '-'Y \._  /"
const av6="'--;____'--.'-,"
const av7="    /..'       '''"

const output=
`${av3}
${av4}
${av5}
${av6}
${av7}
${data.br}
${data.name}
${data.work}
${data.github}
${data.twitter}`;

console.log(chalk.cyanBright(boxen(output, options)));