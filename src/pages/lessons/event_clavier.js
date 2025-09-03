// Lessons Event Clavier
const inputTextElement = document.getElementById('input-text');
const renderKeyElement = document.getElementById('renderKey');
// console.log(inputTextElement);
inputTextElement.addEventListener('keyup', (eventDuclavier) => {
    // console.log(eventDuclavier);
    console.log('eventDuclavier.key', eventDuclavier.key);
    renderKeyElement.textContent += eventDuclavier.key;
});