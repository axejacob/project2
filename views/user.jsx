const React = require("react");
const DefaultLayout = require('./layouts/default');


class User extends React.Component {
  render() {

    let user = this.props.user;
    let headerTitle = `PlayJay | ${user.name}`;

    return (

      <DefaultLayout title={headerTitle} user={user}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>Profile Page</h2>
        <p>Name: {user.name}</p>




      </DefaultLayout>
    );

  }
}

module.exports = User;
