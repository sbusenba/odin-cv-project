import { Component } from "react";

class SchoolEdit extends Component{
    constructor (props){
    super(props)
    this.schoolIndex = 0
    this.state = this.index
    this.schools = Array.from(props.schools);
    this.maxLength = this.schools.length -1;
    this.SubmitFunction = props.SchoolEditFunction;
    }


    render(){
        return(
        <div className="button-div">
            {this.state.schoolIndex > 0? (<button>Previous</button>):('')}
            {this.state.schoolIndex < this.maxLength ? (<button>Next</button>):('')}
        </div>
        )
    }


}
export default SchoolEdit;