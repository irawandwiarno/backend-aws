import express from "express";
import cors from "cors";
import UserRoute from "./routes/ItemRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(5000, () =>
  console.log("Server up and running... http://localhost:5000")
);
