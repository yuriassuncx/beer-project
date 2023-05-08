import { InMemoryBeersRepository } from "@test/repositories/in-memory-beers-repository";
import { CreateBeer } from "./create-beer";

describe('Create Beer', () => {
  it('should be able to create a beer', async () => {
    const beersRepository = new InMemoryBeersRepository();
    const createBeer = new CreateBeer(beersRepository);

    const { beer } = await createBeer.execute({
      name: 'Cerveja IPA',
      description: 'Cerveja com amargor e aroma de lúpulo.',
      price: 12,
      type: 'Ale',
      image_url: 'https://giassi.vtexassets.com/arquivos/ids/581381/Cerveja-IPA-Lagunitas-Garrafa-355ml.png?v=638137981168400000'
    });

    expect(beersRepository.beers).toHaveLength(1);
    expect(beersRepository.beers[0]).toEqual(beer);
  })
});
