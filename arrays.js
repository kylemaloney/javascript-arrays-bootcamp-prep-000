var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'];

function addElementToBeginningOfArray(array, element){
  var y = [element, ...array];
  return y;
}

function destructivelyAddElementToBeginningOfArray (array, element){
  x = [array, ...array];
  return x; 
}

function addElementToEndOfArray(x, add){
  var y = [...x, add];
  return y;
}

function destructivelyAddElementToEndOfArray(x, add){
  x = [...x, add];
  return x; 
}

