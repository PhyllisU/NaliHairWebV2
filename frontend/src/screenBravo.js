import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <p>List Based</p>
      <Nav>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Disabled Link</NavLink>
        </NavItem>
      </Nav>
      <hr />
      <p>Link Based</p>
      <Nav style={navigation}>
        <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
      </Nav>
    </div>
  );
}



const navigation =
 {
    height: '130px',
    width: '100%',
    backgroundColor: '#ffffff',
    display: 'flex',
    padding: 0,
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 3px 6px 1px',
    float: 'left',
  }


export default Example;