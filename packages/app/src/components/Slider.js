import { Lightning, Utils } from "@lightningjs/sdk";
import { logger } from "@sky-uk/lightning-logger";
import { full } from "../utils/size";

const FILE_NAME = "Slider.js";

const BUTTON_SIZE = 32;
const HEIGHT = 32;
const BAR_MARGIN_LEFT = 8;
const BAR_MARGIN_RIGHT = 8;

export class Slider extends Lightning.Component {
  static _template() {
    return {
      Bar: {
        w: full,
        h: HEIGHT,
        flex: {
          direction: "row",
          alignItems: "center",
        },

        Left: {
          flexItem: {
            marginLeft: BAR_MARGIN_LEFT,
          },
          src: Utils.asset("images/slider-left-endcap.png"),
        },
        BarLeft: {
          flexItem: {
            grow: 1,
          },
          src: Utils.asset("images/slider-bar.png"),
        },
        Center: {
          src: Utils.asset("images/slider-center.png"),
        },
        BarRight: {
          flexItem: {
            grow: 1,
          },
          src: Utils.asset("images/slider-bar.png"),
        },
        Right: {
          flexItem: {
            marginRight: BAR_MARGIN_RIGHT,
          },
          src: Utils.asset("images/slider-right-endcap.png"),
        },
      },
      Button: {
        w: BUTTON_SIZE,
        h: BUTTON_SIZE,
        src: Utils.asset("images/slider-button.png"),
      },
    };
  }

  _clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
  }

  setValue(v, notify = false) {
    const clampedValue = this._clamp(v, this.min, this.max);

    this._updatePosition(clampedValue);

    if (clampedValue == this.value) {
      return;
    }

    this.value = clampedValue;

    if (notify) {
      this.signal("onChanged", this.value);
    }
  }

  _updatePosition(value) {
    const p = (value - this.min) / (this.max - this.min);
    this.tag("Button").patch({ smooth: { x: p * (this.w - BUTTON_SIZE) } });
  }

  _setup() {
    this.min = 0;
    this.max = 100;
    this.step = 10;
    this.setValue(50);
  }

  _handleLeft() {
    logger.debug(FILE_NAME, "_handleLeft");
    this.setValue(this.value - this.step, true);
    return true;
  }

  _handleRight() {
    logger.debug(FILE_NAME, "_handleRight");
    this.setValue(this.value + this.step, true);
    return true;
  }
}
