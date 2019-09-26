function scaleBalance(strArr) {
    // not an array
    if (!Array.isArray(strArr)) {
      throw new Error('Not an array!');
    }
  
    // does not contain two elements
    if (strArr.length !== 2) {
      throw new Error('Needs to have 2 elements!');
    }
  
    // not every element of array is a string
    const bothStrings = strArr.every(function(elem) {
      return typeof elem === 'string';
    });
    if (!bothStrings) {
      throw new Error('Needs to be an array of strings!');
    }
  
    // parse input arrays
    const BalArr = JSON.parse(strArr[0]);
    const weightsArr = JSON.parse(strArr[1]);
  
    // weights for balancing is an empty array
    if (weightsArr.length === 0) {
      throw new Error('2nd element cannot be empty!');
    }
  
    // scale and weights are not all positive integers
    const allPositive = BalArr.concat(weightsArr).every(function(elem) {
      return elem > 0;
    });
  
    if (!allPositive) {
      throw new Error('Weights need to be positive integers!');
    }
  
    const weightNeeded = BalArr[0] - BalArr[1];
    const absWeightNeeded = Math.abs(weightNeeded);
  
    let addCheck = 0;
    let minusCheck = 0;
  
    let returnVal = 0;
  
    for (let i = 0; i < weightsArr.length; i++) {

      if (weightsArr[i] === absWeightNeeded) {
        return `0,${weightsArr[i].toString()}`;
      }
  
   
      for (let j = i + 1; j < weightsArr.length; j++) {
        addCheck = Math.abs(weightsArr[i] + weightsArr[j]);
        minusCheck = Math.abs(weightsArr[i] - weightsArr[j]);
        if (addCheck === absWeightNeeded || minusCheck === absWeightNeeded) {
          returnVal = `${Math.min(weightsArr[i], weightsArr[j]).toString()},${Math.max(
            weightsArr[i],
            weightsArr[j],
          ).toString()}`;
        }
      }
    }
  
    if (returnVal !== 0) {
      return returnVal;
    } else {
      return 'Not possible';
    }
  }
  
  module.exports = scaleBalance;