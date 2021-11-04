import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {Modal} from "./Modal/Modal";
import '@testing-library/jest-dom'

describe("Portal Testing", () => {
    it("render the modal and handle the click", () => {
        const handleClose = jest.fn();
        const { getByText } = render(
            <Modal onClose={handleClose}>
                <div>My portal</div>
            </Modal>
        )
        expect(getByText("My portal")).toBeInTheDocument();
        userEvent.click(getByText(/close/i));
        expect(handleClose).toHaveBeenCalledTimes(1);
    })

    it("should be unmounted", () => {
        const { getByText, unmount, queryByText } = render(
            <Modal>
                <div>My portal</div>
            </Modal>
        );
        expect(getByText("My portal")).toBeInTheDocument();
        unmount();
        expect(queryByText("My portal")).not.toBeInTheDocument();
    });
})