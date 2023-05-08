import { InMemoryBeersRepository } from "@test/repositories/in-memory-beers-repository";

describe('Get Beer by ID', () => {
  it('should be able to get a beer by specific id', async () => {
    const beersRepository = new InMemoryBeersRepository();

    await beersRepository.create({
      id: 'teste',
      description: 'teste',
      image_url: 'teste',
      name: 'teste',
      type: 'teste',
      price: 12
    });

    const filteredBeer = await beersRepository.findById('teste');

    expect(filteredBeer).toEqual(expect.objectContaining({ id: 'teste' }));
  })
});
