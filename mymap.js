Array.prototype.mymap = function (callback, thisArg) {
    var newarr = [];
    for (var i = 0; i < this.length; i++) {
        console.log(i)
        newarr.push(callback(this[i], i, this));
    }
    return newarr;
}

