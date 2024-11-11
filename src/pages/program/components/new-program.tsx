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
import { useAppSelector, useToast } from '@/hooks'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { createProgram } from '../services'

interface NewProgramProps {
  facultyId: number
}

export const NewProgram = ({ facultyId }: NewProgramProps) => {
  const { accessToken } = useAppSelector(state => state.user)
  const queryClient = useQueryClient()
  const [name, setName] = useState('')
  const { toast } = useToast()

  const mutation = useMutation({
    mutationFn: createProgram,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['facultyDetails'] })
      setName('')
      toast({
        title: 'Programa creado',
        description: 'El programa ha sido creado exitosamente',
        variant: 'default'
      })
    },
    onError: () => {
      toast({
        title: 'Error al crear el programa',
        description: 'No se ha podido crear el programa',
        variant: 'destructive'
      })
    }
  })

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="ml-auto">
          <Plus className="mr-2 h-4 w-4" /> Nuevo programa
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Nuevo programa</DialogTitle>
          <DialogDescription>Crea un nuevo programa</DialogDescription>
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
              placeholder="Ingeniería de Sistemas"
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
                name,
                facultyId,
                accessToken
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
