import {prisma} from "../lib/prisma.ts"

export const createEvent = async(data:any) => {
    try {
        return await prisma.event.create({
            data,
            include: {
                participants: true
            }
        })
    } catch (error: any) {
        console.error("Service: Create event error", error.message)
        throw error
    }
}

export const addParticipant = async (event_id:any, person_id:any) => {
    try {
        return await prisma.personEvent.create({
            data: {event_id, person_id},
            include: {
                person: true,
                event: true
            }
        })
    } catch (error: any) {
        console.error("Service: Add participant error", error.message)
        throw error
    }
}

export const getEventsForPerson = async(person_id:any) => {
    try {
        return await prisma.personEvent.findMany({
            where:{person_id},
            include:{
                event: true,
                person: true
            }
        })
    } catch (error: any) {
        console.error("Service: Get events for person error", error.message)
        throw error
    }
}