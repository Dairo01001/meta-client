import { FacultyEntity } from '@/models'
import axios from 'axios'

export const getAllFaculties = async (
  accessToken: string
): Promise<FacultyEntity[]> =>
  (
    await axios.get('/faculties', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
  ).data
