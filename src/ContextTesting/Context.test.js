import {AuthProvider} from "./AuthProvider";
import {ConsumerComponent} from "./ConsumerComponent";
import {render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'

describe("Context", () => {
    it("ConsumerComponent shows default value", () => {
        const {getByText} = render(
            <AuthProvider>
                <ConsumerComponent/>
            </AuthProvider>
        );
        expect(getByText(/^Message:/)).toHaveTextContent("Message: Please, log in");
    });

    it("ConsumerComponent toggle value", () => {
        const { getByText, getByRole } = render(
            <AuthProvider>
                <ConsumerComponent />
            </AuthProvider>
        );
        expect(getByText(/^Message:/)).toHaveTextContent("Message: Please, log in");
        userEvent.click(getByRole("button"));
        expect(getByText(/^Message:/)).toHaveTextContent("Message: Welcome!");
        userEvent.click(getByRole("button"));
        expect(getByText(/^Message:/)).toHaveTextContent("Message: Please, log in");
    });
})