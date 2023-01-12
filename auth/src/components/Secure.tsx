import { Paper } from "@mui/material";

export default function Secure() {
    const paperstyle= {padding:20, height:'70vh', width:'50%', margin:"20px auto", display: "block", overflow: "auto" };

    return (
        <Paper elevation={10} style={paperstyle}>
            <h1>You have reached the secure site! Yay!</h1>
        </Paper>
    );
}