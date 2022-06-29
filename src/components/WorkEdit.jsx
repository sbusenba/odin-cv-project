import { Component } from "react";

class WorkEdit extends Component{
    constructor (props){
        super(props)
        this.state = {workIndex: 0};
        this.work = Array.from(props.workInfo);
        this.maxLength = this.work.length -1;
        this.submitFunction = props.submitFunction;
        }
        updateData=()=>{
            let company = document.getElementById('company') ;
            let title = document.getElementById('title') ;
            let startDate = document.getElementById('start-date') ;
            let endDate = document.getElementById('end-date') ;
            this.work[this.state.workIndex]={company: company.value,title: title.value, startDate: startDate.value, endDate:endDate.value}
    
        }
        submitwork=()=>{
            this.updateData()
            this.submitFunction(this.work)
        }
        nextwork=()=>{
            this.updateData()
            this.setState({workIndex: this.state.workIndex+1})
        }
    
        prevwork=()=>{
            this.updateData()
            this.setState({workIndex: this.state.workIndex-1})
            
        }
    
        render(){
            return(
                <div className ="work-entry">
                    <legend>Employment:
                    <label htmlFor="company">Employer:</label>
                    <input type="text" 
                        id="company" 
                        key={this.work[this.state.workIndex].company}
                        defaultValue={this.work[this.state.workIndex].company}></input>
                    <label htmlFor="title">Title:</label>
                    <input type="text" 
                        id="title" 
                        key={this.work[this.state.workIndex].title}
                        defaultValue={this.work[this.state.workIndex].title}></input>
                    <label htmlFor="start-date">Start Date:</label>
                    <input type="date" 
                        id="start-date" 
                        key={this.work[this.state.workIndex].startDate}
                        defaultValue={this.work[this.state.workIndex].startDate}></input>
                    <label htmlFor="end-date">End Date:</label>
                    <input type="date" 
                        key={this.work[this.state.workIndex].endDate}
                        id="end-date" 
                        defaultValue={this.work[this.state.workIndex].endDate}></input>
                    
            <div className="button-div">
                {(this.state.workIndex > 0)? (<button onClick={this.prevwork}>Previous</button>):('')}
                <button id= 'work-submit-button' onClick={this.submitwork}>Submit Employment</button>
                {(this.state.workIndex < this.maxLength )? (<button onClick={this.nextwork}>Next</button>):('')}
            </div>
            </legend> 
            </div>
            )
        }
}
export default WorkEdit;