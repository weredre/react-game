import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'

class App extends React.Component {

  constructor(props){
    super (props) //Hey react component take in props and if someone gives you props do the normal thing you do with props
    this.state = {
      Username : "",
      UserID : null,
      Token : "", 
    }
  }

  setUser = (User) => {
    this.setState({
      Username : User.Username,
      UserID : User.UserID,
      Token : User.Token, 
    })
  }
  render (){
    return (
      <>
      <Login />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      </>
    );
  }
}

export default App;
