import {
  Button,
  ButtonGroup,
  Modal,
  ModalAction,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "keep-react";
import { ModalProps, AssetTrackerContextProps } from "../../types/types.env";
import { useContext } from "react";
import { AssetTrackerStoreContext } from "@context/assetTrackerStore";

const ModalComponent = ({ children, btnmodal }: ModalProps) => {
  const { symbol, onPeriod } = useContext(
    AssetTrackerStoreContext
  ) as AssetTrackerContextProps;

  return (
    <Modal>
      <ModalAction asChild>{btnmodal}</ModalAction>
      <ModalContent className="w-screen">
        <ModalClose className="absolute right-4 top-4" />
        <ModalHeader className="mb-6 space-y-3">
          <div className="space-y-1">
            <div>
              <div className="flex items-center">
                <ModalTitle className="mr-6">{symbol}</ModalTitle>
                <ButtonGroup>
                  <Button onClick={() => onPeriod(1)} position="start">
                    Today
                  </Button>
                  <Button onClick={() => onPeriod(7)} position="center">
                    Week
                  </Button>
                  <Button onClick={() => onPeriod(30)} position="center">
                    Month
                  </Button>
                  <Button onClick={() => onPeriod(350)} position="end">
                    1 Year
                  </Button>
                </ButtonGroup>
              </div>
            </div>
            <ModalDescription>{children}</ModalDescription>
          </div>
        </ModalHeader>
        <ModalFooter>
          <ModalClose asChild>
            <Button variant="outline">Close</Button>
          </ModalClose>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
