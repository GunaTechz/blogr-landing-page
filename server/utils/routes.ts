import { Router, Request, Response } from "express";
import routes from "../src/modules/auth/routes";

export default function routers() {
    const router: Router = Router();
    
    router.post("/userRegister",  routes);

    return router;
}