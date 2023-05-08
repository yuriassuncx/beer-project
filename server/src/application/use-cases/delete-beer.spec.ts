import { InMemoryBeersRepository } from "@test/repositories/in-memory-beers-repository";

describe('Delete Beer by ID', () => {
  it('should be able to delete a beer by specific id', async () => {
    const beersRepository = new InMemoryBeersRepository();

    const beerId = 'test-beer-id';

    await beersRepository.create({
      id: beerId,
      name: 'Test Beer',
      description: 'This is a test beer',
      type: 'IPA',
      price: 5.99,
      image_url: 'https://example.com/beer.jpg',
    });

    await beersRepository.delete(beerId);

    const deletedBeer = await beersRepository.findById(beerId);

    expect(deletedBeer).toBeNull();
  });
});
