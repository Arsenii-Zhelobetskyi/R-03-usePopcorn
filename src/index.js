import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import StarRating from "./StarRating";

// import CurrencyConverter from "./Challenge/CurrencyConverter";
// import Comp from "./Challenge/TextExpander";i
import Geolocation from "./Challenge/Geolocation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>{<Geolocation />}</React.StrictMode>);
