const React = require('react');
const DefaultLayout = require('./layouts/default');

class Suggestions extends React.Component {
  render() {

    let headerTitle = "PlayJay | Suggestions";

    let suggestionsURL = `/suggestions`;
    let user = this.props.user;
    let pl = `Title of Music`;
    let pl1 = `Name of Composer`;
    let pl2 = `Why should we perform this?`;

    return (

      <DefaultLayout title={headerTitle} user={user}>
        <br/>
        <br/>
        <br/>
        <h1>Suggestion for next season's Repertoire</h1>
        <br/>
        <form method="POST" action={suggestionsURL}>
            <textarea type={"text"} name={"title"} placeholder={pl} rows={"1"} cols={"50"} required/>
            <br/>
            <textarea type={"text"} name={"composer"} placeholder={pl1} rows={"1"} cols={"50"} required/>
            <br/>
            <textarea type={"text"} name={"reason"} placeholder={pl2} rows={"10"} cols={"50"} required/>
            <input type={"hidden"} name={"id"} value={user.id}/>
            <br/>
            <br/>
            <button type="submit">Send</button>
        </form>
        <br/>


        <br/>
      </DefaultLayout>
    );
  }
}
module.exports = Suggestions;
