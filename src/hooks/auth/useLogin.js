import { useMutation, useQueryClient } from "@tanstack/react-query"
import { singIn } from "../../actions/auth"
import { useNavigate } from "react-router-dom"

export const useLogin = () => {

    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const {mutate, isPending} = useMutation({
        mutationFn: singIn,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['user']})
            navigate('/')
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