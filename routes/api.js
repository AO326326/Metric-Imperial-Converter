'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
app.route('/api/convert')
.get((req, res) => {
  const input = req.query.input;
console.log(input)

  const initNum = convertHandler.getNum(input);
console.log(initNum)

  const initUnit = convertHandler.getUnit(input);
  console.log(initUnit)

  const returnUnit = convertHandler.spellOutUnit(initUnit);
  console.log(returnUnit)

  const returnUnit2 = convertHandler.getReturnUnit(initUnit);
  console.log(returnUnit2)

  const returnNum = convertHandler.convert(input, initUnit);
  console.log(returnNum)
  
  const initUnitString = convertHandler.getUnit2(input);
  console.log(initUnitString)

  const string = `${initNum} ${initUnitString} converts to ${returnNum} ${returnUnit}`;
  if(initNum !== 'invalid number' && initUnit !== 'invalid unit'){
  res.json({
    initNum: initNum,
    initUnit: initUnit,
    returnNum: Number(returnNum),
    returnUnit: returnUnit2,
    string: string
  })
  console.log('a')
} else if (initNum !== 'invalid number' && initUnit === 'invalid unit'){
  res.send("invalid unit")
  console.log('b')
} else if (initNum === 'invalid number' && initUnit !== 'invalid unit'){
  res.send("invalid number")
  console.log('c')
} else {
  res.send("invalid number and unit")
  console.log('d')
}
})
};
