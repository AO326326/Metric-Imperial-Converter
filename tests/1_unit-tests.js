const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
test("convertHandler should correctly read a whole number input.", function(){
    assert.equal(convertHandler.getNum('15kg'), 15);
    assert.equal(convertHandler.getNum('234lbs'), 234);
})
test("convertHandler should correctly read a decimal number input.", function(){
    assert.equal(convertHandler.getNum('15.5kg'), 15.5);
    assert.equal(convertHandler.getNum('234.6lbs'), 234.6);
})
test("convertHandler should correctly read a fractional input.", function(){
    assert.equal(convertHandler.getNum('15/2kg'), 7.5);
    assert.equal(convertHandler.getNum('234/3lbs'), 78);
})
test("convertHandler should correctly read a fractional input with a decimal.", function(){
    assert.equal(convertHandler.getNum('15.2/3kg'), 5.066666666666666);
    assert.equal(convertHandler.getNum('234.5/6lbs'), 39.083333333333336);
})
test("convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3)", function(){
    assert.equal(convertHandler.getNum('3/2/3kg'), 'invalid number');
})
test("convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.", function(){
    assert.equal(convertHandler.getNum('kg'), 1);
    assert.equal(convertHandler.getNum('lbs'), 1);
})
test("convertHandler should correctly read each valid input unit.", function(){
    assert.equal(convertHandler.getUnit('kg'), 'kg');
    assert.equal(convertHandler.getUnit('lbs'), 'lbs');
    assert.equal(convertHandler.getUnit('mi'), 'mi');
})
test("convertHandler should correctly return an error for an invalid input unit.", function(){
    assert.equal(convertHandler.getUnit('g'), 'invalid unit');
})
test("convertHandler should return the correct return unit for each valid input unit.", function(){
    assert.equal(convertHandler.getReturnUnit('kg'),'lbs');
    assert.equal(convertHandler.getReturnUnit('lbs'),'kg');
    assert.equal(convertHandler.getReturnUnit('mi'),'km');
})
test("convertHandler should correctly return the spelled-out string unit for each valid input unit.", function(){
    assert.equal(convertHandler.spellOutUnit('kg'),'pounds');
    assert.equal(convertHandler.spellOutUnit('lbs'),'kilograms');
    assert.equal(convertHandler.spellOutUnit('mi'),'kilometers');
})
test("convertHandler should correctly convert gal to L.", function(){
    assert.equal(convertHandler.convert('1gal', 'gal'), 3.78541)
})
test("convertHandler should correctly convert L to gal.", function(){
    assert.equal(convertHandler.convert('1L', 'L'), 0.26417)
})
test("convertHandler should correctly convert mi to km.", function(){
    assert.equal(convertHandler.convert('1mi', 'mi'), 1.60934)
})
test("convertHandler should correctly convert km to mi.", function(){
    assert.equal(convertHandler.convert('1km', 'km'), 0.62137)
})
test("convertHandler should correctly convert lbs to kg.", function(){
    assert.equal(convertHandler.convert('1lbs', 'lbs'), 0.45359)
})
test("convertHandler should correctly convert kg to lbs.", function(){
    assert.equal(convertHandler.convert('1kg', 'kg'), 2.20462)
})
});