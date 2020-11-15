//Function to generate a random numeric value
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    
    return value;
};

var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10, 
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function () {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function () {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    } 
};
 
var enemyInfo = [
    {
        name: "Roberto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];
//var enemyNames = ['Roberto', 'Amy Android', 'Robo Trumble']; //You can use "" or ''- Don't need this since created under object, but keeping in code in case I need to look back at arrays.  




var fight = function (enemy) {
    // repeat and execute as long as the enemy robot is alive
    while (playerInfo.health > 0 && enemy.health > 0 ) {
        //Ask player if they want to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        //Make sure they entered information
        console.log( playerInfo.name + " chose to " + promptFight);
       
        //if player picks "skip" confirm and then top the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm players wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                //subtract money from playerInfo.money for skipping
                playerInfo.money = Math.max(0, playerInfo.money -10);
                console.log ("playerInfo.money", playerInfo.money);
                break;
            }
        }    
        //generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        console.log("enemy damage random number is " + damage);
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        );

        //check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
            console.log(enemy.name + " has died!"); //I put that in to be able to see in the console what is going on
            
            // award player money for winning
            playerInfo.money = playerInfo.money + 20;
            console.log("playerInfo.money" + playerInfo.money);

            // leave while() loop since enemy is dead
            break;
        }

        else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }

        //remove player's health by subtracting the amount set in the enemyAttack variable 
        playerInfo.health = Math.max(0, playerInfo.health - damage);

        //Log a resulting message to the console so that we know it worked. 
        console.log (
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining." 
        );

        //check player's health
        if (playerInfo.health <= 0 ) {
            window.alert(playerInfo.name + " has died! GAME OVER");
            //leave while() loop is player is dead
            break;
        }
        else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    }
};

var startGame = function() {
    //reset player stats
    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            //Let player know what round they are on, array starts at 0, so plus one to equal rounds 1-3
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );
           
            //pick new enemy to fight based on index of enemy.names array
            var pickedEnemyObj = enemyInfo[i];
           
           //reset enemy.health before starting NEW fight
            pickedEnemyObj.health =randomNumber(40, 60);
                       
            //use debugger to pause script from running and check what's going on at that moment in the code
            //debugger
    
            // pass the pickedEnemyObj variable's value into the fight function, where it will assume the value of the enemy.name parameter
            fight(pickedEnemyObj);

            //if we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length -1) {
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
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
            playerInfo.refillHealth();
            break;

        case "UPGRADE": //new case
        case "upgrade":
           playerInfo.upgradeAttack();
            break;

        case "LEAVE": //new case
        case "leave":
            window.alert("Leaving the store.");
            //do nothing, so function will end
            break;
            
        default: 
            window.alert("You did not pick a valid option. Try again.");
            //call shop() again to force player to pick a vlid option
            shop();
            break;
    }
};

//start the game when page loads
startGame();
