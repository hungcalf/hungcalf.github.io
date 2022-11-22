

function test() {
    alert(document.getElementById("matchnumber").value);
}

let postcreationButton = document.getElementById("postcreation");
postcreationButton.addEventListener("click", test);