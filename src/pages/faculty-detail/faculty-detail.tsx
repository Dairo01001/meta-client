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
import { useQuery } from '@tanstack/react-query'
import { MoreHorizontal } from 'lucide-react'
import { useCookies } from 'react-cookie'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getFaculty } from '../faculty/services'
import { NewProgram } from '../program'

export const FacultyDetail = () => {
  const { id } = useParams()
  const [cookie] = useCookies(['user'])
  const { accessToken } = cookie.user

  if (!id) return <Navigate to="/faculty" />

  const { data, isLoading, error } = useQuery({
    queryKey: ['facultyDetails'],
    queryFn: () => getFaculty({ id: Number(id), accessToken })
  })

  if (isLoading) return <p>Loading...</p>

  if (error || !data) return <Navigate to="/faculty" />

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <span className="text-xl">{data.name}</span>
        <NewProgram facultyId={Number(id)} />
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
            {data.programs.map(({ status, name, id }) => (
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

export default FacultyDetail
