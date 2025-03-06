import { User } from "../../entities/Users";
import { IUsersRepository } from "../IUserRepository";

const usersDB: User[] = [];

export class PostgresUserRepository implements IUsersRepository {
    async findByEmail(email: string): Promise<User> {
        const user = usersDB.find(user => user.email === email);
        return user;
    }

    save(user: User): Promise<void> {
        console.log("Salvando usuário:", user);
        usersDB.push(user);
        return Promise.resolve();
    }
}
