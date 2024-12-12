import axios, { AxiosError } from 'axios'

export const loginUser = async (username: string, password: string) => {
  try {
    return (
      await axios.post('/auth/signin', {
        username,
        password
      })
    ).data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message)
    }
  }
}
