function verifyPassword() {
  const input = document.getElementById("password").value;
  const correctPassword = "autoposter2025";
  if (input === correctPassword) {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("members").classList.remove("hidden");
  } else {
    document.getElementById("error").style.display = "block";
  }
}
