import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

//Wrap our App in the BrowserRouter => in the react roter context
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
	  <React.StrictMode>
		  <App />
	  </React.StrictMode>
	</BrowserRouter>
);


//Bootsrap link below
//<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
