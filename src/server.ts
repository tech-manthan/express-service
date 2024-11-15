import app from "./app";
import CONFIG from "./config";
import injectDependencies from "./ioc";
import { logger } from "./utils";

function startServer() {
  try {
    const PORT = CONFIG.PORT || 5501;

    injectDependencies();

    app.listen(PORT, () => {
      logger.info(`server listening on port ${PORT}`);
    });
  } catch (err) {
    if (err instanceof Error) {
      logger.error(err.message);
      process.exit(1);
    }
  }
}

startServer();
