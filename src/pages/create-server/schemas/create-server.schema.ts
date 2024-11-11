import { object, string, z } from 'zod'

export const CreateServerSchema = object({
  processId: string({
    required_error: 'Process id is required'
  }),
  port: string({
    required_error: 'Port is required'
  }),
  urlHost: string({
    required_error: 'Url host is required'
  }),
  gridName: string({
    required_error: 'Server name is required'
  }),
  dataSource: string({
    required_error: 'Data source is required'
  }),
  dataBaseName: string({
    required_error: 'Database name is required'
  }),
  dataBaseUser: string({
    required_error: 'Database user is required'
  }),
  dataBasePassword: string({
    required_error: 'Database password is required'
  })
})

export type CreateServerInput = z.infer<typeof CreateServerSchema>
