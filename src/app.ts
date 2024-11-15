import express from "express";
import CONFIG from "./config";
import injectDependencies from "./ioc";
import { globalErrorHandler } from "./middlewares";
import { Request, Response } from "express";

const app = express();

if (CONFIG.NODE_ENV === "test") {
  injectDependencies();
}

app.get("/home", (req: Request, res: Response) => {
  res.send("Welcome to Service Template");
});

app.use(globalErrorHandler);

export default app;
