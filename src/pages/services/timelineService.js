import {timelineSteps} from './timelineData.js';

export function renderTimeLine(container) {

    const ul = document.querySelector(container);

    for (const step of timelineSteps) {
        
        const li = document.createElement('li');

        const div1 = document.createElement('div');
        div1.className = "timeline-middle";

        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS,'svg');
        svg.setAttribute("xmlns", svgNS);
        svg.setAttribute("viewBox", "0 0 20 20");
        svg.setAttribute("fill", "currentColor");
        svg.setAttribute("class", "h-5 w-5");

        const path  = document.createElementNS(svgNS,'path');
        path.setAttribute("fill-rule", "evenodd");
        path.setAttribute("d", "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v3H6a1 1 0 100 2h3v3a1 1 0 102 0v-3h3a1 1 0 100-2h-3V6z");
        path.setAttribute("clip-rule", "evenodd");

        const div2 = document.createElement('div');
        div2.className = `timeline-${step.side} mb-10 md:text-end`;

        const time = document.createElement('time');
        time.className = "font-mono italic";
        time.textContent = step.year;

        const divP = document.createElement("div");
        divP.className = "text-lg font-black";
        divP.textContent = step.title;

        const textNode = document.createTextNode(step.text);

        const hr = document.createElement('hr');

        svg.appendChild(path);
        div1.appendChild(svg);
        
        div2.appendChild(time);
        div2.appendChild(divP);
        div2.appendChild(textNode);

        li.appendChild(div1);
        li.appendChild(div2);
        li.appendChild(hr);
        ul.appendChild(li);
    }
}