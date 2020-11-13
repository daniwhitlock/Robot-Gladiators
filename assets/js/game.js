var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
 

var enemyNames = ['Roberto', 'Amy Android', 'Robo Trumble']; //You can use "" or ''; however, '' might be better since if you have a string in there as well, it will use ""
//var enemyHealth = 50;
var enemyAttack = 12;

 // window.alert("Welcome to Robot Gladiators!");

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
                playerMoney = playerMoney -10;
                console.log ("playerMoney", playerMoney);
                break;
            }
        }    
       
        
        //remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
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
        playerHealth = playerHealth - enemyAttack;

        //Log a resulting message to the console so that we know it worked. 
        console.log (
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining." 
        );

        //check player's health
        if (playerHealth <= 0 ) {
            window.alert(playerName + " has died!");
            //leave while() loop is player is dead
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};

for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    // callfight function with enemy-robot
    fight(pickedEnemyName);
}


