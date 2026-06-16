export const MetricCard = ({icon, title, value, trend, trendType, topBorderColor}) => {
  return (
    <div className={`w-30 lg:w-39 h-40 lg:h-50 dark:bg-theme-third-dark flex flex-col space-y-2 border border-gray-500 dark:border-gray-600 py-10 px-5 rounded-xl border-t-4 ${topBorderColor}`}>
        <div className="flex justify-between items-center ">
            {icon}
            {
                trend && <span className={`${trend >= 1 ? 'text-primaryDark-green dark:text-green-500' : 'text-red-600 dark:text-red-400'}`}>{trend >= 1 ? `+${trend}%` : `${trend}%`}</span>
            }
        </div>
        <h3 className="uppercase text-xs dark:text-gray-300">{title}</h3>
        <span className="text-[22px] dark:text-white">{value}</span>
    </div>
  )
}