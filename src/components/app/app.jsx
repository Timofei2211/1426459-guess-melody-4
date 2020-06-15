import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from "prop-types";

const App = ({errorCount}) => {
  return <WelcomeScreen
    errorCount={errorCount}/>;
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
};

export default App;
