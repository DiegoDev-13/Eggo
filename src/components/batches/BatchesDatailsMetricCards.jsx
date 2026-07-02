import { MdOutlineEgg } from "react-icons/md"
import { MetricCard } from "./MetricCard"
import { PiMoneyWavyBold, PiUsersThreeDuotone, PiWarningBold } from "react-icons/pi";
import { ImStatsBars } from "react-icons/im";
import { GiForkKnifeSpoon } from "react-icons/gi";

export const BatchesDatailsMetricCards = () => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-5">
        <MetricCard icon={<PiUsersThreeDuotone size={36} className="p-1.5 rounded-lg bg-green-600/10 dark:bg-green-600/20 text-green-800 dark:text-green-500" />} title="Total hends" trend={2} value="1,250" topBorderColor="border-t-primaryDark-green dark:border-t-green-600" height={39} width={34}/>
        <MetricCard icon={<MdOutlineEgg size={38} className="p-1.5 rounded-lg bg-green-600/10 dark:bg-green-600/20 text-green-800 dark:text-green-500" />} title="production" trend={0} value="92%" topBorderColor="border-t-primaryDark-green dark:border-t-green-600" height={39} width={34}/>
        <MetricCard icon={<ImStatsBars size={36} className="p-1.5 rounded-lg bg-green-600/10 dark:bg-green-600/20 text-green-800 dark:text-green-500" />} title="Egg today" trend={2} value="1,105" topBorderColor="border-t-primaryDark-green dark:border-t-green-600" height={39} width={34}/>
        <MetricCard icon={<PiWarningBold size={36} className="p-1.5 rounded-lg bg-red-700/10 text-red-700 dark:bg-red-500/20 dark:text-red-400" />} title="mortality" trend={-0.2} value="2,3%" topBorderColor="border-t-red-700 dark:border-t-green-600" height={39} width={34}/>
        <MetricCard icon={<GiForkKnifeSpoon size={36} className="p-1.5 rounded-lg bg-amber-700/10 dark:bg-amber-600/20 text-amber-700 dark:text-amber-500" />} title="feed cons" value="185 kg" topBorderColor="border-t-amber-700 dark:border-t-green-600" height={39} width={34}/>
        <MetricCard icon={<PiMoneyWavyBold size={36} className="p-1.5 rounded-lg bg-amber-700/10 dark:bg-amber-600/20 text-amber-700 dark:text-amber-500" />} title="revenue/m" value="$4,560" topBorderColor="border-t-amber-700 dark:border-t-green-600" height={39} width={34}/>
    </div>
  )
}