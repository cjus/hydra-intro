const hydraExpress = require('hydra-express');
const express = hydraExpress.getExpress();
let api = express.Router();

function main() {
  hydraExpress.init(`${__dirname}/config/hello-config.json`, () => {
    api.get('', (req, res) => {
      res.send('Hello World');
    });
    hydraExpress.registerRoutes({
      '/': api
    });
  });
};

main();
