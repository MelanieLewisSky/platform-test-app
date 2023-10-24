const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");
const JSZip = require("jszip");

const _recurseFilesAndFolders = (fileList, inDir, baseDir) => {
  const files = fs.readdirSync(inDir);
  files.forEach((file) => {
    const filePath = path.join(inDir, file);
    if (fs.statSync(filePath).isDirectory()) {
      _recurseFilesAndFolders(fileList, filePath, baseDir);
    } else {
      fileList.push(path.relative(baseDir, filePath));
    }
  });
};

const _walkSync = (inDir) => {
  const fileList = [];
  _recurseFilesAndFolders(fileList, inDir, inDir);
  return fileList;
};

const zip = async (inDir, outFile) => {
  const fileList = _walkSync(inDir);
  const zip = new JSZip();

  fileList.forEach((file) => {
    let filePath = file;
    if (path.sep === "\\") {
      filePath = filePath.split(path.sep).join("/");
    }
    zip.file(filePath, fs.readFileSync(path.join(inDir, filePath)));
  });

  const data = await zip.generateAsync({
    type: "binarystring",
    base64: false,
    compression: "DEFLATE",
  });

  // it's important to use *binary* encode
  mkdirp.sync(path.dirname(outFile));
  fs.writeFileSync(outFile, data, "binary");
  return outFile;
};

module.exports = { zip };
