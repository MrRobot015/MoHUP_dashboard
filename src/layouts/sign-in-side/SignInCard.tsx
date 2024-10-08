import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiCard from '@mui/material/Card';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';

import ForgotPassword from './ForgotPassword';
import {form as lang} from './lang'
import {SitemarkIcon } from './CustomIcons';
import {useNavigate} from "../../routes/hooks";
import {paths} from "../../routes/paths";

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

export default function SignInCard() {
  const [civilIdError, setCivilIdError] = React.useState(false);
  const [civilIdErrorMessage, setCivilIdErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      civil_id: data.get('civil_id'),
      password: data.get('password'),
    });
    navigate(paths.dashboard.home)
  };

  const validateInputs = () => {
    const civil_id = document.getElementById('civil_id') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;

    let isValid = true;

     if (!civil_id.value || civil_id.value.match(/[^0-9]/)) {
      setCivilIdError(true);
      setCivilIdErrorMessage(lang.civil_id_error);
      isValid = false;
    } else {
      setCivilIdError(false);
      setCivilIdErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage(lang.password_error);
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };

  return (
    <Card variant="outlined">
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <SitemarkIcon />
      </Box>
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
      >
        {lang.signin}
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
      >
        <FormControl>
          <FormLabel htmlFor="civil_id">{lang.civil_id}</FormLabel>
          <TextField
            error={civilIdError}
            helperText={civilIdErrorMessage}
            id="civil_id"
            type="text"
            name='civil_id'
            placeholder={lang.civil_id}
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={civilIdError ? 'error' : 'primary'}
            sx={{ ariaLabel: 'civil_id' }}
          />
        </FormControl>
        <FormControl>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <FormLabel htmlFor="password">{lang.password}</FormLabel>

          </Box>
          <TextField
              error={passwordError}
              helperText={passwordErrorMessage}
              name="password"
              placeholder="••••••"
              type="password"
              id="password"
              autoComplete="current-password"
              required
              fullWidth
              variant="outlined"
              color={passwordError ? 'error' : 'primary'}
          />
        </FormControl>


        <Button type="submit" fullWidth variant="contained" onClick={validateInputs}>
          {lang.signin}
        </Button>
      </Box>
    </Card>
  );
}
