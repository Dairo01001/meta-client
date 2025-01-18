import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { newUserStatus } from '../services'

export const NewUserStatus = () => {
  const [cookies] = useCookies(['user'])
  const { accessToken } = cookies.user
  const queryClient = useQueryClient()
  const { toast } = useToast()
  const [name, setName] = useState('')

  const mutation = useMutation({
    mutationFn: newUserStatus,
    onSuccess: () => {
      setName('')
      queryClient.invalidateQueries({ queryKey: ['user-status'] })
      toast({
        title: 'Estado creado',
        description: 'El estado de ususario ha sido creado',
        variant: 'default'
      })
    },
    onError: () => {
      toast({
        title: 'Error al crear el estado',
        description: 'El estado de usuario no ha podido ser creado',
        variant: 'destructive'
      })
    }
  })

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="ml-auto">
          <Plus className="mr-2 h-4 w-4" /> Nuevo
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Nuevo</DialogTitle>
          <DialogDescription>Crea un nuevo estado de usuario</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nombre
            </Label>
            <Input
              id="name"
              type="text"
              minLength={7}
              value={name}
              placeholder="SUSPENDED"
              onChange={event => setName(event.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={() => {
              mutation.mutate({
                accessToken,
                name
              })
            }}
          >
            Crear
          </Button>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cerrar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
