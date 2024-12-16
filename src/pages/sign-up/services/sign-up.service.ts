import axios from 'axios'

interface NewPerson {
  firstName: string
  secondName: string | undefined
  firstSurname: string
  secondSurname: string | undefined
  email: string
  programId: number
  userId: string
}

export const createNewPerson = async (person: NewPerson) =>
  (await axios.post('/persons', person)).data
