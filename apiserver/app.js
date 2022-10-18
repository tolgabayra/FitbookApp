const express = require("express")
const app = express()
const cors = require("cors")
const helmet = require("helmet")
const morgan = require("morgan")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const redis = require("redis")

const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const productRoute = require("./routes/products")
const recipeRoute = require("./routes/recipes")

dotenv.config()
mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("DB Connection Successfull!");
    })
    .catch((err) => {
        console.log(err);
    })

const redisClient = redis.createClient(6379)
async () =>{
redisClient.on("err", (err) => {
  console.log("Redis Clint Error...");
})
redisClient.on("ready", ()=> console.log("Redis is ready..."))
redisClient.connect()
redisClient.ping()
}


app.use(cors({origin: true, credentials: true}));
app.use(express.json());
app.use(helmet())
app.use(morgan("dev"))

//--------------------------------
app.use("/api/v1/auth", authRoute)
app.use("/api/v1/users", userRoute)
app.use("/api/v1/products", productRoute)
app.use("/api/v1/recipes", recipeRoute)


app.listen(process.env.APP_PORT || 8000, () => {
    console.log("ApiServer1 is running!");
})