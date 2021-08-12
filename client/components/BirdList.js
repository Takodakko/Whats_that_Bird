import React, { Component } from 'react';
import BirdListing from './BirdListing';
import GetButton from './GetButton';


class BirdList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            birdLists: [],
            // userName: " ",
            // date: " ",
            // birdColor: " ",
            // location: " ",
            // otherDescription: " ",
            // possibleIdent: " "
        }
        this.handleGet = this.handleGet.bind(this);
    }
    
    handleGet = function(g) {
        //console.log(g, "get click")
        fetch('/getBirds')
        .then((data) => data.json())
        .then((data) => this.setState({birdLists: data})) 
//             const newList = data.map((el) => {
// <BirdListing username={el.username} date={el.date} birdColor={el.birdcolor} location={el.location} otherdescription={el.otherDescription} possibleIdent={el.possibleident}/>
// return newList
            }     
    
    
  render() {
      console.log(this.state.birdLists, "birdLists")
    return (
      
        <div>
            <GetButton handleGet={this.handleGet}/>
            {
                this.state.birdLists.length &&
                this.state.birdLists.map((bird) => {
                  return (
                      <BirdListing 
                      key={bird._id}  
                      bird={bird}
                      />
                  )
                })
            }
            
        </div>
    
)
  }
  
}

export default BirdList;
// username={this.state.username} date={this.state.date} birdColor={this.state.birdColor} location={this.state.location} otherDescription={this.state.otherDescription} possibleIdent={this.state.possibleIdent}