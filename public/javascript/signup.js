// handles user signing up for the first time
const signupFormHandler = async (event) => {
    event.preventDefault()
    //select users input
    const first_name = document.querySelector("#first-signup").value.trim()
    const last_name = document.querySelector("#last-signup").value.trim()

    const email = document.querySelector("#email-signup").value.trim()
    const password = document.querySelector("#password-signup1").value.trim()
    const password2 = document.querySelector("#password-signup2").value.trim()

  
    if (first_name && last_name && email && password) {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ first_name, last_name, email, password }),
        headers: { "Content-Type": "application/json" },
      })
  
      if (response.ok) {
        document.location.replace("/")
      } else {
        alert("Failed to sign up.")
      }
    }
  }
  
  document
    .querySelector(".signup-form")
    .addEventListener("submit", signupFormHandler)
  