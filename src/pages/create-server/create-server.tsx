import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useAppSelector, useToast } from '@/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { CreateServerSchema } from './schemas'
import { createServer } from './services'

export const CreateServer = () => {
  const form = useForm<z.infer<typeof CreateServerSchema>>({
    resolver: zodResolver(CreateServerSchema),
    defaultValues: {
      processId: '',
      port: '',
      urlHost: '',
      gridName: '',
      dataSource: '',
      dataBaseName: '',
      dataBaseUser: '',
      dataBasePassword: ''
    }
  })
  const { accessToken } = useAppSelector(state => state.user)
  const { toast } = useToast()

  const mutation = useMutation({
    mutationFn: createServer,
    onSuccess: () => {
      toast({
        title: 'Creado',
        description: 'El servidor se ha creado correctamente',
        variant: 'default'
      })
    },
    onError: err => {
      console.log(err)
      toast({
        title: 'Error',
        description: 'Ha ocurrido un error al crear el servidor',
        variant: 'destructive'
      })
    }
  })

  const onSubmit = (data: z.infer<typeof CreateServerSchema>) => {
    mutation.mutate({ data, accessToken })
  }

  return (
    <div className="w-full">
      <div className="w-full pb-10">
        <p className="text-center text-2xl font-bold">Nuevo Servidor</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex w-full flex-row gap-4">
            <FormField
              control={form.control}
              name="processId"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Process Id</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="4513" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="port"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Server port</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="3001" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="urlHost"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Url Host</FormLabel>
                <FormControl>
                  <Input placeholder="http://localhost:3001" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gridName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Grid Name</FormLabel>
                <FormControl>
                  <Input placeholder="IoT Grid Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dataSource"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Data Source</FormLabel>
                <FormControl>
                  <Input placeholder="/data" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex w-full flex-row gap-4">
            <FormField
              control={form.control}
              name="dataBaseName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Data Base Name</FormLabel>
                  <FormControl>
                    <Input placeholder="zogui" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dataBaseUser"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Data Base User</FormLabel>
                  <FormControl>
                    <Input placeholder="admin" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="dataBasePassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Data Base Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Data Base Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Crear</Button>
        </form>
      </Form>
    </div>
  )
}
