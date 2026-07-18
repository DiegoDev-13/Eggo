export const TableHealth = ({tableHeader}) => {
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
                            Mareks Disease
                        </span>
                    </td>
                    <td className="p-4 tracking-tighter">
                        <span className={`font-semibol rounded-lg text-[17px] dark:text-gray-200`}> 
                            Jan 15, 2024
                        </span>
                    </td>
                    <td className="p-4 tracking-tighter">
                        <span className={`font-bold rounded-lg dark:text-gray-200 uppercase text-[11px] bg-green-500/20 text-green-700 px-2 py-1`}> 
                            Completed
                        </span>
                    </td>
                </tr>

                <tr key={1} className="border-b border-stone-400" >
                    <td className="p-4 tracking-tighter">
                        <span className={`font-semibol rounded-lg text-[17px] dark:text-gray-200`}> 
                            Newcastle (B1)
                        </span>
                    </td>
                    <td className="p-4 tracking-tighter">
                        <span className={`font-semibol rounded-lg text-[17px] dark:text-gray-200`}> 
                            feb 10, 2024
                        </span>
                    </td>
                    <td className="p-4 tracking-tighter">
                        <span className={`font-bold rounded-lg dark:text-gray-200 uppercase text-[11px] bg-green-500/20 text-green-700 px-2 py-1`}> 
                            Completed
                        </span>
                    </td>
                </tr>

                <tr key={1} className="border-b border-stone-400" >
                    <td className="p-4 tracking-tighter">
                        <span className={`font-semibol rounded-lg text-[17px] dark:text-gray-200`}> 
                            Gumboro (IBD)
                        </span>
                    </td>
                    <td className="p-4 tracking-tighter">
                        <span className={`font-semibol rounded-lg text-[17px] dark:text-gray-200`}> 
                            Sep 30, 2024
                        </span>
                    </td>
                    <td className="p-4 tracking-tighter">
                        <span className={`font-bold rounded-lg dark:text-gray-200 uppercase text-[11px] bg-green-500/20 text-green-700 px-2 py-1`}> 
                            Completed
                        </span>
                    </td>
                </tr>

                <tr key={1} className="border-b border-stone-400" >
                    <td className="p-4 tracking-tighter">
                        <span className={`font-semibol rounded-lg text-[17px] dark:text-gray-200`}> 
                            Newcastle Booster
                        </span>
                    </td>
                    <td className="p-4 tracking-tighter">
                        <span className={`font-semibol rounded-lg text-[17px] dark:text-gray-200`}> 
                            Oct 28, 2024
                        </span>
                    </td>
                    <td className="p-4 tracking-tighter">
                        <span className={`font-bold rounded-lg dark:text-gray-200 uppercase text-[11px] bg-green-500/20 text-green-700 px-2 py-1`}> 
                            sheduleo
                        </span>
                    </td>
                </tr>

                <tr key={1} className="border-b border-stone-400" >
                    <td className="p-4 tracking-tighter">
                        <span className={`font-semibol rounded-lg text-[17px] dark:text-gray-200`}> 
                            Avian Flu
                        </span>
                    </td>
                    <td className="p-4 tracking-tighter">
                        <span className={`font-semibol rounded-lg text-[17px] dark:text-gray-200`}> 
                            Nov 15, 2024
                        </span>
                    </td>
                    <td className="p-4 tracking-tighter">
                        <span className={`font-bold rounded-lg dark:text-gray-200 uppercase text-[11px] bg-green-500/20 text-green-700 px-2 py-1`}> 
                            sheduleo
                        </span>
                    </td>
                </tr>

                
            </tbody>
        </table>
    </div>
  )
}