import { Component } from 'react';
import '../styles/infoEntry.css'

class InfoEntry extends Component {
constructor(props) {
    super(props)
    this.props = props;
    this.submitFunction = this.props.submitFunction;
  } 

render(){
return (
    <div className="cv-form-div">
      <legend>Personal Information:
        <label htmlFor="fname">First Name:</label>
        <input type="text" id="fname"></input>
        <label htmlFor="lname">Last Name:</label>
        <input type="text" id="lname"></input>
        <label htmlFor="email">E-mail Address:</label>
        <input type="text" id="email"></input>
        <label htmlFor="phone">Phone Number:</label>
        <input type="text" id="phone"></input>
        <button id="infoSubmitButton" onClick={this.submitFunction}>Submit Info</button>
      </legend>
    </div>
    );
    }

}
export default InfoEntry;