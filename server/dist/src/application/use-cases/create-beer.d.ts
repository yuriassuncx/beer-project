import { BeersRepository } from "@application/repositories/beers-repository";
import { Beer } from "../entities/beer";
interface CreateBeerResponse {
    beer: Beer;
}
export declare class CreateBeer {
    private readonly beersRepository;
    constructor(beersRepository: BeersRepository);
    execute(request: Omit<Beer, "id">): Promise<CreateBeerResponse>;
}
export {};
