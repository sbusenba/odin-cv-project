import logo from './logo.svg';
import './App.css';
import InfoEntry from './components/InfoEntry';
import InfoEdit from './components/InfoEdit'
import SchoolEntry from './components/SchoolEntry'
import SchoolEdit from './components/SchoolEdit'
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
    this.setState({phase:5})
  }
  getAnotherSchool = ()=>{
    let school = document.getElementById('school') ;
    let degree = document.getElementById('degree') ;
    let startDate = document.getElementById('start-date') ;
    let endDate = document.getElementById('end-date') ;
    let schoolInfo = Array.from(this.state.schoolInfo);
    schoolInfo.push({school: school.value,degree: degree.value, startDate: startDate.value, endDate:endDate.value})
    this.setState({schoolInfo})
  }


  editSchool = (schoolInfo) => {
    this.setState({schoolInfo})
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    
        
          {(this.state.phase === 0)? <InfoEntry submitFunction={this.getInfo}/>: ''}
          {(this.state.phase === 1)? <SchoolEntry addAnotherFunction ={this.getAnotherSchool} submitFunction={this.getSchool} schools={this.state.schoolInfo}/>: ''}
          
          {(this.state.phase === 4)? <InfoEdit submitFunction={this.editInfo} info = {this.state.info}/>:''}
          {(this.state.phase === 5)? <SchoolEdit submitFunction = {this.editSchool} schools = {this.state.schoolInfo}/>:''}
          
      </header>
    </div>
  );
  }
}

export default App;
