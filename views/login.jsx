const React = require('react');
const FrontLayout = require('./layouts/frontpage');

class Login extends React.Component {
  render() {

    let headerTitle = "PlayJay | Login";

    let loginURL = `/home`;
    let registerURL = `/register`;
    let name = ' Name';
    let password = ' Password';

    return (

      <FrontLayout title={headerTitle}>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>Login</h1>
        <br/>
        <form method="POST" action={loginURL}>

            <input type={"text"} placeholder={name} name={"name"} required/>
            <br/>
            <br/>
            <input type={"text"} placeholder={password} name={"password"} required/>
            <br/>
            <br/>
            <input type="submit" value="  Login  "/>
        </form>
        <br/>

        <form action={registerURL}>
            <button type={"submit"}>Sign up</button>
        </form>

      </FrontLayout>
    );
  }
}

module.exports = Login;
