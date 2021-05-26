import React, {useState, useEffect, } from 'react';
import ReactPlayer from 'react-player'
import '../App.css';
import { Card, Icon} from 'antd';
//import Nav from './component/Nav'
import {connect} from 'react-redux'
import Stripe from '../components/Stripe'
import Strip from './screenStripe'


import {Link, Redirect} from 'react-router-dom'
import { Radio, Input, Space, Checkbox, Upload, message, } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import{ init } from 'emailjs-com';
init(process.env.REACT_APP_USER_INIT);

const { Dragger } = Upload;
const { TextArea } = Input;



function ScreenFormulaire() {

 //FORMULAIRE
  const [name, setName] = useState("");
  const [prenom, setPrenom] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [message0, setMessage0] = useState("");
  const [message1, setMessage1] = useState("");
  const [image, setImage] = useState([]);
 

   //RADIO
  const [firstRadio, setFirstRadio] = useState(0)
  const [secondRadio, setSecondRadio] = useState(0)
  const [thirdRadio, setThirdRadio] = useState(0)
  const [fourthRadio, setFourthRadio] = useState(0)

// TRADUCTION OF THE SELECTIONS 
var firstRad;
if(firstRadio == 1){
    firstRad = "Souvent"
} else if(firstRadio == 2){
    firstRad = "De temps en temps"
} else if(firstRadio == 3){
    firstRad = "Jamais"
} else if(firstRadio == 4){
    firstRad = "Je viens d'arrêter"
}
var secondRad = secondRadio === 1? "oui" : "non";
var thirdRad = thirdRadio === 1? "oui" : "non";
var fourthRad = fourthRadio === 1? "oui" : "non";


 //CHECKBOX
  const [checkbox, setCheckbox] = useState([])
 // console.log(checkbox, "check check")
  const [checkbox1, setCheckbox1] = useState([])
 // console.log(checkbox1, "check check???????")
  const [checkbox2, setCheckbox2] = useState([])
 // console.log(checkbox2, 'check 22222222')


 // STRIPE
 const [payed, setPayed] = useState(false)
 const [paymentMethod, setPaymentMethod] = useState(null);
console.log(payed, "c'est payé")

 //REDIRECTION
 const [redirection, setRedirection] = useState(false)


// ==========FORMULAIRE=>===========================================+>>>>>>>

const isEmail = () => {
    let mail = document.getElementById("error");
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regex)){
       mail.style.display = 'none';
        return true;
    } else {
        mail.style.display = 'block';
        mail.style.animation = 'dongle 1s';
        setTimeout(() => {
            mail.style.animation = 'none';
        }, 1000);
        return false;
    }
};


// ====================>>>>>>>> AFFICHAGE ERRORR APRES VALIDATION <<<<<<<===========================================
const failMessage = (messageX) => {

    
    let formMess = document.querySelector('.form-message');

    formMess.innerHTML = messageX;
    formMess.style.opacity = '1';
    formMess.style.color = 'red';

    document.getElementById('email').classList.add('error')
    document.getElementById('age').classList.add('error')

    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let emails =  document.querySelector('.email');

    if (email.match(regex)){
        emails.style.color = '#36D82E';
     }else {
        emails.style.color = 'red';
    }

    let agex =  document.querySelector('.age');
    if(age.length < 1 ){
        agex.style.color = 'red'
    } else {
        agex.style.color = '#36D82E' 
    }

    let firstR = document.querySelector('.firstRadio');
    if(firstRadio == 0){
        firstR.style.color = 'red'
    } else {
        firstR.style.color = '#36D82E'
    }
    let secondR = document.querySelector('.secondRadio');
    if(secondRadio == 0){
        secondR.style.color = 'red'
    } else {
        secondR.style.color = '#36D82E'
    }
    let thirdR = document.querySelector('.thirdRadio');
    if(thirdRadio == 0){
        thirdR.style.color = 'red'
    } else {
        thirdR.style.color = '#36D82E'
    }
    let fourthR = document.querySelector('.fourthRadio');
    if(fourthRadio == 0){
        fourthR.style.color = 'red'
    }else {
        fourthR.style.color = '#36D82E'
    }

    let check2 = document.querySelector('.check2');
    if(checkbox2.length < 1){
        check2.style.color = 'red'
    } else {
        check2.style.color = '#36D82E'
    }

    let mess = document.querySelector('.mess');
    if(message0.length == ""){
        mess.style.color = 'red'
    } else {
        mess.style.color = '#36D82E'
    }

    let mess1 = document.querySelector('.mess1');
    if(message1.length == ""){
        mess1.style.color = 'red'
    } else {
        mess1.style.color = '#36D82E'
    }

    let pho = document.querySelector('.photos');
    if(image.length == 0){
      pho.style.color = 'red'
    } else {
      pho.style.color = '#36D82E'
    }

   /* let paid = document.querySelector('.payement')
    if(paymentMethod == null){
     paid.style.color = 'red'
    }*/

}

//==================================================================================================================
// ====================>>>>>>>> AFFICHAGE SUCCESS APRES VALIDATION <<<<<<<===========================================
const successMessage = () => {
    let formMess = document.querySelector('.form-message');

    formMess.innerHTML = 'Message envoyé ! Nous vous recontacterons dès que possible.';
    formMess.style.color = '#36D82E';
    formMess.style.opacity = '1';
    document.getElementById('email').classList.remove('error')
    document.getElementById('age').classList.remove('error')

    setTimeout(() => {
        formMess.style.opacity = '0';
    }, 5000);

    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let emails =  document.querySelector('.email');

    if (email.match(regex)){
        emails.style.color = '';
     }

    let agex =  document.querySelector('.age');
     agex.style.color = ''
    

    let firstR = document.querySelector('.firstRadio');
    if(firstRadio != 0){
        firstR.style.color = ''
    }
    let secondR = document.querySelector('.secondRadio');
    if(secondRadio != 0){
        secondR.style.color = ''
    }
    let thirdR = document.querySelector('.thirdRadio');
    if(thirdRadio != 0){
        thirdR.style.color = ''
    }
    let fourthR = document.querySelector('.fourthRadio');
    if(fourthRadio != 0){
        fourthR.style.color = ''
    }

    let check2 = document.querySelector('.check2');
        check2.style.color = ''

    let mess = document.querySelector('.mess');
        mess.style.color = ''
    

    let mess1 = document.querySelector('.mess1');
        mess1.style.color = ''

    let pho = document.querySelector('.photos');
      pho.style.color = ''

      let paid = document.querySelector('.payement')
      paid.style.color = ''


      setTimeout(redirect, 3000); 
  

}
//====================================================================
// ============>>>>>>> AFFICHAGE DIRECT <<<<<<<======================

let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let emails =  document.querySelector('.email');
   if(emails ){
    if (email.match(regex)){
        emails.style.color = '#36D82E';
     }else {
        emails.style.color = '';
    }
}

let agex =  document.querySelector('.age');
if(agex){
  if(age.length > 1 ){
        agex.style.color = '#36D82E'
    } else {
      agex.style.color = ''
    }
}
    
    let firstR = document.querySelector('.firstRadio');
    if(firstR){
      if(firstRadio == 0){
        firstR.style.color = ''
    } else {
        firstR.style.color = '#36D82E'
    }
    }
    
    let secondR = document.querySelector('.secondRadio');
    if(secondR){
      if(secondRadio == 0){
        secondR.style.color = ''
    } else {
        secondR.style.color = '#36D82E'
    }
    }
    
    
    let thirdR = document.querySelector('.thirdRadio');
    if(thirdR){
      if(thirdRadio == 0){
        thirdR.style.color = ''
    } else {
        thirdR.style.color = '#36D82E'
    }
    }

     let fourthR = document.querySelector('.fourthRadio');
    if(fourthR){
     if(fourthRadio == 0){
        fourthR.style.color = ''
    }else {
        fourthR.style.color = '#36D82E'
    } 
    }
   
   
    let check2 = document.querySelector('.check2');
     if(check2){
      if(checkbox2.length < 1){
        check2.style.color = ''
    } else {
        check2.style.color = '#36D82E'
    } 
     }
    
    
    let mess = document.querySelector('.mess');
    if(mess){
     if(message0.length == ""){
        mess.style.color = ''
    } else {
        mess.style.color = '#36D82E'
    } 
    }

     let mess1 = document.querySelector('.mess1');
    if(mess1){
     if(message1.length == ""){
        mess1.style.color = ''
    } else {
        mess1.style.color = '#36D82E'
    } 
    }
   

    let pho = document.querySelector('.photos');
    if(pho){
      if(image.length == 0){
      pho.style.color = ''
    } else {
      pho.style.color = '#36D82E'
    }

    }
    
//=====================================================================================================
  

// ==>> POSITION IMAGES <<=====
var image1 = image[0];
var image2 = image[1];
var image3 = image[2];
var image4 = image[3];
var image5 = image[4];
// =============================


// ===============+>>>> FORMULAIRE REMPLIT PAR L'UTILISTATRICE ENVOYER À L'API <<<<<=============================
  const handleSubmit = (e) => {
    e.preventDefault();

    if(isEmail() && age && firstRadio != 0 && secondRadio != 0 && thirdRadio != 0 && fourthRadio != 0 && checkbox2.length > 0 && message0 != "" && message1 != "" && image.length != 0 ){
    sendFeedback(process.env.REACT_APP_TEMPLATE_EMJS, {
      name,
      prenom,
      age,
      email,
      message0,
      message1,
      firstRad,
      secondRad,
      thirdRad,
      fourthRad,
      checkbox,
      checkbox1,
      checkbox2,
      image1,
      image2,
      image3,
      image4,
      image5,
    });
    } else {
        failMessage("Merci de remplir correctement les champs requis *");
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
        setName("");
        setPrenom("");
        setAge("");
        setEmail("");
        setMessage0("");
        setMessage1("");
        setFirstRadio(0);
        setSecondRadio(0);
        setThirdRadio(0);
        setFourthRadio(0);
        setCheckbox([]);
        setCheckbox1([]);
        setCheckbox2([]);
        setImage([])
      })
      .catch(
        (err) => {
            failMessage("Une erreur s'est produite, veuillez réessayer.")
        }
         // document.querySelector('.form-message').innerHTML =
          //  "Une erreur s'est produite, veuillez r√©essayer."
          )
  };

  // ============================================================================================

  const redirect = () => {
    setRedirection(true);  
}


if(redirection){
    return <Redirect to='/screensuccess' /> 
}

// ==========RADIO=>===========================================+>>>>>>>



const onChange = e => {
    console.log('radio checked', e.target.value);
    
    setFirstRadio(e.target.value)
  };

  const onChange1 = e => {
    console.log('radio checked', e.target.value);
    
    setSecondRadio(e.target.value)
  };

  const onChange2 = e => {
    console.log('radio checked', e.target.value);
    
    setThirdRadio(e.target.value)
  };

  const onChange3 = e => {
    console.log('radio checked', e.target.value);
    
    setFourthRadio(e.target.value)
  };

   // ============================================================================================

//============CHECKBOX============================================+>>>




  function onChangeCheckbox(checkedValues) {
    console.log('checked = ', checkedValues);
    setCheckbox([...checkbox, checkedValues])
  }
  function onChangeCheckbox1(checkedValues) {
    console.log('checked = ', checkedValues);
    setCheckbox1([...checkbox1, checkedValues])
  }
  function onChangeCheckbox2(checkedValues) {
    console.log('checked = ', checkedValues);
    setCheckbox2([...checkbox2, checkedValues])
  }
  
  
  
  const plainOptions = ['Cuir chevelu sec', 'Racines grasses', 'Pertes de cheveux', 'Pas assez de volume', 'Trop de volume', 'Démangeaisons', 'Péllicules', 'Psoriasis'];
  const options = [
    { label: 'Cuir chevelu sec', value: 'Cuir chevelu sec' },
    { label: 'Racines grasses', value: 'Racines grasses' },
  ];

  const options1 = [
    { label: 'Pertes de cheveux', value: 'Pertes de cheveux' },
    { label: 'Pas assez de volume', value: 'Pas assez de volume' },
  ];

  const options2 = [
    { label: 'Trop de volume', value: 'Trop de volume' },
    { label: 'Démangeaisons', value: 'Démangeaisons' },
    { label: 'Péllicules', value: 'Péllicules' },
  ];
 
  const options3 = [
    { label: 'Psoriasis', value: 'Psoriasis' },
   
  ];

//SECOND CHECKBOX LONGUEURS


  const options4 = [
    { label: 'Cheveux secs', value: 'Cheveux secs' },
    { label: 'Cheveux poisseux', value: 'Cheveux poisseux' },
  ];

  const options5 = [
    { label: 'Cheveux abimés ou cassants', value: 'Cheveux abimés ou cassants' },
  ];

  const options6 = [
    { label: 'Boucles mal formées', value: 'Boucles mal formées' },
    { label: 'Frisottis', value: 'Frisottis' },
  ];
 
  const options7 = [
    { label: 'Cheveux ternes', value: 'Cheveux ternes' },
    { label: 'Fourches aux pointes', value: 'Fourches aux pointes' },
  ];

  //THIRD CHECKBOX LONGUEURS


  const options8 = [
    { label: 'Avoir des boucles bien formées', value: 'Avoir des boucles bien formées' },
  ];

  const options9 = [
    { label: 'Arrêter les lissages', value: 'Arrêter les lissages' },
  ];

  const options10 = [
    { label: 'Arrêter les dé/colorations', value: 'Arrêter les dé/colorations' },
  ];
 
  const options11 = [
    { label: 'Retrouver des cheveux doux', value: 'Retrouver des cheveux doux' },
  ];

  const options12 = [
    { label: 'Entretenir la couleur naturelle', value: 'Entretenir la couleur naturelle' },
  ];

  const options13 = [
    { label: 'Accélérer la pousse des cheveux', value: 'Accélérer la pousse des cheveux' },
  ];

  const options14 = [
    { label: 'Espacer les lavages', value: 'Espacer les lavages' },
  ];
 
  const options15 = [
    { label: 'Apaiser le cuir chevelu', value: 'Apaiser le cuir chevelu' },
  ];

  const options16 = [
    { label: 'Lutter contre les frisottis', value: 'Lutter contre les frisottis' },
  ];
 
  const options17 = [
    { label: 'garder les boucles bien formées pendant plusieurs jours', value: 'garder les boucles bien formées pendant plusieurs jours' },
  ];


   // ============================================================================================
  // =========================================PHOTO ================================++>>>>>>>>


  const proops = {
    
    name: 'file',
    multiple: true,
    /*action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',*/
   /* onClick(){
     handleClick()
    },*/

    beforeUpload: file => {
      console.log('DEBUG file.type', file.type);
      return false;
    },
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList, 'INFO FILE');
        console.log(info, 'iNFO FILE 1')
       uploadImage(info)
      }
      if (info) {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
     
  };


  const uploadImage = async (files) => {
    console.log(files.file, "TR>Y")
    var formData = new FormData();
        formData.append('file', files.file );
      
        
       const database = await fetch('/formulaire-pics', {
          method: 'POST',
          body: formData
        
          })
          
          const body = await database.json()
          console.log(body, "body ====>")
          setImage([...image, body.image])
  }



 /*var succ; 
 var img;
 if(image != ""){
   succ = "Téléchargement de l'image réussit"
   img = <img style={{width: 200, height: 'auto', borderRadius: 3}} src={image}></img>
 }*/


// { /* <div className="routine-page" style={{}}>*/}  {firstRadio === 5 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
//  </Radio>*/} 

  return (
     

    
       <div className="formulaire-page">
     
         
           <br/> <br/> <br/>  
            <div style={center}>
                <h1 style={titre}> Votre diagnostic capillaire personnalisé</h1>
            </div>
         <br/>
        
        
      
       
          
     <div className="contact-form">
   
         <br/>
      <h1>Identité</h1>
      <div >
          <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{display: 'flex', flexDirection: 'column', marginRight: '2%', width: '40%' }}>
        <input
            style={input}
            type="text"
            id="prénom"
            name="prénom"
            onChange={(e) => setPrenom(e.target.value)}
            placeholder="Carmen"
            value={prenom}
            />
         
       <p>Prénom</p>
       </div>

       <div style={{display: 'flex', flexDirection: 'column', marginLeft: '2%', width: '40%' }}>
        <input style={input}
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Dupont"
          value={name}
          autoComplete="off"
        />
        
        <p>Nom</p>
     </div>

        </div>
        <br/>

        <div style={{display: 'flex', flexDirection: 'column', width: '60%'}}>
            <h2 className="email">Adrésse e-mail : <font color='red'>*</font></h2>
            <label id="error" style={{display: 'none',color: '#ff4d4d', transformOrigin: '50% 50%'}} >Email non valide</label>
          <input style={input}
            type="mail"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="carmen.dupont@gmail.com *"
            value={email}
            autoComplete="off"
          />
          
          <p>Votre adresse e-mail est nécessaire pour recevoir la réponse du diagnostic personnalisé. veuillez entrer une adresse e-mail valide et vérifier qu'elle ne comporte pas d'erreur. Si vous le pouvez privilégiez les adresse gmail.</p>
        </div>

        <br/>

        <div style={{display: 'flex', flexDirection: 'column', width: '60%'}}>
        <h2 className="age">Âge (ça reste entre nous): <font color='red'>*</font></h2>
        <input style={input}
          type="text"
          id="age"
          name="age"
          onChange={(e) => setAge(e.target.value)}
          placeholder="25ans *"
          value={age}
        />
        </div>

        <br/><br/>

        <h1>Diagnostic capillaire</h1>

       <h2 className="firstRadio">Faites-vous des lissages ou des brushings ? <font color='red'>*</font></h2>
 
        <Radio.Group onChange={onChange} value={firstRadio}>
          <Space direction="vertical">
            <Radio value={1}>Souvent</Radio>
            <Radio value={2}>De temps en temps</Radio>
            <Radio value={3}>Jamais</Radio>
            <Radio value={4}>Je viens d'arrêter</Radio>
            
               
           
          </Space>
        </Radio.Group>
        <br/><br/>

        <h2 className="secondRadio">Vos cheveux sont-ils actuellement colorés ou décolorés chimiquement ? <font color='red'>*</font></h2>
            
            <Radio.Group onChange={onChange1} value={secondRadio}>
            <Space direction="vertical">
                <Radio value={1}>oui</Radio>
                <Radio value={2}>non</Radio>
            </Space>
            </Radio.Group>

            <br/><br/>

            <h2 className="thirdRadio">Êtes-vous enceinte et/ou allaitante ? <font color='red'>*</font></h2>
            
            <Radio.Group onChange={onChange2} value={thirdRadio}>
            <Space direction="vertical">
                <Radio value={1}>oui</Radio>
                <Radio value={2}>non</Radio>
            </Space>
            </Radio.Group>

            <br/><br/>

            

            <h2>Problématiques liées au cuir chevelur :</h2>
            <Checkbox.Group options={options} defaultValue={['']} onChange={onChangeCheckbox} />
            <br />
            <br />
            <Checkbox.Group options={options1} defaultValue={['']} onChange={onChangeCheckbox} />
            <br />
            <br />
            <Checkbox.Group options={options2} defaultValue={['']} onChange={onChangeCheckbox} />
            <br />
            <br />
            <Checkbox.Group options={options3} defaultValue={['']} onChange={onChangeCheckbox} />
            <br />
            <br />
            <p>Plusieurs choix peuvent être cochés, laissez vide si vous n'avez pas de problématiques liées au cuir chevelu.</p>
            <br />
            <br />

            <h2>Problématiques liées aux longueurs :</h2>
            <Checkbox.Group options={options4} defaultValue={['']} onChange={onChangeCheckbox1} />
            <br />
            <br />
            <Checkbox.Group options={options5} defaultValue={['']} onChange={onChangeCheckbox1} />
            <br />
            <br />
            <Checkbox.Group options={options6} defaultValue={['']} onChange={onChangeCheckbox1} />
            <br />
            <br />
            <Checkbox.Group options={options7} defaultValue={['']} onChange={onChangeCheckbox1} />
            <br />
            <br />
            <p>Plusieurs choix peuvent être cochés, laissez vide si vous n'avez pas de problématiques liées aux longueurs.</p>
            <br />
            <br />


            <h2 className="check2">Quels sont vos objectifs principaux ? <font color='red'>*</font></h2>
            <Checkbox.Group options={options8} defaultValue={['']} onChange={onChangeCheckbox2} />
            <br />
            <br />
            <Checkbox.Group options={options9} defaultValue={['']} onChange={onChangeCheckbox2} />
            <br />
            <br />
            <Checkbox.Group options={options10} defaultValue={['']} onChange={onChangeCheckbox2} />
            <br />
            <br />
            <Checkbox.Group options={options11} defaultValue={['']} onChange={onChangeCheckbox2} />
            <br />
            <br />
            <Checkbox.Group options={options12} defaultValue={['']} onChange={onChangeCheckbox2} />
            <br />
            <br />
            <Checkbox.Group options={options13} defaultValue={['']} onChange={onChangeCheckbox2} />
            <br />
            <br />
            <Checkbox.Group options={options14} defaultValue={['']} onChange={onChangeCheckbox2} />
            <br />
            <br />
            <Checkbox.Group options={options15} defaultValue={['']} onChange={onChangeCheckbox2} />
            <br />
            <br />
            <Checkbox.Group options={options16} defaultValue={['']} onChange={onChangeCheckbox2} />
            <br />
            <br />
            <Checkbox.Group options={options17} defaultValue={['']} onChange={onChangeCheckbox2} />
            <br />
            <br />
            <p>Plusieurs choix peuvent être cochés</p>

            <br />
            <br />


            <h2 className="fourthRadio">Souhaitez-vous UNIQUEMENT des produits zéro-déchet ? <font color='red'>*</font></h2>
            
            <Radio.Group onChange={onChange3} value={fourthRadio}>
            <Space direction="vertical">
                <Radio value={1}>oui</Radio>
                <Radio value={2}>non</Radio>
            </Space>
            </Radio.Group>
            <p>Les produits zéro-déchet sont par exemple des produits solides ou rechargeables, mais veuillez noter que notre gamme zéro-déchet est plus réduite.</p>
        
            <br />
            <br />
        
            <h2 className="mess">Quelle est votre routine capillaire actuelle ? <font color='red'>*</font></h2>
            <textarea style={textearea}
                    id="message0"
                    name="message0"
                    onChange={(e) => setMessage0(e.target.value)}
                    placeholder="message *"
                    value={message0}
                    />

            <br />
            <br />
        
            <h2 className="mess1">Quelles sont vos problématiques principales ? <font color='red'>*</font></h2>
            <textarea style={textearea}
                      
                    id="message1"
                    name="message1"
                    onChange={(e) => setMessage1(e.target.value)}
                    placeholder="message *"
                    value={message1}
                    />

             <p>Nous avons besoin d'un maximum d'informations afin de vous conseiller une routine personnalisée pardaitement adaptée à vos cheveux bouclés. Vous pouvez nous donner plus d'informations à propos de vos problématiques et de l'état de vos cheveux.</p>       

             <br />
             <br />

             <h2 className="photos">Vos cheveux en photos : <font color='red'>*</font></h2>

             <Dragger {...proops} >
                <p className="ant-upload-drag-icon">
                <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                band files
                </p>
            </Dragger>

        
            
            <p >Afin que l'on puisse vous apporter une réponse très personalisé, nous avons besoin de voir vos cheveux. n'hésitez pas joindre plusieurs photos sous différents angles !<br/> Si vous ne parvenez pas à envoyer la photo, tentez de réduire son format ou d'ouvrir le formulaire dans une nouvelle page  de votre navigateur.</p>
            
            <br/>
            <br/>

            <h2 className="payement">Payer par carte bancaire <font color='red'>*</font></h2>
        <br/>
        
        


     <Stripe/>



                 
      </div>
       <div style={{marginTop: '-5%', }}>
      <div className="form-message"></div>
      <input style={button} 
        className="button"
        type="button"
        value="Envoyer le formulaire"
        onClick={handleSubmit}
      />
      </div> 
    
  <br/> <br/> <br/>

        
      
      
    </div>
       
        
          <br/>  
          <br/>  
          <br/>  
          <br/> 
          <br/>  
          <br/>  
          <br/>  
          <br/>  


            
    
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
  //color: 'grey',
  fontSize: '12px',
  //fontFamily: "Roboto",
  //textShadow: '1px 1px 2px black',

  //width: '40%',
  //height: '80%'
}

const textearea = {
  background: 'none',
    fontFamily: "Verdana", 
   // "Geneva", "Tahoma" "sans-serif",
    fontSize: '1.1rem',
    border: '1px solid #C9CACB',
    padding: '12px',
    borderRadius: 3,
    color: 'black',
    width: '80%',
  
}




const button = {
    backgroundColor: 'white',
    fontSize: '25px', 
    fontWeight: 'bold',
    padding: '10px',
    border: '3px solid #222222',
    cursor: 'pointer',
    transition: '.2s',
    borderRadius: 3,
    width: '100%',
  
  
}

const input = {
    background: 'none',
    fontFamily: "Verdana", 
   // "Geneva", "Tahoma" "sans-serif",
    fontSize: '1.1rem',
    border: '1px solid #C9CACB',
    padding: '12px',
    borderRadius: 3,
    color: 'black',
  
}


export default ScreenFormulaire;
