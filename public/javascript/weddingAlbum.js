const imageform = document.querySelector('#imageForm')
const imageInput = document.querySelector('#imageInput')
const wedding_id = imageform.dataset.wedding_id;
console.log('image form')
imageform.addEventListener("submit", async event =>{
    event.preventDefault()
    console.log(imageInput.files)
    const file = imageInput.files[0]
 
    

    //get secure url from our server

    const { url } = await fetch("/s3Url").then(res => res.json())
    // console.log(url)
  

    //post the image directly to s3 bucket

    await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data"
        },
        body: file
      })
    
      const image_url = url.split('?')[0]
      console.log(image_url)

    
      
        if (image_url) {
          const response = await fetch("/api/create-photo", {
            method: "POST",
            body: JSON.stringify({
              image_url: image_url,
              wedding_id: wedding_id
            }),
            headers: { "Content-Type": "application/json" },
          })
      
          if (response.ok) {
            console.log('successful post')
           
            document.location.reload("")
          } else {
            alert("Failed to post photo.")
            console.log(response)
          }
        }
      

  let photoHTML = `
  <div class= "relative aspect-square w-64 rounded-md p-2">
  <img src= "${image_url}" class="object-cover rounded-md">
    </div>  `

    // let liIMG = document.createElement("li")
    // liIMG.innerHTML = photoHTML
    const photoSection = document.querySelector('#photo-section')
    // photoSection.appendChild(liIMG)

    const li = document.createElement("div")
   li.innerHTML = photoHTML
    // photoSection.appendChild(li)
    document.body.appendChild(li)


  })
