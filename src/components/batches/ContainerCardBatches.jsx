import { useState } from "react";
import { CardBatches } from "./CardBatches"
import { SpinnerLoading } from "../shared/SpinnerLoading";
import { useDeleteBatche } from "../../hooks/batches/useDeleteBatche";
import Swal from "sweetalert2";
import { useUserStore } from "../../store/useUserStore";

export const ContainerCardBatches = ({dataBatches}) => {

  // Guarda el ID del lote que tiene el menú abierto
  const [activeBatchId, setActiveBatchId] = useState(null);

  const {userData} = useUserStore()
  
  const {mutate, isPending} = useDeleteBatche()

  const handleDelete = () => {   
        Swal.fire({
            title: "Estas seguro de eliminar lote?",
            text: "¡No podrás revertir acción!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si eliminar!"
            }).then((result) => {
            if (result.isConfirmed) {
                console.log(activeBatchId)
                console.log(userData.user_id)

                const data = {
                  batcheId: activeBatchId,
                  userId: userData.user_id
                }

                mutate(data)
            }
        });
    }


  return (
    <div className="w-full flex gap-10 justify-center flex-wrap">
        {/* <CardBatches /> */}

        {
          isPending 
            ? <div className="my-30">
              <SpinnerLoading />
            </div>
            : dataBatches.map((item, index) => (
                <CardBatches key={index} data={item} activeBatchId={activeBatchId} setActiveBatchId={setActiveBatchId} handleDelete={handleDelete}  />
            ))
        }

    </div>
  )
}