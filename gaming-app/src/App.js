import React from 'react';
import './App.css';
import Login from "./components/Login"


class App extends React.Component {

  constructor(props){
    super (props) //Hey react component take in props and if someone gives you props do the normal thing you do with props
    this.state = {
      username : "",
      userID : null,
      token : "",
    }
  }

  setUser = (User) => {
    console.log(User)
    this.setState({
      username : User.username,
      userID : User.id,
      token : User.token,
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

      //Make a prop called setuser and set it equal to the method on this object called set user
      // <Login
      //   setUser = {this.setUser}
      //   UserToken = {this.state.token}
      //   />

    );
  }
}

export default App;
