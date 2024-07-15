import { Request, Response } from "express";
import { PollingService } from "../services/pollingService";

export class PollingController {
  private pollingService: PollingService = new PollingService();

  public async getPrices(req: Request, res: Response) {
    try {
      const limit = 20;
      const prices = await this.pollingService.getPrices(limit);
      res.json(prices);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  }

  public async getPriceForSymbol(req: Request, res: Response) {
    try {
      const symbol = req.params.symbol;
      const prices = await this.pollingService.getPriceForSymbol(symbol);
      res.json(prices);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  }
}
