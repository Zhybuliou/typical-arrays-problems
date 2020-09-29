
exports.min = function min (array) {
  if(Array.isArray(array)){
  return Math.min.apply(null, array);}
  else{return 0;}
}

exports.max = function max (array) {
    if(Array.isArray(array)){
        return Math.max.apply(null, array);}
        else{return 0;}
}

exports.avg = function avg (array) {
    if(Array.isArray(array)){
        var count = 0;
        for(let i = 0; i < array.length; i++) {
        count += array[i];
        }
        return count / array.length;
    }
        else{return 0;}
}
