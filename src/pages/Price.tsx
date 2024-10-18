import { useContext } from "react";
import LayoutPage from "../layout/LayoutPage";
// import data from "../../data.json";
import { Suspense, lazy } from "react";
import SpinnerComponent from "@components/Spinner/Spinner";
const TableComponent = lazy(() => import("@components/Table/Table"));
import { AssetTrackerContextProps } from "../types/types.env";
import { AssetTrackerStoreContext } from "@context/assetTrackerStore";

const Price = () => {
  const { data } = useContext(
    AssetTrackerStoreContext
  ) as AssetTrackerContextProps;
  return (
    <LayoutPage>
      <Suspense fallback={<SpinnerComponent />}>
        <TableComponent
          coinData={data}
          tableName={"Coins"}
          infoTable={"100 coins"}
        />
      </Suspense>
    </LayoutPage>
  );
};

export default Price;
