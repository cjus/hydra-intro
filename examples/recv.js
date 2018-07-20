const hydraExpress = require('hydra-express');
const hydra = hydraExpress.getHydra();

function main() {
  hydraExpress.init(`${__dirname}/config/recv-config.json`, () => {
    hydra.on('message', (message) => {
      console.log(message);
    });
  });
};

main();
