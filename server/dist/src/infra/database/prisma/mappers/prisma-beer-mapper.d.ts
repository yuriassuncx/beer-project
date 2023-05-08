import { Beer } from "@application/entities/beer";
export declare class PrismaBeerMapper {
    static toPrisma(beer: Beer): {
        id: string;
        name: string;
        description: string;
        image_url: string;
        type: string;
        price: number;
    };
}
