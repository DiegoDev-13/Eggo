import { useState } from "react";
import { CardBatches } from "./CardBatches"

export const ContainerCardBatches = ({dataBatches}) => {

  // Guarda el ID del lote que tiene el menú abierto
  const [activeBatchId, setActiveBatchId] = useState(null);

  return (
    <div className="w-full flex gap-10 justify-center flex-wrap">
        {/* <CardBatches /> */}

        {
            dataBatches.map((item, index) => (
                <CardBatches key={index} data={item} index={index} activeBatchId={activeBatchId} setActiveBatchId={setActiveBatchId}  />
            ))
        }
    </div>
  )
}