var result = document.getElementById("result");
var ac = document.getElementById("ac");
var equal = document.getElementById("equal");
var btns = document.getElementsByClassName("btn");
var final = "";

for(let i=0;i<btns.length;i++){
    btns[i].addEventListener("click", function () {
        show(btns[i].innerHTML);
    });
}

ac.addEventListener("click", function () {
    final="";
    result.innerHTML = 0;
});

equal.addEventListener("click", function () {

    if (final == "") return;
    var last = final[final.length - 1];

    if(last == "+" || last == "-" || last == "*" || last == "/")
        return
    
    result.innerHTML = eval(final);
    final = "";
});

function show (content) {
    if (final == ""){
        if (content == "*") return;
        if (content == "/") return;
    }

    var last = final[final.length - 1];
    if(last == "+" || last == "-" || last == "*" || last == "/")
        if(content == "+" || content == "-" || content == "*" || content == "/")
            return

    final += content
    result.innerHTML = final;
}