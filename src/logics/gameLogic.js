// Logic:
//   if (num=0) is "rock";
//   if (num=1) is "paper";
//   if (num=2) is "scissors";
// We will consider player choice minus pc one =>
//  win numbers: -2, 1
//  lost numbers: -1, 2
//  no winner: 0

export function randomNumber(min, maxExcluded) {
  return Math.floor(Math.random() * maxExcluded) + min;
};

export function play(pcInput, input) {
  const result = input-pcInput;
  if (result===-2||result===1) return "win";
  if (result===0) return "equal";
  return "lost"
}