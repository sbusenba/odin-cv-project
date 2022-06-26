import { Component } from "react";
class WorkEntry extends Component{


render(){

    return(
        <div>
            <legend>Experience
                <label htmlFor="job-input">Job:</label>
                <input type='text' id='job-input'></input>
                <label htmlFor="title-input">Title:</label>
                <input type='text' id='title-input'></input>
                <label htmlFor="start-input">Start Date:</label>
                <input type='date' id='start-input'></input>
                <label htmlFor="end-input">End Date:</label>
                <input type='date' id='end-input'></input>
                <button id ='job-and-another-button' onClick={this.props.addAnotherFunction}>Add and Enter Another</button>
                <button id= 'job-submit-button' onClick={this.props.submitFunction}>Submit Experience</button>
            </legend>
        </div>
    )}
}
export default WorkEntry;