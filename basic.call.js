function duckCount() {
    // return the number of arguments that have a quack property

    return Array.prototype.slice.call(arguments).filter(function(obj) {
        return Object.prototype.hasOwnProperty.call(obj, 'quack')
    }).length

    // function reduceFunc(prev, curr) {
    //     if (Object.prototype.hasOwnProperty.call(curr, 'quack')) {
    //         return prev += 1;
    //     }

    //     return prev;
    // };
    // return Array.prototype.reduce.call(arguments, reduceFunc, 0);

    // loop style
    // var cnt = 0;
    // for (var i = 0; i < arguments.length; i++) {
    //     if (Object.prototype.hasOwnProperty.call(arguments[i], 'quack')) {
    //         cnt += 1;
    //     }
    // }
    // return cnt;
}

module.exports = duckCount