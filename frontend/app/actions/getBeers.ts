import { IBeer } from "../types/typings";

export default async function getBeers(): Promise<IBeer[]> {
  const { beers } = await fetch('http://localhost:3333/beers').then((response) => response.json());

  return beers;
}
