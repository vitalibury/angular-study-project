export interface IUser {
  name: String,
  age: Number,
  activated: Boolean
}

export const users: IUser[] = [
  {name: 'Joe', age: 40, activated: true},
  {name: 'Justin', age: 20, activated: true},
  {name: 'Robin', age: 35, activated: true},
  {name: 'Mike', age: 30, activated: true},
  {name: 'Adam', age: 25, activated: true}
]