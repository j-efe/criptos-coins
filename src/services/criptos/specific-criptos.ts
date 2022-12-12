import CriptoResults from "@/interfaces/CriptoResults";
import api from "../api";

export default async () => {

  try {
    const response = await api.get<CriptoResults[]>("https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=100&page=1&sparkline=false");

    return {
      message: response.data,
      error: false,
    }

  } catch (error: any) {
    return {
      message: error,
      error: true
    };
  }

}