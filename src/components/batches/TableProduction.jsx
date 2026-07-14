export const TableProduction = ({tableHeader}) => {
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
                            Oct 17 (Today)
                        </span>
                    </td>
                    <td className="p-4 tracking-tighter">
                        <span className={`font-semibol rounded-lg text-[17px] dark:text-gray-200`}> 
                            1,105
                        </span>
                    </td>
                    <td className="p-4 tracking-tighter">
                        <span className={`font-semibol rounded-lg text-[17px] dark:text-gray-200`}> 
                            12
                        </span>
                    </td>
                    <td className="p-4 tracking-tighter">
                        <span className={`font-semibol rounded-lg text-[17px] dark:text-gray-200`}> 
                            14
                        </span>
                    </td>
                    <td className="p-4 tracking-tighter ">
                        <span className={`font-bold text-green-700 dark:text-green-500 uppercase rounded-lg text-xs`}> 
                            92,4%
                        </span>
                    </td>
                </tr>

                <tr key={1} className="border-b border-stone-400" >
                    <td className="p-4 tracking-tighter">
                        <span className={`font-semibol rounded-lg text-[17px] dark:text-gray-200`}> 
                            Oct 16
                        </span>
                    </td>
                    <td className="p-4 tracking-tighter">
                        <span className={`font-semibol rounded-lg text-[17px] dark:text-gray-200`}> 
                            1,112
                        </span>
                    </td>
                    <td className="p-4 tracking-tighter">
                        <span className={`font-semibol rounded-lg text-[17px] dark:text-gray-200`}> 
                            8
                        </span>
                    </td>
                    <td className="p-4 tracking-tighter">
                        <span className={`font-semibol rounded-lg text-[17px] dark:text-gray-200`}> 
                            15
                        </span>
                    </td>
                    <td className="p-4 tracking-tighter ">
                        <span className={`font-bold text-green-700 dark:text-green-500 uppercase rounded-lg text-xs`}> 
                            92,9%
                        </span>
                    </td>
                </tr>

                <tr key={1} className="border-b border-stone-400" >
                    <td className="p-4 tracking-tighter">
                        <span className={`font-semibol rounded-lg text-[17px] dark:text-gray-200`}> 
                            Oct 15
                        </span>
                    </td>
                    <td className="p-4 tracking-tighter">
                        <span className={`font-semibol rounded-lg text-[17px] dark:text-gray-200`}> 
                            1,098
                        </span>
                    </td>
                    <td className="p-4 tracking-tighter">
                        <span className={`font-semibol rounded-lg text-[17px] dark:text-gray-200`}> 
                            14
                        </span>
                    </td>
                    <td className="p-4 tracking-tighter">
                        <span className={`font-semibol rounded-lg text-[17px] dark:text-gray-200`}> 
                            12
                        </span>
                    </td>
                    <td className="p-4 tracking-tighter ">
                        <span className={`font-bold text-green-700 dark:text-green-500 uppercase rounded-lg text-xs`}> 
                            91,8%
                        </span>
                    </td>
                </tr>

                <tr key={1} className="border-b border-stone-400" >
                    <td className="p-4 tracking-tighter">
                        <span className={`font-semibol rounded-lg text-[17px] dark:text-gray-200`}> 
                            Oct 14
                        </span>
                    </td>
                    <td className="p-4 tracking-tighter">
                        <span className={`font-semibol rounded-lg text-[17px] dark:text-gray-200`}> 
                            1,101
                        </span>
                    </td>
                    <td className="p-4 tracking-tighter">
                        <span className={`font-semibol rounded-lg text-[17px] dark:text-gray-200`}> 
                            10
                        </span>
                    </td>
                    <td className="p-4 tracking-tighter">
                        <span className={`font-semibol rounded-lg text-[17px] dark:text-gray-200`}> 
                            13
                        </span>
                    </td>
                    <td className="p-4 tracking-tighter ">
                        <span className={`font-bold text-green-700 dark:text-green-500 uppercase rounded-lg text-xs`}> 
                            92,1%
                        </span>
                    </td>
                </tr>
                
            </tbody>
        </table>
    </div>
  )
}