import { FacultyEntity } from '@/models'
import { getAllFaculties } from '@/services'
import { useEffect, useState } from 'react'

export const useFaculty = () => {
  const [faculties, setFaculties] = useState<FacultyEntity[]>([])

  useEffect(() => {
    getAllFaculties().then(setFaculties)
  }, [])

  return { faculties }
}
