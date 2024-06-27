
//enum scorePoint { "15", "30", "40"}

let currentScore = 0;

export interface playerScore {
  name: String,
  score: number,
  setOutcome?: boolean 
}

export function score(player: playerScore): playerScore {

  if(player.score === 0) { 
    player.score  = 15;
  } else if (player.score === 15 ) { 
    player.score  = 30;
  } else if (player.score === 30 ) {
    player.score  = 40;
  } else if (player.score === 40) {
    player.setOutcome = true;
    //player.score  = 0;
  }
  return player;
}

export default score;

