import { IoMdMore } from "react-icons/io"
import { Separator } from "../shared/Separator"
import { ProgressBar } from "../shared/ProgressBar"

export const CardBatches = ({data,}) => {
  return (
    <div className="w-70 border border-gray-700 rounded-lg p-5 relative">
        <button className="cursor-pointer absolute top-6 right-5">
            <IoMdMore size={25} />
        </button>

        <div className="">
            <span className={`${data.active ? 'bg-green-300/30 ' : 'bg-amber-300/30 '}  rounded-full p-0.5 px-2 text-xs font-semibold uppercase mr-2`}>{data.active ? 'Active' : 'warning'}</span>
            <span>Batch {data.id}</span>
        </div>

        <h3 className="text-base my-1">{data.race}</h3>

        <div className="py-3 flex flex-col space-y-4">
            <div className="flex justify-between">
                <div className="flex flex-col space-y-1">
                    <span className="text-xs uppercase font-medium">Hen Count</span>
                    <span className="text-lg font-semibold">{data.hen_count} birds</span>
                </div>
                <div className="flex flex-col space-y-1">
                    <span className="text-xs uppercase font-medium">Current Age</span>
                    <span className="text-lg font-semibold">{data.current_age} Weeks</span>
                </div>
            </div>

            <div className="flex justify-between">
                <div className="flex flex-col space-y-1">
                    <span className="text-xs uppercase font-medium">Production</span>
                    <span className="text-lg font-semibold text-green-700">{data.production}%</span>
                </div>
                <div className="flex flex-col space-y-1">
                    <span className="text-xs uppercase font-medium">Mortality</span>
                    <span className="text-lg font-semibold">{data.mortality}%</span>
                </div>
            </div>
        </div>

        <ProgressBar value={data.production} target={100} />

        <Separator />

        <div className="flex justify-around items-center mt-5">
            <button className="px-5 py-1.5 border border-green-600 text-green-700 cursor-pointer rounded-lg">
                Details
            </button>
            <button className="px-5 py-1.5 bg-gray-100 cursor-pointer rounded-lg">
                Reports
            </button>
        </div>
    </div>
  )
}