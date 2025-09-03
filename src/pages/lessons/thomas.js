// Lessons Event Clavier
const inputTextElement = document.getElementById('input-text');
const renderKeyElement = document.getElementById('renderKey');
// console.log(inputTextElement);
inputTextElement.addEventListener('keyup', (eventDuclavier) => {
    // console.log(eventDuclavier);
    console.log('eventDuclavier.key', eventDuclavier.key);
    renderKeyElement.textContent += eventDuclavier.key;
});

//========================================================================================
// Lessons Event Souris
const containerElement = document.getElementById('container');
const renderMouseElement = document.getElementById('renderMouse');

console.log(containerElement);

// Écouter le clic de souris
containerElement.addEventListener('click', (eventSouris) => {
    console.log('Event type:', eventSouris.type);
    console.log('Coordonnées:', eventSouris.clientX, eventSouris.clientY);
    renderMouseElement.textContent += `Clic à (${eventSouris.clientX}, ${eventSouris.clientY}) | `;
});