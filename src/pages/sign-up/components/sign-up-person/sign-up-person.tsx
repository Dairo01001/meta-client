import { Button, Input } from '@/components'
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
import { SignUpPersonSchema } from '../../schemas'

export const SignUpPerson = () => {
  const form = useForm<z.infer<typeof SignUpPersonSchema>>({
    resolver: zodResolver(SignUpPersonSchema),
    defaultValues: {
      firstName: '',
      secondName: '',
      firstSurname: '',
      secondSurname: '',
      email: ''
    }
  })

  const onSubmit = async (values: z.infer<typeof SignUpPersonSchema>) => {
    try {
      console.log(values)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="shadow-lg">
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
              <div className="flex w-full justify-center">
                <Button size="sm" className="bg-green-600" type="submit">
                  Enviar
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default SignUpPerson
