import React, {Component,Fragment} from 'react';
import {FlowData} from "./data";
  const Environment =(props) => {
 


  

       const handleOnchange=(event)=>{
            let element=FlowData.find(e=>e.flow===event.target.value);
         
            return (props.changeHandler(event,element?element.text:""));
        }



        return(
         
         <select onChange={(e)=>handleOnchange(e)} defaultValue="default" class="form-control">
        <option value="default">-- Select --</option>
        {FlowData.map(element=>(<option value={element.flow}>{element.flow}</option>))}
       </select>
            
            
        );
    


}
export default Environment;