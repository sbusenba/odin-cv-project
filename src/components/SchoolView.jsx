import {Component} from 'react';
class SchoolView extends Component{
constructor(props){
    super(props)
this.school = props.school;
}
render(){
    return(
    <div className="school-view">
        <div className='school-text'>
            <h4>{this.school.school}</h4>
            <p>{this.school.degree}</p>
        </div>
        <div className='school-dates'>
            <p>{this.school.startDate}</p>
            <p>{this.school.endDate}</p>
        </div>
    </div>)
    }
}
export default SchoolView;