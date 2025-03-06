import { PostgresUserRepository } from "../../repositories/implementatios/postgress_user_repository";
import { MailTrapMailProvider } from "../../providers/implementatios/mailtrap_mail_provider";
import { CreateUserUseCase } from "./create_user_use_case";
import { CreateUserController } from "./create_user_controller";

const postgresUserRepository = new PostgresUserRepository()
const mailTrapMailProvider = new MailTrapMailProvider()

const creteUserUseCase = new CreateUserUseCase(
    postgresUserRepository,
    mailTrapMailProvider
)

const createUserController = new CreateUserController(creteUserUseCase)

export {createUserController, creteUserUseCase}