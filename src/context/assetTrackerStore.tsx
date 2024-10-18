import { useState, useEffect } from "react";
import { createContext } from "react";
import {
  AssetTrackerContextProps,
  AssetTrackerProps,
  CryptoData,
  CryptoDataCoins,
} from "../types/types.env";


export interface AssestTrackerProps {
  children: React.ReactNode;
}

export const AssetTrackerStoreContext =
  createContext<AssetTrackerContextProps | null>(null);

export const AssetTrackerStoreProvider = ({ children }: AssetTrackerProps) => {
  const [data, setData] = useState<CryptoData[]>([]);
  // const [favoriteCoins, setFavoriteCoins] = useLocalStorage<CryptoData[]>(
  //   "favorite",
  //   []
  // );
  const [dataCoins, setDataCoins] = useState<CryptoDataCoins[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [symbol, setSymbol] = useState("bitcoin");
  const [period, setPeriod] = useState(1);

  // console.log(favoriteCoins);

  //Handler Functions
  const handleSymbolChange = (symbol: string) => {
    setSymbol(symbol);
  };

  const handlePeriodChange = (period: number) => {
    setPeriod(period);
  };

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(`Error geting the information: ${error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setLoading(true);
    const fetchDataCoin = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${symbol}/market_chart?vs_currency=usd&days=${period}&precision=1`
        );
        const data = await response.json();
        setDataCoins(data.prices);
      } catch (error) {
        setError(`Error geting the information: ${error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchDataCoin();
  }, [period, symbol]);

  return (
    <AssetTrackerStoreContext.Provider
      value={{
        data,
        dataCoins,
        loading,
        error,
        symbol,
        period,
        onSymbol: handleSymbolChange,
        onPeriod: handlePeriodChange,
      }}
    >
      {children}
    </AssetTrackerStoreContext.Provider>
  );
};
