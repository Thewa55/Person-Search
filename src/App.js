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
    fetch('https://randomuser.me/api/?nat=us&results=10')
    .then(res => res.json())
    .then(users => {
      this.setState({users: users.results})
      console.log('Users', users.results)
    })
  }


  componentDidUpdate(prevProps, prevState){
    if(prevState.users.length === 1){
      fetch('https://randomuser.me/api/?nat=us&results=10')
      .then(res => res.json())
      .then(users => {
        this.setState({users: users.results})
      })
    }
  }

  render(){
    if(!this.state.users.length)
      return null

    const { users, searchField } = this.state;
    console.log(this.state.users)
    const filteredUser = users ? users.filter(user => user.name.first.toLowerCase().includes(searchField.toLowerCase())) : []
    return(
    <div className="App">
      <input 
        type='search' 
        placeholder='search person' 
        onChange={e => this.setState({searchField: e.target.value})}>
      </input>
      <CardList users={filteredUser}/>
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
