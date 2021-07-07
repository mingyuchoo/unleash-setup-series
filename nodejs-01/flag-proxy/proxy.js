const { createApp } = require("@unleash/proxy");

const app = createApp({
  unleashUrl: "http://localhost:4242/api/",
  unleashApiToken: "<unleash-server-api-key>",
  proxySecrets: ["proxy-secret", "proxy-secret-key-1", "proxy-secret-key-2"],
  refreshInterval: 1000,
  logLevel: "debug",
  //projectName: 'test-flag-project',
  //environment: 'development',
});

app.listen(4000, () =>
  // eslint-disable-next-line no-console
  console.log(`Unleash Proxy listening on http://localhost:${4000}/proxy`)
);
