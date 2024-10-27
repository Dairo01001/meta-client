import { getAllFaculties } from '@/services'
import { useQuery } from '@tanstack/react-query'

export const useFaculty = () => {
  const { isLoading, data,  } = useQuery({
    queryFn: getAllFaculties,
    queryKey: ['faculties'],
  })


  return { faculties: data || [], isLoading }
}
