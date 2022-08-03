// handles user signing up for the first time
const createWeddingFormHandler = async (event) => {
  event.preventDefault()
  console.log("WTF")
    //select users input
    const partner1 = document.querySelector("#partner1-name").value.trim()
    const partner2 = document.querySelector("#partner2-name").value.trim()

    const name = document.querySelector("#wedding-name").value.trim()
    console.log(partner1, partner2, name)
  
    if (partner1 && partner2 && name) {
      const response = await fetch("/api/create-wedding", {
        method: "POST",
        body: JSON.stringify({ partner1, partner2, name}),
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
    .querySelector(".create-wedding")
    .addEventListener("submit", createWeddingFormHandler)
    
  