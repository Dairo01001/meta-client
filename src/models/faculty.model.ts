import { Program } from './program.model'

export interface FacultyEntity {
  id: number
  name: string
  status: boolean
  programs?: Program[]
}
