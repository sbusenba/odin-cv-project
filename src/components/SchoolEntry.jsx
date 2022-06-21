import { Component } from "react";

class SchoolEntry extends Component {
constructor(props){
    super(props)
    this.addAnother = props.addAnotherFunction
    this.submitFunction= props.submitFunction
}





render(){
return(
    <div className ="school-entry">
        <legend>Education:
        <label htmlFor="school">School:</label>
        <input type="text" id="school"></input>
        <label htmlFor="degree">Degree:</label>
        <input type="text" id="degree"></input>
        <label htmlFor="start-date">Start Date:</label>
        <input type="date" id="start-date"></input>
        <label htmlFor="end-date">End Date:</label>
        <input type="date" id="end-date"></input>
        <button id ='school-and-another-button' onClick={this.addAnother}>Add and Enter Another</button>
        <button id= 'school-submit-button' onClick={this.submitFunction}>Submit Education</button>
      </legend> 



    </div>
);}

}
export default SchoolEntry;