import React from 'react';

const GetButton = (props) => {
  return (
      <button id="getBirds" action="/getBirds" onClick={props.handleGet}>Get Previous Sightings</button>
  )
};

export default GetButton;