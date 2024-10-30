import axios from 'axios'
import { ServerStatus } from '../models'

export const getAllServerStatus = async (
  accessToken: string
): Promise<ServerStatus[]> =>
  (
    await axios.get('/server-status', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
  ).data

export const createServerStatus = async (
  name: string,
  accessToken: string
): Promise<ServerStatus> => {
  return (
    await axios.patch(
      '/server-status',
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

export const updateServerStatus = async ({
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
      `/server-status/${id}`,
      {
        status: !status
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    )
  ).data
}
