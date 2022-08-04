// handles user signing up for the first time
//select users input
const first_name = document.querySelector("#first-signup").value.trim();
const last_name = document.querySelector("#last-signup").value.trim();
const email = document.querySelector("#email-signup").value.trim();
// makes sure password and confirmation work
function checkPasswords() {
  const password = document.querySelector("#password-signup1").value.trim();
  const confirms = document.querySelector("#password-signup2").value.trim();
  const warning = document.getElementById('warning');
  warning.style.color = 'red';
  if (confirms === password) {
    warning.textContent = '';
  } else {
    warning.textContent = 'Passwords must match.';
  };
};

const signupFormHandler = async (event) => {
  event.preventDefault();
  // do nothing if password and confirmation password don't match
  const password = document.querySelector("#password-signup1").value.trim();
  const confirms = document.querySelector("#password-signup2").value.trim();
  if (!(confirms === password)) return;
  if (first_name && last_name && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ first_name, last_name, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    };
  };
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);