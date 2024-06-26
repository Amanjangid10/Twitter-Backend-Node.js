class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    console.log(data);
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      console.log("something went wrong in crud repo create");
      throw error;
    }
  }

  async destroy(id) {
    try {
      const response = await this.model.findByIdAndDelete(id);
      return response;
    } catch (error) {
      console.log("something went wrong in crud repo destroy");
      throw error;
    }
  }

  async get(id) {
    try {
      const response = await this.model.findById(id);
      return response;
    } catch (error) {
      console.log("something went wrong in crud repo get");
      throw error;
    }
  }
  async getAll() {
    try {
      const response = await this.model.find();
      return response;
    } catch (error) {
      console.log("something went wrong in crud repo getall");
      throw error;
    }
  }

  async update(id, data) {
    try {
      const response = await this.model.findByIdAndUpdate(id, data, {
        new: true,
      });
      return response;
    } catch (error) {
      console.log("something went wrong in crud repo  update");
      throw error;
    }
  }
}

module.exports = CrudRepository;
