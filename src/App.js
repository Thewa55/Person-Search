import React, { Component } from 'react'
import './App.css';

class App extends Component{

  constructor(){
    super();
    
    this.state={
      employees: [
        {
          name: 'David',
          id: 'eia123'
        },
        {
          name: 'Frank',
          id: 'kjy321'
        },
        {
          name: 'Mindy',
          id: 'nus932'
        },
        {
          name: 'Felicia',
          id: 'mlo438'
        }
      ]
    }
  }

  render(){
    return(
    <div className="App">
        {
          this.state.employees.map(employee => 
            <h1 key={employee.id}> {employee.name}</h1>
          )
        }
    </div>
    )
  }
}
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

export default App;
