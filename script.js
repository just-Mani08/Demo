// Select elements
var istatus = document.querySelector("#card h5");
var addBtn = document.querySelector("#add");

let check = 0;

addBtn.addEventListener("click", function () {
  if (check === 0) {
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
    addBtn.innerHTML = "Remove Friend";
    check = 1;
  } else {
    istatus.innerHTML = "Stranger";
    istatus.style.color = "red";
    addBtn.innerHTML = "Add Friend";
    check = 0;
  }
});
