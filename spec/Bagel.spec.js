const Basket = require('../src/basket.js');

describe('adding and removing a bagel from basket', () => {
  let basket
  const RAISIN = 'raisin bagel'
  const CHOCOLATE = 'chocolate flavoured bagel'

  beforeEach(() => {
    basket = new Basket();


  })
  //getting a new basket
  it('get a new basket', () => {
    // set up 
    const expected = []
    // execute
    let result = basket.newBasket()
    // verify
    expect(result).toEqual(expected)
  })
  //adding bagel to basket
  it('add a bagel to basket', () => {
    // set up 
    const expected = [CHOCOLATE]
    // execute
    let result = basket.addBagel()
    // verify
    expect(result).toEqual(expected)
  })
  //removing bagel from basket
  it('remove a bagel from basket', () => {
    // set up 
    const expected = []
    // execute
    let result = basket.removeBagel(CHOCOLATE)
    // verify
    expect(result).toEqual(expected)
  })
  //Changing bagel from basket
  it('add another bagel to basket', () => {
    // set up 
    const expected = [RAISIN]
    // execute
    let result = basket.changeBagel()
    // verify
    expect(result).toEqual(expected)
  })
  it('when basket is full', () => {
    // set up 
    const expected = 'this basket is full'
    basket.addMoreBagels(CHOCOLATE)
    // execute
    let result = basket.addMoreBagels()
    // verify
    expect(result).toEqual(expected)
  })
  //part two: 
  //Setting a capicity to small basket  
  it('small basket capcity of 4', () => {
    // set up 
    const expected = 4
    // execute
    let result = basket.smallBagelBasket(4)
    // verify
    expect(result).toEqual(expected)
  })
  //creating a basket with a larger capacity
  it('medium basket capcity of 8', () => {
    // set up 
    const expected = 8
    // execute
    let result = basket.mediumBagelBasket(8)
    // verify
    expect(result).toEqual(expected)
  })
  //creating a basket with a larger capacity
  it('remove item that does not exist in an array', () => {
    // set up 
    const expected = "item isn't in basket"
    // execute
    let result = basket.removeUnexistingItem("item isn't in basket")
    // verify
    expect(result).toEqual(expected)
  })








})
