import { Typography, Grid, Paper, Button, FilledInput } from "@mui/material";
import { useState } from "react";
import auth0 from 'auth0-js';

export default function Register() {

  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  console.log(process.env.REACT_APP_AUTH0_ISSUER_BASE_URL)
  const paperstyle= {padding:20, height:'70vh', width:'50%', margin:"20px auto", display: "block", overflow: "auto" };
  var webAuth = new auth0.WebAuth({
    domain: process.env.REACT_APP_AUTH0_ISSUER_BASE_URL!,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID!,
    redirectUri: 'http:localhost:3000/schedule',
    response_type: 'code token',
    audience: process.env.REACT_APP_AUTH0_AUDIENCE!,
  })

  const handleSignUp = () => {
    webAuth.signup({
      connection: process.env.REACT_APP_CONNECTION!,
      email: email,
      password: password,
      userMetadata: {
        firstName: firstName,
        lastName:lastName,
      }
    }, function (err) { 
      if (err) return alert('Something went wrong: ' + err.errorDescription + err.code + err.description + err.error_description + err.statusCode + err.statusText); 
        return alert('success signup without login!') 
    });
  }

  return (
    <Grid container>
      <Paper elevation={10} style={paperstyle}>
        <Grid container alignContent='center'>
            <Typography>
                Don&apos;t have an account?
                <br/>
                Register Below
            </Typography>
        </Grid>
          <FilledInput name='Email' placeholder='Enter Email' value={email} onChange={(event)=>setEmail(event.target.value)}
                      fullWidth required/>
          <FilledInput name='Password' placeholder='Enter Password'  type='password' value={password} onChange={(event)=>setPassword(event.target.value)}
                      fullWidth required/>
          <FilledInput name='First Name' placeholder='Enter Your First Name' value={firstName} onChange={(event)=>setFirstName(event.target.value)}
                      fullWidth required/>
          <FilledInput name='Last Name' placeholder='Enter Your Last Name' value={lastName} onChange={(event)=>setLastName(event.target.value)}
                      fullWidth required/>
        <Button fullWidth disabled={!email || !password || !firstName || !lastName} onClick={() => handleSignUp()}>Register Me</Button>
      </Paper>
    </Grid>
  );
}