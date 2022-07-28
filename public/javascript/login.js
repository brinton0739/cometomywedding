/** handles post request for logging in */
const loginFormHandler = async (event) => {
    event.preventDefault()
  
    const email = document.querySelector("#email-login").value.trim()
    const password = document.querySelector("#password-login").value.trim()
  
    if (email && password) {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      })
  
      if (response.ok) {
        console.log('successful login')
       
        document.location.replace("/")
      } else {
        alert("Failed to log in.")
        console.log(response)
      }
    }
  }
  
  document
    .querySelector(".login-form")
    .addEventListener("submit", loginFormHandler)
  