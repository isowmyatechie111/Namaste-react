/**
 *
 * <div id="parent">
 * <div id="child">
 * <h1>heading</h1>
 * <h2>heading2</h2>
 * </div>
 * <div id="child2">
 * <h1>heading</h1>
 * <h2>heading2</h2>
 * </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "h1 tag"),
    React.createElement("h2", {}, "h2tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "h1 tag"),
    React.createElement("h2", {}, "h2tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement(
//     "div",
//     { id: "child" },
//     [
//       React.createElement("h1", {}, "Im h1 tag"),
//       React.createElement("h2", {}, "Im h2 tag"),
//     ],
//     React.createElement("div", { id: "child2" }, [
//       React.createElement("h1", {}, "Im h1 tag"),
//       React.createElement("h2", {}, "Im h2 tag"),
//     ])
//   ),
// ]);

// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(parent);

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "h1 tag"),
//     React.createElement("h2", {}, "h2 tag"),
//   ])
// );

// const heading2 = React.createElement("h2", {}, "heading 2");
// const heading = React.createElement("h1", {}, "heading");
// const child = React.createElement("div", { id: "child" }, [heading, heading2]);
// const parent = React.createElement("div", { id: "parent" }, child);
// const heading = React.createElement(
//   "h1",
//   { id: "heading", class: "hello" },
//   "Hello world from React!"
// );
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
