import { headerLinks } from "../constants/data";
import { Profile } from "./Profile";

interface SidebarProps {
  isSidebarOpened: boolean;
}

export function Sidebar({ isSidebarOpened = false }: SidebarProps) {
  return (
    <section className="fixed left-0 top-0 z-50">
      <div className={`${isSidebarOpened ? 'w-72' : 'w-0'} fixed drop-shadow-xl block py-4 px-2 h-screen overflow-auto md:overflow-hidden md:hover:overflow-auto bg-orange-100 z-50`}>
        <div className="flex flex-col justify-between w-full h-full">
          <div className="flex flex-col w-full h-full items-center">
            <h1 className="tracking-wide font-bold text-3xl text-orange-500 py-8 leading-relaxed">BeerDrinks</h1>

            <div className="flex flex-col space-y-4 mt-12 px-4 items-center justify-center w-full">
              {headerLinks.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-center items-center w-full bg-gradient-to-r py-1 from-[#040e8d] to-[#040d69] text-white rounded-lg hover:scale-105 duration-150 transition cursor-pointer"
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>

          <div className="py-4 px-4 w-full rounded-lg hover:bg-opacity-90 bg-white cursor-pointer duration-300 transition">
            <Profile name="teste" />
          </div>
        </div>
      </div>
    </section>
  )
}
