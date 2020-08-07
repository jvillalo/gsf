import React, {Component,Fragment} from 'react';
import {Products} from "./data";
  const Details =(props) => {
 


  

       const handleOnchange=(event)=>{
            let element=Products.find(e=>e.product===event.target.value);
         
            return (props.changeHandler(event,element?element.product:""));
        }



        return(
         (props.productKey)?(
         <select onChange={(e)=>handleOnchange(e)} defaultValue="default" class="form-control">
        <option value="default">-- Select --</option>
        {Products.map(element=>(element.screen==props.screen?(<option value={element.product}>{element.product}</option>):("")))}
       </select>
         ):(
            <input type="text" name="details" onChange={(e)=>handleOnchange(e)} value={props.value} class="form-control" />
         )
        );
    


}
export default Details;