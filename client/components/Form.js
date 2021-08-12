import React from 'react';
import { render } from 'react-dom';

const Form = (props) => {
    const { userName, date, birdColor, location, otherDescription, handleSubmit, handleChange } = props;
    //console.log(props, "props")
    
    return (
        <form id="birdForm" action="/newSubmission" onSubmit={handleSubmit}>
          <span>Your name: <input type="text" id="userName" onChange={handleChange}></input></span><br></br>
          <span>Date: <input readOnly type="text" id="date" value={date}></input></span><br></br>
          <span>Color of Bird: <input type="text" id="birdColor" onChange={handleChange}></input></span><br></br>
          <span>Location: <input type="text" id="location" onChange={handleChange}></input></span><br></br>
          <span>Other Description: <input type="text" id="otherDescription" onChange={handleChange}></input></span><br></br>
          <input type="submit" value="Submit"></input>
        </form>
        );
};
 

export default Form;