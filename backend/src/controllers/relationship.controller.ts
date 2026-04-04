import * as service from "../services/relationship.service.ts"

export const createRelationship = async(req:any, res:any) => {
    try {
        const {from_person_id, to_person_id, relation_type} = req.body
        
        if (!from_person_id || !to_person_id || !relation_type) {
            return res.status(400).json({error: "from_person_id, to_person_id, and relation_type are required"})
        }
        
        const relationship = await service.createRelationship(req.body)
        res.status(201).json(relationship)
    } catch (e: any) {
        console.error("Create relationship error:", e.message)
        if (e.code === "P2025") {
            return res.status(404).json({error: "One or both persons not found"})
        }
        res.status(500).json({error: "Failed to create relationship"})
    }
}

export const getRelationships = async(req:any, res:any) => {
    try {
        const relationships = await service.getRelationships()
        res.json(relationships)
    } catch (e: any) {
        console.error("Get relationships error:", e.message)
        res.status(500).json({error: "Failed to fetch relationships"})
    }
}

export const deleteRelationship = async(req:any, res:any) => {
    try {
        const {id} = req.params
        
        if (!id) {
            return res.status(400).json({error: "Relationship ID is required"})
        }
        
        const relationship = await service.deleteRelationship(id)
        
        if (!relationship) {
            return res.status(404).json({error: "Relationship not found"})
        }
        
        res.json({message: "Relationship deleted successfully", relationship})
    } catch (e: any) {
        console.error("Delete relationship error:", e.message)
        res.status(500).json({error: "Failed to delete relationship"})
    }
}