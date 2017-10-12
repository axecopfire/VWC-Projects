var txt;
var button = prompt("Would you like to press a button?");
var prompting = confirm("Press a button!");
var randomNumber = Math.round(Math.random());

if (prompting == true) {
    txt = alert("Well Okie Doke!");
} else {
    txt = alert("Ahh, what you no likie the button?");
    newbutton = prompt("Okay how about this button?");
    if(randomNumber === 0){
        alert("Ahh that's a fine button.");
    } else {
        alert("Cancel what I said before. These are some sweet buttons.");          
    }
}
