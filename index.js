function receivesAFunction (callback) {
    return callback();
  }
  function returnsANamedFunction() {
    var fn = function() {
        console.log("This is a named function");
    };
    return fn;
}