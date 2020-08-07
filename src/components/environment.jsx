import React, {Component,Fragment} from 'react';
import {EnvironmentData} from "./data";
  const Environment =(props) => {
 


  

       const handleOnchange=(event)=>{
            let element=EnvironmentData.find(e=>e.input===event.target.value);
         
            return (props.changeHandler(event,element?element.text:""));
        }



        return(
         
         <select onChange={(e)=>handleOnchange(e)} defaultValue="default" class="form-control">
        <option value="default">-- Select --</option>
        {EnvironmentData.map(element=>(<option value={element.input}>{element.input}</option>))}
       </select>
            
            
        );
    


}
export default Environment;