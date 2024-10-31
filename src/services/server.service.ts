import axios from 'axios'

export interface ServerEntity {
  id: string
  processId: string
  port: number
  urlHost: string
  gridName: string
  dataSource: string
  dataBaseName: string
  dataBaseUser: string
  dataBasePassword: string
  statusId: number
  status: {
    id: number
    name: string
    status: boolean
  }
}

export const getAllServers = async (): Promise<ServerEntity[]> =>
  (await axios.get('/servers')).data
