'use client';

import { useState } from "react";

import { Profile } from "./Profile";
import { Sidebar } from "./Sidebar";

import { List } from "phosphor-react";

export function Header() {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  return (
    <>
    <header className="flex items-center w-full justify-between mt-6">
      <Profile name="teste" />

      <List
        size={30}
        onClick={() => setIsSidebarOpened(prev => !prev)}
        className="cursor-pointer hover:scale-110 transition duration-200"
      />
    </header>

    {isSidebarOpened && <Sidebar isSidebarOpened={isSidebarOpened} />}
    </>
  )
}