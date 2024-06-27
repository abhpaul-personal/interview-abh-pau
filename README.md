# Tennis Game Simulator

## Evaluation Criteria

- Language specific best practices
- Clear commit history
- Maintainability: is it written in a clean, maintainable way?
- Correctness: does the functionality act in sensible, thought-out ways? Are we sure (i.e. via testing) that the code works?

## Development

### TypeScript
After using the correct environment (Node.js v18) and installing dependencies you can develop the application.

Navigate to the Typescript directory with `cd typescript` Run the with `npx ts-node index.ts` Run all test cases with `npx jest`

### Python
Navigate to the Python directory with `cd python` Run the with `poetry run python main.py` Run all test cases with `poetry run pytest`

## The Challenge

You have been tasked to build a tennis game simulator where we can simulate a game between two players.

The specifications for your system are the following:

- A game consists of rounds, where each round a player wins.
- Each player starts a game with a score of zero (0).
- The points are earned in this sequence: 0, 15, 30, 40
- Winning conditions:
  - If a player has 40 and scores again, that player wins the game as long as the other player does not also have 40 points.
  - If a player has 'advantage' and scores again, that player wins the game.

- "Deuce" and "Advantage" situation:
  - If both players reach a score of 40, they're tied. In this situation one of them needs to score twice in a row in order to win the game.
  - Examples:
    - The players are tied. Player 1 scores. He needs to score again to win. He scores again. He wins.
    - The players are tied. Player 1 scores. He needs to score again to win. Player 2 scores. The players are tied again, nobody wins yet.
  - If both players reach 40 points it is referred to as a "Deuce".
  - Scoring during deuce gives a player 'Advantage'.
  - If the other player scores again, the score returns to "Deuce".

## Iterations

Make commits for each iteration and do each iteration at a time.
Do not focus too much on future iterations.
It is not expected to finish all iterations during this interview.

We make the iterations smaller and land at: 1. scoring, 2 two players, 3 winning, 4 advantage and deuce, 5 game loop

### Iteration 1 - Basic Tennis Scoring

Handle the basic scoring sequence:

- A Player can reach a score of 40 (according to the tennis rules)

### Iteration 2 - A Two Player Game

Implement a game with two players:

- A game has two players
- Each player can score points

### Iteration 3 - Winning Conditions

A player can win the game:

- A player that scores a point while have a score of 40 wins the game.

### Iteration 4 - Deuce and Advantage

Handle the situation when both players reach 40:

- A player scoring after Deuce gets "Advantage"
- A player not scoring after having "Advantage" loses "Advantage"

### Iteration 5 - Run a Full Game

Run a game where the players score randomly until they win:

- Implement a game loop that will run a simulated game until a player wins
- After each point is scored log the score board
- implement a random scoring between the players
