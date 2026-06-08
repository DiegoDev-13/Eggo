import { BiCategoryAlt } from "react-icons/bi";
import { MdOutlineAnalytics, MdOutlineEgg } from "react-icons/md";
import { PiMoney, PiNut } from "react-icons/pi";
import { RiStore3Line } from "react-icons/ri";

//data SIDEBAR
export const LinksArray = [
  {
    label: "Home",
    icon: <BiCategoryAlt size={22} />,
    to: "/",
  },
  {
    label: "Producción",
    icon: <MdOutlineEgg size={22} />,
    to: "/produccion",
  },
  {
    label: "Inventario",
    icon: <RiStore3Line size={22} />,
    to: "/inventario",
  },
  {
    label: "Finanzas ",
    icon: <PiMoney size={22} />,
    to: "/finanzas",
  },
  {
    label: "Reportes",
    icon: <MdOutlineAnalytics size={22} />,
    to: "/reportes",
  },
  {
    label: "Ajustes",
    icon: <PiNut />,
    to: "/ajustes",
  },
];

