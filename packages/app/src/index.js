import { Launch } from "@lightningjs/sdk";
import { logger } from "@sky-uk/lightning-logger";
import { App } from "./App";

const FILE_NAME = "index.js";

export async function launchApp() {
  logger.setConfig({ level: 4, joinArgs: true });

  let settings = await import("../settings.common.json");

  logger.info(FILE_NAME, "***************************************************************");
  logger.info(FILE_NAME, "*");
  logger.info(FILE_NAME, "* LAUNCHING PLATFORM TEST APP");
  logger.info(FILE_NAME, "*");
  logger.info(FILE_NAME, "***************************************************************");

  const app = Launch(App, settings.appSettings, settings.platformSettings);
  document.body.appendChild(app.stage.getCanvas());
}

window.onload = launchApp;

