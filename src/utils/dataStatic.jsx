import { BiCategoryAlt } from "react-icons/bi";
import { MdOutlineAnalytics, MdOutlineEgg, MdOutlineInventory2 } from "react-icons/md";
import { PiMoney, PiNut } from "react-icons/pi";
import { GrDatabase } from "react-icons/gr";

//data SIDEBAR
export const LinksArray = [
  {
    label: "Home",
    icon: <BiCategoryAlt size={22} />,
    to: "/",
  },
  {
    label: "Lotes",
    icon: <MdOutlineInventory2 size={22} />,
    to: "/lotes",
  },
  {
    label: "Producción",
    icon: <MdOutlineEgg size={22} />,
    to: "/produccion",
  },
  {
    label: "Inventario",
    icon: <GrDatabase size={18} />,
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
    label: "Configuracion",
    icon: <PiNut size={22} />,
    to: "/configuracion",
  },
];

