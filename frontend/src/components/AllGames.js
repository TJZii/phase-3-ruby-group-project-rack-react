import React, {Component} from 'react';
import SearchBar from './SearchBar';
import ListOfGames from './ListOfGames';

class AllGames extends Component {

    constructor() {
        super()
        this.state = {
            theseGames: [],
            searchTerm: '',
            renderTrigger: ''
        }
    }

    handleSearchChange = (event) => {
        this.setState({searchTerm: event.target.value})
        // console.log(`${this.state.searchTerm}`);
    }

    deleteGame = (deleter) => {
        
        fetch(`http://localhost:9292/games/${deleter.target.value}`, {
         method: 'DELETE',
         headers: {
            'Content-type': 'application/json'
         }
        })
        // .then(console.log(this.state))
        .then(this.updateSearch(deleter.target.value))
        .catch(error => console.log(error))
    }

    updateSearch = (deleteId) => {
        console.log(deleteId)
        let updatedGames = this.state.theseGames.filter(game => `${game.id}` !== deleteId)
        this.setState({...this.state, theseGames: updatedGames})
        console.log(this.state.theseGames)
    }

    render() {

        const desiredGame = this.state.theseGames.filter(p =>
            p.name.includes(this.state.searchTerm) 
        )

        return (
            <div>
                <h1>Search for a game by name</h1>
                <br/>
                <SearchBar onChange={this.handleSearchChange}/>
                <br/>
                <ListOfGames games={desiredGame} theseGames={this.state.theseGames} deleteGame={this.deleteGame}/>
            </div>
        )
    }

    componentDidMount() {
        fetch('http://localhost:9292/games')
          .then(resp => resp.json())
          .catch(eventZ => console.error(eventZ))
          .then((gameBase) => {
              console.log(gameBase)
              this.setState({
                  theseGames: gameBase
              })
              console.log(this.state.theseGames)
            })
          
    }

}

export default AllGames