import { Router } from "express"
import { createUserController } from "./use_cases/create_user"

const router = Router()

router.post("/users", (req, res) => {
    return createUserController.handle(req, res)
})

export { router }
