function receivesAFunction (callback) {
    return callback();
  }
  var fn = returnsANamedFunction();
  function returnsANamedFunction() {
    var fn = function() {
        console.log("This is a named function");
    };
    return fn;
}
var fn = returnsAnAnonymousFunction();
function returnsAnAnonymousFunction() {
    return function() {
        console.log("This one is an anonymous function")
    };
}