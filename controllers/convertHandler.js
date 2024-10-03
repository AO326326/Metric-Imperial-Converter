function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    const match0 = input.match(/^\d+(\.\d+)?(\/\d+(\.\d+)?)?/);
    const match3 = input.split('/');
      if(match0 && match3.length < 3){
        const match1 = match0[0]
       if(match1.includes('/')){
        const match2 = match1.split('/');  
        result = parseFloat(match2[0]) / parseFloat(match2[1]);
       }else {
        result = parseFloat(match1);
       }
      } else{
        if(this.getUnit(input) !== "invalid unit" && match3.length < 3){
          result = 1;
        }else {
      result = 'invalid number'
      }}
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    result = input.match(/[A-Za-z]+$/g)
    if(result){
      result = result[0].toLowerCase();
if(/^gal$/i.test(result)){
      result = 'gal'
}  
else if(/^l$/i.test(result)){
      result = 'L'
}
else if(/^kg$/i.test(result)){
      result = 'kg'
}
else if(/^lbs$/i.test(result)){
      result = 'lbs'
}
else if(/^mi$/i.test(result)){
      result = 'mi'
}
else if(/^km$/i.test(result)){
      result = 'km'
} 
else {
      result = 'invalid unit'
}}else {
  result = 'invalid unit'
}
    return result;
  };

  this.getUnit2 = function(input){
    let result;
    const unit = this.getUnit(input);
    if(unit === 'gal'){
      result = 'gallons'
    } else if (unit === 'L'){
      result = 'liters'
    } else if (unit === 'kg'){
      result = 'kilograms'
    } else if ( unit === 'lbs'){
      result = 'pounds'
    } else if (unit === 'mi'){
      result = 'miles'
    } else if (unit === 'km'){
      result = 'kilometers'
    }else {
      result = 'invalid unit'
    }
    return result
  }
  
  this.getReturnUnit = function(initUnit) {
    let result;
    const unit = this.getUnit(initUnit);
if(unit === 'gal'){
  result = 'L'
} else if (unit === 'L') {
  result = 'gal';
} else if (unit === 'kg') {
  result = 'lbs';
} else if (unit === 'lbs') {
  result = 'kg';
} else if (unit === 'mi') {
  result = 'km';
} else if (unit === 'km') {
  result = 'mi';
}else{
  result = 'invalid unit'
}
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    const a = this.getReturnUnit(unit);
    if(a === 'gal'){
      result = 'gallons'
      } else if (a === 'L') {
      result = 'liters'
    } else if (a === 'kg') {
      result = 'kilograms'
    } else if (a === 'lbs') {
      result = 'pounds'
    } else if (a === 'mi') {
      result = 'miles'
    } else if (a === 'km') {
      result = 'kilometers'
    } else{
      result = 'invalid unit'
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    const num = this.getNum(initNum);
    const unit = this.getUnit(initUnit);
    if(unit === 'gal'){
      result = (num * galToL).toFixed(5) 
    } else if (unit === 'L'){
      result = (num / galToL).toFixed(5)
    } else if (unit === 'lbs'){
      result = (num * lbsToKg).toFixed(5)
    } else if (unit === 'kg'){
      result = (num / lbsToKg).toFixed(5)
    } else if (unit === 'km'){
      result = (num / miToKm).toFixed(5)
    } else if (unit === 'mi'){
      result = (num * miToKm).toFixed(5)
    } else {
      result = 'invalid unit'
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    const num = this.getNum(initNum);
    const unit = this.getUnit(initUnit);
    const getReturnUnit = this.getReturnUnit(returnUnit);
    const getReturn = this.getReturn(returnNum);
    if (num !== 'invalid number' && unit !== 'invalid unit' && 
      getReturnUnit !== 'invalid unit' && getReturn !== 'invalid unit') {
    result = num + ` ${unit} ` + ' to ' + getReturn + ` ${getReturnUnit} `
      }else {
        result = 'invalid input'
      }
    return result;
  };
  
}

module.exports = ConvertHandler;
