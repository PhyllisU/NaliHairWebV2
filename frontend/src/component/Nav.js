import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faUser } from '@fortawesome/free-regular-svg-icons';
//import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import '../App.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
//import 'bootstrap/dist/css/bootsrap.min.css'


const Navigation = (props) => {
  //const [navbar, setNavbar] = useState(false);

//   function handlesubmit() {
//     setNavbar(true);
//  if(navbar) {
//    navitem.backgroundColor="yellow" }
//    else {
//     navitem.backgroundColor="white"

//    }
//  }


return (
  <Nav style={navigation} className='active'>


       <NavLink href='/'><p style={navitem} >Home</p></NavLink>
        <NavLink href='/screenroutine'><p style={navitem}>Routine</p></NavLink>
        <NavLink href='/screenprogram'><p style={navitem}>Programme</p></NavLink>
        <NavLink href='/screenjournal'><p style={navitem}>Journal</p></NavLink>
        <NavLink href='/screenhairdresser'><p style={navitem}>Se coiffer</p></NavLink>
    
    
  </Nav>
  );
}

const navigation =
 {
    height: '130px',
    width: '100%',
    backgroundColor: '#ffffff',
    //padding: 0,
    marginLeft: '20%',
    alignItems: 'center',
    justifyContent: 'space-around',
    
    //boxShadow: '0px 3px 6px 1px',
  }

  const navitem =
 {
  fontFamily: 'Roboto', 
  fontSize: '30px',
  backgroundColor: "",
  // color: '#262626',
  marginRight: '60px',
  marginBottom: 0,
  float: 'left',
  color: 'black',
  }



export default Navigation;


