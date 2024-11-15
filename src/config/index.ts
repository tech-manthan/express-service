import dotenv from "dotenv";
import path from "node:path";

dotenv.config({
  path: path.join(__dirname, `../../.env.${process.env.NODE_ENV ?? "dev"}`),
});

const { NODE_ENV, PORT } = process.env;

const CONFIG = {
  NODE_ENV,
  PORT,
} as const;

export default CONFIG;
