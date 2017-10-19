var array = [10, 20, 30, 40, 50]

//实现
//添加原型 甚至可以给JS加原型用于拓展别人写好的方法
Array.prototype.myForEach = function (callback, thisArg) {
    //如果callback不为函数
    if (typeof callback !== 'function') {
        //抛出一个类型错误TypeError
        throw new TypeError(callback + 'is not a function')
    }
    for (var i = 0; i < this.length; i++) {
        //判断this第i位是否有效 返回true/false false则输出那位显示empty
        if (Object.prototype.hasOwnProperty.call(this, i)){
            callback(this[i], i, this)
        }
    }
}


