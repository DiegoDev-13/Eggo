import { MdOutlineEgg, MdOutlineHeartBroken, MdOutlineInventory2, MdOutlineShoppingBasket } from "react-icons/md"
import { MetricCard } from "./MetricCard"
import { IoPaw } from "react-icons/io5";
import { IoMdStarOutline } from "react-icons/io";

export const BatchesMetricCards = () => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-5">
        <MetricCard icon={<MdOutlineInventory2 size={36} className="p-1.5 rounded-lg bg-green-600/10 dark:bg-green-600/20 text-green-800 dark:text-green-500" />} title="Total batches" trend={2} value="25" topBorderColor="border-t-primaryDark-green dark:border-t-green-600"/>
        <MetricCard icon={<IoPaw size={36} className="p-1.5 rounded-lg bg-amber-700/10 dark:bg-amber-600/20 text-amber-700 dark:text-amber-500" />} title="active hens" trend={0} value="500" topBorderColor="border-t-amber-700 dark:border-t-green-600"/>
        <MetricCard icon={<MdOutlineEgg size={38} className="p-1.5 rounded-lg bg-green-600/10 dark:bg-green-600/20 text-green-800 dark:text-green-500" />} title="avg production" trend={2} value="91.8%" topBorderColor="border-t-primaryDark-green dark:border-t-green-600"/>
        <MetricCard icon={<MdOutlineHeartBroken size={36} className="p-1.5 rounded-lg bg-red-700/10 text-red-700 dark:bg-red-500/20 dark:text-red-400" />} title="mortality rate" trend={-0.2} value="0.42%" topBorderColor="border-t-red-700 dark:border-t-green-600"/>
        <MetricCard icon={<IoMdStarOutline size={36} className="p-1.5 rounded-lg bg-amber-700/10 dark:bg-amber-600/20 text-amber-700 dark:text-amber-500" />} title="active hens" value="A-1 Leghors" topBorderColor="border-t-amber-700 dark:border-t-green-600"/>
        <MetricCard icon={<MdOutlineShoppingBasket size={36} className="p-1.5 rounded-lg bg-green-600/10 dark:bg-green-600/20 text-green-800 dark:text-green-500" />} title="monthly total" trend={5.2} value="3.8M" topBorderColor="border-t-primaryDark-green dark:border-t-green-600"/>
    </div>
  )
}