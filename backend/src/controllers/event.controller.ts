import * as service from "../services/event.service.ts";

export async function createEvent(req: any, res: any) {
	try {
		const { event_type } = req.body;
		
		if (!event_type) {
			return res.status(400).json({ error: "event_type is required" });
		}
		
		const event = await service.createEvent(req.body);
		res.status(201).json(event);
	} catch (e: any) {
		console.error("Create event error:", e.message);
		res.status(500).json({ error: "Failed to create event" });
	}
}

export async function addParticipant(req: any, res: any) {
	try {
		const event_id = req.params.id;
		const { person_id } = req.body;
		
		if (!event_id || !person_id) {
			return res.status(400).json({ error: "event_id and person_id are required" });
		}
		
		const participant = await service.addParticipant(event_id, person_id);
		res.status(201).json(participant);
	} catch (e: any) {
		console.error("Add participant error:", e.message);
		if (e.code === "P2025") {
			return res.status(404).json({ error: "Event or person not found" });
		}
		if (e.code === "P2002") {
			return res.status(409).json({ error: "Person is already a participant in this event" });
		}
		res.status(500).json({ error: "Failed to add participant" });
	}
}

export async function getEventsForPerson(req:any, res:any) {
	try {
		const person_id = req.params.id;
		
		if (!person_id) {
			return res.status(400).json({ error: "Person ID is required" });
		}
		
		const events = await service.getEventsForPerson(person_id);
		res.json(events);
	} catch (e: any) {
		console.error("Get events for person error:", e.message);
		res.status(500).json({ error: "Failed to fetch events" });
	}
}
