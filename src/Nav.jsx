import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react';

const MenuItem = ({name, children, display,activeItem, handleItemClick}) => (
    <Menu.Item name={name} active={activeItem === name} style={activeItem === name? {color:'#f2711c'} :{}} onClick={handleItemClick}>
    {children}
    {display}
  </Menu.Item>

)

const Nav = (props) => (
    <div style={{width:'100%', textAlign:'center', maxHeight:'75px', position:'fixed', zIndex:'9000'}}>
      <Menu  compact icon='labeled'>
        <MenuItem name='Home' display='Home' {...props} >
          <Icon name='home' />
        </MenuItem>

      

        <MenuItem name='Summary' display='Summary' {...props} >
          <Icon name='male' />
        </MenuItem>

        <MenuItem name='Work' display='Work' {...props} >
          <Icon name='code' />
        </MenuItem>
   
      </Menu>
      </div>
    )

export default Nav;