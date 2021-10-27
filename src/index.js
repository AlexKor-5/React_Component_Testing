import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Link from "./Link/Link"
import CheckboxWithLabel from "./CheckboxWithLabel/CheckboxWithLabel";
import {MyApp} from "./MyApp/MyApp";

const destination = document.querySelector("#container");

ReactDOM.render(
    <>
        <h1>Hello</h1>
        <Link>Link to ...</Link>
        <CheckboxWithLabel labelOn={"On"} labelOff={"Off"}/>
        <MyApp/>
    </>,
    destination
);