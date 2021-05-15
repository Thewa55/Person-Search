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
    
    const { users, searchField} = this.state; 
    let filteredUsers = []
      if(users.length > 0 ){
        console.log(users)
        filteredUsers = users.filter(user => 
          user.name.first.toLowerCase().includes(searchField.toLowerCase())
        )
      }
      else{
        console.log('loading...')
      }
    return(
    <div className="App">
      <input 
        type='search' 
        placeholder='search person' 
        onChange={e => this.setState({searchField: e.target.value})}>
      </input>
      <CardList users={filteredUsers}/>
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
