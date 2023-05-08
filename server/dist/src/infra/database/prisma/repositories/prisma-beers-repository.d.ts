import { Beer } from "@application/entities/beer";
import { BeersRepository } from "@application/repositories/beers-repository";
import { PrismaService } from "../prisma.service";
import { UpdateBeerBody } from "@infra/http/dtos/update-beer-body";
export declare class PrismaBeersRepository implements BeersRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(beer: Beer): Promise<void>;
    findMany(): Promise<Beer[]>;
    findById(beerId: string): Promise<Beer | null>;
    update(beerId: string, updateBeer: UpdateBeerBody): Promise<Beer>;
    delete(beerId: string): Promise<void>;
}
