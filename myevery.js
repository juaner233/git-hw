Array.prototype.myevery = function (callback) {
    // var istrue = false
    // if (typeof callback !== 'function') {
    //     //抛出一个类型错误TypeError
    //     throw new TypeError(callback + 'is not a function')
    // }
    // for (var i = 0; i < this.length; i++) {
    //    return callback.call(this[i], i, this)
    // }
    var istrue = true;
    for (var i = 0; i < this.length; i++) {
        if (istrue == false) {
            break
        }
        istrue = callback(this[i], i, this);
        // console.log(istrue)
    }
    return istrue;
}
