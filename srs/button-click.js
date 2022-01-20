const bodys = ["H1", "P", "BUTTON", "A"];

function OnClick() {
    var text = document.getElementById("Light-Switch").textContent;
    
    if (text == "Dark Mode"){
        document.getElementById("Light-Switch").innerHTML = "Light Mode";
        document.getElementsByTagName("BODY")[0].style.backgroundColor = "black";
        for (let i = 0; i < bodys.length; i++){
            document.getElementsByTagName(bodys[i])[0].style.color = "white";
        }
        document.getElementsByTagName("A")[1].style.color = "white";
    } else if (text == "Light Mode"){
        document.getElementById("Light-Switch").innerHTML = "Dark Mode";
        document.getElementsByTagName("BODY")[0].style.backgroundColor = "white";
        for (let i = 0; i < bodys.length; i++){
            document.getElementsByTagName(bodys[i])[0].style.color = "black";
        }
        document.getElementsByTagName("A")[1].style.color = "black";
    }
    
}