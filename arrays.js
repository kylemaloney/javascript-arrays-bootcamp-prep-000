var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'];

function addElementToBeginningOfArray(x, add){
  var y = [add, ...x];
  return y;
}

function destructivelyAddElementToBeginningOfArray (x, add){
  x = [add, ...x];
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

