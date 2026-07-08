export const TableData = ({tableHeader}) => {
  return (
    <div className="relative w-full ">
    
        <table className="text-sm w-full caption-bottom overflow-auto ">
            <thead className="bg-slate-200 dark:bg-theme-primary-dark  pb-3">
                <tr className="text-xs text-gray-800 dark:text-gray-400 font-bold text-left">
                    {
                        tableHeader.map((header, index) => (
                            <th key={index} className="h-12 px-4 uppercase">
                                {header}
                            </th>
                        ))
                    }
                </tr>
            </thead>

            <tbody className="[&_tr:last-child]:border-0">

                <tr key={1} className="border-b border-stone-400" >
                    <td className="p-4 tracking-tighter">
                        <span className={`font-semibol rounded-lg text-[17px] dark:text-gray-200`}> 
                            Today, 10:45 AM
                        </span>
                    </td>
                    <td className="p-4 tracking-tighter ">
                        <span className={`font bg-green-500/30 dark:bg-green-500/15 font-medium text-green-700 dark:text-green-500 px-2 py-0.5 uppercase rounded-lg text-[14px]`}> 
                            production
                        </span>
                    </td>
                    <td className="p-4 font-medium tracking-tighter max-w-25 ">
                        <div className="flex items-center space-x-2">
                            <div className="bg-red-500 h-8 w-8 rounded-full">
                            </div>
                            <span className={`font-semibol rounded-lg text-[17px] dark:text-gray-200`}> 
                                S. Jenkins
                            </span>
                        </div>
                    </td>
                    <td className="p-4 font-medium tracking-tighter w-64 max-w-xs"> 
                        <span className=" text-gray-700 py-1 px-2 rounded-lg line-clamp-1 block dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
                        </span>
                    </td>
                </tr>

                <tr key={1} className="border-b border-stone-400" >
                    <td className="p-4 tracking-tighter">
                        <span className={`font-semibol rounded-lg text-[17px] dark:text-gray-200`}> 
                            Yesterday, 04:20 PM
                        </span>
                    </td>
                    <td className="p-4 tracking-tighter ">
                        <span className={`font bg-green-500/30 dark:bg-green-500/15 font-medium text-green-700 dark:text-green-500 px-2 py-0.5 uppercase rounded-lg text-[14px]`}> 
                            feeding
                        </span>
                    </td>
                    <td className="p-4 font-medium tracking-tighter max-w-25 ">
                        <div className="flex items-center space-x-2">
                            <div className="bg-blue-500 h-8 w-8 rounded-full">
                            </div>
                            <span className={`font-semibol rounded-lg text-[17px] dark:text-gray-200`}> 
                                M. Kalu
                            </span>
                        </div>
                    </td>
                    <td className="p-4 font-medium tracking-tighter w-64 max-w-xs"> 
                        <span className=" text-gray-700 py-1 px-2 rounded-lg line-clamp-1 block dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
                        </span>
                    </td>
                </tr>
                
            </tbody>
        </table>
    </div>
  )
}