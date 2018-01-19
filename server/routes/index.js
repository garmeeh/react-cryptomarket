const express = require('express');
const router = express.Router();
const Client = require('node-rest-client').Client;

const client = new Client();

router.get('/list', (req, res, next) => {
  client.get(
    'https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=30',
    (data, response) => {
      res.setHeader('Content-Type', 'application/json');
      res.send(data);
    }
  );
});

/*
  Need to create a look up for this endpoint:
  -> https://min-api.cryptocompare.com/data/all/coinlist
  It can be server side only and doesn't need to be to often,
  the purpose will be to extract the id from the list based
  on the symbol so that we can reference further endpoints
  from this provider.
*/

router.get('/coin/:symbol', (req, res, next) => {
  const symbol = req.params.symbol;
  client.get(
    `https://www.cryptocompare.com/api/data/coinsnapshot/?fsym=${symbol}&tsym=USD`,
    (data, response) => {
      res.setHeader('Content-Type', 'application/json');
      res.send(data);
    }
  );
});

module.exports = router;
