import {
  ModalLargeContainer,
  ModalContainer,
  ModalContent,
  ModalButtonClose,
  ModalHeader,
} from "./style";

const Modal = ({
  children,
  onClose = () => {},
  id = "modal",
  modalTitle,
  className,
}) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) {
      onClose();
    }
  };
  return (
    <ModalLargeContainer id={id} onClick={handleOutsideClick}>
      <ModalContainer>
        <ModalHeader className={className}>
          <h3>{modalTitle}</h3>
          <ModalButtonClose onClick={onClose} />
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </ModalLargeContainer>
  );
};

export default Modal;
