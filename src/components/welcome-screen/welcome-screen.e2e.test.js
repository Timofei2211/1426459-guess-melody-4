import React from "react";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen.jsx";
import Enzyme, {shallow} from "enzyme";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should welcome button be pressed`, () => {
  const onWelcomeButtonClick = jest.fn();

  const welcomeScreen = shallow(
      <WelcomeScreen
        errorCount = {3}
        onWelcomeButtonClick = {onWelcomeButtonClick}/>
  );

  const welcomeButton = welcomeScreen.find(`button.welcome__button`);
  welcomeButton.simulate(`click`);
  // welcomeButton.props().onClick();

  expect(onWelcomeButtonClick.mock.calls.length).toBe(1);
});
