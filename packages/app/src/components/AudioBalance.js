import { Lightning, Utils } from "@lightningjs/sdk";
import { GlassFrame, Panel } from "@sky-uk/lightning-tiles-ui";
import { Title1 } from "@sky-uk/lightning-fonts";
import { Slider } from "./Slider";

const WIDTH = 800;
const HEIGHT = 140;
const PANEL_PADDING = 10;
const HEADING_MARGIN = 8;
const SLIDER_WIDTH = 600;
const SLIDER_MARGIN = 26;

// const HEADING_WIDTH = WIDTH - PANEL_PADDING * 2;
export class AudioBalance extends Lightning.Component {
  static WIDTH = WIDTH;
  static HEIGHT = HEIGHT;

  static _template() {
    return {
      GlassFrame: {
        w: WIDTH,
        h: HEIGHT,
        type: GlassFrame,
      },

      Panel: {
        w: WIDTH,
        h: HEIGHT,
        type: Panel,
        passSignals: {
          onAudioBalanceChanged: true,
        },

        Container: {
          passSignals: {
            onAudioBalanceChanged: true,
          },
          flex: {
            direction: "column",
            padding: PANEL_PADDING,
            justifyContent: "center",
            alignItems: "center",
          },

          Heading: {
            w: WIDTH - PANEL_PADDING * 2,
            flexItem: {
              margin: HEADING_MARGIN,
            },
            text: {
              ...Title1,
              textAlign: "center",
              text: "Sky Live audio balance",
            },
          },
          BalanceControl: {
            passSignals: {
              onAudioBalanceChanged: true,
            },
            flex: {
              direction: "row",
            },
            LeftIcon: {
              src: Utils.asset("images/balance-content.png"),
            },
            AudioBalanceSlider: {
              w: SLIDER_WIDTH,
              flexItem: {
                marginLeft: SLIDER_MARGIN,
                marginRight: SLIDER_MARGIN,
              },
              type: Slider,
              passSignals: {
                onChanged: "onAudioBalanceChanged",
              },
            },
            RightIcon: {
              src: Utils.asset("images/balance-call.png"),
            },
          },
        },
      },
    };
  }

  _attach() {
    this.slider = this.tag("Panel")
      .tag("Container")
      .tag("BalanceControl")
      .tag("AudioBalanceSlider");
  }

  setAudioBalance(value) {
    this.slider.setValue(value);
  }

  _getFocused() {
    return this.slider;
  }
}
