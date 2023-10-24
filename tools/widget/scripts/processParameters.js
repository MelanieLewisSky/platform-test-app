const prompts = require("prompts");
const { buildWidgetWithFixedUrl, buildWidgetDynamicUrl } = require("./buildWidget");

const commandLineArgs = require("command-line-args");

const optionDefinitions = [
  { name: "url", type: String },
  { name: "group", type: String },
  { name: "version", type: String, defaultValue: "1.0.0" },
  { name: "hole-punch", type: Boolean, defaultValue: false },
  { name: "panel-ip", type: String },
  { name: "launch", type: Boolean, defaultValue: false },
  { name: "package-url", type: String },
  { name: "version-code", type: String },
];

const options = commandLineArgs(optionDefinitions);

const isValidURL = (input) => {
  try {
    return Boolean(new URL(input));
  } catch (e) {
    return false;
  }
};

const isValidVersion = (version) => {
  return version.match("\\d+.\\d+.\\d+");
};

const isValidVersionCode = (versionCode) => {
  return versionCode.match("\\d+");
};

const isInList = (list, value) => {
  return list.some((item) => item === value);
};

const askForUserInput = async () => {
  const choicesUrl = {
    dynamic: {
      title: "Dynamic URL",
      description: "The URL will be based upon the Cherry App Release Process page",
      value: "Dynamic URL",
    },
    fixed: { title: "Fixed URL", description: "The URL will be hard coded in the next step", value: "Fixed URL" },
  };

  const dynamicUrlGroups = {
    cug: {
      title: "CUG",
      description: "The widget will always try to load the latest CUG version.",
      value: "cug",
    },
    default: {
      title: "Default",
      description:
        "The widget will always try to load the latest default version. CARP uses XCONF to deliver either the 'Default' app or 'Staff Trials' config.",
      value: "default",
    },
  };

  const choicesDebugOptions = {
    holePunch: {
      title: "Hole Punch",
      description: "Enables the debug port 22222 for debugging in the browser",
      value: "Hole Punch",
    },
  };

  const questions = [
    {
      type: "select", // For more input types, please refer to https://github.com/terkelg/prompts#-types
      name: "urlType",
      message: "Pick endpoint option for the widget",
      choices: [choicesUrl.dynamic, choicesUrl.fixed],
      initial: 1,
    },
    {
      type: (prev, all) => (all.urlType === choicesUrl.fixed.value ? "text" : null),
      name: "fixedUrl",
      validate: (url) => (isValidURL(url) ? true : "Please specify a valid URL!"),
      message: `URL for the fixed endpoint: `,
    },
    {
      type: (prev, all) => (all.urlType === choicesUrl.fixed.value ? "confirm" : null),
      name: "confirmUrl",
      initial: true,
      message: (prev, all) => `Please confirm if the URL is correct '${all.fixedUrl}'?`,
    },
    {
      type: (prev, all) => (all.urlType === choicesUrl.fixed.value ? "text" : null),
      name: "fixedUrlGroup",
      message: `Enter a group id if required: `,
    },
    {
      type: (prev, all) => (all.urlType === choicesUrl.dynamic.value ? "select" : null),
      name: "dynamicUrlGroup",
      message: `Please pick a group for the widget: `,
      choices: [dynamicUrlGroups.cug, dynamicUrlGroups.default],
    },
    {
      type: "multiselect",
      name: "debugOptions",
      message: "Pick additional capabilities:",
      choices: [choicesDebugOptions.holePunch],
    },
    {
      type: "text",
      name: "version",
      message: "Please specify the widget version:",
      validate: (version) => (isValidVersion(version) ? true : "Version not matching schema XX.XX.XX.XX (Example: 1.0.3.930)!"),
    },
    {
      type: "confirm",
      name: "finalConfirmation",
      initial: true,
      message: (prev, all) => `Please make sure that everything is correct: ${JSON.stringify(all)}`,
    },
  ];
  const response = await prompts(questions);

  const fixedUrl = response["fixedUrl"];
  const fixedUrlGroup = response["fixedUrlGroup"];
  const dynamicUrlGroup = response["dynamicUrlGroup"];
  const shouldAddHolePunch = response["debugOptions"].includes(choicesDebugOptions.holePunch.value);
  const widgetVersion = response["version"];

  return {
    fixedUrl,
    fixedUrlGroup,
    dynamicUrlGroup,
    shouldAddHolePunch,
    widgetVersion,
  };
};

const handleInput = async (
  fixedUrl,
  fixedUrlGroup,
  dynamicUrlGroup,
  shouldAddHolePunch,
  widgetVersion,
) => {
  if (fixedUrl)
    await buildWidgetWithFixedUrl(
      fixedUrl,
      fixedUrlGroup,
      shouldAddHolePunch,
      widgetVersion,
    );
  else if (dynamicUrlGroup)
    await buildWidgetDynamicUrl(dynamicUrlGroup, shouldAddHolePunch, widgetVersion);
  else throw new Error("Unknown state...");
};

(async () => {
  if (options["url"] || options["group"]) {
    const fixedUrl = options["url"];
    let dynamicUrlGroup;

    if (!fixedUrl) {
      dynamicUrlGroup = options["group"];
    } else {
      fixedUrlGroup = options["group"];
    }

    const shouldAddHolePunch = options["hole-punch"];
    const widgetVersion = options["version"];

    await handleInput(
      fixedUrl,
      fixedUrlGroup,
      dynamicUrlGroup,
      shouldAddHolePunch,
      widgetVersion,
      specifyApk,
    );
  } else {
    const {
      fixedUrl,
      fixedUrlGroup,
      dynamicUrlGroup,
      shouldAddHolePunch,
      widgetVersion,
    } = await askForUserInput();
    await handleInput(
      fixedUrl,
      fixedUrlGroup,
      dynamicUrlGroup,
      shouldAddHolePunch,
      widgetVersion,
    );
  }
})();

module.exports = { handleInput, askForUserInput };
