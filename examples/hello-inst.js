const hydraExpress = require('hydra-express');
const hydra = hydraExpress.getHydra();
const express = hydraExpress.getExpress();
let api = express.Router();

function main() {
  hydraExpress.init(`${__dirname}/config/hello-inst-config.json`, () => {
    api.get('', (req, res) => {
      res.send(`hello from ${hydra.getServiceName()} - ${hydra.getInstanceID()}`);
    });
    hydraExpress.registerRoutes({
      '/': api
    });
  });
};

main();
