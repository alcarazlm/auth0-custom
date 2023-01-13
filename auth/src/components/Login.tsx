
import { Typography, Button, Paper, Grid, FilledInput } from "@mui/material";
import { useState } from "react";
import auth0 from 'auth0-js';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setError] = useState("");

  var webAuth = new auth0.WebAuth({
    domain: process.env.REACT_APP_AUTH0_ISSUER_BASE_URL!,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID!,
    redirectUri: process.env.REACT_APP_REDIRECT_URL,
    responseType: 'token id_token',
    audience: process.env.REACT_APP_AUTH0_AUDIENCE!,
  })  

  const handleLogin = () => {
    webAuth.login({
      realm: process.env.REACT_APP_CONNECTION,
      email: email,
      password: password,
    }, function (err) { 
        if (err) setError(err.errorDescription!); 
        // return alert('success signup without login!') 
    });
  }

  const paperstyle= {padding:20, height:'70vh', width:'50%', margin:"20px auto", display: "block", overflow: "auto" };
  return (
    <Grid container>
      <Paper elevation={10} style={paperstyle}>
        <Grid container alignContent='center'>
            Login
        </Grid>
        <FilledInput name='Username' placeholder='Enter Username' value={email} onChange={(event)=>setEmail(event.target.value)}
                      fullWidth required/>
        <FilledInput name='Password' placeholder='Enter Password'  type='password' value={password} onChange={(event)=>setPassword(event.target.value)}
                    fullWidth required/>
        {/* <Typography>{}</Typography> */}
        {loginError? <Typography>{loginError}</Typography> : <div/>}
        <Button fullWidth disabled={!email || !password } onClick={() => handleLogin()}>Log In</Button>
      </Paper>
    </Grid>
  );
}