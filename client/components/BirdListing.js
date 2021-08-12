import React from 'react';

const BirdListing = (props) => {
    //const birdList = [];
    const handleDelete = props.handleDelete;
    console.log(props.bird, "props.bird")
    const {_id, username, postdate, birdcolor, location, otherdescription, possibleident} = props.bird;

    return (
        <div><strong>Username: </strong>{username}<br></br> <strong>Postdate: </strong>{postdate}<br></br> <strong>Bird's color: </strong>{birdcolor}<br></br> <strong>Location: </strong>{location}<br></br> <strong>Other Description: </strong>{otherdescription}<br></br> <strong>Possible Identification: </strong>{possibleident}<br></br><button onClick={() => handleDelete(_id)}>Delete Post</button><button>Add/Edit Possible Identification</button><br></br><br></br></div>
    )
}

export default BirdListing;