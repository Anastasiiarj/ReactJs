import React, { Component } from 'react';
import './appStyle.css';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            temp:'',
            list: [],
            theData: '',
            listCountry: '',
            value: []
        }
     }
    componentWillMount(){
        this.getData('https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json')
            .then(data => {
                this.setState({
                    list: data
                })
                console.log("data", this.state.list)
            })
    }
    getData(url){
        return new Promise(function(resolve, reject){
            var request = new XMLHttpRequest();
            request.open('GET', url, true);
            request.onreadystatechange  = function() {
                if (request.readyState !== 4){
                    return;
                }
                if (request.status === 200) {
                    resolve(JSON.parse(request.responseText))
                }
                else {
                    reject(new Error("Error" + request.statusText));
                }
            };
            request.send();
        });
    }
    time() {
        if(!this.state.theData){
            setInterval(() => {
                console.log(this.state.theDate);
                var theData = new Date().toLocaleString();
                this.setState({theData: theData})
            }, 1000)
        }
    }
    counrtyValue(value) {
        var arr=[];
        for (var key in this.state.list){
            console.log(key);
            arr.push(key)
        }
        console.log(arr);
        this.setState({
            value: arr
        })
    }
    render () {
        this.time();

        return (
            <div className="theData">
                <h2>The Weather is fine!</h2>
                <div className="fonPicture">
                    <img src="pictures/weather.jpg" alt="" />
                </div>
                <p className="getData">{this.state.theData}</p>
                <div className="selected">
                    <p>Choose country:</p>
                    <select value={true} onClick={this.counrtyValue.bind(this)}>
                        {this.state.value.map((number,i) =>
                            <option>{number}</option>
                        )}
                    </select>
                    <select>

                    </select>
                </div>
            </div>
        );
    }
}

export default Home;