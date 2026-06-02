import { useMutation, useQueryClient } from "@tanstack/react-query"
import { singOut } from "../../actions/auth"
import { useNavigate } from "react-router-dom"

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
            throw new Error(err.message);
        }
    })

  return {
        mutate, 
        isPending
    }
}