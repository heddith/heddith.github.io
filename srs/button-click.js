const bodys = ["H1", "P", "BUTTON", "A"]; 

function OnClick() {

    var checkText = document.getElementsByClassName("Light-Switch");
    for (var i = 0; i < checkText.length; i++) {
        var text = checkText[i].innerText;
        }
    
    if (text == "Dark Mode"){
        document.getElementById("Light-Switch").innerHTML = "Light Mode";
        document.getElementsByTagName("BODY")[0].style.backgroundColor = "white";
        for (let i = 0; i < bodys.length; i++){
            document.getElementsByTagName(bodys[i])[0].style.color = "black";
            document.getElementsByTagName("A")[1].style.color = "black";
        }
    } else if (text == "Light Mode"){
        document.getElementById("Light-Switch").innerHTML = "Dark Mode";
        document.getElementsByTagName("BODY")[0].style.backgroundColor = "black";
        for (let i = 0; i < bodys.length; i++){
            document.getElementsByTagName(bodys[i])[0].style.color = "white";
            document.getElementsByTagName("A")[1].style.color = "white";
        }
    }
    
}