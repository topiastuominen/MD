document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    
    const myButton = document.getElementById('myButton');
    if (myButton) {
        myButton.addEventListener('click', () => {
            const nameInput = document.getElementById('nameInput');
            const emailInput = document.getElementById('emailInput');

            if (nameInput && emailInput) {
                const dataToSave = {
                    name: nameInput.value || '',
                    email: emailInput.value || '',
                };

                // Save data to localStorage
                localStorage.setItem('filledSheetData', JSON.stringify(dataToSave));
                alert('Data saved!');
            } else {
                alert('Required input fields are missing!');
            }
        });
    } else {
        console.warn('Button with ID "myButton" not found in the DOM.');
    }
});
