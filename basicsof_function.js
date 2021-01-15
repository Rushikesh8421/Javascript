function multiplyer(x){
  var day = function(y){
    return x*y;
  }
  return day;
}

var night = multiplyer(5);
console.log(night(5));

function doOperationOn(y, operation){
  return operation(y);
}

var result = doOperationOn(3, night);
console.log(result);
