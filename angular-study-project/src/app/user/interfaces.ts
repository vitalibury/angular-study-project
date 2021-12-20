export interface IUser {
  id?: number,
  firstName: string,
  lastName: string,
  age: number,
  email?: string,
  activated: Boolean,
  vehicle?: string,
  image?: string,
  company?: string,
  department?: string,
  gender?: string,
  addresses?: object
}