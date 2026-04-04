import { Router } from "express";
import * as controller from "../controllers/event.controller.ts";

const router = Router()

router.post("/", controller.createEvent)

router.post("/:id/participants", controller.addParticipant)

router.get("/person/:id", controller.getEventsForPerson)

export default router