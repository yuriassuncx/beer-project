"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Beer = void 0;
const uuid_1 = require("uuid");
class Beer {
    constructor(props, id) {
        Object.assign(this, props);
        if (!id) {
            this.id = (0, uuid_1.v4)();
        }
    }
}
exports.Beer = Beer;
//# sourceMappingURL=beer.js.map