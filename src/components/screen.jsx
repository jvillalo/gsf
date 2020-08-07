import React, {Component,Fragment} from 'react';
import {ScreenData} from "./data";
  const Screen =(props) => {
 


  

       const handleOnchange=(event)=>{
            let element=ScreenData.find(e=>e.screen===event.target.value);
            return (props.changeHandler(event,element?(`${element.screen}${element.prefix}`):"",element?(element.defaultText):"",element?(element.productKey):false));
        }



        return(
         
         <select onChange={(e)=>handleOnchange(e)} defaultValue="default" class="form-control">
        <option value="default">-- Select --</option>
        {ScreenData.map(element=>(<option value={element.screen}>{element.screen}</option>))}
       </select>
            
            
        );
    


}
export default Screen;