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
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { createFaculty } from '../services'

export const NewFaculty = () => {
  const { accessToken } = useAppSelector(state => state.user)
  const [name, setName] = useState('')
  const { toast } = useToast()

  const handleSubmit = async () => {
    try {
      await createFaculty(name, accessToken)
      setName('')
      toast({
        title: 'Facultad creada',
        description: 'La facultad ha sido creada exitosamente',
        variant: 'default'
      })
    } catch (error) {
      toast({
        title: 'Error al crear la facultad',
        description: 'No se ha podido crear la facultad',
        variant: 'destructive'
      })
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="ml-auto">
          <Plus className="mr-2 h-4 w-4" /> Nueva
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Nueva facultad</DialogTitle>
          <DialogDescription>Crea una nueva facultad</DialogDescription>
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
              placeholder="Facultad de Ingeniería"
              onChange={event => setName(event.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>
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
