import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import logo from '../image/logo-nali.png';
import { Nav, NavItem, NavLink} from 'reactstrap';
import {Link, Redirect,  } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = (token) => {
    console.log("test")
    props.addToken(token)
  };

  return (
    <div className={classes.root}>
      
      <AppBar position="static" color="">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor=""
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
           <Nav style={navigation} className='active'>
  
          <img style={{width: 100, height: 100, marginTop: '-1%', marginLeft: '-2%', marginRight: '1%'}} src={logo}></img>  
          <Link to='/'><p style={navitem} > Home</p></Link>
          <Link to='/screenroutine'><p style={navitem}>Routine</p></Link>
          <Link to='/screenselectedphoto'><p style={navitem} >Journal</p></Link>
          <Link to='/screenhairdresser'><p style={navitem}>Se coiffer</p></Link>
          <Link to='/screenbecomeahairdress'><p style={navitem}>Devenir coiffeuse</p></Link>
          
        </Nav>
        </Tabs>
      </AppBar>
      
    
    </div>
  );
}

const navigation =
 {
    height: '90px',
    width: '100%',
    backgroundColor: '#ffffff',
    marginTop: '1%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }

  const navitem =
 {
  fontFamily: 'Roboto', 
  fontSize: '30px',
  backgroundColor: "",
  marginRight: '60px',
  marginBottom: 0,
  float: 'left',
  color: 'black',
  }
