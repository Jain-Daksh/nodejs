module.exports = app => {


  var router = require("express").Router();
  // Create a new Comment
  router.post("/", Comment.create);
  // Retrieve all Comments
  router.get("/", Comment.findAll);
  // Retrieve a single Comment with id
  router.get("/:id", Comment.findOne);
  // Update a Comment with id
  router.put("/:id", VERIFYTOKEN, Comment.update);
  // Delete a Comment with id
  router.delete("/:id", VERIFYTOKEN, Comment.delete);
  // Delete all Comment
  router.delete("/", Comment.deleteAll);
  //Update a password
  router.put('/:id/update-password', Comment.updatePassword);

  app.use('/api/Comments', router);
};