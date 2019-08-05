const React = require("react");
const FrontLayout = require('./layouts/frontpage');


class Welcome extends React.Component {
  render() {

    let headerTitle = 'PlayJay | Welcome! ';
    let user = this.props.user;

    return (

      <FrontLayout title={headerTitle}>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

        <h1> Welcome to PlayJay, {user.name}!</h1>
        <br/>
        <a href="./home">Home</a>
        <div className="home">
            <h1 className="header-text"></h1>
            <div className="home-artists">
                <a href="./library"className="home-p">Library </a>
            </div>
            <div className="home-songs">
                    <a href="./suggestions"className="home-p">Suggestions</a>
            </div>
            
        </div>

      </FrontLayout>
    );

  }
}

module.exports = Welcome;
