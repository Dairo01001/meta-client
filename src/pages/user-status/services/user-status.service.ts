import axios from 'axios'
import { UserStatus } from '../models'

export interface CreateUserStatus {
  name: string
  accessToken: string
}

export interface UpdateUserStatus {
  id: number
  status: boolean
  accessToken: string
}

export const getAllUserStatus = async ({
  accessToken
}: {
  accessToken: string
}): Promise<UserStatus[]> =>
  (
    await axios.get('/user-status', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
  ).data

export const newUserStatus = async ({
  accessToken,
  name
}: CreateUserStatus): Promise<UserStatus> => {
  return (
    await axios.post(
      '/user-status',
      {
        name
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    )
  ).data
}

export const updateUserStatus = async ({
  status,
  id,
  accessToken
}: UpdateUserStatus): Promise<UserStatus> => {
  return (
    await axios.put(
      `/user-status/${id}`,
      { status: !status },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    )
  ).data
}
