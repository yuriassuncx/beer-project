"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBeerBody = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_beer_body_1 = require("./create-beer-body");
class UpdateBeerBody extends (0, mapped_types_1.PartialType)(create_beer_body_1.CreateBeerBody) {
}
exports.UpdateBeerBody = UpdateBeerBody;
//# sourceMappingURL=update-beer-body.js.map