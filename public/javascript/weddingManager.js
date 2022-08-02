// get all the buttons
const deleteButtons = document.querySelectorAll('.delete');
const editButtons = document.querySelectorAll('.edit');
const saveButtons = document.querySelectorAll('.save');
// get all the text fields
const events = [...document.querySelectorAll('.event')];
const eventNames = [...document.querySelectorAll('.event-name')];
const eventVenues = [...document.querySelectorAll('.event-venue')];
const eventAddresses = [...document.querySelectorAll('.event-address')];
const eventDressCodes = [...document.querySelectorAll('.event-dress_code')];
const eventDates = [...document.querySelectorAll('.event-date')];
const eventTimes = [...document.querySelectorAll('.event-time')];

async function deleteEvent(e) {
    const response = await fetch(
        `/api/event/delete/${e.target.dataset.event}`, 
            {
                method: "DELETE",
            });
        if (response.ok) {
            document.querySelector(`#event-${e.target.dataset.event}`).remove();
        } else {
            alert("Failed to delete event.");
        };
};

async function editEvent(e) {
    // map all the names of the events on page so we can use this array to get the index
    const datasets = eventNames.map(name => {
        return name.id;
    });
    // get the index of the event of event
    const index = datasets.indexOf(`name-${e.target.dataset.event}`);
    // make all the event details editable
    eventNames[index].removeAttribute('readonly');
    eventVenues[index].removeAttribute('readonly');
    eventAddresses[index].removeAttribute('readonly');
    eventDressCodes[index].removeAttribute('readonly');
    eventDates[index].removeAttribute('readonly');
    eventTimes[index].removeAttribute('readonly');
    // swap the edit and save buttons
    editButtons[index].setAttribute('hidden', '')
    saveButtons[index].removeAttribute('hidden');
};

async function saveEvent(e) {
    // map all the names of the events on page so we can use this array to get the index
    const datasets = eventNames.map(name => {
        return name.id;
    });
    // get the index of the event of event
    const index = datasets.indexOf(`name-${e.target.dataset.event}`);
    // make all the event details readonly
    eventNames[index].setAttribute('readonly', '');
    eventVenues[index].setAttribute('readonly', '');
    eventAddresses[index].setAttribute('readonly', '');
    eventDressCodes[index].setAttribute('readonly', '');
    eventDates[index].setAttribute('readonly', '');
    eventTimes[index].setAttribute('readonly', '');
    saveButtons[index].setAttribute('hidden', '')
    editButtons[index].removeAttribute('hidden');
    // create the edited text object
    const body = {
        "name": eventNames[index].value,
        "venue": eventVenues[index].value,
        "address": eventAddresses[index].value,
        "date": eventDates[index].value,
        "time": eventTimes[index].value,
        "dress_code": eventDressCodes[index].value
    };
    // send the edited text to the API
    const response = await fetch(
        `/api/event/update/${e.target.dataset.event}`, 
            {
                method: "UPDATE",
                headers: { "Content-Type": "application/json" },
                body: body
            });
        if (response.ok) {
            alert("Event updated!");
        } else {
            alert("Failed to update event.");
        };
};

// add event listeners to buttons
for(let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", deleteEvent);
    editButtons[i].addEventListener("click", editEvent);
    saveButtons[i].addEventListener("click", saveEvent);
};