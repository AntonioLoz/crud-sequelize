import { Router } from "express";
import { login } from "../controllers/auth.controller";


class AuthRouter {

    public router: Router;

    constructor() {
        this.router = Router();
        this.router.post("/login", login)
    }
}

export const authRouter = new AuthRouter();