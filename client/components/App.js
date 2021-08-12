import React, { Component } from 'react';
import Form from './Form';
//const axios = require('axios');

const date = new Date();
const month = function(){
    const currmonth = (date.getMonth() + 1).toString();
    if (currmonth.length === 1) {
        const zero = '0';
        return zero.concat(currmonth)
    }
}
const currdate = date.getFullYear() + "-" + month() + "-" + date.getDate()
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { userName: " ", date: currdate, birdColor: " ", location: " ", otherDescription: " " };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit = function(e) {
        e.preventDefault();
        const newPost = {
            userName: this.state.userName,
            date: this.state.date,
            birdColor: this.state.birdColor,
            location: this.state.location,
            otherDescription: this.state.otherDescription
        }
        // axios.post('/newSubmission', newPost)
        console.log(newPost, 'newPost')
        fetch('/sightings', {
            method: 'POST',
            headers: {
              'Content-Type': 'Application/JSON'
            },
            body: JSON.stringify(newPost)
          })
        .then((data) => {
            //console.log(data, "data")
            //this.setState({userName: " ", date: currdate, birdColor: " ", location: " ", otherDescription: " "})
        }
            )
        };
        
    
    handleChange = function(c) {
        //console.log(c.target.id, "c.target.id")
        this.setState({[c.target.id]: c.target.value})
    };


    render() {
        console.log(this.state, "this.state")
        return ( 
          <div>
            <strong>What bird did you see?</strong>
            <Form userName=" " date={currdate} birdColor=" " location=" " otherDescription=" " handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
          </div>
          
        )}

}

export default App;