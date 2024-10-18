import React from "react";

export type CryptoData = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap_rank: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
};

export type CryptoDataCoins = [number, number];

export interface AssetTrackerProps {
  children: React.ReactNode;
}

export interface AssetTrackerContextProps {
  data: CryptoData[];
  dataCoins: CryptoDataCoins[];
  loading: boolean;
  error: string | null;
  symbol: string;
  period: number;
  onSymbol: (symbol: string) => void;
  onPeriod: (period: number) => void;
}

export interface LayoutPageProps {
  children: React.ReactNode;
}

export interface TableProps {
  coinData: CryptoData[];
}

export interface ModalProps {
  children: React.ReactNode;
  btnmodal: React.ReactNode;
}
