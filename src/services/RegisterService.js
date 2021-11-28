const registerRepositories = require("./../repositories/register");

exports.sendInfo = async (newuser) => {
  try {
    const result = await registerRepositories.sendInfo(newuser);
    return result;
  } catch (e) {
    throw e;
  }
};
