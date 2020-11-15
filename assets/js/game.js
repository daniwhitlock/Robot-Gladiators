var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

 

var enemyNames = ['Roberto', 'Amy Android', 'Robo Trumble']; //You can use "" or ''; however, '' might be better since if you have a string in there as well, it will use ""
//var enemyHealth = 50;
var enemyAttack = 12;

//Function to generate a random numeric value
 var randomNumber = function (min, max) {
     var value = Math.floor(Math.random() * (max - min + 1) + min);
     
     return value;
 };


var fight = function (enemyName) {
    // repeat and execute as long as the enemy robot is alive
    while (playerHealth > 0 && enemyHealth > 0 ) {
        //Ask player if they want to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        //Make sure they entered information
        console.log( playerName + " chose to " + promptFight);
       
        //if player picks "skip" confirm and then top the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm players wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money from playerMoney for skipping
                playerMoney = Math.max(0, playerMoney -10);
                console.log ("playerMoney", playerMoney);
                break;
            }
        }    
        //generate random damage value based on player's attack power
        var damage = randomNumber(playerAttack - 3, playerAttack);
        console.log("enemy damage random number is " + damage);
        enemyHealth = Math.max(0, enemyHealth - damage);
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            console.log(enemyName + " has died!"); //I put that in to be able to see in the console what is going on
            
            // award player money for winning
            playerMoney = playerMoney + 20;
            console.log("playerMoney" + playerMoney);

            // leave while() loop since enemy is dead
            break;
        }

        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //remove player's health by subtracting the amount set in the enemyAttack variable 
        playerHealth = Math.max(0, playerHealth - damage);

        //Log a resulting message to the console so that we know it worked. 
        console.log (
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining." 
        );

        //check player's health
        if (playerHealth <= 0 ) {
            window.alert(playerName + " has died! GAME OVER");
            //leave while() loop is player is dead
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};

var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            //Let player know what round they are on, array starts at 0, so plus one to equal rounds 1-3
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );
           
            //pick new enemy to fight based on index of enemyNames array
            var pickedEnemyName = enemyNames[i];
           
           //reset enemyHealth before starting NEW fight
            enemyHealth =randomNumber(40, 60);
            console.log(enemyNames[i] + " health is " + enemyHealth);
           
            //use debugger to pause script from running and check what's going on at that moment in the code
            //debugger
    
            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);

            //if we're not at the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length -1) {
                //ask if player wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round");

                //if yes, take them to the store() function 
                if (storeConfirm) {
                    shop();
                }
            }
        }
        // I think this code is redunant. 
        // else {
        //     window.alert("You have lost your robot in battle! GAME OVER.");
        //     break;
        // }
    }
    //after the loop ends, player is either out of health or enemies to fight so run endGame function
    endGame();
};

// Function to end the entire game 
var endGame = function() {
    // if player is still alive, player wins! 
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }

    //ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiator! Come back soon!");
    }
};

var shop = function() {
    console.log("entered the shop");
    // Ask player what they would like to do
    var shopOptionPrompt = window.prompt (
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    // Use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL": //new case
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling players health by 20 for 7 dollars.");
                // Increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney -7;
                console.log("Players money is" + playerMoney);
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;

        case "UPGRADE": //new case
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
            //incrase attack and decrease money
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney -7;
            console.log("Players money is" + playerMoney);
            }
            else {
                window.alert ("You don't have enough money!");
            }
            break;

        case "LEAVE": //new case
        case "leave":
            window.alert("Leaving the store.");
            //do nothing, so function will end
            break
        default: 
            window.alert("You did not pick a valid option. Try again.");
            //call shop() again to force player to pick a vlid option
            shop();
            break;
    }
};

//start the game when page loads
startGame();

//When the player is defeated or there are no more enemies, call in endGame() fuction that: 
//  alerts the player's total stats
//  asks the player if they want to play again
//  If yes, call startGame() to restart the game

//After the player skips or defeats an eney (and there are still more robots to fight):
//  Ask the player if they want to "shop"
//  If no, continue as normal
//  If yes, call the shop() function
//  In the shop() function, ask payer if they want to refill health, upgrade attack, or leave the shop
//  If refill, subtract money points from player and increase health
//  If upgrade, subtract money points from player and increase attack power
//  If leave, alert goodbye and exit the function
//  If any other invalid option, call shop() again


// 