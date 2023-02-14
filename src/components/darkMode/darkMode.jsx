// import React, { useState } from 'react';
// import './darkMode.css';

// export default function DarkMode({ darkmode }) {
//   const [darkMode, setDarkMode] = useState(darkmode); // props.darkMode

//   function change() {
//     document.body.classList.toggle('lightMode');
//     if (darkMode) {
//       setDarkMode(false);
//     } else {
//       setDarkMode(true);
//     }
//     console.log(darkMode);
//   }

//   if (darkMode) {
//     return (
//       <button type="button" className="darkModeButton">
//         <img onClick={change} src="./images/icon-sun.svg" alt="icon-sun" />

//       </button>

//     );
//   }
//   return (
//     <button type="button" className="darkModeButton">
//       <img onClick={change} src="./images/icon-moon.svg" alt="icon-moon" />

//     </button>

//   );
// }
