var History =function History()  {
    throw new TypeError("Illegal constructor"); // 检测new,History不能被new
};  catvm.safefunction(History);

Object.defineProperties(History.prototype , {
    [Symbol.toStringTag]: {
        value: "History",
        configurable: true
    }
});
////////////////////////////////////////////////////////
History.prototype.back = function back(){debugger;} ;catvm.safefunction(History.prototype.back);

////////////////////////////////////////////////////////
history = {};
history.__proto__ = History.prototype;


history = catvm.proxy(history);