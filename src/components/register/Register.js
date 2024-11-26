import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  registerStart,
  registerSuccess,
  registerFailure,
} from '../../features/registerSlice';

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.register);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(registerStart());
    try {
      const newUser = { id: Date.now(), email, password, username };
      if (email && password && username) {
        dispatch(registerSuccess(newUser));
        navigate('/login');
      } else {
        throw new Error('All fields are required');
      }
    } catch (err) {
      dispatch(registerFailure(err.message));
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
          type="email"
          id="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
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
          {loading ? 'Signing up...' : 'Sign up'}
        </button>

        <p>Already have an account?</p>

        <button
          type="button"
          onClick={() => {
            navigate('/login');
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Register;
