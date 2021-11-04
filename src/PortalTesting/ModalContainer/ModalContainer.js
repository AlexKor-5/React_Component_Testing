import {Modal} from "../Modal/Modal";

export const ModalContainer = () => {
    const removeNodes = (elem) => elem.remove()
    return <Modal onClose={removeNodes}>Modal Window</Modal>
}