import { BeersRepository } from "@application/repositories/beers-repository";
import { Beer } from "../entities/beer";
interface GetBeerByIdRequest {
    beerId: string;
}
export declare class GetBeerById {
    private readonly beersRepository;
    constructor(beersRepository: BeersRepository);
    execute(request: GetBeerByIdRequest): Promise<Beer | null>;
}
export {};
