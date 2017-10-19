var setting = ["You are tired and lazy and roll over in your bed and a zombie is staring you in the face.", "You tried to go home after school one day but the bus driver was bitten by a zombie and now you have to walk. Along the way you are assailed by a murder of zombie crows.", "As you paddle out into the morning sun thinking you are going to catch the gnarliest wave set today. When from down below comes a zombie swordfish."];

function randomNumber(range) {
    return Math.round(Math.random() * range);
}

alert(setting[randomNumber(setting.length - 1)]);

var weaponList = ["a pouch of Capri-Sun", "a baseball card", "a pair of keys", "a boombox"];

var weapon = weaponList[randomNumber(weaponList.length - 1)];

alert("Yo get outta here zombie! You pull " + weapon + " out and start waving it menacingly.");

var survival = randomNumber(2)

if (randomNumber === 0) {
    alert("The zombie bites you. You die!");
} else if (randomNumber > 0) {
    alert("You kill the zombie with " + weapon + ". You survive!");
}
