import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Homepage from '../components/Homepage/Homepage';
import { BrowserRouter as Router } from "react-router-dom";


test(("it should redirect to right url if click in you vs the computer"), () =>{
  const {getByText} = render(<Router><Homepage/></Router>);
  const buttonYouvsComputer = getByText("You vs the computer");
  fireEvent.click(buttonYouvsComputer);
  expect(global.window.location.pathname).toEqual('/playing/5');
});

test(("it should redirect to right url if click in computer vs the computer"), () =>{
  const {getByText} = render(<Router><Homepage/></Router>);
  const buttonComputervsComputer = getByText("Computer vs computer");
  fireEvent.click(buttonComputervsComputer);
  expect(global.window.location.pathname).toEqual('/simulation/5');
});

test(("it should redirect to right url changing the points input"), () =>{
  const {getByText, getByLabelText} = render(<Router><Homepage/></Router>);
  const buttonYouvsComputer = getByText("You vs the computer");
  const pointsInput = getByLabelText("How many points to win (between 1 and 10):")
  fireEvent.change(pointsInput, { target: { value: '7' } });
  fireEvent.click(buttonYouvsComputer);
  expect(global.window.location.pathname).toEqual('/playing/7');
});