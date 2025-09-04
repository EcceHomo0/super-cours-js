import collection from 'easter-egg-collection'
import {renderTimeLine} from './pages/services/timelineService.js';
import {contactApi} from './pages/services/welcomeService.js';

console.log('Hello World from main.js')
console.log(import.meta.env.VITE_SOME_KEY) // "123"
console.log(import.meta.env.VITE_DB_PASSWORD) // undefined

document.addEventListener('DOMContentLoaded', () => {
    renderTimeLine('#timeline');
  });

// renderTimeLine();
// contactApi();
//* On est dans /src/main.js

// ! ⬇ Ancienne version de base (counter) 
// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

// let dynamisation1 = document.getElementsByClassName('btn btn-ghost text-lg sm:text-xl');
// let siteName = "Nouveau site";
// dynamisation1[0].innerText = siteName;

// let dynamisation2 = document.getElementsByClassName('text-xs sm:text-sm');
// let newDate = new Date().getFullYear();
// dynamisation2[1].innerText = `Copyright © ${newDate} - Tous droits réservés par ${siteName}`;