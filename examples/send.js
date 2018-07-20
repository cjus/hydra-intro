const hydraExpress = require('hydra-express');
const hydra = hydraExpress.getHydra();

function main() {
  hydraExpress.init(`${__dirname}/config/send-config.json`, () => {
    let from = `${hydra.getServiceName()}@${hydra.getInstanceID()}`;
    let greetingMessage = hydra.createUMFMessage({
      to: 'recv:/',
      from: from,
      body: {
        greeting: `Eh, braddah, ${from} here, howsit!`
      }
    });
    hydra.sendMessage(greetingMessage);
  });
};

main();
