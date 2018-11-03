import React, { Component } from 'react'


class Game extends Component {

    constructor(props) {
        super(props)
        this.updateProp(props.name)
        this.carProp(props.car)
        this.state = {
            name: "",
            car: ""
        }
        // this.alertus()
        console.log("constructor",this.props)
    }

    alertus() {
        alert("test")
    }
    updateProp(e) {
        console.log(e)
    }
    carProp = (e) => {
        console.log(e)
    }
    render() {
        return (
            <div>
                <h1>Game</h1>
                <h2>This game is going to rock, click below to play</h2>
                {console.log("this is within the return thingy")}
                {this.props.magic("Enter Magic Data")}
                <h3>{this.state.name}</h3>
                <input id="coolbox" onChange={(e)=>this.setState({name:e.target.value})}></input>
            </div>

        )
    }
}

export default Game