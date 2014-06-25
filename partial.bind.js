 // this essentially curries the argument NAMESPACE!
 module.exports = function(namespace) {
     return console.log.bind(console, namespace);
 }