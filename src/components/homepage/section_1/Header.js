import React from 'react'
import '../../../pages/homepage/Homepage.css'
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { ReactComponent as PorscheLogo } from '../../../resources/homepage/01_section/logo_long.svg'

const Header = () => {
  return (
    <div className='Header_Container'>
      <Button><MenuIcon className='Header_Menu'/>Menu</Button>
      <PorscheLogo className='Header_logo'/>
      <Button className='Header_Search'><SearchIcon/></Button>
      <Button className='Header_Account'><PermIdentityIcon/></Button>
    </div>
  )
}

export default Header