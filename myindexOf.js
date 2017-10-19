Array.prototype.myindexOf = function (searchString, position) {
    for (var i = position; i < this.length; i++) {
        if (searchString == this[i]) {
            return i
        }
    }
}
