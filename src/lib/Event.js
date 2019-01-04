var Event = {
    // 通过on接口监听事件name
    on: function (name, callback) {
        //你的代码
        this.init_handles();

        if (!this.handles[name]) {
            this.handles[name] = [];
        }
        this.handles[name].push(callback);
    },
    //一次性事件
    one: function (name, callback) {
        this.init_handles();
        this.handles[name] = callback;
    },
    //释放事件
    off: function (name) {
        if (this.handles && this.handles[name]) {
            delete this.handles[name];
        }
    },
    // 触发事件
    emit: function (name) {
        if (this.handles && this.handles[name]) {
            var handel = this.handles[name];
            if (typeof handel == 'function') {
                handel.apply(this, Array.prototype.slice.call(arguments, 1));
                this.off(name);
            } else {
                for (var i = 0; i < handel.length; i++) {
                    handel[i].apply(this, Array.prototype.slice.call(arguments, 1));
                }
            }
        }
    },
    //内部代码,外部无须使用
    init_handles: function () {
        if (!this.handles) {
            Object.defineProperty(this, "handles", {
                value: {},
                enumerable: false,
                configurable: true,
                writable: true
            })
        }
    }
};

export default Event;
