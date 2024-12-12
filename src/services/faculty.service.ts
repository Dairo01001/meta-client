import { FacultyEntity, Program } from '@/models'
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

export const getFacultiesActives = async (): Promise<FacultyEntity[]> =>
  (await axios.get('/faculties/status')).data

export const getProgramsByFaculty = async (
  facultyId: number
): Promise<Program[]> =>
  (await axios.get(`/faculties/${facultyId}/programs`)).data
