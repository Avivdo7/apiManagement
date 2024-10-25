
import "reflect-metadata";
import { AppDataSource } from "./data-source";
import express from "express";
import { routes } from "./routes/routes";
import { error } from "console";

//Middleware
const app = express();
app.use(express.json());

//Init DB Connection
AppDataSource.initialize()
  .then(() => {
    console.log("DB Connection established");
    //Load Routes
    app.use("/api", routes);

    const PORT = process.env.PORT || 3000;

    //Start server
    app.listen(PORT, () => {
      console.log(`Server Running on port: ${PORT}`);
    });
  })
  .catch((error) => console.error(`Error: ${error}`));

export default app;
