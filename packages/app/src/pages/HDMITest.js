import { Lightning, Settings } from "@lightningjs/sdk";
import { logger } from "@sky-uk/lightning-logger";
import { TextButton } from "@sky-uk/lightning-tiles-ui";
import { getASLite } from "@pta/as-lite";
import { AudioBalance } from "../components";
import { half } from "../utils/size";
import { TextStyles } from "../constants";

const FILE_NAME = "HDMITest.js"

export class HDMITest extends Lightning.Component {
  static _template() {
    const { w, h } = Settings.get("app", "stage");
    return {
      w,
      h,
      QuestionContainer: {
        zIndex: 10,
        x: half,
        y: 100,
        mountX: 0.5,
        rect: true,
        color: 0xaa000000,
        w: 1300,
        h: 550,
        Title: {
          x: half,
          mountX: 0.5,
          y: 20,
          text: {
            ...TextStyles.heading,
            text: "HDMI Tests",
            textAlign: "center",
          },
        },
        ID: {
          x: 1100,
          y: 20,
          text: {
            ...TextStyles.subtitle,
            text: this.bindProp("idText"),
            textAlign: "left",
          }
        },
        Instruction: {
          x: half,
          mountX: 0.5,
          y: 180,
          text: {
            ...TextStyles.subtitle,
            text: this.bindProp("instructionText"),
            textAlign: "center",
          }
        },
        Question: {
          x: half,
          mountX: 0.5,
          y: 230,
          text: {
            ...TextStyles.subtitle,
            text: this.bindProp("questionText"),
            textAlign: "center",
          }
        },
        ContinueButton: {
          x: half,
          y: 380,
          w: 365,
          mountX: 0.5,
          type: TextButton,
          label: "Continue",
          alignment: "center",
        },
      },
      HDMIInformation: {
        rect: true,
        x: 40,
        y: 900,
        w: 360,
        h: 120,
        color: 0xaa000000,
        HDM1: {
          x: 10,
          y: 10,
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
          x: 10,
          y: 40,
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
          x: 10,
          y: 70,
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
      AudioBalanceOverlay: {
        type: AudioBalance,
        signals: {
          onAudioBalanceChanged: "_onAudioBalanceControlChanged",
        },
        mount: 0.5,
        x: half,
        y: 800,
        w: AudioBalance.WIDTH,
        h: AudioBalance.HEIGHT,
        rect: true,
        color: 0xff000000,
        visible: false,
      },
      ErrorOverlay: {
        zIndex: 20,
        x: half,
        y: 300,
        mountX: 0.5,
        rect: true,
        color: 0xff000000,
        w: 1000,
        h: 400,
        visible: false,
        ErrorTitle: {
          x: 20,
          y: 20,
          text: {
            ...TextStyles.heading,
            text: "Error",
          }
        },
        ErrorStatus: {
          ErrorStatusLabel: {
            x: 20,
            y: 120,
            text: {
              ...TextStyles.subtitle,
              text: "Status:",
            },
          },
          ErrorStatusText: {
            x: 180,
            y: 120,
            text: {
              ...TextStyles.subtitle,
              text: this.bindProp("errorStatus"),
            },
          },
        },
        ErrorMessage: {
          ErrorMessageLabel: {
            x: 20,
            y: 150,
            text: {
              ...TextStyles.subtitle,
              text: "Message:",
            },
          },
          ErrorMessageText: {
            x: 180,
            y: 150,
            text: {
              ...TextStyles.subtitle,
              text: this.bindProp("errorMessage"),
            },
          },
        },
        DeveloperMessage: {
          DeveloperMessageLabel: {
            x: 20,
            y: 180,
            text: {
              ...TextStyles.subtitle,
              text: "Reason:",
            },
          },
          DeveloperMessageText: {
            x: 180,
            y: 180,
            text: {
              ...TextStyles.subtitle,
              text: this.bindProp("developerMessage"),
            },
          },
        },
        ErrorCloseButton: {
          type: TextButton,
          x: half,
          mountX: 0.5,
          y: 300,
          alignment: "center",
          label: "Close",
        }
      },
    };
  }

  static _states() {
    return [
      class TestState extends this {
        $enter() {
          this.fireAncestors("$showBackground", false);
        }

        $exit() {
          this.fireAncestors("$showBackground", true);
        }

        _handleEnter() {
          this._updateHDMIStates();

          const test = this.testSteps[this.testStepNumber];
          this._updateTest(test);

          if (!test.done) {
            this.testStepNumber++;
          } else {
            this._setState("EndState");
          }
        }

        static _states() {
          return [
            class DefaultTestState extends TestState {
              _getFocused() {
                return this.tag("ContinueButton");
              }
            },
            class BalanceTestState extends TestState {
              _getFocused() {
                return this.tag("AudioBalanceOverlay");
              }

              _handleEnter() {
                this._setState("TestState.DefaultTestState");
              }
            }
          ]
        }
      },
      class ErrorState extends this {
        $enter() {
          this.tag("ErrorOverlay").patch({ visible: true });
        }

        $exit() {
          this.tag("ErrorOverlay").patch({ visible: false });
        }

        _handleEnter() {
          this._setState(this._previousState);
        }

        _getFocused() {
          return this.tag("ErrorCloseButton") || this;
        }
      },
      class EndState extends this {
        $enter() {
          this.tag("ContinueButton").patch({ label: "Done" });
        }

        _handleEnter() {
          window.close();
        }

        _getFocused() {
          return this.tag("ContinueButton") || this;
        }
      }
    ];
  }

  _construct() {
    this.testSteps = [
      {
        id: "HDMI-T1",
        question: "Do the HDMI states show that nothing is connected?",
      },
      {
        instruction: "Please connect a 1080P60 source to HDMI1 and play it",
      },
      {
        id: "HDMI-T2",
        question: "Does only HDMI1 show as connected?",
        preTest: async () => {
          const response = await this._asLite.playersWatchInput(1, "HDMI1");
          this._statusCheck(response);
          this._showPlayer(this._player1, true);
        },
      },
      {
        id: "HDMI-T3",
        question: "Is the HDMI1 input visible full screen?",
      },
      {
        id: "HDMI-T4",
        question: "Can you hear the audio from the HDMI1 input?",
      },
      {
        id: "HDMI-T5",
        question: "Do the volume controls change the volume of the HDMI1 input?",
      },
      {
        id: "HDMI-T6",
        question: "Is the HDMI input no longer visible?",
        preTest: async () => {
          this._showPlayer(this._player1, false);
          const response = await this._asLite.playersStop(1);
          this._statusCheck(response);
        },
      },
      {
        instruction: "Please disconnect source from HDMI1 and connect to HDMI3",
      },
      {
        id: "HDMI-T7",
        question: "Does only HDMI3 show as connected?",
        preTest: async () => {
          const response = await this._asLite.playersWatchInput(1, "HDMI3");
          this._statusCheck(response);
          this._showPlayer(this._player1, true);
        },
      },
      {
        id: "HDMI-T8",
        question: "Is the HDMI3 input visible full screen?",
      },
      {
        id: "HDMI-T9",
        question: "Can you hear the audio from the HDMI3 input?",
      },
      {
        instruction: "Please leave the source on HDMI3 and continue to play it",
      },
      {
        id: "HDMI-T10",
        question: "Is the HDM3 input visible full screen?",
        preTest: async () => {
          this._showPlayer(this._player1, false);
          let response = await this._asLite.playersStop(1);
          this._statusCheck(response);

          response = await this._asLite.playersWatchInput(2, "HDMI3");
          this._statusCheck(response);
          this._showPlayer(this._player2, true);
        },
      },
      {
        id: "HDMI-T11",
        question: "Can you hear the audio from the HDMI3 input?",
      },
      {
        id: "HDMI-T12",
        question: "Is the HDMI3 input no longer visible?",
        preTest: async () => {
          this._showPlayer(this._player2, false);
          const response = await this._asLite.playersStop(1);
          this._statusCheck(response);
        },
      },
      {
        instruction: "Please disconnect the 1080P60 source from HDMI3 and connect it to HDMI1 and play it",
        preTest: () => {
          this._showPlayer(this._player1);
          this._resizePlayer(this._player1, 0, 108, 1532, 862);
          this._showPlayer(this._player2);
          this._resizePlayer(this._player2, 0, 0, 1920, 1080);
        },
      },
      {
        id: "HDMI-T13",
        question: "Does only HDMI1 show as connected?",
        preTest: async () => {
          const response = await this._asLite.playersWatchInput(2, "HDMI3");
          this._statusCheck(response);
          this._showPlayer(this._player1, true);
        },
      },
      {
        id: "HDMI-T14",
        question: "Is content playing overlayed on the input to HDMI1?",
        preTest: async () =>  {
          this._resizePlayer(this._player1, 0, 108, 1532, 862);
          const response = await this._asLite.playersWatchLive(1, "3000");
          this._statusCheck(response);
          this._showPlayer(this._player1, true);
        },
      },
      {
        instruction: "Use the left button to set the slider to the middle and press select",
        preTest: async () => {
          const balance = await this._asLite.getSystemSetting("sound.mixbias");
          this.tag("AudioBalanceOverlay").setAudioBalance(balance);
          this.tag("AudioBalanceOverlay").patch({ visible: true });
          this._setState("TestState.BalanceTestState");
        }
      },
      {
        id: "HDMI-T15",
        question: "Can you hear the audio from the HDMI input?",
      },
      {
        id: "HDMI-T16",
        question: "Can you hear the audio from the content?",
      },
      {
        instruction: "Use the left button to set the slider to the far left and press select",
        preTest: () => {
          this._setState("TestState.BalanceTestState");
        }
      },
      {
        id: "HDMI-T17",
        question: "Can you hear only the content audio?",
      },
      {
        instruction: "Use the right button to set the slider to the far right and press select",
        preTest: () => {
          this._setState("TestState.BalanceTestState");
        }
      },
      {
        id: "HDMI-T18",
        question: "Can you hear only the HDMI1 audio?",
      },
      {
        instruction: "Use the left button to set the slider to the middle and press select",
        preTest: () => {
          this._setState("TestState.BalanceTestState");
        }
      },
      {
        id: "HDMI-T19",
        question: "Can you hear both content and HDMI audio?",
        preTest: () => {
          this.tag("AudioBalanceOverlay").patch({ visible: false });
        }
      },
      {
        id: "HDMI-T20",
        question: "Do the volume controls change the volume of both the HDMI input and content?",
      },
      {
        id: "HDMI_T21",
        question: "Does the content completely cover the HDMI input video?",
        preTest: () => {
          this._showPlayer(this._player1, true);
          this._resizePlayer(this._player1, 0, 0, 1920, 1080);
        },
      },
      {
        id: "HDMI-T22",
        question: "Can you STILL hear the audio from the HDMI input?",
      },
      {
        id: "HDMI-T23",
        question: "Can you see only the HDMI input?",
        preTest: async () => {
          this._showPlayer(this._player1, false);
          const response = await this._asLite.playersStop(1);
          this._statusCheck(response);
        },
      },
      {
        id: "HDMI-T24",
        question: "Is content playing overlayed on the input to HDMI1?",
        preTest: async () =>  {
          this._resizePlayer(this._player1, 0, 108, 1532, 862);
          const response = await this._asLite.playersWatchLive(1, "3000");
          this._statusCheck(response);
          this._showPlayer(this._player1, true);
        },
      },
      {
        instruction: "Tests complete",
        preTest: async () => {
          this._showPlayer(this._player1, false);
          this._showPlayer(this._player2, false);

          let response = await this._asLite.playersStop(1);
          this._statusCheck(response);
          response = await this._asLite.playersStop(2);
          this._statusCheck(response);
        },
        done: true,
      }
    ];

    this._asLite = getASLite();
  }

  _init() {
    this._setState("TestState.DefaultTestState");
    this._previousState = this._getState();
  }

  async _updateHDMIStates() {
    this._systemInputs = await this._asLite.getSystemInputs();
    logger.debug(FILE_NAME, "systemInputs:", this._systemInputs);

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

  _resizePlayer(player, left = 0, top = 0, width = 1920, height = 1080) {
    player.style.left = `${left}px`;
    player.style.top = `${top}px`;
    player.style.width = `${width}px`;
    player.style.height = `${height}px`;
  }

  _destroyPlayer(player) {
    document.removeChild(player);
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

  _handleBack() {
    this.fireAncestors("$showBackground", true);
    return false;
  }

  async _updateTest(test) {
    logger.debug(FILE_NAME, "test:", test);

    this.idText = "";
    this.instructionText = "";
    this.questionText = "";

    if (test.preTest) {
      try {
        await test.preTest();
      } catch (e) {
        logger.error(FILE_NAME, "Pre test error:", e.message);
      }
    }

    if (test.id) {
      this.idText = test.id;
    }

    if (test.instruction) {
      this.instructionText = test.instruction;
    }

    if (test.question) {
      this.questionText = test.question;
    }
  }

  _showError(response) {
    this._previousState = this._getState();
    this.errorStatus = `${response?.status} ${response?.statusText}`;
    this.errorMessage = `${response?.data?.errorCode} ${response?.data?.userMessage}`;
    this.developerMessage = response?.data?.developerMessage?.[0].reason0;
    this._setState("ErrorState");
  }

  _statusCheck(response) {
    if (response.status != 200) {
      logger.error(FILE_NAME, "response:", response);
      this._showError(response);
    }
  }

  async _onAudioBalanceControlChanged(value) {
    logger.debug(FILE_NAME, "value:", value);

    const response = await this._asLite.setSystemSetting("sound.mixbias", value);
    this._statusCheck(response);
  }
}