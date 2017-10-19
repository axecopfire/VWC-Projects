window.alert("The zombie apocalypse is really happening! Like for realzies!")

var setting = ["You are tired and lazy and roll over in your bed and a zombie is staring you in the face, or possibly just staring.", "You tried to go home after school one day but the bus driver was bitten by a zombie and now you have to walk. In your path there appear to be a murder of zombie crows.", "As you paddle out into the morning sun thinking you are going to catch the gnarliest wave set today. When from down below comes a zombie swordfish, which you have heard roam these waters."];

function randomNumber(range) {
    return Math.round(Math.random() * range);
}

alert(setting[randomNumber(setting.length - 1)]);

var character = {
    health: 5,
    strength: 0,
    stealth: 0,
    name: window.prompt("What is your name?"),
    characterClass: window.prompt("What were you before the war began? (Soldier, Doctor, or Politician?)").toLowerCase()
};

if (!character.name) {
    character.name = window.prompt("What do you want to be named? do you want me to name you?")
    if(!character.name) {
        window.alert("Well too bad. From now until eternity you shall be known as 'Puddles the Poopy Pants'!")
        character.name = "Puddles the Poopy Pants"
    }
}

if (character.characterClass === "soldier") {
    character.strength = 5;
}
if (character.characterClass === "politician") {
    character.stealth = 5;
}
if (character.characterClass === "doctor") {
    character.health = 7;
}

var firstEncounter = window.prompt("Our adventurer, a former " + character.characterClass + " " + character.name + )

var weaponList = ["a pouch of Capri-Sun", "a baseball card", "a pair of keys", "a boombox"];

var weapon = weaponList[randomNumber(weaponList.length - 1)];

alert("Yo get outta here zombie! You pull " + weapon + " out and start waving it menacingly.");

var survival = randomNumber(2)

if (randomNumber === 0) {
    alert("The zombie bites you. You die!");
} else if (randomNumber > 0) {
    alert("You kill the zombie with " + weapon + ". You survive!");
}
