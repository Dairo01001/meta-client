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

export const changeStateFaculty = async ({
  id,
  status,
  accessToken
}: {
  id: number
  status: boolean
  accessToken: string
}) => {
  return (
    await axios.put(
      `/faculties/${id}`,
      { status: !status },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    )
  ).data
}
