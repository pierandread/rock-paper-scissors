import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Game from '../components/Game/Game';
import { BrowserRouter as Router } from "react-router-dom";

test(("it should show the right choice"), () =>{
  const {getByText} = render(<Router><Game/></Router>);
  const rockButton = getByText("Rock");
  fireEvent.click(rockButton);
  const choices = getByText("You chose rock");
  expect(choices).toBeInTheDocument();
});

test(("it should show the gif"), () =>{
  const {getByAltText, getByText} = render(<Router><Game/></Router>);
  const rockButton = getByText("Rock");
  fireEvent.click(rockButton);
  const gif = getByAltText("gif of the game");
  expect(gif).toBeInTheDocument();
});



