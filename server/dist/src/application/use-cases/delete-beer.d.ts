import { BeersRepository } from "@application/repositories/beers-repository";
export declare class DeleteBeer {
    private readonly beersRepository;
    constructor(beersRepository: BeersRepository);
    execute(beerId: string): Promise<void>;
}
