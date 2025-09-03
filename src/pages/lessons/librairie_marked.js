import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js';
import DOMPurify from 'https://cdn.jsdelivr.net/npm/dompurify@3.0.6/dist/purify.es.js';



// Lessons Event Clavier
const inputTextElement = document.getElementById('input-text');
const renderKeyElement = document.getElementById('renderKey');
// console.log(inputTextElement);
inputTextElement.addEventListener('keyup', (eventDuclavier) => {
    // console.log(eventDuclavier);
    // console.log('eventDuclavier.key', eventDuclavier.key);
    renderKeyElement.innerHTML = DOMPurify.sanitize(marked.parse(inputTextElement.value));
    // renderKeyElement.textContent += eventDuclavier.key;
});