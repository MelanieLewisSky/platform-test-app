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
      Instruction: {
        x: half,
        mountX: 0.5,
        y: 300,
        text: {
          ...TextStyles.subtitle,
          text: this.bindProp("instructionText"),
          textAlign: "center",
        }
      },
      Question: {
        x: half,
        mountX: 0.5,
        y: 350,
        text: {
          ...TextStyles.subtitle,
          text: this.bindProp("questionText"),
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
        rect: true,
        color: 0xff000000,
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
      ErrorOverlay: {
        zIndex: 20,
        x: half,
        y: 200,
        mountX: 0.5,
        rect: true,
        color: 0xff000000,
        w: 1000,
        h: 600,
        visible: false,
        ErrorStatus: {
          x: 20,
          y: 20,
          text: {
            ...TextStyles.subtitle,
              text: this.bindProp("errorStatus"),
          },
        },
        ErrorMessage: {
          x: 20,
          y: 50,
          text: {
            ...TextStyles.subtitle,
              text: this.bindProp("errorMessage"),
          },
        },
        DeveloperMessage: {
          x: 20,
          y: 80,
          text: {
            ...TextStyles.subtitle,
              text: this.bindProp("developerMessage"),
          },
        },
      },
    };
  }

  _init() {
    this.testSteps = [
      {
        question: "Do the HDMI states show that nothing is connected?",
      },
      {
        instruction: "Please connect a 1080P60 source to HDMI1 and play it",
      },
      {
        question: "Does HDMI1 show as connected?",
        preTest: this.connectHDMI1ToPlayer1.bind(this),
      },
      {
        question: "Is the HDMI input visible full screen?",
      },
      {
        question: "Can you hear the audio from the HDMI input?",
      },
      {
        question: "Do the volume controls change the volue of the HDMI input?",
      },
      {
        question: "Is the HDMI input no longer visible?",
        preTest: this.disconnectFromPlayer1.bind(this),
      },
      {
        instruction: "Please disconnect source from HDMI1 and connect to HDMI3",
      },
      {
        question: "Does HDMI3 show as connected?",
        preTest: this.connectHDMI3ToPlayer1.bind(this),
      },
      {
        question: "Is the HDM3 input visible full screen?",
      },
      {
        question: "Can you hear the audio from the HDMI input?",
      },
      {
        instruction: "Please leave the source on HDMI3 and continue to play it",
      },
      {
        question: "Is the HDM3 input visible full screen?",
        preTest: this.connectHDMI3ToPlayer2.bind(this),
      },
      {
        question: "Can you hear the audio from the HDMI input?",
      },
      {
        question: "Is the HDMI input no longer visible?",
        preTest: this.disconnectFromPlayer2.bind(this),
      },
      {
        instruction: "Tests complete",
        done: true,
      }
    ];

    this._asLite = getASLite();
  }

  async _updateHDMIStates() {
    this._systemInputs = await this._asLite.getSystemInputs();
    logger.debug(FILE_NAME, "systemInputs:", this.systemInputs);

    this.hdmi1Port = this._systemInputs.inputs.find((input) => input.portid == "HDMI1").state;
    this.hdmi2Port = this._systemInputs.inputs.find((input) => input.portid == "HDMI2").state;
    this.hdmi3Port = this._systemInputs.inputs.find((input) => input.portid == "HDMI3").state;
  }

  _createPlayer(id, left = 0, top = 0, width = 1920, height = 1080) {
    const player = document.createElement("video");
    player.setAttribute("id", `video-player-${id}`);
    player.style.position = "fixed";
    player.style.zIndex = `${3 - id}`;
    player.style.visibility = "visible";
    player.style.display = "block";
    player.style.left = `${left}px`;
    player.style.top = `${top}px`;
    player.style.width = `${width}px`;
    player.style.height = `${height}px`;
    document.body.appendChild(player);

    const source = document.createElement("source");
    source.setAttribute("id", `video-source-${id}`);
    source.setAttribute("type", "video/x-dvb");
    source.setAttribute("src", `rec://srv/cur?vwid=${id}`);
    player.appendChild(source);

    return player;
  }

  _showPlayer(player, show) {
    player.style.display = show ? "block" : "none";
  }

  async _attach() {
    this._player1 = this._createPlayer(1);
    this._player2 = this._createPlayer(2);

    this._showPlayer(this._player1, false);
    this._showPlayer(this._player2, false);

    this._updateHDMIStates();
    this._updateTest(this.testSteps[0]);
    this.testStepNumber = 1;
    this.fireAncestors("$showBackground", false);
  }

  _detach() {
    this.fireAncestors("$showBackground", true);
  }

  _getFocused() {
    return this.tag("ContinueButton") || this;
  }

  _updateTest(test) {
    logger.debug(FILE_NAME, "test:", test);

    this.instructionText = "";
    this.questionText = "";

    if (test.preTest) {
      try {
        test.preTest();
      } catch (e) {
        logger.error(FILE_NAME, "Pre test error:", e.message);
      }
    }

    if (test.instruction) {
      this.instructionText = test.instruction;
    }

    if (test.question) {
      this.questionText = test.question;
    }
  }

  _handleEnter() {
    const test = this.testSteps[this.testStepNumber];
    this._updateTest(test);

    if (!test.done) {
      this.testStepNumber++;
    }
  }

  _handleBack() {
    this.fireAncestors("$showBackground", true);
    return false;
  }

  _showError(response) {
    this.errorStatus = `${response?.status} ${response?.statusText}`;
    this.errorMessage = `${response?.data?.errorCode} ${response?.data?.userMessage}`;
    this.developerMessage = response?.data?.developerMessage?.[0].reason0;
    this.tag("ErrorOverlay").patch({ visible: true });
  }

  async connectHDMI1ToPlayer1() {
    this._updateHDMIStates();

    this._showPlayer(this._player1, true);
    const response = await this._asLite.playersWatchInput(1, "HDMI1");

    if (response.status != 200) {
      logger.error(FILE_NAME, "response:", response);
      this._showError(response);
    }
  }

  async disconnectFromPlayer1() {
    const response = await this._asLite.playersStop(1);

    if (response.status != 200) {
      logger.error(FILE_NAME, "response:", response);
      this._showError(response);
    }

    this._showPlayer(this._player1, false);
  }

  async connectHDMI3ToPlayer1() {
    this._updateHDMIStates();

    const response = await this._asLite.playersWatchInput(1, "HDMI3");

    if (response.status != 200) {
      logger.error(FILE_NAME, "response:", response);
      this._showError(response);
    }
  }

  async connectHDMI3ToPlayer2() {
    this._updateHDMIStates();

    let response = await this._asLite.playersStop(1);

    if (response.status != 200) {
      logger.error(FILE_NAME, "response:", response);
      this._showError(response);
    }

    this._showPlayer(this._player1, false);
    this._showPlayer(this._player2, true);

    response = await this._asLite.playersWatchInput(2, "HDMI3");

    if (response.status != 200) {
      logger.error(FILE_NAME, "response:", response);
      this._showError(response);
    }
  }

  async disconnectFromPlayer2() {
    const response = await this._asLite.playersStop(2);

    if (response.status != 200) {
      logger.error(FILE_NAME, "response:", response);
      this._showError(response);
    }

    this._showPlayer(this._player2, false);
  }
}