import CriptoResults from "@/interfaces/CriptoResults";
import api from "../api";

export default async () => {

  try {
    const response = await api.get<CriptoResults[]>("/coins/markets?vs_currency=BRL&ids=bitcoin%2Cethereum%2Ccardano%2Cmatic-network%2Cpolkadot&order=market_cap_desc&per_page=5&page=1&sparkline=false");

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