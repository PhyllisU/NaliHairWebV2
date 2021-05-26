import React, {useState, useEffect} from 'react';
import './App.css';
import { Card, Icon, Button} from 'antd';
//import Nav from './Nav'
import {Link} from 'react-router-dom'



function ScreenJournal() {

  return (
    <div>
         
            

           
    
              <div  style={{display:'flex',justifyContent:'center'}}>

              <p> ScreenJournal (journal photo/gallerie)</p>
              <Link to="/"><Button href="" style={{width:'80px'}} type="primary">Home</Button></Link>


     
        
              </div> 

         
      
      </div>
  );
}

export default ScreenJournal;