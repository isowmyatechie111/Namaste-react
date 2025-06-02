import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: "c1" }, [
    React.createElement("h1", { key: "a2" }, "This is Namste react"),
    React.createElement("h2", { key: "a1" }, "cvbcbcndfn "),
  ]),
  React.createElement("div", { id: "child2", key: "c2" }, [
    React.createElement("h1", { key: "b2" }, "h1 tag"),
    React.createElement("h2", { key: "b1" }, "h2tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);
