import { Beer } from "@application/entities/beer";

export class PrismaBeerMapper {
  static toPrisma(beer: Beer) {
      return {
          id: beer.id,
          name: beer.name,
          description: beer.description,
          image_url: beer.image_url,
          type: beer.type,
          price: beer.price,
      };
  };
};
