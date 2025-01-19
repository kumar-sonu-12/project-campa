import { Modal, ModalContent, ModalBody, Button } from "@nextui-org/react";
import Image from "next/image";

export const LoginModal = ({
  isOpen,
  onClose,
  label
}: {
  isOpen: boolean;
  onClose: () => void;
  label?: string;
}) => {
  return (
    <Modal
      size="3xl"
      isOpen={isOpen}
      onClose={onClose}
      backdrop="opaque"
      hideCloseButton={true}
      placement="center"
      className="backdrop-blur-2xl h-[40vh] w-[90%] sm:w-[50%] lg:w-[30%] rounded-xl p-5 transition-all duration-300 ease-in-out"
    >
      <ModalContent className="relative bg-[#56327D]/[0.6] max-h-[90vh] transform transition-transform duration-300 ease-in-out scale-100">
        <Button
          color="danger"
          variant="light"
          onPress={onClose}
          className="absolute top-1 right-0 z-10"
        >
          <Image
            src="https://res.cloudinary.com/dpmlrxlzr/image/upload/v1726844038/icons8-close_cydpjh.svg"
            alt="close"
            width={30}
            height={30}
          />
        </Button>
        <ModalBody className=" text-monteserrat h-full flex flex-col gap-y-2 justify-center">
          <div className="font-bold text-left text-white text-[24px] border-none m-0 p-0">
            LoginFailed!!
          </div>
          <div className="font-bold text-left text-white/[0.6] text-[20px] border-none m-0 p-0">
            {label}
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
