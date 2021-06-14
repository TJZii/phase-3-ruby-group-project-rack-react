import React, { Component } from 'react';
import CategoryLink from '../components/CategoryLinks';


class GenreForm extends Component{

    state = {
        name: '',
        imageSrc: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.newCategory(this.state)
    }

    render() {
        if (this.props.genreFormFlag){
            return (
                <div>
                    <ul>
                        {this.genresList = this.props.genresList.map(g => <CategoryLink key={g.id} deleteGenre={this.deleteGenre} genre={g}/>)}
                    </ul>
                    <form onSubmit={this.handleSubmit}>
                        <label>Name</label>
                        <br/>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                        <br/>
                        <br/>
                        <label>Image Source</label>
                        <br/>
                        <input type="text" name="imageSrc" value={this.state.imageSrc} onChange={this.handleChange}/>
                        <br/>
                        <input type="submit" />

                    </form>
                </div>
            )}
        else {
            return (
                <div>
                    <ul>
                        {this.genresList = this.props.genresList.map(g => <CategoryLink key={g.id} deleteGenre={this.deleteGenre} genre={g}/>)}
                    </ul>
                    <button onClick={this.props.toggleGenreFormFlag}>New Genre</button>
                </div>
            )
        }
    }
}

export default GenreForm;