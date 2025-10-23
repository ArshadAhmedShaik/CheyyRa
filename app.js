let input = document.querySelector("input");
let button = document.querySelector("button");

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        button.click(); 
    }
});


button.addEventListener("click", function() {
    let input = document.querySelector("input");
    console.log(input.value);
    let li = document.createElement("li");
    let btn = document.createElement("button");
    let div = document.createElement("div");
    div.classList.add("listdiv");
    btn.innerText = "delete";
    btn.classList.add("deletebro");
    div.innerHTML = `<p>${input.value}</p>`;
    div.append(btn);
    li.append(div);
    btn.addEventListener("click", function() {
        li.remove();
    });
    let ol = document.querySelector("ol");
    ol.append(li);
    input.value = null;
});

let clear = document.querySelector("#clear");

clear.addEventListener("click", function() {
    let li = document.querySelectorAll("li");
    for(let x of li) {
        x.remove();
    }
});