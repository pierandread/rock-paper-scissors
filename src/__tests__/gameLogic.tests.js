import { randomNumber, play } from '../logics/gameLogic';

test(("if pcInput equal rock it should return the right result"), () =>{
  expect(play(0, 0)).toBe("equal");
  expect(play(0, 1)).toBe("win");
  expect(play(0, 2)).toBe("lost");
});

test(("random number should be between 0 and 2"), () =>{
  expect(randomNumber(0, 3)).toBeGreaterThanOrEqual(0);
  expect(randomNumber(0, 3)).toBeGreaterThanOrEqual(0);
  expect(randomNumber(0, 3)).toBeGreaterThanOrEqual(0);
  expect(randomNumber(0, 3)).toBeGreaterThanOrEqual(0);
  expect(randomNumber(0, 3)).toBeLessThanOrEqual(2);
  expect(randomNumber(0, 3)).toBeLessThanOrEqual(2);
  expect(randomNumber(0, 3)).toBeLessThanOrEqual(2);
  expect(randomNumber(0, 3)).toBeLessThanOrEqual(2);
});

//   (num=0) is "rock";
//   (num=1) is "paper";
//   (num=2) is "scissors";
