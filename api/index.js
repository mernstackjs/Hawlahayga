import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { dbConnected } from "./libs/db.js";
import router from "./router/index.js";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://hawlahayga-client.onrender.com"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", router);
app.get("/", (req, res) => {
  res.json({
    message: "api is running successfull",
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
dbConnected();
