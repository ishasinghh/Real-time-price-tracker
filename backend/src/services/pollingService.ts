import axios from "axios";
import { IPrice, Price } from "../models/price";
import { config } from "../config";

export class PollingService {
  private symbols: string[] = [
    "TETHER",
    "BITCOIN",
    "AAPL",
    "ETHEREUM",
    "DOGCOIN",
  ];
  private apiUrl: string = config.apiUrl;
  private apiKey: string = config.coingeckoApiKey;
  // private pollInterval: number = parseInt(process.env.POLL_INTERVAL || "5000");

  public async getPrices(limit: number = 20): Promise<IPrice[]> {
    const fetchedPrices: IPrice[] = [];

    try {
      const pricePromises = this.symbols.map(async (symbol) => {
        try {
          const response = await axios.get(this.apiUrl, {
            params: {
              ids: symbol.toLowerCase(),
              vs_currencies: "usd",
            },
            headers: {
              "X-CoinAPI-Key": this.apiKey, // Adding the API key to the headers
            },
          });

          // console.log(`API Response for ${symbol}:`, response.data);
          const priceData = response.data[symbol.toLowerCase()];
          if (priceData && priceData.usd) {
            const price = new Price({
              symbol,
              price: priceData.usd,
            });
            return await price.save();
          } else {
            console.warn(`No price data found for ${symbol}`);
            return null;
          }
        } catch (error) {
          console.error(`Error fetching price for ${symbol}:`, error);
          return null;
        }
      });

      const prices = await Promise.all(pricePromises);
      fetchedPrices.push(...prices.filter((price) => price !== null));
    } catch (error) {
      console.error(`Error fetching prices:`, error);
    }

    // Sort prices by timestamp in descending order
    fetchedPrices.sort(
      (priceOne, priceTwo) =>
        priceTwo.timestamp.getTime() - priceOne.timestamp.getTime()
    );
    return fetchedPrices.slice(0, limit);
  }

  public async getPriceForSymbol(
    symbol: string,
    limit: number = 20
  ): Promise<IPrice[]> {
    try {
      const symb = symbol.toUpperCase();
      const prices = await Price.find({ symbol: symb })
        .sort({ timestamp: -1 })
        .limit(limit)
        .exec();
      return prices;
    } catch (error) {
      console.error(`Error fetching prices for ${symbol}:`, error);
      return [];
    }
  }
}
