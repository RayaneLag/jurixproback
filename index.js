import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import Routeruser from "./routes/User.js";
import routerAi from "./routes/AI.js";
import settingsRoutes from "./routes/settings.js";
import clientsRoute from "./routes/Clients.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(process.env.MANGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => console.log(err));

app.use("/settings", settingsRoutes);
app.use("/user", Routeruser);
app.use("/ai", routerAi);
app.use("/clients", clientsRoute);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on port  ${process.env.PORT}`);
});
