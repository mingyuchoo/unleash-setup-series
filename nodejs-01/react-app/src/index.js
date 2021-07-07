import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { UnleashClient } from "unleash-proxy-client";

const unleash = new UnleashClient({
  url: "http://localhost:4000/proxy",
  clientKey: "proxy-secret-key-1",
  refreshInterval: 2,
  appName: "react-app",
});
unleash.updateContext({ userId: "react-app" });
unleash.start();

ReactDOM.render(<App unleash={unleash} />, document.getElementById("root"));
