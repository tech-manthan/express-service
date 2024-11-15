import express from "express";
import CONFIG from "./config";
import injectDependencies from "./ioc";
import { globalErrorHandler } from "./middlewares";

const app = express();

if (CONFIG.NODE_ENV === "test") {
  injectDependencies();
}

app.use(globalErrorHandler);

export default app;
