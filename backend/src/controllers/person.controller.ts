import * as service from "../services/person.service.ts"

// create person
export const createPerson = async (req:any, res:any) =>{
    try {
        const {full_name} = req.body
        
        if (!full_name || full_name.trim().length === 0) {
            return res.status(400).json({error: "full_name is required"})
        }
        
        const person = await service.createPerson(full_name)
        res.status(201).json(person)
    } catch (e: any) {
        console.error("Create person error:", e.message)
        res.status(500).json({error: "Failed to create person"})
    }
}

// fetch all person
export const getAllPersons = async(req:any, res:any) =>{
    try {
        const persons = await service.getAllPersons()
        res.json(persons)
    } catch (e: any) {
        console.error("Get all persons error:", e.message)
        res.status(500).json({error: "Failed to fetch persons"})
    }
}

// fetch one person using person id
export const getPerson = async(req:any, res:any) =>{
    try {
        const {id} = req.params
        
        if (!id) {
            return res.status(400).json({error: "Person ID is required"})
        }
        
        const person = await service.getPersonById(id)
        
        if (!person) {
            return res.status(404).json({error: "Person not found"})
        }
        
        res.json(person)
    } catch (e: any) {
        console.error("Get person error:", e.message)
        res.status(500).json({error: "Failed to fetch person"})
    }
}

// update one person using person id
export const updatePerson = async(req:any, res:any) =>{
    try {
        const {id} = req.params
        
        if (!id) {
            return res.status(400).json({error: "Person ID is required"})
        }
        
        const person = await service.updatePerson(id, req.body)
        
        if (!person) {
            return res.status(404).json({error: "Person not found"})
        }
        
        res.json(person)
    } catch (e: any) {
        console.error("Update person error:", e.message)
        res.status(500).json({error: "Failed to update person"})
    }
}

// delete person using person id
export const deletePerson = async(req:any, res:any) =>{
    try {
        const {id} = req.params
        
        if (!id) {
            return res.status(400).json({error: "Person ID is required"})
        }
        
        const person = await service.deletePerson(id)
        
        if (!person) {
            return res.status(404).json({error: "Person not found"})
        }
        
        res.json({message: "Person deleted successfully", person})
    } catch (e: any) {
        console.error("Delete person error:", e.message)
        res.status(500).json({error: "Failed to delete person"})
    }
}
