import { asValue, createContainer } from "awilix";
import { logger } from "../utils";

const container = createContainer({
  injectionMode: "CLASSIC",
  strict: true,
});

let isInjected = false;

const injectDependencies = () => {
  if (!isInjected) {
    container.register({
      logger: asValue(logger),
    });

    isInjected = true;
  }

  logger.info("dependencies injected successfully");
  return container;
};

export default injectDependencies;
