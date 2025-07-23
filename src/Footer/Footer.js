import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer =()=>{
    return(
        <footer className="footer">
            <div className="container">
                <div className="text-center">
                    <a href="https://www.linkedin.com/in/venkatesh-naidu-739356360/"><LinkedInIcon/></a>
                    <a href="https://github.com/Kumarapuvenkatesu"><GitHubIcon/></a>
                    <a href=" https://outlook.com"><MailOutlineIcon/></a>
                </div>
            </div>
        </footer>
    );
}
export default Footer;