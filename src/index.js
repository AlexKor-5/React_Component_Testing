import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Link from "./Link/Link"
// import CheckboxWithLabel from "./CheckboxWithLabel/CheckboxWithLabel";
// import {MyApp} from "./MyApp/MyApp";
import {AsyncComp} from "./AsyncComp/AsyncComp";
import {ModalContainer} from "./PortalTesting/ModalContainer/ModalContainer";
import {AuthProvider} from "./ContextTesting/AuthProvider";
import {ConsumerComponent} from "./ContextTesting/ConsumerComponent";

const destination = document.querySelector("#container");

ReactDOM.render(
    <React.StrictMode>
        {/*<h1>Hello</h1>*/}
        {/*<Link>Link to ...</Link>*/}
        {/*<CheckboxWithLabel labelOn={"On"} labelOff={"Off"}/>*/}
        {/*<MyApp/>*/}
        <AsyncComp/>

        <AuthProvider>
            <ConsumerComponent/>
        </AuthProvider>

        <ModalContainer/>
    </React.StrictMode>,
    destination
);