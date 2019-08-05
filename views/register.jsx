const React = require('react');
const FrontLayout = require('./layouts/frontpage');

class Register extends React.Component {
  render() {

    let headerTitle = 'PlayJay | Create Account';
    let registerURL = `/register`;
    let loginURL = `/login`;
    let name = ' Name';
    let password = ' Password'

    return (

      <FrontLayout title={headerTitle}>
        <br/>
        <br/>
        <br/>
        <h1>Create Account!</h1>
        <br/>
        <form method="POST" action={registerURL}>

            <input type={"text"} placeholder={name} name={"name"} required/>
            <br/>
            <br/>
            <input type={"text"} placeholder={password} name={"password"} required/>
            <br/>
            <br/>
            <input type="submit" value="Sign up"/>
        </form>
        <br/>
        <br/>
        <br/>
        <p>Login if you have an account</p>
        <form action={loginURL}>
            <button type={"submit"}>Login</button>
        </form>

      </FrontLayout>
    );
  }
}

module.exports = Register;
