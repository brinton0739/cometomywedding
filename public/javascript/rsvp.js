//handles inputing RSVP code on RSVP page
const rsvp = async () => {
    const code = document.getElementById('code-input').value;
    if (code == '') {
        return;
    };
    try {
        const response = await fetch(
            `/api/rsvp/${code}`,
            {
                method: "POST",
            });
        if (response.ok) {
            document.location.replace(`/wedding/${await response.json()}`);
        } else {
            alert('Code is invalid or no longer exists.');
        };
    } catch (error) {
        alert('Error contacting server.');
        document.location.replace("/dashboard/RSVP");
    };
};

document.getElementById('submitRSVP').addEventListener("click", rsvp)