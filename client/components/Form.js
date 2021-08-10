import React from 'react';

const Form = (props) => {
    const { userName, date, birdColor, location, otherDescription } = props;
    return (
        <form id="birdForm" action="/newSubmission">
          <span>Your name: <input type="text" id="userName"></input></span><br></br>
          <span>Date: <input type="text" id="date"></input></span><br></br>
          <span>Color of Bird: <input type="text" id="birdColor"></input></span><br></br>
          <span>Location: <input type="text" id="location"></input></span><br></br>
          <span>Other Description: <input type="text" id="otherDescription"></input></span><br></br>
          <button><input type="submit" value="Submit"></input></button>
        </form>
        );
};
 

export default Form;