const Basket = require("../src/basket.js");

describe("adding and removing a bagel from basket", () => {
  let basket
  const RAISIN = 'raisin bagel'
  const CHOCOLATE = 'chocolate flavoured bagel'


  beforeEach(() => {
    basket = new Basket();
  })
  //getting a new basket
  it("get a new basket", () => {
    // set up 
    const expected = []
    // execute
    let result = basket.newBasket()
    // verify
    expect(result).toEqual(expected)
  })
  //adding bagel to basket
  it("add a bagel to basket", () => {
    // set up 
    const expected = [CHOCOLATE]
    // execute
    let result = basket.addItem()
    // verify
    expect(result).toEqual(expected)
  })
  //removing bagel from basket
  it("remove a bagel from basket", () => {
    // set up 
    const expected = []
    // execute
    let result = basket.removeItem(CHOCOLATE)
    // verify
    expect(result).toEqual(expected)
  })
  //Changing bagel from basket
  it("add another bagel to basket", () => {
    // set up 
    const expected = [RAISIN]
    // execute
    let result = basket.changeItem()
    // verify
    expect(result).toEqual(expected)
  })




})
