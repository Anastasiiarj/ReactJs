import React, { Component } from 'react';
import {climate} from './info';
import './appStyle.css';

class ClimateChange extends Component {
    render(){
        return (
            <div className="climateChange">
                <ul>
                    <li>{this.props.text}</li>
                </ul>
            </div>
        )
    }
}
class About extends Component {
    render () {
        return (
          <div>
              <h2>Climate change</h2>
              <div className="diagram">
                  <img src="https://s-media-cache-ak0.pinimg.com/736x/43/ef/39/43ef3929445ed3f8d4ceeac681dccac7.jpg" alt="" />
              </div>
              <div className="asideRight">
                  <h2>Causes of сlimate сhange</h2>
                  {climate.map(function(elem){
                          return <ClimateChange
                              key={elem.id}
                              text={elem.text}
                          />
                      }
                  )
                  }
              </div>
          </div>
        )
    }
}

export default About;