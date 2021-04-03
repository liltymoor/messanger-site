function visibility() {
  var visibility = document.getElementById('visibility');
  var password = document.getElementById('password');
  if (password.type === "password") {
    password.type = "text";
    visibility.style.color = "#9ec295";
  } else {
    password.type = "password";
    visibility.style.color = "#bfbfbf";
  }
}
