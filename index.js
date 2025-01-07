const listBox = document.querySelector(".list");

function addList() {
    const inputBox = document.querySelector(".input input");

    if (inputBox.value == "") {
        alert("Please enter the task")
    } else {
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listBox.appendChild(li);
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
};

listBox.addEventListener("click", (e)=>{
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("check");
        saveData();
    }else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data",listBox.innerHTML);
}

function showList(){
    listBox.innerHTML = localStorage.getItem("data");
}
showList();
