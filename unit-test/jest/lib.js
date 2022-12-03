module.exports.absolute = function (number) {
  if (number > 0) return number;
  if (number < 0) return -number;
  return 0;
}


module.exports.greet = function (name) {
  return 'Welcome ' + name
}
module.exports.getCurrencies = function () {
  return ['USD', 'AUD', 'EUR'];
}

//object

module.exports.getProducts = function(productId) {
  return { id: productId , price: 10};
}

//exceptions 
module.exports.registerUser = function(username) {
  if(!username) throw new Error('username required')
  return {id: new Date().getTime() , username:username}
}