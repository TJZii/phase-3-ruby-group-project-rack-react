import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class CategoryLink extends Component {
    render() {
    return (
        <div className="rowC">
            <Link to={`genres/${this.props.genre.id}`}>
                <figure>
                    <img src={this.props.genre.imageSrc} alt={this.props.genre.name} className='Icon' width="250" height="250"/>
                    <figcaption>
                        <h3>{this.props.genre.name}</h3>
                    </figcaption>
                </figure>
                <br/>
            </Link>
        </div>
    )}
}
export default CategoryLink;