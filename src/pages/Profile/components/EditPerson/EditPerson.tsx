import { Input } from '@/components'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Person } from '../../models'
import { PersonSchema } from './schema'

type EditProfileProps = {
  person: Person | null
}

export const EditPerson = ({ person }: EditProfileProps) => {
  const form = useForm<z.infer<typeof PersonSchema>>({
    resolver: zodResolver(PersonSchema),
    defaultValues: {
      firstName: person?.firstName || '',
      secondName: person?.secondName || '',
      firstSurname: person?.firstSurname || '',
      secondSurname: person?.secondSurname || '',
      email: person?.email || ''
    }
  })

  const onSubmit = async (values: z.infer<typeof PersonSchema>) => {
    try {
      console.log(values)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="m-10 p-4 shadow-lg">
      <p className="m-5 w-full text-center text-2xl font-bold">
        Datos Institucionales
      </p>
      <div className="flex gap-5">
        <div className="w-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-8 rounded-lg p-10"
            >
              <div className="flex w-full flex-row gap-5">
                <FormField
                  control={form.control}
                  name="firstName"
                  disabled
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Primer Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="Jhon" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="secondName"
                  disabled
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Segundo Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex w-full flex-row gap-5">
                <FormField
                  control={form.control}
                  name="firstSurname"
                  disabled
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Primer Apellido</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="secondSurname"
                  disabled
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Segundo Apellido</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                disabled
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo Institucional</FormLabel>
                    <FormControl>
                      <Input placeholder="j.doe@udla.edu.co" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default EditPerson
