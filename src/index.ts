import { Server } from "./server";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT;

new Server().server.listen(port, () => {
  console.log("Servidor listening on port " + port);
  console.log("http://127.0.0.1:3333/");
});
