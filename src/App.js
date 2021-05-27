import React, { Component } from 'react'
import './App.css';
import  { CardList } from './components/card-list/card-list'
import { SearchBox} from './components/search-box/search-box'
import { Modal } from './components/modal/modal'

class App extends Component{

  constructor(){
    super();
    
    this.state={
      users: [],
      searchField: '',
      show: false
    }
  }

  componentDidMount(){
    fetch('https://randomuser.me/api/?nat=us&results=12')
    .then(res => res.json())
    .then(users => {
      users.results.forEach(user => {
        user.address = user.location.street.number + ' ' + user.location.street.name
      })
      this.setState({users: users.results})
    })
  }


  // componentDidUpdate(prevProps, prevState){
  //   if(prevState.users.length < 1){
  //     fetch('https://randomuser.me/api/?nat=us&results=12')
  //     .then(res => res.json())
  //     .then(users => {
  //       this.setState({users: users.results})
  //     })
  //   }
  // }

  //arrow function binds it to the class without binding 'this' in the constructor
  handleChange = (e) => {
    this.debouncedSearch(e.target.value)
  }

  debounce = (callback, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => callback(...args), delay)
    }
  }

  debouncedSearch = this.debounce(search => this.setState({searchField: search}), 500)

  showModal = e => {
    this.setState({show: !this.state.show})
  }

  createPerson = (person) => {
    console.log(person)
    this.setState({
      users: [...this.state.users, person]
    })
  }

  render(){

    const { users, searchField } = this.state;
    console.log(this.state.users)
    const filteredUser = users ? users.filter(user => user.name.first.toLowerCase().includes(searchField.toLowerCase())) : []

    return(
    <div className="App">
      <div className='Nav'>
      <h1>Person Search</h1>
        <SearchBox placeholder='Search Person' handleChange={this.handleChange}/>
        {this.state.show ? (<></>):(<button onClick={e => {this.showModal()}}>Show Modal</button>)}
      </div>
      <Modal createPerson={this.createPerson} onClose={this.showModal} show={this.state.show}/>
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
