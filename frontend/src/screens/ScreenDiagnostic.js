import React, {useState, useEffect} from 'react';
import ReactPlayer from 'react-player'
import '../App.css';
import { Card, Icon} from 'antd';
//import Nav from './component/Nav'
import {Link} from 'react-router-dom'
import { Input } from 'antd';

const { TextArea } = Input;

function ScreenDiagnostic() {


  return (

     <div>
         
 <div style={paragraphe}>
            </div> 
            <div style={center}>
                <h1 style={titre}> Votre diagnostic capillaire personnalisé</h1>
            </div>
         <br/>
         
         <div style={center}>
            <div className="site-page-header-diagnostic"></div> 
          {/* <img style={{ width: '80%', height: 400 }} src="https://res.cloudinary.com/dzcx4fqfn/image/upload/v1618951252/ernan-solozabal-kfQWyxttMeQ-unsplash_lcbsn1.jpg"/>*/}
  </div>
         <br/><br/>

         <div style={center}>
               <div className="line"></div>
               </div>
            <br/><br/><br/>
           <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', marginBottom: '3%'}}>
            
            <h1 style={{ fontSize: '27px', width: '40%', marginRight: '2%' }}> Vous ne savez pas quel produits choisir ou vous hésitez entre plusieurs routines ? Vous avez déjà testé plusieurs astuces naturelles mais vous ne parvenez pas à retrouver vos boucles ? Remplissez le questionnaire, achetez votre Ticket et notre équipe  réalisera votre Diagnostic Personnalisé au plus vite par e-mail.: </h1>
            <ReactPlayer style={{ marginTop: '1%', width: '50%', height: '800px', marginLeft: '2%'}} width='480px' height='240px' controls url='https://www.youtube.com/watch?v=LrnfMZvbA3w' />
            </div>

            <div className="routine-page"> 
            <br/> <br/>
            <div style={center}>
              <Link to="screenformulaire">
            <button style={button} >Je découvre mes routines <br/>personalisé</button>
            </Link>
            </div>
            <br/> <br/> <br/><br/>

            <div style={center}>
            <h1 style={{ fontSize: '30px', fontWeight: 'bold'}}>Comment ça marche ?</h1>
            </div>
            <br/>
            <div style={{ display: 'flex',justifyContent: 'center', flexDirection: 'row' }}>
           <img style={{ width: '30%', height: 'auto' }} src="https://res.cloudinary.com/dzcx4fqfn/image/upload/v1619737862/office-620822_1920_tfqibx.jpg"/>
           <img style={{ width: '30%', height: 'auto', marginRight: '3%', marginLeft: '3%'}} src="https://res.cloudinary.com/dzcx4fqfn/image/upload/v1619737885/dan-dimmock-3mt71MKGjQ0-unsplash_m4uskm.jpg"/>
           <img style={{ width: '30%', height: 'auto' }} src="https://res.cloudinary.com/dzcx4fqfn/image/upload/v1618951277/moa-kiraly-CmyOPYfOrhc-unsplash_w2dg3h.jpg"/>
         </div>
       <br/>
            <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
                    <p style={{ width: '30%', fontSize: '25px', marginLeft: '2%' }}>1 - Remplissez le formulaire afin de nous transmettre toutes les informations à propos de vos cheveux. <br/>Le formulaire vous permet de commander votre diagnostic perrsonnalisée à  9€. </p>
                    <p style={{ width: '30%', fontSize: '25px', marginRight: '3%', marginLeft: '3%'}}>2 - Notre équipe réceptionne votre formulaire et commence à étudier votre demande.,  détermine quelles astuces s’adaptent le mieux à votre situation capillaire et sélectionne pour vous les meilleurs produits naturels de la boutique. Vous recevrez la réponse au diagnostic par e-mail.</p>
                    <p style={{ width: '30%', fontSize: '25px', }}>3 - Adoptez nos conseils personnalisés et finalisez votre routine capillaire</p>
            </div>
            <br/><br/>
           
            <div style={center}>
            <Link to="screenformulaire">
            <button style={button} >Je découvre mes routines <br/>personalisé</button>
            </Link>
            </div>

            <br/><br/><br/><br/><br/><br/>


         </div>    
    </div>
  );
}

const center = {

   display: 'flex',
   justifyContent: 'center'
    
  }

const titre = {
  fontSize: '50px',
  fontFamily: "Roboto",
  
}

const texte = {
  color: 'white',
  fontSize: '20px',
  fontFamily: "Roboto",
  textShadow: '1px 1px 2px black',
  //width: '40%',
  //height: '80%'

  
}

const paragraphe = {
  marginTop: '5%',
 // marginLeft: '3%',
}

const button = {
    backgroundColor: 'white',
    fontSize: '25px', 
    fontWeight: 'bold',
    padding: '10px',
    border: '3px solid #222222',
    cursor: 'pointer',
    color: 'black'
  
}

export default ScreenDiagnostic;