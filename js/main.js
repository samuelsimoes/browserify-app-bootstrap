import { React } from "./libs";
import Hello from "./hello";
import ReactDOM from "react-dom";

ReactDOM.render(
  React.createElement(Hello),
  document.getElementById("app")
);
