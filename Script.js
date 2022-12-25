const one = React.createElement("h1", {}, "namaste react");
const four = React.createElement("h1", {}, "namaste react");
const two = ReactDOM.createRoot(document.getElementById("root"));
const three = React.createElement("div", {}, [one, four]);
two.render(three);
