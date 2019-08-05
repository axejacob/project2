const React = require("react");

class Block extends React.Component {
  render() {

    let playjay = this.props.playjay;

    let playjayArr = playjay.map((playj,i)=>{
    let userURL = `/users/${playj.id}`
        return (
            <div>
                <p>
                    <form action={userURL}>
                        <button>Follow</button>
                    </form>
                    <a href={userURL}>{playj.name}</a>: {playj.detail}
                </p>
            </div>
        )
    })


    return (

        <div>
            {playjayArr}
        </div>

    );

  }
}

module.exports = Block;
