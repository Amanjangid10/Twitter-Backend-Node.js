const UserService = require("../service/UserService");

const userService = new UserService();

const signup = async (req, res) => {
  try {
    const user = await userService.signUp({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    });
    return res.status(200).json({
      data: user,
      success: true,
      message: "succesfully created user",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      data: {},
      success: false,
      message: "something went wrong while creating user",
      err: error,
    });
  }
};

const signIn = async (req, res) => {
  try {
    const token = await userService.signIn(req.body);
    console.log(token);
    return res.status(200).json({
      data: token,
      success: true,
      message: "succesfully created user",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      data: {},
      success: true,
      message: "something went wrong while login",
      err: error,
    });
  }
};

module.exports = { signup, signIn };
