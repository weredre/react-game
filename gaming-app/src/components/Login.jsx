import React from 'react';
import Form from 'react-bootstrap/Form'
// import {login} from '../services/index';

class Login extends React.Component {

constructor(props){
    super (props) //Hey react component take in props and if someone gives you props do the normal thing you do with props
    this.state = {
    Username : "jro",
    email: "",
    Password: "1234",
    Token : "",
    }
}

changeHandler = (e) => {
    console.log(e.target)
    console.log(e.target.name)
    console.log(e.target.type)
    console.log(e.target.value)
    this.setState({
        [e.target.name]:e.target.value
    })
}

render() {
    return(<Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" value={this.state.email}
          placeholder="Enter email" onChange={this.changeHandler} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

      </Form>)
    }
}

// a method to define the login and also run it
//
// loginHandler = async () => {
//     const user = {
//         username : this.state.Username,
//         password : this.state.Password,
//     }
//     const resp = await login(user) //this is saying wait for it to come back to the info
//     this.props.setUser(resp)
    //Props is coming from the parent in App.Js so we're saying run that function that was passed in props
    //and giving the response
    //and the response is basically signing the user in
// }





    //
    // render (){
    // return (
    //     <button onClick = {this.loginHandler}>Log In</button>
    //     //This is the button to login
    // );
    // }
// }

export default Login;
