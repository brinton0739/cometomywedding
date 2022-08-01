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
  let photoHTML = `<div class= "group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
    <img src="${imageUrl}" alt="" class="object-cover pointer-events-none group-hover:opacity-75">
    <button type="button" class="absolute inset-0 focus:outline-none">
    </button>
  </div>`

    // let liIMG = document.createElement("li")
    // liIMG.innerHTML = photoHTML
    // const photoSection = document.querySelector('#photo-section')
    // photoSection.appendChild(liIMG)

    const img = document.createElement("img")
    img.src = imageUrl
    document.body.appendChild(img)


  })
