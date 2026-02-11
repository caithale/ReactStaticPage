import logo from './logo.svg';
import './App.css';

import React from 'react';
import myHeader from 'components/header.js';
import myContent from 'components/content.js';
import myFooter from 'footer.js';

const theApp = () =>{
  return (
    <div className="App">
      <myHeader />
      <myContent />
      <myFooter />
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


