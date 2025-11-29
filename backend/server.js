import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;

app.listen(port, "0.0.0.0", () => {
  console.log("Server running on port 3001");
});
