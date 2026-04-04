import { Router } from "express";

import * as controller from "../controllers/person.controller.ts"

const router = Router()

// create person
router.post("/", controller.createPerson)

// fetch all person
router.get("/", controller.getAllPersons)

// fetch one person using person id
router.get("/:id", controller.getPerson)

// update one person using person id
router.patch("/:id", controller.updatePerson)

// delete person using person id
router.delete("/:id", controller.deletePerson)

export default router