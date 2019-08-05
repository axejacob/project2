const React = require("react");
const DefaultLayout = require('./layouts/default');
const TweetBlock = require('./components/userBlock');


class Home extends React.Component {
  render() {

    let headerTitle = 'PlayJay | Home';
    let user = this.props.user;


    return (

      <DefaultLayout title={headerTitle} user={user}>
        <br/>
        <br/>
        <br/>
        <h4> Hello {user.name}! </h4>

        <br/>
        <p>Welcome to the Library.
        <br/>This is an archive of all the songs that the group has performed.
        <br/>Please feel free to browse!</p>

      </DefaultLayout>
    );

  }
}

module.exports = Home;
