import React, {Component,Fragment} from 'react';
import './App.css';
import Environment from "./components/environment";
import Screen from "./components/screen";
import Flow from "./components/flow";
import Details from "./components/details";

class App extends Component {
  
state={
form:{
environment:"",
screen:"",
details:"",
flow:""
},
linkElements:{
  environment:"",
  screen:"",
  detailLabel:"",
  details:"",
  productKey:false,
  flow:""
  }


}  

handleEnvironmentChange=(event,text)=>{
  let currentState={...this.state}
  currentState.form.environment=event.target.value;
  currentState.linkElements.environment=text;
  this.setState(currentState);

  }

  handleScreenChange=(event,text,detailLabel,productKey)=>{
    let currentState={...this.state}
    currentState.form.screen=event.target.value;
    currentState.linkElements.screen=text;
    currentState.linkElements.detailLabel=detailLabel;
    currentState.linkElements.productKey=productKey;
    currentState.form.details="";
    currentState.linkElements.details="";
    this.setState(currentState)
  
    }

    handleDetailsChange=(event,param)=>{
      let currentState={...this.state}
      currentState.form.details=event.target.value;
      this.setState(currentState);
    
      }

      handleFlowChange=(event,text)=>{
        let currentState={...this.state}
        currentState.form.flow=event.target.value;
        (text!="")?(currentState.linkElements.flow=("&flowName="+text)):(currentState.linkElements.flow="");
        this.setState(currentState);
      
        }
  
  handleSubmit=(event)=>{
    
    event.preventDefault();
    this.textArea.select();
    document.execCommand('copy');

  }
  
  
  
  render() {
   return(
    

<form  >
<div className="form-group" >
  <label><h1>Getsafe Deeplink Builder</h1></label>
</div>
<div className="form-group">
<label>
    Environment: 
    </label>
    <Environment value={this.state.form.environment} changeHandler={this.handleEnvironmentChange} />
    </div >

    <div className="form-group">
  <label>
    Screen: 
    </label>
    <Screen value={this.state.form.screen} changeHandler={this.handleScreenChange} />
 
  </div>
  {this.state.linkElements.detailLabel!=""?(
 <Fragment>
  <div className="form-group">
  <label>
    {`${this.state.linkElements.detailLabel}: `}
    </label>
    <Details value={this.state.form.details} changeHandler={this.handleDetailsChange} productKey={this.state.linkElements.productKey} screen={this.state.form.screen }/>
  
  </div>
  </Fragment>
):("")
  } 
  <div className="form-group">
  <label>{"Flow:      "}        </label>
    <Flow value={this.state.form.flow} changeHandler={this.handleFlowChange}  />
    
  

    </div>
    <div className="form-group">
  <label>
  <input type="text" class="form-control" contentEditable="false" ref={(textarea) => this.textArea = textarea} value={`${this.state.linkElements.environment}${this.state.linkElements.screen}${this.state.form.details}${this.state.linkElements.flow}`}>
  </input></label>
  <input type="button" className="btn btn-primary m-2" onClick={this.handleSubmit} value="Copy to clipboard" />
  </div>
  <div className="form-group">
  <label>
    <a href=
   {`${this.state.form.environment}${this.state.linkElements.screen}${this.state.form.details}${this.state.form.flow}`} 
   >{`${this.state.linkElements.environment}${this.state.linkElements.screen}${this.state.form.details}${this.state.linkElements.flow}`}</a>
  </label>
 </div>
</form>


    
    
  );
   }
}

export default App;
