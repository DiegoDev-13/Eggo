import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useGlobalStore } from "../../store/global.store"
import Swal from "sweetalert2"
import { editBatche } from "../../actions/batches"

export const useEditBatche = () => {

    const queryClient = useQueryClient()
    const {setActiveModalAddBatche, setBatcheIdDetails} = useGlobalStore()

    const {mutate, isPending, isError} = useMutation({
        mutationFn: editBatche,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['batches']})
            setActiveModalAddBatche(false)
            setBatcheIdDetails(null)
            Swal.fire({
                title: "Se ha editado el lote con éxito!",
                icon: "success",
            });
        },
        onError: (err) => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err.message,
                confirmButtonColor: '#2E7D32'
            });
        }
    })

  return {
        mutate, 
        isPending, 
        isError
    }
}