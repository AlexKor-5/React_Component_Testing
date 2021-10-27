import {render, screen} from "@testing-library/react";
import {MyApp} from "./MyApp";

it("renders Hello World!", () => {
    render(<MyApp/>)
    screen.debug()
})