import express from "express";
import { connectDb } from "./utils/dbConnection";
import priceRoutes from "./routes/price";
import { PollingService } from "./services/pollingService";
import dotenv from "dotenv";
import { config } from "./config";
import cors from "cors";
import { startCronJob } from "./utils/scheduler";

dotenv.config();

const app = express();

const port = config.port;

async function startServer() {
  await connectDb();

  // CORS options
  const corsOptions = {
    origin: "http://localhost:3001", // Replace with your frontend URL
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  };

  // Enable CORS with options
  app.use(cors(corsOptions));
  // Middleware
  app.use(express.json());

  app.use("/v1", priceRoutes);

  app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });

  // Initial call to PollingService
  const pollingService = new PollingService();
  try {
    const prices = await pollingService.getPrices();
    console.log("Initially fetched prices:", prices);
  } catch (error) {
    console.error("Error fetching initial prices:", error);
  }

  // Start the scheduler
  startCronJob();
}

startServer().catch((error) => {
  console.error("Error starting server:", error);
});
