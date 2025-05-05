document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    
    const myButton = document.getElementById('myButton');
    if (myButton) {
        myButton.addEventListener('click', () => {
            const dataToSave = {
                name: document.getElementById('nameInput')?.value || '',
                email: document.getElementById('emailInput')?.value || '',
            };

            // Save data to localStorage
            localStorage.setItem('filledSheetData', JSON.stringify(dataToSave));
            alert('Data saved!');
        });
    }
});
