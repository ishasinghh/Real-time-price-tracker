import cron from "node-cron";
import { PollingService } from "../services/pollingService";
const pollingService = new PollingService();

export function startCronJob() {
  cron.schedule("*/3 * * * *", async () => {
    try {
      const prices = await pollingService.getPrices();
      console.log("Fetched prices at", new Date().toISOString(), ":", prices);
    } catch (error) {
      console.error("Error fetching prices:", error);
    }
  });
}
