function checkPassword() {
    let password = document.getElementById("password").value;
    let cnfrmPassword = document.getElementById("cnfrm-password").value;
    console.log(password, cnfrmPassword);
    let message = document.querySelector("#message");
  
    if (password.length != 0) {
      if (password == cnfrmPassword) {
        message.textContent = "Passwords match";
        message.style.backgroundColor = "green";
        message.style.borderRadius = "10px";
        let location = "/index2.html";
  
        window.location.assign(location);
        
      } else if (cnfrmPassword == "") {
        message.textContent = "confirm Password cant be empty";
        message.style.backgroundColor = "yellow";
      }
  
      // else if(cnfrmPassword==""){
      //   message.textContent = "Password1 cant be empty";
      //   message.style.backgroundColor ="brown"
      // }
      else {
        message.textContent = "Password don't match";
  
        message.style.backgroundColor = "red";
        message.style.borderRadius = "10px";
      }
    } else {
      //   alert('password cant be empty')
      //   message.textContent = ""
  
      message.textContent = "password cant be empty";
  
      message.style.backgroundColor = "blue";
      message.style.borderRadius = "10px";
    }
  }
  