

function convert() {
    var farenheit = document.getElementById("cel").value * 9 / 5 + 32;
     var x =  document.getElementById("cel").value;

     if (x.length == 0){
        document.getElementById("faren").innerHTML = "შეიყვანეთ ცელსიუსის მნიშვნელობა";
        document.getElementById("faren").style.color = "red";
        document.getElementById("faren").style.fontSize = "16px";
     }else{
        document.getElementById("faren").innerHTML = farenheit;
        document.getElementById("faren").style.color = "white";
        document.getElementById("faren").style.fontSize = "20px";
     }
      
    } 