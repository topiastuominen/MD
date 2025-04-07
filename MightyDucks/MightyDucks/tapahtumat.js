
                  document.getElementById('submit-button').addEventListener('click', function(event) {
                    event.preventDefault(); // Prevent form submission
                    const selectedEvent = document.getElementById('goal-en').value;
                    const somethingElseInput = document.getElementById('something-else-input');

                    const answers = {
                      selectedEvent: selectedEvent,
                      somethingElse: somethingElseInput.value
                    };

                    localStorage.setItem('eventAnswers', JSON.stringify(answers));
                    alert('Your answers have been saved!');

                    // Clear the input fields
                    somethingElseInput.value = '';
                    document.getElementById('goal-en').value = '';
                  });
                
                
                
               
                 
                