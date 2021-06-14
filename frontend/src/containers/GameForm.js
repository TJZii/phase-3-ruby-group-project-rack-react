import React, { Component } from 'react';

class GameForm extends Component {

    state = {
        name: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addNewGame(this.state)
    }

    render() {
        return (
            <div>
                <h2>{props.game.name}</h2>
                {/* {gameEditorFlag ? <GameEditor game={games.game} toggleForm={() => setGameEditorFlag(false) } editThisGame={games.editThisGame}/> : <button onClick={() => setGameEditorFlag(true)}>Game Settings</button>} */}
                <button onChange={props.deleteThisGame(props.game.id)}>Delete</button>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <br/>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    <br/>
                    <br/>
                    <input type="submit" />

                </form>
            </div>
        )
    }
}

export default GameForm;