import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { UserCardBar } from "./userCardBar";
import { useUserStore } from "../../store/useUserStore";

export const AppBar = () => {

    const {user, userData, isLoading} = useUserStore()
    
    console.log(userData)

  return (
    <div className="px-6 py-2 border-b border-stone-500 w-full flex">
        <div className="w-[49%] border-r border-stone-500 flex justify-center items-center pr-5">
            <button type="button" className="bg-theme-primary p-[11.5px] rounded-l-lg cursor-pointer">
                <IoIosSearch size={25} />
            </button>
            <input type="search" id="" placeholder="Search analytics, batches, or reports..." className="w-full bg-theme-primary px-4 py-3 rounded-r-lg focus:outline-none" />
        </div>

        <div className="w-[24%] px-4 border-r border-stone-500 flex flex-col justify-center items-center ">
            <h3>Quick Stats</h3>
            <span className="text-primary-green font-semibold">12,482 Eggs Today</span>
        </div>

        <div className="w-[24%] flex justify-around items-center">
            <IoMdNotificationsOutline size={25} />

            <UserCardBar username={userData.full_name} />
        </div>
    </div>
  )
}