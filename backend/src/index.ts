import express from "express"
import cors from "cors"
import personRoutes from "./routes/person.routes.ts"
import relationshipRoutes from "./routes/relationship.routes.ts"
import eventRoutes from "./routes/event.routes.ts"

const app = express()
const PORT = 3000

app.use(cors())

app.use(express.json())

app.get("/",(req,res)=>{

 res.send("API running")

})

app.use("/persons", personRoutes)
app.use("/relationship", relationshipRoutes)
app.use("/event", eventRoutes)

app.listen(PORT,()=>{

 console.log(`Server running at port ${PORT}`)

})