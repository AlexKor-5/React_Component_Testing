import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Link from "./Link/Link"

const destination = document.querySelector("#container");

ReactDOM.render(
    <>
        <h1>Hello</h1>
        <Link>Link to ...</Link>
    </>,
    destination
);