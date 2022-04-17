import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import carsRouter from "./router/carsRouter.js"

const app = express()
mongoose.connect(
    "mongodb://admin:FKRv1ILQOoBGwSoY@cluster0-shard-00-00.0q7qb.mongodb.net:27017,cluster0-shard-00-01.0q7qb.mongodb.net:27017,cluster0-shard-00-02.0q7qb.mongodb.net:27017/Challenge05?ssl=true&replicaSet=atlas-73m3dy-shard-0&authSource=admin&retryWrites=true&w=majority",
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
);
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open',() => console.log('Database Connected'))

app.use(cors())
app.use(express.json())
app.use(carsRouter)

app.listen(5000,() => console.log("Server Running"))


