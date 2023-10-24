import { Lightning, Settings } from "@lightningjs/sdk";
import { logger } from "@sky-uk/lightning-logger";
import { TextButton } from "@sky-uk/lightning-tiles-ui";
import { getASLite } from "@pta/as-lite";
import { half } from "../utils/size";
import { TextStyles } from "../constants";

const FILE_NAME = "HDMITest.js"

export class HDMITest extends Lightning.Component {
  static _template() {
    const { w, h } = Settings.get("app", "stage");

    return {
      w,
      h,
      Title: {
        x: half,
        mountX: 0.5,
        y: 120,
        text: {
          ...TextStyles.heading,
          text: "HDMI Tests",
          textAlign: "center",
        },
      },
      Question: {
        x: half,
        mountX: 0.5,
        y: 300,
        text: {
          ...TextStyles.subtitle,
          text: "A question",
          textAlign: "center",
        }
      },
      ContinueButton: {
        x: half,
        y: 500,
        w: 365,
        mountX: 0.5,
        type: TextButton,
        label: "Continue",
        alignment: "center",
      },
      HDMIInformation: {
        x: 40,
        y: 900,
        w: 200,
        HDM1: {
          y: 0,
          HDM1Label: {
            text: {
              ...TextStyles.subtitle,
              text: "HDMI1:",
            },
          },
          HDM1Text: {
            x: 120,
            text: {
              ...TextStyles.subtitle,
              text: this.bindProp("hdmi1Port"),
            }
          },
        },
        HDM2: {
          y: 30,
          HDM2Label: {
            text: {
              ...TextStyles.subtitle,
              text: "HDMI2:",
            },
          },
          HDM2Text: {
            x: 120,
            text: {
              ...TextStyles.subtitle,
              text: this.bindProp("hdmi2Port"),
            }
          },
        },
        HDM3: {
          y: 60,
          HDM1Label: {
            text: {
              ...TextStyles.subtitle,
              text: "HDMI3:",
            },
          },
          HDM3Text: {
            x: 120,
            text: {
              ...TextStyles.subtitle,
              text: this.bindProp("hdmi3Port"),
            }
          },
        },
      },
    };
  }

  _init() {
    this.asLite = getASLite();

    this._backgroundToggle = true;
  }

  async _attach() {
    //this.fireAncestors("$showBackground", false);

    this.systemInputs = await this.asLite.getSystemInputs();
    logger.debug(FILE_NAME, "systemInputs:", this.systemInputs);

    this.hdmi1Port = this.systemInputs.inputs[0].state;
    this.hdmi2Port = this.systemInputs.inputs[1].state;
    this.hdmi3Port = this.systemInputs.inputs[2].state;
  }

  _detach() {
    this.fireAncestors("$showBackground", true);
  }

  _getFocused() {
    return this.tag("ContinueButton") || this;
  }

  _handleEnter() {
    this.fireAncestors("$showBackground", this._backgroundToggle);
    this._backgroundToggle =! this._backgroundToggle;
  }

  _handleBack() {
    this.fireAncestors("$showBackground", true);
    return false;
  }
}