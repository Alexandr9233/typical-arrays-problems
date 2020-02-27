
exports.min = function min (array) {
  if(!array || !array.length) {
    return 0;
  }
  return Math.min.apply(null, array);
}

exports.max = function max (array) {
  if(!array || !array.length) {
    return 0;
  }
  return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  if(!array || !array.length) {
    return 0;
  }
  var sum = 0;
  for( var i = 0; i < array.length; i++ ){
      sum += parseInt( array[i], 10 ); //don't forget to add the base
  }

  return sum/array.length;
}
