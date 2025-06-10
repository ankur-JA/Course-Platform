import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Card, Typography } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userState } from '../store/atoms/user.js';
import { BASE_URL } from '../config.js';

function UserSignin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);

  return (
    <div>
      <div
        style={{
          paddingTop: 150,
          marginBottom: 10,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography variant={'h6'}>Sign in to continue</Typography>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card variant={'outlined'} style={{ width: 400, padding: 20 }}>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            label='Email'
            variant='outlined'
          />
          <br />
          <br />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            label='Password'
            variant='outlined'
            type='password'
          />
          <br />
          <br />
          <Button
            size={'large'}
            variant='contained'
            onClick={async () => {
              const res = await axios.post(
                `${BASE_URL}/user/login`,
                {
                  username: email,
                  password,
                },
                {
                  headers: {
                    'Content-type': 'application/json',
                  },
                }
              );
              localStorage.setItem('token', res.data.token);
              setUser({ userEmail: email, role: 'user', isLoading: false });
              navigate('/user/courses');
            }}
          >
            Signin
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default UserSignin;
