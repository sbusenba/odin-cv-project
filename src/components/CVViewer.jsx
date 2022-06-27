import SchoolView from "./SchoolView";
import JobView from "./JobView"
import { Component } from "react";
import "../styles/CVViewer.css"

class CVViewer extends Component{
constructor(props){
    super(props)
    this.info = props.parentState.info;
    this.schoolInfo = Array.from(props.parentState.schoolInfo);
    this.jobInfo = props.parentState.jobInfo;


}
render(){
    return (
        <div className="cv-view">
            <div className="personal-info">
                <h3>{this.info.first+' '+this.info.last}</h3>
                <div className="contact-info">
                <p>{this.info.email}</p>
                <p>{this.info.phone}</p>
                </div>
            </div>
            <div className="education">
                <h3>Education</h3>
                {this.schoolInfo.map((school)=><SchoolView 
                key={school.school+school.endDate} 
                school={school}/>)}
            </div>
            <div className="experience">
                <h3>Experience</h3>
                {this.jobInfo.map((job)=><JobView 
                key={job.company+job.endDate} job={job}/>)}
            </div>

        </div>
    )
}



}
export default CVViewer;