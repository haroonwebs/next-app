import express from "express";
import router from "./routes/ticketRoutes";
import { AppDataSource } from "./dbConnect";
import cors from "cors";

const app = express();

const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

AppDataSource.initialize()
  .then(() => {
    console.log("Postgres is connected successfully");
  })
  .catch((e) => {
    console.log("error while connecting database" + e);
  });

app.use("/api/v1", router);

app.listen(PORT, (): void => {
  console.log(`servier is running at Port ${PORT}`);
});
