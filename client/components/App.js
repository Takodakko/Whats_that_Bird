import React, { Component } from 'react';
import Form from './Form';

class App extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return ( 
          <div>
            <strong>What bird did you see?</strong>
            <Form userName="" date="" birdColor="" location="" otherDescription=""/>
          </div>
          
        )}

}

export default App;