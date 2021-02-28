/* Created variable and used window prompt */
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyName = "Robot Face";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName, enemyAttack, enemyHealth);

var fight = function () {
  window.alert("Welcome to Robot Gladiators!");
  var promptFight = window.prompt(
    "Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to continue!"
  );

  //if player chooses to fight
  if (promptFight === "fight" || promptFight === "FIGHT") {
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

    //check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

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

    //check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    //if player chooses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has chosen to skip the fight!");
      playerMoney = playerMoney - 2;
      window.alert(
        playerName +
          " loses 2 dollars and now only has " +
          playerMoney +
          " left."
      );
    } else {
      fight();
    }
  } else {
    window.alert("You need to choose a valid option. Try again!");
  }
};

/*called the function */
fight();

//this is also a comment, using two slashes
/*A console log test
console.log(10 + 10);
console.log("Our robot's name is " + playerName);
console.log("Bloop the Robot " + "is ready to fight!");
console.log(playerName + " is ready for battle!");
console.log("Your robot, " + playerName + ", has won!");
*/
