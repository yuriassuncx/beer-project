"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaBeerMapper = void 0;
class PrismaBeerMapper {
    static toPrisma(beer) {
        return {
            id: beer.id,
            name: beer.name,
            description: beer.description,
            image_url: beer.image_url,
            type: beer.type,
            price: beer.price,
        };
    }
    ;
}
exports.PrismaBeerMapper = PrismaBeerMapper;
;
//# sourceMappingURL=prisma-beer-mapper.js.map