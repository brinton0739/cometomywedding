const guestLis = document.querySelectorAll('.guest');
const deleteButtons = [...document.querySelectorAll('.delete')];

//handles deleting guest off guest list
async function deleteguest(event) {
    if (confirm('Uninvite this guest?')) {
        try {
            const dataset = deleteButtons.map(button => {
                return button.dataset.guest_id;
            });
            const index = dataset.indexOf(event.target.dataset.guest_id);
            const response = await fetch(`/api/delete-guest/`, {
                method: "DELETE",
                body: JSON.stringify({ guest_id: event.target.dataset.guest_id }),
                headers: { "Content-Type": "application/json" },
            });
            if (response.ok) {
                console.log(guestLis[index])
                guestLis[index].remove();
            } else alert('Error uninviting guest.');
        } catch (err) {
            alert('Error uninviting guest.');
        };
    }
};
deleteButtons.forEach(button => {
    button.addEventListener('click', deleteguest);
});