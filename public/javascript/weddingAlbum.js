const imageform = document.querySelector('#imageForm');
const imageInput = document.querySelector('#imageInput');
const wedding_id = imageform.dataset.wedding_id;

imageform.addEventListener("submit", async event => {
  event.preventDefault();
  const file = imageInput.files[0];
  //get secure url from our server
  const { url } = await fetch("/s3Url").then(res => res.json());
  //post the image directly to s3 bucket
  await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    body: file
  });

  const image_url = url.split('?')[0];

  if (image_url) {
    const response = await fetch("/api/create-photo", {
      method: "POST",
      body: JSON.stringify({
        image_url: image_url,
        wedding_id: wedding_id
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log('successful post');
      document.location.reload("");
    } else {
      alert("Failed to post photo.");
      console.log(response);
    };
  };

  let photoHTML = `
  <div class= "relative aspect-square w-64 rounded-md p-2">
  <img src= "${image_url}" class="object-cover rounded-md">
    </div>  `;

  const li = document.createElement("div");
  li.innerHTML = photoHTML;
  document.body.appendChild(li);
});
