import express from "express";
import CONFIG from "./config";
import injectDependencies from "./ioc";

const app = express();

if (CONFIG.NODE_ENV === "test") {
  injectDependencies();
}

export default app;
