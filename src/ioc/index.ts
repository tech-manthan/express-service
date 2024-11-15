import { asValue, createContainer } from "awilix";
import { logger } from "../utils";
import { PrismaClient } from "@prisma/client";

const container = createContainer({
  injectionMode: "CLASSIC",
  strict: true,
});

let isInjected = false;

const prismaClient = new PrismaClient();

const injectDependencies = () => {
  if (!isInjected) {
    container.register({
      prismaClient: asValue(prismaClient),
      logger: asValue(logger),
    });

    isInjected = true;
  }

  logger.info("dependencies injected successfully");
  return container;
};

export default injectDependencies;
