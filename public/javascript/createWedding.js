// handles user signing up for the first time
const createWeddingFormHandler = async (event) => {
    event.preventDefault()
    //select users input
    const partner1 = document.querySelector("#partner1").value.trim()
    const partner2 = document.querySelector("#partner2").value.trim()

    const weddingName = document.querySelector("#wedding-name").value.trim()
    
  
    if (partner1 && partner2 && weddingName) {
      const response = await fetch("/api/createWedding-route", {
        method: "POST",
        body: JSON.stringify({ partner1, partner2, weddingName}),
        headers: { "Content-Type": "application/json" },
      })
  
      if (response.ok) {
        document.location.replace("/dashboard/create-event")
      } else {
        alert("Failed to create wedding.")
      }
    }
  }
  
  document
    .querySelector("#create-wedding")
    .addEventListener("submit", createWeddingFormHandler)
  