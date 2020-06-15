import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";


const setting = {
  errorCount: 6
};

ReactDOM.render(
    <App
      errorCount ={setting.errorCount}
    />,
    document.getElementById(`root`)
);
