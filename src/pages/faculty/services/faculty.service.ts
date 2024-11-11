import { ProgramEntity } from '@/pages/program'
import axios from 'axios'

export interface FacultyDetailsEntity {
  id: number
  name: string
  status: boolean
  programs: ProgramEntity[]
}

export const createFaculty = async ({
  name,
  accessToken
}: {
  name: string
  accessToken: string
}) => {
  return (
    await axios.post(
      '/faculties',
      { name },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    )
  ).data
}

export const getFaculty = async ({
  id,
  accessToken
}: {
  id: number
  accessToken: string
}): Promise<FacultyDetailsEntity> => {
  return (
    await axios.get(`/faculties/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
  ).data
}

export const changeStateFaculty = async ({
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
      `/faculties/${id}`,
      { status: !status },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    )
  ).data
}
