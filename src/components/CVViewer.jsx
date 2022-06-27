import SchoolView from "./SchoolView";
import JobView from "./JobView"
import { Component } from "react";
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
                <div className="contact-info"></div>
                <p>{this.info.email}</p>
                <p>{this.info.phone}</p>
            
            </div>
            <div className="education">
                {this.schoolInfo.map((school)=><SchoolView school={school}/>)}
            </div>
            <div className="experience">
                {this.jobInfo.map((job)=><JobView job={job}/>)}
            </div>

        </div>
    )
}



}
export default CVViewer;