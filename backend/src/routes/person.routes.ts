import { Router } from "express";
import { prisma } from "../lib/prisma.ts"

const router = Router()

// create person
router.post("/", async (req, res) => {
    try {
        const {full_name} = req.body

        const normalized_name = full_name.toLowerCase()

        const person = await prisma.person.create({
            data:{
                full_name,
                normalized_name
            }
        })

        res.json(person)
    } catch (e) {
        res.status(500).json({message:"failed to create person", error: e})
    }
})

// get all persons
router.get("/", async (req, res)=>{
    const persons = await prisma.person.findMany()

    res.json(persons)
})

export default router