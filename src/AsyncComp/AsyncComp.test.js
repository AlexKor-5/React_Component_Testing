import {render} from "@testing-library/react";
import {AsyncComp} from "./AsyncComp";
import userEvent from "@testing-library/user-event";
import {fetchUsers} from "./fetchUsers";

jest.mock("./fetchUsers")

describe("Async Component Testing", () => {
    it("fetches users", async () => {
        const {getByText, findAllByAltText} = render(<AsyncComp/>)
        userEvent.click(getByText(/Obtain Users/i))
        const users = await findAllByAltText(/imageerror/i)
        expect(users).toHaveLength(3)
    })
})