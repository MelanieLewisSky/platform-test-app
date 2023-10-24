const fsPromises = require("fs").promises;
const path = require("path");
const { spawn } = require("node:child_process");

const openFinderAt = (path) => {
  return spawn("open", [path]);
};

const readFileContent = async (path) => {
  return await fsPromises.readFile(path);
};

const readFromFile = async (path) => {
  return (await fsPromises.readFile(path)).toString();
};

const loadTemplateFile = async (name) => {
  const templatePath = path.join(__dirname, "..", "templates", name);
  return await readFromFile(templatePath);
};

module.exports = {
  loadTemplateFile,
  readFileContent,
  openFinderAt,
};
