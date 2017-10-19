var setting = ["You are tired and lazy and roll over in your bed and a zombie is staring you in the face.", "You tried to go home after school one day but the bus driver was bitten by a zombie and now you have to walk. Along the way you are assailed by a murder of zombie crows.", "As you paddle out into the morning sun thinking you are going to catch the gnarliest wave set today. When from down below comes a zombie swordfish."];

<<<<<<< HEAD
var setting = [
    {backAlley: ["dumpster", "pizza", ""]}
]
var weapon = prompt("You look around frantically for a weapon. What do you choose? a can of soup, a jigsaw, or a spoon?");
var randomNumber = Math.round(Math.random());
=======
function randomNumber(range) {
    return Math.round(Math.random() * range);
}
>>>>>>> df24df54bc7a571ebbccfa4bc686041643c261e8

alert(setting[randomNumber(setting.length - 1)]);

var weaponList = ["a pouch of Capri-Sun", "a baseball card", "a pair of keys", "a boombox"];

<<<<<<< HEAD
=======
var weapon = weaponList[randomNumber(weaponList.length - 1)];

alert("Yo get outta here zombie! You pull " + weapon + " out and start waving it menacingly.");

var survival = randomNumber(2)

if (randomNumber === 0) {
    alert("The zombie bites you. You die!");
} else if (randomNumber > 0) {
    alert("You kill the zombie with " + weapon + ". You survive!");
}
>>>>>>> df24df54bc7a571ebbccfa4bc686041643c261e8
