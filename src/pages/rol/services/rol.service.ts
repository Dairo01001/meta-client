import axios from 'axios'

export interface Role {
  id: number
  name: string
  status: boolean
}

export const getAllRoles = async (accessToken: string): Promise<Role[]> =>
  (
    await axios.get('/roles', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
  ).data

export const createRole = async (
  name: string,
  accessToken: string
): Promise<Role> => {
  const response = await axios.post(
    '/roles',
    {
      name
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  )
  return response.data
}

export const updateRole = async ({
  id,
  status,
  accessToken
}: {
  id: number
  status: boolean
  accessToken: string
}): Promise<Role> => {
  const response = await axios.put(
    `/roles/${id}`,
    {
      status: !status
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  )
  return response.data
}
