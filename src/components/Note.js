import React from 'react';
import "./Note.css";

class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inScale: false,
            fret: 0
        }
    }

    handleClick = () => {
        this.setState({inScale: !this.state.inScale});
    }

    render() {
        this.state.inScale != this.props.inScale & this.setState({inScale: this.props.inScale})
        return (
            <div className="Note">
                <div className={this.state.inScale ? "in" : "out"}>
                    <h3>{this.props.symbol}</h3>
                    <h3>{this.props.value}</h3>
                    <h3>{this.props.abs}</h3>
                    {/* <button type="button" onClick={this.selectA}></button> */}
                </div>
            </div>
        )
    }
}

export default Note;