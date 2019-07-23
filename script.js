let chooseNumber = 0;
anyNumber = undefined;
function typeNumber(){

    let choose = Math.floor(Math.random() * chooseNumber.length);
    if(chooseNumber == anyNumber){
        alert("you are correct");
        //document.querySelector(".box").innerHTML = "you are " + chooseNumber[choose];
       
    }else{
        alert("you are wrong");
        //document.querySelector(".box").innerHTML = "you are " + chooseNumber[choose];
    }
}