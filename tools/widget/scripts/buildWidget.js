const Mustache = require("mustache");
const nodeFetch = require("node-fetch");

const { loadTemplateFile } = require("./readFiles");
const {
  writeToFile,
  getAbsPathOfWidgetFileWith,
  getAbsPathOfOutputFileWith,
  getAbsPathOfWidgetFolder,
} = require("./writeFiles");
const { zip } = require("./zipFiles");
const { deleteFileAt } = require("./deleteFiles");

const APP_ID = "com.sky.platform-test-app";

const TEMPLATE_HTML = "index.html.template";
const TEMPLATE_CONFIG = "config.xml.template";

const buildCapabilities = ({ shouldUseHolePunch }) => {
  let capabilities = [];
  if (shouldUseHolePunch) {
    capabilities.push({ name: "hole-punch", value: 22222 });
  }
  return capabilities;
};

const pad = (s) => s.padEnd(20, ".");

const buildWidgetWithFixedUrl = async (
  url,
  groupId,
  shouldUseHolePunch,
  widgetVersion
) => {
  console.log("Building fixed URL widget:");
  console.log(pad("  URL"), url);
  console.log(pad("  Group"), groupId);
  console.log(pad("  Version"), widgetVersion);
  console.log(pad("  Hole punch"), shouldUseHolePunch ? "yes" : "no");

  const indexTemplate = await loadTemplateFile(TEMPLATE_HTML);
  const configTemplate = await loadTemplateFile(TEMPLATE_CONFIG);

  const capabilities = buildCapabilities({ shouldUseHolePunch });

  const urlWIthParams = new URL(url);
  if (groupId) {
    urlWIthParams.searchParams.set("groupId", groupId);
  }

  const configXml = Mustache.render(configTemplate, { capabilities, widgetVersion, appId: APP_ID });
  const indexHtml = Mustache.render(indexTemplate, { fixedUrl: { url: urlWIthParams } });

  await writeFilesAndCleanUp(configXml, indexHtml);
};

const buildWidgetDynamicUrl = async (
  groupId,
  shouldUseHolePunch,
  widgetVersion
) => {
  console.log("Building CARP pointer widget:");
  console.log(pad("  Group"), groupId);
  console.log(pad("  Version"), widgetVersion);
  console.log(pad("  Hole punch"), shouldUseHolePunch ? "yes" : "no");

  const indexTemplate = await loadTemplateFile(TEMPLATE_HTML);
  const configTemplate = await loadTemplateFile(TEMPLATE_CONFIG);

  const capabilities = buildCapabilities({ shouldUseHolePunch });

  const configXml = Mustache.render(configTemplate, { capabilities, widgetVersion, appId: APP_ID });
  const indexHtml = Mustache.render(indexTemplate, { dynamicUrl: { groupId } });

  await writeFilesAndCleanUp(configXml, indexHtml);
};

const writeFilesAndCleanUp = async (configXml, indexHtml) => {
  const writeWidgetFiles = async (pathConfigXmlFile, pathIndexHtmlFile) => {
    await writeToFile(pathConfigXmlFile, configXml);
    await writeToFile(pathIndexHtmlFile, indexHtml);
  };

  const zipWidgetFiles = async () => {
    const zipLocation = getPathOfWidgetZip();
    const widgetLocation = getAbsPathOfWidgetFolder();
    const outFile = await zip(widgetLocation, zipLocation);
    console.log(`Package written to ${outFile}`);
  };

  const cleanWidgetFiles = async (pathConfigXmlFile, pathIndexHtmlFile) => {
    await deleteFileAt(pathConfigXmlFile);
    await deleteFileAt(pathIndexHtmlFile);
  };

  const pathConfigXmlFile = getAbsPathOfWidgetFileWith("config.xml");
  const pathIndexHtmlFile = getAbsPathOfWidgetFileWith("index.html");

  await writeWidgetFiles(pathConfigXmlFile, pathIndexHtmlFile);
  await zipWidgetFiles();
  await cleanWidgetFiles(pathConfigXmlFile, pathIndexHtmlFile);
};

const getPathOfWidgetZip = () => {
  return getAbsPathOfOutputFileWith("package.wgt");
};

module.exports = { buildWidgetWithFixedUrl, buildWidgetDynamicUrl };
