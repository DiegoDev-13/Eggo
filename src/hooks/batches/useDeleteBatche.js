import { useMutation, useQueryClient } from "@tanstack/react-query"
import { removeLote } from "../../actions/batches"
import Swal from "sweetalert2"

export const useDeleteBatche = () => {

    const queryClient = useQueryClient()

    const {mutate, isPending} = useMutation({
        mutationFn: removeLote,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['batches']})
            Swal.fire({
                title: "Lote liminado!",
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
        isPending
    }

}