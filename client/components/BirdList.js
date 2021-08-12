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
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    handleGet = function() {
        fetch('/sightings/getBirds')
        .then((data) => data.json())
        .then((data) => this.setState({birdLists: data})) 
            }     
    handleDelete = function(id) {
        console.log(id, "id")
        
        fetch(`/sightings/deleteEntry/${id}`,{
            method: 'DELETE',
            headers: {
              'Content-Type': 'Application/JSON'
            },
            // body: JSON.stringify(id)
          })
        .then((data) => data.json())
        .then((data) => this.setState({birdLists: data}))
    }
    
    
  render() {
      console.log(this.state.birdLists, "birdLists")
    return (
      
        <div>
            <GetButton handleGet={this.handleGet}/>
            {
                this.state.birdLists.length &&
                this.state.birdLists.map((bird) => {
                    //console.log(bird.postdate, "bird.postdate")
                    const reggie = /T.*/
                    bird.postdate = bird.postdate.replace(reggie, "");
                  return (
                      <BirdListing 
                      key={bird._id}  
                      bird={bird}
                      handleDelete={this.handleDelete}
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