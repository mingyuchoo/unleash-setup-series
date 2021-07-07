const unleash = require("unleash-server");
unleash
  .start({
    db: {
      ssl: false,
      host: "localhost",
      port: 5432,
      database: "postgres",
      user: "postgres",
      password: "postgrespassword",
      pool: {
        min: 0,
        max: 4,
        idleTimeoutMillis: 30000,
      },
    },
    server: {
      port: 4242,
    },
    enableRequestLogger: true,
  })
  .then((unleash) => {
    console.log(
      `Unleash started on http://localhost:${unleash.app.get("port")}`
    );
  });
