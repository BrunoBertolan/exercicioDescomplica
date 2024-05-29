import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Grid } from '@mui/material';

const Login = () => {
    const [login, setLogin] = useState ('');
    return (
        <Grid item xs={12}>
            <FormControl fullWidth>
                <Input id="login_nome" aria-describedby="login_nome_helper_text" value={login} onChange={e => { setLogin(e.target.value) }} />
            <FormHelperText id="login_nome_helper_text">Login.</FormHelperText>
            </FormControl>
          </Grid>
        
    )
}
const styles = {
    card: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '60%',
      bgcolor: 'background.paper',
      p: 4,
    },
    cardContent: {
      width: '95%',
      maxWidth: '100%',
    },
    input: {
      color: 'rgba(0, 0, 0, 0.6)',
      fontWeight: 400,
      paddingLeft: '13px',
    },
    select: {
      color: 'rgba(0, 0, 0, 0.6)',
      fontWeight: 400,
    },
  };
  
export default Login;
