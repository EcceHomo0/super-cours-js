import {timelineSteps} from './timelineData.js';

export function renderTimeLine() {

    const ul = document.getElementById('timeline');

    for (const step of timelineSteps) {
        
        const li = document.querySelector('li');
        const divG = document.querySelector('.timeline-start');
        const textNode = divG.childNodes[4];
        const divP = document.querySelector(".text-lg");
        const time = document.querySelector('time');
        time.textContent = step.year;
        divP.textContent = step.title;
        textNode.textContent = step.text;
        
        
    }
}