var Future = Npm.require("fibers/future");
var glob = Npm.require("glob");

Glob = function(pattern, options){
    var future = new Future();
    var cb = future.resolver();

    glob(pattern, options || {}, cb);

    return future.wait();
};