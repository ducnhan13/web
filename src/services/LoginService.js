const loginRepositories = require("./../repositories/login");

exports.getInfo = async (user) => {
  try {
    const result = await loginRepositories.getInfo(user);
    console.log("Login service - result: ", result[0]);
    return result;
  } catch (e) {
    throw e;
  }
};
