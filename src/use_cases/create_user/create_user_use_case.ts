import { User } from "../../entities/Users";
import { IMailProvider } from "../../providers/email_provider";
import { IUsersRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./create_user_dto";
export class CreateUserUseCase {

    constructor(
        private userRepository: IUsersRepository,
        private mailProvider: IMailProvider
    ) { }

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.userRepository.findByEmail(data.email)
        console.log(JSON.stringify(userAlreadyExists))

        if (userAlreadyExists) {
            throw new Error("User already exists.")
        }

        const user = new User(data)
        await this.userRepository.save(user)

        await this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email
            },
            from: {
                name: "Name",
                email: "cox3site59@gmail.com"
            },
            subject: "Sejá bem vindo!",
            body: "<p>Você já pode fazer login em nossa plataforma.</p>"
        })

    }
}