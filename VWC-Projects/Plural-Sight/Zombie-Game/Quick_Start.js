alert("The zombie apocalypse is going down! You are looting a store and suddenly the zombie bursts through the door.");     

var setting = [
    {backAlley: ["dumpster", "pizza", ""]}
]
var weapon = prompt("You look around frantically for a weapon. What do you choose? a can of soup, a jigsaw, or a spoon?");
var randomNumber = Math.round(Math.random());

alert("You attack the zombie with your" + " " + weapon);

if(randomNumber === 0){
    alert("The zombie bites you. You die!");
} else if (randomNumber === 1){
    alert("You kill the zombie with your" + " " + weapon + ". You survive!");
}

