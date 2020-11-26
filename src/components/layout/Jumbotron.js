import React from "react"

class Jumbotron extends React.Component {
    render() {
        return (
            <div>
            <div className="jumbotron jumbotron-fluid" style={{background: `url(${this.props.background})`, backgroundSize: 'cover'}}>
                <div className="overlay">
                    <h1 className="display-4 ml-5 custom-font-jumbotron">{ this.props.h1 }</h1>
                    <p className="lead ml-5 custom-font-jumbotron">{ this.props.p }</p>
                </div>
            </div>
        </div>
        )
    }
}
export default Jumbotron