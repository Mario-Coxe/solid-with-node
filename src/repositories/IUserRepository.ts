import { User } from "../entities/Users"

export interface IUsersRepository {
    save(user: User): Promise<void>
    findByEmail(email: string): Promise<User>
} 