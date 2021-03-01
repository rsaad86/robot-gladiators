/* Created variable and used window prompt */
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyNames = ["Robot Face", "Pompadu", "Robototo"];
var enemyHealth = 50;
var enemyAttack = 12;

/* console.log(enemyNames, enemyAttack, enemyHealth);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames[3]); //should return undefined as arrays start at 0
console.log(enemyNames.length); //the length of the array */

// fight function (now with parameter for enemy's name)
var fight = function (enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
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
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;

        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName +
        " attacked " +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now has " +
        playerHealth +
        " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};

for (var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}

//this is also a comment, using two slashes
/*A console log test
console.log(10 + 10);
console.log("Our robot's name is " + playerName);
console.log("Bloop the Robot " + "is ready to fight!");
console.log(playerName + " is ready for battle!");
console.log("Your robot, " + playerName + ", has won!");
*/

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less
