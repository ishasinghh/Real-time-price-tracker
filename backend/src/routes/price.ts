import { Router } from "express";
import { PollingController } from "../controllers/pollingController";

const router = Router();
const pollingController = new PollingController();

// Route to get prices
// router.get("/prices", (req, res) => pollingController.getPrices(req, res));
router.get("/price/:symbol", (req, res) =>
  pollingController.getPriceForSymbol(req, res)
);

export default router;
