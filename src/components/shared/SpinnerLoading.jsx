import { MoonLoader } from "react-spinners";

export const SpinnerLoading = ({loading}) => {
  return (
    <div className="w-full h-dvh flex justify-center items-center">
        <MoonLoader 
            color={'#2E7D32'}
            loading={loading}
            // cssOverride={override}
            size={70}
        />
    </div>
  )
}