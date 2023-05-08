"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("./database/database.module");
const beers_controller_1 = require("./http/controllers/beers.controller");
const create_beer_1 = require("../application/use-cases/create-beer");
const get_beers_1 = require("../application/use-cases/get-beers");
const get_beer_by_id_1 = require("../application/use-cases/get-beer-by-id");
const update_beer_1 = require("../application/use-cases/update-beer");
const delete_beer_1 = require("../application/use-cases/delete-beer");
let HttpModule = class HttpModule {
};
HttpModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [beers_controller_1.BeersController],
        providers: [
            create_beer_1.CreateBeer,
            get_beers_1.GetBeers,
            get_beer_by_id_1.GetBeerById,
            update_beer_1.UpdateBeer,
            delete_beer_1.DeleteBeer,
        ],
    })
], HttpModule);
exports.HttpModule = HttpModule;
//# sourceMappingURL=http.module.js.map