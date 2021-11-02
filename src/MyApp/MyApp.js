import React, {useState} from "react";

export const MyApp = () => {
    const [text, setText] = useState("Hello World!")
    return (
        <>
            <h2 onClick={() => setText("Hello World again")}>{text}</h2>
            <div className={"buttons"}>
                <button>Ok</button>
                <button>Yep</button>
                <button>Nope</button>
            </div>
            <a href="https://jestjs.io/uk/docs/expect">Link to something ...</a>
            <div className={"post"}>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cumque cupiditate earum eos
                    illo mollitia nostrum obcaecati officia rerum, suscipit.</p>
            </div>
        </>
    )
}