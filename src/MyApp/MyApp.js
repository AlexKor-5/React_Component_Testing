import React, {useState} from "react";

export const MyApp = () => {
    const [text, setText] = useState("Hello World!")
    return (
        <>
            <h2 onClick={() => setText("Hello World again")}>{text}</h2>
        </>
    )
}