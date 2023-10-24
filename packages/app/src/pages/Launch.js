import { Lightning, Router, Settings } from "@lightningjs/sdk";
import { logger } from "@sky-uk/lightning-logger";
import { TextButton } from "@sky-uk/lightning-tiles-ui";
import { getASLite } from "@pta/as-lite";
import { SkyText } from "../components";
import { half } from "../utils/size";
import { TextStyles } from "../constants";

const FILE_NAME = "Launch.js";

export class Launch extends Lightning.Component {
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
          text: "Platform Test App",
          textAlign: "center",
        },
      },
      SystemDeviceInformation: {
        x: half,
        mountX: 0.5,
        y: 400,
        w: 800,
        ModelNumber: {
          y: 0,
          ModelNumberLabel: {
            type: SkyText,
            text: {
              text: "Model Number:",
            },
          },
          ModelNumberText: {
            type: SkyText,
            x: 300,
            text: this.bindProp("modelNumber"),
          },
        },
        VersionNumber: {
          y: 40,
          VersionNumberLabel: {
            type: SkyText,
            text: {
              text: "Version Number:",
            },
          },
          VersionNumberText: {
            type: SkyText,
            x: 300,
            text: this.bindProp("versionNumber"),
          },
        },
        ASVersion: {
          y: 80,
          ASVersionLabel: {
            type: SkyText,
            text: {
              text: "AS Version:",
            },
          },
          ASVersionText: {
            type: SkyText,
            x: 300,
            text: this.bindProp("asVersion"),
          },
        },
        SerialNumber: {
          y: 120,
          SerialNumberLabel: {
            type: SkyText,
            text: {
              text: "Serial Number:",
            },
          },
          SerialNumberText: {
            type: SkyText,
            x: 300,
            text: this.bindProp("serialNumber"),
          },
        },
        IPAddress: {
          y: 160,
          IPAddressLabel: {
            type: SkyText,
            text: {
              text: "IPAddress:",
            },
          },
          IPAddressText: {
            type: SkyText,
            x: 300,
            text: this.bindProp("ipAddress"),
          },
        },
      },
      ContinueButton: {
        x: half,
        y: 874,
        w: 365,
        mountX: 0.5,
        type: TextButton,
        label: "Continue",
        alignment: "center",
      },
    };
  }

  _init() {
    this.asLite = getASLite();
  }

  async _attach() {
    this.deviceInformation = await this.asLite.getSystemDeviceInformation();
    logger.debug(FILE_NAME, "deviceInformation:", this.deviceInformation);

    this.modelNumber = this.deviceInformation.modelNumber;
    this.versionNumber = this.deviceInformation.versionNumber;
    this.asVersion = this.deviceInformation.ASVersion;
    this.serialNumber = this.deviceInformation.serialNumber;
    this.ipAddress = this.deviceInformation.IPAddress;
  }

  _getFocused() {
    return this.tag("ContinueButton") || this;
  }

  async _handleEnter() {
    Router.navigate("hdmitest");
  }
}
