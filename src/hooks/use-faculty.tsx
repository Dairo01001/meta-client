import { getAllFaculties } from '@/services'
import { useQuery } from '@tanstack/react-query'
import { useAppSelector } from './hooks'

export const useFaculty = () => {
  const { accessToken } = useAppSelector(state => state.user)

  const { isLoading, data } = useQuery({
    queryFn: () => getAllFaculties(accessToken),
    queryKey: ['faculties']
  })

  return { faculties: data || [], isLoading }
}
