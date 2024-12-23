function register(userFirstName, userLastName, userEmail, userPassword, confirmPassword) {
    if(userPassword.value === confirmPassword.value) {
        let date = new Date();
        alert("You joined succesfully at " + date);
        localStorage.joiedTime = date;
    } else {
        alert("Password isn't confirmed or is incorrect!");
        return;
    }

    localStorage.userFirstName = userFirstName.value;
    localStorage.userLastName = userLastName.value;
    localStorage.userEmail = userEmail.value;
    localStorage.userPassword = userPassword.value;
    localStorage.confirmPassword = confirmPassword.value;
    
    alert("You joint with email " + userEmail.value + "\n" + "Try to Log In and have a good time!"); 
}