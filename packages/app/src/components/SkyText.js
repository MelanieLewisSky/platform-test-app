import { Lightning } from "@lightningjs/sdk";

export class SkyText extends Lightning.Component {
  static _template() {
    return {
      text: {
        fontFace: "SkyTextLight",
      },
    };
  }
}