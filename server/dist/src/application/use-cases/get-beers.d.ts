import { BeersRepository } from "@application/repositories/beers-repository";
import { Beer } from "../entities/beer";
export declare class GetBeers {
    private readonly beersRepository;
    constructor(beersRepository: BeersRepository);
    execute(): Promise<Beer[]>;
}
