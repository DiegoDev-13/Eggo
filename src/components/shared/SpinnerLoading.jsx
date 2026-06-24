import {  ImSpinner8 } from "react-icons/im";

export const SpinnerLoading = ({}) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
        <ImSpinner8 className=" animate-spin text-primary-green dark:text-green-500" size={85} />
    </div>
  )
}