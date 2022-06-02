function validation() {
  var form = document.querySelector("#form");
  var email = document.querySelector("#email").value;
  var text = document.querySelector("#text");
  var pattern = /\S+@\S+\.\S+/;
  if (email.length != 0) {
    if (pattern.test(email)) {
      form.classList.add("valid");
      form.classList.remove("invalid");
      text.innerHTML = "Email address is valid";
      text.style.color = "#00ff00";
      let location = "/both.html";

      window.location.assign(location);
      
    } else {
      form.classList.remove("valid");
      form.classList.add("invalid");
      text.innerHTML = "Email address is invalid";
      text.style.color = "#ff0000";
    }
  } else {
    text.innerHTML = "Email address is empty";
    text.style.color = "#f0000f";
    text.style.fontWeight = "700";
  }
}
