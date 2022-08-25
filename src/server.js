'use strict';
console.log('server.js');

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = 5000;

// MiddleWare
//app.use(cors());
//app.use(morgan('dev'));
// kad gautame requsest body galetume matyti json atsiustus duomenis turim ijungi json atkodavima
//app.use(express.json());
// atkoduoti requsest body form data
//app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => console.log('<h1>server on port </h1>' + PORT));