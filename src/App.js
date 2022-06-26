import logo from './logo.svg';
import './App.css';
import InfoEntry from './components/InfoEntry';
import InfoEdit from './components/InfoEdit'
import SchoolEntry from './components/SchoolEntry'
import SchoolEdit from './components/SchoolEdit'
import WorkEntry from './components/WorkEntry';
import { Component } from 'react';

class App extends Component {
   constructor(){
    super();
    this.state = {
      phase : 0, 
      schoolInfo : [],
      jobInfo: [],
      infoEntered:false,
      info:{first:'TestName',last:'TestNameLast',email:'dunno@duncare.com',phone:"(123)345-6789"}}
    
  }
  
   getInfo = ()=>{
    let firstName = document.getElementById('fname') ;
    let lastName = document.getElementById('lname') ;
    let email = document.getElementById('email') ;
    let phone = document.getElementById('phone') ;
    let info = {first: firstName.value,last: lastName.value, email: email.value, phone:phone.value}
    this.setState({info})
    this.setState({infoEntered:true})
    this.setState({phase:1})
  }
  editInfo = ()=>{
    let firstName = document.getElementById('editfname') ;
    let lastName = document.getElementById('editlname') ;
    let email = document.getElementById('editemail') ;
    let phone = document.getElementById('editphone') ;
    let info = {first: firstName.value,last: lastName.value, email: email.value, phone:phone.value}
    this.setState({info})
  }
  getSchool = ()=>{
    let school = document.getElementById('school') ;
    let degree = document.getElementById('degree') ;
    let startDate = document.getElementById('start-date') ;
    let endDate = document.getElementById('end-date') ;
    let schoolInfo = Array.from(this.state.schoolInfo);
    schoolInfo.push({school: school.value,degree: degree.value, startDate: startDate.value, endDate:endDate.value})
    this.setState({schoolInfo})
    /* temporarily set phase to display schooledit*/
    this.setState({phase:2})
  }
  getAnotherSchool = ()=>{
    let school = document.getElementById('school') ;
    let degree = document.getElementById('degree') ;
    let startDate = document.getElementById('start-date') ;
    let endDate = document.getElementById('end-date') ;
    let schoolInfo = Array.from(this.state.schoolInfo);
    schoolInfo.push({school: school.value,degree: degree.value, startDate: startDate.value, endDate:endDate.value})
    this.setState({schoolInfo})
    school.value = null;
    degree.value = null;
    startDate.value = null;
    endDate.value = null;


  }


  editSchool = (schoolInfo) => {
    this.setState({schoolInfo})
  }
  getJob= ()=>{
    let job = document.getElementById('job-input').value
    let title = document.getElementById('title-input').value
    let startDate = document.getElementById('start-input').value
    let endDate = document.getElementById('end-input').value
    let jobInfo = Array.from(this.state.jobInfo);
    jobInfo.push({job: job,title: title, startDate: startDate, endDate:endDate})
    this.setState({jobInfo})
    this.setState({phase:3})
  }
  getAnotherJob= ()=>{
    let job = document.getElementById('job-input')
    let title = document.getElementById('title-input')
    let startDate = document.getElementById('start-input')
    let endDate = document.getElementById('end-input')
    let jobInfo = Array.from(this.state.jobInfo);
    jobInfo.push({job: job.value,title: title.value, startDate: startDate.value, endDate:endDate.value})
    this.setState({jobInfo})
    job.value = null;
    title.value = null;
    startDate.value = null;
    endDate.value = null;
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    
        
          {(this.state.phase === 0)? <InfoEntry submitFunction={this.getInfo}/>: null}
          {(this.state.phase === 1)? <SchoolEntry addAnotherFunction ={this.getAnotherSchool} submitFunction={this.getSchool} schools={this.state.schoolInfo}/>: null}
          {(this.state.phase === 2)? <WorkEntry addAnotherFunction ={this.getAnotherJob} submitFunction = {this.getJob}/>: null}
          {(this.state.phase === 4)? <InfoEdit submitFunction={this.editInfo} info = {this.state.info}/>:''}
          {(this.state.phase === 5)? <SchoolEdit submitFunction = {this.editSchool} schools = {this.state.schoolInfo}/>:null}
          
      </header>
    </div>
  );
  }
}

export default App;
