const addSignatureForm = document.getElementById('addSignature');
const signatureTextBox = document.getElementById('signatureText');
const submitSignature = document.getElementById('submitSignature');
const weddingReturn = document.getElementById('return');
const signButton = document.getElementById('sign');

//handles guest signing guestbook
async function addSignature() {
    const signatureValue = signatureTextBox.value;
    const weddingUrl = weddingReturn.href.split('/');
    const wedding_id = weddingUrl[weddingUrl.length - 1];
    const signatureObj = {
        signature: signatureValue,
        wedding_id: wedding_id
    };
    if (signatureValue) {

        const response = await fetch("/api/create-signature", {
            method: "POST",
            body: JSON.stringify(signatureObj),
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            document.location.replace(`/wedding/${wedding_id}/guestbook`);
        } else {
            alert("Failed to create signature.");
        };
    };
};

function clickSignButton() {
    signButton.setAttribute('class', 'hidden');
    addSignatureForm.removeAttribute('class');
};

signButton.addEventListener('click', clickSignButton);
submitSignature.addEventListener('click', addSignature);