interface User {
  username: string
  password: string
}

interface Person {
  firstName: string
  secondName: string
  firstSurname: string
  secondSurname: string
  email: string
}

export interface NewUser {
  user: User
  person: Person
}
