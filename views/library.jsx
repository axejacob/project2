const React = require('react');
const DefaultLayout = require('./layouts/default');

class Library extends React.Component {
  render()  {
    console.log("inside library.JSX");
    console.log(this.props);
    let headerTitle = "PlayJay | Library";

    let libraryURL = `/library`;
    let user = this.props.user;

    let ph1 = `Title`;
    let ph2 = `Composer`;
    let ph3 = `Genre`;
    let ph4 = `Category`;
    let ph5 = `Performance Date`;

    // let content = "";
    let content = this.props.data.map((song)=> {
      return <tr><td>{song.title}</td>
             <td>{song.composer}</td>
             <td>{song.genre}</td>
             <td>{song.category}</td>
             <td>{song.performance_date}</td></tr>
    });
  
    return  (

      <DefaultLayout title={headerTitle} user={user}>
      <br/>
      <br/>
      <br/>

      <div>
      <h1>List of Music</h1>
      <div className="container">
        <div className="panel panel-default">
          <table className="table table-hover">
                            <thead>
                              <tr>
                                  <th>Title</th>
                                  <th>Composer</th>
                                  <th>Genre</th>
                                  <th>Category</th>
                                  <th>Performance Date</th>
                              </tr>
                          </thead>
                          <tbody>
                            {content}
                          </tbody>
                      </table>
                  </div>
              </div>
      </div>
      <br/>
      <br/>
      <br/>
      <h1>Update music library</h1>
      <br/>
      <form method="POST" action={libraryURL}>
        <textarea type={"text"} name={"title"} placeholder={ph1} rows={"1"} cols={"50"} required/>
        <br/>
        <textarea type={"text"} name={"composer"} placeholder={ph2} rows={"1"} cols={"50"} required/>
        <br/>
        <textarea type={"text"} name={"genre"} placeholder={ph3} rows={"1"} cols={"50"} required/>
        <br/>
        <textarea type={"text"} name={"category"} placeholder={ph4} rows={"1"} cols={"50"} required/>
        <br/>
        <textarea type={"text"} name={"performance_date"} placeholder={ph5} rows={"1"} cols={"50"} required/>
        <input type={"hidden"} name={"id"} value={user.id}/>
        <br/>
        <br/>
        <button type="submit">Upload</button>
      </form>
      <br/>
      <br/>
      <br/>
      </DefaultLayout>
    );
  }
}
module.exports = Library;
