const http = require('http');
const url = require('url');
const queryString = require('querystring');
var eventEmitter = require('events').EventEmitter;

const express = require('express')
const app = express();

    app.get('/', function(req, res) {
      res.setHeader('Content-Type','text/plain');
      res.send(`
      Bonjour M. Burdy.
      Bienvenue sur mon tutoriel Node js ?
    `);
    });
    
    app.get('/sous-sol', function(req, res) {
      res.setHeader('Content-Type', 'text/plain');
      res.send('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
    });
    
    app.get('/etage/1/chambre', function(req, res) {
      res.setHeader('Content-Type', 'text/plain');
      res.send('Hé ho, c\'est privé ici !');
    });
    
    app.listen(8889);
