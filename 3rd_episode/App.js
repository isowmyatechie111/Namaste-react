import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement=>React element(object)=> HTML Element(render)

const heading = React.createElement("h1", { id: "heading" }, "Namate React💥");
const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(heading);

console.log(heading);
//JSX-->js syntax to create HTMl elements.HTML like syntax

// JSX (transpiled before it reaches the JS engine) transpiling is done for parcel(babel)
//JSX===>babel transpiles  JSX  to
// React.createelement=>React element(obj)==>html element by render method ==>babel is conevrting jsx to react element
const jsxHeading = (
  <h1 id="heading1" className="head" tabIndex="1">
    Namaste React using JSX 💥
  </h1>
);

// console.log(jsxHeading);
root.render(jsxHeading);

//React componenents

const TitleComp = () => <h1>Title component</h1>;
const someElem = <span>somw elem</span>;
const HeadingComp = () => (
  <div>
    <h3>Hello from react functional componenent</h3>
    <TitleComp />
    <TitleComp />
    <TitleComp />
    <TitleComp />
    <TitleComp></TitleComp>
    {TitleComp()}, called as func call
  </div>
);
const title = (
  <h1>
    title elem {someElem}
    <HeadingComp />
  </h1>
);

//root.render(HeadingComp); // this will not work as Headingcomp is react comp and not an element

root.render(title);
