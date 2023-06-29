declare enum Gender {
  male = 'male',
  female = 'female',
}
declare interface IUser {
  name: string,
  account: string,
  phone: string,
  nick_name: string,
  password: string,
  avatar: string,
  gender: Gender
}
declare interface IResult {
  msg: string,
  code: number,
  data: any
}

