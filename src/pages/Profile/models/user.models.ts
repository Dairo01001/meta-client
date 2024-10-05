export interface Person {
  id: number;
  firstName: string;
  secondName: string;
  firstSurname: string;
  secondSurname: string;
  email: string;
  programId: number;
  userId: string;
}

export interface IProfile {
  id: number;
  birthDate: string;
  phone: string;
  photo: string;
  userId: string;
}

export interface UserProfile {
  id: string;
  role: string;
  status: string;
  username: string;
  person: Person | null;
  profile: IProfile | null;
}
