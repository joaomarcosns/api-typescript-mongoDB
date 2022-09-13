import { Router } from "express";
import { carController } from "./controllers/carController";

const router: Router = Router()

//Routes
router.get("/cars", carController.index);
router.get("/car/:id", carController.show);
router.post("/car", carController.store);
router.put("/car/:id", carController.update);
router.delete("/car/:id", carController.delete);

export { router };