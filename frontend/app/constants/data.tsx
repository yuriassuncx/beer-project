import { GameController, Hamburger, Heartbeat, Wine } from "phosphor-react";

export const headerLinks = [
  {
    name: 'Drinks',
    icon: <Wine />,
    isActive: true
  },
  {
    name: 'Food',
    icon: <Hamburger />
  },
  {
    name: 'Health',
    icon: <Heartbeat />
  },
  {
    name: 'Gaming',
    icon: <GameController />
  }
]