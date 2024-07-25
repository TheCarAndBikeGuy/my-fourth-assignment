import express, { response } from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

app.get("/", function (request, response) {
  response.json("You Found The Secret API");
});

app.post("/message", function (request, response) {
  console.log(request.body);
  response.json("Thank you");
});

app.listen(8080, function () {
  console.log("Server is running on 8080!");
});
