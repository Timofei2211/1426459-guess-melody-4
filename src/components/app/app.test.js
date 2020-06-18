import React from "react";
import App from "./app.jsx";
import renderer from "react-test-renderer";

it(`Should App render correctly`, () => {
  const tree = renderer.create(<App errorCount ={3}/>).toJSON();
  expect(tree).toMatchSnapshot();
});

