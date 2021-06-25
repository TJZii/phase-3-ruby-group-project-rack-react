import React, { Component} from 'react';

class Game extends Component{

    render() {
    return (
        <div>
            <a href={`https://www.google.com/search?q=${this.props.game.name}`}><h2>{this.props.game.name}</h2></a>
            <button onClick={() => {this.props.deleteThisGame(this.props.game.id)}}>Delete</button>
        </div>
    )}
}

export default Game; 