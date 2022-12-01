module.exports = app => {


  var router = require("express").Router();
  // Create a new User
  router.post("/", USER.create);
  // Retrieve all Users
  router.get("/", USER.findAll);
  // Retrieve a single User with id
  router.get("/:id", USER.findOne);
  // Update a User with id
  router.put("/:id", VERIFYTOKEN, USER.update);
  // Delete a User with id
  router.delete("/:id", VERIFYTOKEN, USER.delete);
  // Delete all user
  router.delete("/", USER.deleteAll);
  //Update a password
  router.put('/:id/update-password', USER.updatePassword);

  app.use('/api/users', router);
};