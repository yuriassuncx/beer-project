import { CreateBeerBody } from '../dtos/create-beer-body';
import { CreateBeer } from '@application/use-cases/create-beer';
import { GetBeers } from '@application/use-cases/get-beers';
import { GetBeerById } from '@application/use-cases/get-beer-by-id';
import { UpdateBeer } from '@application/use-cases/update-beer';
import { UpdateBeerBody } from '../dtos/update-beer-body';
import { DeleteBeer } from '@application/use-cases/delete-beer';
export declare class BeersController {
    private createBeer;
    private getBeers;
    private getBeerById;
    private updateBeer;
    private deleteBeer;
    constructor(createBeer: CreateBeer, getBeers: GetBeers, getBeerById: GetBeerById, updateBeer: UpdateBeer, deleteBeer: DeleteBeer);
    findMany(): Promise<{
        beers: import("../../../application/entities/beer").Beer[];
    }>;
    findById(beerId: string): Promise<{
        beer: import("../../../application/entities/beer").Beer;
    }>;
    create(body: CreateBeerBody): Promise<{
        beer: import("../../../application/entities/beer").Beer;
    }>;
    update(beerId: string, updateBeer: UpdateBeerBody): Promise<{
        beer: import("../../../application/entities/beer").Beer;
    }>;
    delete(beerId: string): Promise<void>;
}
