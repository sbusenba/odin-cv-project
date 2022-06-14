import logo from './logo.svg';
import './App.css';
import InfoEntry from './components/InfoEntry';
import InfoEdit from './components/InfoEdit'
import { Component } from 'react';

class App extends Component {
   constructor(){
    super();
    this.state = {infoEntered:false,info:{first:'TestName',last:'TestNameLast',email:'dunno@duncare.com',phone:"(123)345-6789"}}
    
  }
  
   getInfo = ()=>{
    let firstName = document.getElementById('fname') ;
    let lastName = document.getElementById('lname') ;
    let email = document.getElementById('email') ;
    let phone = document.getElementById('phone') ;
    let info = {first: firstName.value,last: lastName.value, email: email.value, phone:phone.value}
    this.setState({info})
    this.setState({infoEntered:true})
  }
  editInfo = ()=>{
    let firstName = document.getElementById('editfname') ;
    let lastName = document.getElementById('editlname') ;
    let email = document.getElementById('editemail') ;
    let phone = document.getElementById('editphone') ;
    let info = {first: firstName.value,last: lastName.value, email: email.value, phone:phone.value}
    this.setState({info})
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    
        
          {(!this.state.infoEntered)?
          <InfoEntry submitFunction={this.getInfo}/>:
          <InfoEdit submitFunction={this.editInfo} info = {this.state.info}/>}
      </header>
    </div>
  );
  }
}

export default App;
