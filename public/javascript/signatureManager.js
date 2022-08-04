const signatureLis = document.querySelectorAll('.signature');
const deleteButtons = [...document.querySelectorAll('.delete')];

async function deleteSignature(event) {
    if (confirm('Delete this signature?')) {
        try {
            const dataset = deleteButtons.map(button => {
                return button.dataset.signature_id;
            });
            const index = dataset.indexOf(event.target.dataset.signature_id);
            const response = await fetch(`/api/delete-signature/`, {
                method: "DELETE",
                body: JSON.stringify({ signature_id: event.target.dataset.signature_id }),
                headers: { "Content-Type": "application/json" },
            });
            if (response.ok) {
                console.log(signatureLis[index])
                signatureLis[index].remove();
            } else alert('Error deleting signature.');
        } catch (err) {
            alert('Error deleting signature.');
        };
    }
};
deleteButtons.forEach(button => {
    button.addEventListener('click', deleteSignature);
});