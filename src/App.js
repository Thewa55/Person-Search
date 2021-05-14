import React, { Component } from 'react'
import  { CardList } from './components/card-list/card-list'
import './App.css';

class App extends Component{

  constructor(){
    super();
    
    this.state={
      users: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(users => {
      this.setState({users: users})
      console.log('Users', users)
    })
  }

  render(){
    return(
    <div className="App">
      <input 
        type='search' 
        placeholder='search person' 
        onChange={e => this.setState({searchField: e.target.value})}>
      </input>
      <CardList users={this.state.users}/>
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
