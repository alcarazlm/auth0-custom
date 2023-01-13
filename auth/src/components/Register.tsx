import { Typography, Grid, Paper, Button, FilledInput } from "@mui/material";
import { useState } from "react";
import auth0 from 'auth0-js';
import { redirect } from "react-router-dom";

export default function Register() {

  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [signUpError, setError] = useState('')
//   console.log(process.env.REACT_APP_AUTH0_ISSUER_BASE_URL)
  const paperstyle= {padding:20, height:'70vh', width:'50%', margin:"20px auto", display: "block", overflow: "auto" };
  var webAuth = new auth0.WebAuth({
    domain: process.env.REACT_APP_AUTH0_ISSUER_BASE_URL!,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID!,
    redirectUri: process.env.REACT_APP_REDIRECT_URL!,
    // response_type: 'token',
    responseType: 'token id_token',
    audience: process.env.REACT_APP_AUTH0_AUDIENCE!,
  })

  const handleSignUp = () => {
    webAuth.redirect.signupAndLogin({
        connection: process.env.REACT_APP_CONNECTION!,
        email: email,
        password: password,
        userMetadata: {
            firstName: firstName,
            lastName:lastName,
        }
    }, function (err) { 
        if (err) setError(err.errorDescription!); 
        // return alert('success signup without login!') 
        // redirect
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
        {signUpError? <Typography>{signUpError}</Typography> : <div/>}
        <Button fullWidth disabled={!email || !password || !firstName || !lastName} onClick={() => handleSignUp()}>Register Me</Button>
      </Paper>
    </Grid>
  );
}