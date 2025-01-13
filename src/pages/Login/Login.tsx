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
import { PasswordInput } from '@/components/ui/password-input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCookies } from 'react-cookie'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { LoginSchema } from './Schema'
import { loginUser } from './services'

export const Login = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: '',
      password: ''
    }
  })
  const [_, setCookie] = useCookies(['user'])
  const navigate = useNavigate()

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    try {
      const user = await loginUser(values.username, values.password)
      setCookie('user', user, { path: '/' })
      navigate('/')
    } catch (error) {
      if (error instanceof Error) {
        form.setError('username', { type: 'manual', message: error.message })
      }
    }
  }

  return (
    <div className="flex flex-grow flex-col items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-md space-y-8 rounded-lg p-10 shadow-lg"
        >
          <div className="flex items-center justify-center">
            <img src="/logo.svg" alt="Logo" />
            <span className="text-2xl">Iniciar Sesión</span>
          </div>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Usuario Institucional</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <PasswordInput placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Link to="/signup" className="underline">
            No tienes una cuenta? Registrate!
          </Link>
          <div className="flex w-full justify-center">
            <Button size="sm" className="bg-green-600" type="submit">
              Enviar
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default Login
