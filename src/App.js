import React, { Component } from 'react'
import './App.css';

class App extends Component{

  constructor(){
    super();
    
    this.state={
      employees: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
      this.setState({employees: users})
      console.log(users)
    })
  }

  render(){
    return(
    <div className="App">
        {
          this.state.employees.map(employee =>
            <div key={employee.id}> 
              <h1>Name: {employee.name}</h1>
              <div>
                <h2>Address:</h2>
                <p>{employee.address.street}</p>
                <p>{employee.address.suite}</p>
                <p>{employee.address.city}, {employee.address.zipcode}</p>
              </div>
              <div>
                <h2>Company:</h2>
                <p>{employee.company.name}</p>
                <p>{employee.company.bs}</p>
                <p>{employee.company.catchPhrase}, {employee.address.zipcode}</p>
              </div>
            </div>
            
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
