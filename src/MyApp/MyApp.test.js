import {render, screen} from "@testing-library/react";
import {MyApp} from "./MyApp";

it("renders Hello World!", () => {
    const {asFragment} = render(<MyApp/>)
    expect(asFragment()).toMatchSnapshot()
})