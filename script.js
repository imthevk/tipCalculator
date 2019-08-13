
// document.getElementById('btn').onclick = myFunction();
function myFunction() {

    var tipInput = document.getElementById("amount");
    var tipOut = document.getElementById("output");
    // var selectMenu = document.getElementById("select");
    var Peoples = document.getElementById("people");
    var tip = tipInput.value;
    var people = Peoples.value;
    var total = ((tip / 5) / people);
    tipOut.value = Math.floor(total);

    if (people === "") {
        alert("Please enter No of peoples");
    }
    else {
        return tipOut.value == tipInput;
    }
}
