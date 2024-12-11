import { getServerById } from '@/services'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { useAppSelector } from './hooks'

export const useServer = () => {
  const { id } = useParams()
  const accessToken = useAppSelector(state => state.user.accessToken)

  return useQuery({
    queryKey: ['server', id],
    queryFn: () => getServerById({ id: id || '', accessToken })
  })
}
