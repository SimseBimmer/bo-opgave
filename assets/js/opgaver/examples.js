let myExtras = [];
const myExtrasInput = document.getElementById('extraUdstyr');
const myExtrasListElement = document.getElementById('extraList');

// Tilføj event listener til input-feltet
myExtrasInput.addEventListener("change", addExtra);

function addExtra() {
    // Hent værdien fra input-feltet
    const extraValue = myExtrasInput.value.trim();
    
    // Hvis værdien ikke er tom, tilføj den til myExtras arrayet
    if (extraValue) {
        myExtras.push(extraValue);
        // Ryd input-feltet
        myExtrasInput.value = '';
        // Opdater listen
        updateExtras();
    }
}

function updateExtras() {
    // Ryd den eksisterende liste
    myExtrasListElement.innerHTML = '';
    
    // Tilføj hvert element i myExtras som en liste-item
    myExtras.forEach(extra => {
        const listItem = document.createElement('li');
        listItem.textContent = extra;
        myExtrasListElement.appendChild(listItem);
    });
}
