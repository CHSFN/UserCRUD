import { Express } from "express";

const router = express.Router()

router.router("/", getUsers)

export default router