let getinput = document.getElementById("inp");
let list = document.getElementById("first-ul");
let Addbtn = document.getElementById("addtolist");

Addbtn.addEventListener("click", function () {
  return (list.innerText = getinput.value);
  //   (getinput.value = list.innerText);
});
