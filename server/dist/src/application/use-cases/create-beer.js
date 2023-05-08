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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBeer = void 0;
const common_1 = require("@nestjs/common");
const beers_repository_1 = require("../repositories/beers-repository");
const beer_1 = require("../entities/beer");
let CreateBeer = class CreateBeer {
    constructor(beersRepository) {
        this.beersRepository = beersRepository;
    }
    async execute(request) {
        const { name, image_url, description, price, type } = request;
        const beer = new beer_1.Beer({
            description,
            image_url,
            name,
            price,
            type
        });
        await this.beersRepository.create(beer);
        return {
            beer
        };
    }
};
CreateBeer = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [beers_repository_1.BeersRepository])
], CreateBeer);
exports.CreateBeer = CreateBeer;
//# sourceMappingURL=create-beer.js.map