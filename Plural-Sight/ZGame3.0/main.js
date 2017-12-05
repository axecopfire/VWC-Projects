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
    if (!character.name) {
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
if (!character.characterClass) {
    character.characterClass = window.alert("That's nice you were a nanny.")
    character.characterClass = "nanny"
}
var choice = window.prompt("Our adventurer, a former " + character.characterClass + " " + character.name + "looks deep within and pulls strength from  who knows where and confronts this zombie menace. Wait...how do you confront the zombie menace? I think you could sneak by or attack it if you want. (sneak or attack)").toLowerCase();



if (choice === "attack") {
    if (character.strength >= 5) {
        window.alert("Using only your bare hands, you slay that zombie! Excelsior! You get stoked and do a victory dance.");
        outcome = "win";
        character.strength++;
    } else if (character.strength <= 5) {
        window.alert("You fearlessly charge the zombie and summon all of your strength. Using your mighty powers you crush thy foe as if it were a sheet of paper you needed to shred.");
        window.alert("Just kidding. You are immediately bitten by the zombie. Not all is lost.");
        character.health -= 5;
        outcome="lose";
    }
}

if (choice === "sneak") {
    if (character.stealth >= 5) {
        window.alert("You sneak by the zombie, you clever little turd!");
    } else if (character.stealth < 5) {
        window.alert("You try to slip by the zombie, but you accidentally stumle and alert the zombie to your presence. It assails you with its zombie might and bite!");
        if (character.strength >= 5) {
            window.alert("Although you have alerted this zombie you are able to crush its skull with your bare hands.");
            outcome = "win";
        } else {
            window.alert("The weakling that you are the zombie chomps down on an arm as you flail wildly in its general direction.");
            outcome = "lose";
        }
    }
}

if (outcome === "lose") {
    window.alert("You are more clever than the dumb zombie and are able to escape.")
    character.health -= 5;
    if (character.health <= 0) {
        window.alert("You are chased down and eviserated by the zombie. You are but a pile of entrails to be scoffed at.")
    } else {
        window.alert("You win and make it away!");
    }

}
