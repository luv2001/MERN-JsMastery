import express from "express";
import mongoose from "mongoose"
import bodyParser from "body-parser";
import cors from "cors";
import postRoutes from "../server/routes/posts.js"


const app = express()
app.use('/posts', postRoutes)

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())



const DATABASE_URL = "mongodb+srv://dbmemories:dbmemories@cluster0.ltxkl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000


mongoose.connect(DATABASE_URL)
    .then(() => { app.listen(PORT, () => { console.log(`Connection established PORT = ${PORT}`) }) })
    .catch((error) => { console.log("Error connecting to database") })
