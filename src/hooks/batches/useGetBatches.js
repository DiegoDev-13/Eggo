import { useQuery } from "@tanstack/react-query"
import { getBatches } from "../../actions/batches"

export const useGetBatches = (userId) => {

    const {data, isLoading, isError} = useQuery({
        queryKey: ['batches'],
        queryFn: async () => getBatches(userId),
        retry: false,
        refetchOnWindowFocus: false
    })

  return {
    data, 
    isLoading, 
    isError
  }
}