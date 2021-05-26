import React, {useState, useEffect, Linking} from 'react';
import ReactPlayer from 'react-player'
import '../App.css';
import { Card, Icon} from 'antd';
//import Nav from './component/Nav'
import {Link} from 'react-router-dom'
import { Button, Container, Row, Col} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { Input, Tooltip } from 'antd';

const { TextArea } = Input;

function ScreenHome() {

  const [suggestion, setSuggestion] = useState("");
  console.log(suggestion, 'sugg')

  const onChange = e => {
   // console.log(e);
    setSuggestion(e.target.value)
  };



  const failMessage = (messageX) => {

    let formMess = document.querySelector('.form-message');

    formMess.innerHTML = messageX;
    formMess.style.opacity = '1';
    formMess.style.color = 'red';

}


const successMessage = () => {
    let formMess = document.querySelector('.form-message');

    formMess.innerHTML = 'Message envoyé, merci !';
    formMess.style.color = '#36D82E';
    formMess.style.opacity = '1';

    setTimeout(() => {
        formMess.style.opacity = '0';
    }, 5000);
  

}

  const handleSubmit = (e) => {
    e.preventDefault();

    if(suggestion.length > 30 ){
    sendFeedback(process.env.REACT_APP_TEMPLATE_EMJS, {
      suggestion,
    });
    } else {
        failMessage("Merci de remplir le champ de saisi, une trentaine de caractères sont requis *");
    }
  };
// ============================================================================================

//===============>> REMISE DES COMPTEURS À 0 APRES VALIDATION <<<<=============================
  const sendFeedback = (templateId, variables) => {

    window.emailjs
      .send(process.env.REACT_APP_SERVICE_EMJS, templateId, variables)
      .then((res) => {
        console.log('success !');
        successMessage();
       setSuggestion("");
      })
      .catch(
        (err) => {
            failMessage("Une erreur s'est produite, veuillez réessayer.")
        }
          )
  };

  return (

     <div>
    <div  style={image}> 
              
 <div style={paragraphe}>
 <h1 style={titre}>Votre routine capillaire</h1>
 <p style={texte}> C’est le secret pour avoir des cheveux crépus <br/>éclatants de santé : la routine capillaire ! <br/><br/>NaliHair vous guide pas à pas pour embellir vos cheveux. <br/> <br/>Une routine complète, shampoing,<br/> après-shampoing, masque, soins sans rinçage, ... <br/>découvrez votre programme de soins naturels.</p>
 <br/>
<Link to="/screensigninup"><button style={styleButton}>Je découvre ma routine</button></Link>

 </div>


           </div> 
            <br/>
            <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '3%', marginRight: '2%' }}>
              <div style={{flexDirection: 'column'}}>
            <h1 style={{ fontSize: '30px', marginTop: '1%', marginLeft: '-2%'}}>Cheveux crépus, frisés ou bouclés, enfin une application pour trouver</h1>
              <div style={{ display: 'flex', justifyContent: 'center', }}>
                <h1 style={{ fontSize: '30px', }}> VOTRE ROUTINE.</h1>
                </div>
               </div>
            </div>
         <br/>
         
         <div style={{ display: 'flex',justifyContent: 'center', flexDirection: 'row' }}>
           <img style={{ width: '30%', height: 'auto' }} src="https://res.cloudinary.com/dzcx4fqfn/image/upload/v1618525194/k849b50tv3cityb8ms9m.jpg"/>
           <img style={{ width: '30%', height: 'auto', marginRight: '3%', marginLeft: '3%'}} src="https://res.cloudinary.com/dzcx4fqfn/image/upload/v1615757054/routines_capillaires_photo2_ngoved.jpg"/>
           <img style={{ width: '30%', height: 'auto' }} src="https://res.cloudinary.com/dzcx4fqfn/image/upload/v1618951274/jaroslav-devia-ILY7a3Zsxxs-unsplash_drjyn4.jpg"/>
         </div>
         <br/><br/>

         <div style={{ display: 'flex', justifyContent: 'center', }}>
               <div className="line"></div>
               </div>
            <br/><br/><br/>
           <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', }}>
            <div style={{ display: 'flex', flexDirection: 'column',  marginRight: '5%',  marginLeft: '3%' }}>
            <h1 style={{ fontSize: '30px', }}> Sur NaliHair vous aurez accès : </h1>
            <p style={{ fontSize: '20px', }}>1 - Des recommandations de routines capillaires</p>
            <p style={{ fontSize: '20px', }}>2 - Une bibliothèque de recettes de soins maison.</p>
            <p style={{ fontSize: '20px', }}>3 - Un journal de bord pour suivre votre évolution capillaire</p>
            <p style={{ fontSize: '20px', }}>4 - Un annuaire des meilleurs coiffeuses à domicile</p>
            </div>
            <ReactPlayer style={{ marginTop: '1%', marginRight: '3%'}} width='480px' height='240px' controls url='https://www.youtube.com/watch?v=TST1yRSBXm4' />
            </div>
            <div className="routine-page"> 
            <br/> <br/>
            <div style={{ display: 'flex', justifyContent: 'center', }}>
            <Link to="/screensigninup">
            <button style={{ backgroundColor: 'white', fontSize: '25px', fontWeight: 'bold', padding: '10px', border: '3px solid #222222', cursor: 'pointer', color: 'black' }}>Je découvre mes routines</button>
            </Link>
            </div>
            <br/> <br/> <br/><br/>

            <div style={{ display: 'flex', justifyContent: 'center', }}>
              <div style={{border: '4px solid #ECEEF1', padding: '50px' }}>
            <div style={{flexDirection: 'column'}}>
            <div style={{ display: 'flex', justifyContent: 'center', }}>
             <h1 style={{ fontSize: '30px', fontWeight: 'bold'}}>Des suggestions?</h1>
             </div> 
             <p style={{ fontSize: '20px', fontWeight: 'bold'}}>Avez-vous des idées de routines où recettes à ajouter ?</p>
             <div style={{ display: 'flex', justifyContent: 'center', }}>
             <Input style={{ padding: '30px', border: '0px',}}  placeholder="Commentaire" allowClear onChange={onChange} />
             </div> 
             <br/>
             <div style={{ display: 'flex', justifyContent: 'center', }} className="form-message"></div>
             <div style={{ display: 'flex', justifyContent: 'center', }}>
             <button style={{ backgroundColor: 'white', fontSize: '20px', fontWeight: 'bold', padding: '10px', border: '3px solid #222222', width: 250, cursor: 'pointer' }} onClick={handleSubmit}>Envoyer</button>
              </div> 
             </div>
             </div>
             </div>
              </div>
            
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-9%' }}>
                <div style={{  flexDirection: 'column', backgroundColor: '#F5F4F4', padding: 10, borderRadius: 5 }}>
               <p style={{ fontSize: '20px', }}>Retrouvez nous sur :</p>
              
               <div  style={{ display: 'flex', flexDirection: 'row',}}>
                <Tooltip placement="top" title="Lien facebook">
                 <img style={{width: 100, height: 100, marginTop: '-9%', cursor: 'pointer'}} onClick={() => window.open('https://www.facebook.com/nalihair')} src="https://res.cloudinary.com/dzcx4fqfn/image/upload/v1619103371/facebook-icon-preview-1_uhub3a.png"></img>
                 </Tooltip>
                 <Tooltip placement="top" title="Lien instagram">
                 <img style={{width: 75, height: 75, cursor: 'pointer' }} onClick={() => window.open('https://www.instagram.com/nalihair20/?hl=fr')} src="https://res.cloudinary.com/dzcx4fqfn/image/upload/v1620676350/logo-insta_d7zlew.png"></img>
                 </Tooltip>
                 </div>
               </div>
             </div>
             <br/><br/>

             <div className="home-feet">
             <br/> <br/>
               <div style={{ display: 'flex', flexWrap: 'wrap'   }}>
                 <p style={{ fontSize: '25px', color: 'white', marginRight: '4%', marginLeft:'2%' }}>Contact</p>
                 <p style={{ fontSize: '25px', color: 'white', marginRight: '4%' }}>Politiques en matière de cookies</p>
                 <p style={{ fontSize: '25px', color: 'white', marginRight: '4%' }}>Politique de confidentialité</p>
                 <p style={{ fontSize: '25px', color: 'white', marginRight: '4%' }}>Mentions légales</p>
                 <p style={{ fontSize: '25px', color: 'white' }}>Conditions générales</p>
               </div>
             </div>
    </div>
  );
}

const image =
{
display:'flex', 
//flexDirection: 'row',
//justifyContent:'flex-start',
//alignItems: 'flex-start',
height: '100vh',
backgroundPosition: 'center',
backgroundRepeat: 'no-repeat',
backgroundSize: 'cover',
backgroundImage: `url("https://res.cloudinary.com/dzcx4fqfn/image/upload/v1615757052/routines_capillaires_photo3_sk7dwk.jpg")`,
margin: 0,
}


const titre = {

  color: 'white',
  fontSize: '50px',
  fontFamily: "Handlee",
  
 
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
  marginLeft: '3%',
}

const styleButton = {
 // justifyContent: 'center',
//  alignItems: 'center',
  //alignSelf: 'center',
 // alignContent: 'center',
  backgroundColor: "black", 
 // borderRadius: 10, 
  //width: '100px', 
  //height: 'auto',
  fontFamily: 'Roboto',
  fontSize:'20px',
  color: 'white',
  marginTop: '2%',
  fontWeight: 'bold',
  padding: '3%',
  border: '3px solid white',
  cursor: 'pointer'
  
}

export default ScreenHome;