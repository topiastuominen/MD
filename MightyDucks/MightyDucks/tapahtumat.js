
                  document.getElementById('submit-button').addEventListener('click', function(event) {
                    event.preventDefault(); // Prevent form submission
                    const selectedEvent = document.getElementById('goal-en').value;
                    const somethingElseInput = document.getElementById('something-else-input');

                    const answers = {
                      selectedEvent: selectedEvent,
                      somethingElse: somethingElseInput.value
                    };

                    localStorage.setItem('eventAnswers', JSON.stringify(answers));
                    alert('Kiitos ilmoittautumisesta!');

                    // Clear the input fields
                    somethingElseInput.value = '';
                    document.getElementById('goal-en').value = '';
                  });

                  document.getElementById('eventForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  // Check if terms checkbox is checked
  if (!document.getElementById('terms').checked) {
    alert('Please accept the terms and conditions.');
    return;
  }

  // Gather data
  const data = {
    preferredEvent: document.getElementById('goal-en').value,
    otherEvent: document.getElementById('something-else-input').value,
    acceptedTerms: document.getElementById('terms').checked
  };

  try {
    const response = await fetch('http://localhost:3000/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert('Your event preference has been saved!');
      // Redirect or clear form
      window.location.href = 'index.html'; // or wherever you want to go next
    } else {
      alert('Failed to save. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Could not connect to the server.');
  }
});

                
                
                
               
                 
                