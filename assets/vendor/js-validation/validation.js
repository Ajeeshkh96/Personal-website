function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var password = document.forms["myForm"]["password"].value;
  var confirm_password = document.forms["myForm"]["confirm_password"].value;

  if (name == "") {
    alert("Name must be filled out");
    return false;
  }

  if (email == "") {
    alert("Email must be filled out");
    return false;
  }

  if (password == "") {
    alert("Password must be filled out");
    return false;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters long");
    return false;
  }

  if (confirm_password == "") {
    alert("Confirm password must be filled out");
    return false;
  }

  if (password != confirm_password) {
    alert("Passwords do not match");
    return false;
  }

  return true;
}