import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addBatches } from "../../actions/batches"
import Swal from "sweetalert2"
import { useGlobalStore } from "../../store/global.store"

export const useAddBatche = () => {

    const queryClient = useQueryClient()
    const {activeModalAddBatche, setActiveModalAddBatche} = useGlobalStore()

    const {mutate, isPending, isError} = useMutation({
        mutationFn: addBatches,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['batches']})
            setActiveModalAddBatche(false)
            Swal.fire({
                title: "Se ha registrado el lote con éxito!",
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