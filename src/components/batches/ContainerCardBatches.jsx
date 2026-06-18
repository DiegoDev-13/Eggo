import { CardBatches } from "./CardBatches"

export const ContainerCardBatches = ({dataBatches}) => {
  return (
    <div className="w-full flex gap-10 justify-center flex-wrap">
        {/* <CardBatches /> */}

        {
            dataBatches.map((item, index) => (
                <CardBatches key={index} data={item} index={index}  />
            ))
        }
    </div>
  )
}