import { User } from "../../entities/Users";
import { IUsersRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./create_user_dto";
export class CreateUserUseCase {

    constructor(
        private userRepository: IUsersRepository
    ) { }

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.userRepository.findByEmail(data.email)

        if (userAlreadyExists) {
            throw new Error("User already exists.")
        }

        const user = new User(data)
        await this.userRepository.save(user)
    }
}