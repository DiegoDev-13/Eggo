import { useMutation, useQueryClient } from "@tanstack/react-query"
import { singIn } from "../../actions/auth"
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'

export const useLogin = () => {

    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const {mutate, isPending} = useMutation({
        mutationFn: singIn,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['user']})
            navigate('/', {replace: true})
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