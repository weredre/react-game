import React from 'react';
import {login} from '../services/index';

class Login extends React.Component {

constructor(props){
    super (props) //Hey react component take in props and if someone gives you props do the normal thing you do with props
    this.state = {
    Username : "jro",
    Password: "1234",
    Token : "", 
    }
}
// a method to define the login and also run it 
// 
loginHandler = async () => {
    const user = { 
        username : this.state.Username,
        password : this.state.Password,
    }
    const resp = await login(user) //this is saying wait for it to come back to the info
    this.props.setUser(resp) 
    //Props is coming from the parent in App.Js so we're saying run that function that was passed in props 
    //and giving the response 
    //and the response is basically signing the user in 
}






    render (){
    return (
        <button onClick = {this.loginHandler}>Log In</button>
        //This is the button to login
    );
    }
}

export default Login;