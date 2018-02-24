import React, { Component } from 'react';
import {images} from './info';
import './appStyle.css';

class Gallary extends Component {
    render(){
        return(
            <div className="gallary">
                <img src={this.props.picture} alt='' />
            </div>
        )
    }
}

class Photos extends Component {
    render () {
        return (
            <div>
                <h2>Gallary</h2>
                {images.map(function(el){
                    return <Gallary
                        key={el.id}
                        picture={el.picture}
                        />
                }
               )
             }
            </div>
        )
    }
}

export default Photos;