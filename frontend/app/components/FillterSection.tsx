'use client';

import { MagnifyingGlass, ListDashes } from "phosphor-react";
import { headerLinks } from "../constants/data";

export function FilterSection() {
  return (
    <section className="flex flex-col items-center w-full gap-6 pt-6">
      <div className="flex items-center w-full justify-between gap-4">
        <div className="flex flex-1 items-start w-full h-full bg-white rounded-md py-4 px-3">
          <MagnifyingGlass
            size={20}
            weight="bold"
            className="text-black/70"
          />

          <input
            type="text"
            placeholder="Procurar Produtos"
            className="flex-1 pl-3 focus:outline-none text-sm md:text-base"
          />
        </div>

        <div className="flex items-center justify-center py-4 px-4 bg-gradient-to-r from-[#040e8d] to-[#040d69] rounded-md cursor-pointer">
          <ListDashes
            size={20}
            color="#fcfcfc"
            weight="bold"
          />
        </div>
      </div>

      <div className="flex items-start justify-start md:justify-center gap-3 overflow-auto md:overflow-hidden md:hover:overflow-auto w-full h-full py-3">
        {headerLinks.map((item) => (
          <div
            key={item.name}
            className={`${item.isActive ? 'bg-gradient-to-r from-[#040e8d] to-[#040d69] text-white' : 'bg-white'} flex items-center justify-center py-2 px-2 gap-2 rounded-md cursor-pointer hover:scale-110 duration-150 transition`}
          >
            <span>
              {item.icon}
            </span>

            <span className="text-sm">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
