import { getAllFaculties } from '@/services'
import { useQuery } from '@tanstack/react-query'
import { useCookies } from 'react-cookie'

export const useFaculty = () => {
  const [cookies] = useCookies(['user'])
  const { accessToken } = cookies.user

  const { isLoading, data } = useQuery({
    queryFn: () => getAllFaculties(accessToken),
    queryKey: ['faculties']
  })

  return { faculties: data || [], isLoading }
}
