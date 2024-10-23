import express from "express";
import { routes } from "./routes/routes";

const app = express();

//Middleware
app.use(express.json());
//Load Routes
app.use("/api", routes);

const PORT = process.env.PORT || 3000;

//Start server
app.listen(PORT, () => {
  console.log(`Server Running on port: ${PORT}`);
});

export default app;
