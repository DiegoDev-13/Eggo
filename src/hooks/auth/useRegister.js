import {useMutation, useQueryClient} from "@tanstack/react-query"
import {useNavigate} from "react-router-dom"
import { singUp } from "../../actions/auth"

export const useRegister = () => {

    const queryClient = useQueryClient()
    const navigate = useNavigate()
  
    const {mutate, isPending} = useMutation({
        mutationFn: singUp,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['user']})
            console.log('usuario registrado')
            navigate('/')
        },
        onError: (err) => {
            alert(err.message, 'Error al registrar')
        }
    })

    return {
        mutate,
        isPending
    }
}