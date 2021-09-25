function fight() {
  let hero = prompt("Name Your Hero:"); //Asks for hero name
  let monster = prompt("Name Your Monster:"); //Asks for monster name
  
  //Set health for both
  let villainHealth = 50; 
  let heroHealth = 50;

  //Does action before health reaches 0
  while (heroHealth > 0 && villainHealth > 0) {
    //Picks a random number between 1 and 20 for dice roll of hero and monster
    let heroDice = Math.floor(Math.random()* 20);
    let monsterDice = Math.floor(Math.random()* 20);

    //Checks hero Dice Roll
    if (heroDice == 1 || heroDice == 2) {
      heroHealth -= 5;
      alert(`${hero} stabbed themselves...yikes. ${hero}'s health is at ${heroHealth}.`);
    }
    else if (heroDice >= 3 && heroDice <= 10) {
      villainHealth -= 0;
      alert(`${hero} missed. ${monster}'s health is at ${villainHealth}.`);
    }
    else if (heroDice >= 11 && heroDice <= 18) {
      villainHealth -= 10;
      alert(`${hero} made a hit. ${monster}'s health is at ${villainHealth}.`);
    }
    else if (heroDice == 19 || heroDice == 20) {
      villainHealth -= 20;
      alert(`${hero} made a critical attack! ${monster}'s health is at ${villainHealth}.`);
    }

    //Checks monster Dice Roll
    if (monsterDice == 1 || monsterDice == 2) {
      villainHealth -= 5;
      alert(`${monster} stabbed themselves...yikes. ${monster}'s health is at ${villainHealth}.`);
    }
    else if (monsterDice >= 3 && monsterDice <= 10) {
      heroHealth -= 0;
      alert(`${monster} missed. ${hero}'s health is at ${heroHealth}.`);
    }
    else if (monsterDice >= 11 && monsterDice <= 18) {
      heroHealth -= 10;
      alert(`${monster} made a hit. ${hero}'s health is at ${heroHealth}.`);
    }
    else if (monsterDice == 19 || monsterDice == 20) {
      heroHealth -= 20;
      alert(`${monster} made a critical attack! ${hero}'s health is at ${heroHealth}.`);
    }

    //Checks if monster or hero have reached 0 or less
    //&& condition checks if final blow is done by checking if winner's health is greater than their own
    if (villainHealth <= 0 && villainHealth < heroHealth) {
      alert(`${hero} defeated ${monster}, ${hero} is the winner!!`);
    }
    else if (heroHealth <= 0 && heroHealth < villainHealth) {
      alert(`${monster} defeated ${hero}, ${monster} is the winner :(`);
    }
    //Bonus condition
    else if (heroHealth && villainHealth == 0) {
      alert(`${monster} and ${monster} have defeated each other! There is no winner.`);

    }
  }

  let userInput = prompt("Would you like to play again?");
  if (userInput == "yes" || userInput == "Yes") {
    return fight();
  }
  else if (userInput == "no" || userInput == "No") {
    alert("Thank you for playing!");
    return;
  }
  else{
    userInput = prompt("Would you like to play again?");
  }
}

fight();