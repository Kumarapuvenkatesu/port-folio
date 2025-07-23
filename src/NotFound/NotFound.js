import React from 'react';
import profile from "../../src/Assets/2676383.jpg"

const NotFound=()=>{
return(
    <div className='not-found not-found1'>
        <img src={profile} alt="notfoud" className='img-width'/>
        <h1 className='page-animation'>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
    </div>
)
}

export default NotFound;