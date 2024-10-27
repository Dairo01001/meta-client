import axios from 'axios'

export const createFaculty = async ({
  name,
  accessToken
}: {
  name: string
  accessToken: string
}) => {
  return (
    await axios.post(
      '/faculties',
      { name },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    )
  ).data
}
