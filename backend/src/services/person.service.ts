import {prisma } from "../lib/prisma.ts";

// create person
export const createPerson = async (full_name:string) => {
    try {
        return await prisma.person.create({
            data:{
                full_name,
                normalized_name: full_name.toLowerCase()
            }
        })
    } catch (error: any) {
        console.error("Service: Create person error", error.message)
        throw error
    }
}

// fetch all person
export const getAllPersons = async () => {
    try {
        return await prisma.person.findMany()
    } catch (error: any) {
        console.error("Service: Get all persons error", error.message)
        throw error
    }
}

// fetch one person using person id
export const getPersonById = async (id:string) => {
    try {
        return await prisma.person.findUnique({
            where:{id}
        })
    } catch (error: any) {
        console.error("Service: Get person by ID error", error.message)
        throw error
    }
}

// update one person using person id
export const updatePerson = async (id:string, data:any) => {
    try {
        return await prisma.person.update({
            where: {id},
            data
        })
    } catch (error: any) {
        console.error("Service: Update person error", error.message)
        throw error
    }
}

// delete person using person id
export const deletePerson = async (id:string) => {
    try {
        return await prisma.person.delete({
            where:{id}
        })
    } catch (error: any) {
        console.error("Service: Delete person error", error.message)
        throw error
    }
}