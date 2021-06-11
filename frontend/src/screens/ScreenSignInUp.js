
import React, {useState, useEffect} from 'react';
import '../App.css';
import {Card} from 'antd';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

function ScreenSignInUp(props) {

  const [signUpUsername, setSignUpUsername] = useState('')
  const [signUpEmail, setSignUpEmail] = useState('')
  const [signUpPassword, setSignUpPassword] = useState('')

  const [signInEmail, setSignInEmail] = useState('')
  const [signInPassword, setSignInPassword] = useState('')

  const [userExists, setUserExists] = useState(false)

  const [listErrorsSignin, setErrorsSignin] = useState([])
  const [listErrorsSignup, setErrorsSignup] = useState([])

  var handleSubmitSignup = async () => {
    
    const data = await fetch('/sign-up', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `username=${signUpUsername}&email=${signUpEmail}&password=${signUpPassword}`
    })

    const body = await data.json()

    if(body.result == true){
      props.addToken(body.token)
      setUserExists(true)
      
    } else {
      setErrorsSignup(body.error)
    }
  }

  var handleSubmitSignin = async () => {
 
    const data = await fetch('/sign-in', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `email=${signInEmail}&password=${signInPassword}`
    })

    const body = await data.json()

    if(body.result == true){
      props.addToken(body.token)
      setUserExists(true)
      
    }  else {
      setErrorsSignin(body.error)
    }
  }

  if(userExists){
    return <Redirect to='/screenroutine' />
  }

  var tabErrorsSignin = listErrorsSignin.map((error,i) => {
    return(<p>{error}</p>)
  })

  var tabErrorsSignup = listErrorsSignup.map((error,i) => {
    return(<p>{error}</p>)
  })

  

  return (
    <div style={{position: 'relative'}}>
    <div className="signup-page" >
  

 {/* Screen sign up */}
 <br/>
<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', }}>
<Card hoverable style={styles.form}> 
<Form  >

      <FormGroup >

        <p style={{fontWeight: 'bold', fontSize: '20px', alignItems: 'center', justifyContent : 'center'}}>S'inscrire</p>

        {/* <Label for="exampleUsername" className="mr-sm-2">Username</Label> */}
        <Input onChange={(e) => setSignUpUsername(e.target.value)} style={styles.input} type="username" name="username" id="exampleUsername" placeholder="Prénom" />
      </FormGroup>

      <FormGroup >
        {/* <Label for="exampleEmail" className="mr-sm-2">Email</Label> */}
        <Input  onChange={(e) => setSignUpEmail(e.target.value)} style={styles.input}  type="email" name="email" id="exampleEmail" placeholder="Email" />
      </FormGroup>

      <FormGroup>
        {/* <Label for="examplePassword" className="mr-sm-2">Password</Label> */}
        <Input onChange={(e) => setSignUpPassword(e.target.value)} style={styles.input} type="password" name="password" id="examplePassword" placeholder="Mot de passe" />
      </FormGroup>
      
      {tabErrorsSignup}

      <Button  onClick={() => handleSubmitSignup()} style={styles.button}>CONNEXION</Button>
</Form>

{/* Screen sign in */}

</Card >
<Card hoverable style={styles.form}>  
<Form   >

      <FormGroup >
      <p style={{fontWeight: 'bold', fontSize: '20px', alignItems: 'center', justifyContent : 'center'}}>Se connecter</p>
        {/* <Label for="exampleEmail" className="mr-sm-2">Email</Label> */}
        <Input onChange={(e) => setSignInEmail(e.target.value)} style={styles.input}  type="email" name="email" id="exampleEmail" placeholder="Email" />
      </FormGroup>

      <FormGroup>
        {/* <Label for="examplePassword" className="mr-sm-2">Password</Label> */}
        <Input onChange={(e) => setSignInPassword(e.target.value)} style={styles.input} type="password" name="password" id="examplePassword" placeholder="Mot de passe" />
      </FormGroup>
      {tabErrorsSignin}
     <p>Mot de passe oublié ?</p>
      <Button  onClick={() => handleSubmitSignin()}  style={styles.button}>CONNEXION</Button>
</Form>
</Card>
</div>


      </div>
      </div>
  );
}

const styles = ({
 
  form: {
   borderRadius: '5px',
   height: '290px',
   backgroundColor: 'white',
   justifyContent: 'center',
   alignItems: 'center',
   borderColor: 'grey',
   marginTop: '8%',
   marginRight: '2%'
   
  },

  input: {
 
    borderRadius: '6px',
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E5E5E5',
    marginBottom: '5%'
 
 
   },

   button: {
 
    borderRadius: '6px',
    backgroundColor: '#262626',
    color: "white",
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E5E5E5',
    height: '40px',
    marginBottom: '5px'
 
 
   }

 });

 function mapDispatchToProps(dispatch){
  return {
    addToken: function(token){
      console.log(token, "TOKEN ======>")
      dispatch({type: 'addToken', token: token})
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ScreenSignInUp)
