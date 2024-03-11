// COUNTER PROGRAM

const decreasebtn = document.getElementById("dec");
const increasebtn = document.getElementById("inc");
const resetbtn = document.getElementById("res");
const countLabel = document.getElementById("counter");
let count = 0;

increasebtn.onclick = function(){
  count++;
  countLabel.textContent = count;
}

decreasebtn.onclick = function(){
  count--;
  countLabel.textContent = count;
}

resetbtn.onclick = function(){
  count = 0;
  countLabel.textContent = count;
}