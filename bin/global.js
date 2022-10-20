#!/usr/bin/env node

const { pass } = require("../src/index");

let passWord = pass.genPass(30);
console.log(passWord);
