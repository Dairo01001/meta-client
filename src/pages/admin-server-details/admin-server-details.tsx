import { useServer } from '@/hooks'

export const AdminServerDetails = () => {
  const { data, isLoading } = useServer()

  if (isLoading || !data) return <div>Loading...</div>

  return <div>AdminServerDetails {data.gridName}</div>
}

export default AdminServerDetails
