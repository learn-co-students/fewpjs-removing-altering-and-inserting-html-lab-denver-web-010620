// Write your code here!
let element = document.querySelector("main#main");
document.body.removeChild(element);

let newHeader = document.createElement("h1");
newHeader.setAttribute("id","victory")
console.log(newHeader)

newHeader.innerHTML = "Evan is the champion";