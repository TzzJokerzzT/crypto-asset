import { Suspense, lazy } from "react";
import LayoutPage from "../layout/LayoutPage";
import SpinnerComponent from "@components/Spinner/Spinner";
const TableComponent = lazy(() => import("@components/Table/Table"));
import data from "../../data.json";

const Favorite = () => {
  return (
    <LayoutPage>
      <Suspense fallback={<SpinnerComponent />}>
        <TableComponent
          coinData={data}
          tableName={"Favorite Coins"}
          infoTable={"100 coins"}
        />
      </Suspense>
    </LayoutPage>
  );
};

export default Favorite;
