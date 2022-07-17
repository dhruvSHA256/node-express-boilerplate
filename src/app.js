import express from 'express';
// import mongoose from "mongoose";
import { router as exampleRoute } from "./routes/example";

const PORT = process.env.PORT || 5000;

// const User = require("./models/user");

// const DB_USER = process.env.DB_USER;
// const DB_PASS = process.env.DB_PASS;

// if (!DB_USER) {
//     console.error(`[error]: The "DB_USER" environment variable is required`);
//     process.exit(1);
// }

// if (!DB_PASS) {
//     console.error(`[error]: The "DB_PASS" environment variable is required`);
//     process.exit(1);
// }

// const MONGO_URL = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.gxenyiv.mongodb.net/?retryWrites=true&w=majority`;
// mongoose.connect(MONGO_URL,
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error:"));

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


app.get('/', (_req, res) => {
    res.send('Received a GET HTTP method');
});

app.post('/', (_req, res) => {
    res.send('Received a POST HTTP method');
});

app.put('/', (_req, res) => {
    res.send('Received a PUT HTTP method');
});

app.delete('/', (_req, res) => {
    res.send('Received a DELETE HTTP method');
});

app.use("/example", exampleRoute);

app.listen(PORT);
