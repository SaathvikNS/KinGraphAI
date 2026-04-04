import * as controller from "../controllers/relationship.controller.ts"
import { Router } from "express"

const router = Router()

router.post("/", controller.createRelationship)

router.get("/", controller.getRelationships)

router.delete("/:id", controller.deleteRelationship)

export default router