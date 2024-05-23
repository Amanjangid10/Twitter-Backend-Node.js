const User = require("../model/user");
const CrudRepository = require("./crudRepository");

class UserRepository extends CrudRepository {
  constructor() {
    super(User);
  }

  async findBy(data) {
    try {
      const response = await User.FindOne(data);
      return response;
    } catch (error) {
      console.log("something went wrong in user repository");
      throw error;
    }
  }
}

module.exports = UserRepository;
