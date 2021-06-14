import React, {Component} from 'react'
import GenreForm from '../components/GenreForm';

class Genres extends Component {
    state = {
        genresList: [],
        genreFormFlag: false,
        name: '',
        imageSrc: ''
    }

    fetchCategories = () => {
        fetch('http://localhost:9292/genres')
        .then(res => res.json())
        .then(info => {
            console.log(info)
            this.setState({...this.state, genresList: info})
        })
    }

    componentDidMount() {
        this.fetchCategories();
    }

    addGenre = (genreInfo) => {
        fetch('http://localhost:9292/genres', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({"name": genreInfo.name, "imageSrc": genreInfo.imageSrc})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.genreStates(data)
        })
        .catch(error => console.log(error))
    }

    genreStates = (genreInfo) => {
        this.setState({...this.state, genresList: [...this.state.genresList, genreInfo], name: '', imageSrc: ''})
        this.toggleGenreFormFlag()
    }

    deleteGenre = (genreId) => {
        fetch(`http://localhost:9292/genres/${genreId}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(this.updateState(genreId))
        .catch(error => console.log(error))
    }

    updateState = (genreId) => {
        let updatedState = this.state.genresList.filter(item => item.id !== genreId)
        this.setState({...this.state, genresList: updatedState})
    }


    toggleGenreFormFlag = () => {
        this.setState({...this.state, genreFormFlag: !this.state.genreFormFlag})
    }

    render() {
        return (
                    <div>
                        <h1>Types of games in Game Library</h1>
                        <GenreForm 
                            newCategory={this.addGenre}
                            genresList={this.state.genresList}
                            name={this.state.name}
                            imageSrc={this.state.imageSrc}
                            genreFormFlag={this.state.genreFormFlag}
                            toggleGenreFormFlag={this.toggleGenreFormFlag}
                            deleteGenre={this.deleteGenre}
                        />
                        <br/>
                    </div>
                )
    }

}

export default Genres