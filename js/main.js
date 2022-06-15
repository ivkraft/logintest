const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const pass = document.getElementById("pass");

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
function eraseCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

function  sendJSON_Register() {
  var data = {
    first_name: fname.value,
    last_name: lname.value,
    email: email.value,
    password: pass.value,
  };

  fetch("https://localhost:4001/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.token);
      console.log(data._id);
      setCookie("token", data.token, 1);
      window.location.href = "https://localhost:4001/welcome";
    });
    
   
}

function sendJSON_Login() {
  var data = {
    email: email.value,
    password: pass.value,
  };

  fetch("https://localhost:4001/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      setCookie("token", data.token, 1);
      console.log(data._id);
      window.location.href = "https://localhost:4001/welcome";
    });
}
