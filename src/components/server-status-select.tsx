import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { useAppSelector } from '@/hooks'
import { getServerStatus } from '@/services'
import { useQuery } from '@tanstack/react-query'

export function ServerStatusSelect() {
  const { accessToken } = useAppSelector(state => state.user)
  const { data, isLoading } = useQuery({
    queryFn: () => getServerStatus({ accessToken }),
    queryKey: ['server-status-active']
  })

  if (isLoading) return <h1>Loading...</h1>

  if (!data) return <h1>No data</h1>

  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Selecionar estado del servidor" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {data.map(({ id, name }) => {
            return <SelectItem value={id.toString()}>{name}</SelectItem>
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
