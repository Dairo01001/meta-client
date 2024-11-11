import axios from 'axios'

interface ServerStatusEntity {
  id: number
  name: string
  status: boolean
}

export const getServerStatus = async ({
  accessToken
}: {
  accessToken: string
}): Promise<ServerStatusEntity[]> =>
  (
    await axios.get('/server-status/active', {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
  ).data
