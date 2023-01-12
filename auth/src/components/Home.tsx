
import { Paper, Button } from "@mui/material";
import { Link, } from "react-router-dom";

export default function Home() {
    const paperstyle= {padding:20, height:'70vh', width:'50%', margin:"20px auto", display: "block", overflow: "auto" };

    return (
        <Paper elevation={10} style={paperstyle}>
            <h1>Hello, welcome to authenticate.</h1>
            <Link to="/login">
                <Button id="login" variant="contained" color="secondary">
                    Log In
                </Button>
            </Link>
            <Link to="/signup">
                <Button id="signup" variant="contained" color="secondary">
                    Sign Up
                </Button>
            </Link>
        </Paper>
    );
}