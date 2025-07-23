import React,{useState} from "react";
import { Box, Container, TextField, Typography, Button } from "@mui/material";
import "../../index.css"





export default function Login() {
    const [email,setEmail]=useState({username:"",email:"",text:""})

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setEmail((prevState)=>({
            ...prevState,
            [name]:value
        }))
    }
    const submitDetails=(e)=>{
        e.preventdefault();
    }
    
    return (
        <>
            
           
            <Container component="main" maxWidth="xs" sx={{marginTop:"5rem"}} >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: "center"
                    }}>
                    <Box component="form" onSubmit={submitDetails} sx={{ mt: 1 }}>
                        <Typography variant="h4" textAlign={'center'}>
                            Contact Form
                        </Typography>
                        <TextField
                            margin="normal"
                            fullWidth
                            label=" user name"
                            autoComplete="off"
                            type={"email"}
                            required
                            value={email.username}
                            onChange={() => handleChange}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            label="email"
                            type="password"
                            value={email.email}
                             onChange={() => handleChange}
                        />
                         <TextField
                                label="Your Message"
                                multiline
                                rows={4}         
                                fullWidth        
                                variant="outlined" 
                        />
                       
                        <Button
                        className="button-style"
                            type="submit"
                            variant="contained"
                            fullWidth 
                            sx={{ mt: 3, mb: 2,backgroundColor:"#006aff",borderRadius:"20px",color:"white" }}
                            
                        >
                            Contact Me
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    )
}