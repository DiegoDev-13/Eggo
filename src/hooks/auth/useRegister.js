import {useMutation, useQueryClient} from "@tanstack/react-query"
import {useNavigate} from "react-router-dom"
import { singUp } from "../../actions/auth"
import Swal from "sweetalert2"

export const useRegister = () => {

    const queryClient = useQueryClient()
    const navigate = useNavigate()
  
    const {mutate, isPending} = useMutation({
        mutationFn: singUp,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['user']})
            navigate('/')
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