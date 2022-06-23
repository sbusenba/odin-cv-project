import { Component } from "react";

class SchoolEdit extends Component{
    constructor (props){
    super(props)
    this.state = {schoolIndex: 0};
    this.schools = Array.from(props.schools);
    this.maxLength = this.schools.length -1;
    this.submitFunction = props.submitFunction;
    this.updateData=()=>{
        let school = document.getElementById('school') ;
        let degree = document.getElementById('degree') ;
        let startDate = document.getElementById('start-date') ;
        let endDate = document.getElementById('end-date') ;
        this.schools[this.state.schoolIndex]={school: school.value,degree: degree.value, startDate: startDate.value, endDate:endDate.value}

    }
    }
    submitSchools=()=>{
        this.updateData()
        this.submitFunction(this.schools)
    }
    nextSchool=()=>{
        this.updateData()
        this.setState({schoolIndex: this.state.schoolIndex+1})
    }

    prevSchool=()=>{
        this.updateData()
        this.setState({schoolIndex: this.state.schoolIndex-1})
        
    }

    render(){
        return(
            <div className ="school-entry">
                <legend>Education:
                <label htmlFor="school">School:</label>
                <input type="text" 
                    id="school" 
                    key={this.schools[this.state.schoolIndex].school}
                    defaultValue={this.schools[this.state.schoolIndex].school}></input>
                <label htmlFor="degree">Degree:</label>
                <input type="text" 
                    id="degree" 
                    key={this.schools[this.state.schoolIndex].degree}
                    defaultValue={this.schools[this.state.schoolIndex].degree}></input>
                <label htmlFor="start-date">Start Date:</label>
                <input type="date" 
                    id="start-date" 
                    key={this.schools[this.state.schoolIndex].startDate}
                    defaultValue={this.schools[this.state.schoolIndex].startDate}></input>
                <label htmlFor="end-date">End Date:</label>
                <input type="date" 
                    key={this.schools[this.state.schoolIndex].endDate}
                    id="end-date" 
                    defaultValue={this.schools[this.state.schoolIndex].endDate}></input>
                
        <div className="button-div">
            {(this.state.schoolIndex > 0)? (<button onClick={this.prevSchool}>Previous</button>):('')}
            <button id= 'school-submit-button' onClick={this.submitSchools}>Submit Education</button>
            {(this.state.schoolIndex < this.maxLength )? (<button onClick={this.nextSchool}>Next</button>):('')}
        </div>
        </legend> 
        </div>
        )
    }


}
export default SchoolEdit;