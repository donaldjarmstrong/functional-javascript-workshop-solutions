// function(prev, curr, index, arr)
function reduce(arr, fn, initial) {
    function doIt(i, prev) {
        if (i >= arr.length)
            return prev;

        return doIt(i + 1, fn(prev, arr[i], i, arr));
    };

    return doIt(0, initial);

    // looping version
    // var prev = initial;
    // for (i = 0; i < arr.length; i++) {
    //     prev = fn(prev, arr[i], i, arr);
    // }
    // return prev;
}

module.exports = reduce;