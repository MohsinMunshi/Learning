import logo from './logo.svg';
import React,{useState} from "react";
import './App.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import {FormLabel} from "@mui/material";
import Button from '@mui/material/Button';
import {login,resellers} from "./api";
import CircularProgress from '@mui/material/CircularProgress';

function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const handleLogin = async () => {
        setIsLoading(true)
        console.log(username,password)
        const response = await login({
            username:username,
            password:password
        })
        console.log(response.data)
        const rese = await resellers()
        console.log(rese.data)
        setIsLoading(false)
    }

    return (
      <Container>
          <Box sx={{ bgcolor: '#cfe8fc', height: '100vh',display:"flex",alignItems:"center",justifyContent:"center" }}>
              <Paper sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",height:"300px"}}>
                  <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                      <FormLabel>Username</FormLabel>
                      <OutlinedInput
                          id="outlined-adornment-weight"
                          value={username}
                          onChange={event => setUsername(event.target.value)}
                          aria-describedby="outlined-weight-helper-text"
                          inputProps={{
                              'aria-label': 'weight',
                          }}
                      />
                  </FormControl>
                  <FormControl sx={{ m: 1, width: '100%'  }} variant="outlined">
                      <FormLabel>Password</FormLabel>
                      <OutlinedInput
                          id="outlined-adornment-weight"
                          value={password}
                          type="password"
                          onChange={event => setPassword(event.target.value)}
                          aria-describedby="outlined-weight-helper-text"
                          inputProps={{
                              'aria-label': 'weight',
                          }}
                      />
                  </FormControl>
                  <Button onClick={handleLogin} variant="contained"  color="error" sx={{width:"100%"}}>{isLoading ? <CircularProgress /> : "Login"}</Button>
              </Paper>
          </Box>
      </Container>
  );
}
export default App;