import React from 'react';
import { Link } from 'react-router-dom';
import ContrastIcon from '@mui/icons-material/Contrast';
import { Button } from '@mui/material';
import useThemeChange from "../Custom-hook/useTheme-change";
import './header.css';

const Header =()=>{
const {value, toggle} = useThemeChange();
    
return(
<nav className={`header ${value ? ' dark' : 'light'}`}>
    <div >
        <h1 className={value ? 'text-white' : ''}>
            Portfolio
        </h1>
    </div>
    <div className='not-found'>
        <ul className='not-found list-style' >
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/about" >About</Link></li>
            <li><Link to="/projects" >Projects</Link></li>
            <li><Link to="/contact" >Contact</Link></li>
        </ul>
            <Button onClick={toggle} color='error' disableRipple> 
                <ContrastIcon  sx={{margin:"10px"}} />
            </Button>
    </div>
       
</nav>)
}
export default Header;