import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { UserCardBar } from "./userCardBar";
import { useUserStore } from "../../store/useUserStore";

export const AppBar = () => {

    const {user, userData, isLoading} = useUserStore()

  return (
    <div className="dark:bg-theme-primary-dark px-3 md:px-6 md:py-2 border-b border-stone-500 dark:border-theme-textLight w-full flex">
        <div className="w-[49%] border-r border-stone-500 flex justify-center items-center pr-5">
            <button type="button" className="bg-theme-primary dark:bg-theme-third-dark p-3.25 rounded-l-lg cursor-pointer">
                <IoIosSearch size={22} className="dark:text-gray-300" />
            </button>
            <input type="search" id="" placeholder="Search analytics, batches, or reports..." className="w-full bg-theme-primary dark:bg-theme-third-dark text-black dark:text-white px-4 py-3 rounded-r-lg focus:outline-none" />
        </div>

        <div className="w-[24%] px-1 md:px-4 border-r border-stone-500 flex flex-col justify-center items-center ">
            <h3 className="text-sm md:text-base text-center dark:text-gray-300">Quick Stats</h3>
            <span className="text-primary-green dark:text-green-500 font-semibold text-sm md:text-base text-center">12,482 Eggs Today</span>
        </div>

        <div className="w-[24%] flex justify-center items-center">
            <IoMdNotificationsOutline size={25} className="dark:text-gray-300" />

            <UserCardBar username={userData.full_name} />
        </div>
    </div>
  )
}