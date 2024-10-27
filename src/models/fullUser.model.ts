export interface UserEntity {
  id: string
  role: string
  status: string
  username: string
  profile: ProfileEntity | null
  person: PersonEntity | null
}

export interface ProfileEntity {
  id: number
  birthDate: string
  phone: string
  photo: string
  userId: string
}

export interface PersonEntity {
  id: number
  firstName: string
  secondName: string
  firstSurname: string
  secondSurname: string
  email: string
  programId: number
  userId: string
}
