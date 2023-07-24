// var ele = document.getElementsByClassName("name");
// console.log(ele[1]);
// ele[1].innerText = "58"

// var eles = document.getElementById("para")
// console.log(eles);
// eles.innerText = "This change was made by Jatin Gorana";
// eles.innerHTML = "<h1>Hello</h1>";
// eles.innerHTML += "Hiii.."

// var inputs = document.getElementById("inp");
// console.log(inputs);

// function add(num1, num2){
//     var c = num1 + num2;
//     console.log(c);
// }

// add(34, 45);

function showPassword(){
    // console.log("Your Response has been submitted.")
    // document.write("Your response has been submitted.")
    
    var inputs = document.getElementById("pass");
    inputs.type = "text";
}

function hidePassword(){
    var inputs = document.getElementById("pass");
    inputs.type = "password";
}