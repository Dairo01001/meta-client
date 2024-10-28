import axios from 'axios'

export const getAllRoles = async (accessToken: string) =>
  (
    await axios.get('/roles', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
  ).data
