import * as React from "react";
import * as ReactDOM from "react-dom";

declare const document: HTMLDocument;

ReactDOM.render(
    <p>Hello React</p>,
    document.getElementById("root")
);