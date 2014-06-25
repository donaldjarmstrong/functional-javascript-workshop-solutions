 function Spy(target, method) {
     // save original function
     var baseFunc = target[method];

     // this object will be returned
     // when callers ask for a new spy
     var spy = {
         count: 0,
         args: []
     }

     // replace with our spy wrapper
     target[method] = function() {
         spy.count++;
         spy.args.push(arguments);
         return baseFunc.apply(this, arguments);
     }

     return spy;
 }

 module.exports = Spy