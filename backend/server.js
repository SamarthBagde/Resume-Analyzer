const dotenv = require("dotenv");
dotenv.config();

const app = require("./app.js");

const port = process.env.PORT;

app.listen(port, "0.0.0.0", () => {
  console.log("Server running on port 3001");
});
