import { Lightning, Settings, Router } from "@lightningjs/sdk";
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
      QuestionContainer: {
        zIndex: 10,
        x: half,
        y: 100,
        mountX: 0.5,
        rect: true,
        color: 0xaa000000,
        w: 1100,
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
        w: 200,
        h: 90,
        color: 0xaa000000,
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

        _getFocused() {
          return this.tag("ContinueButton") || this;
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
          this._setState("TestState");
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
        question: "Do the HDMI states show that nothing is connected?",
      },
      {
        instruction: "Please connect a 1080P60 source to HDMI1 and play it",
      },
      {
        question: "Does only HDMI1 show as connected?",
        preTest: this.connectHDMI1ToPlayer1.bind(this),
      },
      {
        question: "Is the HDMI input visible full screen?",
      },
      {
        question: "Can you hear the audio from the HDMI input?",
      },
      {
        question: "Do the volume controls change the volume of the HDMI input?",
      },
      {
        question: "Is the HDMI input no longer visible?",
        preTest: this.stopPlayer1.bind(this),
      },
      {
        instruction: "Please disconnect source from HDMI1 and connect to HDMI3",
      },
      {
        question: "Does only HDMI3 show as connected?",
        preTest: this.connectHDMI3ToPlayer1.bind(this),
      },
      {
        question: "Is the HDMI input visible full screen?",
      },
      {
        question: "Can you hear the audio from the HDMI input?",
      },
      {
        instruction: "Please leave the source on HDMI3 and continue to play it",
      },
      {
        question: "Is the HDM3 input visible full screen?",
        preTest: this.switchHDMI3ToPlayer2.bind(this),
      },
      {
        question: "Can you hear the audio from the HDMI input?",
      },
      {
        question: "Is the HDMI input no longer visible?",
        preTest: this.stopPlayer2.bind(this),
      },
      {
        instruction: "Please disconnect the 1080P60 source from HDMI3 and connect it to HDMI1 and play it",
        preTest: this.setupDualPlayers.bind(this),
      },
      {
        question: "Does only HDMI1 show as connected?",
        preTest: this.connectHDMI1ToPlayer2.bind(this),
      },
      {
        question: "Is content playing overlayed on the input to HDMI1?",
        preTest: this.playContentOnPlayer1.bind(this),
      },
      {
        question: "Can you hear the audio from the HDMI input?",
      },
      {
        question: "Can you hear the audio from the content?",
      },
      {
        question: "Do the volume controls change the volume of both the HDMI input and content?",
      },
      {
        question: "Does the content completely cover the HDMI input video?",
        preTest: this.resizePlayer1FullScreen.bind(this),
      },
      {
        question: "Can you STILL hear the audio from the HDMI input?",
      },
      {
        question: "Can you see only the HDMI input?",
        preTest: this.stopPlayer1.bind(this),
      },
      {
        question: "Is content playing overlayed on the input to HDMI1?",
        preTest: this.playContentOnPlayer1Test.bind(this),
      },
      {
        instruction: "Tests complete",
        preTest: this.stopAllPlayers.bind(this),
        done: true,
      }
    ];

    this._asLite = getASLite();
  }

  _init() {
    this._setState("TestState");
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

  _handleBack() {
    this.fireAncestors("$showBackground", true);
    return false;
  }

  _showError(response) {
    this.errorStatus = `${response?.status} ${response?.statusText}`;
    this.errorMessage = `${response?.data?.errorCode} ${response?.data?.userMessage}`;
    this.developerMessage = response?.data?.developerMessage?.[0].reason0;
    this._setState("ErrorState");
  }

  async connectHDMI1ToPlayer1() {
    this._showPlayer(this._player1, true);
    const response = await this._asLite.playersWatchInput(1, "HDMI1");

    if (response.status != 200) {
      logger.error(FILE_NAME, "response:", response);
      this._showError(response);
    }
  }

  async connectHDMI1ToPlayer2() {
    this._showPlayer(this._player1, true);
    const response = await this._asLite.playersWatchInput(2, "HDMI1");

    if (response.status != 200) {
      logger.error(FILE_NAME, "response:", response);
      this._showError(response);
    }
  }

  async connectHDMI3ToPlayer1() {
    this._showPlayer(this._player1, true);
    const response = await this._asLite.playersWatchInput(1, "HDMI3");

    if (response.status != 200) {
      logger.error(FILE_NAME, "response:", response);
      this._showError(response);
    }
  }

  async switchHDMI3ToPlayer2() {
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

  async playContentOnPlayer1() {
    this._showPlayer(this._player1, true);
    const response = await this._asLite.playersWatchLive(1, "3000");

    if (response.status != 200) {
      logger.error(FILE_NAME, "response:", response);
      this._showError(response);
    }
  }

  async stopPlayer1() {
    const response = await this._asLite.playersStop(1);

    if (response.status != 200) {
      logger.error(FILE_NAME, "response:", response);
      this._showError(response);
    }

    this._showPlayer(this._player1, false);
    }

  async stopPlayer2() {
    const response = await this._asLite.playersStop(2);

    if (response.status != 200) {
      logger.error(FILE_NAME, "response:", response);
      this._showError(response);
    }

    this._showPlayer(this._player2, false);
  }

  async stopAllPlayers() {
    await this.stopPlayer1();
    await this.stopPlayer2();
  }

  setupDualPlayers() {
    this._showPlayer(this._player1);
    this._resizePlayer(this._player1, 0, 108, 1532, 862);
    this._showPlayer(this._player2);
    this._resizePlayer(this._player2, 0, 0, 1920, 1080);
  }

  resizePlayer1FullScreen() {
    this._showPlayer(this._player1, true);
    this._resizePlayer(this._player1, 0, 0, 1920, 1080);
  }

  async playContentOnPlayer1Test() {
    this._showPlayer(this._player1, true);
    this._resizePlayer(this._player1, 0, 108, 1532, 862);
    const response = await this._asLite.playersWatchLive(1, "3000");

    if (response.status != 200) {
      logger.error(FILE_NAME, "response:", response);
      this._showError(response);
    }
  }
}