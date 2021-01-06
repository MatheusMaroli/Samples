"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Listener() {
    const subscribles = [];
    return {
        emit: (param) => {
            this.subscribles.map((fn) => fn.call(param));
        },
        subscribe: (fn) => {
            this.subscribles.push(fn);
        }
    };
}
exports.default = Listener;
//# sourceMappingURL=Listener.js.map