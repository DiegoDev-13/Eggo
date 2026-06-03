import { useMutation, useQueryClient } from "@tanstack/react-query"
import { singOut } from "../../actions/auth"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

export const useLogOut = () => {

    const queryClient = useQueryClient()
    const navigate = useNavigate()
    
    const {mutate, isPending} = useMutation({
        mutationFn: singOut,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['user']})
            queryClient.clear()
            navigate('/login', {replace: true})
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