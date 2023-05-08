'use client';

import { Heart } from "phosphor-react";
import { IBeer } from "../types/typings";
import { useRouter } from "next/navigation";

interface BeerCardProps {
  beer: IBeer;
}

export function BeerCard({ beer }: BeerCardProps) {
  const router = useRouter();

  return (
    <div
      className="flex flex-col gap-6 w-full z-0"
    >
      <section className="flex items-center max-w-[16rem] relative w-full justify-center bg-white rounded-t-[45px] rounded-lg hover:scale-105 duration-150 transition cursor-pointer">
        <img
          src={beer.image_url}
          alt="Beer Image"
          onClick={() => router.push(`beers/${beer.id}`)}
        />

        <div className="absolute right-4 top-5 block z-20 bg-[#040e8d]/10 rounded-full hover:bg-[#040e8d]/20 duration-150 transition-colors">
          <Heart
            size={26}
            className="text-black p-1"
          />
        </div>
      </section>

      <div className="flex flex-col text-black gap-3">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold tracking-tight">{beer.name}</h1>

          <span className="flex items-center leading-tight gap-1 text-sm text-zinc-400">
            <p className="font-bold">Size:</p>
            <p>{beer.type}</p>
          </span>
        </div>

        <p className="text-[#040d69] text-xl font-bold tracking-wide">R$ {beer.price}</p>
      </div>
    </div>
  )
}
