function informUser(userEmail, userPassword) { 
    let emailSaved = localStorage.getItem("userEmail");
    let passwordSaved = localStorage.getItem("userPassword");

    if((emailSaved == userEmail.value) && (passwordSaved == userPassword.value)) {
      alert("You are loged now start exploring our site!");
    } else {
      alert("Your password or email is wrong!");
      return;
    }
    sessionStorage.userEmail = userEmail.value; 
    sessionStorage.userPassword = userPassword.value;

    let numbers = sessionStorage.userPassword.match(/\d/g);
    let count = numbers ? numbers.length : 0;
    let wrapedPassword = "";

    for(let i = 0; i < count; i++) {
      wrapedPassword = wrapedPassword + "*";
    }

    alert("Wellcome " + sessionStorage.userEmail + "\nWith password " + wrapedPassword);
}     
