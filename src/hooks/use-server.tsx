import { getServerById } from '@/services'
import { useQuery } from '@tanstack/react-query'
import { useCookies } from 'react-cookie'
import { useParams } from 'react-router-dom'

export const useServer = () => {
  const { id } = useParams()
  const [cookies] = useCookies(['user'])
  const { accessToken } = cookies.user

  return useQuery({
    queryKey: ['server', id],
    queryFn: () => getServerById({ id: id || '', accessToken })
  })
}
