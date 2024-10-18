import {
  Badge,
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "keep-react";

import {
  Calendar,
  CurrencyDollar,
  Flag,
  Funnel,
  NavigationArrow,
  Plus,
  Spinner,
  Star,
} from "phosphor-react";
import { AssetTrackerContextProps, TableProps } from "../../types/types.env";
import { useContext } from "react";
import { AssetTrackerStoreContext } from "@context/assetTrackerStore";
import ModalComponent from "@components/Modal/Modal";
import ChartComponent from "@components/Chart/Chart";
import { prices } from "../../../prices.json";

const TableComponent = ({ coinData }: TableProps) => {
  const { onSymbol } = useContext(
    AssetTrackerStoreContext
  ) as AssetTrackerContextProps;

  return (
    <Table>
      <TableCaption>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <h2 className="text-heading-6 font-semibold text-metal-900 dark:text-white">
              Coins
            </h2>
            <Badge color="secondary">100 Orders</Badge>
          </div>
          <div className="flex items-center gap-5">
            <Button variant="outline" className="gap-1.5">
              <Plus className="size-4 fill-metal-900 dark:fill-white" />
              Add Order
            </Button>
            <Button variant="outline" className="gap-1.5">
              <Funnel className="size-4 fill-metal-900 dark:fill-white" />
              Filter Order
            </Button>
          </div>
        </div>
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Checkbox />
          </TableHead>
          <TableHead className="w-[10rem]">
            <p className="flex items-center justify-center gap-1.5">
              <Calendar className="size-4 w-[1rem] fill-metal-900 dark:fill-white" />
              Marked Rank
            </p>
          </TableHead>
          <TableHead className="w-[14rem]">
            <p className="flex items-center gap-1.5">
              <Flag className="size-4 fill-metal-900 dark:fill-white" />
              Name
            </p>
          </TableHead>
          <TableHead>
            <p className="flex items-center justify-center gap-1.5">
              <Spinner className="size-4 fill-metal-900 dark:fill-white" />
              Logo
            </p>
          </TableHead>
          <TableHead>
            <p className="flex items-center justify-center gap-1.5">
              <CurrencyDollar className="size-4 fill-metal-900 dark:fill-white" />
              Current Price
            </p>
          </TableHead>
          <TableHead className="w-[14rem]">
            <p className="flex w-[10rem] items-center justify-center gap-1.5">
              <CurrencyDollar className="size-4 fill-metal-900 dark:fill-white" />
              24hr Change
            </p>
          </TableHead>
          <TableHead className="w-[20rem]">
            <p className="flex w-[15rem] items-center justify-center gap-1.5">
              <NavigationArrow className="size-4 fill-metal-900 dark:fill-white" />
              24hr % Change
            </p>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {coinData.map(
          ({
            id,
            symbol,
            name,
            image,
            current_price,
            market_cap_rank,
            price_change_24h,
            price_change_percentage_24h,
          }) => {
            return (
              <TableRow key={id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <p className="text-center">{market_cap_rank}</p>
                </TableCell>
                <TableCell>
                  <div onClick={() => onSymbol(name)}>
                    <ModalComponent
                      btnmodal={
                        <p className="cursor-pointer">
                          {name} • {symbol}
                        </p>
                      }
                    >
                      <ChartComponent dataCoin={prices} />
                    </ModalComponent>
                  </div>
                  <Star className="size-4 cursor-pointer" />
                </TableCell>
                <TableCell className="flex items-center justify-center">
                  <img className="h-10 w-10" src={image} alt={`logo ${name}`} />
                </TableCell>
                <TableCell>
                  <p className="text-center">
                    ${current_price.toLocaleString()}
                  </p>
                </TableCell>
                <TableCell className="text-center">
                  {price_change_24h.toLocaleString()}
                </TableCell>
                <TableCell>
                  <p className="text-center">
                    {price_change_percentage_24h.toFixed(2)}%
                  </p>
                </TableCell>
              </TableRow>
            );
          }
        )}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
