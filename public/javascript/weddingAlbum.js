const imageform = document.querySelector('#imageForm')
const imageInput = document.querySelector('#imageInput')
console.log('image form')
imageform.addEventListener("submit", async event =>{
    event.preventDefault()
    console.log(imageInput.files)
    const file = imageInput.files[0]
 
    

    //get secure url from our server

    const { url } = await fetch("/s3Url").then(res => res.json())
    console.log(url)
  

    //post the image directly to s3 bucket

    await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data"
        },
        body: file
      })
    
      const imageUrl = url.split('?')[0]
      console.log(imageUrl)

    // post request to my server to serve any extra data

    const img = document.createElement("img")
    img.src = imageUrl
    document.body.appendChild(img)
  })
