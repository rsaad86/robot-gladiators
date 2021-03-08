/* Created variable and used window prompt */

/* console.log(enemy.names, enemy.attack, enemy.health);
console.log(enemy.names[0]);
console.log(enemy.names[1]);
console.log(enemy.names[2]);
console.log(enemy.names[3]); //should return undefined as arrays start at 0
console.log(enemy.names.length); //the length of the array */

var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function () {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function () {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars");
      this.health += 20;
      this.money -= 7;
    } else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function () {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } else {
      window.alert("You don't have enough money!");
    }
  },
};

//console.log(playerInfo.name, playerInfo.attack, playerInfo.health, playerInfo.money);

var enemyInfo = [
  {
    name: "Blunderbuss",
    attack: randomNumber(10, 14),
  },
  {
    name: "Pompadu",
    attack: randomNumber(10, 14),
  },
  {
    name: "Gorgonzola",
    attack: randomNumber(10, 14),
  },
];

// fight function (now with parameter for enemy's name)
var fight = function (enemy) {
  while (playerInfo.health > 0 && enemy.health > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt(
      'Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'
    );

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(
          playerInfo.name + " has decided to skip this fight. Goodbye!"
        );
        // subtract money from playerInfo.money for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);

        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    enemy.health = Math.max(0, enemy.health - playerInfo.attack);
    console.log(
      playerInfo.name +
        " attacked " +
        enemy.name +
        ". " +
        enemy.name +
        " now has " +
        enemy.health +
        " health remaining."
    );

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + " has died!");

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }

    // remove players's health by subtracting the amount set in the enemy.attack variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);

    console.log(
      enemy.name +
        " attacked " +
        playerInfo.name +
        ". " +
        playerInfo.name +
        " now has " +
        playerInfo.health +
        " health remaining."
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died!");
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(
        playerInfo.name + " still has " + playerInfo.health + " health left."
      );
    }
  }
};

var shop = function () {
  var showOptionPrompt = window.prompt(
    "Would you like to refill your health, Upgrade your attack or Leave the store? Please enter one: 'REFILL', 'UPGRADE', or  'LEAVE' to make a choice."
  );
  switch (showOptionPrompt) {
    case "REFILL":
    case "refill":
      playerInfo.refillHealth();
      //increase health and decrease money
      playerInfo.health = playerInfo.health + 20;
      playerInfo.money = playerInfo.money - 7;
      break;
    case "UPGRADE":
    case "upgrade":
      playerInfo.upgradeAttack();
      break;

    case "LEAVE":
    case "leave":
      window.alert("Leaving the store.");

      //do nothing, so function will end
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");

      //call shop() to force player to pick a valid option
      shop();
      break;
  }
};

var startGame = function () {
  playerInfo.reset();

  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      var pickedEnemyObj = enemyInfo[i];

      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
      pickedEnemyObj.health = randomNumber(40, 60);

      fight(pickedEnemyObj);
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        var storeConfirm = window.confirm(
          "The fight is over, visit the store before the next round?"
        );
        if (storeConfirm) {
          shop();
        }
      }
    } else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
};
startGame();

var endGame = function () {
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score");
  } else {
    window.alert("You've lost your robot in battle");
  }

  window.alert("The game has now ended. Let's see how you did");

  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};
endGame();

//this is also a comment, using two slashes
/*A console log test
console.log(10 + 10);
console.log("Our robot's name is " + playerInfo.name);
console.log("Bloop the Robot " + "is ready to fight!");
console.log(playerInfo.name + " is ready for battle!");
console.log("Your robot, " + playerInfo.name + ", has won!");
*/

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less
