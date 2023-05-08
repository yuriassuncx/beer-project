import { Beer } from "@application/entities/beer";
import { BeersRepository } from "@application/repositories/beers-repository";
import { UpdateBeerBody } from "@infra/http/dtos/update-beer-body";
export declare class UpdateBeer {
    private readonly beersRepository;
    constructor(beersRepository: BeersRepository);
    execute(beerId: string, body: UpdateBeerBody): Promise<Beer>;
}
