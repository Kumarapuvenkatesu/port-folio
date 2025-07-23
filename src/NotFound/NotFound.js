import React from 'react';
import { useNavigate } from 'react-router-dom';
import profile from "../../src/Assets/2676383.jpg"
import { Button } from "@mui/material";

const NotFound=()=>{
    const navigate = useNavigate();
    const gotoHome = () => {
      navigate ("/");
    };
return(
    <div className='not-found not-found1'>
        <img src={profile} alt="notfoud" className='img-width'/>
        <h1 className='page-animation'>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Button onClick={()=>gotoHome()}>Go to home</Button>
    </div>
)
}

export default NotFound;