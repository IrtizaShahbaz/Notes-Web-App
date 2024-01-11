const notesCon = document.querySelector(".input-conatiner");
const btn = document.querySelector(".btn");
let notes = document.querySelectorAll(".inpBox");

function showNotes() {
  notesCon.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
  localStorage.setItem("notes", notesCon.innerHTML);
}

btn.addEventListener("click", () => {
  let inpBox = document.createElement("p");
  let img = document.createElement("img");
  img.src = "images/delete.png";
  inpBox.className = "inpBox";
  inpBox.setAttribute("contenteditable", "true");
  notesCon.appendChild(inpBox).appendChild(img);
});

notesCon.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".inpBox");
    notes.forEach(nt => {
        nt.addEventListener("keyup", function() {
            updateStorage();
        });
    });
} 
});
document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand ("insertLineBreak");
        event.preventDefault();
    }
})