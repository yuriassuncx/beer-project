import getBeers from "./actions/getBeers";

import { Header } from "./components/Header";
import { FilterSection } from "./components/FillterSection";
import { BeerCard } from "./components/BeerCard";

export default async function Home() {
  const beers = await getBeers();
  const beersLenght = beers.length;

  if (!beers) {
    return <p>Indisponível</p>
  }

  return (
    <main className="flex flex-col w-screen h-full py-6 px-4 lg:px-12">
      <Header />
      <FilterSection />

      <div className="flex flex-col w-full items-start justify-center mt-12">
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-lg lg:text-3xl font-bold tracking-tight">Buscar resultados</h1>
            <span className="text-xs">({beersLenght} {beersLenght > 1 ? 'itens' : 'item'})</span>
          </div>

          <p className="text-[#040d69] font-bold">(Ver todos)</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-center gap-x-4 gap-y-8 py-12 mb-6 w-full h-full">
          {beers.map((item) => (
            <BeerCard
              key={item.id}
              beer={item}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
