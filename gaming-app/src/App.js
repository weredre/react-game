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
      //Make a prop called setuser and set it equal to the method on this object called set user
      <Login 
        setUser = {this.setUser}
        UserToken = {this.state.token}
        />
    );
  }
}

export default App;
