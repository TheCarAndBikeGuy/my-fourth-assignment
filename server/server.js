import express, { response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get("/", function (request, response) {
  response.json("You Found The Secret API");
});

app.get("/messagesa", async function (request, response) {
  const result = await db.query(`SELECT * FROM messagesa`);
  const message = result.rows;
  response.json(message);
});

app.post("/messagesa", function (request, response) {
  console.log(request.body);
  const myUserName = request.body.name
  const myUserMessage = request.body.message
  db.query(`INSERT INTO messagesa(name, note) VALUES ($1, $2)`, [myUserName, myUserMessage]);
  response.json("Thank you");
});

app.listen(8080, function () {
  console.log("Server is running on 8080!");
});
