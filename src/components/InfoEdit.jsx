import { Component } from "react";

class InfoEdit extends Component {
constructor(props){
super(props)
this.submitFunction = this.props.submitFunction;
}
render(){
    return (
        <div className="cv-form-div">
          <legend>Personal Information:
            <label htmlFor="editfname">First Name:</label>
            <input type="text" id="editfname" defaultValue={this.props.info.first}></input>
            <label htmlFor="editlname">Last Name:</label>
            <input type="text" id="editlname" defaultValue={this.props.info.last}></input>
            <label htmlFor="editemail">E-mail Address:</label>
            <input type="text" id="editemail" defaultValue={this.props.info.email}></input>
            <label htmlFor="editphone">Phone Number:</label>
            <input type="text" id="editphone" defaultValue={this.props.info.phone}></input>
            <input type="button" id="infoSubmitButton" onClick={this.submitFunction}></input>
          </legend>
        </div>
        );

}
}
export default InfoEdit;