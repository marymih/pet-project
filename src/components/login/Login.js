import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  loginStart,
  loginSuccess,
  loginFailure,
} from '../../features/authSlice';

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      //simulate API request
      const user = { id: 1, email: 'test@example.com', username }; // simulate user data
      if (username === 'User' && password === 'password') {
        dispatch(loginSuccess(user));
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err) {
      dispatch(loginFailure(err.message));
    }
  };

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>}
        <input
          type="text"
          id="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
        />

        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Logged in...' : 'Login'}
        </button>

        <p>Don't have an account?</p>

        <button
          type="button"
          onClick={() => {
            navigate('/register');
          }}
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Login;
