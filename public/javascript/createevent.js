// handles user signing up for the first time
const createEventFormHandler = async (event) => {
  event.preventDefault();
  //select users input
  const name = document.querySelector("#event-name").value.trim();
  const date = document.querySelector("#event-date").value.trim();
  const time = document.querySelector("#event-time").value.trim();
  const venue = document.querySelector("#location-name").value.trim();
  const address = document.querySelector("#location-address").value.trim();
  const dress_code = document.querySelector("#dress-code").value.trim();


  if (name && date && time && venue && address && dress_code) {

    const response = await fetch("/api/create-event", {
      method: "POST",
      body: JSON.stringify({ name, date, time, venue, address, dress_code }),

      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create event.");
    };
  };
};

document
  .querySelector(".justdoit")
  .addEventListener("submit", createEventFormHandler);