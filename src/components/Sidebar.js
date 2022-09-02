import React from 'react';
import styled from 'styled-components';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import {Navbar,NavDropdown} from 'react-bootstrap';

const SidebarNav = styled.nav`
  background: #8277f7;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <SidebarNav sidebar={true}>
          <SidebarWrap>
              <Navbar.Brand className="ml-4 mt-3">
           <img
              alt=""
              src="/assets/img/knightslogo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <span className="ml-2 text-white">
            Knights DB
              </span>
            
          </Navbar.Brand> 
          <NavDropdown.Divider />
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
