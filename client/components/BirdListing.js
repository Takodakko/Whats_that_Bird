import React from 'react';

const BirdListing = (props) => {
    //const birdList = [];
    console.log(props, "props")
    const {username, postdate, birdcolor, location, otherdescription, possibleident} = props.bird;

    return (
        <div>Username: {username}<br></br> Postdate: {postdate}<br></br> Bird's color: {birdcolor}<br></br> Location: {location}<br></br> Other Description: {otherdescription}<br></br> Possible Identification: {possibleident}<br></br><br></br></div>
    )
}

export default BirdListing;