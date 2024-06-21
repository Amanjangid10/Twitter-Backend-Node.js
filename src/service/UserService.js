const UserRepository = require("../repository/userRepository");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async signUp(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getuserByEmail(email) {
    try {
      const user = await this.userRepository.findBy({ email });
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async signIn(data) {
    try {
      const user = await this.getuserByEmail(data.email);
      if (!user) {
        throw {
          message: "user not found",
        };
      }
      if (!user.comparePassword(data.password)) {
        throw {
          message: "incorrect password",
        };
      }
      const token = user.genJWT();
      return token;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = UserService;
