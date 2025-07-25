import React,{useState,useEffect} from "react";
import { Box, Container, TextField, Typography, Button } from "@mui/material";
import "../../index.css";
import { Helmet } from "react-helmet";
import "./contact.css"

export default function Contact() {
  const [email, setEmail] = useState({ username: "", email: "", text: "" });
  const [animateCard, setAnimateCard] = useState(false);

  useEffect(() => {
    setAnimateCard(true); 
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitDetails = (e) => {
    e.preventDefault();
    // handle submission logic
  };

  return (
    <Container component="div" maxWidth="xs">
      <Helmet>
        <title>Contact-portfolio</title>
        <meta name="description" content="Contact Route" />
      </Helmet>
      <Box
        component="form"
        onSubmit={submitDetails}
        sx={{ my: 4, p: 2 }}
        className={`card ${animateCard ? "animate" : ""}`}
      >
        <Typography variant="h4" textAlign={"center"}>
          Contact Form
        </Typography>
        <TextField
          margin="normal"
          fullWidth
          label="User name"
          name="username"
          autoComplete="off"
          required
          value={email.username}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={email.email}
          onChange={handleChange}
        />
        <TextField
          label="Your Message"
          name="text"
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          value={email.text}
          onChange={handleChange}
        />
        <Button
          className="button-style"
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            mb: 2,
            backgroundColor: "#006aff",
            borderRadius: "20px",
            color: "white",
          }}
        >
          Contact Me
        </Button>
      </Box>
    </Container>
  );
}
