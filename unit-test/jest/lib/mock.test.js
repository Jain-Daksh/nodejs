const mock = require('../Mockfunction')
const db = require('../db')

describe('greet' , () => {
  it('should return discount' ,() => {
    db.getCustomerSync = function(customerId){
      console.log("fake data")
      return {id: customerId , points: 20}
    }

    const order = {customerId: 1, totalPrice: 10} 
    const result = mock.applyDiscount(order)

    
    expect(order.totalPrice).toBe(9)
  });
});