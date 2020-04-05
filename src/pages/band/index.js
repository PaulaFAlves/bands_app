import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';
import { Link } from 'react-router-dom';

export default class Band extends Component {
    state = {
        band: {},
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        console.log(id);

        const response = await api.get(`/bands/${id}`);

        this.setState({ band: response.data })
    }

    render() {
        const { band } = this.state;
        console.log(band)

        return (
            <div className="band-info">
                <h1>{band.name}</h1>
                <p>{band.biography}</p>
            
                <p>{band.albums}</p>
                <div className="back">
                    <Link to={'/'}>Back</Link>
                </div>
                
            </div>
        )
    }
}