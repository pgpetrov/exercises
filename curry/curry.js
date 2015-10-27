

var gparams = [];
var globalF;


var curry = function(f) {
  gparams = [];
  globalF = f;
  var result = function() {
    var index;
    for (index = 0; index < arguments.length; ++index) {
        gparams.push(arguments[index]);
    }

    if (gparams.length == globalF.length) {
      var arg = gparams;
      gparams = [];
      return globalF.apply(null, arg);
    } else {
      return result;
    }
  };
  return result;
}


module.exports=curry;
