//first P tag
let firstP = document.querySelector("p");
console.log("First <p> element");
console.log(firstP);

//all spans
let allSpan = document.querySelectorAll("span");
console.log("All Spans");
console.log(allSpan);

//just the 2nd span
let secondSpan = document.getElementById("spanner02");
console.log("The second Span");
console.log(secondSpan);

//changing the 3rd span to Not Spanner03
document.getElementsByTagName("span")[2].innerHTML = "NOT Spanner03";

//creating a new div with content
let newDiv = document.createElement("p");
newDiv.innerText = "This is a newly created text element";
document.body.appendChild(newDiv);

//adds bisque and a background because it is illegible
newDiv.classList.add("bisque");
//immediately removed the unreadable bisque
newDiv.classList.remove("bisque");

var toggle = false;
function toggleBisque() {
  newDiv.classList.toggle("bisque");
}
