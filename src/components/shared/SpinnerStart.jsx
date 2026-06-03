import { HashLoader} from "react-spinners";

export const SpinnerStart = ({loading}) => {
  return (
    <div className="w-full h-dvh flex justify-center items-center">
        <HashLoader 
            color={'#2E7D32'}
            loading={loading}
            // cssOverride={override}
            size={120}
        />
    </div>
  )
}