import { Spinner } from "keep-react";

const SpinnerComponent = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Spinner color="info" size="xl" />
    </div>
  );
};

export default SpinnerComponent;
