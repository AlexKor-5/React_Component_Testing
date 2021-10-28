import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom'
import CheckboxWithLabel from "../CheckboxWithLabel/CheckboxWithLabel";

describe("events", () => {
    it("clicks on checkbox", () => {
        const {getByLabelText, queryByLabelText} = render(<CheckboxWithLabel labelOn="On" labelOff="Off"/>)
        expect(queryByLabelText(/Off/i)).not.toBeNull()
        const inputChecker = pattern => getByLabelText(pattern)

        fireEvent.click(inputChecker(/off/i))
        expect(inputChecker(/on/i)).toBeInTheDocument()
        expect(inputChecker(/on/i)).toBeChecked()
    })
})

