import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components'
import { useAppSelector, useToast } from '@/hooks'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { MoreHorizontal } from 'lucide-react'
import { Link } from 'react-router-dom'
import { NewServerStatus } from './components'
import { getAllServerStatus, updateServerStatus } from './services'

export const ServerStatus = () => {
  const { accessToken } = useAppSelector(state => state.user)
  const queryClient = useQueryClient()
  const { toast } = useToast()
  const { data, isLoading } = useQuery({
    queryFn: () => getAllServerStatus(accessToken),
    queryKey: ['server-status']
  })

  const mutation = useMutation({
    mutationFn: updateServerStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['server-status'] })
      toast({
        title: 'Estado del servidor editado',
        description: 'El estado del servidor ha sido editado exitosamente',
        variant: 'default'
      })
    },
    onError: () => {
      toast({
        title: 'Error al editar el estado del servidor',
        description: 'No se ha podido editar el estado del servidor',
        variant: 'destructive'
      })
    }
  })

  if (isLoading || !data) return <p>Loading...</p>

  return (
    <div className="w-full">
      <p className="text-center text-2xl font-bold">Estado de servidores</p>
      <div className="flex items-center py-4">
        <NewServerStatus />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Estado</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map(({ status, name, id }) => (
              <TableRow key={id}>
                <TableCell className="font-medium">
                  {status ? 'Activo' : 'Inactivo'}
                </TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                      <DropdownMenuItem
                        onClick={() =>
                          navigator.clipboard.writeText(id.toString())
                        }
                      >
                        Copiar ID
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={() => {
                          mutation.mutate({
                            id,
                            status,
                            accessToken
                          })
                        }}
                      >
                        Cambiar estado
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link to={`/server-status/${id}`}>Ver detalles</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default ServerStatus
