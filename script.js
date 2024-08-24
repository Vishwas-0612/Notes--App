const createBtn = document.querySelector(".enter");
const area = document.querySelector(".text-area");

if (!localStorage.getItem("notes")) {
  localStorage.setItem("notes", "");
}

function showNotes() {
  area.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
  localStorage.setItem("notes", area.innerHTML);
}

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let inputImg = document.createElement("img");

  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  inputImg.className = "delete";
  inputImg.src = "delete.png";
  area.appendChild(inputBox).appendChild(inputImg);
  updateStorage();
});

area.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
});

area.addEventListener("keyup", function (e) {
  if (e.target.classList.contains("input-box")) {
    updateStorage();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});

const icon = document.querySelector(".icon");

let arr = icon.split();
