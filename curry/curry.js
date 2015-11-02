
var curry = function(f) {
  var result = function() {
    var args = [].slice.call(arguments);
    if (args.length >= f.length) {
      return f.apply(null, args);
    } else {
      return function() {
        return result.apply(null, args.concat([].slice.call(arguments)));
      }
    }
  };
  return result;
}


module.exports=curry;
