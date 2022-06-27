import {Component} from 'react';
class JobView extends Component{
constructor(props){
    super(props)
this.job = props.job;
}
render(){
    return(
    <div className="job-view" key= {this.job+this.endDate}>
        <div className='job-text'>
            <h4>{this.job.title}</h4>
            <p>{this.job.company}</p>
        </div>
        <div className='job-dates'>
            <p>{this.job.startDate}</p>
            <p>{this.job.endDate}</p>
        </div>
    </div>)
    }
}
export default JobView;