const fsPromises = require("fs").promises;

const deleteFileAt = async (fileLocation) => {
  return await fsPromises.unlink(fileLocation);
};

module.exports = { deleteFileAt };
