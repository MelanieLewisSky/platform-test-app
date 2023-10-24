import { Router, Settings, Utils } from "@lightningjs/sdk";
import { Lifecycle } from "@firebolt-js/sdk";
import { Background, HeroType } from "@sky-uk/lightning-tiles-ui";
import { logger } from "@sky-uk/lightning-logger";
import { full } from "./utils/size";
import { getASLite } from "@pta/as-lite";
import {
  Launch, HDMITest,
} from "./pages";

const FILE_NAME = "App.js";

export const routes = {
  root: "launch",
  routes: [
    {
      path: "launch",
      component: Launch,
    },
    {
      path: "hdmitest",
      component: HDMITest,
    }
  ],
}

export class App extends Router.App {
  static _template() {
    const { w, h } = Settings.get("app", "stage");
    return {
      w,
      h,
      BackgroundImage: {
        w: full,
        h: full,
        type: Background,
        heroMask: HeroType.NONE,
        heroImage: Utils.asset("images/background.jpg"),
      },
      Pages: {
        forceZIndexContext: true,
      },
     }
  }

  async _init() {
    /*
    const asLite = getASLite();

    const deviceInformation = await asLite.getSystemDeviceInformation();
    const inputs = await asLite.getSystemInputs();

    logger.debug(FILE_NAME, "deviceInformation:", deviceInformation);
    logger.debug(FILE_NAME, "inputs:", inputs);
    */
  }

  _build() {
    this._backgroundImage = this.tag("BackgroundImage");
  }

  _setup() {
    Router.startRouter(routes);
    Lifecycle.ready();
  }

  $showBackground(visible) {
    if (visible) {
      this._backgroundImage.patch({ visible: true });
      this._backgroundImage.patch({ alpha: 1 });
    } else {
      this._backgroundImage.patch({ visible: false });
      this._backgroundImage.patch({ alpha: 0 });
    }
  }
}
