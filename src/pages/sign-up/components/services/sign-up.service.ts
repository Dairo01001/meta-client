import { User } from '@/models'
import axios from 'axios'

interface NewUser {
  username: string
  password: string
}

interface ExistingUser {
  id: string
  username: string
}

export const createNewUser = async ({
  username,
  password
}: NewUser): Promise<User> => {
  await axios.post('/users', {
    username,
    password
  })

  return (
    await axios.post('/auth/login', {
      username,
      password
    })
  ).data
}

export const findUserByUsername = async ({
  username
}: {
  username: string
}): Promise<ExistingUser> => (await axios.get(`/users/${username}`)).data
