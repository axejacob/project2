const React = require('react');
const DefaultLayout = require('./layout/default');

class Redirect extends React.Component {
  render()  {

    let headerTitle = "PlayJay | Redirect";

    let redirectURL = `/redirect`;

    return  (

      <DefaultLayout title={headerTitle} user= {user}>

      <h1>Suggestion sent!</h1>



    )
  }
}
module.exports = Redirect;
