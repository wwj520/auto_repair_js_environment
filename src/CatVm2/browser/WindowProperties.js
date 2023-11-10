var WindowProperties = function WindowProperties(){

}; catvm.safefunction(WindowProperties);

//  设置名字
Object.defineProperties(WindowProperties.prototype , {
    [Symbol.toStringTag]: {
        value: "WindowProperties",
        configurable: true
    }
});
WindowProperties.prototype.__proto__ = EventTarget.prototype;