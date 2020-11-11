var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
 

//You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;
console.log(enemyName, enemyAttack, enemyHealth);

var fight = function () {

    //Alert players that they are starignt he round
    window.alert("Welcome to Robot Gladiators!");

    //Ask player if they want to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    //Make sure they entered information
    console.log( playerName + " chose to " + promptFight);

    //if player choose to fight, then fight 
    if (promptFight ==="fight" || promptFight === "FIGHT") {
        //remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //remove player's helath by subtracting the amount set in the enemyAttack variable 
        playerHealth = playerHealth - enemyAttack;

        //Log a resulting message to the console so that we know it worked. 
        console.log (
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining." 
        );

        //check player's health
        if (playerHealth <= 0 ) {
            window.alert(playerName + " has died!");
        }

        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }

        // if player choses to skip
    else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm players wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney -2;
            console.log (playerName + " has " + playerMoney + " money left.");
        }
        //if no (false), ask question again by running fight() again
        else {
            fight();
        }
    }

    else {
        window.alert("You need to choose a valid option. Try again!");
    }

    
    

   
};

fight ();
