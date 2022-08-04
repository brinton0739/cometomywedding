const rsvp = async () => {

    const code = document.getElementById('code-input').value;
    if (code == '') {
        return;
    }
    try {
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
    } catch (error) {
        alert('unexpected issue, try again later');
        document.location.replace("/dashboard/RSVP")
    }
}

document.querySelector(".rsvp").addEventListener("click", rsvp)