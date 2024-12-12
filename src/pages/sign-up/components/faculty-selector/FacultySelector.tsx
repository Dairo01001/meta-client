import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Program } from '@/models'
import { getFacultiesActives, getProgramsByFaculty } from '@/services'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

interface FacultySelectorProps {
  programId: string
  setProgramId: React.Dispatch<React.SetStateAction<string>>
}

export const FacultySelector = ({
  programId,
  setProgramId
}: FacultySelectorProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ['faculties'],
    queryFn: getFacultiesActives
  })
  const [facultyId, setFacultyId] = useState<string>('')
  const [programs, setPrograms] = useState<Program[]>([])
  useEffect(() => {
    if (facultyId !== '') {
      getProgramsByFaculty(Number(facultyId)).then(programs =>
        setPrograms(programs)
      )
    }
  }, [facultyId])
  if (isLoading || !data) return <div>Loading...</div>

  return (
    <div className="flex w-full flex-row gap-5">
      <Select value={facultyId} onValueChange={value => setFacultyId(value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Selecciona una facultad" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Facultad</SelectLabel>
            {data.map(faculty => (
              <SelectItem key={faculty.id} value={faculty.id.toString()}>
                {faculty.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select
        disabled={facultyId === ''}
        value={programId}
        onValueChange={value => setProgramId(value)}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Selecciona un programa" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Programa</SelectLabel>
            {programs.map(program => (
              <SelectItem key={program.id} value={program.id.toString()}>
                {program.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default FacultySelector
