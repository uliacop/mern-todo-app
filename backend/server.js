import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import todoRoutes from "./routes/todo.route.js";
import cors from "cors";
/* const PORT = process.env.PORT || 5000; */

import path from "path";
dotenv.config();
const app = express();
app.use(express.json());
/* app.use(cors()); */
app.use("/api/todos", todoRoutes);
const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

/* app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
}); */
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
