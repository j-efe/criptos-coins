import api from "../api";

export default async (id: string, date: string) => {

  try {
    const response = await api.get(`https://api.coingecko.com/api/v3/coins/${id}/history?date=${date}&localization=false`);

    return {
      message: response.data.market_data.current_price.brl,
      error: false,
    }

  } catch (error: any) {
    return {
      message: error,
      error: true
    };
  }

}