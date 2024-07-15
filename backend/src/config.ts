import dotenv from "dotenv";

dotenv.config();

interface ConfigType {
  port: number;
  mongoURI: string;
  apiUrl: string;
  coingeckoApiKey: string;
}

export const config: ConfigType = {
  port: parseInt(process.env.PORT || "3000", 10),
  mongoURI: process.env.MONGO_URI || "mongodb://localhost:27017/",
  apiUrl:
    process.env.API_URL || "https://api.coingecko.com/api/v3/simple/price",
  coingeckoApiKey:
    process.env.COINGECKO_API_KEY || "CG-ytZG87Hh7y9GDECmdqcKEYea",
};
