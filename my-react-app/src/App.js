import logo from './logo.svg';
import './App.css';

import React from 'react';

import MyHeader from './components/Header.js';
import MyContent from './components/Content.js';
import MyFooter from './components/Footer.js';

const theApp = () =>{
  return (
    <div className="App">
      <MyHeader />
      <MyContent />
      <MyFooter />
    </div>
  )
}

export default theApp;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


