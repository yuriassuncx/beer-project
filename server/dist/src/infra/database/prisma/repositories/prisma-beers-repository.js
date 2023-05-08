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
exports.PrismaBeersRepository = void 0;
const prisma_service_1 = require("../prisma.service");
const prisma_beer_mapper_1 = require("../mappers/prisma-beer-mapper");
const common_1 = require("@nestjs/common");
let PrismaBeersRepository = class PrismaBeersRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(beer) {
        const raw = prisma_beer_mapper_1.PrismaBeerMapper.toPrisma(beer);
        await this.prisma.beer.create({
            data: raw,
        });
    }
    async findMany() {
        const beers = await this.prisma.beer.findMany();
        return beers;
    }
    async findById(beerId) {
        const filteredBeer = await this.prisma.beer.findUnique({
            where: {
                id: beerId,
            }
        });
        if (!filteredBeer) {
            throw new Error('Beer not found!');
        }
        return filteredBeer;
    }
    async update(beerId, updateBeer) {
        const beer = await this.prisma.beer.update({
            where: {
                id: beerId,
            },
            data: updateBeer
        });
        if (!beer) {
            throw new Error('Beer not found!');
        }
        return beer;
    }
    async delete(beerId) {
        await this.prisma.beer.delete({
            where: {
                id: beerId,
            }
        });
    }
};
PrismaBeersRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaBeersRepository);
exports.PrismaBeersRepository = PrismaBeersRepository;
//# sourceMappingURL=prisma-beers-repository.js.map