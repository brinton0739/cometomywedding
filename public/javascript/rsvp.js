const rsvpCodeText = document.getElementById('code-input');
const submitButton = document.getElementById('submitRSVP');

async function submitRSVP() {
    const code = rsvpCodeText.value;
    const response = await fetch(
        `/api/rsvp/${code}`, 
            {
                method: "POST",
            });
    if (response.ok) {
        document.location.replace(`/wedding/${await response.json()}`);
    } else {
        alert("Something went wrong.");
    };

}

submitButton.addEventListener('click', submitRSVP);