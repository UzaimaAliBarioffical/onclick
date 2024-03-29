

let newNumber = 0;
function alertFunction() {
    newNumber++;
    alert(newNumber);
}
document.addEventListener("keydown", alertFunction);
window.onload = function () {
    newNumber = 0;
}