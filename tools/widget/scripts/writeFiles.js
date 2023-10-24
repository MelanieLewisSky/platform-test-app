const fsPromises = require("fs").promises;

const path = require("path");

const FOLDER_WIDGET_FILES = "widget-files";
const FOLDER_OUTPUT_FILES = "output";

const writeToFile = async (path, content) => {
  return await fsPromises.writeFile(path, content);
};

const getAbsPathOfWidgetFileWith = (name) => {
  return path.join(__dirname, "..", FOLDER_WIDGET_FILES, name);
};

const getAbsPathOfWidgetFolder = () => {
  return path.join(__dirname, "..", FOLDER_WIDGET_FILES);
};

const getAbsPathOfOutputFolder = () => {
  return path.join(__dirname, "..", FOLDER_OUTPUT_FILES);
};

const getAbsPathOfOutputFileWith = (name) => {
  return path.join(__dirname, "..", FOLDER_OUTPUT_FILES, name);
};

module.exports = {
  writeToFile,
  getAbsPathOfWidgetFileWith,
  getAbsPathOfOutputFileWith,
  getAbsPathOfWidgetFolder,
  getAbsPathOfOutputFolder,
};
