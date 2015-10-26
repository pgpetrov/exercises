var async = {
  sequence : function (seq){
    var a = seq[0];
    var b = seq[1];
    var myPromise = new Promise(function (yes, no) {
      a(function (){
        b(function() {
          yes(arguments[1]);
        }, arguments[1]);
      });
    });

    return function(run) {
      myPromise.then(function (result) {run(null, result);});
    };
  },

  parallel : function (par) {
    var a = par[0];
    var b = par[1];

    var myPromise = new Promise(function (yes, no) {
      a(function (){
        var arg = arguments[1];
        b(function() {
          yes([arg, arguments[1]]);
        }, arguments[1]);
      });
    });

    return function(cb) {
      myPromise.then(function (result) {cb(null, result);});
    };
  },
  race : function (rac) {
    var a = rac[0];
    var b = rac[1];
    var x = [new Promise(function (yes, no) {
      a(function (){
        yes(arguments[1]);
      });
    }), new Promise(function (yes, no) {
      b(function (){
        yes(arguments[1]);
      });
    })];

    return function(cb) {
      Promise.race(x).then(function (result) {cb(null, result);});
    };
  }
}


module.exports = async;
