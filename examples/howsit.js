const hydraExpress = require('hydra-express');
const hydra = hydraExpress.getHydra();
const express = hydraExpress.getExpress();
let api = express.Router();

function main() {
  hydraExpress.init(`${__dirname}/config/howsit-config.json`, () => {
    api.get('', (req, res) => {
      res.send(`Eh, braddah, howsit! ${hydra.getServiceName()} - ${hydra.getInstanceID()}`);
    });
    hydraExpress.registerRoutes({
      '/': api
    });
  });
};

main();
