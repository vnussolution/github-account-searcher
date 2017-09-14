export interface IUser {
    name: string,
    company: string,
    location: string,
    bio: string,
    avatar_url: string,
    email: string
}

export interface IRepository {
    name: string,
    description: string,
    owner: IUser
}