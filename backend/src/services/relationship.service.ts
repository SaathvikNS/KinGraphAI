import {prisma} from "../lib/prisma.ts"

export const createRelationship = async(data:any) => {
    try {
        return await prisma.relationship.create({
            data,
            include: {
                from_person: true,
                to_person: true
            }
        })
    } catch (error: any) {
        console.error("Service: Create relationship error", error.message)
        throw error
    }
}

export const getRelationships = async() => {
    try {
        return await prisma.relationship.findMany({
            include:{
                from_person: true,
                to_person: true
            }
        })
    } catch (error: any) {
        console.error("Service: Get relationships error", error.message)
        throw error
    }
}

export const deleteRelationship = async(id:string) => {
    try {
        return await prisma.relationship.delete({
            where:{id}
        })
    } catch (error: any) {
        console.error("Service: Delete relationship error", error.message)
        throw error
    }
}