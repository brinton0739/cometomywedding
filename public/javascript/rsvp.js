// const Wedding = require("../../models/Wedding")

const rsvp = async () => {
    
    const code = document.getElementById('code-input').value;
    if (code == '') {
      alert('input invite code value please');
      return;
    }
    console.log('rsvp view click ===', document.getElementById('code-input').value);

    try {
      fetch(`/api/rsvp/${code}`).then(response => response.json()).then(data => {
        console.log('rsvp code res ===', data);
        if (data && data.code) {
          const id = data.id;
          document.location.replace(`/wedding/${id}`);
        } else {
          alert("no matching wedding data with you code");
        }
      })
    } catch (error) {
      console.log('get wedding data by code error', error);
      alert('unexpected issue, try again later');
      document.location.replace("/dashboard/RSVP")
    }
  }
  
  document.querySelector(".rsvp").addEventListener("click", rsvp)