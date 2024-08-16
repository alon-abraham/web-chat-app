function printError(elemId, hintMsg){
    document.getElementById(elemId).innerHTML = hintMsg
}

function validateSignUpInputCredentials(){
    username = document.getElementById("name").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    confirmPassword = document.getElementById("confirm_password").value;
    var nameErr = emailErr = passwordErr = confirmPasswordErr = true;




    if(username == ""){
        printError("nameErr","please enter your name");
    } else {
        var regex = /^[A-Za-z ]+$/;
        if(regex.test(username) === false){
            printError("nameErr", "please enter a valid name");            
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    if(email == ""){
        printError("emailErr","please enter your mail");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email === false)){
            printError("emailErr", "Please Enter a valid mail");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    if(password == ""){
        printError("passwordErr","please enter your password");
    } else {
        printError("passwordErr", "");
        passwordErr = false;
    }

    if(confirmPassword == ""){
        printError("confirmPasswordErr","please enter your password");
    } else {
        printError("confirmPasswordErr", "");
        confirmPasswordErr = false;
    }

    if((nameErr || emailErr || passwordErr || confirmPasswordErr) == true){
        return false;
    } else {
        return true;
    }
}

function validateLoginInputCredentials(){
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    var emailErr = passwordErr = true;

    if(email == ""){
        printError("emailErr","please enter your mail");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email === false)){
            printError("emailErr", "Please Enter a valid mail");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    if(password == ""){
        printError("passwordErr","please enter your password");
    } else {
        printError("passwordErr", "");
        passwordErr = false;
    }

    if(( emailErr || passwordErr) == true){
        return false;
    } else {
        return true;
    }
}