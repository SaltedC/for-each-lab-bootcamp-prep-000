function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback) {
  //initialize array, containing anything you want
  //call .forEach(callback) on the new array
  //return array
  var myArray = ['Jack', 'Luke', 'Claire']
  myArray.forEach(callback)
  return myArray;
}

function doToArray(array, callback) {
  array.forEach(callback)
}
