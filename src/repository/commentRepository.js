const Comment = require("../model/comments");
const CrudRepository = require("./crudRepository");

class CommentRepository extends CrudRepository {
  constructor() {
    super(Comment);
  }
}

module.exports = CommentRepository;
