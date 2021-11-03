import {fetchUsers} from "./fetchUsers";
import {render} from "@testing-library/react";
import {AsyncComp} from "./AsyncComp";
import userEvent from "@testing-library/user-event";
import {url} from "./AsyncComp"

jest.mock("./fetchUsers")

describe("Async Component Testing", () => {
    it("fetches users", async () => {

        // const dataMatcher = [
        //     {
        //         "createdAt": "2021-11-02T14:41:54.292Z",
        //         "name": "Laura Runolfsson",
        //         "avatar": "https://cdn.fakercloud.com/avatars/digitalmaverick_128.jpg",
        //         "id": "1"
        //     }
        // ]
        // await fetchUsers(url)
        //     .then(data => console.log(data))


        const {getByText, findAllByAltText} = render(<AsyncComp/>)
        userEvent.click(getByText(/Obtain Users/i))
        const users = await findAllByAltText(/image error/i)
        expect(users).toHaveLength(3)
    })
})

// const mockFetchUsers = jest.fn(fetchUsers)
//     .mockImplementationOnce(() => Promise.resolve([{
//         name: "Alex Kor",
//         avatar: "https://cdn.fakercloud.com/avatars/digitalmaverick_128.jpg"
//     }]))
// // mockFetchUsers();