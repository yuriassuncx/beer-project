"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeersController = void 0;
const common_1 = require("@nestjs/common");
const create_beer_body_1 = require("../dtos/create-beer-body");
const create_beer_1 = require("../../../application/use-cases/create-beer");
const get_beers_1 = require("../../../application/use-cases/get-beers");
const get_beer_by_id_1 = require("../../../application/use-cases/get-beer-by-id");
const update_beer_1 = require("../../../application/use-cases/update-beer");
const update_beer_body_1 = require("../dtos/update-beer-body");
const delete_beer_1 = require("../../../application/use-cases/delete-beer");
let BeersController = class BeersController {
    constructor(createBeer, getBeers, getBeerById, updateBeer, deleteBeer) {
        this.createBeer = createBeer;
        this.getBeers = getBeers;
        this.getBeerById = getBeerById;
        this.updateBeer = updateBeer;
        this.deleteBeer = deleteBeer;
    }
    async findMany() {
        const beers = await this.getBeers.execute();
        return {
            beers
        };
    }
    async findById(beerId) {
        const beer = await this.getBeerById.execute({
            beerId,
        });
        return {
            beer
        };
    }
    async create(body) {
        const { description, name, price, image_url, type } = body;
        const { beer } = await this.createBeer.execute({
            price,
            description,
            image_url,
            name,
            type,
        });
        return {
            beer
        };
    }
    async update(beerId, updateBeer) {
        const beer = await this.updateBeer.execute(beerId, updateBeer);
        return {
            beer
        };
    }
    async delete(beerId) {
        const beer = await this.deleteBeer.execute(beerId);
        return beer;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BeersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':beerId'),
    __param(0, (0, common_1.Param)('beerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BeersController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_beer_body_1.CreateBeerBody]),
    __metadata("design:returntype", Promise)
], BeersController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':beerId'),
    __param(0, (0, common_1.Param)('beerId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_beer_body_1.UpdateBeerBody]),
    __metadata("design:returntype", Promise)
], BeersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':beerId'),
    __param(0, (0, common_1.Param)('beerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BeersController.prototype, "delete", null);
BeersController = __decorate([
    (0, common_1.Controller)('beers'),
    __metadata("design:paramtypes", [create_beer_1.CreateBeer,
        get_beers_1.GetBeers,
        get_beer_by_id_1.GetBeerById,
        update_beer_1.UpdateBeer,
        delete_beer_1.DeleteBeer])
], BeersController);
exports.BeersController = BeersController;
//# sourceMappingURL=beers.controller.js.map