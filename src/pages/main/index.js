import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Main extends Component {
    state = {
        bands: []
    };

    componentDidMount() {
        this.loadBands();
    }

    loadBands = async () => {
        const response = await api.get('/bands');

        this.setState({ bands: response.data })
        
    }


    render() {
        return (
            <div className='bands-list'>
                <form>
                <input
                    type='text'
                    placeholder='Write the bands name:'
                    onChange={this.handleTextChange} 
                    />
                </form>
                <a onClick={this.handleSubmit}>Search</a>
          
                {this.state.bands.map(band => (
                    <article key={band.id}>
                        <div className='band-image'>
                            <img src={band.image} />  
                            </div>  
                        <strong>{band.name}</strong>   
                        <Link to={`/bands/${band.id}`}>Read more</Link>
                    </article>
                ))}
            </div>
        )
}
}
