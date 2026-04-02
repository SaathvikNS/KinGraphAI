import express from "express"
import cors from "cors"
import personRoutes from "./routes/person.routes.ts"

const app = express()

app.use(cors())

app.use(express.json())

app.get("/",(req,res)=>{

 res.send("API running")

})

app.use("/persons", personRoutes)

app.listen(3000,()=>{

 console.log("server running")

})