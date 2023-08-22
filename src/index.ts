import express,{Request, Response, Router} from "express";
import { UserController } from "./controllers/UserController";
import { router } from "./routes";

const app = express();

app.use(express.json())
app.use(router)

app.listen(5002, () => {
    console.log("Server running!!");
})