import { FacultyEntity } from '@/models'
import axios from 'axios'

export const getAllFaculties = async (): Promise<FacultyEntity[]> =>
  (await axios.get('/faculties')).data
