import { useQuery } from "@tanstack/react-query"
import { getDetailsBatche } from "../../actions/batches"

export const useGetBatcheById = (batcheId) => {

    const {data, isLoading, isError} = useQuery({
        queryKey: ['batche'],
        queryFn: async => getDetailsBatche(batcheId),
        retry: false,
        refetchOnWindowFocus: false
    })

  return {
    data, 
    isLoading, 
    isError
  }
}