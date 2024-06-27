import { playerScore, score } from "./index";



it("1st Score point : ", () => {
  let player: playerScore = {name: "TestPlayer", score: 0};
  score(player);
  expect(player.score).toBe(15);
});

it("2nd Score point : ", () => {
  let player: playerScore = {name: "TestPlayer", score: 15};
  score(player);
  expect(player.score).toBe(30);
}); 

it("3rd Score point : ", () => {
  let player: playerScore = {name: "TestPlayer", score: 30};
  score(player);
  expect(player.score).toBe(40);
});

/// 2nd level 
it("1st Score point with 2 players : ", () => {
  let player1: playerScore = {name: "Player A", score: 0};
  let player2: playerScore = {name: "Player B", score: 15};
  score(player2);
  expect(player1.score).toBe(0);
  expect(player2.score).toBe(30);
});

/// 3rd level 
it("Set Win test : ", () => {
  let player: playerScore = {name: "TestPlayer", score: 40, setOutcome: false};
  score(player);
  expect(player.setOutcome).toBe(true);
});