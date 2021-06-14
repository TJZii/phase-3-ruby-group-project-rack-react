import React, {Component} from 'react'
import GameForm from './GameForm';
import Game from '../components/Game';

class Genre extends Component {

    state = {
        games: [],
        genreImg: '',
        genreId: null,
        genreName: null,
        gameFormFlag: false,
        name: ''
    }

    fetchData = () => {
        fetch(`http://localhost:9292/genres/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(info => {
            console.log(info)
            this.setState({
                ...this.state,
                genreImg: info.imageSrc,
                genreId: info.id,
                genreName: info.name,
                games: info.games
            })
        })
    }

    addGame = (game) => {
        fetch(`http://localhost:9292/genres/${this.state.genreId}/games`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(game)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                ...this.state,
                games: [...this.state.games, data],
                name: ''
            })
        })
        this.setState({...this.state, gameFormFlag: false})
    }

    editGame = (id) => {
        fetch(`http://localhost:9292/genres/${this.state.genreId}`, {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(id)
        })
    }

    deleteGame = (gameId) => {
        fetch(`http://localhost:9292/games/${gameId}`, {
                method: "DELETE",
                headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(this.updateDeadState(gameId))
        .catch(error => console.log(error))
    }

    updateDeadState = (gamerTag) => {
        this.setState({...this.state, games: this.state.games.filter(g => g.id !== gamerTag)})
    }

    componentDidMount() {
        this.fetchData();
    }
    
    render() {
    return (
        <div>
            <h1>{this.state.genreName}</h1>
            <img src={this.state.genreImg} alt={this.state.genreName} className='Icon' width="350" height="350"/>
            <hr/>
            <br/>
            <h2>Games:</h2>
            {this.state.games.map(ga => <Game key={ga.id} game={ga} editThisGame={this.editGame} deleteThisGame={this.deleteGame}/>).sort()}
            <br/>
            {this.state.gameFormFlag ? <GameForm addNewGame={this.addGame} genre={this.state.genreName}/> : <button onClick={() => this.setState({gameFormFlag: true})}>Add Game</button>}
        </div>
    )}
    
}

// const Genre = (props) => {

//     const [genre, setGenre] = useState({
//         games: [],
//         genreImg: '',
//         genreId: null,
//         genreName: null,
//         gameFormFlag: false,
//         name: ''
//     })


//     const [gameFormToggler, setGameFormToggler] = useState(false)

//     useEffect(() => {
//         fetch(`http://localhost:9292/genres/${props.match.params.id}`)
//         .then(res => res.json())
//         .then(info => {
//             console.log(info)
//             setGenre(info)
//         })
//     }, [props.match.params.id])

//     const addGame = (game) => {
//         fetch(`http://localhost:9292/genres/${genre.id}/games`, {
//             method: "POST",
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify(game)
//         })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             setGenre({
//                 ...genre,
//                 games: [...genre.games, data]
//             })
//         })
//         setGameFormToggler(false)
//     }
    

//     const editGame = (id) => {
//         fetch(`http://localhost:9292/genres/${genre.id}`, {
//             method: "PATCH",
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify(id)
//         })
//     }

//     const deleteGame = (gameId) => {
//         fetch(`http://localhost:9292/games/${gameId}`, {
//                 method: "DELETE",
//                 headers: {
//                 'Content-type': 'application/json'
//             },
//         })
//         .then(res => res.json())
//         .then(updateDeadState(gameId))
//         .catch(error => console.log(error))
//     }

//     const updateDeadState = (gameId) => {
//         setGenre({...genre, genreId: '', games: genre.games.filter(g => g.id !== gameId)})
//     }


//     const games = genre.games.map(ga => <Game key={ga.id} game={ga} editThisGame={editGame} deleteThisGame={deleteGame}/>)

//     return (
//         <div>
//             <h1>{genre.name}</h1>
//             <img src={genre.imageSrc} alt={genre.name} className='Icon' width="350" height="350"/>
//             <hr/>
//             <br/>
//             <h2>Games:</h2>
//             {games}
//             <br/>
//             {gameFormToggler ? <GameForm addNewGame={addGame} genre={genre}/> : <button onClick={() => setGameFormToggler(true)}>Add Game</button>}
//         </div>
//     )
// }
// }
export default Genre;