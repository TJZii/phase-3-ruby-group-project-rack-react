import React from 'react'

const ListOfGames = ({games, deleteGame}) => (
    <header>{games.map((game, index) => (
        <div key={index}>
            <a href={`https://www.google.com/search?q=${game.name}`}><h2>{game.name}</h2></a>
            <button value={game.id} onClick={deleteGame}>Delete</button>
        </div> 
))}</header>
);

export default ListOfGames;